# Fuentes de Roma

De dónde salió cada dato de Roma (`app/data/roma*.js`) y qué se revisó, el 14/11/2026. Tarjetas #101, #177 y #178.
Si un lugar cierra o se muda, corregilo en `app/data/roma-lugares.js` y `app/data/roma-coords.js`, y anotalo acá.

## Lugares (`roma-lugares.js` y `roma-coords.js`)

- **Cómo se verificó:** se bajaron de OpenStreetMap (Overpass) todos los lugares con nombre del centro de Roma (11.488: restaurantes, cafés, bares, hoteles, museos, iglesias, ruinas, parques y tiendas) y cada lugar de la guía se buscó por nombre, confirmando con la calle de su dirección. 202 coincidieron así; las calles, plazas, excursiones y algunos monumentos con nombre en latín o italiano se ubicaron con Nominatim. 6 coincidencias equivocadas se corrigieron a mano (por ejemplo, la Pirámide Cestia y la Fuente de las Tortugas).
- **No se confirmó uno por uno que sigan abiertos** los restaurantes, cafés, bares y hoteles: OpenStreetMap dice que existen.
- **Quedaron afuera** porque no aparecen en OpenStreetMap con ese nombre (pueden haber cerrado o estar mal cargados): Drink Kong, Club Derrière, Gin Corner, Zuma, Bir & Fud, G-Rough, Hotel Vilòn, Hotel Lunetta, Hotel Santa Maria, Marigold, Da Remo, Aroma (Palazzo Manfredi), Sbanco, Ai Monasteri, Borghetto Flaminio y el Monti Urban Market. El **Antico Caffè Greco** no se cargó porque cerró en 2025.
- **Fontana di Trevi:** desde el 2/2/2026 se cobra una entrada chica para bajar al borde (LaPresse, Open, Finestre sull'Arte); desde la plaza sigue siendo gratis.
- **Dietas (`roma-extra.js`):** veganos según OpenStreetMap (`diet:vegan=only`): Buddy Veggy, Rifugio Romano, Ops! y Romeow Cat Bistrot. Sin TACC: Mama Eat (OpenStreetMap `diet:gluten_free=only` y guías para celíacos), Voglia di Pizza (certificada por la AIC según Table Journey), Pandalì (Wheatless Wanderlust y Scatti di Gusto) y Sans de Blé (OpenStreetMap y GlutoApp).
- **Fotos:** foto principal (P18) de Wikidata, de Wikimedia Commons, solo si el elemento está a menos de 1,5 km del lugar. 84 encontradas; se sacaron 4 que mostraban otra cosa (Campo de' Fiori, Janículo, Garbatella y Cinema Farnese). Se probó que las 80 cargan.
- **Estaciones:** líneas A, B y C del metro, de las relaciones `route=subway` de OpenStreetMap. La línea C ya llega a Colosseo – Fori Imperiali.

## Ayuda (`roma-zones.js`)

- **Consulados y embajadas:** Lista Consolare del 20/07/2026 y Lista Diplomatica del 19/08/2026 del Ministerio de Relaciones Exteriores de Italia (esteri.it). Argentina además en cancilleria.gob.ar (Via Barberini 67). Se usó el consulado general cuando hay (Argentina, Brasil, Colombia, Ecuador, España); si no, la sección consular de la embajada. Perú figura solo como embajada (Via Siacci 2/B). Uruguay y Ecuador se ubicaron a nivel de calle ("aprox").
- **Comisarías y hospitales:** OpenStreetMap (`amenity=police`, `amenity=hospital` con `emergency=yes`).
- **Oficinas de turismo:** turismoroma.it (Tourist Infopoints: Fori Imperiali, Minghetti, Termini y Fiumicino T3).
- **Farmacias de turno:** farmaciediturno.org (la página de Roma). La denuncia por internet de la Policía de Estado (denunceonline) pide SPID o CIE, que los turistas no tienen: no se puso.

## Info (`roma.js` y `roma-local.js`)

- **Transporte:** atac.roma.it (BIT de 100 minutos, Roma 24H/48H/72H, CIS, Tap & Go), adr.it (trenes y buses de Fiumicino y Ciampino), Trenitalia (Leonardo Express, unos 32 minutos). Taxi a precio fijo desde los aeropuertos dentro de las Murallas Aurelianas (varias fuentes; no se encontró la página oficial de Roma Capitale, por eso no se ponen montos).
- **Apps:** número del App Store (itunes.apple.com, tienda de Italia) y nombre en Google Play revisados uno por uno. Italo y MooneyGo quedaron afuera porque no se encontró su nombre en Google Play.
- **Chips:** vodafone.it, windtre.it e iliad.it (tim.it no respondió).
- **Emergencias:** 112, 113, 118, 115, 1522 y el 060608 de Roma Capitale.

## Hoy (`roma-hoy.js`)

- Primer domingo del mes gratis en museos estatales: turismoroma.it ("Prima domenica del mese ingresso gratuito nei Musei Statali").
- Audiencia de los miércoles y Ángelus de los domingos: press.vatican.va y vatican.va.
- Quedaron afuera: el domingo gratis de los Museos Vaticanos (es el último del mes y la guía no sabe marcar "el último") y el mercado de Navidad de Piazza Navona (las fechas 2026 no están publicadas).
- Roma no tiene una agenda oficial que se pueda leer de forma automática: en "Buscar más planes" están Turismo Roma y el 060608.

## Revisión de que sigan abiertos (tarjeta #179, 14/11/2026)

Los 104 lugares de comida, noche y hospedaje se cruzaron otra vez con OpenStreetMap: 103 coincidieron y el otro (Co.So) figura como "Cocktails & Social CO.SO" en la misma dirección.
