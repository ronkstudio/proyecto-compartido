/* Datos complementarios de Madrid (tarjetas #100 y #191): sellos del pasaporte, niveles de recomendación, dietas, días de cierre,
   colecciones, zonas para armar viajes, calendario, fotos y estaciones.
   Las claves son los ids de los lugares (nombre en minúsculas, sin acentos, con guiones). */
window.CITY_EXTRA = window.CITY_EXTRA || {};
window.CITY_EXTRA.madrid = {
  tz: "Europe/Madrid",

  /* Pasaporte madrileño: sellos que se ganan marcando "Ya fui" en los lugares. Mismo formato que data/caba-extra.js. */
  stamps: [
    { id: "primer-paso", icon: "👣", name: "Primer paso", desc: "Visitá tu primer lugar", n: 1 },
    { id: "imperdibles", icon: "🏛️", name: "Lo esencial", desc: "5 imperdibles destacados", n: 5, cat: "ver", q: 3 },
    { id: "museos", icon: "🎨", name: "Paseo del Arte", desc: "3 museos", n: 3, sub: "Museo" },
    { id: "tapas", icon: "🍤", name: "De tapas", desc: "3 bares de tapas", n: 3, sub: "Tapas" },
    { id: "churros", icon: "🍫", name: "Churros con chocolate", desc: "Una churrería", n: 1, tag: ["chocolate"] },
    { id: "verde", icon: "🌳", name: "Pulmón verde", desc: "2 parques o jardines", n: 2, sub: "Naturaleza" },
    { id: "flamenco", icon: "💃", name: "¡Olé!", desc: "Un tablao flamenco", n: 1, sub: "Flamenco" },
    { id: "noche", icon: "🍸", name: "Trasnochador", desc: "2 salidas de noche", n: 2, cat: "noche" },
    { id: "escapada", icon: "🚆", name: "Escapada", desc: "Una excursión fuera de la ciudad", n: 1, cat: "escapadas" },
    { id: "curioso", icon: "💎", name: "Fuera del circuito", desc: "Una joya oculta o un lugar de barrio", n: 1, tag: ["joya oculta", "vida de barrio"] },
    { id: "barrios", icon: "🏘️", name: "Explorador de barrios", desc: "Lugares en 5 barrios distintos", n: 5, barrios: true },
    { id: "honorario", icon: "🐈", name: "Madrileño honorario", desc: "20 lugares visitados", n: 20 }
  ],

  /* Nivel de recomendación: 3 = Destacado, 2 = Muy recomendado, 1 = Buena opción.
     Los marcados como destacados en data/madrid-lugares.js ya son 3; el resto es 2 salvo lo que se lista acá. */
  quality: {
    3: ["museo-sorolla", "museo-lazaro-galdiano", "real-academia-de-bellas-artes-de-san-fernando", "ermita-de-san-antonio-de-la-florida",
      "parque-el-capricho", "casa-labra", "la-casa-del-abuelo", "bodega-de-la-ardosa", "la-venencia", "cafe-central", "diverxo", "el-escorial", "mandarin-oriental-ritz"],
    1: ["bus-turistico-de-madrid", "museo-de-cera-de-madrid", "petit-palace-puerta-del-sol", "cines-callao", "las-rozas-village", "el-corte-ingles-de-callao",
      "tour-de-tapas-por-la-latina", "clase-de-cocina-espanola", "anillo-verde-ciclista"]
  },
  awards: {},

  /* Dietas. Solo con fuente: OpenStreetMap ("diet:vegan=only" o "diet:gluten_free=only", 18/11/2026) y la web de cada local, que lo dice
     (revisadas el 18/11/2026, tarjeta #198). Detalle en docs/fuentes-madrid.md. */
  diet: {
    "la-encomienda": ["vegano", "vegetariano"], "santa-y-pura": ["vegano", "vegetariano"], "frutas-prohibidas": ["vegano", "vegetariano"], "vega": ["vegano", "vegetariano"],
    "sana-locura": ["sin TACC"], "leon-the-baker": ["sin TACC"]
  },
  dietFull: ["la-encomienda", "santa-y-pura", "frutas-prohibidas", "vega", "sana-locura", "leon-the-baker"],

  /* Días que abren o cierran (0 = domingo … 6 = sábado). Solo los días fijos y conocidos; pueden cambiar en feriados. */
  only: {
    "el-rastro": [0], "parque-el-capricho": [6, 0]
  },
  closed: {
    "museo-reina-sofia": [2], "museo-sorolla": [1], "museo-arqueologico-nacional": [1], "museo-lazaro-galdiano": [1], "museo-cerralbo": [1],
    "museo-del-romanticismo": [1], "museo-de-america": [1], "museo-de-san-isidro": [1], "museo-de-historia-de-madrid": [1],
    "casa-museo-lope-de-vega": [1], "real-academia-de-bellas-artes-de-san-fernando": [1], "museo-nacional-de-ciencias-naturales": [1],
    "museo-del-ferrocarril": [1], "real-monasterio-de-las-descalzas-reales": [1], "palacio-de-cibeles": [1],
    "mercado-de-la-paz": [0], "mercado-de-maravillas": [0], "mercado-de-vallehermoso": [0]
  },

  /* Lista de preparación del viaje (se tilda y queda guardada en el dispositivo). */
  checklist: [
    { title: "Antes de viajar", items: [
      "Pasaporte o documento vigente, y una copia en el celular",
      "Seguro de viaje con cobertura médica",
      "Adaptador de enchufe tipo C o F (230 V)",
      "Avisar al banco que vas a usar la tarjeta en el exterior",
      "Reservar el Prado, el Palacio Real y el tour del Bernabéu",
      "Descargar esta guía y los mapas de Google sin conexión"
    ] },
    { title: "Al llegar", items: [
      "Tomar el metro o el taxi a precio fijo desde el aeropuerto",
      "Pagar el transporte con la tarjeta sin contacto, o comprar el abono turístico",
      "Comprar un chip prepago o activar la eSIM",
      "Calzado cómodo: en Madrid se camina mucho"
    ] }
  ],

  /* Colecciones del inicio: cada una es un filtro de Explorar. */
  collections: [
    { name: "Clásicos de Madrid", icon: "🏛️", filter: { q: "clásico" }, cover: "plaza-mayor" },
    { name: "El Paseo del Arte", icon: "🎨", filter: { cat: "ver", sub: "Museo" }, cover: "museo-del-prado" },
    { name: "Madrid gratis", icon: "💸", filter: { prices: [0] }, cover: "parque-del-retiro" },
    { name: "Miradores", icon: "🌇", filter: { q: "mirador" }, cover: "templo-de-debod" },
    { name: "Palacios", icon: "👑", filter: { q: "palacio" }, cover: "palacio-real" },
    { name: "De tapas", icon: "🍤", filter: { cat: "comer", sub: "Tapas" }, cover: "la-casa-del-abuelo" },
    { name: "Cocina madrileña", icon: "🥘", filter: { cat: "comer", sub: "Cocina madrileña" }, cover: "sobrino-de-botin" },
    { name: "Churros y dulces", icon: "🍫", filter: { q: "chocolate" }, cover: "chocolateria-san-gines" },
    { name: "Cafés históricos", icon: "☕", filter: { cat: "comer", sub: "Café y pastelería" }, cover: "cafe-gijon" },
    { name: "Mercados para comer", icon: "🧺", filter: { cat: "comer", sub: "Mercado gastronómico" }, cover: "mercado-de-san-miguel" },
    { name: "Flamenco", icon: "💃", filter: { cat: "noche", sub: "Flamenco" }, cover: "corral-de-la-moreria" },
    { name: "Cócteles y terrazas", icon: "🍸", filter: { cat: "noche" }, cover: "salmon-guru" },
    { name: "Joyas menos conocidas", icon: "💎", filter: { q: "joya oculta" }, cover: "ermita-de-san-antonio-de-la-florida" },
    { name: "Con chicos", icon: "🧒", filter: { q: "chicos" }, cover: "zoo-aquarium-de-madrid" },
    { name: "Días de lluvia", icon: "🌧️", filter: { q: "lluvia" }, cover: "museo-reina-sofia" },
    { name: "Mercados", icon: "🛍️", filter: { cat: "compras", sub: "Mercado" }, cover: "mercado-de-san-fernando" },
    { name: "Fútbol", icon: "⚽", filter: { q: "fútbol" }, cover: "estadio-santiago-bernabeu" },
    { name: "Excursiones de un día", icon: "🚆", filter: { cat: "escapadas" }, cover: "toledo" }
  ],

  /* Zonas para el armado automático de viajes, en orden de prioridad. */
  zones: [
    { name: "Sol, Austrias y La Latina", barrios: ["Sol y Gran Vía", "Austrias y Palacio", "La Latina"] },
    { name: "Paseo del Arte y Retiro", barrios: ["Paseo del Prado", "Retiro", "Barrio de las Letras"] },
    { name: "Malasaña y Chueca", barrios: ["Malasaña", "Chueca"] },
    { name: "Templo de Debod y Moncloa", barrios: ["Argüelles y Moncloa"] },
    { name: "Salamanca y Chamberí", barrios: ["Salamanca", "Chamberí", "Castellana y Chamartín"] },
    { name: "Lavapiés y Madrid Río", barrios: ["Lavapiés", "Madrid Río y Matadero"] }
  ],
  zonasDosDias: [["Madrid de los Austrias, Debod y Malasaña", [0, 3, 2]], ["Museos, Retiro y Lavapiés", [1, 5, 4]]],
  zonaChicos: 1,

  /* Palabras que la gente escribe → cómo figura en la guía. */
  synonyms: {
    desayuno: "cafe", brunch: "cafe", merienda: "cafe", cafeteria: "cafe", vegano: "vegetariano",
    hotel: "hospedaje", hoteles: "hospedaje", dormir: "hospedaje", alojamiento: "hospedaje", hostal: "hostel",
    ninos: "chicos", nenes: "chicos", familia: "chicos", familias: "chicos", barato: "economico", baratos: "economico", gratuito: "gratis",
    tragos: "cocteles", cocktail: "cocteles", cocktails: "cocteles", boliche: "club", bailar: "club", discoteca: "club",
    excursion: "excursiones", escapada: "excursiones", paseo: "caminar", shopping: "compras", regalos: "regalos",
    lluvia: "lluvia", llueve: "lluvia", techo: "lluvia", vista: "mirador", vistas: "mirador", azotea: "mirador", guia: "tours", guias: "tours", visita: "tours",
    churro: "chocolate", churros: "chocolate", porras: "chocolate", tapeo: "tapas", tapear: "tapas", pintxos: "tapas", cana: "cerveza", canas: "cerveza",
    tablao: "flamenco", futbol: "futbol", real: "futbol", atletico: "futbol", cocido: "madrilena", calamares: "sandwich", bocadillo: "sandwich", vino: "vinos"
  },

  /* Calendario: fechas habituales, a confirmar cada año. m = meses (1-12). */
  events: [
    { m: [1], when: "5 de enero", icon: "👑", name: "Cabalgata de Reyes", desc: "El desfile de los Reyes Magos por el Paseo de la Castellana y el centro, con carrozas y caramelos para los chicos." },
    { m: [2, 3], when: "Febrero o marzo", icon: "🎨", name: "ARCO", desc: "La gran feria de arte contemporáneo, en IFEMA, con muestras en galerías de toda la ciudad." },
    { m: [3, 4], when: "Semana Santa", icon: "✝️", name: "Semana Santa", desc: "Procesiones por el centro, sobre todo por La Latina y los Austrias, y torrijas en todas las pastelerías." },
    { m: [4], when: "Abril", icon: "🏃", name: "Maratón de Madrid", desc: "Recorre el centro y el Retiro; ese domingo hay muchos cortes de tránsito." },
    { m: [4, 5], when: "Abril y mayo", icon: "🎾", name: "Mutua Madrid Open", desc: "Uno de los grandes torneos de tenis sobre polvo de ladrillo, en la Caja Mágica." },
    { m: [5], when: "2 de mayo", icon: "🎖️", name: "Fiesta de la Comunidad", desc: "Recuerda el levantamiento de 1808 contra Napoleón, con actos en la Puerta del Sol y en Malasaña." },
    { m: [5], when: "15 de mayo", icon: "🎉", name: "San Isidro", desc: "La fiesta del patrono de Madrid: gente vestida de chulapo, verbenas, conciertos y romería en la pradera de San Isidro." },
    { m: [5, 6], when: "Mayo y junio", icon: "📚", name: "Feria del Libro", desc: "Cientos de casetas de librerías y editoriales en el Retiro, con autores firmando libros." },
    { m: [7], when: "Principios de julio", icon: "🏳️‍🌈", name: "Orgullo Madrid", desc: "Una de las celebraciones del Orgullo más grandes de Europa, con fiestas en Chueca y un gran desfile." },
    { m: [7, 8], when: "Julio y agosto", icon: "🌙", name: "Veranos de la Villa", desc: "El festival de verano de la ciudad: conciertos, teatro y cine al aire libre." },
    { m: [8], when: "Primera quincena de agosto", icon: "🏮", name: "Verbenas de agosto", desc: "Las fiestas de San Cayetano, San Lorenzo y La Paloma en Lavapiés y La Latina, con farolillos, música y chotis." },
    { m: [10], when: "Octubre", icon: "🐑", name: "Fiesta de la Trashumancia", desc: "Un rebaño de ovejas cruza el centro de Madrid por una antigua cañada, una tradición única." },
    { m: [10], when: "12 de octubre", icon: "🇪🇸", name: "Fiesta Nacional de España", desc: "Desfile militar por el Paseo de la Castellana." },
    { m: [11], when: "9 de noviembre", icon: "⛪", name: "La Almudena", desc: "La fiesta de la patrona de Madrid, con misa en la Plaza Mayor y procesión." },
    { m: [12, 1], when: "Diciembre a enero", icon: "🎄", name: "Navidad en Madrid", desc: "Luces en todo el centro, el mercado de Navidad de la Plaza Mayor y pesebres en iglesias y palacios." },
    { m: [12], when: "31 de diciembre", icon: "🍇", name: "Campanadas y San Silvestre", desc: "A la tarde se corre la San Silvestre Vallecana; a medianoche se comen las doce uvas con las campanadas del reloj de la Puerta del Sol." }
  ],

  /* Bloques extra para Info práctica. */
  practicalMore: [
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

  /* Fotos (tarjeta #191): foto principal de cada lugar en Wikidata, de Wikimedia Commons con licencia libre,
     aceptada solo si el elemento de Wikidata está a menos de 1,5 km del lugar (15 km las excursiones). Revisadas en el navegador el 18/11/2026. */
  photos: {
    "posada-de-la-villa": "8/87/Posada_de_la_Villa,_horno_de_asar_(Madrid)_-_48415084336.jpg",
    "la-casa-del-abuelo": "c/cf/Casa_el_Abuelo-2009.jpg",
    "casa-toni": "b/bf/Casa_Toni_(Madrid).jpg",
    "el-brillante": "4/40/El_Brillante-Atocha_(Madrid).jpg",
    "el-riojano": "2/24/Interior_del_\"Riojano\"-Madrid.jpg",
    "antigua-pasteleria-del-pozo": "3/30/Pastelería_\"El_Pozo\"-2009.jpg",
    "clamores": "f/fa/2013_Clamores_Jazz_Club_Madrid_Jazz'a-nite_Natalia_Dicenta.jpg",
    "teatro-kapital": "b/b8/Teatro_Kapital_Madrid.jpg",
    "hotel-urban": "4/47/Hotel_Urban_(Madrid)_01.jpg",
    "the-westin-palace": "8/87/Madrid_-_Hotel_The_Westin_Palace_02.jpg",
    "casa-de-diego": "b/ba/Casa_Diego_-_Puerta_del_Sol.JPG",
    "visitas-guiadas-de-turismo-de-madrid": "4/49/Visita_turística_guiada_por_la_Plaza_Mayor_con_motivo_de_su_IV_Centenario_(01).jpg",
    "bus-turistico-de-madrid": "!2/2d/Madrid-city-tour-royal-palace-entrance.jpg",
    "casa-museo-lope-de-vega": "!a/af/Casa-Museo_de_Lope_de_Vega_(Madrid)_01.jpg",
    "anden-0-estacion-de-chamberi": "0/0f/Andén_0_Estación_de_Chamberí_en_septiembre_de_2022_02.jpg",
    "teleferico-de-madrid": "1/14/TELEFERICO_MADRID_-_panoramio.jpg",
    "parque-el-capricho": "2/22/Parque_de_El_Capricho_de_Madrid_en_mayo_de_2023_03.jpg",
    "barrio-de-las-letras": "6/61/Madrid_-_Barrio_de_las_Letras_05.jpg",
    "cuatro-torres": "1/1c/Cuatro_Torres_Business_Area_-_Madrid_-_001.jpg",
    "teatro-barcelo": "c/ca/Teatro-Barcelo-Madrid-April-2024.jpg",
    "galeria-canalejas": "7/71/Banco_Hispano_Americano_(Madrid)_07.jpg",
    "casa-del-libro-gran-via": "8/82/Casa_del_Libro_-_Gran_Vía_(5185962980).jpg",
    "museo-del-ferrocarril": "8/88/Museo_del_Ferrocarril_y_Mercado_de_motores_en_marzo_de_2023_02.jpg",
    "casa-alberto": "9/9e/Casa_Alberto_-_panoramio.jpg",
    "sala-de-despiece": "d/dd/Sala_de_Despiece_Restaurant_(29408885482).jpg",
    "cafe-central": "2/27/Cafe_Central_-_Plaza_del_Angel_-_Madrid_01.jpg",
    "sala-el-sol": "d/d8/Russian_Red_@_Sala_El_Sol_(2425268576).jpg",
    "galileo-galilei": "e/e7/Puerta_de_la_Sala_Galileo_Galilei_de_noche.jpg",
    "del-diego": "!f/f1/Del_Diego_(5290018554).jpg",
    "angelita": "e/e6/Angelita_Madrid_(49173886083).jpg",
    "hotel-regina": "3/37/Hotel_Regina_(2409407745).jpg",
    "hotel-emperador": "a/a1/Madrid_-_Hotel_Emperador.jpg",
    "las-rozas-village": "3/3e/Restaurante_-_Las_Rozas_Village_-_Chic_outlet_shopping_(6926664573).jpg",
    "terraza-del-riu-plaza-espana": "3/3f/Edificio_España_(Madrid)_2014-02-10_perspective_corrected.jpg",
    "sierra-de-guadarrama": "e/e2/Paisaje_Guadarramero_(4005105968).jpg",
    "paseo-en-bici-por-madrid-rio": "0/0f/Paseo_en_bici_por_Madrid_Río.jpg",
    "madrid-rio": "9/92/Paseo_en_bici_por_Madrid_Río_(2).jpg",
    "capas-sesena": "e/e7/Capas_Seseña_-_Madrid.JPG",
    "antigua-casa-talavera": "d/df/Antigua_Casa_Talavera_(Madrid)_01.jpg",
    "real-monasterio-de-las-descalzas-reales": "4/49/Monasterio_de_las_Descalzas_Reales_(Madrid)_07.jpg",
    "casa-de-campo": "a/a6/Casa_de_Campo_Lago_y_vista.jpg",
    "real-fabrica-de-tapices": "4/42/Real_Fabrica_de_Tapices_de_Madrid.jpg",
    "mercado-de-anton-martin": "a/a0/Mercado_de_Antón_Martín,_fachada_calle_Santa_Isabel.JPG",
    "frutas-prohibidas": "2/2f/Frutas_Prohibidas,_dining_room_(Conde_Duque,_Madrid).jpg",
    "botes-del-estanque-del-retiro": "4/4e/Monumento_a_Alfonso_XII_de_España_en_los_Jardines_del_Retiro_-_04.jpg",
    "segovia": "4/4d/Segovia_-_02_edited.jpg",
    "chinchon": "5/5a/Un_Día_en_Chinchón_(14656028068).jpg",
    "la-granja-de-san-ildefonso": "2/25/Desde_Peñalara,_Real_Sitio_de_San_Ildefonso._Segovia,_España._Spain.jpg",
    "pedraza": "1/19/Pedraza,_en_Segovia_(España).jpg",
    "four-seasons-hotel-madrid": "f/ff/Palacio_de_la_Equitativa_(Madrid)_14.jpg",
    "mercado-de-vallehermoso": "6/62/Mercado_de_Vallehermoso_-_Madrid_(cropped).jpg",
    "el-corte-ingles-de-callao": "b/bc/Edificio_de_El_Corte_Inglés_en_Callao.jpg",
    "estadio-santiago-bernabeu": "0/0e/Estadio_Santiago_Bernabéu_Madrid.jpg",
    "teatro-real": "9/90/Teatro_Real_de_Madrid_2025.jpg",
    "teatro-circo-price": "1/16/Teatro_Circo_Price_-_01.jpg",
    "edificio-metropolis": "e/ec/Edificio_Metrópolis,_calle_de_Alcalá,_Madrid,_España,_2017-05-18,_DD_08.jpg",
    "plaza-de-espana": "7/72/007233_-_Madrid_(8666752396).jpg",
    "palacio-de-cristal": "a/ae/023_Palacio_de_Cristal,_Parque_del_Retiro_(Madrid),_nau_sud.jpg",
    "la-bola": "c/cf/Cocido_-_panoramio.jpg",
    "taberna-antonio-sanchez": "5/55/Taberna_de_Antonio-Sánchez-2009.jpg",
    "bodega-de-la-ardosa": "e/eb/Bodega_de_La_Ardosa_(Sta_Engracia_70,_Madrid)_01.jpg",
    "mandarin-oriental-ritz": "0/0b/Hotel_Ritz_(Madrid)_03.jpg",
    "rosewood-villa-magna": "7/76/Hotel_Villa_Magna_(Madrid)_01.jpg",
    "el-rastro": "c/c8/Rastro_de_Madrid_(España)_7.jpg",
    "riyadh-air-metropolitano": "0/05/Wanda-Metropolitano.jpg",
    "faunia": "9/98/Faunia_entrada.jpg",
    "cava-baja": "0/0b/Cava_Baja,_Madrid_(6146188051).jpg",
    "hola-coffee": "c/ce/Hola_Coffee_(45813120745).jpg",
    "alcala-de-henares": "0/0f/Alcalá_de_Henares_-_50913617211.jpg",
    "aranjuez": "8/85/Aranjuez_PalacioReal_PlazaToros.jpg",
    "auditorio-nacional-de-musica": "f/f4/Madrid_Auditorio_de_musica.jpg",
    "avila": "3/32/Avila_001.jpg",
    "basilica-de-san-francisco-el-grande": "0/0e/Madrid_Real_Basílica_de_San_Francisco_el_Grande_16-03-2010_16-35-14.JPG",
    "cafe-comercial": "1/13/Café_Comercial_(Madrid)_01.jpg",
    "cafe-de-oriente": "8/88/Café_de_Oriente_(2).jpg",
    "cafe-gijon": "8/8f/Café_Gijón.jpg",
    "caixaforum-madrid": "0/0e/Caixaforum_Madrid_2024.jpg",
    "caja-magica": "4/49/Los_espacios_de_eventos_de_Madrid_Destino_se_consolidan_como_polo_de_actividad_empresarial,_solidaria_y_ciudadana_05.jpg",
    "calle-de-fuencarral": "1/18/Calle_de_Fuencarral_(Madrid)_01.jpg",
    "calle-de-preciados": "b/bc/Madrid_-_Calle_Preciados.jpg",
    "calle-de-serrano": "a/aa/Calle_Serrano_-_panoramio.jpg",
    "campo-del-moro": "f/fe/Campo_del_Moro_(Madrid)_04.jpg",
    "casa-labra": "d/d0/Casa_Labra-2009.jpg",
    "casa-lucio": "b/be/Casa_Lucio-2009.jpg",
    "casa-mingo": "4/4d/Casa_Mingo-2009.jpg",
    "casa-mira": "0/09/Casa_Mira-2009.jpg",
    "catedral-de-la-almudena": "c/c1/Almudena_2022_-_overview.jpg",
    "cerveceria-alemana": "e/ed/Cervecería_alemana_-_Madrid.jpg",
    "chocolateria-san-gines": "7/79/At_San_Gines_again._One_of_the_oldest_chocolate_con_churros_in_Madrid_(18761909709).jpg",
    "cine-dore": "d/d9/Cine_Dore_Madrid_2008_1.jpg",
    "cines-callao": "6/63/Cine_Callao,_Madrid,_Spain_2012.jpg",
    "circulo-de-bellas-artes": "a/a1/Círculo_de_Bellas_Artes_(Madrid)_06.jpg",
    "colegiata-de-san-isidro": "6/65/Main_facade_of_the_Colegiata_de_San_Isidro_2022.jpg",
    "congreso-de-los-diputados": "c/cf/Palacio_de_los_Diputados.jpg",
    "corral-de-la-moreria": "3/3f/MADRID_060319_MXALX_053.jpg",
    "cuenca": "1/12/Cuenca._Castilla_-_La_Mancha._Spain_(4172789174).jpg",
    "cuesta-de-moyano": "4/40/Cuesta_de_Moyano_(Madrid)_01.jpg",
    "el-escorial": "5/59/Monasterio_de_El_Escorial_en_Madrid.jpg",
    "ermita-de-san-antonio-de-la-florida": "b/b8/San_Antonio_de_la_Florida.jpg",
    "estadio-de-vallecas": "3/37/Estadio_de_Vallecas.jpg",
    "faro-de-moncloa": "a/a9/Faro_de_la_Moncloa.jpg",
    "fuente-de-cibeles": "c/c9/Fuente_de_Cibeles_-_Dec_2024.jpg",
    "galeria-de-las-colecciones-reales": "c/c6/Museo_de_Colecciones_Reales_(Madrid)_21.jpg",
    "gran-via": "9/92/Gran_Vía_(Madrid)_1.jpg",
    "hipodromo-de-la-zarzuela": "7/7b/Hipódromo_de_la_Zarzuela-1.JPG",
    "iglesia-de-san-antonio-de-los-alemanes": "4/4d/Iglesia_de_San_Antonio_de_los_Alemanes_(Madrid)_01.jpg",
    "iglesia-de-san-gines": "d/de/Iglesia_de_San_Ginés_(Madrid)_09.jpg",
    "jardines-de-sabatini": "f/f0/Jardines_de_Sabatini_(Madrid)_07.jpg",
    "la-mallorquina": "c/c8/Madrid_-_La_Mallorquina_1.jpg",
    "lavapies": "6/6f/Lavapiés_6440.jpg",
    "lhardy": "8/81/Restaurante_Lhardy-2009.jpg",
    "manzanares-el-real": "f/fd/Vista_de_Manzanares_el_Real_desde_el_castillo_01.jpg",
    "matadero-madrid": "b/b6/Matadero_Madrid.jpg",
    "mercado-de-la-cebada": "0/04/Madrid_-_Mercado_de_la_Cebada_-_outside.jpg",
    "mercado-de-la-paz": "8/81/Mercado_de_la_Paz.JPG",
    "mercado-de-los-mostenses": "2/20/Mercado_de_los_Mostenses.JPG",
    "mercado-de-maravillas": "a/a3/Mercado_de_Maravillas,_calle_Bravo_Murillo,_Madrid.JPG",
    "mercado-de-san-anton": "a/ad/Mercado_de_San_Anton_during_World_Pride.jpg",
    "mercado-de-san-fernando": "8/8d/Mercado_de_San_Fernando_(Madrid)_02.jpg",
    "mercado-de-san-miguel": "6/6e/Mercado_de_San_Miguel_(Madrid)_04.jpg",
    "museo-arqueologico-nacional": "7/78/Museo_Arqueológico_Nacional_(35039235760).jpg",
    "museo-cerralbo": "0/0d/Palacio_del_Marqués_de_Cerralbo_(Madrid)_01.jpg",
    "museo-chicote": "0/0f/Gran_Vía_12_(Madrid)_01.jpg",
    "museo-de-america": "5/57/Museo_de_América_de_Madrid_-_01.jpg",
    "museo-de-cera-de-madrid": "2/23/Entrada_al_Museo_de_Cera_(4300311860)_(cropped).jpg",
    "museo-de-historia-de-madrid": "9/9a/Museo_de_Historia_de_Madrid_(España)_03.jpg",
    "museo-de-san-isidro": "9/98/Museo_de_San_Isidro.jpg",
    "museo-del-prado": "6/68/Museo_del_Prado_2016_(25185969599).jpg",
    "museo-del-romanticismo": "e/e4/Museo_del_Romanticismo_-_Fachada_-_Fachada_del_Museo_del_Romanticismo.jpg",
    "museo-lazaro-galdiano": "f/f6/Museo_Lázaro_Galdiano_(Madrid)_05.jpg",
    "museo-nacional-de-ciencias-naturales": "9/9e/Palacio_de_las_Artes_e_Industrias_(Madrid)_01.jpg",
    "museo-reina-sofia": "9/97/MNCARS_05.jpg",
    "museo-sorolla": "4/4e/Museo_Sorolla_(Madrid)_07.jpg",
    "museo-thyssen-bornemisza": "5/5c/Site_of_the_Retiro_and_the_Prado_in_Madrid_49_(29684554308).jpg",
    "palacio-de-cibeles": "c/c1/Palacio_de_Comunicaciones_-_47.jpg",
    "palacio-de-liria": "c/ce/Palacio_de_Liria_(Madrid)_02.jpg",
    "palacio-real": "9/9b/Palacio_Real_de_Madrid_Julio_2016_(cropped).jpg",
    "parque-de-atracciones-de-madrid": "6/6f/Entrada_Parque_de_Atracciones_de_Madrid.jpg",
    "parque-del-oeste": "8/8d/Madrid_-_parque_del_Oeste.jpg",
    "parque-del-retiro": "0/02/June_Parc_Retiro_Madrid_-_Mythos_Spain_Photography_2014_-_panoramio_(8).jpg",
    "parque-warner-madrid": "0/03/Insignia_del_Parque_Warner,_Madrid,_España.jpg",
    "planetario-de-madrid": "7/77/Planetario_de_Madrid_01.jpg",
    "plaza-de-la-villa": "6/66/2012-04-30_Plaza_de_la_Villa_Madrid_anagoria_01.JPG",
    "plaza-de-oriente": "b/b4/Madrid_-_Royal_Palace_of_Madrid_-_20171027160239.jpg",
    "plaza-de-santa-ana": "8/80/Plaza_de_Santa_Ana_(Madrid)_02.jpg",
    "plaza-del-dos-de-mayo": "a/a8/Plaza_del_Dos_de_Mayo,_Madrid.jpg",
    "plaza-mayor": "1/18/Madrid,_Plaza_Mayor,_2016,_(02).jpg",
    "puerta-de-alcala": "0/06/Puerta_de_Alcalá_2025.jpg",
    "puerta-del-sol": "3/31/Puerta_del_Sol_(Madrid)_10.jpg",
    "real-academia-de-bellas-artes-de-san-fernando": "8/8c/Palacio_de_Goyeneche_-_Real_Academia_de_Bellas_Artes_de_San_Fernando.jpg",
    "real-jardin-botanico": "5/57/RealJardinBotanico_Puerta_del_Rey.jpg",
    "salamanca-ciudad": "0/04/Reflejos_de_la_Catedrales_de_Salamanca.jpg",
    "sobrino-de-botin": "f/ff/Casa_Botín_2.JPG",
    "teatro-coliseum": "3/34/Gran_Vía_78,_Edificio_Coliseum.jpg",
    "teatro-de-la-zarzuela": "d/df/Teatro_de_la_Zarzuela_(Madrid)_02.jpg",
    "teatro-espanol": "e/ee/Teatro_Español_(Madrid)_01.jpg",
    "teatro-lope-de-vega": "6/66/Patio_de_butacas..jpg",
    "templo-de-debod": "5/51/Templo_de_Debod_Madrid.JPG",
    "toledo": "6/65/Toledo_(37737041515).jpg",
    "wizink-center": "b/bc/Palacio_de_Deportes_(Madrid)_16.jpg",
    "zoo-aquarium-de-madrid": "7/79/OsosPardosZooMadrid.JPG"
  },

  /* Estaciones de metro de OpenStreetMap, 17/11/2026 (líneas 1 a 10 y Ramal). Sirven para mostrar la estación más cercana en cada ficha. */
  stations: {
    "1": [["Alto del Arenal", 40.39007, -3.64580], ["Alvarado", 40.45009, -3.70347], ["Antón Martín", 40.41231, -3.69908], ["Atocha", 40.40698, -3.68858], ["Bambú", 40.47697, -3.67658], ["Bilbao", 40.42978, -3.70099], ["Buenos Aires", 40.39165, -3.65389], ["Chamartín", 40.47391, -3.68266], ["Congosto", 40.37220, -3.61871], ["Cuatro Caminos", 40.44588, -3.70343], ["Estación del Arte", 40.40881, -3.69139], ["Estrecho", 40.45451, -3.70274], ["Gran Vía", 40.41993, -3.70169], ["Iglesia", 40.43529, -3.69884], ["La Gavia", 40.36932, -3.61250], ["Las Suertes", 40.36353, -3.59915], ["Menéndez Pelayo", 40.40435, -3.68114], ["Miguel Hernández", 40.38765, -3.64020], ["Nueva Numancia", 40.39598, -3.66474], ["Pacífico", 40.40153, -3.67533], ["Pinar de Chamartín", 40.48002, -3.66709], ["Plaza de Castilla", 40.46648, -3.68969], ["Portazgo", 40.39304, -3.65917], ["Puente de Vallecas", 40.39813, -3.66894], ["Ríos Rosas", 40.44160, -3.70157], ["Sierra de Guadalupe", 40.38261, -3.62492], ["Sol", 40.41695, -3.70316], ["Tetuán", 40.46084, -3.69820], ["Tirso de Molina", 40.41243, -3.70425], ["Tribunal", 40.42607, -3.70117], ["Valdeacederas", 40.46452, -3.69499], ["Valdecarros", 40.36003, -3.59208], ["Villa de Vallecas", 40.37946, -3.62131]],
    "2": [["Alsacia", 40.41825, -3.62381], ["Avenida de Guadalajara", 40.42248, -3.61217], ["Banco de España", 40.41907, -3.69493], ["Canal", 40.43916, -3.70425], ["Cuatro Caminos", 40.44582, -3.70398], ["Goya", 40.42442, -3.67645], ["La Almudena", 40.42318, -3.63826], ["La Elipa", 40.42701, -3.64947], ["Las Rosas", 40.42357, -3.60284], ["Manuel Becerra", 40.42816, -3.66872], ["Noviciado", 40.42460, -3.70737], ["Príncipe de Vergara", 40.42255, -3.68062], ["Quevedo", 40.43295, -3.70451], ["Retiro", 40.42048, -3.68642], ["San Bernardo", 40.43031, -3.70542], ["Santo Domingo", 40.42104, -3.70813], ["Sevilla", 40.41778, -3.69995], ["Sol", 40.41711, -3.70327], ["Ventas", 40.43051, -3.66392], ["Ópera", 40.41806, -3.70937]],
    "3": [["Almendrales", 40.38414, -3.69803], ["Argüelles", 40.43111, -3.71660], ["Callao", 40.42038, -3.70614], ["Ciudad de los Ángeles", 40.36018, -3.69337], ["Delicias", 40.39918, -3.69411], ["El Casar", 40.31873, -3.70911], ["Embajadores", 40.40502, -3.70228], ["Hospital 12 de Octubre", 40.37546, -3.69587], ["Lavapiés", 40.40853, -3.70093], ["Legazpi", 40.39253, -3.69487], ["Moncloa", 40.43459, -3.71899], ["Palos de la Frontera", 40.40307, -3.69460], ["Plaza de España", 40.42382, -3.71157], ["San Cristóbal", 40.34154, -3.69372], ["San Fermín-Orcasur", 40.36998, -3.69432], ["Sol", 40.41691, -3.70390], ["Ventura Rodríguez", 40.42677, -3.71325], ["Villaverde Alto", 40.34100, -3.71177], ["Villaverde Bajo - Cruce", 40.35101, -3.69274]],
    "4": [["Alfonso XIII", 40.44836, -3.66782], ["Alonso Martínez", 40.42765, -3.69607], ["Argüelles", 40.43050, -3.71552], ["Arturo Soria", 40.45591, -3.65615], ["Avenida de América", 40.43803, -3.67805], ["Avenida de la Paz", 40.45285, -3.66269], ["Bilbao", 40.42873, -3.70069], ["Canillas", 40.46377, -3.63539], ["Colón", 40.42582, -3.69223], ["Diego de León", 40.43420, -3.67497], ["Esperanza", 40.45921, -3.64557], ["Goya", 40.42479, -3.67675], ["Hortaleza", 40.47477, -3.65215], ["Lista", 40.42940, -3.67538], ["Manoteras", 40.47673, -3.66264], ["Mar de Cristal", 40.46994, -3.63863], ["Parque de Santa María", 40.47717, -3.64571], ["Pinar de Chamartín", 40.47999, -3.66708], ["Prosperidad", 40.44375, -3.67463], ["San Bernardo", 40.42961, -3.70636], ["San Lorenzo", 40.47457, -3.63958], ["Serrano", 40.42527, -3.68658], ["Velázquez", 40.42508, -3.68259]],
    "5": [["Acacias", 40.40410, -3.70591], ["Alameda de Osuna", 40.45760, -3.58799], ["Alonso Martínez", 40.42755, -3.69588], ["Aluche", 40.38572, -3.76067], ["Callao", 40.42022, -3.70581], ["Campamento", 40.39470, -3.76824], ["Canillejas", 40.44913, -3.60860], ["Carabanchel", 40.38783, -3.74500], ["Casa de Campo", 40.40355, -3.76090], ["Chueca", 40.42273, -3.69764], ["Ciudad Lineal", 40.43795, -3.63775], ["Diego de León", 40.43239, -3.67422], ["El Capricho", 40.45361, -3.59414], ["El Carmen", 40.43199, -3.65620], ["Empalme", 40.39073, -3.76547], ["Eugenia de Montijo", 40.38443, -3.75108], ["Gran Vía", 40.42001, -3.70159], ["La Latina", 40.41176, -3.70807], ["Marqués de Vadillo", 40.39732, -3.71674], ["Núñez de Balboa", 40.43266, -3.67955], ["Oporto", 40.38866, -3.73173], ["Pirámides", 40.40204, -3.71200], ["Pueblo Nuevo", 40.43539, -3.64342], ["Puerta de Toledo", 40.40705, -3.71111], ["Quintana", 40.43313, -3.64816], ["Rubén Darío", 40.43303, -3.68969], ["Suanzes", 40.44089, -3.62702], ["Torre Arias", 40.44363, -3.61713], ["Urgel", 40.39255, -3.72539], ["Ventas", 40.43148, -3.66376], ["Vista Alegre", 40.38880, -3.74006], ["Ópera", 40.41800, -3.70954]],
    "6": [["Alto de Extremadura", 40.41011, -3.73812], ["Arganzuela-Planetario", 40.39331, -3.68804], ["Argüelles", 40.43060, -3.71633], ["Avenida de América", 40.43783, -3.67812], ["Carpetana", 40.39290, -3.74101], ["Ciudad Universitaria", 40.44396, -3.72605], ["Conde de Casal", 40.40728, -3.67013], ["Cuatro Caminos", 40.44687, -3.70397], ["Diego de León", 40.43294, -3.67284], ["Guzmán el Bueno", 40.44647, -3.71204], ["Laguna", 40.39929, -3.74466], ["Legazpi", 40.39115, -3.69508], ["Lucero", 40.40514, -3.74538], ["Manuel Becerra", 40.42723, -3.66842], ["Moncloa", 40.43471, -3.71933], ["Méndez Álvaro", 40.39570, -3.67947], ["Nuevos Ministerios", 40.44632, -3.69448], ["O'Donnell", 40.42217, -3.66888], ["Opañel", 40.38691, -3.72319], ["Oporto", 40.38864, -3.73177], ["Pacífico", 40.40158, -3.67446], ["Plaza Elíptica", 40.38515, -3.71580], ["Príncipe Pío", 40.42107, -3.71922], ["Puerta del Ángel", 40.41385, -3.72686], ["República Argentina", 40.44427, -3.68454], ["Sainz de Baranda", 40.41528, -3.66940], ["Usera", 40.38801, -3.70561], ["Vicente Aleixandre", 40.44640, -3.71930]],
    "7": [["Alonso Cano", 40.43845, -3.69927], ["Antonio Machado", 40.47018, -3.71769], ["Arroyofresno", 40.49043, -3.72583], ["Ascao", 40.43032, -3.64043], ["Avenida de América", 40.43752, -3.67914], ["Avenida de la Ilustración", 40.48006, -3.71827], ["Barrio de la Concepción", 40.43947, -3.65280], ["Barrio del Puerto", 40.42258, -3.56916], ["Canal", 40.43870, -3.70452], ["Cartagena", 40.43945, -3.67192], ["Coslada Central", 40.42392, -3.56199], ["Estadio Metropolitano", 40.43382, -3.60096], ["Francos Rodríguez", 40.45661, -3.71208], ["García Noblejas", 40.42867, -3.63287], ["Gregorio Marañón", 40.43801, -3.69121], ["Guzmán el Bueno", 40.44669, -3.71345], ["Henares", 40.41756, -3.52699], ["Hospital de Henares", 40.41759, -3.53453], ["Islas Filipinas", 40.43909, -3.71399], ["Jarama", 40.42336, -3.52534], ["La Rambla", 40.42517, -3.54792], ["Lacoma", 40.48509, -3.72298], ["Las Musas", 40.43257, -3.60789], ["Parque de las Avenidas", 40.43903, -3.66315], ["Peñagrande", 40.47589, -3.71590], ["Pitis", 40.49520, -3.72569], ["Pueblo Nuevo", 40.43570, -3.64463], ["San Blas", 40.42752, -3.61596], ["San Fernando", 40.42452, -3.53597], ["Simancas", 40.42758, -3.62299], ["Valdezarza", 40.46493, -3.71648]],
    "8": [["Aeropuerto T1-T2-T3", 40.46779, -3.57179], ["Aeropuerto T4", 40.49239, -3.59325], ["Barajas", 40.47616, -3.58341], ["Colombia", 40.45713, -3.67706], ["Feria de Madrid", 40.46394, -3.61555], ["Mar de Cristal", 40.46989, -3.63857], ["Nuevos Ministerios", 40.44548, -3.69158], ["Pinar del Rey", 40.46786, -3.64869]],
    "9": [["Arganda del Rey", 40.30366, -3.44747], ["Artilleros", 40.40529, -3.64184], ["Avenida de América", 40.43814, -3.67905], ["Barrio del Pilar", 40.47711, -3.70343], ["Colombia", 40.45740, -3.67691], ["Concha Espina", 40.45131, -3.67759], ["Cruz del Rayo", 40.44458, -3.67836], ["Duque de Pastrana", 40.46750, -3.68059], ["Estrella", 40.41132, -3.66134], ["Herrera Oria", 40.48466, -3.70791], ["Ibiza", 40.41840, -3.67915], ["La Poveda", 40.31905, -3.47779], ["Mirasierra", 40.49126, -3.71666], ["Núñez de Balboa", 40.43264, -3.67954], ["Paco de Lucía", 40.49961, -3.70934], ["Pavones", 40.40058, -3.63520], ["Plaza de Castilla", 40.46640, -3.68776], ["Príncipe de Vergara", 40.42269, -3.68035], ["Puerta de Arganda", 40.40125, -3.59571], ["Pío XII", 40.46181, -3.67651], ["Rivas Futura", 40.34172, -3.52497], ["Rivas Urbanizaciones", 40.36715, -3.54763], ["Rivas Vaciamadrid", 40.32812, -3.52043], ["Sainz de Baranda", 40.41438, -3.66962], ["San Cipriano", 40.40404, -3.60357], ["Valdebernardo", 40.39992, -3.62156], ["Ventilla", 40.46988, -3.69619], ["Vicálvaro", 40.40427, -3.60899], ["Vinateros", 40.41036, -3.65250]],
    "10": [["Alonso Martínez", 40.42832, -3.69656], ["Aviación Española", 40.38365, -3.78396], ["Batán", 40.40783, -3.75311], ["Baunatal", 40.55446, -3.63560], ["Begoña", 40.48265, -3.68650], ["Casa de Campo", 40.40347, -3.76086], ["Chamartín", 40.47390, -3.68264], ["Colonia Jardín", 40.39684, -3.77477], ["Cuatro Vientos", 40.37725, -3.79254], ["Cuzco", 40.45948, -3.68996], ["Fuencarral", 40.49475, -3.69303], ["Gregorio Marañón", 40.43765, -3.69120], ["Hospital Infanta Sofía", 40.55983, -3.61149], ["Joaquín Vilumbrales", 40.34972, -3.80731], ["La Granja", 40.52739, -3.65846], ["La Moraleja", 40.53156, -3.63550], ["Lago", 40.41647, -3.73503], ["Las Tablas", 40.50863, -3.66940], ["Manuel de Falla", 40.55017, -3.64691], ["Marqués de la Valdavia", 40.54048, -3.63802], ["Montecarmelo", 40.50545, -3.69618], ["Nuevos Ministerios", 40.44522, -3.69132], ["Plaza de Castilla", 40.46735, -3.68811], ["Plaza de España", 40.42407, -3.70973], ["Príncipe Pío", 40.42098, -3.71910], ["Puerta del Sur", 40.34525, -3.81200], ["Reyes Católicos", 40.55086, -3.62406], ["Ronda de la Comunicación", 40.51512, -3.66226], ["Santiago Bernabéu", 40.45233, -3.69066], ["Tres Olivos", 40.50056, -3.69464], ["Tribunal", 40.42653, -3.70047]],
    "R": [["Príncipe Pío", 40.42063, -3.72017], ["Ópera", 40.41784, -3.70983]]
  }
};
