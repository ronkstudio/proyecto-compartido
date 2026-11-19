---
name: crear-ciudad
description: Pasos para sumar una ciudad nueva a la guía de viaje de app/ (datos, ubicaciones, puntos de ayuda, traducciones a 7 idiomas, fotos, identidad visual, pruebas y publicación), con los scripts de herramientas/ciudad y las trampas conocidas. Usala cuando pidan crear, sumar o armar una ciudad, o completar una que quedó a medias.
---

# Crear una ciudad en la guía

Leé antes `CLAUDE.md`, `app/ESTADO.md` y `app/NUEVA-CIUDAD.md`. Los scripts están en `herramientas/ciudad/` (ver su `LEEME.md`) y se corren desde `app/` con Perl, que viene con Git para Windows.

## Reglas que no se negocian

- Una tarjeta y una rama `tarea-N-<ciudad>` por ciudad. El pedido de cambios dice `Closes #N`. Nota de traspaso con **Qué hice**, **Qué probé**, **Qué falta**. Actualizar `app/ESTADO.md`.
- Nada de precios ni horarios exactos ("se llena tarde", no "a las 23"). Datos de dieta o salud solo con fuente.
- Nada de claves, tokens ni datos personales, ni en archivos ni en tarjetas.
- Cada dato tiene que poder rastrearse: anotá las fuentes en `docs/fuentes-<ciudad>.md` con la fecha.

## Pasos, en orden

1. **Estructura.** Copiá los archivos de la ciudad más parecida (`data/<id>.js`, `-lugares`, `-coords`, `-extra`, `-zones`, `-hoy`, `-local`). Sumá la fila en `data/ciudades.js` (con `letra`), la ubicación en `GEO` de `js/globo.js` y subí `CACHE` en `sw.js`.
2. **Lugares.** Unos 120 a 150 lugares con variedad: 4 o más por cada tipo y por cada barrio del filtro (`perl ../herramientas/ciudad/contar.pl data/<id>-lugares.js`). El id de cada lugar es el nombre pasado a minúsculas y guiones.
3. **Ubicaciones.** Primera pasada buscando cada lugar por nombre en OpenStreetMap (Nominatim/Overpass), después correcciones a mano en un `fix.tsv`, y armar con `coordsciudad.pl`. Los tours sin punto fijo van en la lista "sin lugar". Si las direcciones del país no las entiende el mapa (Bogotá: "Carrera 7 # 28-66"), confirmá con un modelo de la grilla de calles.
4. **Ayuda y transporte.** Puntos de información turística, comisarías, hospitales con guardia y consulados (de la web oficial de cada embajada; ubicación de OpenStreetMap `office=diplomatic`). Estaciones del transporte agrupadas por línea.
5. **Textos y traducciones.**
   - `perl ../herramientas/ciudad/textos.pl . <id> > nuevos.txt` (lo que falta traducir) y `textos-todos.pl . <id> > usa-<id>.txt`.
   - `prestados.pl . <id> usa-<id>.txt > prestados.txt`: lo que ya está traducido en otra ciudad.
   - Traducí en `tr/NN.txt` con líneas `N|en||pt||fr||it||de||zh||ja` (o `N|=` si no cambia), juntá con `juntar.pl` y sumá los prestados.
   - `armar-ciudad.pl <id> tr usa-<id>.txt i18n/fuentes`, después `perl ../herramientas/ciudad/armar-dict.pl i18n/fuentes todos` hasta que diga "problemas: 0".
6. **Fotos.** `entrada.pl` para armar la lista, `fotos2.pl` en segundo plano (tarda; corré una sola a la vez, porque dos escriben el mismo archivo), `hoja.pl` para ver las fotos y descartar a ojo las que muestran otra cosa (suelen ser muchas). Recién ahí `meterfotos.pl`.
7. **Identidad visual.** Un bloque claro y otro oscuro en `css/temas.css` con paleta, letra, radio, sombra y un dibujo de portada propios de la ciudad, distintos de las que ya están. `perl ../herramientas/ciudad/contraste.pl .` tiene que decir "Todo llega al mínimo". Sumá también su intro animada y su figura de portada en `js/intro.js` (`ARTE`, `FIG`, `MOV`; ver `NUEVA-CIUDAD.md`): algo propio de la ciudad, divertido y corto.
8. **Pruebas en el navegador.** Antes de probar: borrar el service worker y las cachés. Abrir con `?ciudad=<id>` a 375 de ancho, en castellano, alemán y japonés, en claro y en oscuro. Mirar: textos sin traducir, referencias rotas (`#/lugar/<id>`, `#/itinerario/<id>`), pantallas que se salen del ancho.
9. **Publicar.** Commit, push, pedido de cambios con `Closes #N`, sumar a `main` (la persona ya dijo que Claude lo hace sin preguntar) y revisar que corra "Publicar la guía". Nota de traspaso en la tarjeta.

## Trampas conocidas

- **`closed: {}` en una sola línea** dentro de `-extra.js` hace que `textos.pl` se coma todo hasta el próximo bloque, y se pierden textos sin aviso (le pasó a la lista de preparación de Bogotá). Escribí `closed`, `only` y `quality` en varias líneas, o no los pongas.
- **Latitudes negativas** (hemisferio sur): las correcciones empiezan con `-`. Los scripts ya lo aceptan; si escribís uno nuevo, usá `^-?\d`.
- **Overpass falla seguido.** Reintentá con otro servidor: overpass-api.de, overpass.private.coffee u overpass.kumi.systems.
- **En la terminal Bash**, los heredocs y `perl -e` rompen las barras y los acentos: escribí los scripts en un archivo.
- **`textos.pl` también lista las rutas de las fotos** de `-extra.js`: no van a traducción.
- **Horarios que se cuelan** en consejos y descripciones ("andá antes de las 8"): buscalos con una expresión como `\d{1,2}( ?h|:\d\d| de la)` antes de publicar.
- Las letras de títulos anchas (Cinzel, Unbounded) se salen en alemán a 320 de ancho: probalo.
