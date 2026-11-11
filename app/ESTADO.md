# Estado del prototipo

Para los dos Claude: acá está escrito qué se hizo, qué se probó y qué falta. **Actualizalo cada vez que cambies algo de `app/`.**

Última actualización: 11 de noviembre de 2026, Claude de `ronkstudio`.

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

1. **¿Se publica?** Bautista pidió un link para compartir. Claude no pudo publicarlo solo. El Claude de `ezebesserr` propuso hacerlo con un cartel visible de "versión de prueba, datos sin verificar".
2. **¿Se encienden las cuentas?** Hay que resolver lo de la clave pública (ver `CUENTAS.md`).
3. **¿Se muestran los filtros sin TACC y kosher** antes de confirmar los lugares uno por uno?
4. **¿Qué idiomas van primero?** (tarjeta #11). Hoy está solo en español.

## Qué está hecho

- **Explorar:** 297 lugares en 9 categorías (qué ver, comer, noche, tours, excursiones, hospedaje, compras, deportes, entretenimiento), buscador que entiende sinónimos, filtros por tipo, barrio, precio y "abre hoy", y orden por recomendación, cercanía o precio.
- **Comer con una condición:** filtros por vegetariano, vegano, sin TACC y kosher. La ficha avisa siempre que hay que confirmar en el local. Los lugares "100 %" están en `dietFull` de `data/caba-extra.js`.
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

## Qué NO se probó

- **Las cuentas de usuario.** Nada: sin un proyecto de Supabase no hay cómo. Es lo primero que hay que probar al encenderlas.
- "Cerca mío" y "Mi ubicación" (necesitan permiso de ubicación en un celular real).
- Compartir, imprimir y el enlace de Uber.
- Cortar internet de verdad y usar la app, y la instalación en el celular.
- Nada en un iPhone ni en un Android de verdad.

## Qué falta o está flojo

- **Datos sin verificar.** Direcciones, días de cierre y si los lugares siguen abiertos salen de lo que sabe Claude. Muchos aparecen en OpenStreetMap en esa dirección, pero no se confirmó uno por uno. Hay que revisarlos antes de publicar.
- **Sin TACC y kosher son temas de salud y de fe.** Solo hay 3 lugares sin TACC y 2 kosher, los que una búsqueda describió como dedicados. Hay que confirmarlos. No hay opciones halal ni sin lactosa.
- **Las plazas de barrio** (etiqueta "vida de barrio") tienen descripciones genéricas. Se sumaron para que cada barrio tenga algo, con nombre y ubicación reales, pero sin conocer cada una.
- **No está todo lo que se puede hacer en la ciudad.** Son 297 lugares elegidos. La tarjeta #45 propone un mínimo de locales por tipo en cada zona turística.
- **Solo en español.**
- **Sin horarios reales ni puntajes de reseñas.** Harían falta servicios pagos.
- **Pocas fotos** de restaurantes, bares, shoppings y hoteles.
- **No está publicado** en internet: se abre solo en la compu.
- **Unas 45 ubicaciones son aproximadas.** Están marcadas con "aprox." en `data/caba-coords.js` y `data/caba-zones.js`.
- En "Mi viaje" no se puede cambiar el orden a mano, solo por cercanía.

## Publicar

Como este repositorio es privado, la forma más simple es publicar una copia de la carpeta `app/` (sin `ESTADO.md`, `LEEME.md`, `CUENTAS.md` ni `servir.ps1`) en un repositorio público aparte, con GitHub Pages. Con una dirección `https` también funcionan la instalación en el celular y el uso sin internet.

Publicar lo decide una persona.

## Reglas para tocar esta carpeta

- El contenido va en `data/`; el funcionamiento, en `js/app.js`; el diseño, en `css/styles.css`.
- En `js/app.js`, cada parte tiene arriba un comentario que dice qué hace y, si es nueva, de qué tarjeta salió.
- No escribir precios ni horarios exactos: cambian seguido. Se usan niveles ($ a $$$$) y "suele cerrar los lunes".
- Si sumás un premio o un dato oficial, anotá de dónde salió.
- Lo de salud (sin TACC, kosher, alergias) solo con una fuente, y siempre con el aviso de confirmar en el local.
- Nada de claves ni contraseñas en los archivos. `config.js` va vacío.
