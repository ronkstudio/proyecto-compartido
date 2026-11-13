# Mapa galáctico (boceto)

Globo terráqueo en azul galáctico con los bordes de los continentes en blanco, visto en diagonal desde arriba (como desde un satélite). Llena la pantalla y solo asoma el horizonte curvo arriba. Mientras lo recorrés se va acercando, y el continente que queda en el centro se levanta, se agranda un poco y muestra su nombre. Tarjeta #113.

Los bocetos anteriores quedaron en la historia de la rama: el 1 era un mapa plano y el 2, un globo más lejos.

**Para abrirlo:** doble clic en `index.html`. Necesita internet: el dibujo del globo usa la biblioteca d3 desde cdnjs y las letras vienen de Google Fonts.

**Cómo se usa:** arrastrar para girar el globo (cuanto más te movés, más se acerca), rueda del mouse o pellizco para acercar o alejar, tocar un continente para centrarlo. Si nadie lo toca, gira solo despacio. Con el teclado: flechas para girar, `+` y `-` para acercar y alejar.

**Ajustes del boceto** (botón "Ajustar"): inclinación de la vista (arranca en 30°), cuánto se agranda el continente (10 %), cuánto se acerca al moverte (50), si vuelve a alejarse al soltar (no), si gira solo (sí) y un botón para volver al inicio. Son para elegir los valores; quedan guardados en ese navegador.

**Qué tiene:**
- Seis continentes: América del Norte, América del Sur, Europa, África, Asia y Oceanía. La Antártida no está.
- Europa y Asia se separan en los Urales con una línea aproximada. Turquía va en Asia, salvo la parte europea. La Guayana Francesa va en América del Sur.
- Las ciudades de la guía (Buenos Aires y Berlín) en rojo brillante, y las que vienen (Madrid, París y Roma) con un círculo blanco.
- La superficie de cada continente, las coordenadas del centro de la pantalla y las líneas del ecuador, los trópicos y el círculo polar.

**De dónde salen los contornos:** Natural Earth 1:50m (dominio público), por medio de los paquetes `world-atlas` y `world-countries` de npm. Los dos archivos `armar-*.js` unen los países por continente y arman los datos del globo; se corren con Node en una carpeta con esos paquetes, `polygon-clipping` y `mapshaper` instalados. Entre los dos pasos va:

    npx mapshaper -i continentes.geojson snap -filter-slivers min-area=0.05 -simplify 40% keep-shapes planar -filter-islands min-area=0.02 -o globo.geojson precision=0.01
