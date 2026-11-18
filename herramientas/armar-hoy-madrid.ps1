# Baja la agenda oficial del Ayuntamiento de Madrid ("Actividades culturales y de ocio municipal en los próximos 100 días",
# datos abiertos de datos.madrid.es) y arma data/hoy-madrid.json con los eventos con horario de hoy y los próximos días,
# para la sección "Hoy en Madrid" (tarjeta #191). Mismo formato que data/hoy.json (ver herramientas/armar-hoy.ps1).
#
# Se usa una o dos veces por día. Funciona en Windows PowerShell 5.1 y en PowerShell 7 (el de GitHub Actions).
#   powershell -ExecutionPolicy Bypass -File herramientas/armar-hoy-madrid.ps1 -out app/data/hoy-madrid.json
#
# Qué deja afuera:
# - Eventos sin horario (son muestras o actividades de todo el día: no se sabe cuándo mostrarlos).
# - Los días que el evento no se hace: los que no figuran en su repetición semanal y los días excluidos.
# Qué guarda de cada evento: título (en castellano, como viene), fecha y hora, lugar, dirección, distrito, si es gratis y el enlace.
# Las muestras y ciclos de una semana o más entran marcados con "serie" y la guía los muestra después de los eventos puntuales.
# No guarda descripciones ni precios.
param([string]$out = "app/data/hoy-madrid.json", [int]$dias = 2, [int]$max = 300)
$ErrorActionPreference = "Stop"
try { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 } catch {}

$fuenteUrl = "https://datos.madrid.es/egob/catalogo/206974-0-agenda-eventos-culturales-100.json"
$r = Invoke-WebRequest -Uri $fuenteUrl -UseBasicParsing -TimeoutSec 120 -Headers @{ Accept = "application/json" } -UserAgent "guia-de-viaje/1.0"
$texto = [Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray())
$datos = $texto | ConvertFrom-Json
$eventos = @($datos.'@graph')
if ($eventos.Count -eq 0) { throw "La agenda no devolvió eventos." }

# Hora de Madrid: el nombre de la zona cambia entre Windows y Linux.
$tz = $null
foreach ($n in @("Europe/Madrid", "Romance Standard Time")) { try { $tz = [TimeZoneInfo]::FindSystemTimeZoneById($n); break } catch {} }
if (-not $tz) { throw "No se encontró la zona horaria de Madrid." }

$ahora = [DateTime]::UtcNow
$hoyLocal = [TimeZoneInfo]::ConvertTimeFromUtc($ahora, $tz).Date
$desde = $ahora.AddHours(-3)
$inv = [Globalization.CultureInfo]::InvariantCulture
$diasSemana = @("SU", "MO", "TU", "WE", "TH", "FR", "SA")
# Los distritos vienen sin espacios ni tildes al final de un enlace: así se muestran bien.
$distritos = @{ "Chamartin" = "Chamartín"; "Chamberi" = "Chamberí"; "CiudadLineal" = "Ciudad Lineal"; "Fuencarral-ElPardo" = "Fuencarral-El Pardo";
  "PuenteDeVallecas" = "Puente de Vallecas"; "SanBlas-Canillejas" = "San Blas-Canillejas"; "Tetuan" = "Tetuán"; "Vicalvaro" = "Vicálvaro"; "VillaDeVallecas" = "Villa de Vallecas" }

function Fecha($s) {
  if (-not $s -or ([string]$s).Length -lt 10) { return $null }
  return [DateTime]::ParseExact(([string]$s).Substring(0, 10), "yyyy-MM-dd", $inv)
}

$lista = New-Object System.Collections.ArrayList
$vistos = @{}
foreach ($e in $eventos) {
  $web = [string]$e.link
  if ($web -notmatch "^https?://") { continue }   # la guía solo muestra eventos que enlazan a su fuente
  $web = $web -replace "^http://", "https://"
  $titulo = ([string]$e.title).Trim()
  $hora = ([string]$e.time).Trim()
  if (-not $titulo -or $hora -notmatch "^\d{1,2}:\d{2}$" -or $hora -match "^0?0:00$") { continue }   # sin horario (00:00 = todo el día)
  $ini = Fecha $e.dtstart; $finF = Fecha $e.dtend
  if (-not $ini) { continue }
  if (-not $finF) { $finF = $ini }
  $serie = (($finF - $ini).TotalDays -ge 7)
  $diasRep = @()
  if ($e.recurrence -and $e.recurrence.days) { $diasRep = ([string]$e.recurrence.days).Split(",") | ForEach-Object { $_.Trim() } }
  $excluidos = @{}
  foreach ($x in ([string]$e.'excluded-days').Split(";")) {
    $x = $x.Trim(); if (-not $x) { continue }
    try { $excluidos[[DateTime]::ParseExact($x, "d/M/yyyy", $inv).ToString("yyyy-MM-dd")] = $true } catch {}
  }
  $fin = ""
  $hFin = ""
  if ($e.dtend -and ([string]$e.dtend).Length -ge 16) { $hFin = ([string]$e.dtend).Substring(11, 5) }
  $barrio = ""
  if ($e.address -and $e.address.district) { $barrio = ([string]$e.address.district.'@id') -replace ".*/", "" }
  if ($distritos.ContainsKey($barrio)) { $barrio = $distritos[$barrio] }
  $dir = ""
  if ($e.address -and $e.address.area) { $dir = ([string]$e.address.area.'street-address').Trim() }
  if ($dir) { $dir = (Get-Culture).TextInfo.ToTitleCase($dir.ToLower()) }
  for ($k = 0; $k -le $dias; $k++) {
    $dia = $hoyLocal.AddDays($k)
    if ($dia -lt $ini -or $dia -gt $finF) { continue }
    if ($diasRep.Count -gt 0 -and ($diasRep -notcontains $diasSemana[[int]$dia.DayOfWeek])) { continue }
    if ($excluidos.ContainsKey($dia.ToString("yyyy-MM-dd"))) { continue }
    $local = [DateTime]::ParseExact($dia.ToString("yyyy-MM-dd") + " " + $hora.PadLeft(5, "0"), "yyyy-MM-dd HH:mm", $inv)
    $utc = [TimeZoneInfo]::ConvertTimeToUtc([DateTime]::SpecifyKind($local, [DateTimeKind]::Unspecified), $tz)
    if ($utc -lt $desde) { continue }
    $fin = ""
    if ($hFin -match "^\d{2}:\d{2}$" -and $hFin -ne "23:59") {
      $finLocal = [DateTime]::ParseExact($dia.ToString("yyyy-MM-dd") + " " + $hFin, "yyyy-MM-dd HH:mm", $inv)
      if ($finLocal -gt $local -and ($finLocal - $local).TotalMinutes -le 720) { $fin = [TimeZoneInfo]::ConvertTimeToUtc([DateTime]::SpecifyKind($finLocal, [DateTimeKind]::Unspecified), $tz).ToString("yyyy-MM-ddTHH:mm:ssZ") }
    }
    $clave = $web + "|" + $utc.ToString("o")
    if ($vistos.ContainsKey($clave)) { continue }
    $vistos[$clave] = $true
    [void]$lista.Add([ordered]@{
      t = $titulo
      ini = $utc.ToString("yyyy-MM-ddTHH:mm:ssZ")
      lugar = ([string]$e.'event-location').Trim()
      dir = $dir
      barrio = $barrio
      url = $web
      gratis = ([string]$e.free -eq "1")
      fin = $fin
      serie = $serie
    })
  }
}
$orden = @($lista | Sort-Object { $_.ini } | Select-Object -First $max)
$doc = [ordered]@{
  actualizado = $ahora.ToString("yyyy-MM-ddTHH:mm:ssZ")
  fuente = "Agenda oficial del Ayuntamiento de Madrid (datos.madrid.es). Cada evento enlaza a su página en madrid.es."
  eventos = $orden
}
$json = $doc | ConvertTo-Json -Depth 6 -Compress
$dirOut = Split-Path -Parent $out
if ($dirOut -and -not (Test-Path $dirOut)) { New-Item -ItemType Directory -Path $dirOut | Out-Null }
[IO.File]::WriteAllText((Join-Path (Get-Location) $out), $json, (New-Object Text.UTF8Encoding($false)))
Write-Host ("Listo: " + $orden.Count + " funciones con horario entre hoy y los próximos " + $dias + " días, de " + $eventos.Count + " eventos de la agenda.")
