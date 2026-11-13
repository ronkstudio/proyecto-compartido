# Baja la agenda oficial de la Ciudad de París ("Que faire à Paris", datos abiertos de opendata.paris.fr)
# y arma data/hoy-paris.json con los eventos con horario de hoy y los próximos días, para la sección "Hoy en París" (tarjeta #102).
# Mismo formato que data/hoy.json (ver herramientas/armar-hoy.ps1).
#
# Se usa una o dos veces por día. Funciona en Windows PowerShell 5.1 y en PowerShell 7 (el de GitHub Actions).
#   powershell -ExecutionPolicy Bypass -File herramientas/armar-hoy-paris.ps1 -out app/data/hoy-paris.json
#
# Qué deja afuera:
# - Eventos sin fechas y horas puntuales (las muestras de todo el día no traen "occurrences").
# - Eventos fuera de París (código postal que no empieza con 75) o sin página web.
# Qué guarda de cada evento: título (en francés, como viene), fecha y hora, lugar, dirección, distrito, si es gratis y el enlace.
# No guarda descripciones ni fotos.
param([string]$out = "app/data/hoy-paris.json", [int]$dias = 2, [int]$max = 300)
$ErrorActionPreference = "Stop"
try { [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12 } catch {}

$base = "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records"
function Bajar($q) {
  $r = Invoke-WebRequest -Uri "$base`?$q" -UseBasicParsing -TimeoutSec 60 -Headers @{ Accept = "application/json" }
  $t = [Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray())
  return ($t | ConvertFrom-Json)
}
# Hora de París: el nombre de la zona cambia entre Windows y Linux.
$tz = $null
foreach ($n in @("Europe/Paris", "Romance Standard Time")) { try { $tz = [TimeZoneInfo]::FindSystemTimeZoneById($n); break } catch {} }
if (-not $tz) { throw "No se encontró la zona horaria de París." }

$ahora = [DateTime]::UtcNow
$hoyLocal = [TimeZoneInfo]::ConvertTimeFromUtc($ahora, $tz).Date
$desde = $ahora.AddHours(-3)
$hasta = [TimeZoneInfo]::ConvertTimeToUtc([DateTime]::SpecifyKind($hoyLocal.AddDays($dias + 1), [DateTimeKind]::Unspecified), $tz)

# 1. Eventos que están en curso entre hoy y los próximos días (de a 100 por página).
$d1 = $hoyLocal.ToString("yyyy-MM-dd"); $d2 = $hoyLocal.AddDays($dias).ToString("yyyy-MM-dd")
$where = [Uri]::EscapeDataString("date_start <= '${d2}T23:59:59' and date_end >= '$d1' and address_zipcode like '75*'")
$campos = "title,occurrences,address_name,address_street,address_zipcode,url,price_type"
$eventos = New-Object System.Collections.ArrayList
for ($off = 0; $off -lt 9900; $off += 100) {
  $r = Bajar "select=$campos&where=$where&limit=100&offset=$off"
  $lote = @($r.results)
  foreach ($e in $lote) { [void]$eventos.Add($e) }
  if ($lote.Count -lt 100) { break }
}
if ($eventos.Count -eq 0) { throw "La agenda no devolvió eventos." }

# 2. Cada evento trae sus funciones en "occurrences": "inicio_fin;inicio_fin;…". La hora que viene es la de París.
$lista = New-Object System.Collections.ArrayList
$vistos = @{}
foreach ($e in $eventos) {
  $web = [string]$e.url
  if ($web -notmatch "^https://") { continue }   # la guía solo muestra eventos con enlace seguro a su fuente
  $titulo = ([string]$e.title).Trim()
  if (-not $titulo -or -not $e.occurrences) { continue }
  $cp = [string]$e.address_zipcode
  $barrio = ""
  if ($cp -match "^75(0[0-2][0-9]|116)$") { $nro = if ($cp -eq "75116") { 16 } else { [int]$cp.Substring(3) }; $barrio = if ($nro -eq 1) { "Paris 1er" } else { "Paris $($nro)e" } }
  foreach ($o in ([string]$e.occurrences).Split(";")) {
    $partes = $o.Split("_")
    if ($partes.Count -lt 2 -or $partes[0].Length -lt 19) { continue }
    $local = [DateTime]::ParseExact($partes[0].Substring(0, 19), "yyyy-MM-ddTHH:mm:ss", [Globalization.CultureInfo]::InvariantCulture)
    if ($local.TimeOfDay.TotalMinutes -eq 0) { continue }   # sin horario
    $ini = [TimeZoneInfo]::ConvertTimeToUtc([DateTime]::SpecifyKind($local, [DateTimeKind]::Unspecified), $tz)
    if ($ini -lt $desde -or $ini -ge $hasta) { continue }
    $fin = ""
    if ($partes[1].Length -ge 19) {
      $finLocal = [DateTime]::ParseExact($partes[1].Substring(0, 19), "yyyy-MM-ddTHH:mm:ss", [Globalization.CultureInfo]::InvariantCulture)
      if ($finLocal -gt $local -and ($finLocal - $local).TotalMinutes -le 720) { $fin = [TimeZoneInfo]::ConvertTimeToUtc([DateTime]::SpecifyKind($finLocal, [DateTimeKind]::Unspecified), $tz).ToString("yyyy-MM-ddTHH:mm:ssZ") }
    }
    $clave = $web + "|" + $ini.ToString("o")
    if ($vistos.ContainsKey($clave)) { continue }
    $vistos[$clave] = $true
    [void]$lista.Add([ordered]@{
      t = $titulo
      ini = $ini.ToString("yyyy-MM-ddTHH:mm:ssZ")
      lugar = ([string]$e.address_name).Trim()
      dir = ([string]$e.address_street).Trim()
      barrio = $barrio
      url = $web
      gratis = ([string]$e.price_type -eq "gratuit")
      fin = $fin
      serie = $false
    })
  }
}
$orden = @($lista | Sort-Object { $_.ini } | Select-Object -First $max)   # París tiene muchísimos: alcanza con los próximos $max
$doc = [ordered]@{
  actualizado = $ahora.ToString("yyyy-MM-ddTHH:mm:ssZ")
  fuente = "Agenda oficial de la Ciudad de París (Que faire à Paris, opendata.paris.fr). Cada evento enlaza a su página en paris.fr."
  eventos = $orden
}
$json = $doc | ConvertTo-Json -Depth 6 -Compress
$dirOut = Split-Path -Parent $out
if ($dirOut -and -not (Test-Path $dirOut)) { New-Item -ItemType Directory -Path $dirOut | Out-Null }
[IO.File]::WriteAllText((Join-Path (Get-Location) $out), $json, (New-Object Text.UTF8Encoding($false)))
Write-Host ("Listo: " + $orden.Count + " funciones con horario entre hoy y los próximos " + $dias + " días, de " + $eventos.Count + " eventos de la agenda.")
