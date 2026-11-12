# Cómo sumar una ciudad nueva

La guía ya no tiene nada de Buenos Aires escrito adentro del código (`js/app.js`): todo lo de la ciudad está en `data/`.
Para sumar otra ciudad hay que armar sus archivos de datos. El selector para elegir la ciudad todavía no existe: se arma cuando empiece la expansión.

Usá como modelo los de Buenos Aires (id `caba`). Para una ciudad nueva, elegí un id corto (por ejemplo `mdq`, `cordoba`) y copiá cada archivo cambiando `caba` por ese id.

| Archivo | Qué tiene | ¿Obligatorio? |
|---|---|---|
| `data/<id>.js` | Nombre, país, zona horaria (`tz`), moneda (`currency`), barrios, categorías, lugares, itinerarios, teléfonos de emergencia, transporte, seguridad e info práctica | Sí |
| `data/<id>-coords.js` | Ubicación de cada lugar en el mapa | Sí, para el mapa |
| `data/<id>-local.js` | Lo propio de la ciudad: centro y límites del mapa, aeropuertos, apps de viaje, chips de celular, tarjeta de transporte, aerolíneas para el check-in, frases útiles, moneda, el aviso de bienvenida y las agendas para "Hoy" | Sí |
| `data/<id>-extra.js` | Calidad de cada lugar, fotos, días que abre, eventos del año, sellos del pasaporte, colecciones | Recomendado |
| `data/<id>-zones.js` | Límites de los barrios y puntos de ayuda en el mapa | Opcional |
| `data/<id>-hoy.js` | Agenda fija de la semana y destacados elegidos a mano (por ejemplo, de Instagram) | Opcional |
| `data/<id>-mas.js`, `data/<id>-boliches.js` | Más lugares | Opcional |

Si una ciudad no tiene alguno de los datos de `-local.js`, la guía esconde esa parte (por ejemplo, sin `aerolineas` no se muestra la lista de check-in).

## Agenda de "Hoy"

- **Eventos automáticos:** `herramientas/armar-hoy.ps1` baja la agenda oficial de la Ciudad de Buenos Aires. Cada ciudad necesita su propia fuente y su propio programa que arme un archivo con el mismo formato que `data/hoy.json`. En `data/<id>-local.js`, `hoy` dice qué archivo leer.
- **Destacados a mano:** en `data/<id>-hoy.js`, `X.destacados`. Instagram no se puede leer de forma automática: lo que se vea ahí se carga a mano, con su enlace.

## Traducciones

Los textos van en castellano y los traduce `i18n/traductor.js` con los diccionarios de `i18n/dict/`. Los textos nuevos de una ciudad (nombres de pasos, consejos, frases) hay que sumarlos a `i18n/fuentes/extra.txt` y a cada `<idioma>.extra.txt`, y volver a armar los diccionarios (ver el comentario al principio de `i18n/fuentes/armar-dict.ps1`).

## Antes de publicar

- Abrir cada dirección web y confirmar que funciona.
- Nada de precios ni horarios exactos. Los datos de salud (sin TACC, kosher, halal, alergias) solo con una fuente.
- Sumar los archivos nuevos a `index.html` y a la lista `SHELL` de `sw.js`, y subir la versión de `CACHE`.
