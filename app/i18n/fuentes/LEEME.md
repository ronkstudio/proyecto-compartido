# Listas de traducción

Con estos archivos se arman los diccionarios de `i18n/dict/`.

- `ui.txt`, `extra.txt`, `tags.txt`, `desc.txt`, `tip.txt`: los textos en español, uno por línea.
- `berlin.txt`, `madrid.txt`, `roma.txt`, `paris.txt` (y `<idioma>.berlin.txt`, etc.): los textos propios de cada ciudad, con el mismo formato que `extra.txt`. Si una ciudad no tiene lista, el armado la saltea.
- `re.txt`: reglas para textos con números ("Día 3", "5 lugares").
- `<idioma>.ui.txt`, `<idioma>.extra.txt`, `<idioma>.desc.txt`, `<idioma>.tip.txt`: la traducción, con el número de línea adelante (`12|Near me`). Una línea vacía después de la barra deja ese texto en español.
- `<idioma>.tags.pipe`: las etiquetas, en el mismo orden que `tags.txt`, separadas por `|`.
- `<idioma>.re.txt`: la traducción de cada regla, en el mismo orden que `re.txt`. `$1` copia el número; `{1}` traduce una lista de días.

Para armar los diccionarios, en cualquier compu con Node (Windows, Mac o Linux), los 7 idiomas de una vez:

    node armar-dict.js todos

O uno solo: `node armar-dict.js pt`. En Windows también se puede seguir usando `armar-dict.ps1`, que ahora llama a `armar-dict.js`. El armado avisa si una lista traducida no tiene la misma cantidad de líneas que la lista en español.

**Separado por ciudad (tarjeta #187).** Para que nadie baje los textos de ciudades que no usa, cada idioma tiene:

- `dict/<idioma>.js`, el común: todo lo de `ui.txt`, `extra.txt`, `hoy.txt`, `tags.txt` y `re.txt`, más cualquier texto que aparezca en el código de la app o en más de una ciudad.
- `dict/<idioma>.<ciudad>.js`, uno por ciudad: los textos de su lista (`<ciudad>.txt`; Buenos Aires usa `desc.txt` y `tip.txt`) que solo usa esa ciudad.

La app carga el común y el de la ciudad elegida. No hay que decidir nada a mano: se sigue traduciendo en las mismas listas y el armado reparte solo. Cada texto queda con la misma traducción que tenía con un solo archivo.

Estado: los 7 idiomas (inglés, portugués, francés, italiano, alemán, chino y japonés) están completos. Alemán, chino y japonés se tradujeron el 12/11/2026 partiendo del inglés. Ninguna traducción la revisó todavía una persona que hable el idioma.
