# Berlín, etapa 2: material de trabajo (tarjeta #126)

Carpeta de trabajo, no es parte de la app. Se borra cuando los lugares estén cargados.

- `BRIEF.md`: las reglas y el formato para buscar lugares (un JSON por tarjeta).
- `2-5-compras-deporte.json`: tarjeta #131, lista (51 lugares, sin errores).
- Faltan: `2-1-ver.json` (#127), `2-2-comer.json` (#128), `2-3-noche-ocio.json` (#129), `2-4-tours-escapadas-dormir.json` (#130).
- `armar.js`: junta los JSON, controla (mínimo 4 por tipo, barrios, repetidos, precios u horarios) y arma `app/data/berlin-lugares.js` y `docs/fuentes-berlin.md`.
  Uso, desde esta carpeta: `node armar.js ../../app` (solo controla) o `node armar.js ../../app --escribir`.
