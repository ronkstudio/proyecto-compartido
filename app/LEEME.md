# Prototipo de la guía de Buenos Aires

Esta carpeta tiene un prototipo que **ya funciona**. No es el diseño final: es una versión para tocar, probar ideas y ver qué sirve.

Qué está hecho y qué falta: [ESTADO.md](ESTADO.md). Leelo antes de cambiar algo.

## Cómo abrirlo

**Opción simple:** doble clic en `index.html`. Anda casi todo, salvo el uso sin internet.

**Opción completa (Windows):** clic derecho en `servir.ps1` → "Ejecutar con PowerShell", y abrir `http://localhost:5173` en el navegador.

Con Claude: pedile "abrí el prototipo de la carpeta app".

No hay nada que instalar: es una página web hecha con HTML, CSS y JavaScript, sin programas extra.

## Cómo está armado

| Archivo | Qué tiene |
|---|---|
| `index.html` | La página y el menú de abajo |
| `css/styles.css` | Todo el diseño (colores, tarjetas, modo oscuro) |
| `js/app.js` | Todo el funcionamiento. Arriba de cada parte hay un comentario que dice qué hace |
| `data/ciudades.js`, `js/ciudad.js` | La lista de ciudades y el selector: carga solo los datos de la ciudad elegida |
| `data/caba.js` | **El contenido**: lugares, barrios, itinerarios, transporte, seguridad, info práctica |
| `data/caba-coords.js` | Dónde queda cada lugar en el mapa |
| `data/caba-extra.js` | Nivel de recomendación, premios, días que cierra, fotos, subte, calendario, colecciones |
| `data/caba-zones.js` | Límites de los barrios, capas del mapa de zonas y puntos de ayuda |
| `i18n/` | Los idiomas: un archivo de textos por idioma y `i18n.js`, que elige el idioma y arma el selector |
| `sw.js`, `manifest.webmanifest`, `icon.svg` | Para que funcione sin internet y se pueda instalar en el celular |
| `servir.ps1` | Abre el prototipo en la compu para probarlo |

## Para cambiar contenido

Casi todo se cambia en la carpeta `data/`, sin tocar el funcionamiento:

- **Sumar un lugar:** agregarlo a la lista `places` de `data/caba.js` copiando el formato de otro. Para que salga en el mapa, sumar su ubicación en `data/caba-coords.js`.
- **Cambiar el nivel de seguridad de un barrio:** en `data/caba-zones.js`, capa `seguridad`.
- **Sumar otra ciudad:** copiar los cuatro archivos de `data/` con otro nombre y cargarlos en `index.html`.

El nombre interno de cada lugar se arma solo con su nombre: minúsculas, sin acentos y con guiones. Por ejemplo, "Café Tortoni" es `cafe-tortoni`.

## De dónde salen los datos

| Dato | Fuente |
|---|---|
| Lugares, descripciones, consejos | Escritos por Claude con lo que sabe. **Sin verificar uno por uno** |
| Atención al turista, Comisaría del Turista, teléfonos | Sitio oficial de turismo de la Ciudad (noviembre de 2026) |
| Estrellas Michelin y ranking de bares | Notas de prensa de 2026 |
| Límites de barrios | Datos abiertos del Gobierno de la Ciudad |
| Ubicaciones y estaciones de subte | OpenStreetMap |
| Fotos | Wikimedia Commons |
| Clima | Open-Meteo |
| Cotización | open.er-api.com |
| Niveles de seguridad por barrio | Valoración de Claude. **No es estadística oficial** |

No hay claves ni contraseñas en ningún archivo.
