# Servidor local simple para probar la app: abre http://localhost:5173
# Uso: clic derecho > "Ejecutar con PowerShell", o:  powershell -ExecutionPolicy Bypass -File servir.ps1
$port = 5173
if ($env:PORT) { $port = [int]$env:PORT }
$root = $PSScriptRoot
$types = @{ ".html" = "text/html; charset=utf-8"; ".css" = "text/css; charset=utf-8"; ".js" = "application/javascript; charset=utf-8"; ".json" = "application/json"; ".png" = "image/png"; ".jpg" = "image/jpeg"; ".svg" = "image/svg+xml"; ".ico" = "image/x-icon"; ".webmanifest" = "application/manifest+json" }
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Guia disponible en http://localhost:$port  (Ctrl+C para cerrar)"
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  try {
    $rel = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart("/")
    if ($rel -eq "" -or $rel.EndsWith("/")) { $rel = $rel + "index.html" }   # una carpeta abre su index.html
    $path = [IO.Path]::GetFullPath((Join-Path $root $rel))
    if ($path.StartsWith($root) -and (Test-Path $path -PathType Leaf)) {
      $bytes = [IO.File]::ReadAllBytes($path)
      $ext = [IO.Path]::GetExtension($path).ToLower()
      if ($types.ContainsKey($ext)) { $ctx.Response.ContentType = $types[$ext] }
      $ctx.Response.Headers.Add("Cache-Control", "no-store")
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $ctx.Response.StatusCode = 404
    }
  } catch { $ctx.Response.StatusCode = 500 }
  $ctx.Response.Close()
}
