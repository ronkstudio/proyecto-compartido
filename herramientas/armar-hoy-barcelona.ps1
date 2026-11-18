# Baja la agenda cultural oficial del Ayuntamiento de Barcelona ("Agenda cultural de la ciutat de Barcelona", datos abiertos de
# opendata-ajuntament.barcelona.cat, se actualiza todos los días) y arma data/hoy-barcelona.json con los eventos con horario de hoy
# y los próximos días, para la sección "Hoy en Barcelona" (tarjeta #195). Mismo formato que data/hoy.json (ver herramientas/armar-hoy.ps1).
#
# Se usa una o dos veces por día. Funciona en Windows PowerShell 5.1 y en PowerShell 7 (el de GitHub Actions).
#   powershell -ExecutionPolicy Bypass -File herramientas/armar-hoy-barcelona.ps1 -out app/data/hoy-barcelona.json
#
# Cómo lee cada evento: los días y las horas reales están en la tabla de horarios ("timetable"), escrita en catalán
# ("De dilluns a divendres", "Dissabte excepte 26 desembre", "17 novembre i 24 novembre", "a les 20.30 h", "de 10.00 h a 19.00 h").
# Las horas de start_date y end_date no sirven: solo se usan sus fechas.
# Qué deja afuera:
# - Talleres y cursos (son la mayoría de la agenda y piden inscripción).
# - Eventos sin horario que se pueda leer ("Consulteu programació") y los días que el evento no se hace.
# Qué guarda de cada evento: título (en catalán, como viene), fecha y hora, lugar, dirección, distrito, si es gratis y el enlace a su
# página en agenda500.barcelona.cat. Las muestras y ciclos de una semana o más entran marcados con "serie".
# No guarda descripciones ni precios.
param([string]$out = "app/data/hoy-barcelona.json", [int]$dias = 2, [int]$max = 300)
$ErrorActionPreference = "Stop"
try { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 } catch {}

# Hora de Barcelona: el nombre de la zona cambia entre Windows y Linux.
$tz = $null
foreach ($n in @("Europe/Madrid", "Romance Standard Time")) { try { $tz = [TimeZoneInfo]::FindSystemTimeZoneById($n); break } catch {} }
if (-not $tz) { throw "No se encontró la zona horaria de Barcelona." }
$ahora = [DateTime]::UtcNow
$hoyLocal = [TimeZoneInfo]::ConvertTimeFromUtc($ahora, $tz).Date
$desde = $ahora.AddHours(-3)
$inv = [Globalization.CultureInfo]::InvariantCulture

$recurso = "3abb2414-1ee0-446e-9c25-380e938adb73"
$campos = '"register_id","name","start_date","end_date","timetable","addresses_road_name","addresses_start_street_number","addresses_district_name","institution_name"'
$sql = "SELECT $campos FROM `"$recurso`" WHERE `"end_date`" >= '" + $hoyLocal.ToString("yyyy-MM-dd", $inv) + "' AND `"start_date`" <= '" + $hoyLocal.AddDays($dias + 1).ToString("yyyy-MM-dd", $inv) + "' LIMIT 5000"
$fuenteUrl = "https://opendata-ajuntament.barcelona.cat/data/api/action/datastore_search_sql?sql=" + [Uri]::EscapeDataString($sql)
$r = Invoke-WebRequest -Uri $fuenteUrl -UseBasicParsing -TimeoutSec 120 -Headers @{ Accept = "application/json" } -UserAgent "guia-de-viaje/1.0"
$texto = [Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray())
$datos = $texto | ConvertFrom-Json
if (-not $datos.success) { throw "La agenda no respondió bien." }
$eventos = @($datos.result.records)
if ($eventos.Count -eq 0) { throw "La agenda no devolvió eventos." }

$semana = @{ "diumenge" = 0; "dilluns" = 1; "dimarts" = 2; "dimecres" = 3; "dijous" = 4; "divendres" = 5; "dissabte" = 6 }
$orden = @("dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge")
$meses = @{ "gener" = 1; "febrer" = 2; "març" = 3; "abril" = 4; "maig" = 5; "juny" = 6; "juliol" = 7; "agost" = 8; "setembre" = 9; "octubre" = 10; "novembre" = 11; "desembre" = 12 }
$reMes = "(\d{1,2})\s+(?:de\s+|d')?(" + (($meses.Keys) -join "|") + ")"

function Limpiar($s) {
  $s = [string]$s
  $s = $s -replace "<br\s*/?>", " " -replace "</p>", " " -replace "<[^>]+>", "" -replace "&nbsp;", " "
  $s = [Net.WebUtility]::HtmlDecode($s)
  return ($s -replace "\s+", " ").Trim()
}
function Fechas($s) {
  $l = @()
  foreach ($m in [regex]::Matches($s, $reMes)) { $l += ("" + $meses[$m.Groups[2].Value] + "-" + [int]$m.Groups[1].Value) }
  return $l
}
# Lee la columna de días de una fila: qué días de la semana, qué fechas sueltas y qué fechas se excluyen.
function Dias($celda) {
  $t = (Limpiar $celda).ToLower()
  $partes = [regex]::Split($t, "\b(?:excepte|tancat|festius tancat)\b")
  $base = $partes[0]
  $excl = @()
  for ($i = 1; $i -lt $partes.Count; $i++) { $excl += Fechas $partes[$i] }
  $d = @{}
  if ($base -match "cada dia|tots els dies") { 0..6 | ForEach-Object { $d[$_] = $true } }
  foreach ($m in [regex]::Matches($base, "de (\w+) a (\w+)")) {
    $a = [array]::IndexOf($orden, $m.Groups[1].Value); $b = [array]::IndexOf($orden, $m.Groups[2].Value)
    if ($a -ge 0 -and $b -ge $a) { for ($k = $a; $k -le $b; $k++) { $d[$semana[$orden[$k]]] = $true } }
  }
  foreach ($w in $semana.Keys) { if ($base -match ("\b" + $w + "\b")) { $d[$semana[$w]] = $true } }
  $f = @()
  if ($d.Count -eq 0) { $f = Fechas $base }
  return @{ semana = $d; fechas = $f; excl = $excl; ok = ($d.Count -gt 0 -or $f.Count -gt 0) }
}
# Lee la columna de horas: la primera hora de inicio y, si hay, la de fin ("de 10.00 h a 19.00 h", "a les 20.30 h").
function Horas($celda) {
  $t = Limpiar $celda
  $m = [regex]::Match($t, "(\d{1,2})[.:](\d{2})\s*h(?:\s*a\s*(?:les\s*)?(\d{1,2})[.:](\d{2})\s*h)?")
  if (-not $m.Success) { return $null }
  $ini = "{0:00}:{1}" -f [int]$m.Groups[1].Value, $m.Groups[2].Value
  $fin = ""
  if ($m.Groups[3].Success) { $fin = "{0:00}:{1}" -f [int]$m.Groups[3].Value, $m.Groups[4].Value }
  return @{ ini = $ini; fin = $fin }
}
function Slug($s) {
  $s = ([string]$s).Normalize([Text.NormalizationForm]::FormD) -replace "\p{Mn}", ""
  $s = ($s.ToLower() -replace "[^a-z0-9]+", "-").Trim("-")
  if ($s.Length -gt 80) { $s = $s.Substring(0, 80).Trim("-") }
  if (-not $s) { $s = "activitat" }
  return $s
}
# PowerShell 7 (el de GitHub) convierte solo las fechas del JSON en DateTime; PowerShell 5.1 las deja como texto.
function Dia($v) {
  if ($v -is [DateTime]) { return $v.Date }
  return [DateTime]::ParseExact(([string]$v).Substring(0, 10), "yyyy-MM-dd", $inv)
}
function Utc($dia, $hhmm) {
  $local = [DateTime]::ParseExact($dia.ToString("yyyy-MM-dd", $inv) + " " + $hhmm, "yyyy-MM-dd HH:mm", $inv)
  return [TimeZoneInfo]::ConvertTimeToUtc([DateTime]::SpecifyKind($local, [DateTimeKind]::Unspecified), $tz)
}

$lista = New-Object System.Collections.ArrayList
$vistos = @{}
$ids = @{}
foreach ($e in $eventos) {
  $id = ([string]$e.register_id).Trim([char]0xFEFF).Trim()
  if (-not $id -or $ids.ContainsKey($id)) { continue }
  $ids[$id] = $true
  $titulo = ((Limpiar $e.name) -replace "\*\s*NOU\s*\*", "").Trim()
  if (-not $titulo -or $titulo -match "^(Taller|Tallers|Curs|Cursos)\b") { continue }
  if (-not $e.start_date -or -not $e.end_date) { continue }
  $ini = Dia $e.start_date
  $finF = Dia $e.end_date
  $serie = (($finF - $ini).TotalDays -ge 7)
  # Filas de la tabla de horarios: día, hora y precio.
  $filas = @()
  foreach ($m in [regex]::Matches([string]$e.timetable, '(?s)<td class="timetable-day"[^>]*>(.*?)</td>\s*<td class="timetable-hour"[^>]*>(.*?)</td>(?:\s*<td class="timetable-price"[^>]*>(.*?)</td>)?')) {
    $dd = Dias $m.Groups[1].Value
    $hh = Horas $m.Groups[2].Value
    if ($dd.ok -and $hh) { $filas += @{ d = $dd; h = $hh; precio = (Limpiar $m.Groups[3].Value) } }
  }
  if ($filas.Count -eq 0) { continue }
  $dir = ((Limpiar $e.addresses_road_name) + " " + (Limpiar $e.addresses_start_street_number)).Trim()
  $url = "https://agenda500.barcelona.cat/es/detall/" + (Slug $titulo) + "_" + $id + ".html"
  for ($k = 0; $k -le $dias; $k++) {
    $dia = $hoyLocal.AddDays($k)
    if ($dia -lt $ini -or $dia -gt $finF) { continue }
    $clave = "" + $dia.Month + "-" + $dia.Day
    $fila = $null
    foreach ($f in $filas) {
      if ($f.d.excl -contains $clave) { continue }
      if ($f.d.semana.ContainsKey([int]$dia.DayOfWeek) -or $f.d.fechas -contains $clave) { $fila = $f; break }
    }
    if (-not $fila) { continue }
    $utc = Utc $dia $fila.h.ini
    if ($utc -lt $desde) { continue }
    $fin = ""
    if ($fila.h.fin -and $fila.h.fin -gt $fila.h.ini) { $fin = (Utc $dia $fila.h.fin).ToString("yyyy-MM-ddTHH:mm:ssZ") }
    $k2 = $url + "|" + $utc.ToString("o")
    if ($vistos.ContainsKey($k2)) { continue }
    $vistos[$k2] = $true
    [void]$lista.Add([ordered]@{
      t = $titulo
      ini = $utc.ToString("yyyy-MM-ddTHH:mm:ssZ")
      lugar = (Limpiar $e.institution_name)
      dir = $dir
      barrio = (Limpiar $e.addresses_district_name)
      url = $url
      gratis = ($fila.precio -match "(?i)gratu|gratis|entrada lliure")
      fin = $fin
      serie = $serie
    })
  }
}
$ordenados = @($lista | Sort-Object { $_.serie }, { $_.ini } | Select-Object -First $max | Sort-Object { $_.ini })
$doc = [ordered]@{
  actualizado = $ahora.ToString("yyyy-MM-ddTHH:mm:ssZ")
  fuente = "Agenda cultural oficial del Ayuntamiento de Barcelona (opendata-ajuntament.barcelona.cat). Cada evento enlaza a su página en barcelona.cat."
  eventos = $ordenados
}
$json = $doc | ConvertTo-Json -Depth 6 -Compress
$dirOut = Split-Path -Parent $out
if ($dirOut -and -not (Test-Path $dirOut)) { New-Item -ItemType Directory -Path $dirOut | Out-Null }
[IO.File]::WriteAllText((Join-Path (Get-Location) $out), $json, (New-Object Text.UTF8Encoding($false)))
Write-Host ("Listo: " + $ordenados.Count + " funciones con horario entre hoy y los próximos " + $dias + " días, de " + $ids.Count + " eventos de la agenda.")
