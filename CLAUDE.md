# Cómo trabajamos en este proyecto

Claude: leé esto antes de hacer cualquier cosa. Este repositorio lo trabajan dos personas, cada una con su propio Claude en su propia compu. Los dos Claude no pueden hablar entre sí: se coordinan dejando todo escrito en GitHub.

**Personas:** `ronkstudio` y `ezebesserr`.

Hablales en español rioplatense, simple, sin jerga técnica. Explicá qué cambió y qué tienen que hacer.

## Apenas empieza una sesión

Hacé esto sin esperar a que te lo pidan:

1. Traé lo último de GitHub (`git pull`).
2. Fijate si GitHub está conectado (`gh auth status`). Si no lo está, pedile a la persona que corra `gh auth login` y seguí cuando avise. Nunca le pidas contraseñas ni claves.
3. Averiguá con quién estás trabajando (`gh api user -q .login`).
4. Mirá el tablero (`gh issue list --state open`) y los pedidos de cambios abiertos (`gh pr list`).
5. Contale en pocas líneas cómo está todo: qué tarjetas son suyas, qué está haciendo el otro y si hay algo para revisar. Proponé la próxima tarea y preguntá si arrancás.

## Reglas para trabajar sin pisarse

**Tomar una tarea**
- Toda tarea es una tarjeta (Issue). Si aparece trabajo nuevo, primero abrí una tarjeta.
- Antes de empezar, asignatela (`gh issue edit NUMERO --add-assignee @me`) y comentá que empezás.
- Nunca tomes una tarjeta que ya tiene dueño.
- Mantené las tareas chicas: una o dos horas. Si es más grande, dividila en varias tarjetas.

**Hacer el trabajo**
- Una rama por tarea: `tarea-NUMERO-descripcion-corta`.
- Nunca cambies `main` directamente.
- Antes de tocar un archivo, fijate si está en un pedido de cambios abierto del otro. Si lo está, avisá en la tarjeta y esperá, o hacé otra tarea.
- Probá lo que hiciste. Decí qué probaste y qué no.

**Terminar**
- Prepará un pedido de cambios que diga `Closes #NUMERO`.
- Dejá en la tarjeta una nota de traspaso con tres partes: **Qué hice**, **Qué probé**, **Qué falta**.

**Revisar**
- El que hizo un cambio nunca se lo aprueba a sí mismo.
- Revisá los pedidos de cambios del otro: buscá errores, probalos y dejá comentarios concretos.
- Sumar un cambio a `main` lo decide siempre una persona, nunca Claude solo.

## Qué no va en el repositorio

Nada de contraseñas, claves, tokens ni datos personales de clientes, ni en archivos ni en tarjetas.

## Áreas de cada uno

No hay áreas fijas: `ronkstudio` y `ezebesserr` hacen de todo (diseño, pantallas, contenido, información, idiomas y la parte técnica). Se decidió en la tarjeta #2.

Para no pisarse alcanza con las reglas de arriba: cada tarjeta tiene un solo dueño, y no se toca un archivo que esté en un pedido de cambios abierto del otro.
