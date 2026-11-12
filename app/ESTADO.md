# Estado del prototipo

Para los dos Claude: acá está escrito qué se hizo, qué se probó y qué falta. **Actualizalo cada vez que cambies algo de `app/`.**

Última actualización: 12 de noviembre de 2026, Claude de `ronkstudio` (tarjeta #57).

Todo lo que se describe acá está en `main`.

## Decidido

- **El prototipo es la base de la app** (`ezebesserr`, 10/11, pedido #29).
- **El mapa de seguridad en colores se sacó** (`ezebesserr`, 11/11, pedido #44). Quedan los consejos escritos de Info → Seguridad.
- **La app tiene de todo** (`ezebesserr`, 11/11; coincide con Bautista). Con un mínimo de locales por tipo en cada zona turística: tarjeta #45. Hoy no se llega en ninguna zona.
- **Tiene que quedar simple y poco cargada**, aunque tenga mucho contenido (`ezebesserr`, 11/11).
- **Muchos idiomas**, no dos o tres (`ezebesserr`, 11/11). Tarjetas #11 y #39.
- **Variedad de planes armados** (`ezebesserr`, 11/11). Tarjeta #48. Hoy hay 5 itinerarios.

Las decisiones del proyecto y las que faltan están en el `README.md` de la carpeta principal.

## Para decidir entre Bautista y Besser

1. **¿La copia publicada lleva cartel de "versión de prueba, datos sin verificar"?** Ya está publicada (ver "Publicar") y hoy no lo tiene. Lo propuso el Claude de `ezebesserr`.
2. **¿Se encienden las cuentas?** Hay que resolver lo de la clave pública (ver `CUENTAS.md`).
3. **¿Se muestran los filtros sin TACC y kosher** antes de confirmar los lugares uno por uno?
4. **¿Qué idiomas siguen?** (tarjeta #11). Hoy están completos español, inglés y portugués; los otros cinco tienen solo el menú.

## Qué está hecho

- **Explorar:** 534 lugares en 9 categorías (qué ver, comer, noche, tours, excursiones, hospedaje, compras, deportes, entretenimiento), buscador que entiende sinónimos, filtros por tipo, barrio, precio y "abre hoy", y orden por recomendación, cercanía o precio.
- **Comer con una condición:** filtros por vegetariano, vegano, sin TACC y kosher. La ficha avisa siempre que hay que confirmar en el local. Los lugares "100 %" están en `dietFull` de `data/caba-extra.js`.
- **Tanda nueva de lugares (tarjeta #54):** 162 lugares en `data/caba-mas.js`: 26 iglesias y templos, 19 museos y paseos, 40 lugares para comer, 19 de noche, 17 hoteles, 11 de entretenimiento, 3 estadios y 27 excursiones (Tigre y el Delta abiertos en 12, paracaidismo, globo, cabalgatas, estancias y pueblos de campo). Las ubicaciones salen de buscar cada dirección en OpenStreetMap; 16 están puestas a mano ("aprox."). Unos 70 figuran en OpenStreetMap con ese mismo nombre; del resto solo se confirmó que la dirección existe. Falta confirmar uno por uno que sigan abiertos.
- **Verificación y zonas más visitadas (tarjeta #56):** se cruzaron los lugares de la ciudad con el registro de OpenStreetMap (nombre, ubicación y tipo de local). 296 de 401 coincidieron; de los restaurantes, bares y hoteles que no aparecían se buscaron 14 en la web. Resultado: se sacó el Mercado de los Carruajes (cerró) y se corrigió la dirección de Fukuro (se mudó). Se sumaron 76 lugares para comer y salir en Puerto Madero, San Telmo, Centro, Retiro, Recoleta, La Boca, Almagro, Villa Crespo y Palermo, todos tomados de OpenStreetMap. El filtro de barrios ahora muestra solo los 12 más visitados (lista `filterBarrios` en `data/caba-mas.js`) y ya no ofrece "Fuera de CABA"; los demás lugares siguen en el buscador y en el mapa.
- **Traductor de toda la app (tarjeta #59):** `i18n/traductor.js` cambia cada texto que aparece en pantalla por el del idioma elegido, usando un diccionario por idioma (`i18n/dict/`). Inglés y portugués completos (unos 2.100 textos cada uno, con las descripciones y consejos de los 534 lugares). Nombres de lugares, calles y barrios quedan en español a propósito. Para sumar un idioma se traducen las listas de `i18n/fuentes/` (ahí está explicado).
- **Armá tu viaje rediseñado (tarjeta #59):** cinco pasos numerados, botones grandes y una barra fija con el resumen. En Mi viaje, las acciones quedaron ordenadas y cada lugar se puede subir o bajar con flechas.
- **Barrios:** 46 de los 48 tienen al menos un lugar. Faltan Vélez Sarsfield y Villa Lugano: no encontramos nada que valga la pena sin inventar.
- **Shoppings:** Abasto, DOT, Unicenter, Alto Palermo, Alcorta, Distrito Arcos y seis más.
- **Ficha de lugar:** foto, consejo, precio, subte más cercano, cómo llegar, opiniones en Google Maps, Uber, disponibilidad en Booking para hoteles, qué hay cerca, y "Marcar que fui".
- **Mapa:** todos los lugares con ubicación, 6 capas de zonas (turísticas, dónde alojarse, noche, gastronomía, compras, parques) y 22 puntos de ayuda.
- **Mi viaje:** guardar lugares por día, ordenar por cercanía, ver el día en el mapa, ruta en Google Maps, compartir e imprimir. Con fecha de llegada avisa si algo cierra ese día y muestra el pronóstico de cada día.
- **Armado automático:** con días, intereses, presupuesto y ritmo arma el recorrido por zonas. Respeta la dieta del perfil.
- **Mi cuenta y perfil de viaje:** dieta, presupuesto y si viaja con chicos. La guía marca "Apto para vos". Las cuentas con mail están preparadas pero apagadas (`CUENTAS.md`).
- **Pasaporte porteño:** marcar "Ya fui" y ganar 16 sellos. Las reglas de cada sello están en `data/caba-extra.js`.
- **Inicio:** sugerencias según la hora, el día y el clima; "Hoy en tu viaje"; colecciones; itinerarios; eventos del mes; conversor de moneda.
- **Info:** moverse, seguridad, ayuda, info práctica (con checklist y calculadora de propina) y calendario.
- **Cómo pagar el transporte:** el primer bloque de Moverse está revisado contra el sitio oficial de SUBE (9/11, tarjeta #38, Claude de `ezebesserr`). Falta confirmar el pago con tarjeta o celular en subte y trenes; el detalle está en `docs/fuentes-de-informacion.md`.
- **Idiomas (primer paso, tarjeta #39):** selector 🌐 en la barra de arriba con 8 idiomas (español, inglés, portugués, francés, italiano, alemán, chino, japonés). Por ahora solo están traducidos el menú de abajo, el pie y el título; todo lo demás sigue en español. Cómo sumar textos o idiomas: comentario al principio de `i18n/i18n.js`. Las traducciones las hizo Claude y no las revisó nadie que hable cada idioma.
- **Sin internet:** la lista y los textos funcionan; el mapa y las fotos necesitan conexión.

## Qué se probó

Todo en el navegador de la compu, en tamaño celular (375 de ancho) y en pantalla grande:

- Navegación completa, filtros, buscador, fichas, guardar, armado automático, mapa de zonas y puntos de ayuda.
- Filtros de dieta, categorías nuevas y buscar "DOT", "Unicenter" y "Saavedra".
- Perfil de viaje: con perfil vegano, Explorar pone primero lo apto y el viaje se arma solo con lugares veganos.
- Pasaporte, pronóstico por día, "Hoy en tu viaje" y calculadora de propina.
- Que el guardado para usar sin internet junte sus 10 archivos.
- Que no haya lugares repetidos ni datos sueltos, que carguen las fotos y que los límites de los 48 barrios coincidan con el archivo oficial.

Estas pruebas las hizo el Claude de `ronkstudio` antes de que se sacara el mapa de colores. Lo que probó el Claude de `ezebesserr` después está en los pedidos #40 y #44.

**Prueba de todos los botones (11/11, tarjeta #52, Claude de `ronkstudio`)**, en 375 de ancho y en 1366, con la consola abierta: Inicio, Explorar (cada filtro, orden, barrio, buscador, borrar filtros), Mapa (capas de zonas, puntos de ayuda, ocultar lugares, carteles y "Ver ficha", Mi ubicación con una ubicación simulada), Mi viaje (cambiar día, sumar día, fecha de llegada, ordenar, ver en el mapa, ruta, imprimir, compartir, quitar, vaciar), armado automático, Info (las cinco pestañas, conversor, propina, lista), Mi cuenta, Pasaporte, Barrios, los 5 itinerarios, la ficha de un café, un hotel, una excursión y un tour (cerrar con la cruz, el fondo, Esc y "atrás"), y el selector de idiomas (abrir, cerrar, pasar a inglés y volver). **No apareció ningún error en la consola** y nada se sale de la pantalla. Se arregló:

- El conversor y la calculadora tomaban "10.50" como 1050. Ahora entienden el punto decimal de los turistas y también "1.500,50".
- La calculadora de propina dejaba el resultado viejo al borrar el total.
- "Compartir" en la compu no avisaba nada si no se podía copiar. Ahora lo dice.
- "Cómo llegar" (Info → Moverse) con el casillero vacío no hacía nada. Ahora pide que escribas el destino.
- Los lugares sin foto muestran un ícono según el tipo (🍕 pizzería, ☕ café, 🍦 heladería, 🎭 teatro…) en vez del de la categoría (todas las pizzerías tenían el ícono de carne).
- El guardado para usar sin internet pasa a `guia-v7` para que los celulares tomen los arreglos.

## Qué NO se probó

- **Las cuentas de usuario.** Nada: sin un proyecto de Supabase no hay cómo. Es lo primero que hay que probar al encenderlas.
- "Cerca mío" y "Mi ubicación" con el permiso real de un celular (en la compu se probaron con una ubicación simulada).
- Compartir con el menú del celular, la ventana de impresión de verdad, y que los enlaces de Uber, Google Maps, Booking, WhatsApp y teléfonos abran bien (se revisó que estén bien armados, no se abrieron).
- Cortar internet de verdad y usar la app, y la instalación en el celular.
- Nada en un iPhone ni en un Android de verdad.

## Qué falta o está flojo

- **Verificación a medias.** OpenStreetMap confirma que el local figura ahí, no que siga abierto hoy. Quedan sin confirmar en la web unos 90 lugares que no coincidieron por nombre (la mayoría son plazas, paseos, tours y zonas, no locales), 9 restaurantes y bares (Mishiguene, Julia, LAB, Osaka, Anafe, Caseros, Café Paulín, Salvaje Bakery, Bar Oviedo) y 2 hoteles (Vain, Club Francés). Tampoco se revisaron uno por uno las descripciones ni los días de cierre.
- **Sin TACC y kosher son temas de salud y de fe.** Solo hay 3 lugares sin TACC y 2 kosher, los que una búsqueda describió como dedicados. Hay que confirmarlos. No hay opciones halal ni sin lactosa.
- **Las plazas de barrio** (etiqueta "vida de barrio") tienen descripciones genéricas. Se sumaron para que cada barrio tenga algo, con nombre y ubicación reales, pero sin conocer cada una.
- **No está todo lo que se puede hacer en la ciudad.** Son 534 lugares. Bautista pidió (11/11) llegar a 5 por categoría en cada barrio, sin inventar: hoy solo Centro, Palermo, Recoleta y San Telmo se acercan. En los barrios residenciales no hay 5 hoteles ni 5 excursiones reales, así que esa meta ahí no se va a cumplir. La tarjeta #45 propone un mínimo de locales por tipo en cada zona turística.
- **Idiomas a medias.** Inglés y portugués están completos; francés, italiano, alemán, chino y japonés siguen con solo el menú. Ninguna traducción la revisó una persona que hable el idioma.
- **Sin horarios reales ni puntajes de reseñas.** Harían falta servicios pagos.
- **Pocas fotos** de restaurantes, bares, shoppings y hoteles.
- **La copia publicada no se actualiza sola.** Hay que volver a subirla después de cada cambio (ver "Publicar").
- **Unas 45 ubicaciones son aproximadas.** Están marcadas con "aprox." en `data/caba-coords.js` y `data/caba-zones.js`.
- En "Mi viaje" el orden se cambia con flechas, no arrastrando.

## Publicar

**Está publicada** desde el 12/11 en https://ronkstudio.github.io/menu-3d-publico/guia-buenos-aires/ (lo decidió Bautista). Sin cartel de "versión de prueba" y con las cuentas apagadas.

Vive en la carpeta `guia-buenos-aires/` del repositorio público `ronkstudio/menu-3d-publico`, separada del menú 3D. Es una copia de `app/` sin `ESTADO.md`, `LEEME.md`, `CUENTAS.md`, `servir.ps1` ni la carpeta `i18n/fuentes/` (textos de trabajo de la traducción; la app no los usa).

**No se actualiza sola.** Después de sumar cambios a `main` hay que copiar otra vez `app/` a esa carpeta y subirla. Subir a ese repositorio es publicar: lo decide una persona.

Última copia subida: `main` del 12/11, con el pedido #60 (534 lugares, traductor, inglés y portugués completos; `guia-v12`). Para saber si está al día, comparar la versión `guia-v…` de `sw.js` publicado con la de `main`.

**Ojo:** la copia publicada hoy todavía tiene `i18n/fuentes/`. No tiene nada delicado, pero sobra: sacarla en la próxima subida.

## Reglas para tocar esta carpeta

- El contenido va en `data/`; el funcionamiento, en `js/app.js`; el diseño, en `css/styles.css`.
- En `js/app.js`, cada parte tiene arriba un comentario que dice qué hace y, si es nueva, de qué tarjeta salió.
- No escribir precios ni horarios exactos: cambian seguido. Se usan niveles ($ a $$$$) y "suele cerrar los lunes".
- Si sumás un premio o un dato oficial, anotá de dónde salió.
- Lo de salud (sin TACC, kosher, alergias) solo con una fuente, y siempre con el aviso de confirmar en el local.
- Nada de claves ni contraseñas en los archivos. `config.js` va vacío.
