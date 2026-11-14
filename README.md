# Proyecto compartido

Repositorio de trabajo de `ronkstudio` y `ezebesserr`.

Cada uno trabaja con su propio Claude. Las reglas están en [CLAUDE.md](CLAUDE.md) y las tareas, en la pestaña **Issues**.

## Qué estamos construyendo

Una app de turismo que te dice todo lo que necesitás para tu viaje: qué hacer, dónde comer, cómo moverte, qué evitar y dónde pedir ayuda. Arranca con la Ciudad de Buenos Aires.

**Ya hay una versión que funciona**, en la carpeta [app/](app/). Para abrirla: doble clic en `app/index.html`. Más detalle en [app/LEEME.md](app/LEEME.md).

Qué está hecho, qué se probó y qué falta: [app/ESTADO.md](app/ESTADO.md).

## Decisiones tomadas

| Decisión | Qué se decidió | Dónde |
|---|---|---|
| Base de la app | El prototipo de `app/` es la base | Pedido #29 |
| Ciudad de arranque | Ciudad de Buenos Aires | El prototipo ya está armado así. Tarjeta #6 |
| De dónde sale la información | Textos propios y revisados, más datos oficiales fijos. Sin datos en vivo de la Ciudad, salvo la agenda de eventos del día: se baja una vez por día de la agenda oficial (Bautista, 12/11) | [docs/fuentes-de-informacion.md](docs/fuentes-de-informacion.md), tarjetas #7 y #65 |
| Cómo se descarga | Comparación de tiendas, costos y requisitos | [docs/publicar-en-las-tiendas.md](docs/publicar-en-las-tiendas.md), tarjeta #8 |
| Publicación | Publicada en https://ronkstudio.github.io/proyecto-compartido/, desde este repositorio. Todo lo de la guía vive acá; `menu-3d-publico` es solo del menú 3D y no se toca | Bautista, 13/11. Tarjeta #105 (antes, tarjeta #57) |
| Mapa de seguridad en colores | Se sacó. Quedan los consejos escritos | Pedido #44 |
| Qué entra en la app | De todo. Con un mínimo de locales por tipo en cada zona turística (por ejemplo, 5 de pastas y 5 o 6 parrillas) | `ezebesserr`, 11/11. Coincide con lo que pidió Bautista. Tarjeta #45 |
| Cómo se ve | Intuitiva, simple, linda, limpia y poco cargada, aunque tenga mucho contenido | `ezebesserr`, 11/11 |
| Colores | Sin amarillo en los botones ni en el diseño: terracota y coral. Los colores de los lugares no se tocan | `ezebesserr`, 13/11. Tarjeta #122 |
| Idiomas | Muchos, no dos o tres. La lista se arma en la tarjeta #11 | `ezebesserr`, 11/11. Tarjetas #11 y #39 |
| Planes | Variedad de planes armados para vacaciones y visitas | `ezebesserr`, 11/11. Tarjeta #48 |
| Áreas de cada uno | No hay: los dos hacen de todo | Tarjeta #2 |
| Ciudades nuevas | Berlín, Madrid, Roma y París, una por tarjeta. Primero la estructura (Info, Hoy, mapa) y después los lugares. Berlín y París están en marcha; París la pidió Bautista completa, igual que Buenos Aires (13/11) | Bautista, 13/11. Tarjetas #98 a #102 |
| Agenda de Hoy en Berlín | Agenda cultural abierta de Berlín, solo los distritos céntricos y sin trámites de biblioteca. Títulos en alemán | 13/11. Tarjeta #99 |
| Avisos de paros, marchas y cortes | Los carga a mano una persona en `app/data/avisos.json`, con fechas y fuente, y se apagan solos al terminar. La guía no los detecta sola. Siempre se muestran, en Info > Ayuda, links para fijarse antes de salir | Bautista, 13/11. Tarjeta #120 |
| Entrada a la guía | Globo azul galáctico con fronteras blancas y las ciudades en rojo. Se elige destino, se dibuja la ruta de vuelo y entra "pum" directo a la guía, sin botón. "Cambiar destino" vuelve a abrir el globo. Quien ya eligió ciudad va directo a su guía | `ezebesserr`, 14/11. Tarjetas #113 y #167 |
| Cuentas de usuario | **No hay.** La guía funciona sin usuario ni mail: todo queda guardado en el dispositivo. Se probaron con Supabase y se sacaron (pocos mails por hora en el plan gratis, el enlace del mail se trababa entre dispositivos, y guardar mails obliga a cumplir con los datos personales). Tampoco va un botón para pasar el viaje a otro dispositivo | Bautista, 13/11. Tarjetas #35, #140 y #148 |
## Lo que falta decidir

- **Qué idiomas siguen** (tarjeta #11). Hoy están completos español, inglés y portugués; francés, italiano, alemán, chino y japonés tienen solo el menú.
- **Zonas turísticas y mínimos por tipo de local** (tarjeta #45), y cómo se verifica cada local antes de cargarlo.
- **Cartel de "versión de prueba"** en la copia publicada: sí o no. Hoy no lo tiene.
- **Filtros sin TACC y kosher:** si se muestran antes de confirmar los lugares uno por uno.
- **El nombre de la app.**

## Otros documentos

- [docs/competencia.md](docs/competencia.md): qué ofrecen otras apps y una propuesta de distintivo.
- [docs/diseno/](docs/diseno/): el diseño de pantallas anterior al prototipo. Queda como referencia.
- [docs/boceto.html](docs/boceto.html): el primer boceto de la idea.

## Para empezar

1. Aceptá la invitación al repositorio que te llegó por mail.
2. Abrí Claude Code y pedile: "Bajá este repositorio y empezá": `https://github.com/ronkstudio/proyecto-compartido`
3. Claude lee las reglas solo, mira el tablero y te dice cómo seguir.

## Equipo

- Bautista (`ronkstudio`)
- Besser (`ezebesserr`)
