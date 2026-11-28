# Herramientas para armar una ciudad (tarjeta #208)

Scripts en Perl (vienen con Git para Windows; no hace falta Node ni Python) que se usaron para armar Ámsterdam, Río y Bogotá.
Los pasos completos, en orden, están en la skill `.claude/skills/crear-ciudad/SKILL.md`. Qué archivos lleva una ciudad: `app/NUEVA-CIUDAD.md`.

Se corren desde `app/`, con la ruta del script: `perl ../herramientas/ciudad/textos.pl . bogota`.
Los que consultan internet (OpenStreetMap, Wikimedia Commons, Wikidata) se presentan como `guia-de-viaje/1.0`, sin datos de nadie.

| Script | Para qué |
|---|---|
| `geociudad.pl` | Primera pasada de ubicaciones: busca cada lugar por nombre y por dirección en OpenStreetMap (Nominatim). |
| `geopekin.pl` | Para ciudades con nombres en otro alfabeto (Pekín): busca cada lugar en OpenStreetMap por el nombre local que va al final de la dirección (después de " · ") y confirma que caiga en su distrito. |
| `coordsciudad.pl` | Arma `data/<ciudad>-coords.js` con la ubicación de cada lugar (una primera pasada automática más correcciones a mano, que ganan). |
| `textos.pl` | Lista los textos de una ciudad que todavía no tienen traducción. |
| `textos-todos.pl` | Lista todos los textos que usa una ciudad (traducidos o no). |
| `prestados.pl` | De esos, los que ya están traducidos en la lista de otra ciudad: se copian con `agregar.pl` en vez de traducirlos de nuevo. |
| `juntar.pl` | Junta las traducciones numeradas (`tr/NN.txt`) con los textos, en el formato `es \|\| en \|\| pt \|\| fr \|\| it \|\| de \|\| zh \|\| ja`. |
| `armar-ciudad.pl` | Arma `i18n/fuentes/<ciudad>.txt` y las 7 listas por idioma, y avisa si falta o sobra algo. |
| `agregar.pl` | Suma textos sueltos a una lista que ya existe. |
| `armar-dict.pl` | Arma los diccionarios de `i18n/dict/` (lo mismo que `i18n/fuentes/armar-dict.js`, para cuando no hay Node). Tiene que terminar con "problemas: 0". |
| `entrada.pl` | Prepara la lista de lugares con ubicación para buscar fotos. |
| `fotos2.pl` | Busca fotos libres en Wikimedia Commons cuyo nombre coincida con el lugar. Tarda (una hora para 120 lugares). |
| `fotos3.js` | Busca más fotos en Wikidata: la foto principal (P18) de un elemento con el mismo nombre a pocos metros del lugar. Hace una consulta por tanda de lugares, así que tarda minutos y no horas (Berlín, la más densa, unos 25). Uso: `NODE_USE_ENV_PROXY=1 node fotos3.js <ciudad>.tsv <idioma local> > salida.tsv`, con la misma entrada y salida que `fotos2.pl`. Revisá cada foto antes de cargarla: en restaurantes, bares y hoteles a veces trae la plaza o la calle (tarjeta #242). |
| `fotos4.js` | Tercera pasada de fotos (tarjeta #244), para lo que no encontraron las otras dos. Pregunta todo a través del servicio de consultas de Wikidata, que le pide a Commons por nosotros: Commons corta los pedidos directos sin cuenta a los 3 o 4. Tres modos: `cerca` (elementos de Wikidata con foto a pocos metros, comparando el nombre palabra por palabra: "Reichstag y su cúpula" encuentra "Reichstag"), `commons` (fotos de Commons sacadas a pocos metros cuyo título nombra al lugar; es lo que sirve para restaurantes, bares y hoteles) y `texto` (búsqueda por nombre y ciudad, para fotos sin ubicación). Uso: `NODE_USE_ENV_PROXY=1 node fotos4.js cerca <ciudad>.tsv <idioma local>`, con la misma entrada y salida que `fotos2.pl`. Con `LISTA=archivo` deja, para los lugares sin coincidencia, los 4 elementos más conocidos de alrededor, para elegir a mano. Se equivoca más que `fotos3.js`: revisá cada foto, y en los locales descartá las de la calle, la plaza o el negocio de al lado. |
| `hoja.pl` | Arma una página para revisar las fotos a ojo antes de cargarlas. |
| `meterfotos.pl` | Carga las fotos aprobadas en `data/<ciudad>-extra.js`. |
| `dietas.pl` | Busca en OpenStreetMap locales solo veganos o solo sin gluten (son la fuente del dato de dieta). |
| `contar.pl` | Cuenta lugares por tipo y por barrio, para ver la variedad (4 o más de cada uno). |
| `app/zz-revisar.html` | Control de datos de todas las ciudades (tarjeta #221): ubicaciones, referencias rotas, consulados, horarios colados, dietas sin fuente, variedad por tipo y barrio. Se abre con la app servida: `http://localhost:5173/zz-revisar.html` (con `?fotos=1` prueba también que carguen las fotos). No se publica. |
| `app/zz-recorrido.js` | Recorrido automático de pantallas (tarjeta #227): con la app abierta en una ciudad, abre cada pantalla, plan y ficha, y lista lo que se sale del ancho, enlaces internos rotos, teléfonos mal armados, errores y textos sin traducir. Cómo usarlo: arriba del archivo. No se publica. |
| `contraste.pl` | Mide el contraste de los colores de cada ciudad en `css/temas.css`, en claro y oscuro. |
| `estaciones-metro.pl` | Trae de OpenStreetMap las estaciones de cada línea de metro, para "la estación más cercana" (bloque `stations`). |
| `geotokio.pl` | Ubicaciones cuando las direcciones no las entiende el mapa (Tokio): busca el nombre en OpenStreetMap y controla que caiga en el distrito de la dirección. |
| `estaciones-tokio.pl` | Estaciones por línea cuando hay varias empresas de metro y trenes (Tokyo Metro, Toei y la Yamanote de JR), con el nombre en `name:en`. |
