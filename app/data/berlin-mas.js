/* Más lugares de Berlín (tarjeta #174, 14/11/2026): monumentos, cafés, restaurantes, hospedaje y excursiones,
   sobre todo para los barrios y categorías que tenían poco (Schöneberg, Neukölln, Prenzlauer Berg, Friedrichshain, Tiergarten).
   Se suman a la lista de data/berlin.js. Van en un archivo aparte para no cruzarse con data/berlin-lugares.js.

   Cada fila: [categoría, tipo, nombre, barrio, dirección, precio, descripción, consejo, etiquetas, destacado (1 = imperdible, opcional)]
   precio: 0 = gratis, 1 = $, 2 = $$, 3 = $$$, 4 = $$$$, null = no aplica.

   Cómo se verificó: cada lugar se buscó en OpenStreetMap por nombre y por dirección (las dos tienen que caer en el mismo lugar),
   y de ahí sale su ubicación (al final de este archivo). Las fuentes están en docs/fuentes-berlin.md.
   Sin precios ni horarios exactos. Falta confirmar uno por uno que sigan abiertos los cafés, restaurantes y hoteles. */
(() => {
  "use strict";
  const city = window.CITY_DATA && window.CITY_DATA.berlin;
  if (!city) return;
  const F = "Fuera de Berlín";

  const filas = [
    /* ───────────── IMPERDIBLES: MONUMENTOS, MEMORIALES E HISTORIA ───────────── */
    ["ver", "Histórico", "Memorial de la Resistencia Alemana", "Tiergarten", "Stauffenbergstraße 13-14", 0, "En el edificio donde fusilaron a los conspiradores del atentado contra Hitler de 1944, una muestra sobre quienes resistieron al nazismo.", "La entrada es libre. Mirá el patio, donde está el monumento a los fusilados.", ["historia","memoria","museo","gratis","lluvia"]],
    ["ver", "Histórico", "Memorial a los Homosexuales Perseguidos por el Nazismo", "Tiergarten", "Ebertstraße, Tiergarten", 0, "Un bloque de hormigón en el borde del Tiergarten con una pequeña ventana donde se ve un video de dos personas besándose.", "Queda enfrente del Monumento a los Judíos Asesinados de Europa: se visitan juntos.", ["historia","memoria","gratis","LGBT+","aire libre"]],
    ["ver", "Histórico", "Memorial a los Sinti y Roma Víctimas del Nazismo", "Tiergarten", "Simsonweg, Tiergarten", 0, "Un estanque circular oscuro con una piedra en el centro donde cada día se coloca una flor fresca, junto al Reichstag.", "Es un lugar de silencio. Queda a pocos pasos del Reichstag y de la Puerta de Brandeburgo.", ["historia","memoria","gratis","aire libre"]],
    ["ver", "Histórico", "Ayuntamiento Rojo", "Mitte", "Rathausstraße 15", 0, "El ayuntamiento de Berlín, de ladrillo rojo y con una torre de 74 metros, frente a la Fuente de Neptuno.", "En días hábiles se puede entrar al hall y a algunas salas: preguntá en la entrada.", ["historia","arquitectura","céntrico","gratis"]],
    ["ver", "Ícono", "Fuente de Neptuno", "Mitte", "Spandauer Straße", 0, "La gran fuente barroca con Neptuno y cuatro mujeres que representan los ríos de Prusia, entre el Ayuntamiento Rojo y la Marienkirche.", "Buena foto con la Torre de Televisión de fondo.", ["fotos","céntrico","gratis","clásico"]],
    ["ver", "Iglesia", "Marienkirche", "Mitte", "Karl-Liebknecht-Straße 8", 0, "Una de las iglesias más antiguas de Berlín, del siglo XIII, a los pies de la Torre de Televisión. Adentro hay una pintura medieval de la «danza de la muerte».", "La entrada es libre. Hay conciertos de órgano algunos días.", ["iglesia","historia","gratis","céntrico"]],
    ["ver", "Iglesia", "Sophienkirche", "Mitte", "Große Hamburger Straße 29", 0, "Iglesia barroca con la torre más antigua que queda en Berlín, escondida en un patio verde del Scheunenviertel.", "Combinala con un paseo por la Große Hamburger Straße y los Hackesche Höfe.", ["iglesia","historia","gratis","caminar"]],
    ["ver", "Histórico", "Cementerio de Dorotheenstadt", "Mitte", "Chausseestraße 126", 0, "Cementerio chico y arbolado donde están enterrados Bertolt Brecht, Hegel, Fichte y muchos artistas berlineses.", "A la entrada hay un plano con las tumbas conocidas. Al lado está la casa de Brecht.", ["historia","cultura","gratis","joya oculta"]],
    ["ver", "Histórico", "Ruina de la Estación Anhalter", "Kreuzberg", "Askanischer Platz 6", 0, "Lo único que queda de la que fue la estación más grande de Berlín: un pedazo de fachada que sobrevivió a la guerra.", "Queda a dos cuadras de la Topografía del Terror y del Museo Alemán de la Técnica.", ["historia","guerra","gratis","fotos"]],
    ["ver", "Histórico", "Ciudadela de Spandau", "Spandau", "Am Juliusturm 64", 2, "Una fortaleza del Renacimiento rodeada de agua, una de las mejor conservadas de Europa, con museos y la torre medieval Juliusturm.", "Llegás con el U7 hasta Zitadelle. En verano hay conciertos al aire libre en el patio.", ["historia","arquitectura","chicos","fotos"]],
    ["ver", "Palacio", "Palacio de Bellevue", "Tiergarten", "Spreeweg 1", 0, "El palacio blanco del siglo XVIII donde vive y trabaja el presidente de Alemania, en el borde del Tiergarten.", "Se ve desde afuera. Si la bandera está izada, el presidente está en Berlín.", ["palacio","arquitectura","gratis","caminar"]],
    ["ver", "Ícono", "Molecule Man", "Treptow", "An den Treptowers", 0, "Tres figuras de aluminio de 30 metros que se unen en medio del río Spree, donde se cruzaban tres barrios del este y el oeste.", "Se ve mejor desde el puente Elsenbrücke o desde un barco por el Spree.", ["arte","fotos","río","gratis"]],
    ["ver", "Naturaleza", "Jardines del Mundo", "Marzahn", "Blumberger Damm 44", 2, "Un parque enorme con jardines de distintas culturas: chino, japonés, coreano, oriental e italiano, y un teleférico.", "Llegás con el U5 hasta Kienberg. Calculá medio día; en primavera es cuando está más lindo.", ["naturaleza","jardín","chicos","fotos","aire libre"]],
    ["ver", "Museo", "Museo de Fotografía", "Charlottenburg", "Jebensstraße 2", 2, "En una vieja casa de oficiales al lado de la estación Zoo, con la colección de Helmut Newton y muestras de fotografía.", "Cierra los lunes. Queda a pasos de la estación Zoologischer Garten.", ["museo","arte","fotos","lluvia"]],
    ["ver", "Museo", "Museo Käthe Kollwitz", "Charlottenburg", "Spandauer Damm 10", 2, "Dibujos, grabados y esculturas de Käthe Kollwitz, la gran artista berlinesa, en el teatro del Palacio de Charlottenburg.", "Queda frente al Palacio de Charlottenburg: se visitan juntos.", ["museo","arte","historia","lluvia"]],

    /* ───────────── CAFÉS ───────────── */
    ["comer", "Café", "Café Einstein Unter den Linden", "Mitte", "Unter den Linden 42", 2, "Café de estilo vienés sobre Unter den Linden, clásico de políticos y periodistas: apfelstrudel, schnitzel y diarios para leer.", "Buena parada entre la Puerta de Brandeburgo y la Isla de los Museos. Pedí el apfelstrudel.", ["café","clásico","merienda","historia"]],
    ["comer", "Café", "Café Sibylle", "Friedrichshain", "Karl-Marx-Allee 72", 1, "Café histórico de la Karl-Marx-Allee, abierto desde 1953, con una pequeña muestra sobre la avenida de la RDA.", "Buena parada para descansar mientras recorrés la avenida.", ["café","historia","guerra fría","merienda"]],
    ["comer", "Café", "Anna Blume", "Prenzlauer Berg", "Kollwitzstraße 83", 2, "Café y florería de Prenzlauer Berg, famoso por sus desayunos servidos en bandejas de varios pisos.", "Los fines de semana se llena para desayunar: andá temprano.", ["café","desayuno","vida de barrio","merienda"]],
    ["comer", "Café", "Double Eye", "Schöneberg", "Akazienstraße 22", 1, "Una barra chiquita de espresso en Schöneberg con fila en la vereda: para muchos, uno de los mejores cafés de la ciudad.", "Se toma rápido y de pie. Pedí el latte de la casa.", ["café","especialidad","vida de barrio"]],
    ["comer", "Café", "Café Rix", "Neukölln", "Karl-Marx-Straße 141", 2, "Café en el patio de un salón de baile del siglo XIX, en medio del Neukölln más antiguo.", "El patio es ideal en días lindos. Queda cerca de Rixdorf, el barrio bohemio.", ["café","historia","patio","vida de barrio"]],
    ["comer", "Café", "Café Westberlin", "Kreuzberg", "Alexandrinenstraße 118-121", 1, "Café de especialidad con revistas de todo el mundo, en el norte de Kreuzberg.", "Queda a unos diez minutos a pie del Museo Judío y de Checkpoint Charlie.", ["café","especialidad","desayuno"]],
    ["comer", "Café", "Barcomi's", "Kreuzberg", "Bergmannstraße 21", 2, "Pionero del café tostado en Berlín, con bagels, cheesecake y brownies en la Bergmannstraße.", "Los desayunos de fin de semana son su fuerte.", ["café","desayuno","merienda","vida de barrio"]],
    ["comer", "Café", "SowohlAlsAuch", "Prenzlauer Berg", "Kollwitzstraße 88", 2, "Café y pastelería frente a Kollwitzplatz, conocido por sus tortas caseras enormes.", "Ideal para merendar después del mercado de los sábados en Kollwitzplatz.", ["café","merienda","dulce","vida de barrio"]],
    ["comer", "Café", "Café Vux", "Neukölln", "Wipperstraße 14", 1, "Pastelería y café de Neukölln donde todo es vegetal (sin productos animales, según su sitio): tortas, tartas y masas.", "Queda cerca del Tempelhofer Feld: buena parada antes o después del paseo.", ["café","merienda","dulce","vegano"]],

    /* ───────────── DÓNDE COMER ───────────── */
    ["comer", "Cocinas del mundo", "Neni Berlin", "Charlottenburg", "Budapester Straße 40", 3, "Cocina de Medio Oriente para compartir en el último piso del hotel 25hours, con vista al Zoológico.", "Reservá y pedí mesa junto a la ventana: se ve el Zoológico desde arriba.", ["compartir","vistas","Medio Oriente"]],
    ["comer", "Cocinas del mundo", "Café Mugrabi", "Kreuzberg", "Planufer 92d", 2, "Cocina de Medio Oriente junto al canal Landwehr: hummus, shakshuka y desayunos largos.", "Ideal para desayunar o almorzar tarde. Se llena los fines de semana.", ["Medio Oriente","desayuno","vegetariano"]],
    ["comer", "Cocinas del mundo", "Defne", "Kreuzberg", "Planufer 92c", 2, "Restaurante turco con mesas al lado del canal Landwehr: mezze, pescados y platos de horno.", "En verano reservá mesa afuera, junto al canal.", ["turco","canal","compartir"]],
    ["comer", "Cocina alemana", "Ständige Vertretung", "Mitte", "Schiffbauerdamm 8", 2, "Cervecería renana a orillas del Spree, llena de fotos de la política alemana, con cerveza Kölsch y cocina casera.", "Pedí la cerveza Kölsch: la sirven en vasos chicos y te los van reponiendo.", ["cocina alemana","cerveza","río","clásico"]],
    ["comer", "Cocina alemana", "Gugelhof", "Prenzlauer Berg", "Knaackstraße 37", 3, "Cocina de Alsacia frente a Kollwitzplatz: flammkuchen, choucroute y vinos de la región.", "Pedí la flammkuchen, una masa finita con crema, cebolla y panceta.", ["cocina alemana","vinos","vida de barrio"]],
    ["comer", "Al paso", "City Chicken", "Neukölln", "Sonnenallee 59", 1, "Pollo asado con salsa de ajo, un clásico de la «calle árabe» de Neukölln.", "Se come rápido y barato. Pedí el pollo con papas y salsa de ajo.", ["al paso","económico","Medio Oriente"]],
    ["comer", "Cocina alemana", "Gasthaus Renger-Patzsch", "Schöneberg", "Wartburgstraße 54", 2, "Taberna de barrio con mesas largas compartidas, flammkuchen y cocina alemana y alsaciana, con jardín en verano.", "Si van pocos, te pueden sentar en una mesa compartida: es parte del encanto.", ["cocina alemana","vida de barrio","cerveza"]],

    /* ───────────── HOSPEDAJE ───────────── */
    ["dormir", "Lujo", "Hotel de Rome", "Mitte", "Behrenstraße 37", 4, "Hotel de lujo en el viejo edificio de un banco frente a Bebelplatz, con pileta en la bóveda y terraza en la azotea.", "Aunque no te alojes, podés tomar algo en la terraza en verano.", ["lujo","céntrico","historia","terraza"]],
    ["dormir", "Boutique", "Roomers Berlin", "Charlottenburg", "Steinplatz 4", 3, "Hotel en el edificio art nouveau de 1913 del antiguo Hotel am Steinplatz, con bar y restaurante propios, cerca de la estación Zoo.", "Bien ubicado para recorrer el oeste: Kurfürstendamm, el Zoológico y la iglesia del Recuerdo.", ["boutique","clásico","arquitectura"]],
    ["dormir", "Hotel", "Axel Hotel Berlin", "Schöneberg", "Lietzenburger Straße 13-15", 2, "Hotel pensado para el público LGBT+ y abierto a todos, cerca de Nollendorfplatz, con terraza en la azotea.", "Queda en la zona de la noche LGBT+ de Schöneberg.", ["LGBT+","terraza","noche"]],
    ["dormir", "Hotel", "Estrel Berlin", "Neukölln", "Sonnenallee 225", 2, "El hotel más grande de Alemania, junto a un canal, con su propio show de imitadores de estrellas.", "Queda lejos del centro, pero con el S-Bahn llegás a todos lados.", ["hotel","canal","shows"]],
    ["dormir", "Boutique", "Ackselhaus", "Prenzlauer Berg", "Belforter Straße 21", 3, "Hotel boutique en dos casas antiguas con un jardín interno, en una calle tranquila de Prenzlauer Berg.", "Muy tranquilo y cerca de Kollwitzplatz. Ideal para parejas.", ["boutique","jardín","vida de barrio"]],
    ["dormir", "Lujo", "InterContinental Berlin", "Tiergarten", "Budapester Straße 2", 3, "Gran hotel junto al Tiergarten y al Zoológico, con spa y un restaurante en el piso 14 con vista a la ciudad.", "Cómodo para familias: el Zoológico y el parque quedan enfrente.", ["lujo","parque","chicos"]],
    ["dormir", "Hotel", "Hotel Bristol Berlin", "Charlottenburg", "Kurfürstendamm 27", 3, "Hotel clásico sobre el Kurfürstendamm, a pocas cuadras de la iglesia del Recuerdo.", "Ideal para hacer compras en Ku'damm y en KaDeWe.", ["hotel","clásico","compras"]],
    ["dormir", "Boutique", "Linnen", "Prenzlauer Berg", "Eberswalder Straße 35", 2, "Pensión chica con habitaciones decoradas una por una, frente al Mauerpark.", "Queda a pasos del mercado de pulgas de los domingos y del subte U2 Eberswalder Straße.", ["boutique","vida de barrio","económico"]],
    ["dormir", "Lujo", "Soho House Berlin", "Prenzlauer Berg", "Torstraße 1", 4, "Hotel de un club privado en un edificio histórico de los años veinte, con pileta en la azotea para los huéspedes.", "Los huéspedes pueden usar la terraza y la pileta de arriba.", ["lujo","terraza","historia"]],
    ["dormir", "Hotel", "Locke at East Side Gallery", "Friedrichshain", "Mühlenstraße 61-63", 2, "Departamentos con cocina y servicio de hotel junto a la East Side Gallery y el Spree.", "Bueno para estadías largas o para cocinar algo propio.", ["hotel","río","cocina"]],
    ["dormir", "Hostel", "Generator Berlin Prenzlauer Berg", "Prenzlauer Berg", "Storkower Straße 160", 1, "Hostel grande junto a la estación de S-Bahn Landsberger Allee, con habitaciones compartidas y privadas.", "Con el S-Bahn del anillo llegás rápido a Friedrichshain y al centro.", ["hostel","económico"]],
    ["dormir", "Hotel", "Me and All Hotel Berlin East Side", "Friedrichshain", "An der Schillingbrücke 2", 2, "Hotel moderno junto al Spree, cerca de la estación Ostbahnhof y de la East Side Gallery.", "Bien ubicado para la noche de Friedrichshain y Kreuzberg.", ["hotel","río","noche"]],

    /* ───────────── EXCURSIONES ───────────── */
    ["escapadas", "Ciudad", "Hamburgo", F, "Rathausmarkt, Hamburgo", 2, "La segunda ciudad de Alemania: un puerto enorme, canales, el barrio de depósitos de ladrillo (UNESCO) y la sala de conciertos Elbphilharmonie.", "En tren rápido es menos de dos horas. Subí al mirador de la Elbphilharmonie, que es gratis.", ["ciudad","puerto","arquitectura","tren"]],
    ["escapadas", "Ciudad", "Brandeburgo an der Havel", F, "Domplatz, Brandeburgo an der Havel", 1, "La ciudad que le dio nombre a la región, rodeada de ríos y lagos, con una catedral de más de 800 años.", "En tren regional es menos de una hora. Ideal en verano para combinar con un paseo en barco.", ["ciudad","historia","río","tren"]],
    ["escapadas", "Historia y memoria", "Monasterio de Chorin", F, "Amt Chorin 11a, Chorin", 1, "Las ruinas de un monasterio gótico de ladrillo rojo del siglo XIII, en medio del bosque y junto a un lago.", "En verano hay conciertos de música clásica en las ruinas. Se llega en tren regional.", ["historia","arquitectura","naturaleza","tren"]],
    ["escapadas", "Historia y memoria", "Palacio Cecilienhof", F, "Im Neuen Garten 11, Potsdam", 2, "La casa de campo de estilo inglés donde en 1945 se reunieron Truman, Stalin y Churchill (reemplazado después por Attlee) para decidir el futuro de la Alemania de posguerra.", "Combinalo con el Neuer Garten y el resto de Potsdam en el día.", ["historia","guerra","palacio","jardín"]],
    ["escapadas", "Palacios y jardines", "Palacio de Caputh", F, "Straße der Einheit 2, Schwielowsee", 1, "El palacio más antiguo que se conserva de la zona de Potsdam, a orillas del lago, con salas barrocas decoradas con azulejos.", "Cerca está la casa de verano de Albert Einstein. Se llega en colectivo desde Potsdam.", ["palacio","lago","arquitectura"]],
    ["escapadas", "Naturaleza y lagos", "Bad Saarow y el lago Scharmützel", F, "Bad Saarow", 1, "Un pueblo termal a orillas de uno de los lagos más grandes de la región, con playas, termas y paseos.", "Se llega en tren regional en una hora y media. En verano es ideal para nadar.", ["lago","naturaleza","termas","tren"]],
    ["escapadas", "Naturaleza y lagos", "Pasarela entre los árboles de Beelitz-Heilstätten", F, "Straße nach Fichtenwalde 13, Beelitz", 2, "Una pasarela sobre la copa de los árboles de un viejo sanatorio abandonado, con edificios de ladrillo cubiertos de vegetación.", "Se llega en tren regional hasta Beelitz-Heilstätten. Los edificios en ruinas solo se ven desde la pasarela o con visita guiada.", ["naturaleza","historia","fotos","tren"]],
    ["escapadas", "Ciudad", "Meissen", F, "Albrechtsburg, Meissen", 2, "La ciudad de la porcelana, a orillas del Elba, con un castillo gótico y una catedral en lo alto de la colina.", "Combinala con Dresde: queda a media hora en tren regional.", ["ciudad","historia","arquitectura","río"]]
  ];

  filas.forEach(f => {
    const p = { cat: f[0], sub: f[1], name: f[2], barrio: f[3], address: f[4], price: f[5], desc: f[6], tip: f[7], tags: f[8] };
    if (f[9]) p.top = true;
    city.places.push(p);
  });

  /* Ubicaciones (OpenStreetMap, 14/11/2026). */
  const coords = {
    "memorial-de-la-resistencia-alemana": [52.50761, 13.36299],
    "memorial-a-los-homosexuales-perseguidos-por-el-nazismo": [52.51326, 13.37614],
    "memorial-a-los-sinti-y-roma-victimas-del-nazismo": [52.5173, 13.37604],
    "ayuntamiento-rojo": [52.51827, 13.40783],
    "fuente-de-neptuno": [52.5196, 13.40684],
    "marienkirche": [52.52055, 13.40718],
    "sophienkirche": [52.52556, 13.40017],
    "cementerio-de-dorotheenstadt": [52.52807, 13.38381],
    "ruina-de-la-estacion-anhalter": [52.50368, 13.38252],
    "ciudadela-de-spandau": [52.54103, 13.21274],
    "palacio-de-bellevue": [52.51729, 13.35243],
    "molecule-man": [52.49698, 13.45895],
    "jardines-del-mundo": [52.5381, 13.56962],
    "museo-de-fotografia": [52.50814, 13.33207],
    "museo-kathe-kollwitz": [52.52054, 13.29209],
    "cafe-einstein-unter-den-linden": [52.5171, 13.38595],
    "cafe-sibylle": [52.51718, 13.43699],
    "anna-blume": [52.53806, 13.41958],
    "double-eye": [52.48799, 13.35405],
    "cafe-rix": [52.47705, 13.43968],
    "cafe-westberlin": [52.50053, 13.40092],
    "barcomi-s": [52.48903, 13.39338],
    "sowohlalsauch": [52.53822, 13.4205],
    "cafe-vux": [52.47217, 13.44258],
    "neni-berlin": [52.50562, 13.3382],
    "cafe-mugrabi": [52.49549, 13.41798],
    "defne": [52.49539, 13.41774],
    "standige-vertretung": [52.52121, 13.38533],
    "gugelhof": [52.53544, 13.41671],
    "city-chicken": [52.48489, 13.4341],
    "gasthaus-renger-patzsch": [52.48742, 13.3521],
    "hotel-de-rome": [52.51579, 13.39407],
    "roomers-berlin": [52.50809, 13.32637],
    "axel-hotel-berlin": [52.4997, 13.34183],
    "estrel-berlin": [52.47363, 13.45885],
    "ackselhaus": [52.53228, 13.41916],
    "intercontinental-berlin": [52.50728, 13.3454],
    "hotel-bristol-berlin": [52.50373, 13.32725],
    "linnen": [52.54151, 13.40901],
    "soho-house-berlin": [52.52777, 13.41566],
    "locke-at-east-side-gallery": [52.50594, 13.43766],
    "generator-berlin-prenzlauer-berg": [52.5297, 13.45559],
    "me-and-all-hotel-berlin-east-side": [52.50999, 13.42957],
    "hamburgo": [53.55041, 9.99237],
    "brandeburgo-an-der-havel": [52.41528, 12.56738],
    "monasterio-de-chorin": [52.89295, 13.88395],
    "palacio-cecilienhof": [52.41928, 13.07032],
    "palacio-de-caputh": [52.34913, 13.0001],
    "bad-saarow-y-el-lago-scharmutzel": [52.2923, 14.05523],
    "pasarela-entre-los-arboles-de-beelitz-heilstatten": [52.26364, 12.91888],
    "meissen": [51.16673, 13.47148]
  };
  const todas = (window.CITY_COORDS = window.CITY_COORDS || {});
  todas.berlin = Object.assign(todas.berlin || {}, coords);
})();
