# La guía de viaje

Esta carpeta es la app: una guía de viaje con 11 ciudades (Buenos Aires, Berlín, París, Roma, Madrid, Barcelona, Ámsterdam, Río de Janeiro, Bogotá, Lisboa y Tokio) en 8 idiomas. Es una página web hecha con HTML, CSS y JavaScript, sin programas extra, que también se instala en el celular y anda sin internet.

Qué está hecho, qué falta y qué se decidió: [ESTADO.md](ESTADO.md). Leelo antes de cambiar algo.

## Cómo abrirla

**Opción simple:** doble clic en `index.html`. Anda casi todo, salvo el uso sin internet.

**Opción completa (Windows):** clic derecho en `servir.ps1` → "Ejecutar con PowerShell", y abrir `http://localhost:5173` en el navegador. Para abrir una ciudad directo: `http://localhost:5173/?ciudad=lisboa`.

Con Claude: pedile "abrí la app de la carpeta app".

La versión publicada está en https://ronkstudio.github.io/proyecto-compartido/ y se actualiza sola al sumar cambios a `main`.

## Cómo está armada

| Archivo | Qué tiene |
|---|---|
| `index.html` | La página, la barra de arriba y el menú |
| `js/app.js` | Todo el funcionamiento de las pantallas. Arriba de cada parte hay un comentario que dice qué hace |
| `js/ciudad.js` | Elige la ciudad y carga solo sus archivos de datos |
| `js/globo.js`, `css/globo.css`, `js/vendor/`, `data/globo-continentes.js` | El globo de entrada para elegir destino. La ubicación de cada ciudad va en `GEO` |
| `js/intro.js`, `css/intro.css` | La intro animada al entrar a cada ciudad y las figuras al tocar la portada |
| `js/ilustraciones.js` | Las escenas dibujadas que reemplazan la foto de los lugares que no tienen (una por tipo de lugar). Para verlas todas juntas: `zz-ilustraciones.html` (no se publica) |
| `css/styles.css` | El diseño común (tarjetas, botones, modo oscuro) |
| `css/temas.css` | Los colores, la letra y el dibujo de portada de cada ciudad |
| `data/ciudades.js` | La lista de ciudades, con sus archivos y su letra de títulos |
| `data/avisos.json` | Avisos de paros, marchas y cortes (se ven solo entre sus fechas) |
| `i18n/` | Los idiomas: `i18n.js` elige el idioma, `traductor.js` traduce la pantalla con los diccionarios de `i18n/dict/`. Las listas para traducir están en `i18n/fuentes/` (no se publican) |
| `sw.js`, `manifest.webmanifest`, `icon.svg` | Para que funcione sin internet y se pueda instalar en el celular |
| `servir.ps1` | Abre la app en la compu para probarla |

### Los archivos de cada ciudad (`data/`)

Cada ciudad tiene un `id` (`caba`, `berlin`, `paris`, `roma`, `madrid`, `barcelona`, `amsterdam`, `rio`, `bogota`, `lisboa`, `tokio`) y estos archivos:

| Archivo | Qué tiene |
|---|---|
| `<id>.js` | Barrios, planes armados, transporte, seguridad, info práctica, calendario, frases |
| `<id>-lugares.js` | Los lugares (en Buenos Aires están en `caba.js`, `caba-mas.js` y `caba-boliches.js`; Berlín suma `berlin-mas.js`) |
| `<id>-coords.js` | Dónde queda cada lugar en el mapa |
| `<id>-extra.js` | Recomendados, premios, días que cierra, dietas, fotos, estaciones, colecciones, sellos del pasaporte |
| `<id>-zones.js` | Barrios y zonas del mapa, y puntos de ayuda (turismo, comisarías, hospitales, consulados) |
| `<id>-hoy.js` | La agenda fija de "Hoy" (lo que pasa ciertos días) y los destacados |
| `<id>-local.js` | Lo propio de la ciudad: aeropuertos, apps, chips, moneda, aerolíneas, alquiler de auto, agendas |
| `hoy-<id>.json` | Solo en las ciudades con agenda oficial automática: los eventos del día (los baja `herramientas/` dos veces por día). En Buenos Aires se llama `hoy.json` |

## Para cambiar contenido

Casi todo se cambia en `data/`, sin tocar el funcionamiento:

- **Sumar un lugar:** agregarlo a la lista de lugares de su ciudad copiando el formato de otro, y su ubicación en `<id>-coords.js`. El nombre interno se arma solo con el nombre: minúsculas, sin acentos y con guiones ("Café Tortoni" es `cafe-tortoni`). Sus textos se traducen con las listas de `i18n/fuentes/`.
- **Cargar un aviso de paro o corte:** en `data/avisos.json` : dentro de la ciudad, uno con `tipo` (paro, marcha, corte u otro), `titulo`, `texto`, `desde` y `hasta` (AAAA-MM-DD, inclusive), `fuente` y `link` (https). Se ve solo entre esas fechas y después desaparece.
- **Sumar una ciudad:** pedile a Claude que use la skill `crear-ciudad`. Los pasos a mano están en [NUEVA-CIUDAD.md](NUEVA-CIUDAD.md) y los scripts en `herramientas/ciudad/`.

Reglas: nada de precios ni horarios exactos, y los datos de salud (sin TACC, alergias) solo con una fuente.

## De dónde salen los datos

| Dato | Fuente |
|---|---|
| Lugares, descripciones, consejos | Escritos por Claude y cruzados con OpenStreetMap y la web. **No se verificó todo uno por uno** |
| Info práctica, emergencias, transporte, consulados | Sitios oficiales de cada ciudad, país o embajada. Detalle en `docs/fuentes-<ciudad>.md` |
| Ubicaciones y estaciones | OpenStreetMap (y CartoCiudad en España) |
| Fotos | Wikimedia Commons, con licencia libre |
| Agendas de "Hoy" | Agendas abiertas oficiales de cada ciudad, donde existen |
| Clima | Open-Meteo |
| Cotización | open.er-api.com |

No hay claves ni contraseñas en ningún archivo.
