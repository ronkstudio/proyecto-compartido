# Estado del prototipo

Para los dos Claude: acá está escrito qué se hizo, qué se probó y qué falta. **Actualizalo cada vez que cambies algo de `app/`.**

Última actualización: 10 de noviembre de 2026, Claude de `ronkstudio`.

## Para decidir entre Bautista y Besser

El prototipo y el diseño acordado van por caminos distintos. Esto no lo resuelve Claude.

| Tema | Diseño acordado (`docs/diseno/pantallas.md`) | Prototipo (`app/`) |
|---|---|---|
| Idea general | Lo justo y necesario para quien recién llega | De todo: planear, recorrer y resolver |
| Menú de abajo | Inicio, Moverse, Lugares, Lo esencial | Inicio, Explorar, Mapa, Mi viaje, Info |
| Mapa propio | Por decidir | Sí, con capas de zonas |
| Zonas de seguridad | Solo consejos escritos | Mapa en verde, amarillo y rojo |
| Hospedaje | Fuera de la primera versión | Incluido |
| "Mi viaje" | Lista simple de guardados | Por día, con armado automático |
| Idiomas | Bienvenida con idioma | Solo español |
| Estilo visual | `docs/diseno/base.css` | Estilo propio en `app/css/styles.css` |

Preguntas abiertas:
1. ¿El prototipo pasa a ser la base de la app, o queda como banco de pruebas de ideas?
2. Si es la base, ¿se le aplica el estilo de `docs/diseno/base.css`?
3. ¿Qué partes del prototipo entran en la primera versión y cuáles esperan?

**Decidido el 10/11 (pregunta 1):** `ezebesserr` eligió usar el prototipo como base de la app. Las preguntas 2 y 3 siguen abiertas.

## Qué está hecho

- **Explorar:** 297 lugares en 9 categorías (se sumaron Deportes y Entretenimiento), buscador que entiende sinónimos, filtros por tipo, barrio, precio y "abre hoy", y orden por recomendación, cercanía o precio.
- **Comer con una condición:** filtros por vegetariano, vegano, sin TACC y kosher. La ficha avisa siempre que hay que confirmar en el local. Los lugares "100 %" están en `dietFull` de `data/caba-extra.js`.
- **Todos los barrios:** 46 de los 48 barrios tienen al menos un lugar. Faltan Vélez Sarsfield y Villa Lugano: no encontramos nada que valga la pena sin inventar.
- **Shoppings:** Abasto, DOT, Unicenter, Alto Palermo, Alcorta, Distrito Arcos y seis más.
- **Ficha de lugar:** foto, consejo, precio, subte más cercano, cómo llegar, opiniones en Google Maps, Uber, disponibilidad en Booking para hoteles y qué hay cerca.
- **Mapa:** todos los lugares con ubicación, más 7 capas de zonas y 22 puntos de ayuda.
- **Mi viaje:** guardar lugares, asignarlos a un día, ordenar por cercanía, ver el día en el mapa, abrir la ruta en Google Maps, compartir e imprimir. Con fecha de llegada avisa si algo cierra ese día.
- **Armado automático:** con días, intereses, presupuesto y ritmo arma el recorrido por zonas.
- **Inicio:** sugerencias según la hora, el día y el clima; colecciones; itinerarios; eventos del mes; conversor de moneda.
- **Info:** moverse, seguridad, ayuda, info práctica con checklist, y calendario.
- **Cómo pagar el transporte:** el primer bloque de Moverse está revisado contra el sitio oficial de SUBE (9/11, tarjeta #38, Claude de `ezebesserr`). Falta confirmar el pago con tarjeta o celular en subte y trenes; el detalle está en `docs/fuentes-de-informacion.md`.
- **Sin internet:** la lista y los textos funcionan; el mapa y las fotos necesitan conexión.

## Qué se probó

- Navegación completa en tamaño celular (375 de ancho) y en pantalla grande, sin errores.
- Filtros, buscador, fichas, guardar, armado automático, mapa de zonas y puntos de ayuda.
- Que carguen las 69 fotos y que los límites de los 48 barrios coincidan con el archivo oficial.

## Qué NO se probó

- "Cerca mío" y "Mi ubicación" (necesitan permiso de ubicación en un celular real).
- Compartir, imprimir y el enlace de Uber.
- El uso sin internet de punta a punta, y la instalación en el celular.
- Nada en un iPhone ni en un Android de verdad: solo en el navegador de la compu.

## Qué falta o está flojo

- **Datos sin verificar.** Direcciones, días de cierre y si los lugares siguen abiertos salen de lo que sabe Claude. Hay que revisarlos antes de publicar.
- **Niveles de seguridad.** Son una valoración, no datos oficiales. Conviene que los revise alguien que conozca la ciudad.
- **Solo en español.**
- **Sin horarios reales ni puntajes de reseñas.** Harían falta servicios pagos.
- **Pocas fotos** de restaurantes, bares y hoteles.
- **No está publicado** en internet: se abre solo en la compu.
- **Sin TACC y kosher son temas de salud y de fe.** Solo hay 3 lugares sin TACC y 2 kosher, los que una búsqueda describió como dedicados. Hay que confirmarlos uno por uno antes de publicar. No hay opciones halal ni sin lactosa.
- **Las plazas de barrio** (etiqueta "vida de barrio") tienen descripciones genéricas: se sumaron para que cada barrio tenga algo, con el nombre y la ubicación reales de OpenStreetMap, pero sin conocer cada una.
- **Los 130 lugares nuevos de la tarjeta #32** salen de lo que sabe Claude. Muchos aparecen en OpenStreetMap en esa dirección, pero no se verificó que sigan abiertos.
- **Unas 45 ubicaciones son aproximadas.** Están marcadas con "aprox." en `data/caba-coords.js` y `data/caba-zones.js`.
- En "Mi viaje" no se puede cambiar el orden a mano, solo por cercanía.

## Reglas para tocar esta carpeta

- El contenido va en `data/`; el funcionamiento, en `js/app.js`; el diseño, en `css/styles.css`.
- No escribir precios ni horarios exactos: cambian seguido. Se usan niveles ($ a $$$$) y "suele cerrar los lunes".
- Si sumás un premio o un dato oficial, anotá de dónde salió.
- Nada de claves ni contraseñas en los archivos.
