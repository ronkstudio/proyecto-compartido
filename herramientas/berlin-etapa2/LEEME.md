# Berlín, etapa 2: material de trabajo (tarjeta #126)

Carpeta de trabajo, no es parte de la app. Se borra cuando los lugares estén cargados.

- `BRIEF.md`: las reglas y el formato para buscar lugares (un JSON por tarjeta).
- Un JSON por tarjeta: `2-1-ver.json` (#127), `2-2-comer.json` (#128), `2-3-noche-ocio.json` (#129), `2-4-tours-escapadas-dormir.json` (#130), `2-5-compras-deporte.json` (#131). 371 lugares en total.
- `2-5` está terminado y revisado. Los otros cuatro los escribieron ayudantes que se cortaron por límite de uso: hay que revisar que estén completos y confirmar lo dudoso (campo "check" de cada lugar).
- `control-13-11.txt`: resultado del control del 13/11 (8 repetidos entre categorías y avisos).
- `armar.js`: junta los JSON, controla (mínimo 4 por tipo, barrios, repetidos, precios u horarios) y arma `app/data/berlin-lugares.js` y `docs/fuentes-berlin.md`.
  Uso, desde esta carpeta: `node armar.js ../../app` (solo controla) o `node armar.js ../../app --escribir`.
