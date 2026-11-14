# Cómo sumar una ciudad nueva

La guía ya no tiene nada de Buenos Aires escrito adentro del código (`js/app.js`): todo lo de la ciudad está en `data/`.
Para sumar otra ciudad hay que armar sus archivos de datos y agregarla a la lista de `data/ciudades.js`. La persona elige la ciudad tocando su nombre en la barra de arriba (tarjeta #98); queda guardada en el celular y solo se cargan los archivos de esa ciudad.

Usá como modelo los de Buenos Aires (id `caba`). Para una ciudad nueva, elegí un id corto (por ejemplo `mdq`, `cordoba`) y copiá cada archivo cambiando `caba` por ese id.

| Archivo | Qué tiene | ¿Obligatorio? |
|---|---|---|
| `data/ciudades.js` | La lista de ciudades: id, nombre, país, bandera y qué archivos cargar. **Agregar acá la fila de la ciudad nueva** | Sí |
| `data/<id>.js` | Nombre, país, zona horaria (`tz`), moneda (`currency`), barrios, categorías, lugares, itinerarios, teléfonos de emergencia, transporte, seguridad e info práctica | Sí |
| `data/<id>-coords.js` | Ubicación de cada lugar en el mapa | Sí, para el mapa |
| `data/<id>-local.js` | Lo propio de la ciudad: centro y límites del mapa, aeropuertos, apps de viaje, chips de celular, tarjeta de transporte, aerolíneas para el check-in, frases útiles, moneda, el aviso de bienvenida y las agendas para "Hoy" | Sí |
| `data/<id>-extra.js` | Calidad de cada lugar, fotos, días que abre, eventos del año, sellos del pasaporte, colecciones | Recomendado |
| `data/<id>-zones.js` | Límites de los barrios y puntos de ayuda en el mapa | Opcional |
| `data/<id>-hoy.js` | Agenda fija de la semana y destacados elegidos a mano (por ejemplo, de Instagram) | Opcional |
| `data/<id>-mas.js`, `data/<id>-boliches.js` | Más lugares | Opcional |

Si una ciudad no tiene alguno de los datos de `-local.js`, la guía esconde esa parte (por ejemplo, sin `aerolineas` no se muestra la lista de check-in).

## Datos opcionales para que nada quede hablando de Buenos Aires

Si faltan, la guía usa el texto de Buenos Aires, así que en una ciudad nueva conviene cargarlos todos.

En `data/<id>-local.js`:

- `fuera`: cómo se llama el "barrio" de los lugares que quedan fuera de la ciudad (en Buenos Aires, "Fuera de CABA").
- `metro`: nombre del metro. Tiene que ser igual al título del bloque de `transport` donde van las líneas (`subte` en `data/<id>.js`).
- `sinEstacion`: qué decir en la ficha cuando no hay estación cerca.
- `buscarEj`, `rutaEj`, `rutaEj2`, `aerolineasEj`: los ejemplos que se ven dentro de los buscadores.
- `atajos`: los botones propios del inicio, como `[["Tango", { q: "tango" }]]`.
- `pasaporteSub`, `interesNoche`, `hoyNota`: el texto del pasaporte en el inicio, el interés de noche de "Armá tu viaje" y la aclaración al pie de "Hoy".

En `data/<id>-extra.js`: `zones` (al menos 4 zonas, en orden de importancia), `zonasDosDias` (cómo se juntan en un viaje de 2 días: `[[nombre, [índices]], …]`) y `zonaChicos` (índice de la zona que conviene con chicos).

Una ciudad puede estar en la lista sin lugares cargados: la guía muestra un cartel y deja usar Info.

## Agenda de "Hoy"

- **Eventos automáticos:** `herramientas/armar-hoy.ps1` baja la agenda oficial de la Ciudad de Buenos Aires. Cada ciudad necesita su propia fuente y su propio programa que arme un archivo con el mismo formato que `data/hoy.json`. En `data/<id>-local.js`, `hoy` dice qué archivo leer.
- **Destacados a mano:** en `data/<id>-hoy.js`, `X.destacados`. Instagram no se puede leer de forma automática: lo que se vea ahí se carga a mano, con su enlace.

## Traducciones

Los textos van en castellano y los traduce `i18n/traductor.js` con los diccionarios de `i18n/dict/`. Los textos nuevos de una ciudad van en su propia lista: `i18n/fuentes/<id>.txt` y `<idioma>.<id>.txt` en los 7 idiomas (ver `i18n/fuentes/LEEME.md`). Después hay que volver a armar los diccionarios. Los textos con el nombre de la ciudad ("Hoy en …", "¡Bienvenido a …!") ya se traducen solos: alcanza con que el nombre de la ciudad esté en la lista.

## Antes de publicar

- Abrir cada dirección web y confirmar que funciona.
- Nada de precios ni horarios exactos. Los datos de salud (sin TACC, kosher, halal, alergias) solo con una fuente.
- Poner su ubicación (longitud y latitud) en `GEO`, al principio de `js/globo.js`, para que aparezca en el globo de entrada con su punto rojo y su ruta de vuelo (tarjeta #167). Si estaba en `PRONTO`, sacarla de ahí.
- Agregar la ciudad a `data/ciudades.js` y subir la versión de `CACHE` en `sw.js`. No hace falta tocar `index.html` ni la lista `SHELL`: los archivos de cada ciudad se guardan en el celular la primera vez que alguien la elige.
