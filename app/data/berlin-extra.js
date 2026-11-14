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
  stations: {}
};
