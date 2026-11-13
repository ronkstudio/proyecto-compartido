# Mapa galáctico (boceto)

Mapa del mundo en azul galáctico con los bordes de los continentes en blanco. Al mover el mapa, el continente que queda en el centro se agranda un poco y muestra su nombre. Tarjeta #113.

**Para abrirlo:** doble clic en `index.html`. Necesita internet solo para las letras; sin internet usa otras parecidas.

**Cómo se usa:** arrastrar para mover (da la vuelta al mundo sin fin), rueda del mouse o pellizco para acercar, tocar un continente para centrarlo. Con el teclado: flechas para mover, `+` y `-` para acercar y alejar.

**Qué tiene:**
- Seis continentes: América del Norte, América del Sur, Europa, África, Asia y Oceanía. La Antártida no está.
- Europa y Asia se separan en los Urales con una línea aproximada. Turquía va en Asia, salvo la parte europea. La Guayana Francesa va en América del Sur.
- Las ciudades de la guía (Buenos Aires y Berlín) y las que vienen (Madrid, París y Roma).
- La superficie de cada continente, las coordenadas del centro del mapa y las líneas del ecuador, los trópicos y el círculo polar.

**De dónde salen los contornos:** Natural Earth 1:50m (dominio público), por medio de los paquetes `world-atlas` y `world-countries` de npm. Los dos archivos `armar-*.js` son los que unen los países por continente y arman los trazos; se corren con Node en una carpeta con esos paquetes, `polygon-clipping` y `mapshaper` instalados. Entre los dos pasos va:

    npx mapshaper -i continentes.geojson snap -filter-slivers min-area=0.05 -simplify 28% keep-shapes planar -filter-islands min-area=0.03 -o simple.geojson precision=0.01
