# Estado del prototipo

Para los dos Claude: acá está escrito qué se hizo, qué se probó y qué falta. **Actualizalo cada vez que cambies algo de `app/`.**

Última actualización: 11 de noviembre de 2026, Claude de `ronkstudio`.

## Cómo están las ramas

El prototipo se subió en cuatro pedidos de cambios, **apoyados uno sobre otro**. Hay que sumarlos en este orden:

| Orden | Pedido | Tarjeta | Qué trae |
|---|---|---|---|
| 1 | #29 | #28 | El prototipo base |
| 2 | #34 | #32 | Deportes, dietas, shoppings y lugares en casi todos los barrios |
| 3 | #36 | #35 | Cuentas de usuario (apagadas) y perfil de viaje |
| 4 | la rama `tarea-37-pasaporte-y-pronostico` | #37 | Pasaporte de sellos, pronóstico por día y calculadora |

Aparte, sin relación con los anteriores: pedido #31 (tarjeta #30), la comparación con la competencia en `docs/competencia.md`.

**Si vas a seguir trabajando en `app/`, partí de la rama más nueva**, no de `main`.

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
| Cuentas de usuario | No estaban | Preparadas, apagadas |
| Idiomas | Bienvenida con idioma | Solo español |
| Estilo visual | `docs/diseno/base.css` | Estilo propio en `app/css/styles.css` |

Preguntas abiertas:
1. ¿El prototipo pasa a ser la base de la app, o queda como banco de pruebas de ideas?
2. Si es la base, ¿se le aplica el estilo de `docs/diseno/base.css`?
3. ¿Qué partes del prototipo entran en la primera versión y cuáles esperan?
4. ¿Se publica? Bautista pidió un link público para compartir. Claude no pudo publicarlo: hace falta que una persona lo autorice (ver "Publicar", más abajo).
5. ¿Se encienden las cuentas? Hay que resolver lo de la clave pública (ver `CUENTAS.md`).

## Qué está hecho

- **Explorar:** 297 lugares en 9 categorías (qué ver, comer, noche, tours, excursiones, hospedaje, compras, deportes, entretenimiento), buscador que entiende sinónimos, filtros por tipo, barrio, precio y "abre hoy", y orden por recomendación, cercanía o precio.
- **Comer con una condición:** filtros por vegetariano, vegano, sin TACC y kosher. La ficha avisa siempre que hay que confirmar en el local.
- **Barrios:** 46 de los 48 tienen al menos un lugar. Faltan Vélez Sarsfield y Villa Lugano: no encontramos nada que valga la pena sin inventar.
- **Shoppings:** Abasto, DOT, Unicenter, Alto Palermo, Alcorta, Distrito Arcos y seis más.
- **Ficha de lugar:** foto, consejo, precio, subte más cercano, cómo llegar, opiniones en Google Maps, Uber, disponibilidad en Booking para hoteles, qué hay cerca, y "Ya fui".
- **Mapa:** todos los lugares con ubicación, 7 capas de zonas (seguridad, turísticas, alojamiento, noche, gastronomía, compras, parques) y 22 puntos de ayuda.
- **Mi viaje:** guardar lugares por día, ordenar por cercanía, ver el día en el mapa, ruta en Google Maps, compartir e imprimir. Con fecha de llegada avisa si algo cierra ese día y muestra el **pronóstico de cada día**.
- **Armado automático:** con días, intereses, presupuesto y ritmo arma el recorrido por zonas. Respeta la dieta del perfil.
- **Mi cuenta y perfil de viaje:** dieta, presupuesto y si viaja con chicos. La guía marca "Apto para vos". Las cuentas con mail están preparadas pero apagadas.
- **Pasaporte porteño:** marcar "Ya fui" y ganar 16 sellos.
- **Inicio:** sugerencias según la hora, el día y el clima; "Hoy en tu viaje"; colecciones; itinerarios; eventos del mes; conversor de moneda.
- **Info:** moverse, seguridad, ayuda, info práctica (con checklist y calculadora de propina) y calendario.
- **Sin internet:** la lista y los textos funcionan; el mapa y las fotos necesitan conexión.

## Qué se probó

Todo en el navegador de la compu, en tamaño celular (375 de ancho) y en pantalla grande, sin errores:

- Navegación completa, filtros, buscador, fichas, guardar, armado automático, mapa de zonas y puntos de ayuda.
- Filtros de dieta, categorías nuevas y buscar "DOT", "Unicenter" y "Saavedra".
- Perfil de viaje: con perfil vegano, Explorar pone primero lo apto y el viaje se arma solo con lugares veganos.
- Pasaporte: marcar visitados y ganar sellos. Pronóstico por día. "Hoy en tu viaje". Calculadora de propina.
- Que no haya lugares repetidos ni datos sueltos, que carguen las fotos y que los límites de los 48 barrios coincidan con el archivo oficial.

## Qué NO se probó

- **Las cuentas de usuario.** Nada: sin un proyecto de Supabase no hay cómo. Es lo más importante para probar antes de encenderlas.
- "Cerca mío" y "Mi ubicación" (necesitan permiso de ubicación en un celular real).
- Compartir, imprimir y el enlace de Uber.
- El uso sin internet de punta a punta, y la instalación en el celular.
- Nada en un iPhone ni en un Android de verdad.

## Qué falta o está flojo

- **Datos sin verificar.** Direcciones, días de cierre y si los lugares siguen abiertos salen de lo que sabe Claude. Muchos aparecen en OpenStreetMap en esa dirección, pero no se confirmó uno por uno. Hay que revisarlos antes de publicar.
- **Sin TACC y kosher son temas de salud y de fe.** Solo hay 3 lugares sin TACC y 2 kosher, los que una búsqueda describió como dedicados. Hay que confirmarlos. No hay opciones halal ni sin lactosa.
- **Niveles de seguridad.** Son una valoración, no datos oficiales. Conviene que los revise alguien que conozca la ciudad.
- **Las plazas de barrio** (etiqueta "vida de barrio") tienen descripciones genéricas. Se sumaron para que cada barrio tenga algo, con nombre y ubicación reales, pero sin conocer cada una.
- **"Todo lo que se puede hacer en la ciudad" no está.** Hay 297 lugares elegidos. Faltan, por ejemplo: más restaurantes por barrio, más hoteles, gimnasios y clubes, más teatros, eventos con fecha.
- **Solo en español.**
- **Sin horarios reales ni puntajes de reseñas.** Harían falta servicios pagos.
- **Pocas fotos** de restaurantes, bares, shoppings y hoteles.
- **Unas 45 ubicaciones son aproximadas.** Están marcadas con "aprox." en `data/caba-coords.js` y `data/caba-zones.js`.
- En "Mi viaje" no se puede cambiar el orden a mano, solo por cercanía.

## Publicar

Bautista pidió que la app sea pública y tener un link para pasar. **No está publicada.** Claude intentó crear un repositorio público con una copia de `app/` y no tuvo permiso para hacerlo solo.

Como este repositorio es privado, la forma más simple es publicar una copia de la carpeta `app/` (sin `ESTADO.md`, `LEEME.md`, `CUENTAS.md` ni `servir.ps1`) en un repositorio público aparte, con GitHub Pages. Una vez publicada con dirección `https`, también funcionan la instalación en el celular y el uso sin internet.

Antes de publicar, conviene resolver los puntos de "Para decidir" y revisar los datos.

## Reglas para tocar esta carpeta

- El contenido va en `data/`; el funcionamiento, en `js/app.js`; el diseño, en `css/styles.css`.
- En `js/app.js`, cada parte tiene arriba un comentario que dice qué hace y, si es nueva, de qué tarjeta salió.
- No escribir precios ni horarios exactos: cambian seguido. Se usan niveles ($ a $$$$) y "suele cerrar los lunes".
- Si sumás un premio o un dato oficial, anotá de dónde salió.
- Lo de salud (sin TACC, kosher, alergias) solo con una fuente, y siempre con el aviso de confirmar en el local.
- Nada de claves ni contraseñas en los archivos. `config.js` va vacío.
