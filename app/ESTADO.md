# Estado del prototipo

Para los dos Claude: acá está escrito qué se hizo, qué se probó y qué falta. **Actualizalo cada vez que cambies algo de `app/`.**

Última actualización: 13 de noviembre de 2026, Claude de `ronkstudio` (tarjeta #154).

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
2. ~~¿Se encienden las cuentas?~~ Decidido el 13/11: no hay cuentas (tarjeta #148).
3. **¿Se muestran los filtros sin TACC y kosher** antes de confirmar los lugares uno por uno?
4. **¿Qué idiomas siguen?** (tarjeta #11). Hoy están completos español, inglés y portugués; los otros cinco tienen solo el menú.

## Qué está hecho

- **Explorar:** 534 lugares en 9 categorías (qué ver, comer, noche, tours, excursiones, hospedaje, compras, deportes, entretenimiento), buscador que entiende sinónimos, filtros por tipo, barrio, precio y "abre hoy", y orden por recomendación, cercanía o precio.
- **Comer con una condición:** filtros por vegetariano, vegano, sin TACC y kosher. La ficha avisa siempre que hay que confirmar en el local. Los lugares "100 %" están en `dietFull` de `data/caba-extra.js`.
- **Tanda nueva de lugares (tarjeta #54):** 162 lugares en `data/caba-mas.js`: 26 iglesias y templos, 19 museos y paseos, 40 lugares para comer, 19 de noche, 17 hoteles, 11 de entretenimiento, 3 estadios y 27 excursiones (Tigre y el Delta abiertos en 12, paracaidismo, globo, cabalgatas, estancias y pueblos de campo). Las ubicaciones salen de buscar cada dirección en OpenStreetMap; 16 están puestas a mano ("aprox."). Unos 70 figuran en OpenStreetMap con ese mismo nombre; del resto solo se confirmó que la dirección existe. Falta confirmar uno por uno que sigan abiertos.
- **Verificación y zonas más visitadas (tarjeta #56):** se cruzaron los lugares de la ciudad con el registro de OpenStreetMap (nombre, ubicación y tipo de local). 296 de 401 coincidieron; de los restaurantes, bares y hoteles que no aparecían se buscaron 14 en la web. Resultado: se sacó el Mercado de los Carruajes (cerró) y se corrigió la dirección de Fukuro (se mudó). Se sumaron 76 lugares para comer y salir en Puerto Madero, San Telmo, Centro, Retiro, Recoleta, La Boca, Almagro, Villa Crespo y Palermo, todos tomados de OpenStreetMap. El filtro de barrios ahora muestra solo los 12 más visitados (lista `filterBarrios` en `data/caba-mas.js`) y ya no ofrece "Fuera de CABA"; los demás lugares siguen en el buscador y en el mapa.
- **Traductor de toda la app (tarjeta #59):** `i18n/traductor.js` cambia cada texto que aparece en pantalla por el del idioma elegido, usando un diccionario por idioma (`i18n/dict/`). Inglés, portugués, francés e italiano completos (unos 2.100 textos cada uno, con las descripciones y consejos de los 534 lugares). Francés e italiano se sumaron en la tarjeta #61; ahí también se agregaron a los cuatro idiomas los títulos de "Para almorzar ahora", "Para esta noche" y los demás según la hora, que habían quedado afuera. Probado en el navegador (12/11): todas las pantallas en francés, italiano, español y portugués a 375 de ancho, sin errores en la consola; los textos con números, días y fechas salen bien. En francés la grilla de secciones del inicio se salía de la pantalla por palabras largas: se arregló en `css/styles.css`. Nombres de lugares, calles y barrios quedan en español a propósito. Para sumar un idioma se traducen las listas de `i18n/fuentes/` (ahí está explicado).
- **Boliches (tarjeta #63):** 11 lugares para ir a bailar en `data/caba-boliches.js`, con el tipo "Para bailar" dentro de Noche, un botón "Boliches" en el inicio y los días en que suelen abrir. Cada uno se verificó en OpenStreetMap o en páginas de venta de entradas de 2026; tres ubicaciones son aprox. No se cargaron Cruza ni Singapur (no aparecen en ningún lado) ni Non Stop (las fuentes no coinciden en dónde queda). Probado en el navegador en español y francés, a 375 de ancho, sin errores. De paso, el traductor ya traduce el último día de listas como "jueves, viernes, sábados." y el cartel "Hoy funciona".
- **Hoy en Buenos Aires (tarjeta #64):** sección del inicio que muestra solo lo que pasa hoy, separado en "De día" y "A la noche". Junta los lugares que funcionan solo algunos días (ferias, La Bomba de Tiempo, boliches) y una agenda fija semanal con fuente (`data/caba-hoy.js`: fiesta de los martes en Kika, after office de los miércoles en Terrazas del Este, peña de los jueves en Tamarisco, etc.). Lo de día desaparece a las 20; hasta las 6 de la mañana se sigue mostrando la noche anterior. Reemplaza el cartel "Hoy es domingo: …". Probado simulando domingo, lunes, martes, jueves y la madrugada del sábado, sin errores.
- **Eventos del día de la agenda oficial (tarjeta #65):** la sección "Hoy" también muestra, con 📅, los eventos puntuales de la agenda oficial de la Ciudad (linda.buenosaires.gob.ar): conciertos, clases, visitas, funciones. Las muestras largas quedan afuera. La Ciudad no deja leer esa agenda directo desde otra página, así que `herramientas/armar-hoy.ps1` la baja y arma `data/hoy.json`. **El paso automático** (`.github/workflows/publicar-guia.yml`, desde el 13/11 en este repositorio) la baja a las 6 y a las 15 de Buenos Aires, junto con la de Berlín, y vuelve a publicar la guía; no cambia nada en el repositorio. La primera corrida salió bien (137 eventos). Si deja de andar, la guía no se rompe: a los 3 días deja de mostrar esos eventos. Los títulos de los eventos quedan en español: vienen así de la fuente. Probado el 12/11 con 137 eventos reales, en español y francés, a 375 de ancho; sin el archivo, la sección sigue con lo fijo y sin errores.
- **Ruta en Google Maps arreglada (12/11):** la ruta del viaje mandaba coordenadas y Google ponía el nombre del lugar más cercano que conocía (aparecía "Obra Social del Poder Judicial" en vez de Cadore). Ahora manda nombre y dirección de cada parada. Probado: Google Maps muestra las 7 paradas correctas.
- **Armá tu viaje rediseñado (tarjeta #59):** cinco pasos numerados, botones grandes y una barra fija con el resumen. En Mi viaje, las acciones quedaron ordenadas y cada lugar se puede subir o bajar con flechas.
- **Barrios:** 46 de los 48 tienen al menos un lugar. Faltan Vélez Sarsfield y Villa Lugano: no encontramos nada que valga la pena sin inventar.
- **Shoppings:** Abasto, DOT, Unicenter, Alto Palermo, Alcorta, Distrito Arcos y seis más.
- **Ficha de lugar:** foto, consejo, precio, subte más cercano, cómo llegar, opiniones en Google Maps, Uber, disponibilidad en Booking para hoteles, qué hay cerca, y "Marcar que fui".
- **Mapa:** todos los lugares con ubicación, 6 capas de zonas (turísticas, dónde alojarse, noche, gastronomía, compras, parques) y 22 puntos de ayuda.
- **Mi viaje:** guardar lugares por día, ordenar por cercanía, ver el día en el mapa, ruta en Google Maps, compartir e imprimir. Con fecha de llegada avisa si algo cierra ese día y muestra el pronóstico de cada día.
- **Armado automático:** con días, intereses, presupuesto y ritmo arma el recorrido por zonas. Respeta la dieta del perfil.
- **Perfil de viaje (dentro de Mi viaje):** dieta, presupuesto y si viaja con chicos. La guía marca "Apto para vos". No hay cuentas de usuario (tarjeta #148).
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

- **Las cuentas de usuario.** Se sacaron (tarjeta #148).
- "Cerca mío" y "Mi ubicación" con el permiso real de un celular (en la compu se probaron con una ubicación simulada).
- Compartir con el menú del celular, la ventana de impresión de verdad, y que los enlaces de Uber, Google Maps, Booking, WhatsApp y teléfonos abran bien (se revisó que estén bien armados, no se abrieron).
- Cortar internet de verdad y usar la app, y la instalación en el celular.
- Nada en un iPhone ni en un Android de verdad.

## Qué falta o está flojo

- **Verificación (12/11/2026).** Los 553 lugares de entonces se cruzaron con OpenStreetMap (los 12 sumados el 13/11 salen de guías y notas recientes; ver abajo qué quedó sin confirmar): todos figuran salvo 18, que se confirmaron uno por uno en la web (Michelin, 50 Best, Time Out, el sitio de turismo de la Ciudad, la prensa). Osaka se mudó a Colegiales y se corrigió. OpenStreetMap confirma que el local existe, no que siga abierto hoy. No se revisaron uno por uno las descripciones ni los días de cierre.
- **Sin TACC, kosher y halal son temas de salud y de fe.** Hay 5 lugares sin TACC y 7 kosher, todos con fuente (su web, CeliMap o la guía kosher de Time Out). Halal: no encontramos restaurantes con certificado; Al Rawshe figura como halal en reseñas y la guía lo aclara. No hay opciones sin lactosa.
- **Berlín y París no tienen lugares todavía.** Es la etapa 2. Berlín la hace `ezebesserr` (#126). París la pidió Bautista el 13/11 y va en tarjetas chicas (ver #102). Madrid y Roma no se empezaron.
- **Halal y kosher ya no son filtros (#139).** Bautista pidió sacarlos (13/11/2026). Se sacaron de los filtros de dieta, del perfil de viaje y del tipo "Kosher" en Dónde comer. Los 7 lugares kosher pasaron a su tipo de cocina (parrilla, pizzería, de autor, dulces, etc.) y en su ficha sigue diciendo que son kosher. Si alguien tenía elegido kosher o halal en su perfil, se borra solo.
- **Cuentas con mail (#140):** se encendieron y probaron con Supabase, y después se sacaron (ver #148).
- **Sin cuentas (#148):** Bautista decidió que la guía funcione sin usuario ni mail. Se sacó la pantalla "Guardá tu viaje" (#146), el botón 👤, "Mi cuenta", el inicio de sesión con Supabase y el paso de la publicación que lo encendía. "Mi perfil de viaje" (comidas, presupuesto, chicos) pasó al final de "Mi viaje", plegado. Quien tenga guardado el enlace viejo a "Mi cuenta" cae en "Mi viaje". "Armar tu viaje" no cambió.
- **Botón de ayuda nuevo (#150):** el 🆘 de arriba dejó de ser un emoji: ahora es una píldora roja con un salvavidas dibujado y la palabra "SOS", con un latido suave (se apaga si el celular pide menos movimiento). Lleva al mismo lugar: Info > Ayuda. Probado en celular y compu.
- **París, etapa 1 (#102):** París está en el selector de ciudades con toda la parte de Info armada con datos de París: barrios, metro y RER, boletos (Île-de-France Mobilités), los tres aeropuertos (CDG, Orly y Beauvais), seguridad y estafas típicas, info práctica, calendario, frases en francés, apps útiles (con enlaces revisados al App Store y Google Play), check-in de aerolíneas y dónde fijarse si hay huelgas. En Ayuda hay 28 puntos en el mapa: 6 comisarías, 9 hospitales con guardia, 4 consulados (Argentina, Chile, España y Estados Unidos, confirmados en sus sitios oficiales) y las estaciones y aeropuertos. "Hoy en París" lee la agenda oficial de la ciudad (opendata.paris.fr) con `herramientas/armar-hoy-paris.ps1`, que corre en cada publicación. Traducido a los 7 idiomas (`i18n/fuentes/paris.txt`). Probado en la compu y en celular, en español e inglés, y Buenos Aires y Berlín siguen iguales. **Falta:** los lugares (etapa 2), los consulados de los demás países (sus sitios no se pudieron leer) y las oficinas de turismo.
- **París, Imperdibles (#153):** 62 lugares en `data/paris-lugares.js`, en 9 tipos con al menos 4 cada uno: íconos, miradores, museos (17), iglesias, históricos, paseos, parques, plazas y barrios para caminar. Todos figuran en OpenStreetMap, de donde sale su ubicación (`data/paris-coords.js`; 3 se ubicaron a mano). El Centro Pompidou no está porque cerró por obras hasta 2030. Se sumaron 5 barrios (Islas del Sena, Distrito 13, Passy, Bosque de Boulogne y La Villette) y el filtro de barrios de Explorar. Las descripciones todavía no están traducidas (tarjeta #159).
- **París, Dónde comer (#154):** 66 lugares en 13 tipos con al menos 4 cada uno: bistrós, bouillons, brasseries, cafés históricos, cafés de especialidad, panaderías, dulces, crêperies, al paso, cocinas del mundo, de autor, vegetarianos y sin TACC. Todos figuran en OpenStreetMap; los que tienen varias sucursales se ubicaron en la dirección de la guía. **Dietas con fuente:** los 4 sin TACC (Chambelland, Copains, Judy y Kapunka Vegan) dicen en su propio sitio que todo es sin gluten; los vegetarianos, en su sitio o en OpenStreetMap (ver `data/paris-extra.js`). Sin estrellas Michelin exactas, porque cambian cada año.
- **Barrio + categoría:** algunos barrios no tienen nada en ciertas categorías (por ejemplo, salidas de noche en La Boca o Belgrano). Es esperable en barrios residenciales y no se completó.
- **Las plazas de barrio** (etiqueta "vida de barrio") tienen descripciones genéricas. Se sumaron para que cada barrio tenga algo, con nombre y ubicación reales, pero sin conocer cada una.
- **No está todo lo que se puede hacer en la ciudad.** Son 534 lugares. Bautista pidió (11/11) llegar a 5 por categoría en cada barrio, sin inventar: hoy solo Centro, Palermo, Recoleta y San Telmo se acercan. En los barrios residenciales no hay 5 hoteles ni 5 excursiones reales, así que esa meta ahí no se va a cumplir. La tarjeta #45 propone un mínimo de locales por tipo en cada zona turística.
- **Idiomas sin revisar.** Los 7 idiomas están completos (alemán, chino y japonés desde el 12/11/2026), pero ninguna traducción la revisó una persona que hable el idioma. Las frases para decir quedan en castellano a propósito.
- **Sin horarios reales ni puntajes de reseñas.** Harían falta servicios pagos.
- **Fotos (13/11/2026, #110):** 299 de 565 lugares tienen foto (53 %; antes 99). Monumentos, iglesias, museos, teatros, estadios, shoppings y excursiones casi todos tienen; faltan sobre todo restaurantes, bares, boliches y hoteles: se buscaron dos veces (Wikipedia, Wikidata, Commons por nombre y por ubicación, y Flickr) y no tienen fotos libres. Sus fotos originales (web, Instagram, Google) tienen derechos de autor: solo se pueden usar con permiso del local. Para llegar al 75 % (424) habría que usar fotos ilustrativas o pedirles fotos a los locales.
- **Unas 45 ubicaciones son aproximadas.** Están marcadas con "aprox." en `data/caba-coords.js` y `data/caba-zones.js`.
- En "Mi viaje" el orden se cambia con flechas, no arrastrando.

## Publicar

**Está publicada** en https://ronkstudio.github.io/proyecto-compartido/ desde el 13/11 (tarjeta #105). Sin cartel de "versión de prueba" y con las cuentas apagadas. Se abre en Buenos Aires; con `?ciudad=berlin` abre directo en Berlín.

**Se publica sola desde este repositorio** (`.github/workflows/publicar-guia.yml`): cada vez que se suma a `main` un cambio de `app/` o `herramientas/`, y dos veces por día para traer la agenda de "Hoy". Como sumar a `main` lo decide una persona, publicar también. Para publicar a mano: pestaña Actions > "Publicar la guía" > Run workflow.

Lo publicado es una copia de `app/` sin los `.md`, `servir.ps1`, los `zz-*` ni la carpeta `i18n/fuentes/` (textos de trabajo de la traducción; la app no los usa). Antes de sumar un cambio de la app, subir la versión `guia-v…` de `sw.js` para que los celulares la actualicen.

Hasta el 13/11 estuvo en `ronkstudio/menu-3d-publico/guia-buenos-aires/`. Ese repositorio es solo del menú 3D de Bautista: lo de la guía se sacó de ahí y no se vuelve a tocar. El link viejo deja de andar.

## Reglas para tocar esta carpeta

- El contenido va en `data/`; el funcionamiento, en `js/app.js`; el diseño, en `css/styles.css`.
- En `js/app.js`, cada parte tiene arriba un comentario que dice qué hace y, si es nueva, de qué tarjeta salió.
- No escribir precios ni horarios exactos: cambian seguido. Se usan niveles ($ a $$$$) y "suele cerrar los lunes".
- Si sumás un premio o un dato oficial, anotá de dónde salió.
- Lo de salud (sin TACC, kosher, alergias) solo con una fuente, y siempre con el aviso de confirmar en el local.
- Nada de claves ni contraseñas en los archivos. Las cuentas se sacaron: no hay `config.js`.

- **Se actualiza sola (#71):** al abrir o volver a la guía busca si hay versión nueva y, si la hay, recarga una vez. Ya no hace falta cerrarla y abrirla.

- **Check-in del vuelo (#73):** pestaña "✈️ Tu vuelo" en Info útil y botón en el inicio. Hay un botón por aerolínea, un buscador para las demás y consejos. El check-in en sí se hace en la web de cada aerolínea: la guía no puede hacerlo.

- **Botón de check-in (#75):** en "Tu vuelo", un botón grande "Hacé tu check-in" abre un buscador de aerolíneas. Cada una lleva directo a su pantalla de check-in (21 direcciones revisadas el 12/11/2026). Si la aerolínea no está, la busca en internet.

- **Revisión general y diseño nuevo (#77):** se recorrieron todas las pantallas en español e inglés sin errores. Diseño más cálido y aventurero: colores de atardecer (terracota, verde bosque, crema), títulos con letra Fraunces y líneas de mapa topográfico en la portada. Nueva pestaña "🛬 Recién llegado" con las primeras horas paso a paso, y "Frases para defenderte" en Práctica. "Hoy" muestra 3 por franja y el resto en "Ver más".

- **Recién llegado interactivo (#79):** cada paso se abre y se cierra, se marca como listo (con barra de avance guardada en el celular) y trae botones propios: ruta desde Ezeiza o Aeroparque al alojamiento que cargues, Uber con destino cargado, Cabify, DiDi, micro; chips prepagos y eSIM; calculadora de cambio, cajeros y casas de cambio cerca; mapa oficial de puntos SUBE, app SUBE y buscador de rutas; teléfonos para tocar y llamar, farmacias cerca y volver al alojamiento; ideas para el primer día.

- **Sin calculadora de propina (#81):** se sacó "Propina y cuenta dividida" de Práctica, a pedido de Bautista. Lo de la propina sigue explicado en "Dinero y pagos".
- **Agenda de Hoy más completa y aviso de bienvenida (#83):** "Hoy" ahora trae toda la agenda de la Ciudad, también muestras y ciclos (🖼️), y esconde lo que empezó hace más de una hora. Un mismo evento en muchos lugares (por ejemplo, la Noche de los Museos) se ve en una sola fila. Hay destacados elegidos a mano (⭐) en `data/caba-hoy.js` (`X.destacados`), sacados de Time Out y Resident Advisor: Instagram no se puede leer automáticamente, así que lo que se vea ahí se carga a mano. Al final de "Hoy", "Buscar más planes" lleva a otras agendas. La primera vez que alguien abre la guía le aparece un aviso que lo invita a leer Info (sale una sola vez).
- **Inicio más ordenado (#85):** si todavía no armaste un viaje, "Armá tu viaje" aparece arriba de todo. La sección "Este mes en Buenos Aires" se achicó a una línea dentro de Hoy que lleva al calendario.
- **Lista para sumar ciudades (#87):** lo propio de Buenos Aires que estaba escrito en el código (aeropuertos, apps de viaje, chips, SUBE, aerolíneas del check-in, frases, moneda, centro y límites del mapa, agendas de Hoy) pasó a `data/caba-local.js`. Cómo sumar una ciudad: `NUEVA-CIUDAD.md`. El selector de ciudades se arma cuando empiece la expansión.
- **Más opciones para dietas (#89):** 2 lugares sin TACC (TACCOFF, Dulce Seminare), 5 kosher (Agus Kitchen, Forno Fettuccine, Yum, L'harmonie, Bambina Pizza) y un filtro Halal con Al Rawshe, que las reseñas describen como halal (sin certificado confirmado: la ficha lo aclara).
- **Lugares verificados (#91):** se cruzaron los 553 lugares con OpenStreetMap; los 18 que no coincidían y los 11 locales que estaban marcados como dudosos se confirmaron en la web. Osaka se mudó (ahora Concepción Arenal 2913, Colegiales) y BNN pasó a llamarse "BNN Costanera" (lo de "ex Banana" no se pudo confirmar).
- **Más fotos (#93):** 35 restaurantes, bares, salas y hoteles más tienen foto (de 15 a 50), todas de Wikimedia Commons con licencia libre revisada, una por lugar.
- **Alemán, chino y japonés completos (#96):** se tradujeron los 2.400 textos de cada idioma (pantallas, Recién llegado, Hoy, descripciones y consejos de los 553 lugares, etiquetas y reglas con números). Probado en la guía: inicio, aviso, Info y fichas sin textos en castellano, salvo las frases para decir (a propósito).
- **Selector de ciudad (#98):** el nombre de la ciudad en la barra de arriba es un botón que abre la lista de ciudades (`data/ciudades.js`). La elegida queda guardada en el celular, igual que el idioma, y solo se cargan sus archivos; también se puede abrir con un enlace (`?ciudad=berlin`). El viaje, el perfil, el pasaporte, los pasos de Recién llegado y el aviso de bienvenida son por ciudad. Buenos Aires sigue igual y es la que se abre por defecto. Título, bienvenida, "Hoy en …" y "Tus primeras horas en …" cambian con la ciudad y se traducen con reglas. El conversor ofrece pesos argentinos cuando la ciudad usa otra moneda. Una ciudad sin lugares cargados muestra un cartel y deja usar Info. Los textos de cada ciudad van en su propia lista de traducción. Probado con Buenos Aires y una ciudad de prueba vacía, en castellano y alemán, a 375 de ancho, todas las pantallas, sin errores en la consola. Berlín se sumó en la #99; Madrid, Roma y París (#100 a #102) todavía no se empezaron.
- **Berlín, etapa 1 (#99):** Berlín aparece en el selector con toda la estructura y sin lugares todavía (los lugares son la etapa 2, después de que Bautista apruebe esta estructura). Tiene barrios y zonas del mapa, Recién llegado (BER, trenes al centro, apps), Cómo moverte (zonas AB/C, BVG, validar), Qué evitar, Dónde pedir ayuda (112/110 y 21 puntos de OpenStreetMap), Info práctica, Tu vuelo, calendario y frases en alemán. Todas las direcciones web se abrieron una por una; easyJet y SWISS quedaron afuera del check-in porque no se encontró su página. "Hoy en Berlín" usa la agenda cultural abierta de Berlín (kulturdaten.berlin) con `herramientas/armar-hoy-berlin.ps1`: solo los 6 distritos céntricos (Mitte, Friedrichshain-Kreuzberg, Pankow, Charlottenburg-Wilmersdorf, Tempelhof-Schöneberg, Neukölln), sin trámites ni ayudas de biblioteca y sin repetidos (unos 75 eventos en 3 días). Los títulos quedan en alemán, como vienen. El paso automático (`.github/workflows/publicar-guia.yml`) la actualiza junto con la de Buenos Aires. Los 277 textos nuevos están en los 7 idiomas (`i18n/fuentes/berlin.txt`). Probado en la vista previa a 375 de ancho: Berlín en castellano, alemán y japonés (inicio, aviso, Hoy y las 7 pantallas de Info sin textos en castellano) y Buenos Aires sin cambios (553 lugares, Hoy), sin errores en la consola. Falta (opcional): límites de barrios en el mapa y estaciones de metro.
- **Dónde comer en Núñez (#107):** Núñez no tenía ningún lugar para comer; ahora tiene 7, de guías y notas de 2025 y 2026, con la ubicación sacada de OpenStreetMap: Ness (brasas, lista ampliada de Latin America's 50 Best), Piedra Pasillo (Guía Michelin), Garabato (bistró), Evelia (ítalo-argentina), Kalis Pizza (Time Out), Besares (parrilla, sitio de turismo de la Ciudad) y Oporto Almacén.
- **Mínimo 4 lugares por filtro (#108):** se revisaron todos los filtros de Buenos Aires (categorías, tipos, barrios, precios y dietas). Ahora cada tipo tiene al menos 4 lugares:
  - **Lugares nuevos (5):** Casa Sáenz (dulces), Gran Bar Danzón y Lo de Joaquín Alberdi (bares de vinos), Buller (cervecería) y el Gran Templo Paso (templos).
  - **Tipos reacomodados:** los tipos que tenían 1 a 3 lugares se juntaron con otro parecido (por ejemplo, Mirador pasó a Ícono, y Polo, Turf, Tenis, Golf, Automovilismo y Náutico pasaron a "Otros deportes"). La lista está al final de `data/caba-mas.js` ("reacomodo").
  - **Sin confirmar del todo:** que Oporto Almacén siga abierto (la nota más nueva es de abril de 2025), la ubicación de Buller (aproximada) y que Besares tenga un solo local en 11 de Septiembre 3301 (OpenStreetMap marca otros con ese nombre).
  - **Se perdieron chips:** Mirador, Fútbol (en Imperdibles), Terraza con vista, Gastronómico, Navegación y los de un solo deporte. Dos movidas son flojas: "Alquiler temporario" quedó en Hotel y "Salas de escape" en Con chicos. Si se prefiere mantener esos chips, hay que sumar lugares reales.
  - El armado del viaje (interés "Fútbol") y el logro "Hincha" ahora buscan la etiqueta fútbol, para seguir encontrando La Bombonera, el Monumental y la Casa de D10S.
  - Probado en la vista previa a 375 de ancho, en castellano y japonés, sin errores: 565 lugares, Núñez con 7 para comer y ningún tipo con menos de 4.
- **Más fotos (#110):** 196 fotos nuevas de Wikimedia Commons, todas con licencia libre y revisadas una por una (sin logos, mapas, montajes ni lugares homónimos). Se buscaron por la foto del artículo de Wikipedia (con la ubicación a menos de 1,5 km), por nombre en Commons y por fotos sacadas a menos de 40 m de la dirección. Prioridad: los destacados y los monumentos. Probado: las 294 fotos cargan en los dos tamaños que usa la guía (500 y 960 px).
- **Lugares sin foto (#114):** en vez del emoji (carne, copa, etc.) muestran una portada con el nombre del lugar en letra fina, sobre el color de su categoría. Probado en celular (375 px): carrusel, lista y ficha. **(#117)** El botón de Google Maps de cada ficha ahora dice "Opiniones, horarios y fotos" (abre el lugar con sus fotos); el botón aparte "Ver fotos" de #114 se sacó porque hacía lo mismo. En los 7 idiomas y en la ayuda. Vale también para Berlín.
- **Cuántos viajan (#119):** Armá tu viaje tiene una pregunta nueva (la 2): cuántas personas viajan, de 1 a 20. Se ve en el resumen de abajo y en Mi viaje. No cambia qué lugares se eligen (no hay datos de qué lugar recibe grupos); con 5 o más muestra dos consejos: reservar las cenas con tiempo y que en taxi o Uber van a necesitar dos autos. Probado en celular, en castellano e inglés.
- **Paros, marchas y cortes (#120):** cuando hay un aviso cargado, aparece un recuadro rojo llamativo arriba del inicio y en Info > Ayuda. En Ayuda, además, siempre hay links para fijarse antes de salir: estado del subte (Emova), cortes de tránsito oficiales de la Ciudad y noticias del día. En Berlín: BVG, S-Bahn y noticias (no hay avisos cargados).
  - **Cómo cargar un aviso:** en `data/avisos.json`, dentro de la ciudad (`caba` o `berlin`), sumar uno con `tipo` (paro, marcha, corte u otro), `titulo`, `texto`, `desde` y `hasta` (AAAA-MM-DD, inclusive), `fuente` y `link` (https). Se ve solo entre esas fechas, con la hora de la ciudad, y después desaparece solo. Si se quiere traducido, sumar el título y el texto a `i18n/fuentes/ui.txt` y sus traducciones. La guía no detecta paros sola.
  - Cargado ahora: cortes en Av. del Libertador (Palermo) hasta el sábado 14/11, por el desarme de los escenarios de la visita del Papa (fuente: Perfil, con el cronograma de la Ciudad; no lo encontré en la web de la Ciudad).
  - Los estilos están al final de `css/styles.css` (sección "Avisos de paros"). Versión guia-v37.
  - Probado en celular, en castellano e inglés, y en Berlín (sin aviso, solo los links).
- **Consulados, embajadas y comisarías (#121):** en Info > Ayuda (y en el mapa, con "Puntos de ayuda") hay un grupo nuevo, "Consulados y embajadas", con 19 países: los de los idiomas de la guía y los de la región. También hay 9 comisarías vecinales más, en los barrios turísticos (San Telmo, La Boca, Monserrat, Puerto Madero, Retiro, Recoleta, Palermo y Belgrano).
  - **Botón de ayuda:** arriba de todo, en todas las pantallas, hay un botón rojo 🆘 que lleva a Info > Ayuda. En celulares angostos se esconde la palabra "Guía" del logo para que entre.
  - **Fuentes (13/11/2026):** consulados de Brasil, Chile, España e Italia, de sus webs oficiales. El resto, de la guía de representaciones extranjeras de la Cancillería argentina. Comisarías: datos abiertos de la Ciudad. Ubicaciones: OpenStreetMap. Sin horarios.
  - **Faltan Uruguay y Perú:** el consulado de Uruguay se mudó en 2025 y no encontré la dirección nueva en una fuente oficial; el dato de Perú en Cancillería no cierra. Para esos y cualquier otro país queda el link "¿Tu país no está en la lista?", que lo busca en el mapa.
  - Berlín no tiene consulados cargados: queda el link para buscarlos en el mapa.
  - Probado en celular (375 px), en castellano e inglés: el botón 🆘 entra sin cortar el nombre de la ciudad, la lista y el mapa muestran los puntos nuevos. Berlín sin errores.
- **Apps útiles (#137):** nueva pestaña en Info ("📱 Apps útiles") y botón en "Antes de salir" del inicio. Cada app tiene un botón a su tienda: en iPhone va al App Store, en Android a Google Play (si ya está instalada, la tienda ofrece "Abrir"); en la compu se ven los dos. Buenos Aires: Uber, Cabify, DiDi, Google Maps, Moovit, BA Ecobici, PedidosYa, Rappi, Mercado Pago, Mercado Libre y WhatsApp. Berlín: BVG Fahrinfo, BVG Tickets, Google Maps, Uber, Bolt, FREENOW, Wolt y WhatsApp. Las páginas de las tiendas se revisaron una por una (13/11/2026). Están en `data/<ciudad>-local.js` (`apps`).
  - Se sacaron de Moverse los bloques "Aeropuertos" y "Apps útiles" (pedido de Bautista). Lo de los aeropuertos sigue en Recién llegado y Tu vuelo.
  - Probado en celular (375 px). No se probó en un iPhone real.
- **Hoy en carrusel (#138):** "De día" y "A la noche" ya no son listas: son carruseles, una opción al lado de la otra, que se deslizan como "No te lo podés perder". Los lugares de la guía muestran su foto (o la portada con el nombre). Los eventos usan la foto del lugar donde se hacen si ese lugar está en la guía; si no, una portada con el ícono y la hora (o "⭐ Destacado"). Se sacó el "Ver más": ahora se ven todas deslizando. Probado en celular (375 px).
- **Sin amarillo en el diseño (#122):** a pedido de `ezebesserr`, lo amarillo de los botones y el diseño pasó a terracota y coral, los colores que ya usa la app.
  - **En terracota:** el botón "Buscar" de la portada, el botón "Cómo llegar" de Moverse y el recuadro "Armá tu viaje".
  - **En coral:** el sol del logo, el ícono de la app, el brillo de la portada, el evento destacado de "Hoy", la barra de avance y los círculos de Recién llegado, los sellos conseguidos del pasaporte y el botón de cuenta.
  - Los avisos de Seguridad y los consejos, que en modo oscuro se veían amarillos, ahora son coral.
  - Sigue amarillo lo que es de los lugares: el color de la categoría Hospedaje, la etiqueta "★ Destacado" de cada lugar y la línea H del subte, que es su color real.
  - Probado en celular (390 px), en modo claro y oscuro, sin errores en la consola: inicio, Hoy, Info (Recién llegado, Moverse, Seguridad), pasaporte, Explorar y la ficha de un lugar.
