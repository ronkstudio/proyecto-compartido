# Herramientas para armar una ciudad (tarjeta #208)

Scripts en Perl (vienen con Git para Windows; no hace falta Node ni Python) que se usaron para armar Ámsterdam, Río y Bogotá.
Los pasos completos, en orden, están en la skill `.claude/skills/crear-ciudad/SKILL.md`. Qué archivos lleva una ciudad: `app/NUEVA-CIUDAD.md`.

Se corren desde `app/`, con la ruta del script: `perl ../herramientas/ciudad/textos.pl . bogota`.
Los que consultan internet (OpenStreetMap, Wikimedia Commons, Wikidata) se presentan como `guia-de-viaje/1.0`, sin datos de nadie.

| Script | Para qué |
|---|---|
| `coordsciudad.pl` | Arma `data/<ciudad>-coords.js` con la ubicación de cada lugar (una primera pasada automática más correcciones a mano, que ganan). |
| `textos.pl` | Lista los textos de una ciudad que todavía no tienen traducción. |
| `textos-todos.pl` | Lista todos los textos que usa una ciudad (traducidos o no). |
| `prestados.pl` | De esos, los que ya están traducidos en la lista de otra ciudad: se copian con `agregar.pl` en vez de traducirlos de nuevo. |
| `juntar.pl` | Junta las traducciones numeradas (`tr/NN.txt`) con los textos, en el formato `es \|\| en \|\| pt \|\| fr \|\| it \|\| de \|\| zh \|\| ja`. |
| `armar-ciudad.pl` | Arma `i18n/fuentes/<ciudad>.txt` y las 7 listas por idioma, y avisa si falta o sobra algo. |
| `agregar.pl` | Suma textos sueltos a una lista que ya existe. |
| `armar-dict.pl` | Arma los diccionarios de `i18n/dict/` (lo mismo que `i18n/fuentes/armar-dict.js`, para cuando no hay Node). Tiene que terminar con "problemas: 0". |
| `entrada.pl` | Prepara la lista de lugares con ubicación para buscar fotos. |
| `fotos2.pl` | Busca fotos libres en Wikimedia Commons cuyo nombre coincida con el lugar. Tarda (una hora para 120 lugares). |
| `hoja.pl` | Arma una página para revisar las fotos a ojo antes de cargarlas. |
| `meterfotos.pl` | Carga las fotos aprobadas en `data/<ciudad>-extra.js`. |
| `dietas.pl` | Busca en OpenStreetMap locales solo veganos o solo sin gluten (son la fuente del dato de dieta). |
| `contar.pl` | Cuenta lugares por tipo y por barrio, para ver la variedad (4 o más de cada uno). |
| `contraste.pl` | Mide el contraste de los colores de cada ciudad en `css/temas.css`, en claro y oscuro. |
