/* Datos complementarios de Berlín (tarjeta #99): sellos del pasaporte, lista de viaje, zonas para armar viajes, calendario y textos extra.
   Lo que depende de los lugares (nivel de recomendación, premios, dietas, días que cierran y colecciones) se cargó en la etapa 2 (tarjeta #126).
   Las fotos y las estaciones faltan: tarjetas #132 y #133.
   Las claves son los ids de los lugares (nombre en minúsculas, sin acentos, con guiones). */
window.CITY_EXTRA = window.CITY_EXTRA || {};
window.CITY_EXTRA.berlin = {
  tz: "Europe/Berlin",

  /* Pasaporte berlinés: sellos que se ganan marcando "Ya fui" en los lugares. Mismo formato que data/caba-extra.js. */
  stamps: [
    { id: "primer-paso", icon: "👣", name: "Primer paso", desc: "Visitá tu primer lugar", n: 1 },
    { id: "imperdibles", icon: "🏛️", name: "Lo esencial", desc: "5 imperdibles destacados", n: 5, cat: "ver", q: 3 },
    { id: "museos", icon: "🎨", name: "Ojo de museo", desc: "3 museos", n: 3, sub: "Museo" },
    { id: "verde", icon: "🌳", name: "Aire libre", desc: "3 parques o reservas", n: 3, sub: "Naturaleza" },
    { id: "noche", icon: "🍸", name: "Trasnochador", desc: "2 salidas de noche", n: 2, cat: "noche" },
    { id: "mercados", icon: "🛍️", name: "De mercado en mercado", desc: "Un mercado", n: 1, sub: "Mercado" },
    { id: "escapada", icon: "🚆", name: "Escapada", desc: "Una excursión fuera de la ciudad", n: 1, cat: "escapadas" },
    { id: "curioso", icon: "💎", name: "Fuera del circuito", desc: "Una joya oculta o un lugar de barrio", n: 1, tag: ["joya oculta", "vida de barrio"] },
    { id: "barrios", icon: "🏘️", name: "Explorador de barrios", desc: "Lugares en 5 barrios distintos", n: 5, barrios: true },
    { id: "muro", icon: "🧱", name: "Tras el Muro", desc: "3 lugares del Muro de Berlín", n: 3, tag: ["muro"] },
    { id: "currywurst", icon: "🌭", name: "Currywurst y döner", desc: "2 puestos de currywurst o döner", n: 2, sub: "Currywurst y döner" },
    { id: "cafe", icon: "☕", name: "Cafetero", desc: "2 cafés", n: 2, sub: "Café" },
    { id: "biergarten", icon: "🍺", name: "Biergarten", desc: "Una cervecería o un biergarten", n: 1, sub: "Cervecería y Biergarten" },
    { id: "palacios", icon: "👑", name: "De palacio en palacio", desc: "2 palacios", n: 2, tag: ["palacio"] },
    { id: "club", icon: "🎧", name: "Noche de club", desc: "Un club para bailar", n: 1, sub: "Para bailar" },
    { id: "honorario", icon: "🐻", name: "Berlinés honorario", desc: "20 lugares visitados", n: 20 }
  ],

  /* Nivel de recomendación (tarjeta #126): 3 = Destacado, 2 = Muy recomendado, 1 = Buena opción.
     Los marcados como destacados en data/berlin-lugares.js ya son 3; el resto es 2 salvo lo que se lista acá
     (los que el material de trabajo marcó como "de lo mejor de la ciudad en su tipo"). */
  quality: {
    3: [
      "neues-museum", "museo-judio-de-berlin", "museo-aleman-de-la-tecnica", "neue-nationalgalerie", "topografia-del-terror",
      "humboldt-forum", "c-o-berlin", "coleccion-boros", "max-und-moritz", "henne", "ruyam-gemuse-kebab", "bonanza-coffee-heroes",
      "five-elephant", "zeit-fur-brot", "du-bonheur", "konditorei-buchwald", "hokey-pokey", "jones-ice-cream", "duo-sicilian-ice-cream",
      "facil", "coda", "horvath", "nobelhart-schmutzig", "monsieur-vuong", "azzam", "nu-baumerin", "cookies-cream", "lucky-leek",
      "jute-backerei", "buck-and-breck", "wax-on", "green-door", "cafe-am-neuen-see", "freundschaft", "tresor", "sisyphos", "a-trane",
      "chamaleon", "berliner-ensemble", "schaubuhne", "carcel-de-la-stasi-en-hohenschonhausen", "bus-100-el-city-tour-barato", "dresde",
      "spreewald-lubbenau", "casa-de-la-conferencia-de-wannsee", "the-circus-hostel", "michelberger-hotel", "25hours-hotel-bikini-berlin",
      "the-ritz-carlton-berlin", "mercado-de-winterfeldtplatz", "mercado-turco-del-maybachufer", "kurfurstendamm-y-tauentzienstra-e",
      "dussmann-das-kulturkaufhaus", "hard-wax", "stadion-an-der-alten-forsterei-union-berlin", "strandbad-wannsee"
    ]
  },
  /* Premios y distinciones verificables (Guía Michelin 2025 y 2026, UNESCO, 50 Best Bars, Time Out). La fuente de cada uno está en docs/fuentes-berlin.md. */
  awards: {
    "isla-de-los-museos": ["Patrimonio Mundial UNESCO"], "rutz": ["Guía Michelin 2026 · 3 estrellas"],
    "tim-raue": ["Guía Michelin 2026 · 2 estrellas"], "facil": ["Guía Michelin 2026 · 2 estrellas"],
    "coda": ["Guía Michelin 2026 · 2 estrellas"], "horvath": ["Guía Michelin 2026 · 2 estrellas"],
    "nobelhart-schmutzig": ["Guía Michelin 2026 · 1 estrella"], "tulus-lotrek": ["Guía Michelin 2026 · 1 estrella"],
    "lorenz-adlon-esszimmer": ["Guía Michelin 2026 · 1 estrella"], "hugos": ["Guía Michelin 2026 · 1 estrella"],
    "bandol-sur-mer": ["Guía Michelin 2026 · 1 estrella"], "bricole": ["Guía Michelin 2026 · 1 estrella"],
    "hallmann-klee": ["Guía Michelin 2026 · 1 estrella"], "irma-la-douce": ["Guía Michelin 2026 · 1 estrella"],
    "barra": ["Guía Michelin 2026 · Bib Gourmand"], "remi": ["Guía Michelin 2026 · Bib Gourmand"],
    "byblos": ["Guía Michelin 2026 · Bib Gourmand"], "salhino": ["Guía Michelin 2026 · Bib Gourmand"],
    "nu-baumerin": ["Guía Michelin 2026 · Bib Gourmand"], "november-brasserie": ["Guía Michelin 2026 · Bib Gourmand"],
    "cookies-cream": ["Guía Michelin 2026 · 1 estrella"], "bonvivant-cocktail-bistro": ["Guía Michelin 2026 · 1 estrella"],
    "lucky-leek": ["Guía Michelin 2026 · Bib Gourmand"], "wax-on": ["Europe's 50 Best Bars 2026 · puesto 17 (mejor bar de Alemania)"],
    "green-door": ["Mixology Bar Awards 2026 · Bar del año"], "sisyphos": ["Time Out 2026 · mejor club nocturno de Europa"],
    "palacio-de-sanssouci": ["Patrimonio UNESCO"], "isla-de-los-pavos-reales-pfaueninsel": ["Patrimonio UNESCO"],
    "spreewald-lubbenau": ["Reserva de la Biosfera UNESCO"], "orania-berlin": ["Guía Michelin 2025 · 1 Llave"],
    "hotel-zoo-berlin": ["Guía Michelin 2025 · 1 Llave"], "telegraphenamt": ["Guía Michelin 2025 · 2 Llaves"],
    "wilmina": ["Guía Michelin 2025 · 1 Llave"], "hotel-adlon-kempinski": ["Guía Michelin 2025 · 1 Llave"],
    "the-ritz-carlton-berlin": ["Guía Michelin 2025 · 2 Llaves"], "patrick-hellmann-schlosshotel": ["Guía Michelin 2025 · 2 Llaves"]
  },
  /* Dietas (tarjeta #128). Solo con fuente, revisadas el 13 y 14/11/2026 (detalle en docs/fuentes-berlin.md):
     Cookies Cream (visitberlin.de), Bonvivant Cocktail Bistro (tasteandstories.de), Lucky Leek (guide.michelin.com),
     Brammibal's Donuts (visitberlin.de), Vöner (visitberlin.de), 1990 Vegan Living (top10berlin.de),
     Jute Bäckerei (visitberlin.de), AERA (visitberlin.de), Brotquelle (how-to-coeliac.com), Oshione (smart-travelling.net)
     Se sacó Cielo di Berlino: no es 100 % sin gluten y las fuentes para celíacos no coinciden. */
  diet: {
    "cookies-cream": ["vegetariano"], "bonvivant-cocktail-bistro": ["vegetariano"], "lucky-leek": ["vegano","vegetariano"],
    "brammibal-s-donuts": ["vegano","vegetariano"], "voner": ["vegano","vegetariano"], "1990-vegan-living": ["vegano","vegetariano"],
    "jute-backerei": ["sin TACC"], "aera": ["sin TACC"], "brotquelle": ["sin TACC"], "oshione": ["sin TACC"]
  },
  dietFull: [
    "cookies-cream", "bonvivant-cocktail-bistro", "lucky-leek", "brammibal-s-donuts", "voner", "1990-vegan-living", "jute-backerei",
    "aera", "brotquelle", "oshione"
  ],
  /* Días que abren o cierran (0 = domingo … 6 = sábado), según el sitio de cada lugar; pueden cambiar en feriados. */
  only: {
    "mercado-de-winterfeldtplatz": [3,6], "mercado-turco-del-maybachufer": [2,5], "mercado-de-kollwitzplatz": [4,6],
    "mercado-de-pulgas-del-mauerpark": [0], "mercado-de-pulgas-de-boxhagener-platz": [0], "mercado-de-pulgas-de-arkonaplatz": [0],
    "mercado-de-pulgas-de-la-stra-e-des-17-juni": [6,0], "nowkoelln-flowmarkt": [0], "mercado-de-pulgas-del-raw": [0]
  },
  closed: {
    "isla-de-los-museos": [1], "neues-museum": [1], "alte-nationalgalerie": [1], "museo-bode": [1], "pergamonmuseum-das-panorama": [1],
    "museo-aleman-de-la-tecnica": [1], "neue-nationalgalerie": [1], "hamburger-bahnhof": [1], "gemaldegalerie": [1],
    "berlinische-galerie": [2], "futurium": [2], "urban-nation": [1], "palacio-de-las-lagrimas": [1], "funkturm": [1],
    "palacio-de-charlottenburg": [1], "humboldt-forum": [2], "catedral-alemana": [1], "nueva-sinagoga": [6],
    "haus-der-kulturen-der-welt": [2], "kw-institute-for-contemporary-art": [2], "nuevo-palacio-de-potsdam": [2],
    "palacio-de-rheinsberg": [1], "arminiusmarkthalle": [0], "marheineke-markthalle": [0], "kadewe": [0]
  },

  /* Lista de preparación del viaje (se tilda y queda guardada en el dispositivo). */
  checklist: [
    { title: "Antes de viajar", items: [
      "Pasaporte o documento vigente, y una copia en el celular",
      "Seguro de viaje con cobertura médica",
      "Adaptador de enchufe tipo F (230 V)",
      "Avisar al banco que vas a usar la tarjeta en el exterior",
      "Reservar con tiempo la visita a la cúpula del Reichstag y los museos más pedidos",
      "Descargar esta guía y los mapas de Google sin conexión"
    ] },
    { title: "Al llegar", items: [
      "Comprar el boleto de transporte de las zonas ABC en el aeropuerto y sellarlo",
      "Sacar algo de efectivo en un cajero de banco",
      "Comprar un chip prepago o activar la eSIM",
      "Anotar la dirección del alojamiento y dejar el pasaporte ahí"
    ] }
  ],

  /* Colecciones del inicio (tarjeta #126): cada una es un filtro de Explorar. */
  collections: [
    { name: "Clásicos berlineses", icon: "🥨", filter: {q: "clásico"}, cover: "puerta-de-brandeburgo" },
    { name: "Tras las huellas del Muro", icon: "🧱", filter: {q: "muro"}, cover: "east-side-gallery" },
    { name: "Guerra Fría", icon: "🕵️", filter: {q: "guerra fría"}, cover: "checkpoint-charlie" },
    { name: "Berlín gratis", icon: "💸", filter: {prices: [0]}, cover: "tiergarten" },
    { name: "Arte y museos", icon: "🎨", filter: {q: "arte"}, cover: "isla-de-los-museos" },
    { name: "Miradores y vistas", icon: "🌇", filter: {q: "vista"}, cover: "torre-de-television" },
    { name: "Palacios y jardines", icon: "👑", filter: {q: "palacio"}, cover: "palacio-de-charlottenburg" },
    { name: "Currywurst y döner", icon: "🌭", filter: {cat: "comer",sub: "Currywurst y döner"}, cover: "curry-36" },
    { name: "Cafés", icon: "☕", filter: {cat: "comer",sub: "Café"}, cover: "the-barn" },
    { name: "Alta cocina", icon: "🍷", filter: {cat: "comer",sub: "De autor"}, cover: "rutz" },
    { name: "Vegetariano y vegano", icon: "🥬", filter: {diets: ["vegetariano"]}, cover: "" },
    { name: "Sin TACC", icon: "🌾", filter: {diets: ["sin TACC"]}, cover: "" },
    { name: "Biergärten y cervecerías", icon: "🍺", filter: {cat: "noche",sub: "Cervecería y Biergarten"}, cover: "prater-garten" },
    { name: "Clubes y techno", icon: "🎧", filter: {cat: "noche",sub: "Para bailar"}, cover: "berghain" },
    { name: "Noche LGBT+", icon: "🏳️‍🌈", filter: {q: "lgbt+"}, cover: "" },
    { name: "Con chicos", icon: "🧒", filter: {q: "chicos"}, cover: "zoologico-de-berlin" },
    { name: "Mercados", icon: "🛍️", filter: {cat: "compras",sub: "Mercado"}, cover: "markthalle-neun" },
    { name: "Días de lluvia", icon: "🌧️", filter: {q: "lluvia"}, cover: "museo-judio-de-berlin" },
    { name: "Excursiones de un día", icon: "🚆", filter: {cat: "escapadas"}, cover: "palacio-de-sanssouci" }
  ],

  /* Zonas para el armado automático de viajes, en orden de prioridad. */
  zones: [
    { name: "Mitte y la Isla de los Museos", barrios: ["Mitte"] },
    { name: "Tiergarten y Charlottenburg", barrios: ["Tiergarten", "Charlottenburg"] },
    { name: "Kreuzberg y Friedrichshain", barrios: ["Kreuzberg", "Friedrichshain"] },
    { name: "Prenzlauer Berg", barrios: ["Prenzlauer Berg"] },
    { name: "Neukölln y Schöneberg", barrios: ["Neukölln", "Schöneberg"] }
  ],
  zonasDosDias: [["Mitte y Tiergarten", [0, 1]], ["Kreuzberg, Friedrichshain y Prenzlauer Berg", [2, 3]]],
  zonaChicos: 1,

  /* Palabras que la gente escribe → cómo figura en la guía. */
  synonyms: {
    desayuno: "cafe", brunch: "cafe", merienda: "cafe", cafeteria: "cafe", vegano: "vegetariano",
    hotel: "hospedaje", hoteles: "hospedaje", dormir: "hospedaje", alojamiento: "hospedaje", hostal: "hostel",
    ninos: "chicos", nenes: "chicos", familia: "chicos", familias: "chicos", barato: "economico", baratos: "economico", gratuito: "gratis",
    tragos: "cocteles", cocktail: "cocteles", cocktails: "cocteles", boliche: "club", bailar: "club", techno: "club",
    excursion: "excursiones", escapada: "excursiones", paseo: "caminar", shopping: "compras", regalos: "souvenirs",
    lluvia: "lluvia", llueve: "lluvia", techo: "lluvia", vista: "mirador", vistas: "mirador", guia: "tours", guias: "tours", visita: "tours",
    wall: "muro", mauer: "muro", cerveza: "cerveceria", birra: "cerveceria", kebab: "doner"
  },

  /* Calendario: fechas habituales, a confirmar cada año. m = meses (1-12). */
  events: [
    { m: [2], when: "Febrero", icon: "🎬", name: "Berlinale", desc: "El festival internacional de cine de Berlín, con funciones abiertas al público en toda la ciudad." },
    { m: [4, 5], when: "Fines de abril o mayo", icon: "🖼️", name: "Gallery Weekend", desc: "Un fin de semana en que las galerías de arte abren sus muestras nuevas, con entrada libre." },
    { m: [5], when: "1 de mayo", icon: "✊", name: "Día del Trabajador", desc: "Feriado con fiestas en la calle y manifestaciones, sobre todo en Kreuzberg. Hay cortes de tránsito." },
    { m: [5, 6], when: "Mayo o junio", icon: "🎉", name: "Carnaval de las Culturas", desc: "Cuatro días de desfile, música y comida de todo el mundo en Kreuzberg, el fin de semana de Pentecostés." },
    { m: [6], when: "21 de junio", icon: "🎶", name: "Fiesta de la Música", desc: "Música gratis en plazas, parques y esquinas de toda la ciudad." },
    { m: [7], when: "Julio", icon: "🏳️‍🌈", name: "Marcha del Orgullo (CSD)", desc: "Una de las marchas del orgullo más grandes de Europa, con desfile por el centro." },
    { m: [8], when: "Fines de agosto", icon: "🌙", name: "Larga Noche de los Museos", desc: "Un sábado al año, decenas de museos abren hasta la madrugada con una sola entrada." },
    { m: [9], when: "Septiembre", icon: "🏃", name: "Maratón de Berlín", desc: "Una de las maratones más rápidas del mundo; hay cortes de tránsito ese domingo." },
    { m: [10], when: "3 de octubre", icon: "🇩🇪", name: "Día de la Unidad Alemana", desc: "Feriado nacional: comercios cerrados y festejos cerca de la Puerta de Brandeburgo." },
    { m: [10], when: "Octubre", icon: "💡", name: "Festival de las Luces", desc: "Los edificios más conocidos se iluminan con proyecciones durante varias noches." },
    { m: [11], when: "9 de noviembre", icon: "🧱", name: "Aniversario de la caída del Muro", desc: "Actos y recorridos en el Memorial del Muro y a lo largo del antiguo trazado." },
    { m: [11, 12], when: "Fines de noviembre y diciembre", icon: "🎄", name: "Mercados de Navidad", desc: "Decenas de mercados con vino caliente, comida y artesanías en plazas de toda la ciudad." },
    { m: [12], when: "31 de diciembre", icon: "🎆", name: "Fin de año", desc: "Fiesta al aire libre en la Puerta de Brandeburgo y fuegos artificiales. El transporte funciona toda la noche." }
  ],

  /* Bloques extra para Info práctica. */
  practicalMore: [
    { icon: "🗣️", title: "Palabras que vas a ver", items: [
      { t: "Eingang · Ausgang", d: "Entrada y salida." },
      { t: "Geöffnet · Geschlossen", d: "Abierto y cerrado." },
      { t: "Gleis · Bahnsteig", d: "Vía y andén, en las estaciones." },
      { t: "Fahrkarte · Entwerter", d: "Boleto, y la maquinita donde se sella." },
      { t: "Späti", d: "Kiosco de barrio que abre hasta tarde: bebidas, golosinas y algo de almacén." },
      { t: "Pfand", d: "El depósito que pagás por botellas y latas, y que te devuelven." },
      { t: "Nur Barzahlung", d: "Solo efectivo." }
    ] },
    { icon: "🏥", title: "Salud y farmacias", items: [
      { t: "Urgencias", d: "Llamá al 112. Los hospitales grandes tienen guardia las 24 horas." },
      { t: "Si no es urgente", d: "El 116 117 es el servicio médico de guardia: te orientan y te dicen a dónde ir." },
      { t: "Farmacias", d: "Se llaman Apotheke. De noche y los domingos hay farmacias de turno; la lista está en la puerta de cualquier farmacia." },
      { t: "Seguro de viaje", d: "Muy recomendable: la atención es muy buena, pero cara sin cobertura." }
    ] },
    { icon: "🔍", title: "Cómo elegimos los lugares", items: [
      { t: "Selección", d: "La guía incluye solo lugares con reputación sostenida: premios, distinciones oficiales y buen consenso en reseñas públicas." },
      { t: "Niveles", d: "'Destacado' son los mejores de su categoría, 'Muy recomendado' es una apuesta segura y 'Buena opción' cumple bien pero no es imprescindible." },
      { t: "Opiniones al día", d: "En cada ficha, el botón 'Opiniones, horarios y fotos' abre el lugar en Google Maps con su puntaje, reseñas, horarios actualizados y fotos." },
      { t: "Precios", d: "Usamos niveles ($ a $$$$) en vez de montos porque los precios cambian seguido." }
    ] }
  ],

  photos: {},
  /* Estaciones de U-Bahn y S-Bahn dentro de Berlín, de las líneas de OpenStreetMap, 14/11/2026. Sirven para mostrar la estación más cercana en cada ficha. */
  stations: {
    "U1": [["Uhlandstraße", 52.50281, 13.32696], ["Kurfürstendamm", 52.50388, 13.33182], ["Wittenbergplatz", 52.50159, 13.34287], ["Nollendorfplatz", 52.50009, 13.35510], ["Kurfürstenstraße", 52.49992, 13.36194], ["Gleisdreieck", 52.49943, 13.37460], ["Möckernbrücke", 52.49910, 13.38340], ["Hallesches Tor", 52.49773, 13.39111], ["Prinzenstraße", 52.49838, 13.40603], ["Kottbusser Tor", 52.49897, 13.41898], ["Görlitzer Bahnhof", 52.49928, 13.42841], ["Schlesisches Tor", 52.50089, 13.44169], ["Warschauer Straße", 52.50517, 13.44904]],
    "U2": [["Vinetastraße", 52.55936, 13.41315], ["Schönhauser Allee", 52.54929, 13.41361], ["Eberswalder Straße", 52.54151, 13.41210], ["Senefelderplatz", 52.53205, 13.41250], ["Rosa-Luxemburg-Platz", 52.52731, 13.41056], ["Alexanderplatz", 52.52177, 13.41385], ["Klosterstraße", 52.51720, 13.41232], ["Märkisches Museum", 52.51239, 13.41015], ["Spittelmarkt", 52.51135, 13.40352], ["Hausvogteiplatz", 52.51339, 13.39558], ["Stadtmitte", 52.51218, 13.39017], ["Anton-Wilhelm-Amo-Straße", 52.51172, 13.38451], ["Potsdamer Platz", 52.50915, 13.37804], ["Mendelssohn-Bartholdy-Park", 52.50355, 13.37477], ["Gleisdreieck", 52.49915, 13.37399], ["Bülowstraße", 52.49764, 13.36300], ["Nollendorfplatz", 52.49942, 13.35440], ["Wittenbergplatz", 52.50184, 13.34299], ["Zoologischer Garten", 52.50614, 13.33257], ["Ernst-Reuter-Platz", 52.51193, 13.32196], ["Deutsche Oper", 52.51196, 13.31066], ["Bismarckstraße", 52.51148, 13.30464], ["Sophie-Charlotte-Platz", 52.51089, 13.29582], ["Kaiserdamm", 52.51005, 13.28230], ["Theodor-Heuss-Platz", 52.51001, 13.27214], ["Neu-Westend", 52.51631, 13.25867], ["Olympia-Stadion", 52.51712, 13.25050], ["Ruhleben", 52.52559, 13.24122]],
    "U3": [["Krumme Lanke", 52.44308, 13.24100], ["Onkel Toms Hütte", 52.44995, 13.25355], ["Oskar-Helene-Heim", 52.45031, 13.26906], ["Freie Universität (Thielplatz)", 52.45103, 13.28185], ["Dahlem-Dorf", 52.45745, 13.28983], ["Podbielskiallee", 52.46414, 13.29600], ["Breitenbachplatz", 52.46697, 13.30888], ["Rüdesheimer Platz", 52.47384, 13.31453], ["Heidelberger Platz", 52.48006, 13.31315], ["Fehrbelliner Platz", 52.49071, 13.31560], ["Hohenzollernplatz", 52.49423, 13.32533], ["Spichernstraße", 52.49702, 13.33235], ["Augsburger Straße", 52.50057, 13.33664], ["Wittenbergplatz", 52.50170, 13.34293], ["Nollendorfplatz", 52.50009, 13.35510], ["Kurfürstenstraße", 52.49992, 13.36194], ["Gleisdreieck", 52.49943, 13.37460], ["Möckernbrücke", 52.49910, 13.38340], ["Hallesches Tor", 52.49773, 13.39111], ["Prinzenstraße", 52.49838, 13.40603], ["Kottbusser Tor", 52.49897, 13.41898], ["Görlitzer Bahnhof", 52.49928, 13.42841], ["Schlesisches Tor", 52.50089, 13.44169], ["Warschauer Straße", 52.50513, 13.44919]],
    "U4": [["Innsbrucker Platz", 52.47902, 13.34375], ["Rathaus Schöneberg", 52.48336, 13.34199], ["Bayerischer Platz", 52.48943, 13.34043], ["Viktoria-Luise-Platz", 52.49627, 13.34365], ["Nollendorfplatz", 52.49985, 13.35472]],
    "U5": [["Hauptbahnhof", 52.52514, 13.37008], ["Bundestag", 52.52015, 13.37283], ["Brandenburger Tor", 52.51654, 13.38118], ["Unter den Linden", 52.51693, 13.38983], ["Museumsinsel", 52.51714, 13.39939], ["Rotes Rathaus", 52.51891, 13.40829], ["Alexanderplatz", 52.52164, 13.41409], ["Schillingstraße", 52.52069, 13.42123], ["Strausberger Platz", 52.51797, 13.43225], ["Weberwiese", 52.51661, 13.44535], ["Frankfurter Tor", 52.51572, 13.45402], ["Samariterstraße", 52.51460, 13.46540], ["Frankfurter Allee", 52.51355, 13.47570], ["Magdalenenstraße (Campus für Demokratie)", 52.51237, 13.48749], ["Lichtenberg", 52.51100, 13.49890], ["Friedrichsfelde", 52.50577, 13.51315], ["Tierpark", 52.49727, 13.52312], ["Biesdorf-Süd", 52.49951, 13.54648], ["Elsterwerdaer Platz", 52.50545, 13.56119], ["Wuhletal", 52.51258, 13.57609], ["Kaulsdorf-Nord", 52.52112, 13.58903], ["Kienberg (Gärten der Welt)", 52.52857, 13.59069], ["Cottbusser Platz", 52.53398, 13.59718], ["Hellersdorf", 52.53679, 13.60740], ["Louis-Lewin-Straße", 52.53899, 13.61908], ["Hönow", 52.53856, 13.63281]],
    "U6": [["Alt-Mariendorf", 52.43965, 13.38762], ["Westphalweg", 52.44628, 13.38576], ["Ullsteinstraße", 52.45423, 13.38446], ["Kaiserin-Augusta-Straße", 52.45995, 13.38470], ["Alt-Tempelhof", 52.46571, 13.38574], ["Tempelhof", 52.46993, 13.38568], ["Paradestraße", 52.47811, 13.38637], ["Platz der Luftbrücke", 52.48645, 13.38599], ["Mehringdamm", 52.49443, 13.38902], ["Hallesches Tor", 52.49931, 13.39177], ["Kochstraße/Checkpoint Charlie", 52.50638, 13.39064], ["Stadtmitte", 52.51023, 13.38998], ["Unter den Linden", 52.51712, 13.38882], ["Friedrichstraße", 52.52036, 13.38832], ["Oranienburger Tor", 52.52561, 13.38742], ["Naturkundemuseum", 52.53088, 13.38276], ["Schwartzkopffstraße", 52.53524, 13.37731], ["Reinickendorfer Straße", 52.54018, 13.37014], ["Wedding", 52.54329, 13.36474], ["Leopoldplatz", 52.54641, 13.35917], ["Seestraße", 52.54979, 13.35318], ["Rehberge", 52.55670, 13.34101], ["Afrikanische Straße", 52.56050, 13.33426], ["Kurt-Schumacher-Platz", 52.56327, 13.32716]],
    "U7": [["Rudow", 52.41664, 13.49461], ["Zwickauer Damm", 52.42353, 13.48350], ["Wutzkyallee", 52.42338, 13.47396], ["Lipschitzallee", 52.42496, 13.46191], ["Johannisthaler Chaussee", 52.42958, 13.45326], ["Britz-Süd", 52.43823, 13.44810], ["Parchimer Allee", 52.44516, 13.44976], ["Blaschkoallee", 52.45209, 13.44926], ["Grenzallee", 52.46317, 13.44467], ["Neukölln", 52.46911, 13.44185], ["Karl-Marx-Straße", 52.47668, 13.43922], ["Rathaus Neukölln", 52.48193, 13.43386], ["Hermannplatz", 52.48652, 13.42397], ["Südstern", 52.48942, 13.40731], ["Gneisenaustraße", 52.49145, 13.39526], ["Mehringdamm", 52.49446, 13.38893], ["Möckernbrücke", 52.49876, 13.38273], ["Yorckstraße", 52.49305, 13.37038], ["Kleistpark", 52.49045, 13.35984], ["Eisenacher Straße", 52.48957, 13.34980], ["Bayerischer Platz", 52.48869, 13.34099], ["Berliner Straße", 52.48729, 13.33050], ["Blissestraße", 52.48647, 13.32161], ["Fehrbelliner Platz", 52.49068, 13.31411], ["Konstanzer Straße", 52.49482, 13.30898], ["Adenauerplatz", 52.50024, 13.30740], ["Wilmersdorfer Straße", 52.50690, 13.30667], ["Bismarckstraße", 52.51191, 13.30519], ["Richard-Wagner-Platz", 52.51713, 13.30665], ["Mierendorffplatz", 52.52636, 13.30489], ["Jungfernheide", 52.53042, 13.30075], ["Jakob-Kaiser-Platz", 52.53634, 13.29318], ["Halemweg", 52.53668, 13.28591], ["Siemensdamm", 52.53682, 13.27276], ["Rohrdamm", 52.53703, 13.26263], ["Paulsternstraße", 52.53806, 13.24765], ["Haselhorst", 52.53877, 13.23288], ["Zitadelle", 52.53767, 13.21756], ["Altstadt Spandau", 52.53911, 13.20560]],
    "U8": [["Hermannstraße", 52.46778, 13.43121], ["Leinestraße", 52.47299, 13.42842], ["Boddinstraße", 52.48019, 13.42533], ["Hermannplatz", 52.48664, 13.42470], ["Schönleinstraße", 52.49310, 13.42210], ["Kottbusser Tor", 52.49917, 13.41777], ["Moritzplatz", 52.50361, 13.41079], ["Heinrich-Heine-Straße", 52.51044, 13.41611], ["Jannowitzbrücke", 52.51604, 13.41827], ["Alexanderplatz", 52.52133, 13.41240], ["Weinmeisterstraße", 52.52578, 13.40445], ["Rosenthaler Platz", 52.53031, 13.40087], ["Bernauer Straße", 52.53744, 13.39674], ["Voltastraße", 52.54211, 13.39311], ["Gesundbrunnen", 52.54882, 13.38842], ["Pankstraße", 52.55240, 13.38129], ["Osloer Straße", 52.55724, 13.37329], ["Franz-Neumann-Platz", 52.56455, 13.36400], ["Residenzstraße", 52.57146, 13.36043], ["Paracelsus-Bad", 52.57416, 13.34934], ["Lindauer Allee", 52.57543, 13.33843], ["Karl-Bonhoeffer-Nervenklinik", 52.57974, 13.33316], ["Rathaus Reinickendorf", 52.58879, 13.32573]],
    "U9": [["Osloer Straße", 52.55722, 13.37314], ["Nauener Platz", 52.55146, 13.36707], ["Leopoldplatz", 52.54645, 13.35903], ["Amrumer Straße", 52.54215, 13.34949], ["Westhafen", 52.53648, 13.34234], ["Birkenstraße", 52.53210, 13.34124], ["Turmstraße", 52.52578, 13.34114], ["Hansaplatz", 52.51775, 13.34201], ["Zoologischer Garten", 52.50716, 13.33305], ["Kurfürstendamm", 52.50377, 13.33135], ["Spichernstraße", 52.49637, 13.33075], ["Güntzelstraße", 52.49208, 13.33091], ["Berliner Straße", 52.48745, 13.33081], ["Bundesplatz", 52.47748, 13.32836], ["Friedrich-Wilhelm-Platz", 52.47171, 13.32861], ["Walther-Schreiber-Platz", 52.46562, 13.32818], ["Schloßstraße", 52.46143, 13.32502]],
    "S1": [["Hohen Neuendorf (b Berlin)", 52.66866, 13.28695], ["Frohnau", 52.63228, 13.29024], ["Hermsdorf", 52.61731, 13.30755], ["Waidmannslust", 52.60624, 13.32107], ["Wittenau", 52.59701, 13.33416], ["Wilhelmsruh", 52.58166, 13.36213], ["Schönholz", 52.57124, 13.38128], ["Wollankstraße", 52.56484, 13.39276], ["Bornholmer Straße", 52.55422, 13.39774], ["Gesundbrunnen", 52.54931, 13.38906], ["Humboldthain", 52.54476, 13.37926], ["Nordbahnhof", 52.53266, 13.38691], ["Oranienburger Straße", 52.52518, 13.39288], ["Friedrichstraße", 52.52023, 13.38589], ["Brandenburger Tor", 52.51644, 13.38094], ["Potsdamer Platz", 52.50926, 13.37639], ["Anhalter Bahnhof", 52.50343, 13.38135], ["Yorckstraße (Großgörschenstraße)", 52.49171, 13.36727], ["Julius-Leber-Brücke", 52.48645, 13.36106], ["Schöneberg", 52.47896, 13.35127], ["Friedenau", 52.47040, 13.34098], ["Feuerbachstraße", 52.46375, 13.33267], ["Rathaus Steglitz", 52.45505, 13.32178], ["Botanischer Garten", 52.44795, 13.30691], ["Lichterfelde West", 52.44327, 13.29327], ["Sundgauer Straße", 52.43644, 13.27399], ["Zehlendorf", 52.43093, 13.25776], ["Mexikoplatz", 52.43681, 13.23326], ["Schlachtensee", 52.44004, 13.21481], ["Nikolassee", 52.43190, 13.19414], ["Wannsee", 52.42113, 13.17923]],
    "S2": [["Bernau", 52.67516, 13.59070], ["Bernau-Friedenstal", 52.66825, 13.56415], ["Zepernick (bei Bernau)", 52.65954, 13.53345], ["Röntgental", 52.64862, 13.51332], ["Buch", 52.63550, 13.49110], ["Karow", 52.61507, 13.46919], ["Blankenburg", 52.59120, 13.44307], ["Pankow-Heinersdorf", 52.57758, 13.42892], ["Pankow", 52.56583, 13.40940], ["Bornholmer Straße", 52.55424, 13.39793], ["Gesundbrunnen", 52.54931, 13.38906], ["Humboldthain", 52.54476, 13.37926], ["Nordbahnhof", 52.53266, 13.38691], ["Oranienburger Straße", 52.52518, 13.39288], ["Friedrichstraße", 52.52023, 13.38589], ["Brandenburger Tor", 52.51644, 13.38094], ["Potsdamer Platz", 52.50926, 13.37639], ["Anhalter Bahnhof", 52.50343, 13.38135], ["Yorckstraße", 52.49113, 13.37199], ["Südkreuz", 52.47582, 13.36483], ["Priesterweg", 52.45991, 13.35622], ["Attilastraße", 52.44748, 13.36095], ["Marienfelde", 52.42401, 13.37469], ["Buckower Chaussee", 52.41031, 13.38286], ["Schichauweg", 52.39843, 13.38945], ["Lichtenrade", 52.38683, 13.39641], ["Mahlow", 52.36030, 13.40786], ["Blankenfelde (Teltow-Fläming)", 52.33678, 13.41593], ["Bernau (b. Berlin)", 52.67594, 13.59268]],
    "S3": [["Erkner", 52.43002, 13.75043], ["Wilhelmshagen", 52.43903, 13.72189], ["Rahnsdorf", 52.45181, 13.68909], ["Friedrichshagen", 52.45747, 13.62278], ["Hirschgarten", 52.45799, 13.60259], ["Köpenick", 52.45875, 13.58035], ["Wuhlheide", 52.46901, 13.55349], ["Karlshorst", 52.48087, 13.52658], ["Betriebsbahnhof Rummelsburg", 52.49437, 13.49698], ["Rummelsburg", 52.50146, 13.47789], ["Ostkreuz", 52.50370, 13.46793], ["Warschauer Straße", 52.50660, 13.44990], ["Ostbahnhof", 52.51083, 13.43531], ["Jannowitzbrücke", 52.51440, 13.41917], ["Alexanderplatz", 52.52158, 13.41138], ["Hackescher Markt", 52.52268, 13.40207], ["Friedrichstraße", 52.52045, 13.38727], ["Hauptbahnhof", 52.52528, 13.36920], ["Bellevue", 52.52006, 13.34778], ["Tiergarten", 52.51405, 13.33619], ["Zoologischer Garten", 52.50687, 13.33153], ["Savignyplatz", 52.50522, 13.31901], ["Charlottenburg", 52.50504, 13.30379], ["Westkreuz", 52.50087, 13.28351], ["Messe Süd (Eichkamp)", 52.49860, 13.27082], ["Heerstraße", 52.50804, 13.25958], ["Olympiastadion", 52.51125, 13.24234], ["Pichelsberg", 52.51024, 13.22756], ["Stresow", 52.53204, 13.20897], ["Spandau", 52.53491, 13.19694]],
    "S5": [["Fredersdorf (bei Berlin)", 52.52629, 13.76043], ["Neuenhagen", 52.52066, 13.69941], ["Hoppegarten (Mark)", 52.51819, 13.67290], ["Birkenstein", 52.51564, 13.64660], ["Mahlsdorf", 52.51203, 13.60942], ["Kaulsdorf", 52.51218, 13.58926], ["Wuhletal", 52.51278, 13.57408], ["Biesdorf", 52.51313, 13.55510], ["Friedrichsfelde Ost", 52.51420, 13.51883], ["Lichtenberg", 52.50985, 13.49700], ["Nöldnerplatz", 52.50360, 13.48453], ["Ostkreuz", 52.50370, 13.46793], ["Warschauer Straße", 52.50660, 13.44990], ["Ostbahnhof", 52.51083, 13.43531], ["Jannowitzbrücke", 52.51440, 13.41917], ["Alexanderplatz", 52.52158, 13.41138], ["Hackescher Markt", 52.52268, 13.40207], ["Friedrichstraße", 52.52045, 13.38727], ["Hauptbahnhof", 52.52528, 13.36920], ["Bellevue", 52.52006, 13.34778], ["Tiergarten", 52.51405, 13.33619], ["Zoologischer Garten", 52.50687, 13.33153], ["Savignyplatz", 52.50522, 13.31901], ["Charlottenburg", 52.50504, 13.30379], ["Westkreuz", 52.50087, 13.28351]],
    "S7": [["Ahrensfelde", 52.57078, 13.56512], ["Mehrower Allee", 52.55705, 13.55291], ["Raoul-Wallenberg-Straße", 52.55028, 13.54707], ["Marzahn", 52.54316, 13.54081], ["Poelchaustraße", 52.53489, 13.53507], ["Springpfuhl", 52.52641, 13.53669], ["Friedrichsfelde Ost", 52.51420, 13.51883], ["Lichtenberg", 52.50985, 13.49700], ["Nöldnerplatz", 52.50360, 13.48453], ["Ostkreuz", 52.50370, 13.46793], ["Warschauer Straße", 52.50660, 13.44990], ["Ostbahnhof", 52.51083, 13.43531], ["Jannowitzbrücke", 52.51440, 13.41917], ["Alexanderplatz", 52.52158, 13.41138], ["Hackescher Markt", 52.52268, 13.40207], ["Friedrichstraße", 52.52045, 13.38727], ["Hauptbahnhof", 52.52528, 13.36920], ["Bellevue", 52.52006, 13.34778], ["Tiergarten", 52.51405, 13.33619], ["Zoologischer Garten", 52.50687, 13.33153], ["Savignyplatz", 52.50522, 13.31901], ["Charlottenburg", 52.50504, 13.30379], ["Westkreuz", 52.50060, 13.28321], ["Grunewald", 52.48857, 13.26126], ["Nikolassee", 52.43202, 13.19304], ["Wannsee", 52.42122, 13.17911], ["Griebnitzsee", 52.39439, 13.12629], ["Babelsberg", 52.39145, 13.09273]],
    "S8": [["Hohen Neuendorf (b Berlin)", 52.66866, 13.28695], ["Bergfelde", 52.66982, 13.32124], ["Schönfließ", 52.66453, 13.34055], ["Mühlenbeck-Mönchmühle", 52.65484, 13.38605], ["Blankenburg", 52.59120, 13.44307], ["Pankow-Heinersdorf", 52.57758, 13.42892], ["Pankow", 52.56583, 13.40940], ["Bornholmer Straße", 52.55424, 13.39793], ["Schönhauser Allee", 52.54895, 13.41641], ["Prenzlauer Allee", 52.54461, 13.42624], ["Greifswalder Straße", 52.53986, 13.43966], ["Landsberger Allee", 52.52889, 13.45527], ["Storkower Straße", 52.52352, 13.46565], ["Frankfurter Allee", 52.51458, 13.47470], ["Ostkreuz", 52.50274, 13.46878], ["Treptower Park", 52.49335, 13.46132], ["Plänterwald", 52.47805, 13.47384], ["Baumschulenweg", 52.46720, 13.49001], ["Schöneweide", 52.45456, 13.50998], ["Johannisthal", 52.44638, 13.52443], ["Adlershof", 52.43450, 13.54174], ["Grünau", 52.41214, 13.57456], ["Eichwalde", 52.37074, 13.61559], ["Zeuthen", 52.34809, 13.62782]],
    "S9": [["Flughafen BER", 52.36469, 13.50960], ["Waßmannsdorf", 52.36844, 13.46355], ["Schönefeld", 52.39104, 13.51353], ["Grünbergallee", 52.39940, 13.54280], ["Altglienicke", 52.40751, 13.55926], ["Adlershof", 52.43532, 13.54082], ["Johannisthal", 52.44724, 13.52330], ["Schöneweide", 52.45545, 13.50924], ["Baumschulenweg", 52.46803, 13.48911], ["Plänterwald", 52.47891, 13.47288], ["Treptower Park", 52.49428, 13.46227], ["Warschauer Straße", 52.50660, 13.44990], ["Ostbahnhof", 52.51083, 13.43531], ["Jannowitzbrücke", 52.51440, 13.41917], ["Alexanderplatz", 52.52158, 13.41138], ["Hackescher Markt", 52.52268, 13.40207], ["Friedrichstraße", 52.52045, 13.38727], ["Hauptbahnhof", 52.52528, 13.36920], ["Bellevue", 52.52006, 13.34778], ["Tiergarten", 52.51405, 13.33619], ["Zoologischer Garten", 52.50687, 13.33153], ["Savignyplatz", 52.50522, 13.31901], ["Charlottenburg", 52.50504, 13.30379], ["Westkreuz", 52.50087, 13.28351], ["Messe Süd (Eichkamp)", 52.49860, 13.27082], ["Heerstraße", 52.50804, 13.25958], ["Olympiastadion", 52.51125, 13.24234], ["Pichelsberg", 52.51024, 13.22756], ["Stresow", 52.53204, 13.20897], ["Spandau", 52.53491, 13.19694]],
    "S15": [["Wedding", 52.54332, 13.36834], ["Gesundbrunnen", 52.54916, 13.39000]],
    "S25": [["Hennigsdorf (bei Berlin)", 52.63745, 13.20593], ["Heiligensee", 52.62455, 13.22923], ["Schulzendorf", 52.61296, 13.24609], ["Tegel", 52.58809, 13.28965], ["Eichborndamm", 52.57767, 13.31651], ["Karl-Bonhoeffer-Nervenklinik", 52.57804, 13.32916], ["Alt-Reinickendorf", 52.57781, 13.35077], ["Schönholz", 52.57124, 13.38128], ["Wollankstraße", 52.56484, 13.39276], ["Bornholmer Straße", 52.55422, 13.39774], ["Gesundbrunnen", 52.54931, 13.38906], ["Humboldthain", 52.54476, 13.37926], ["Nordbahnhof", 52.53266, 13.38691], ["Oranienburger Straße", 52.52518, 13.39288], ["Friedrichstraße", 52.52023, 13.38589], ["Brandenburger Tor", 52.51644, 13.38094], ["Potsdamer Platz", 52.50926, 13.37639], ["Anhalter Bahnhof", 52.50343, 13.38135], ["Yorckstraße", 52.49113, 13.37199], ["Südkreuz", 52.47582, 13.36483], ["Priesterweg", 52.45994, 13.35604], ["Südende", 52.44830, 13.35367], ["Lankwitz", 52.43883, 13.34217], ["Lichterfelde Ost", 52.42976, 13.32780], ["Osdorfer Straße", 52.41896, 13.31421], ["Lichterfelde Süd", 52.40997, 13.30845], ["Teltow Stadt", 52.39682, 13.27641]],
    "S26": [["Teltow Stadt", 52.39710, 13.27729], ["Lichterfelde Süd", 52.41034, 13.30883], ["Osdorfer Straße", 52.41895, 13.31442], ["Lichterfelde Ost", 52.43057, 13.32923], ["Lankwitz", 52.43883, 13.34217], ["Südende", 52.44825, 13.35386], ["Priesterweg", 52.45989, 13.35648], ["Südkreuz", 52.47619, 13.36533], ["Yorckstraße", 52.49204, 13.37221], ["Anhalter Bahnhof", 52.50338, 13.38159], ["Potsdamer Platz", 52.50984, 13.37691], ["Brandenburger Tor", 52.51645, 13.38275], ["Friedrichstraße", 52.52062, 13.38665], ["Oranienburger Straße", 52.52563, 13.39330], ["Nordbahnhof", 52.53264, 13.38753], ["Humboldthain", 52.54529, 13.37984], ["Gesundbrunnen", 52.54903, 13.39032], ["Bornholmer Straße", 52.55528, 13.39776], ["Pankow", 52.56595, 13.40992], ["Pankow-Heinersdorf", 52.57835, 13.42991], ["Blankenburg", 52.59149, 13.44363]],
    "S41": [["Gesundbrunnen", 52.54916, 13.39000], ["Schönhauser Allee", 52.54895, 13.41641], ["Prenzlauer Allee", 52.54461, 13.42624], ["Greifswalder Straße", 52.53986, 13.43966], ["Landsberger Allee", 52.52889, 13.45527], ["Storkower Straße", 52.52352, 13.46565], ["Frankfurter Allee", 52.51458, 13.47470], ["Ostkreuz", 52.50274, 13.46878], ["Treptower Park", 52.49341, 13.46117], ["Sonnenallee", 52.47254, 13.45517], ["Neukölln", 52.46938, 13.44237], ["Hermannstraße", 52.46757, 13.43035], ["Tempelhof", 52.47123, 13.38352], ["Südkreuz", 52.47634, 13.36534], ["Schöneberg", 52.47922, 13.35092], ["Innsbrucker Platz", 52.47817, 13.34066], ["Bundesplatz", 52.47770, 13.32896], ["Heidelberger Platz", 52.48045, 13.31134], ["Hohenzollerndamm", 52.48893, 13.29996], ["Halensee", 52.49601, 13.29069], ["Westkreuz", 52.50138, 13.28354], ["Messe Nord/ZOB", 52.50817, 13.28394], ["Westend", 52.51877, 13.28431], ["Jungfernheide", 52.53047, 13.30029], ["Beusselstraße", 52.53442, 13.33000], ["Westhafen", 52.53629, 13.34494], ["Wedding", 52.54332, 13.36834]],
    "S42": [["Gesundbrunnen", 52.54920, 13.39005], ["Wedding", 52.54269, 13.36664], ["Westhafen", 52.53620, 13.34331], ["Beusselstraße", 52.53427, 13.32812], ["Jungfernheide", 52.53046, 13.29926], ["Westend", 52.51801, 13.28430], ["Messe Nord/ZOB", 52.50732, 13.28306], ["Westkreuz", 52.50040, 13.28411], ["Halensee", 52.49595, 13.29051], ["Hohenzollerndamm", 52.48841, 13.30041], ["Heidelberger Platz", 52.48008, 13.31164], ["Bundesplatz", 52.47759, 13.32946], ["Innsbrucker Platz", 52.47804, 13.34252], ["Schöneberg", 52.47936, 13.35243], ["Südkreuz", 52.47517, 13.36545], ["Tempelhof", 52.47083, 13.38478], ["Hermannstraße", 52.46761, 13.43145], ["Neukölln", 52.46955, 13.44431], ["Sonnenallee", 52.47336, 13.45607], ["Treptower Park", 52.49422, 13.46241], ["Ostkreuz", 52.50365, 13.46978], ["Frankfurter Allee", 52.51566, 13.47424], ["Storkower Straße", 52.52401, 13.46420], ["Landsberger Allee", 52.53001, 13.45436], ["Greifswalder Straße", 52.54041, 13.43880], ["Prenzlauer Allee", 52.54524, 13.42507], ["Schönhauser Allee", 52.54953, 13.41402]],
    "S46": [["Zeuthen", 52.34905, 13.62727], ["Eichwalde", 52.37192, 13.61507], ["Grünau", 52.41297, 13.57380], ["Adlershof", 52.43532, 13.54082], ["Johannisthal", 52.44724, 13.52330], ["Schöneweide", 52.45545, 13.50924], ["Baumschulenweg", 52.46803, 13.48911], ["Köllnische Heide", 52.46966, 13.46773], ["Neukölln", 52.46938, 13.44237], ["Hermannstraße", 52.46757, 13.43035], ["Tempelhof", 52.47123, 13.38352], ["Südkreuz", 52.47634, 13.36534], ["Schöneberg", 52.47922, 13.35092], ["Innsbrucker Platz", 52.47817, 13.34066], ["Bundesplatz", 52.47770, 13.32896], ["Heidelberger Platz", 52.48045, 13.31134], ["Hohenzollerndamm", 52.48893, 13.29996], ["Halensee", 52.49601, 13.29069], ["Westkreuz", 52.50138, 13.28354], ["Messe Nord/ZOB", 52.50817, 13.28394], ["Westend", 52.51877, 13.28431]],
    "S47": [["Südkreuz", 52.47517, 13.36545], ["Tempelhof", 52.47083, 13.38478], ["Hermannstraße", 52.46761, 13.43145], ["Neukölln", 52.46955, 13.44431], ["Köllnische Heide", 52.46977, 13.46937], ["Baumschulenweg", 52.46733, 13.49007], ["Schöneweide", 52.45465, 13.51011], ["Oberspree", 52.45255, 13.53849], ["Spindlersfeld", 52.44692, 13.56147]],
    "S75": [["Ostbahnhof", 52.51074, 13.43522], ["Warschauer Straße", 52.50605, 13.45172], ["Ostkreuz", 52.50313, 13.46948], ["Nöldnerplatz", 52.50414, 13.48620], ["Lichtenberg", 52.51071, 13.49885], ["Friedrichsfelde Ost", 52.51404, 13.52095], ["Springpfuhl", 52.52773, 13.53640], ["Gehrenseestraße", 52.55710, 13.52423], ["Hohenschönhausen", 52.56630, 13.51262], ["Wartenberg", 52.57302, 13.50391]],
    "S85": [["Flughafen BER", 52.36469, 13.50960], ["Waßmannsdorf", 52.36844, 13.46355], ["Schönefeld", 52.39104, 13.51353], ["Grünbergallee", 52.39940, 13.54280], ["Altglienicke", 52.40751, 13.55926], ["Adlershof", 52.43532, 13.54082], ["Johannisthal", 52.44724, 13.52330], ["Schöneweide", 52.45545, 13.50924], ["Baumschulenweg", 52.46803, 13.48911], ["Plänterwald", 52.47891, 13.47288], ["Treptower Park", 52.49428, 13.46227], ["Ostkreuz", 52.50365, 13.46978], ["Frankfurter Allee", 52.51566, 13.47424], ["Storkower Straße", 52.52401, 13.46420], ["Landsberger Allee", 52.53001, 13.45436], ["Greifswalder Straße", 52.54041, 13.43880], ["Prenzlauer Allee", 52.54524, 13.42507], ["Schönhauser Allee", 52.54953, 13.41402], ["Bornholmer Straße", 52.55529, 13.39795], ["Schönholz", 52.57133, 13.38142], ["Wilhelmsruh", 52.58175, 13.36229], ["Wittenau", 52.59707, 13.33437], ["Waidmannslust", 52.60631, 13.32128], ["Hermsdorf", 52.61737, 13.30775], ["Frohnau", 52.63236, 13.29042], ["Pankow", 52.56595, 13.40992], ["Wollankstraße", 52.56484, 13.39276]]
  }
};
