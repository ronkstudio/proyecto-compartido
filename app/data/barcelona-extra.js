/* Datos complementarios de Barcelona (tarjetas #193 y #195): sellos del pasaporte, niveles de recomendación, dietas, días de cierre,
   colecciones, zonas para armar viajes, calendario, fotos y estaciones.
   Las claves son los ids de los lugares (nombre en minúsculas, sin acentos, con guiones). */
window.CITY_EXTRA = window.CITY_EXTRA || {};
window.CITY_EXTRA.barcelona = {
  tz: "Europe/Madrid",

  /* Pasaporte barcelonés: sellos que se ganan marcando "Ya fui" en los lugares. Mismo formato que data/caba-extra.js. */
  stamps: [
    { id: "primer-paso", icon: "👣", name: "Primer paso", desc: "Visitá tu primer lugar", n: 1 },
    { id: "imperdibles", icon: "🏛️", name: "Lo esencial", desc: "5 imperdibles destacados", n: 5, cat: "ver", q: 3 },
    { id: "gaudi", icon: "🦎", name: "Ruta Gaudí", desc: "3 obras de Gaudí", n: 3, sub: "Gaudí" },
    { id: "modernismo", icon: "🌹", name: "Modernista", desc: "2 joyas del modernismo", n: 2, sub: "Modernismo" },
    { id: "museos", icon: "🎨", name: "De museo en museo", desc: "3 museos", n: 3, sub: "Museo" },
    { id: "tapas", icon: "🍤", name: "De tapas", desc: "3 bares de tapas", n: 3, sub: "Tapas" },
    { id: "playa", icon: "🏖️", name: "Pies en la arena", desc: "Una playa", n: 1, sub: "Playa" },
    { id: "vermut", icon: "🍷", name: "La hora del vermut", desc: "Una vermutería", n: 1, sub: "Vermut" },
    { id: "noche", icon: "🍸", name: "Trasnochador", desc: "2 salidas de noche", n: 2, cat: "noche" },
    { id: "escapada", icon: "🚆", name: "Escapada", desc: "Una excursión fuera de la ciudad", n: 1, cat: "escapadas" },
    { id: "curioso", icon: "💎", name: "Fuera del circuito", desc: "Una joya oculta o un lugar de barrio", n: 1, tag: ["joya oculta", "vida de barrio"] },
    { id: "barrios", icon: "🏘️", name: "Explorador de barrios", desc: "Lugares en 5 barrios distintos", n: 5, barrios: true },
    { id: "honorario", icon: "🐉", name: "Barcelonés honorario", desc: "20 lugares visitados", n: 20 }
  ],

  /* Nivel de recomendación: 3 = Destacado, 2 = Muy recomendado, 1 = Buena opción.
     Los marcados como destacados en data/barcelona-lugares.js ya son 3; el resto es 2 salvo lo que se lista acá. */
  quality: {
    3: ["casa-vicens", "palau-guell", "fundacio-joan-miro", "monasterio-de-pedralbes", "basilica-de-santa-maria-del-pi", "placa-de-sant-felip-neri",
      "el-xampanyet", "quimet-quimet", "la-cova-fumada", "cal-pep", "bar-canete", "granja-m-viader", "paradiso", "sips", "disfrutar", "hotel-casa-fuster"],
    1: ["barcelona-bus-turistic", "museu-egipci-de-barcelona", "moco-museum-barcelona", "maremagnum", "la-roca-village", "el-nacional",
      "kabul-party-hostel", "opium-barcelona", "pacha-barcelona", "tablao-flamenco-cordobes", "clase-de-cocina-catalana", "portaventura-world"]
  },
  awards: {},

  /* Dietas. Solo con fuente: OpenStreetMap ("diet:vegan=only" o "diet:gluten_free=only", 18/11/2026) y la web de cada local, que lo dice
     (revisadas el 18/11/2026, tarjeta #198). Detalle en docs/fuentes-barcelona.md. */
  diet: {
    "umami-plant-based": ["vegano", "vegetariano"], "potstot": ["vegano", "vegetariano", "sin TACC"], "mundo-vegan": ["vegano", "vegetariano"], "veganashi": ["vegano", "vegetariano"],
    "messie-pizza-sin-gluten": ["sin TACC"], "aruku-sin-gluten": ["sin TACC"], "gluten-tag": ["sin TACC"]
  },
  dietFull: ["umami-plant-based", "potstot", "mundo-vegan", "veganashi", "messie-pizza-sin-gluten", "aruku-sin-gluten", "gluten-tag"],

  /* Días que abren o cierran (0 = domingo … 6 = sábado). Solo los días fijos y conocidos; pueden cambiar en feriados. */
  only: {
    "els-encants": [1, 3, 5, 6]
  },
  closed: {
    "museo-picasso": [1], "fundacio-joan-miro": [1], "palau-guell": [1], "museu-d-historia-de-barcelona-muhba": [1], "fundacio-antoni-tapies": [1],
    "museu-frederic-mares": [1], "monasterio-de-pedralbes": [1], "museu-del-disseny": [1], "museu-d-historia-de-catalunya": [1],
    "mercado-de-la-boqueria": [0], "mercado-de-santa-caterina": [0], "mercat-de-la-llibertat": [0], "mercat-de-la-concepcio": [0]
  },

  /* Lista de preparación del viaje (se tilda y queda guardada en el dispositivo). */
  checklist: [
    { title: "Antes de viajar", items: [
      "Pasaporte o documento vigente, y una copia en el celular",
      "Seguro de viaje con cobertura médica",
      "Adaptador de enchufe tipo C o F (230 V)",
      "Avisar al banco que vas a usar la tarjeta en el exterior",
      "Reservar la Sagrada Família, el Park Güell y las casas de Gaudí con día y horario",
      "Descargar esta guía y los mapas de Google sin conexión"
    ] },
    { title: "Al llegar", items: [
      "Tomar el Aerobús o el tren desde el aeropuerto",
      "Comprar la T-casual o la tarjeta Hola Barcelona",
      "Comprar un chip prepago o activar la eSIM",
      "Llevar la mochila adelante en el metro y en La Rambla"
    ] }
  ],

  /* Colecciones del inicio: cada una es un filtro de Explorar. */
  collections: [
    { name: "Gaudí", icon: "🦎", filter: { cat: "ver", sub: "Gaudí" }, cover: "sagrada-familia" },
    { name: "Modernismo", icon: "🌹", filter: { cat: "ver", sub: "Modernismo" }, cover: "palau-de-la-musica-catalana" },
    { name: "Clásicos de Barcelona", icon: "🏛️", filter: { q: "clásico" }, cover: "casa-batllo" },
    { name: "Museos", icon: "🎨", filter: { cat: "ver", sub: "Museo" }, cover: "museu-nacional-d-art-de-catalunya-mnac" },
    { name: "Barcelona gratis", icon: "💸", filter: { prices: [0] }, cover: "parc-de-la-ciutadella" },
    { name: "Miradores", icon: "🌇", filter: { q: "mirador" }, cover: "bunkers-del-carmel" },
    { name: "Playas", icon: "🏖️", filter: { cat: "ver", sub: "Playa" }, cover: "playa-de-la-barceloneta" },
    { name: "El Gòtic medieval", icon: "🏰", filter: { q: "gótico" }, cover: "catedral-de-barcelona" },
    { name: "De tapas", icon: "🍤", filter: { cat: "comer", sub: "Tapas" }, cover: "el-xampanyet" },
    { name: "Cocina catalana y arroces", icon: "🥘", filter: { cat: "comer", sub: "Cocina catalana" }, cover: "7-portes" },
    { name: "Mercados para comer", icon: "🧺", filter: { cat: "comer", sub: "Mercado gastronómico" }, cover: "mercado-de-la-boqueria" },
    { name: "La hora del vermut", icon: "🍷", filter: { q: "vermut" }, cover: "quimet-quimet" },
    { name: "Cócteles", icon: "🍸", filter: { cat: "noche", sub: "Bar de cócteles" }, cover: "paradiso" },
    { name: "Joyas menos conocidas", icon: "💎", filter: { q: "joya oculta" }, cover: "placa-de-sant-felip-neri" },
    { name: "Con chicos", icon: "🧒", filter: { q: "chicos" }, cover: "aquarium-barcelona" },
    { name: "Días de lluvia", icon: "🌧️", filter: { q: "lluvia" }, cover: "museo-picasso" },
    { name: "Fútbol y deportes", icon: "⚽", filter: { cat: "deporte" }, cover: "spotify-camp-nou" },
    { name: "Excursiones de un día", icon: "🚆", filter: { cat: "escapadas" }, cover: "montserrat" }
  ],

  /* Zonas para el armado automático de viajes, en orden de prioridad. */
  zones: [
    { name: "Gòtic, Born y La Rambla", barrios: ["Barri Gòtic", "El Born", "El Raval"] },
    { name: "Sagrada Família y Passeig de Gràcia", barrios: ["Sagrada Família", "Eixample"] },
    { name: "Park Güell y Gràcia", barrios: ["Park Güell y El Carmel", "Gràcia"] },
    { name: "Barceloneta y el mar", barrios: ["La Barceloneta", "Port Vell", "Poblenou"] },
    { name: "Montjuïc y Poble-sec", barrios: ["Montjuïc", "Poble-sec", "Sant Antoni", "Sants"] },
    { name: "Camp Nou y la parte alta", barrios: ["Les Corts y Pedralbes", "Sarrià y Tibidabo"] }
  ],
  zonasDosDias: [["Gòtic, Born y la playa", [0, 3]], ["Gaudí: Sagrada Família, Passeig de Gràcia y Park Güell", [1, 2]]],
  zonaChicos: 3,

  /* Palabras que la gente escribe → cómo figura en la guía. */
  synonyms: {
    desayuno: "cafe", brunch: "cafe", merienda: "cafe", cafeteria: "cafe", vegano: "vegetariano",
    hotel: "hospedaje", hoteles: "hospedaje", dormir: "hospedaje", alojamiento: "hospedaje", hostal: "hostel",
    ninos: "chicos", nenes: "chicos", familia: "chicos", familias: "chicos", barato: "economico", baratos: "economico", gratuito: "gratis",
    tragos: "cocteles", cocktail: "cocteles", cocktails: "cocteles", boliche: "club", bailar: "club", discoteca: "club",
    excursion: "excursiones", escapada: "excursiones", paseo: "caminar", shopping: "compras", regalos: "regalos",
    lluvia: "lluvia", llueve: "lluvia", techo: "lluvia", vista: "mirador", vistas: "mirador", azotea: "mirador", guia: "tours", guias: "tours", visita: "tours",
    tapeo: "tapas", tapear: "tapas", pintxos: "tapas", pinchos: "tapas", cana: "cerveza", canas: "cerveza", tablao: "flamenco",
    futbol: "futbol", barca: "futbol", espanyol: "futbol", gaudi: "gaudi", modernista: "modernismo", playas: "playa", mar: "playa",
    paella: "arroz", arroces: "arroz", gotico: "gotico", picasso: "museo", miro: "museo", vino: "vinos", cava: "cava"
  },

  /* Calendario: fechas habituales, a confirmar cada año. m = meses (1-12). */
  events: [
    { m: [1], when: "5 de enero", icon: "👑", name: "Cabalgata de Reyes", desc: "Los Reyes Magos llegan en barco al puerto y recorren la ciudad con carrozas y caramelos para los chicos." },
    { m: [1, 2, 3], when: "Enero a marzo", icon: "🧅", name: "Temporada de calçots", desc: "Las calçotadas: cebollas tiernas a la brasa con salsa romesco, que se comen con babero en restaurantes y casas de campo." },
    { m: [2], when: "Mediados de febrero", icon: "👸", name: "Fiestas de Santa Eulàlia", desc: "La fiesta de invierno de la ciudad, con gigantes, castellers y museos gratis." },
    { m: [3], when: "Marzo", icon: "🏃", name: "Maratón de Barcelona", desc: "Recorre el centro y la Sagrada Família; ese domingo hay muchos cortes de tránsito." },
    { m: [3, 4], when: "Semana Santa", icon: "✝️", name: "Semana Santa", desc: "El Domingo de Ramos se bendicen las palmas en la Sagrada Família y la catedral, y en las pastelerías aparecen las \"mones\" de chocolate." },
    { m: [4], when: "23 de abril", icon: "🌹", name: "Sant Jordi", desc: "El día más lindo del año: la ciudad se llena de puestos de libros y rosas, y se regalan entre todos." },
    { m: [5, 6], when: "Fines de mayo o principios de junio", icon: "🎸", name: "Primavera Sound", desc: "Uno de los festivales de música más grandes de Europa, en el Parc del Fòrum." },
    { m: [6], when: "Junio", icon: "🎧", name: "Sónar", desc: "El festival de música electrónica y arte digital, de día y de noche." },
    { m: [6], when: "23 de junio", icon: "🎆", name: "Verbena de Sant Joan", desc: "La noche más corta: fuegos artificiales, petardos en las calles, coca de Sant Joan y fiesta en la playa hasta el amanecer." },
    { m: [6, 7], when: "Fines de junio o principios de julio", icon: "🏳️‍🌈", name: "Pride Barcelona", desc: "El Orgullo, con fiestas y un gran desfile." },
    { m: [6, 7], when: "Junio y julio", icon: "🎭", name: "Festival Grec", desc: "El festival de verano de teatro, danza y música, con funciones en el Teatre Grec de Montjuïc." },
    { m: [8], when: "Mediados de agosto", icon: "🎉", name: "Festa Major de Gràcia", desc: "Los vecinos decoran sus calles con temas distintos y compiten: hay música, comida y fiesta durante una semana." },
    { m: [9], when: "11 de septiembre", icon: "🎗️", name: "Diada de Cataluña", desc: "La fiesta nacional de Cataluña, con banderas en los balcones y grandes marchas." },
    { m: [9], when: "Alrededor del 24 de septiembre", icon: "🏰", name: "La Mercè", desc: "La gran fiesta de la ciudad: castellers en la plaza de Sant Jaume, correfocs con diablos y fuego, conciertos gratis y fuegos artificiales en la playa." },
    { m: [10, 11, 12], when: "Octubre a diciembre", icon: "🎷", name: "Festival de Jazz de Barcelona", desc: "Conciertos de jazz en salas de toda la ciudad." },
    { m: [12], when: "Diciembre", icon: "🎄", name: "Feria de Santa Llúcia", desc: "El mercado de Navidad frente a la catedral, con pesebres, árboles y el \"caga tió\", el tronco que les trae regalos a los chicos." },
    { m: [12], when: "31 de diciembre", icon: "🍇", name: "Fin de año", desc: "Se comen las doce uvas con las campanadas y hay fiesta y fuegos artificiales frente al MNAC, en Montjuïc." }
  ],

  /* Bloques extra para Info práctica. */
  practicalMore: [
    { icon: "🗣️", title: "Palabras en catalán que vas a ver", items: [
      { t: "Sortida · Entrada", d: "Salida y entrada: en el metro, en los museos y en los negocios." },
      { t: "Obert · Tancat", d: "Abierto y cerrado." },
      { t: "Carrer · Plaça · Platja", d: "Calle, plaza y playa: los vas a ver en todas las direcciones." },
      { t: "Bon dia · Bona tarda · Bona nit", d: "Buen día, buenas tardes y buenas noches." },
      { t: "Gràcies · Si us plau · Adéu", d: "Gracias, por favor y chau." },
      { t: "Dilluns · Dissabte · Diumenge", d: "Lunes, sábado y domingo: útil para leer los horarios." },
      { t: "Lavabos", d: "El baño, en bares y lugares públicos." },
      { t: "Vaga", d: "Paro (huelga): si lo ves en el transporte, revisá cómo moverte ese día." }
    ] },
    { icon: "🗣️", title: "Palabras de España que conviene conocer", items: [
      { t: "Coger", d: "Tomar o agarrar: coger el metro, coger un taxi. En España es una palabra normal." },
      { t: "Vale", d: "Está bien, de acuerdo. Lo vas a escuchar todo el tiempo." },
      { t: "Móvil · Coche · Billete", d: "Celular, auto y boleto (de metro, de tren o de avión)." },
      { t: "Aseos · Servicios", d: "El baño, en bares y lugares públicos." },
      { t: "Caña", d: "Un vaso chico de cerveza tirada." },
      { t: "Ración · Media ración", d: "Un plato para compartir, o la mitad." },
      { t: "Zumo · Patata · Melocotón", d: "Jugo, papa y durazno." },
      { t: "Huelga", d: "Paro: si lo ves en el transporte, revisá cómo moverte ese día." }
    ] },
    { icon: "🏥", title: "Salud y farmacias", items: [
      { t: "Urgencias", d: "Llamá al 112. Los hospitales públicos grandes tienen urgencias las 24 horas." },
      { t: "Farmacias", d: "Tienen una cruz verde. De noche y los domingos hay farmacias de guardia: el cartel está en la puerta de cualquier farmacia." },
      { t: "Seguro de viaje", d: "Muy recomendable: sin cobertura, la atención puede salir cara." }
    ] },
    { icon: "🔍", title: "Cómo elegimos los lugares", items: [
      { t: "Selección", d: "La guía incluye solo lugares con reputación sostenida: distinciones oficiales, guías reconocidas y buen consenso en reseñas públicas." },
      { t: "Niveles", d: "'Destacado' son los mejores de su categoría, 'Muy recomendado' es una apuesta segura y 'Buena opción' cumple bien pero no es imprescindible." },
      { t: "Opiniones al día", d: "En cada ficha, el botón 'Opiniones, horarios y fotos' abre el lugar en Google Maps con su puntaje, reseñas, horarios actualizados y fotos." },
      { t: "Precios", d: "Usamos niveles ($ a $$$$) en vez de montos porque los precios cambian seguido." }
    ] }
  ],

  /* Fotos (tarjeta #195): foto principal de cada lugar en Wikidata, de Wikimedia Commons con licencia libre,
     aceptada solo si el elemento de Wikidata está a menos de 1,5 km del lugar (15 km las excursiones). Revisadas el 18/11/2026; se sacaron 8 que mostraban otra cosa o no estaban claras. */
  photos: {
    "casa-de-les-punxes": "8/86/137_Casa_de_les_Punxes,_av._Diagonal_-_c._Rosselló.jpg",
    "museu-nacional-d-art-de-catalunya-mnac": "f/f9/WLM14ES_-_Palau_Nacional_i_seu_del_MNAC_de_Barcelona_-_MARIA_ROSA_FERRE.jpg",
    "museu-d-historia-de-barcelona-muhba": "5/56/MUHBA-_Façana.350002.JPG",
    "museu-de-la-xocolata": "1/10/737_Antic_convent_de_Sant_Agustí,_pl._Pons_i_Clerch_1-2_(Barcelona),_escala.jpg",
    "la-cova-fumada": "1/14/La_Cova_Fumada.jpg",
    "disfrutar": "2/29/Disfrutar.jpg",
    "razzmatazz": "a/a1/0_-_Sala_Razzmatazz_-_facade.JPG",
    "sala-apolo": "e/ed/082_Sala_Apolo,_c._Nou_de_la_Rambla_109-113_(Barcelona).jpg",
    "hotel-catalonia-portal-de-l-angel": "e/e4/Catalonia_Portal_de_l'Angel.jpg",
    "casa-gispert": "e/ea/Edifici_c._Sombrerers,_23.jpg",
    "palau-blaugrana": "e/ee/050529_Barcelona_132.jpg",
    "teatre-tivoli": "2/20/040_Teatre_Tívoli,_c._Casp_6-20_(Barcelona).jpg",
    "7-portes": "0/00/007_Porxos_d'en_Xifré,_7_Portes.JPG",
    "aquarium-barcelona": "1/1a/Queen_Angelfish_14-05-2009_15-24-48.JPG",
    "avinguda-del-portal-de-l-angel": "f/fb/Portal_de_l'Àngel_-_Barcelona_(Catalunya).jpg",
    "bar-marsella": "6/63/067_Bar_Marsella,_c._Sant_Pau_65_-_c._Sant_Ramon_1_(Barcelona).jpg",
    "barrio-de-gracia": "f/fe/Torre_del_Rellotge_(Barcelona)_-_4.jpg",
    "basilica-de-la-merce": "2/2f/Basílica_de_la_Mercè_-_Barcelona_(Catalonia).jpg",
    "basilica-de-santa-maria-del-mar": "f/f8/Santa_Maria_del_Mar,_Barcelona_05.jpg",
    "bellesguard": "5/5b/Torre_Bellesguard_(4).jpg",
    "besalu": "f/fe/Conjunto_historico-besalu-2011.JPG",
    "boadas": "7/7d/Cockteleria_boadas_barcelona.jpg",
    "cadaques": "7/7a/Cadaques_Pueblo_Marinero.JPG",
    "cafe-de-l-opera": "b/be/Cafè_de_l'Opera_(La_Rambla,_74,_Barcelona)_01.JPG",
    "caixaforum-barcelona": "d/d3/PiC-Casarramona-0294.JPG",
    "can-culleretes": "2/2b/Can_Culleretes,_detall.jpg",
    "can-sole": "c/c3/011_Can_Solé,_c._Sant_Carles_4_-_c._Mar_51-53_(Barcelona).jpg",
    "casa-amatller": "5/54/CasaAmatller.jpg",
    "casa-batllo": "b/bf/Casa_Batllo_Overview_Barcelona_Spain_cut.jpg",
    "casa-gracia": "8/8e/Casa_Gracia_Barcelona_Hostel.jpg",
    "casa-lleo-morera": "a/ae/DiM_Lleo_Morera_9826_copia.jpg",
    "casa-mila-la-pedrera": "d/de/Casa_Milà,_general_view.jpg",
    "casa-vicens": "c/cc/Gaudí_-_Casa_Vicens.JPG",
    "castillo-de-montjuic": "d/de/Κάστρο_Μονζουίκ_3231_-_3233.jpg",
    "catedral-de-barcelona": "6/63/Barcelona_Cathedral_Saint_Eulalia.jpg",
    "cccb": "1/1c/Edifici_CCCB.jpg",
    "cereria-subira": "9/90/Cereria_Subirà,_façana.jpg",
    "cinc-sentits": "8/8d/Cinc_Sentits.jpg",
    "cosmocaixa": "9/9a/CosmoCaixa_building.jpg",
    "el-born-centre-de-cultura-i-memoria": "8/80/El_BornCC_setembre_2013_(2).JPG",
    "el-corte-ingles-placa-de-catalunya": "d/d3/El_Corte_Inglés_Barcelona_Plaça_de_Catalunya_2013.jpg",
    "el-molino": "2/2c/755_El_Molino,_c._Vila_i_Vilà_99_-_pl._Bella_Dorita_(Barcelona).jpg",
    "el-paraigua": "b/b5/Cafeteria_el_Paraigua.jpg",
    "el-xampanyet": "1/1a/053_El_Xampanyet,_c._Montcada_22_(Barcelona).jpg",
    "els-quatre-gats": "3/30/15-10-27-Els_Quatre_Gats-RalfR-WMA_2729.jpg",
    "estadio-olimpico-lluis-companys": "3/3c/BCN-EstadiOlimpic-4860.jpg",
    "filmoteca-de-catalunya": "3/3b/Filmoteca_de_Catalunya-seu_Raval.JPG",
    "fundacio-joan-miro": "9/9d/Fundació_Miró.JPG",
    "fundacion-mapfre-casa-garriga-nogues": "d/da/Casa_Garriga_Nogués,_cantonada.jpg",
    "generator-barcelona": "3/33/Generator_Barcelona.jpg",
    "girona": "c/cd/Girona_des_de_l_aire_edited.jpg",
    "gran-teatre-del-liceu": "f/fb/Théâtre_Liceu_Barcelone_3.jpg",
    "hospital-de-la-santa-creu": "d/d8/WLM14ES_-_Antic_Hospital_de_la_Santa_Creu,_Raval,_Barcelona_-_MARIA_ROSA_FERRE_(1).jpg",
    "hotel-brummell": "3/31/Hotel_Brummell.jpg",
    "hotel-casa-fuster": "d/d6/Casa_Fuster_P1420383.jpg",
    "hotel-espana": "d/d8/Fonda_Espanya_P1370937.jpg",
    "hotel-neri": "3/36/Hotel_Neri_Relais_&_Chateaux.jpg",
    "la-rambla": "f/f2/15-10-27-Vista_des_de_l'estàtua_de_Colom_a_Barcelona-WMA_2791.jpg",
    "lasarte": "c/c5/Lasarte.jpg",
    "macba": "1/17/Barcelona_-_Museu_d'Art_Contemporani_de_Barcelona_(MACBA).jpg",
    "maremagnum": "1/1f/Barcelona_-_Maremagnum_03.JPG",
    "mercado-de-sant-antoni": "0/01/134_Mercat_de_Sant_Antoni_(Barcelona),_façana_del_c._Comte_Borrell.jpg",
    "mercado-de-santa-caterina": "b/b9/Façana_Santa_Caterina.jpg",
    "mercat-de-la-concepcio": "f/fd/Mercat_de_la_Concepció_-_façana_Aragó.jpg",
    "mercat-de-la-llibertat": "7/7a/J23_525e_Mercado_de_la_Libertad.jpg",
    "monasterio-de-pedralbes": "d/dc/Monestir_de_Pedralbes._Aèria.jpg",
    "montserrat": "e/ef/Montserrat_-_100.jpg",
    "monumento-a-colon": "9/97/Monument_a_Colom_2.jpg",
    "museo-olimpico-y-del-deporte": "0/07/Museu_Olímpic_i_de_l'Esport_Joan_Antoni_Samaranch_-_2026_-_01.jpg",
    "museo-picasso": "9/92/Palau_Berenguer_d'Aguilar.jpg",
    "museu-d-historia-de-catalunya": "8/8d/Magatzems_generals_del_Dipòsit_-_vista_general.JPG",
    "museu-del-disseny": "6/60/DHUB_0873.JPG",
    "museu-del-modernisme-catala": "d/dd/Museu_del_Modernisme_Català_01.JPG",
    "museu-egipci-de-barcelona": "0/01/Interior_Museu_Egipci_de_Barcelona_planta_1.jpg",
    "museu-frederic-mares": "7/74/Entrada_Museu_Frederic_Marès.jpg",
    "museu-maritim": "8/8a/Drassanes_barcelona.jpg",
    "palau-de-la-musica-catalana": "0/0e/Palau_música_catalana_exterior.jpg",
    "palau-guell": "1/1b/Palau_Güell,_Antoni_Gaudi,_Barcelona_2.jpg",
    "palau-robert": "1/1a/Palaurobertbarcelona.JPG",
    "palau-sant-jordi": "4/48/Palau_Sant_Jordi_Barcelona_Catalonia.jpg",
    "park-guell": "f/f8/Güell_BCN_edited.jpg",
    "passeig-de-gracia": "e/e3/Via_Barcelona_Casa_Milà.JPG",
    "placa-de-catalunya": "b/b9/14-08-06-barcelona-RalfR-304.jpg",
    "placa-de-sant-felip-neri": "a/a9/Plaça_Sant_Felip_Neri.jpg",
    "placa-de-sant-jaume": "d/d9/Plaça_de_Sant_Jaume.jpg",
    "placa-del-rei": "8/8c/Palau_Reial_Major_2574.jpg",
    "placa-reial": "f/f5/Plaça_Reial,_Barcelona.jpg",
    "playa-de-la-barceloneta": "f/fe/Barcelona_(16877599244).jpg",
    "poble-espanyol": "8/84/Porta_del_Poble_Espanyol_de_Montjuïc_-_20200818_181705.jpg",
    "sagrada-familia": "7/78/SF_maig_2026.jpg",
    "sant-pau-del-camp": "8/87/Sant_Pau_del_Camp_-_Absis.JPG",
    "sitges": "1/19/Sitges_-_Ansicht_4.jpg",
    "sombrereria-obach": "8/81/Sombrereria_Obach.jpg",
    "spotify-camp-nou": "f/fc/Camp_Nou_aerial_(cropped).jpg",
    "tarragona": "2/22/E5320-Vista-de-Tarragona.jpg",
    "teatre-nacional-de-catalunya": "e/ed/Teatre_Nacional.JPG",
    "teleferico-de-montjuic": "2/2d/Montjuïc_Cable_Car_BCN_04_2016_7109.jpg",
    "teleferico-del-puerto": "8/89/Telefèric_del_Port_Barcelona.jpg",
    "templo-de-augusto": "4/4e/Columnes_del_temple_d'August_(I).jpg",
    "tibidabo": "6/6c/El_Tibidabo,_l'observatori_Fabra_i_la_punxa_d'una_torre_veneciana.jpg",
    "w-barcelona": "6/69/14-08-05-barcelona-RalfR-001.jpg",
    "zoo-de-barcelona": "3/3f/Zoo_de_Barcelona.JPG"
  },

  /* Estaciones de metro de OpenStreetMap (líneas L1 a L5, L9 Sud y FM). Sirven para mostrar la estación más cercana en cada ficha. */
  stations: {
    "L1": [["Arc de Triomf", 41.39210, 2.18094], ["Avinguda Carrilet", 41.35892, 2.10250], ["Baró de Viver", 41.44993, 2.19952], ["Bellvitge Rambla Marina", 41.35097, 2.11095], ["Can Serra", 41.36768, 2.10276], ["Catalunya", 41.38757, 2.16950], ["El Clot", 41.41018, 2.18695], ["Espanya", 41.37552, 2.14948], ["Fabra i Puig", 41.42974, 2.18369], ["Florida", 41.36830, 2.10983], ["Fondo", 41.45157, 2.21840], ["Glòries", 41.40221, 2.18755], ["Hospital de Bellvitge", 41.34463, 2.10722], ["Hostafrancs", 41.37523, 2.14367], ["La Sagrera", 41.42262, 2.18704], ["Marina", 41.39491, 2.18624], ["Mercat Nou", 41.37344, 2.13399], ["Navas", 41.41605, 2.18696], ["Plaça de Sants", 41.37536, 2.13822], ["Rambla Just Oliveras", 41.36402, 2.09984], ["Rocafort", 41.37920, 2.15456], ["Sant Andreu", 41.43663, 2.19117], ["Santa Coloma", 41.45105, 2.20794], ["Santa Eulàlia", 41.36877, 2.12858], ["Torras i Bages", 41.44313, 2.19080], ["Torrassa", 41.36838, 2.11663], ["Trinitat Vella", 41.44870, 2.19369], ["Universitat", 41.38569, 2.16411], ["Urgell", 41.38248, 2.15891], ["Urquinaona", 41.38959, 2.17462]],
    "L2": [["Artigues | Sant Adrià", 41.43370, 2.21758], ["Bac de Roda", 41.41485, 2.19515], ["Badalona Pompeu Fabra", 41.44894, 2.24425], ["El Clot", 41.41026, 2.18672], ["Encants", 41.40707, 2.18258], ["Gorg", 41.44045, 2.23376], ["La Pau", 41.42394, 2.20568], ["Monumental", 41.40044, 2.17976], ["Paral·lel", 41.37498, 2.16925], ["Passeig de Gràcia", 41.38951, 2.16812], ["Pep Ventura", 41.44391, 2.23804], ["Sagrada Família", 41.40399, 2.17512], ["Sant Antoni", 41.37979, 2.16322], ["Sant Martí", 41.41903, 2.20078], ["Sant Roc", 41.43529, 2.22784], ["Tetuan", 41.39489, 2.17550], ["Universitat", 41.38473, 2.16386], ["Verneda", 41.42987, 2.20981]],
    "L3": [["Canyelles", 41.44178, 2.16634], ["Catalunya", 41.38616, 2.17008], ["Diagonal", 41.39594, 2.15995], ["Drassanes", 41.37668, 2.17576], ["El Poble-sec", 41.37500, 2.16058], ["Espanya", 41.37503, 2.15152], ["Fontana", 41.40204, 2.15298], ["Lesseps", 41.40555, 2.15056], ["Liceu", 41.38139, 2.17306], ["Maria Cristina", 41.38795, 2.12622], ["Montbau", 41.43060, 2.14503], ["Mundet", 41.43559, 2.14837], ["Palau Reial", 41.38583, 2.11785], ["Paral·lel", 41.37491, 2.16925], ["Passeig de Gràcia", 41.39159, 2.16534], ["Penitents", 41.41790, 2.14101], ["Plaça del Centre", 41.38196, 2.13588], ["Roquetes", 41.44739, 2.17568], ["Sants Estació", 41.38146, 2.14120], ["Tarragona", 41.37849, 2.14535], ["Trinitat Nova", 41.44940, 2.18458], ["Vall d’Hebron | Sant Genís", 41.42480, 2.14232], ["Vallcarca", 41.41190, 2.14449], ["Valldaura", 41.43807, 2.15692], ["Zona Universitària", 41.38419, 2.11138], ["les Corts", 41.38414, 2.13090]],
    "L4": [["Alfons X", 41.41209, 2.16552], ["Barceloneta", 41.38207, 2.18542], ["Besòs", 41.42043, 2.20963], ["Besòs Mar", 41.41506, 2.21610], ["Bogatell", 41.39520, 2.19209], ["Ciutadella | Vila Olímpica", 41.38668, 2.19295], ["El Maresme | Fòrum", 41.41179, 2.21666], ["Girona", 41.39501, 2.17096], ["Guinardó | Hospital de Sant Pau", 41.41608, 2.17409], ["Jaume I", 41.38403, 2.17868], ["Joanic", 41.40636, 2.16322], ["La Pau", 41.42362, 2.20530], ["Llacuna", 41.39940, 2.19763], ["Llucmajor", 41.43700, 2.17338], ["Maragall", 41.42309, 2.17741], ["Passeig de Gràcia", 41.38998, 2.16796], ["Poblenou", 41.40373, 2.20335], ["Selva de Mar", 41.40807, 2.20917], ["Trinitat Nova", 41.44916, 2.18247], ["Urquinaona", 41.38806, 2.17333], ["Verdaguer", 41.40046, 2.16796], ["Via Júlia", 41.44376, 2.17858]],
    "L5": [["Badal", 41.37557, 2.12734], ["Camp de l'Arpa", 41.41468, 2.18101], ["Can Boixeres", 41.36655, 2.09150], ["Can Vidalet", 41.37173, 2.09977], ["Collblanc", 41.37574, 2.11886], ["Congrés | Indians", 41.42343, 2.18128], ["Cornellà Centre", 41.35728, 2.07058], ["Diagonal", 41.39446, 2.15888], ["El Coll | La Teixonera", 41.42168, 2.14940], ["Entença", 41.38434, 2.14547], ["Ernest Lluch", 41.37588, 2.11204], ["Gavarra", 41.35796, 2.07923], ["Horta", 41.42973, 2.16026], ["Hospital Clínic", 41.38860, 2.15109], ["La Sagrera", 41.42128, 2.18662], ["Maragall", 41.42503, 2.17655], ["Plaça de Sants", 41.37573, 2.13520], ["Pubilla Cases", 41.37379, 2.10708], ["Sagrada Família", 41.40402, 2.17389], ["Sant Ildefons", 41.36334, 2.08434], ["Sant Pau | Dos de Maig", 41.41070, 2.17597], ["Sants Estació", 41.37991, 2.14035], ["Vall d’Hebron | Sant Genís", 41.42502, 2.14257], ["Verdaguer", 41.39882, 2.16693], ["Vilapicina", 41.43046, 2.16818], ["Virrei Amat", 41.42967, 2.17496], ["el Carmel", 41.42440, 2.15509]],
    "L9S": [["Aeroport T1", 41.28833, 2.07097], ["Aeroport T2", 41.30381, 2.07313], ["Can Tries - Gornal", 41.36089, 2.11814], ["Collblanc", 41.37580, 2.11842], ["Cèntric", 41.32184, 2.09360], ["Europa | Fira", 41.35753, 2.12605], ["Fira", 41.35187, 2.13062], ["Les Moreres", 41.32900, 2.10313], ["Mas Blau", 41.31131, 2.07345], ["Mercabarna", 41.33354, 2.11129], ["Parc Logístic", 41.34181, 2.12805], ["Parc Nou", 41.31668, 2.08740], ["Torrassa", 41.36800, 2.11564], ["Zona Universitària", 41.38393, 2.11148], ["el Prat Estació", 41.33168, 2.09015]],
    "L9N": [["Bon Pastor", 41.43607, 2.20482], ["Can Peixauet", 41.44453, 2.21040], ["Can Zam", 41.45770, 2.19846], ["Església Major", 41.45480, 2.21234], ["Fondo", 41.45178, 2.21865], ["La Sagrera", 41.42041, 2.18682], ["Onze de Setembre", 41.42971, 2.19349], ["Santa Rosa", 41.44674, 2.21576], ["Singuerlín", 41.45943, 2.20544]],
    "L10": [["Bon Pastor", 41.43607, 2.20482], ["Can Tries - Gornal", 41.36084, 2.11813], ["Ciutat de la Justícia", 41.36325, 2.13333], ["Collblanc", 41.37581, 2.11837], ["Ecoparc", 41.33021, 2.13702], ["Foc", 41.35583, 2.14211], ["Foneria", 41.36048, 2.13871], ["Gorg", 41.44045, 2.23372], ["La Sagrera", 41.42041, 2.18682], ["Llefià", 41.44146, 2.21742], ["Onze de Setembre", 41.42971, 2.19349], ["Port Comercial | la Factoria", 41.33597, 2.14058], ["Provençana", 41.36136, 2.12429], ["Torrassa", 41.36801, 2.11558], ["ZAL | Riu Vell", 41.32377, 2.13305], ["Zona Franca", 41.34302, 2.14491], ["la Salut", 41.44270, 2.22467]],
    "L11": [["Can Cuiàs", 41.46233, 2.17309], ["Casa de l'Aigua", 41.45112, 2.18472], ["Ciutat Meridiana", 41.46081, 2.17464], ["Torre Baró | Vallbona", 41.45923, 2.17994], ["Trinitat Nova", 41.44920, 2.18238]],
    "FM": [["Paral·lel", 41.37436, 2.16939], ["Parc de Montjuïc", 41.36881, 2.16309]]
  }
};
