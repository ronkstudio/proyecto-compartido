/* Datos complementarios de Ámsterdam (tarjeta #199): sellos del pasaporte, niveles de recomendación, dietas, días de cierre,
   colecciones, zonas para armar viajes, calendario, fotos y estaciones.
   Las claves son los ids de los lugares (nombre en minúsculas, sin acentos, con guiones). */
window.CITY_EXTRA = window.CITY_EXTRA || {};
window.CITY_EXTRA.amsterdam = {
  tz: "Europe/Amsterdam",

  /* Pasaporte de Ámsterdam: sellos que se ganan marcando "Ya fui" en los lugares. Mismo formato que data/caba-extra.js. */
  stamps: [
    { id: "primer-paso", icon: "👣", name: "Primer paso", desc: "Visitá tu primer lugar", n: 1 },
    { id: "imperdibles", icon: "🏛️", name: "Lo esencial", desc: "5 imperdibles destacados", n: 5, cat: "ver", q: 3 },
    { id: "museos", icon: "🎨", name: "De museo en museo", desc: "3 museos", n: 3, sub: "Museo" },
    { id: "canales", icon: "🛶", name: "Entre canales", desc: "3 canales o puentes", n: 3, tag: ["canales"] },
    { id: "panqueques", icon: "🥞", name: "Panqueque holandés", desc: "Una casa de panqueques", n: 1, sub: "Panqueques" },
    { id: "cafe-marron", icon: "🍺", name: "Café marrón", desc: "2 cafés marrones", n: 2, sub: "Café marrón" },
    { id: "molinos", icon: "🌬️", name: "Molinos de viento", desc: "Un molino", n: 1, tag: ["molino"] },
    { id: "noche", icon: "🍸", name: "Trasnochador", desc: "2 salidas de noche", n: 2, cat: "noche" },
    { id: "escapada", icon: "🚆", name: "Escapada", desc: "Una excursión fuera de la ciudad", n: 1, cat: "escapadas" },
    { id: "curioso", icon: "💎", name: "Fuera del circuito", desc: "Una joya oculta o un lugar alternativo", n: 1, tag: ["joya oculta", "alternativo"] },
    { id: "barrios", icon: "🏘️", name: "Explorador de barrios", desc: "Lugares en 5 barrios distintos", n: 5, barrios: true },
    { id: "honorario", icon: "🌷", name: "Amsterdamés honorario", desc: "20 lugares visitados", n: 20 }
  ],

  /* Nivel de recomendación: 3 = Destacado, 2 = Muy recomendado, 1 = Buena opción.
     Los marcados como destacados en data/amsterdam-lugares.js ya son 3; el resto es 2 salvo lo que se lista acá. */
  quality: {
    3: ["casa-museo-de-rembrandt", "nuestro-senor-en-el-atico-ons-lieve-heer-op-solder", "brouwersgracht", "los-siete-puentes-del-reguliersgracht",
      "winkel-43", "restaurant-blauw", "de-kas", "vleminckx", "cafe-hoppe", "wynand-fockink", "brouwerij-t-ij", "bimhuis", "haarlem", "pulitzer-amsterdam"],
    1: ["madame-tussauds-amsterdam", "the-amsterdam-dungeon", "body-worlds", "this-is-holland", "kalverstraat", "the-flying-pig-downtown",
      "the-avocado-show", "volendam", "zandvoort"]
  },
  awards: {},

  /* Dietas. Solo con fuente: OpenStreetMap ("diet:vegan=only" o "diet:gluten_free=only", 18/11/2026) y la web de cada local,
     que lo dice (revisadas el 18/11/2026). Detalle en docs/fuentes-amsterdam.md. */
  diet: {
    "de-patchka": ["vegano", "vegetariano"], "soil-vegan-cafe": ["vegano", "vegetariano"], "vegan-junk-food-bar": ["vegano", "vegetariano"],
    "bloem": ["vegano", "vegetariano", "sin TACC"], "sue-bites-bar": ["sin TACC", "vegano", "vegetariano"],
    "craft-coffee-pastry": ["sin TACC"], "rose-vanilla": ["sin TACC"]
  },
  dietFull: ["de-patchka", "soil-vegan-cafe", "vegan-junk-food-bar", "bloem", "sue-bites-bar", "craft-coffee-pastry", "rose-vanilla"],

  /* Días que abren o cierran (0 = domingo … 6 = sábado). Solo los días fijos y conocidos; pueden cambiar en feriados. */
  only: {
    "noordermarkt": [1, 6], "mercado-de-lindengracht": [6], "mercado-de-libros-del-spui": [5]
  },
  closed: {
    "mercado-albert-cuyp": [0], "mercado-albert-cuyp-para-comer": [0], "mercado-de-pulgas-de-waterlooplein": [0], "ten-katemarkt": [0], "dappermarkt": [0]
  },

  /* Lista de preparación del viaje (se tilda y queda guardada en el dispositivo). */
  checklist: [
    { title: "Antes de viajar", items: [
      "Pasaporte o documento vigente, y una copia en el celular",
      "Seguro de viaje con cobertura médica",
      "Adaptador de enchufe tipo C o F (230 V)",
      "Avisar al banco que vas a usar la tarjeta en el exterior, y llevar una de débito",
      "Comprar con semanas de anticipación la Casa de Ana Frank y el Museo Van Gogh",
      "Campera impermeable y paraguas chico",
      "Descargar esta guía y los mapas de Google sin conexión"
    ] },
    { title: "Al llegar", items: [
      "Tomar el tren desde el aeropuerto pagando con la tarjeta del banco",
      "Acordarse de marcar la salida en cada viaje",
      "Comprar un chip prepago o activar la eSIM",
      "No caminar por la bicisenda"
    ] }
  ],

  /* Colecciones del inicio: cada una es un filtro de Explorar. */
  collections: [
    { name: "Museos", icon: "🎨", filter: { cat: "ver", sub: "Museo" }, cover: "rijksmuseum" },
    { name: "Clásicos de Ámsterdam", icon: "🏛️", filter: { q: "clásico" }, cover: "plaza-dam" },
    { name: "Canales y puentes", icon: "🛶", filter: { q: "canales" }, cover: "los-canales-grachtengordel" },
    { name: "Ámsterdam gratis", icon: "💸", filter: { prices: [0] }, cover: "vondelpark" },
    { name: "Parques", icon: "🌳", filter: { cat: "ver", sub: "Parque" }, cover: "vondelpark" },
    { name: "Miradores", icon: "🌇", filter: { q: "mirador" }, cover: "a-dam-lookout" },
    { name: "Historia y Segunda Guerra", icon: "📜", filter: { q: "historia" }, cover: "casa-de-ana-frank" },
    { name: "Cocina holandesa", icon: "🧀", filter: { q: "comida holandesa" }, cover: "moeders" },
    { name: "Rijsttafel indonesia", icon: "🍛", filter: { cat: "comer", sub: "Indonesia" }, cover: "restaurant-blauw" },
    { name: "Dulces y cafés", icon: "🥞", filter: { q: "dulce" }, cover: "winkel-43" },
    { name: "Cafés marrones", icon: "🍺", filter: { cat: "noche", sub: "Café marrón" }, cover: "cafe-t-smalle" },
    { name: "Cerveza y jenever", icon: "🍻", filter: { q: "cerveza" }, cover: "brouwerij-t-ij" },
    { name: "Música en vivo y jazz", icon: "🎷", filter: { q: "música en vivo" }, cover: "paradiso" },
    { name: "Mercados", icon: "🧺", filter: { q: "mercado" }, cover: "mercado-albert-cuyp" },
    { name: "Joyas menos conocidas", icon: "💎", filter: { q: "joya oculta" }, cover: "begijnhof" },
    { name: "Con chicos", icon: "🧒", filter: { q: "chicos" }, cover: "nemo-science-museum" },
    { name: "Días de lluvia", icon: "🌧️", filter: { q: "lluvia" }, cover: "rijksmuseum" },
    { name: "Excursiones de un día", icon: "🚆", filter: { cat: "escapadas" }, cover: "zaanse-schans" }
  ],

  /* Zonas para el armado automático de viajes, en orden de prioridad. */
  zones: [
    { name: "Dam, De Wallen y el centro", barrios: ["Dam y Nieuwe Zijde", "De Wallen", "Nieuwmarkt y Waterlooplein"] },
    { name: "Canales y Jordaan", barrios: ["Canales", "Jordaan", "Rembrandtplein"] },
    { name: "Museumplein y Vondelpark", barrios: ["Museumplein", "Vondelpark y Oud-West", "Leidseplein"] },
    { name: "De Pijp y Oost", barrios: ["De Pijp", "Oost", "Plantage"] },
    { name: "El puerto y Noord", barrios: ["Oosterdok y el puerto", "Amsterdam Noord", "Westerpark"] },
    { name: "Zuid y los estadios", barrios: ["Zuid y Zuidoost"] }
  ],
  zonasDosDias: [["Centro, canales y Jordaan", [0, 1]], ["Museos, Vondelpark y De Pijp", [2, 3]]],
  zonaChicos: 3,

  /* Palabras que la gente escribe → cómo figura en la guía. */
  synonyms: {
    desayuno: "cafe", brunch: "cafe", merienda: "cafe", cafeteria: "cafe", vegano: "vegetariano",
    hotel: "hospedaje", hoteles: "hospedaje", dormir: "hospedaje", alojamiento: "hospedaje", hostal: "hostel",
    ninos: "chicos", nenes: "chicos", familia: "chicos", familias: "chicos", barato: "economico", baratos: "economico", gratuito: "gratis",
    tragos: "cocteles", cocktail: "cocteles", cocktails: "cocteles", boliche: "club", bailar: "club", discoteca: "club",
    excursion: "excursiones", escapada: "excursiones", paseo: "caminar", shopping: "compras", regalos: "regalos",
    lluvia: "lluvia", llueve: "lluvia", techo: "lluvia", vista: "mirador", vistas: "mirador", azotea: "mirador", guia: "tours", guias: "tours", visita: "tours",
    canal: "canales", barco: "barco", crucero: "barco", bicicleta: "bici", bicis: "bici", molinos: "molino", tulipanes: "flores", tulipan: "flores",
    panqueque: "panqueques", pancakes: "panqueques", queso: "queso", quesos: "queso", ginebra: "jenever", cerveceria: "cerveza", ajax: "futbol"
  },

  /* Calendario: fechas habituales, a confirmar cada año. m = meses (1-12). */
  events: [
    { m: [3, 4, 5], when: "Marzo a mayo", icon: "🌷", name: "Temporada de tulipanes", desc: "Los campos de flores se llenan de colores y abre el Keukenhof, unas ocho semanas." },
    { m: [4], when: "27 de abril", icon: "👑", name: "Día del Rey (Koningsdag)", desc: "La gran fiesta naranja: toda la ciudad sale a la calle, hay mercado libre, barcos llenos en los canales y música en todos lados." },
    { m: [5], when: "4 y 5 de mayo", icon: "🕊️", name: "Día de los Muertos y de la Liberación", desc: "El 4 a la noche se hacen dos minutos de silencio en la plaza Dam; el 5 se festeja el fin de la ocupación con festivales." },
    { m: [6], when: "Junio", icon: "🎭", name: "Holland Festival", desc: "El gran festival de teatro, música y danza de la ciudad." },
    { m: [7, 8], when: "Fines de julio o principios de agosto", icon: "🏳️‍🌈", name: "Pride Amsterdam", desc: "El Orgullo, con el desfile único de barcos por los canales." },
    { m: [8], when: "Agosto", icon: "🎻", name: "Grachtenfestival", desc: "Conciertos de música clásica en los canales, en casas y en barcos." },
    { m: [8], when: "Agosto", icon: "🎪", name: "Uitmarkt", desc: "El comienzo de la temporada cultural, con muestras gratis de teatro, música y danza." },
    { m: [8], when: "Agosto (cada cinco años)", icon: "⛵", name: "SAIL Amsterdam", desc: "Grandes veleros de todo el mundo llegan al puerto. La edición de 2025 fue la última; la próxima, en 2030." },
    { m: [10], when: "Octubre", icon: "🏃", name: "Maratón de Ámsterdam", desc: "Termina en el Estadio Olímpico; ese domingo hay cortes de tránsito." },
    { m: [10], when: "Octubre", icon: "🎧", name: "Amsterdam Dance Event", desc: "Cinco días de música electrónica en clubes y salas de toda la ciudad." },
    { m: [11], when: "Mediados de noviembre", icon: "⛵", name: "Llegada de Sinterklaas", desc: "San Nicolás llega en barco y recorre la ciudad con un desfile para los chicos." },
    { m: [11, 12, 1], when: "Fines de noviembre a enero", icon: "💡", name: "Festival de luces", desc: "Obras de arte con luces en los canales del centro." },
    { m: [12], when: "5 de diciembre", icon: "🎁", name: "Sinterklaasavond", desc: "La noche de los regalos holandesa, con chocolate en forma de letras y galletitas pepernoten." },
    { m: [12], when: "Diciembre", icon: "⛸️", name: "Pistas de patinaje", desc: "Pistas de hielo al aire libre en el Museumplein y otros lugares." },
    { m: [12], when: "31 de diciembre", icon: "🎆", name: "Fin de año", desc: "Fuegos artificiales en toda la ciudad y oliebollen, unas bolas fritas con azúcar." }
  ],

  /* Bloques extra para Info práctica. */
  practicalMore: [
    { icon: "🗣️", title: "Palabras en neerlandés que vas a ver", items: [
      { t: "Ingang · Uitgang", d: "Entrada y salida: en el metro, en los museos y en los negocios." },
      { t: "Open · Gesloten", d: "Abierto y cerrado." },
      { t: "Straat · Gracht · Plein", d: "Calle, canal y plaza: los vas a ver en todas las direcciones." },
      { t: "Fietspad", d: "Bicisenda: no camines por ahí." },
      { t: "Inchecken · Uitchecken", d: "Marcar al subir y al bajar del transporte." },
      { t: "Alleen pin · Geen contant geld", d: "Solo tarjeta, no se acepta efectivo." },
      { t: "Apotheek", d: "Farmacia." },
      { t: "Staking", d: "Paro (huelga): si lo ves en el transporte, revisá cómo moverte ese día." }
    ] },
    { icon: "🌿", title: "Coffeeshops: lo que tenés que saber", items: [
      { t: "Qué son", d: "Locales donde se vende cannabis legalmente, solo a mayores de 18 con documento. No venden alcohol." },
      { t: "En la calle", d: "En el Barrio Rojo está prohibido fumar porro en la calle, y en muchas zonas del centro también: hay multas." },
      { t: "Cuidado", d: "Lo que se vende es más fuerte de lo que muchos esperan. No mezcles con alcohol y no compres nada en la calle." },
      { t: "No se lleva", d: "Sacar cannabis del país es delito, también hacia países donde es legal." }
    ] },
    { icon: "🏥", title: "Salud y farmacias", items: [
      { t: "Urgencias", d: "Llamá al 112. Los hospitales grandes tienen guardia las 24 horas (SEH)." },
      { t: "Médico de guardia", d: "Para algo que no puede esperar pero no es una emergencia, a la noche o el fin de semana, llamá al 088 003 0600 antes de ir." },
      { t: "Farmacias", d: "Se llaman \"apotheek\". Para remedios simples también están las droguerías (\"drogist\"), como Etos o Kruidvat." },
      { t: "Seguro de viaje", d: "Muy recomendable: sin cobertura, la atención puede salir cara." }
    ] },
    { icon: "🔍", title: "Cómo elegimos los lugares", items: [
      { t: "Selección", d: "La guía incluye solo lugares con reputación sostenida: distinciones oficiales, guías reconocidas y buen consenso en reseñas públicas." },
      { t: "Niveles", d: "'Destacado' son los mejores de su categoría, 'Muy recomendado' es una apuesta segura y 'Buena opción' cumple bien pero no es imprescindible." },
      { t: "Opiniones al día", d: "En cada ficha, el botón 'Opiniones, horarios y fotos' abre el lugar en Google Maps con su puntaje, reseñas, horarios actualizados y fotos." },
      { t: "Precios", d: "Usamos niveles ($ a $$$$) en vez de montos porque los precios cambian seguido." }
    ] }
  ],

  /* Fotos: de Wikimedia Commons con licencia libre (ver docs/fuentes-amsterdam.md). */
  photos: {
    "rijksmuseum": "1/1b/Rijksmuseum_in_Amsterdam.jpg",
    "museo-van-gogh": "3/34/Van_Gogh_Museum.jpg",
    "casa-de-ana-frank": "5/59/Amsterdam_(Paises_Bajos)_(15316045410).jpg",
    "stedelijk-museum": "6/61/De_nieuwe_vleugel_van_het_Stedelijk_Museum_Amsterdam.jpg",
    "plaza-dam": "9/9f/Amsterdam_-_Dak_van_de_Stad_(14).jpg",
    "palacio-real-koninklijk-paleis": "5/5c/Palacio_Real,_Ámsterdam,_Países_Bajos,_2016-05-30,_DD_07-09_HDR.jpg",
    "los-canales-grachtengordel": "1/10/Amsterdam_Aerial.jpg",
    "volendam": "8/8d/Nederland_volendam.JPG",
    "haarlem": "1/19/HaarlemGroteMarkt1.JPG",
    "utrecht": "c/c1/Neude_met_Domtoren.JPG",
    "delft": "9/9b/00_0781_Canal_in_Delft_(NL).jpg",
    "roterdam": "9/99/Rotterdam1.JPG",
    "la-haya-den-haag": "6/6d/The_Hague_Montage_2021.png",
    "giethoorn": "a/a6/Giethoorn_Netherlands_flckr03.jpg",
    "johan-cruijff-arena": "d/d1/Arena,_Ajax_stadion,_Amsterdam.JPG",
    "moco-museum": "6/68/Moco_Museum_(42513993102).jpg",
    "nemo-science-museum": "3/36/NEMO_science_museum_01.jpg",
    "foam": "b/be/Amsterdam_-_FOAM_-_tentoonstelling_Augusta_Curiel_Yere_Mi_Sten_20250706.jpg",
    "h-art-museum": "f/f4/H'ART_Museum_letters_in_the_Amstelhof_garden,_Amsterdam,_October_2026.jpg",
    "eye-filmmuseum": "6/64/The_Eye_filmmuseum,_Amsterdam_in_the_Netherlands,_by_night.jpg",
    "micropia": "b/b9/Micropia_Museum_Amsterdam_5.jpg",
    "huis-marseille": "7/7a/Huis_Marseille,_Museum_voor_Fotografie_–_Grachtenzijde_gevels.jpg",
    "nieuwe-kerk": "6/60/De_Nieuwe_Kerk_(28834025868).jpg",
    "oude-kerk": "9/90/Amsterdam_Oude_Kerk_Nef_-_panoramio.jpg",
    "westerkerk": "c/cc/Westerkerk_-_panoramio_-_Rokus_C_(1).jpg",
    "begijnhof": "0/04/Amsterdam_-_Begijnhof_-_View_NNE_II.jpg",
    "magere-brug": "f/fe/The_Netherlands,_Amsterdam,_Amstel_-_Magere_Brug_-_panoramio.jpg",
    "brouwersgracht": "4/46/Amsterdam,_Brouwersgracht_met_woonboten_–_Holland_NL_(26233412451).jpg",
    "de-wallen-barrio-rojo": "8/8c/De_Wallen_-_2.jpg",
    "nieuwmarkt-y-de-waag": "1/17/Amsterdam_-_Nieuwmarkt_-_Waag_(Weigh_house)_-_panoramio.jpg",
    "hortus-botanicus": "4/45/Hortus_Botanicus_Amsterdam._(actm.)_07.jpg",
    "ndsm": "2/22/Lara_Schnitger_Wish_Me_Well_NDSM.jpg",
    "a-dam-lookout": "1/17/A'DAM_Lookout_tower_203841.jpg",
    "oostelijk-havengebied-docklands-del-este": "a/a8/2023_Amsterdam,_Oostelijk_Havengebied,_IJhaven_(17).jpg",
    "vondelpark": "e/e9/Beauty_of_Vondelpark_(21726984785).jpg",
    "oosterpark": "3/34/Oosterpark_-_panoramio_(2).jpg",
    "sarphatipark": "5/56/Sarphatipark_-_panoramio.jpg",
    "artis-zoologico": "0/04/Gallicolumba_crinigera_-Artis_Zoo,_Netherlands-8.jpg",
    "pancakes-amsterdam": "a/a4/Pancakes_Amsterdam,_Amsterdam_(2021).jpg",
    "cafe-papeneiland": "3/3a/Homemade_apple_pie_with_whipped_cream_-_Cafe't_Papeneiland_2024-11-27.jpg",
    "foodhallen": "b/bf/Foodhallen_in_Oud-West_(Amsterdam,_The_Netherlands_2017)_(34335242516).jpg",
    "lanskroon": "9/91/Light_meal_in_Lanskroon_2024-12-04.jpg",
    "rijks": "9/91/Restaurant_Rijks_09.jpg",
    "cafe-de-jaren": "f/f7/Amsterdam_-_Cafe_De_Jaren.jpg",
    "hannekes-boom": "a/a0/Hannekes_Boom.jpg",
    "brouwerij-t-ij": "d/da/Brouwerij_'t_IJ.jpeg",
    "bimhuis": "a/af/Bimhuis_by_day.JPG",
    "cafe-de-sluyswacht": "6/6b/The_Netherlands,_Amsterdam,_Jodenbreestraat_1_-_Café_De_Sluyswacht_-_panoramio.jpg",
    "heineken-experience": "5/5b/Heineken_experience,_Amsterdam_(Explored_2016-04-28)_-_Flickr_-_Maria_Eklind.jpg",
    "marken": "d/d8/Marken_De_Duikjes_9-10_seen_from_the_southeast.jpg",
    "edam": "9/98/Broekgouwstraat,_Edam.jpg",
    "kinderdijk": "f/f5/Kinderdijk_(79801471).jpeg",
    "muiderslot": "5/59/Muiden,_Muiderslot._09-05-2022._(actm.)_01.jpg",
    "zandvoort": "e/ea/Rotonde_centrum_van_Zandvoort_P1140499.jpg",
    "hotel-de-l-europe": "f/f9/2018_De_L'Europe_Amsterdam.jpg",
    "ambassade-hotel": "a/a3/Hotel_Ambassade,_Herengracht_341,_Amsterdam_-_panoramio.jpg",
    "hotel-estherea": "b/b9/WLM_-_Minke_Wagenaar_-_Estherea_Hotel_013.jpg",
    "lloyd-hotel": "4/44/Amsterdam_-_Lloyd_Hotel_(29669084804).jpg",
    "sir-adam": "7/70/IJpromenade_dakterras_Sir_Adam_hotel.jpg",
    "kalverstraat": "d/d7/Van_Wonderen_Stroopwafels,_Kalverstraat_190,_Amsterdam_2024-11-27.jpg",
    "p-c-hooftstraat": "4/4c/P.C.Hooftstraat.jpg",
    "de-bijenkorf": "f/f1/De_Bijenkorf_Dam_Amsterdam_-_panoramio.jpg",
    "magna-plaza": "c/c4/Magna_Plaza_,Interior_view_-_panoramio.jpg",
    "haarlemmerstraat": "a/a6/Haarlemmerstraat,_Haarlemmerbuurt,_Amsterdam,_Noord-Holland,_Nederland_(48719789563).jpg",
    "zuiderbad": "f/f5/Zuiderbad-zwembad-amsterdam-1363172856.jpg",
    "concertgebouw": "5/56/Amsterdam_Concertgebouw_Fox_Kids_Tram_753_(15674684755).jpg",
    "pathe-tuschinski": "f/f3/Das_Pathè_Tuschinski_ist_ein_traditionsreiches_Kino_in_Amsterdam_-_panoramio.jpg",
    "ziggo-dome": "e/ed/Depeche_Mode_at_Ziggo_Dome_2023_(52916921508).jpg",
    "this-is-holland": "6/64/This_Is_Holland_05.jpg",
    "vondelpark-openluchttheater": "c/c3/Vondelpark_Openluchttheater_tijden_concert.jpg",
    "muziekgebouw-aan-t-ij": "3/3f/Muziekgebouw_aan_'t_IJ_-_panoramio.jpg",
    "westerpark": "8/8a/Steel_drawbridge_at_the_entrance_of_Westerpark,_Amsterdam.jpg",
    "cafe-hoppe": "8/88/Spui_nr._18_en_20.jpg",
    "wynand-fockink": "f/f0/Wynand_Focking_Amsterdam_2014_(1).jpeg",
    "melkweg": "a/ad/Starset_-_Immersion_The_Final_Chapter_-_Melkweg_001.jpg",
    "stayokay-amsterdam-vondelpark": "4/4c/Stayokay_Vondelpark.jpg",
    "amsterdamse-bos": "8/84/De_Geitenboerderij_-_panoramio_(2).jpg",
    "madame-tussauds-amsterdam": "1/12/Amsterdam_10.04.2012_-_panoramio_(2).jpg",
    "the-amsterdam-dungeon": "6/6f/Amsterdam_(15564459714).jpg",
  },

  /* Estaciones de metro, para "la estación más cercana" en cada ficha. */
  stations: {
    "50": [["Amstelveenseweg", 52.33848, 4.85757], ["Bijlmer ArenA", 52.31181, 4.94762], ["Bullewijk", 52.30687, 4.95213], ["De Vlugtlaan", 52.37945, 4.83823], ["Duivendrecht", 52.32360, 4.93656], ["Gein", 52.29641, 4.98916], ["Heemstedestraat", 52.35233, 4.83440], ["Henk Sneevlietweg", 52.34639, 4.83457], ["Holendrecht", 52.29813, 4.96013], ["Isolatorweg", 52.39510, 4.85060], ["Jan van Galenstraat", 52.37258, 4.83536], ["Lelylaan", 52.35806, 4.83447], ["Overamstel", 52.33177, 4.91761], ["Postjesweg", 52.36460, 4.83404], ["Reigersbos", 52.29564, 4.97400], ["Station RAI", 52.33769, 4.88954], ["Station Sloterdijk", 52.38904, 4.83898], ["Strandvliet", 52.31861, 4.94140], ["Van der Madeweg", 52.32978, 4.93045], ["Zuid", 52.33924, 4.87172]],
    "51": [["Amstelstation", 52.34664, 4.91741], ["Amstelveenseweg", 52.33848, 4.85757], ["Centraal Station", 52.37735, 4.90087], ["De Vlugtlaan", 52.37945, 4.83823], ["Heemstedestraat", 52.35233, 4.83440], ["Henk Sneevlietweg", 52.34639, 4.83457], ["Isolatorweg", 52.39510, 4.85060], ["Jan van Galenstraat", 52.37258, 4.83536], ["Lelylaan", 52.35806, 4.83447], ["Nieuwmarkt", 52.37142, 4.90094], ["Overamstel", 52.33169, 4.91767], ["Postjesweg", 52.36460, 4.83404], ["Spaklerweg", 52.34023, 4.92080], ["Station RAI", 52.33769, 4.88954], ["Station Sloterdijk", 52.38904, 4.83898], ["Waterlooplein", 52.36663, 4.90361], ["Weesperplein", 52.36130, 4.90785], ["Wibautstraat", 52.35456, 4.91190], ["Zuid", 52.33924, 4.87172]],
    "52": [["Centraal Station", 52.37921, 4.90088], ["De Pijp", 52.35396, 4.89065], ["Europaplein", 52.34118, 4.89156], ["Noord", 52.40216, 4.93240], ["Noorderpark", 52.38869, 4.91812], ["Rokin", 52.37054, 4.89256], ["Vijzelgracht", 52.36069, 4.89105], ["Zuid", 52.33910, 4.87173]],
    "53": [["Amstelstation", 52.34664, 4.91741], ["Centraal Station", 52.37735, 4.90087], ["Gaasperplas", 52.31116, 4.98434], ["Ganzenhoef", 52.32372, 4.97285], ["Kraaiennest", 52.31698, 4.97901], ["Nieuwmarkt", 52.37142, 4.90094], ["Spaklerweg", 52.34019, 4.92061], ["Station Diemen Zuid", 52.33031, 4.95677], ["Van der Madeweg", 52.32972, 4.93024], ["Venserpolder", 52.32672, 4.94641], ["Verrijn Stuartweg", 52.32829, 4.96721], ["Waterlooplein", 52.36663, 4.90361], ["Weesperplein", 52.36130, 4.90785], ["Wibautstraat", 52.35456, 4.91190]],
    "54": [["Amstelstation", 52.34664, 4.91741], ["Bijlmer ArenA", 52.31173, 4.94740], ["Bullewijk", 52.30679, 4.95200], ["Centraal Station", 52.37735, 4.90087], ["Duivendrecht", 52.32356, 4.93646], ["Gein", 52.29627, 4.98930], ["Holendrecht", 52.29809, 4.95996], ["Nieuwmarkt", 52.37142, 4.90094], ["Reigersbos", 52.29560, 4.97438], ["Spaklerweg", 52.34019, 4.92061], ["Strandvliet", 52.31836, 4.94142], ["Van der Madeweg", 52.32965, 4.93007], ["Waterlooplein", 52.36663, 4.90361], ["Weesperplein", 52.36130, 4.90785], ["Wibautstraat", 52.35456, 4.91190]]
  }
};
