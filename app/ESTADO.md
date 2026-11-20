# Estado de la app

Para los dos Claude: cómo está la app **hoy**, qué falta y qué se decidió. **Actualizalo cada vez que cambies algo de `app/`.**

Este archivo se mantiene corto a propósito, porque se lee al empezar cada tarea. El detalle de cada tarjeta (qué se hizo, con qué fuentes, qué se probó) va en la nota de traspaso y en el pedido de cambios, no acá. El texto largo que había hasta el 19/11/2026 está entero en `docs/historial.md`.

**Cómo actualizarlo:** sumá una línea arriba de todo en "Últimos cambios" (fecha, tarjeta, qué cambió en una frase). Si la lista pasa de 10, mové las más viejas al final de `docs/historial.md`. Si tu tarea cambia algo de las otras secciones (una ciudad nueva, algo que falta y ya se hizo), corregilo ahí mismo: no agregues párrafos de historia.

## Últimos cambios

- 20/11 · #226 · Portada nueva para los lugares sin foto (el dibujo de cada ciudad y el ícono del tipo de lugar), también cuando una foto no carga; foto de Chiado (Lisboa) arreglada.
- 20/11 · #227 · Recorrido automático de pantallas (`zz-recorrido.js`): sin errores ni enlaces rotos; se tradujeron "Con opciones para", "Local 100 %" y la noche de Lisboa, Río y Bogotá; lo que se sale del ancho quedó en #189.
- 20/11 · #225 · Ubicaciones: Andrés Carne de Res (Bogotá) en el mapa; en Río, Bar Lagoa y Cobal do Leblon reemplazan a dos lugares que no están en OpenStreetMap.
- 20/11 · #223 · Consulados que faltaban: Colombia, México, Perú y Estados Unidos en Lisboa, Perú y Uruguay en Buenos Aires, Perú en Bogotá.
- 20/11 · #224 · Sin horarios exactos en ninguna ciudad (21 textos, en los 8 idiomas); los datos de dieta tienen fuente o se sacaron.
- 20/11 · #221 · Control de datos de las 11 ciudades (`zz-revisar.html`, no se publica); lo que encontró está en la tarjeta #221.
- 20/11 · #216 · Tokio, undécima ciudad (la primera de Asia); 26 etiquetas comunes nuevas, "Lisboa" traducida y la intro se desvanece con "reducir movimiento".
- 19/11 · #217 · Este archivo se achicó (el anterior está en `docs/historial.md`); `LEEME.md` al día; Claude suma a `main` sin preguntar.
- 19/11 · #214 · Lisboa, décima ciudad.
- 19/11 · #212 · Intro animada al entrar a cada ciudad y portada que se toca (`js/intro.js`, `css/intro.css`).

## Decidido

- **El prototipo es la base de la app** (`ezebesserr`, 10/11, pedido #29).
- **Claude suma a `main` sin preguntar** (`ezebesserr`, 19/11, tarjeta #217). La revisión de los pedidos de cambios del otro sigue igual.
- **No hay cuentas de usuario** (13/11, tarjeta #148). Todo se guarda en el celular, aparte para cada ciudad.
- **El mapa de seguridad en colores se sacó** (`ezebesserr`, 11/11, pedido #44). Quedan los consejos escritos de Info → Seguridad.
- **Halal y kosher no son filtros** (Bautista, 13/11, #139). Los lugares kosher van por su tipo de cocina y la ficha lo dice.
- **La guía arranca con el globo y la ruta de vuelo** (`ezebesserr`, 14/11, tarjetas #113 y #167). Quien ya eligió ciudad entra directo.
- **La app tiene de todo, pero queda simple y poco cargada** (`ezebesserr`, 11/11).
- **Muchos idiomas**, no dos o tres (`ezebesserr`, 11/11). Tarjetas #11 y #39.
- **Variedad de planes armados** (`ezebesserr`, 11/11). Tarjeta #48.

Las decisiones del proyecto y las que faltan están en el `README.md` de la carpeta principal.

## Para decidir entre Bautista y Besser

1. **¿La copia publicada lleva cartel de "versión de prueba, datos sin verificar"?** Hoy no lo tiene.
2. **¿Se muestran los filtros sin TACC** antes de confirmar los lugares uno por uno?
3. **¿Qué idiomas siguen?** (tarjeta #11). Hoy están los 8 completos (castellano, inglés, portugués, francés, italiano, alemán, chino y japonés), traducidos por Claude y sin revisar por alguien que hable cada idioma.
4. **El nombre de la app.** La app instalada en el celular, el título y la descripción todavía dicen "Guía de Buenos Aires" / "Guía BA" (`manifest.webmanifest` e `index.html`), aunque ya son 11 ciudades.

## Las ciudades

Todas tienen la misma estructura: lugares en 9 categorías, mapa con puntos de ayuda, estaciones en cada ficha, Info completa (moverse, seguridad, ayuda, info práctica, apps, alquiler de auto, calendario, frases), colecciones, 5 planes armados, sellos del pasaporte, "Hoy", traducciones a los 7 idiomas, identidad visual e intro propia. Cómo sumar una: skill `crear-ciudad` y `NUEVA-CIUDAD.md`.

| Ciudad | Lugares | "Hoy" | Fuentes | Lo que le falta |
|---|---|---|---|---|
| Buenos Aires (`caba`) | 565 | Agenda oficial automática + agenda fija | `docs/fuentes-de-informacion.md` | Fotos de restaurantes, bares y hoteles; unas 45 ubicaciones aproximadas; el consulado general de Uruguay (va la embajada); no entró en la revisión de que sigan abiertos (#179) |
| Berlín | 400 | Agenda oficial automática + agenda fija | `docs/fuentes-berlin.md` | Capas de zonas y límites de barrios en el mapa; fotos; confirmar Brotquelle (sin TACC) |
| París | 249 | Agenda oficial automática + agenda fija | — | Capas de zonas; fotos; el pago con tarjeta en el metro sale de la prensa |
| Roma | 245 | Agenda fija (no hay agenda oficial legible) | `docs/fuentes-roma.md` | Capas de zonas; fotos de comida y noche |
| Madrid | 208 | Agenda oficial automática + agenda fija | `docs/fuentes-madrid.md` | Fotos; pocos sin TACC con fuente; revisar las horas gratis de los museos cada temporada |
| Barcelona | 214 | Agenda oficial automática + agenda fija | `docs/fuentes-barcelona.md` | Fotos; revisar las horas gratis de los museos cada temporada |
| Ámsterdam | 186 | Agenda fija (la oficial terminó en 2022) | `docs/fuentes-amsterdam.md` | Fotos; confirmar que los restaurantes sigan abiertos; dirección del servicio de ayuda al turista (ATAS) |
| Río de Janeiro | 152 | Agenda fija | `docs/fuentes-rio.md` | Fotos; fuente oficial de los días de samba de la Pedra do Sal |
| Bogotá | 121 | Agenda fija | `docs/fuentes-bogota.md` | Fotos (casi no hay libres); ubicaciones por grilla aproximadas (~200 m); más embajadas |
| Lisboa | 170 | Agenda fija | `docs/fuentes-lisboa.md` | Fotos; consulado de Uruguay (sin fuente oficial legible) |
| Tokio | 217 | Agenda fija (torneos de sumo y cerezos) | `docs/fuentes-tokio.md` | Fotos de 122 lugares; ubicación aproximada de la embajada de Uruguay (se mudó en 2023) |

La cantidad de lugares se contó el 19/11/2026 desde `data/` (lista `places` de cada ciudad). Las agendas automáticas las baja `.github/workflows/publicar-guia.yml` dos veces por día con los scripts de `herramientas/`. Solo Buenos Aires tiene las 6 capas de zonas del mapa.

## Qué hay en la app

- **Inicio:** sugerencias según la hora, el día y el clima; "Hoy en …" en carruseles (de día, a la noche, mañana, esta semana, este mes); colecciones; planes armados; "Armá tu viaje"; avisos de paros y cortes (`data/avisos.json`); cambiar destino.
- **Explorar:** buscador con sinónimos; filtros por tipo, barrio, precio, dieta y "abre hoy"; orden por recomendación, cercanía o precio.
- **Ficha de lugar:** foto o portada con el nombre, consejo, precio en niveles, estación más cercana, cómo llegar, Google Maps, Uber, Booking para hoteles, qué hay cerca, "Marcar que fui".
- **Mapa:** lugares, puntos de ayuda (turismo, comisarías, hospitales, consulados, estaciones) y, en Buenos Aires, capas de zonas.
- **Mi viaje:** lugares por día, orden por cercanía, ruta en Google Maps, compartir e imprimir, pronóstico, avisos de cierre, armado automático y perfil de viaje (dieta, presupuesto, chicos). El orden se cambia con flechas.
- **Info:** Recién llegado, moverse (con alquiler de auto), seguridad, ayuda, info práctica, tu vuelo (check-in), apps útiles, calendario y frases.
- **Pasaporte** con sellos por ciudad; **botón SOS** arriba, en todas las pantallas.
- **Idiomas:** 8, con el traductor de `i18n/traductor.js` y diccionarios separados por ciudad (`i18n/dict/`). Los nombres de lugares, calles y barrios quedan en el idioma local a propósito.
- **Sin internet:** listas y textos funcionan; el mapa y las fotos necesitan conexión. Se actualiza sola cuando hay versión nueva.

## Qué NO se probó

- Nada en un iPhone ni en un Android de verdad: fluidez del globo y de las intros, "reducir movimiento", instalación, uso sin internet real.
- "Cerca mío" y "Mi ubicación" con el permiso real de un celular (se probó con una ubicación simulada).
- Compartir con el menú del celular, la ventana de impresión de verdad, y que los enlaces de Uber, Google Maps, Booking, WhatsApp y teléfonos abran bien (se revisó que estén bien armados).

## Qué falta o está flojo en todas las ciudades

- **Traducciones sin revisar** por alguien que hable cada idioma.
- **Fotos:** faltan sobre todo en restaurantes, bares y hoteles, que casi nunca tienen fotos libres. Sus fotos propias tienen derechos de autor: haría falta pedirles permiso a los locales. Mientras tanto, los que no tienen foto muestran una portada con el dibujo de la ciudad y el ícono del tipo de lugar (tarjeta #226).
- **Que los lugares sigan abiertos:** OpenStreetMap confirma que el local existe, no que abra hoy. La ficha tiene el botón a Google Maps con horarios.
- **Sin horarios reales ni puntajes de reseñas:** harían falta servicios pagos.
- **Pantallas que se salen del ancho** en celulares chicos o en alemán (tarjeta #189).
- **Mínimo de locales por tipo en cada zona turística** (tarjeta #45) y **más variedad de planes** (tarjeta #48).

## Publicar

**Está publicada** en https://ronkstudio.github.io/proyecto-compartido/ (tarjeta #105). Se abre en el globo; con `?ciudad=berlin` abre directo una ciudad.

**Se publica sola** (`.github/workflows/publicar-guia.yml`) cada vez que se suma a `main` un cambio de `app/` o `herramientas/`, y dos veces por día para traer las agendas de "Hoy". Para publicar a mano: pestaña Actions > "Publicar la guía" > Run workflow.

Lo publicado es una copia de `app/` sin los `.md`, `servir.ps1`, los `zz-*` ni `i18n/fuentes/`. **Antes de sumar un cambio de la app, subí la versión `guia-v…` de `sw.js`** para que los celulares la actualicen.

## Reglas para tocar esta carpeta

- El contenido va en `data/`; el funcionamiento, en `js/`; el diseño, en `css/`. Qué hay en cada archivo: `LEEME.md`.
- En `js/app.js`, cada parte tiene arriba un comentario que dice qué hace y, si es nueva, de qué tarjeta salió.
- No escribir precios ni horarios exactos: se usan niveles ($ a $$$$) y "suele cerrar los lunes".
- Si sumás un premio o un dato oficial, anotá de dónde salió (en `docs/fuentes-<ciudad>.md`).
- Lo de salud (sin TACC, alergias) solo con una fuente, y siempre con el aviso de confirmar en el local.
- Nada de claves ni contraseñas en los archivos.
