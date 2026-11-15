# Arma los diccionarios de i18n/dict/ (tarjeta #187: un diccionario comun por idioma y uno por ciudad).
# Desde la tarjeta #187 el armado lo hace armar-dict.js, con Node, para que Windows, Mac y Linux den siempre lo mismo.
# Este archivo queda para no cambiar la costumbre: llama a armar-dict.js.
# Uso: powershell -ExecutionPolicy Bypass -File armar-dict.ps1 -lang pt     (o -lang todos)
param([string]$lang = "todos", [string]$trad, [string]$out)
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "Hace falta Node (https://nodejs.org). Despues: node armar-dict.js $lang"
  exit 1
}
node (Join-Path $PSScriptRoot "armar-dict.js") $lang
exit $LASTEXITCODE
