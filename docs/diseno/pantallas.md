# Mapa de pantallas

Base para diseñar toda la app entre los dos Claude. Tarjeta #16.

**El criterio para todo:** la información justa y necesaria para un turista recién llegado a Buenos Aires. Antes de sumar algo a una pantalla, preguntarse si esa persona lo necesita.

Es una propuesta para trabajar, no algo cerrado. Si el otro Claude ve algo mejor, lo cambia con una tarjeta.

## La barra de abajo

Cuatro botones, siempre a la vista:

| Botón | Para qué |
|---|---|
| **Inicio** | Lo que necesitás ahora, sin buscar |
| **Moverse** | Cómo pagar y cómo usar el transporte |
| **Lugares** | Qué visitar |
| **Lo esencial** | Emergencias, plata, seguridad, internet |

## Todas las pantallas

| Pantalla | Qué muestra | Archivo | Tarjeta |
|---|---|---|---|
| Bienvenida | Elegir idioma. Aparece una sola vez | `bienvenida.html` | #18 |
| Ajustes | Idioma, uso sin internet, fuentes y fecha de la última revisión | `ajustes.html` | #18 |
| Inicio | Buscador, tres accesos grandes (cómo pago, cómo llego, emergencias), "recién llegás" y lugares destacados | `inicio.html` | #19 |
| Buscar | Resultados entre lugares y temas de información | `buscar.html` | #19 |
| Moverse | Portada con los temas: cómo pagar, subte, colectivo, del aeropuerto al centro, taxi y apps | `moverse.html` | #20 |
| Cómo pagar | SUBE, tarjetas sin contacto y celular: qué sirve dónde, paso a paso | `moverse-pagar.html` | #20 |
| Ficha de información | Molde para un tema de texto: colectivo, taxi, plata, seguridad, internet | `ficha-info.html` | #20 |
| Subte | Líneas, estaciones y horarios generales, con datos fijos | `moverse-subte.html` | #21 |
| Del aeropuerto al centro | Opciones desde Ezeiza y Aeroparque | `moverse-aeropuerto.html` | #21 |
| Lugares | Lista corta con filtros por tipo y por barrio | `lugares.html` | #22 |
| Ficha de lugar | Qué es, horario, cómo llegar y guardar | `lugar.html` | #22 |
| Guardados | Los lugares que la persona marcó | `guardados.html` | #22 |
| Lo esencial | Portada con los temas: emergencias, plata y pagos, seguridad, internet, frases útiles | `esencial.html` | #23 |
| Emergencias | Números para llamar con un toque | `esencial-emergencias.html` | #23 |
| Recorrido completo | Todas las pantallas unidas para probar la app tocando | `index.html` | #24 |

Lo que comparten todas (colores, letras, botones, tarjetas, barra de abajo) va en `base.css` y se muestra en `piezas.html`. Tarjeta #17. Va primero.

## Cómo se pasa de una pantalla a otra

- **Bienvenida → Inicio.** Solo la primera vez.
- **Inicio** lleva a Buscar, a Cómo pagar, a Emergencias y a una Ficha de lugar.
- **Moverse** lleva a Cómo pagar, Subte, Del aeropuerto al centro y a las fichas de Colectivo y Taxi.
- **Lugares** lleva a la Ficha de lugar y a Guardados.
- **Lo esencial** lleva a Emergencias y a las fichas de cada tema.
- **"Cómo llego"**, en cualquier pantalla, abre la app de mapas del celular con el destino cargado.
- **Ajustes** se abre desde Inicio.

## Qué cambia respecto del boceto

El boceto (`docs/boceto.html`) sirvió para acordar la idea. Esto es lo que cambia, y por qué:

| En el boceto | Ahora | Por qué |
|---|---|---|
| Pestaña "Rutas" con desvíos en vivo | "Cómo llego" abre la app de mapas | Los datos en vivo de la Ciudad están suspendidos |
| Avisos de "por dónde no pasar" | Consejos de seguridad dentro de Lo esencial | No hay fuente en vivo confiable |
| Pestaña "Dormir" | Sale de la primera versión | No es lo esencial para quien ya llegó |
| "Mi viaje" que arma el plan solo | "Guardados", una lista simple | Información justa y necesaria |
| Pestaña "Mapa" | Los lugares van en lista | Un mapa propio dentro de la app queda por decidir |
| Transporte como una tarjeta dentro de otra pantalla | Pestaña propia, "Moverse" | Es lo más importante para un turista |
| Sin idiomas | Bienvenida con idioma, y Ajustes | La app es para turistas |
| Nota "Cómo podría ganar plata" | Fuera por ahora | Primero que ande bien y quede linda |

## Reglas para diseñar cualquier pantalla

- **Una acción principal por pantalla**, con un botón grande.
- **Textos cortos**, pensados para traducir. Dejar lugar: en otros idiomas el mismo texto ocupa más.
- **Todo dato que vence muestra la fecha de la última revisión**: precios, medios de pago, horarios.
- **Todo funciona sin internet**, salvo abrir la app de mapas y los enlaces.
- **Tamaño de celular primero.** Probar a 375 de ancho.
- **Modo claro y oscuro.**
- **Datos de ejemplo marcados como ejemplo.** No inventar precios ni horarios como si fueran reales.

## Cómo nos repartimos

Para diseñar en paralelo sin pisarnos:

- **Una tarjeta por grupo de pantallas**, y cada pantalla en su propio archivo.
- **`base.css` no se edita desde las tarjetas de pantallas.** Si le falta algo, se avisa en la tarjeta #17.
- Las tarjetas #18 a #23 no tienen dueño: las toma el Claude que esté trabajando. La #24 va al final.

## Qué queda por decidir

- Si la primera versión tiene un mapa propio dentro de la app.
- Qué idiomas van primero (tarjeta #11).
- El nombre de la app.
