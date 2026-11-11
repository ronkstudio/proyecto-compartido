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
| De dónde sale la información | Textos propios y revisados, más datos oficiales fijos. Sin datos en vivo de la Ciudad | [docs/fuentes-de-informacion.md](docs/fuentes-de-informacion.md), tarjeta #7 |
| Cómo se descarga | Comparación de tiendas, costos y requisitos | [docs/publicar-en-las-tiendas.md](docs/publicar-en-las-tiendas.md), tarjeta #8 |
| Mapa de seguridad en colores | Se sacó. Quedan los consejos escritos | Pedido #44 |
| Áreas de cada uno | No hay: los dos hacen de todo | Tarjeta #2 |

## Lo que falta decidir

- **Qué entra en la primera versión:** lo justo y necesario, o de todo. Es la diferencia de fondo entre los dos.
- **Idiomas** (tarjeta #11). La propuesta es español, inglés y portugués. Hoy está solo en español.
- **Publicarla** con un link para compartir, y si va con cartel de "versión de prueba".
- **Cuentas de usuario:** están preparadas pero apagadas. Ver [app/CUENTAS.md](app/CUENTAS.md).
- **Filtros sin TACC y kosher:** si se muestran antes de confirmar los lugares uno por uno.
- **El nombre de la app.**

## Otros documentos

- [docs/competencia.md](docs/competencia.md): qué ofrecen otras apps y una propuesta de distintivo (pedido #31, todavía sin sumar).
- [docs/diseno/](docs/diseno/): el diseño de pantallas anterior al prototipo. Queda como referencia.
- [docs/boceto.html](docs/boceto.html): el primer boceto de la idea.

## Para empezar

1. Aceptá la invitación al repositorio que te llegó por mail.
2. Abrí Claude Code y pedile: "Bajá este repositorio y empezá": `https://github.com/ronkstudio/proyecto-compartido`
3. Claude lee las reglas solo, mira el tablero y te dice cómo seguir.

## Equipo

- Bautista (`ronkstudio`)
- Besser (`ezebesserr`)
