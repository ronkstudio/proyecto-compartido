/* Datos complementarios de Pekín (tarjeta #247): sellos del pasaporte, niveles de recomendación, dietas, colecciones,
   zonas para armar viajes, calendario, fotos y estaciones.
   Las claves son los ids de los lugares (nombre en minúsculas, sin acentos, con guiones). */
window.CITY_EXTRA = window.CITY_EXTRA || {};
window.CITY_EXTRA.pekin = {
  tz: "Asia/Shanghai",

  /* Pasaporte de Pekín: sellos que se ganan marcando "Ya fui" en los lugares. Mismo formato que data/caba-extra.js. */
  stamps: [
    { id: "primer-paso", icon: "👣", name: "Primer paso", desc: "Visitá tu primer lugar", n: 1 },
    { id: "imperdibles", icon: "🏯", name: "Lo esencial", desc: "5 imperdibles destacados", n: 5, cat: "ver", q: 3 },
    { id: "templos", icon: "🛕", name: "Peregrino", desc: "3 templos", n: 3, sub: "Templos y culto" },
    { id: "pato", icon: "🦆", name: "Pato laqueado", desc: "2 casas de pato laqueado", n: 2, sub: "Pato laqueado" },
    { id: "bocaditos", icon: "🥟", name: "Paladar pekinés", desc: "2 casas de comida de Pekín", n: 2, sub: "Cocina de Pekín" },
    { id: "hutongs", icon: "🏮", name: "Callejero", desc: "3 lugares de los hutongs", n: 3, tag: ["vida de barrio"] },
    { id: "muralla", icon: "🧱", name: "Sobre la Muralla", desc: "Un tramo de la Gran Muralla", n: 1, sub: "Gran Muralla" },
    { id: "museos", icon: "🏺", name: "Historiador", desc: "2 museos", n: 2, sub: "Museo" },
    { id: "opera", icon: "🎭", name: "Noche de ópera", desc: "Una función de ópera de Pekín", n: 1, tag: ["ópera"] },
    { id: "miradores", icon: "🔭", name: "Desde arriba", desc: "3 miradores", n: 3, tag: ["mirador"] },
    { id: "barrios", icon: "🏘️", name: "Explorador de barrios", desc: "Lugares en 5 barrios distintos", n: 5, barrios: true },
    { id: "honorario", icon: "🇨🇳", name: "Pekinés honorario", desc: "20 lugares visitados", n: 20 }
  ],

  /* Nivel de recomendación: 3 = Destacado, 2 = Muy recomendado, 1 = Buena opción.
     Los marcados como destacados en data/pekin-lugares.js ya son 3; el resto es 2 salvo lo que se lista acá. */
  quality: {
    3: ["templo-de-confucio-y-guozijian", "mansion-del-principe-gong", "museo-de-la-capital", "calle-guozijian", "templo-dongyue",
      "da-dong", "king-s-joy", "trb-hutong", "huguosi-xiaochi", "great-leap-brewing", "capital-spirits", "gran-muralla-en-jinshanling", "liulichang"],
    1: ["calle-de-la-comida-de-wangfujing", "silk-street", "haidilao", "quanjude-qianmen", "happy-valley", "gongti", "mercado-de-perlas-de-hongqiao"]
  },
  awards: {},

  /* Dietas. Solo con fuente: la Guía Michelin (guide.michelin.com, leída el 26/11/2026) presenta a King's Joy como cocina vegetariana.
     Detalle en docs/fuentes-pekin.md. */
  diet: {
    "king-s-joy": ["vegetariano"]
  },
  dietFull: ["king-s-joy"],

  /* Lista de preparación del viaje (se tilda y queda guardada en el dispositivo). */
  checklist: [
    { title: "Antes de viajar", items: [
      "Pasaporte con al menos 6 meses de vigencia y una copia en el celular",
      "Revisar si tu pasaporte entra sin visa o si necesitás tramitarla",
      "Completar la tarjeta de llegada por internet en la web de inmigración de China",
      "Seguro de viaje con cobertura médica",
      "Instalar Alipay y WeChat y cargarles tu tarjeta",
      "Instalar DiDi, un mapa que funcione en China y un traductor",
      "Comprar una eSIM de viaje o activar el roaming",
      "Reservar con el pasaporte la Ciudad Prohibida, la plaza de Tiananmen y los museos",
      "Avisar al banco que vas a usar la tarjeta en el exterior",
      "Descargar esta guía antes de salir"
    ] },
    { title: "Al llegar", items: [
      "Pasar por el mostrador \"Beijing Service\" del aeropuerto si necesitás chip o ayuda con los pagos",
      "Probar un pago chico con Alipay o WeChat",
      "Sacar algo de efectivo en billetes chicos",
      "Mirar la calidad del aire del día antes de salir"
    ] }
  ],

  /* Colecciones del inicio: cada una es un filtro de Explorar. */
  collections: [
    { name: "Clásicos de Pekín", icon: "🏯", filter: { q: "clásico" }, cover: "ciudad-prohibida" },
    { name: "Palacios imperiales", icon: "👑", filter: { q: "palacio" }, cover: "palacio-de-verano" },
    { name: "Templos", icon: "🛕", filter: { cat: "ver", sub: "Templos y culto" }, cover: "templo-de-los-lamas" },
    { name: "Museos", icon: "🏺", filter: { cat: "ver", sub: "Museo" }, cover: "museo-nacional-de-china" },
    { name: "Hutongs", icon: "🏮", filter: { q: "vida de barrio" }, cover: "nanluoguxiang" },
    { name: "Pato laqueado", icon: "🦆", filter: { cat: "comer", sub: "Pato laqueado" }, cover: "siji-minfu" },
    { name: "Comida de Pekín", icon: "🥟", filter: { cat: "comer", sub: "Cocina de Pekín" }, cover: "huguosi-xiaochi" },
    { name: "Olla caliente", icon: "🍲", filter: { cat: "comer", sub: "Olla caliente" }, cover: "donglaishun" },
    { name: "La Gran Muralla", icon: "🧱", filter: { q: "muralla" }, cover: "gran-muralla-en-mutianyu" },
    { name: "Pekín gratis", icon: "💸", filter: { prices: [0] }, cover: "plaza-de-tiananmen" },
    { name: "Miradores", icon: "🔭", filter: { q: "mirador" }, cover: "parque-jingshan" },
    { name: "Arte contemporáneo", icon: "🎨", filter: { q: "arte" }, cover: "distrito-de-arte-798" },
    { name: "Ópera y espectáculos", icon: "🎭", filter: { cat: "ocio", sub: "Espectáculos" }, cover: "teatro-liyuan" },
    { name: "Joyas menos conocidas", icon: "💎", filter: { q: "joya oculta" }, cover: "templo-de-confucio-y-guozijian" },
    { name: "Con chicos", icon: "🧒", filter: { q: "chicos" }, cover: "zoologico-de-pekin" },
    { name: "Días de lluvia", icon: "🌧️", filter: { q: "lluvia" }, cover: "museo-nacional-de-china" },
    { name: "Excursiones de un día", icon: "🚄", filter: { cat: "escapadas" }, cover: "tumbas-ming" }
  ],

  /* Zonas para el armado automático de viajes, en orden de prioridad (las dos primeras forman el viaje de un día). */
  zones: [
    { name: "Ciudad Prohibida, Qianmen y Wangfujing", barrios: ["Ciudad Prohibida y Tiananmen", "Qianmen y Templo del Cielo", "Wangfujing y Dongsi"] },
    { name: "Hutongs y lagos", barrios: ["Shichahai y Houhai", "Gulou y Templo de los Lamas"] },
    { name: "Sanlitun y el CBD", barrios: ["Sanlitun", "CBD y Ritan"] },
    { name: "Palacio de Verano", barrios: ["Haidian y Palacio de Verano"] },
    { name: "Parque Olímpico y 798", barrios: ["Parque Olímpico", "798 y Wangjing"] },
    { name: "El oeste: templos y pandas", barrios: ["Xidan y el oeste"] }
  ],
  zonasDosDias: [["Ciudad Prohibida, Qianmen y Wangfujing", [0]], ["Hutongs, lagos y Sanlitun", [1, 2]]],
  zonaChicos: 5,

  /* Palabras que la gente escribe → cómo figura en la guía. */
  synonyms: {
    desayuno: "desayuno", brunch: "café", merienda: "café", cafeteria: "café", vegano: "vegetariano",
    hotel: "hospedaje", hoteles: "hospedaje", dormir: "hospedaje", alojamiento: "hospedaje", hostal: "hostel", siheyuan: "patio",
    ninos: "chicos", nenes: "chicos", familia: "chicos", familias: "chicos", barato: "económico", baratos: "económico", gratuito: "gratis",
    tragos: "cócteles", cocktail: "cócteles", cocktails: "cócteles", boliche: "boliche", discoteca: "boliche", fiesta: "fiesta",
    excursion: "excursiones", escapada: "excursiones", paseo: "paseo", shopping: "compras", souvenirs: "recuerdos", regalos: "regalos",
    lluvia: "lluvia", llueve: "lluvia", techo: "lluvia", vista: "mirador", vistas: "mirador", guia: "tours", guias: "tours", visita: "tours",
    templo: "templo", templos: "templo", temple: "templo", budista: "templo", taoista: "templo", mezquita: "religioso", iglesia: "iglesia",
    pato: "pato", duck: "pato", peking: "pato", laqueado: "pato", dumplings: "jiaozi", empanaditas: "jiaozi", fideos: "fideos", noodles: "fideos",
    hotpot: "olla caliente", fondue: "olla caliente", muralla: "muralla", wall: "muralla", hutong: "vida de barrio", hutongs: "vida de barrio",
    callejones: "vida de barrio", palacio: "palacio", palacios: "palacio", emperador: "palacio", opera: "ópera", acrobacias: "show", kungfu: "show",
    te: "té", tea: "té", seda: "compras", perlas: "compras", antiguedades: "antigüedades", panda: "animales", pandas: "animales",
    jardin: "jardín", jardines: "jardín", lago: "lago", patinar: "patín", hielo: "patín"
  },

  /* Calendario: fechas habituales, a confirmar cada año. m = meses (1-12). */
  events: [
    { m: [1, 2], when: "Enero o febrero", icon: "🧧", name: "Año Nuevo chino", desc: "La fiesta más grande de China: ferias en los templos y parques, como Ditan y la Nube Blanca, faroles rojos y fuegos artificiales. Mucha gente viaja y algunos comercios cierran." },
    { m: [2, 3], when: "Febrero o marzo", icon: "🏮", name: "Fiesta de los Faroles", desc: "El final del Año Nuevo chino, con faroles iluminados y bolitas de arroz dulces (yuanxiao)." },
    { m: [1, 2], when: "Pleno invierno", icon: "⛸️", name: "Patinaje sobre los lagos", desc: "Los lagos de Shichahai y el Palacio de Verano se congelan y se patina, también con trineos de silla." },
    { m: [4], when: "Abril", icon: "🌸", name: "Flores de primavera", desc: "Cerezos en el parque Yuyuantan, tulipanes en el parque Zhongshan y lilas en el Templo Fayuan." },
    { m: [5], when: "Primeros días de mayo", icon: "🧳", name: "Feriado del Día del Trabajo", desc: "Varios días de feriado en todo el país: las atracciones se llenan y las entradas se agotan." },
    { m: [5, 6], when: "Mayo o junio", icon: "🐉", name: "Fiesta del Bote del Dragón", desc: "Se comen zongzi, bolitas de arroz envueltas en hojas, y hay carreras de botes en algunos lagos." },
    { m: [7, 8], when: "Julio y agosto", icon: "🪷", name: "Lotos en flor", desc: "Los estanques del Antiguo Palacio de Verano, Beihai y Shichahai se llenan de flores de loto." },
    { m: [9, 10], when: "Septiembre u octubre", icon: "🥮", name: "Fiesta del Medio Otoño", desc: "La fiesta de la luna llena: se regalan y se comen tortas de luna." },
    { m: [10], when: "1 al 7 de octubre", icon: "🇨🇳", name: "Semana Dorada", desc: "El feriado nacional más largo: Tiananmen se decora con flores y todo el país sale de viaje. Evitá esas fechas si podés." },
    { m: [10, 11], when: "Octubre y noviembre", icon: "🍁", name: "Hojas de otoño", desc: "Las Colinas Fragantes se ponen rojas y los ginkgos de Ditan y Diaoyutai, amarillos." }
  ],

  /* Bloques extra para Info práctica. */
  practicalMore: [
    { icon: "🥢", title: "Comer en China", items: [
      { t: "Cartas con fotos", d: "Muchos restaurantes tienen la carta con fotos o un código QR para pedir desde el celular: señalar está bien." },
      { t: "Para compartir", d: "Los platos se piden para el centro de la mesa. Con uno por persona y un arroz alcanza." },
      { t: "Picante", d: "Si no querés picante, decí \"bú yào là\" (sin picante)." },
      { t: "Sin propina", d: "No se deja propina. Se paga en la caja o escaneando el código de la mesa." }
    ] },
    { icon: "🏥", title: "Salud y farmacias", items: [
      { t: "Emergencias", d: "Ambulancia: 120. Las líneas de emergencia tienen intérpretes gratis." },
      { t: "Hospitales", d: "Los hospitales grandes tienen sectores internacionales con atención en inglés. En Info > Ayuda están en el mapa." },
      { t: "Farmacias", d: "Buscá el cartel 药店 (farmacia). Llevá los remedios que tomás con la receta y la caja original." },
      { t: "Seguro de viaje", d: "Muy recomendable: en los hospitales para extranjeros la atención es cara." }
    ] },
    { icon: "🔍", title: "Cómo elegimos los lugares", items: [
      { t: "Selección", d: "La guía incluye solo lugares con reputación sostenida: distinciones oficiales, guías reconocidas y buen consenso en reseñas públicas." },
      { t: "Niveles", d: "'Destacado' son los mejores de su categoría, 'Muy recomendado' es una apuesta segura y 'Buena opción' cumple bien pero no es imprescindible." },
      { t: "Opiniones al día", d: "En cada ficha, el botón 'Opiniones, horarios y fotos' abre el lugar en Google Maps con su puntaje, reseñas, horarios actualizados y fotos. En China funciona con el roaming de tu país o una eSIM de viaje." },
      { t: "Precios", d: "Usamos niveles ($ a $$$$) en vez de montos porque los precios cambian seguido." }
    ] }
  ],

  /* Fotos: de Wikimedia Commons con licencia libre (ver docs/fuentes-pekin.md). */
  photos: {
    "antiguo-observatorio": "3/3b/Vm-4359-Beijing-Observatory-Guo-Shouking-statue.jpg",
    "templo-zhihua": "b/b0/北京智化寺智化殿2021_(1).jpg",
    "templo-wuta": "f/f3/Zjs.jpg",
    "templo-de-la-gran-campana": "d/d9/Big_Bell_Temple_Entrance.jpg",
    "universidad-de-pekin": "7/7a/PekingUniversityPic6.jpg",
    "parque-taoranting": "d/df/Taoranting_Park_1.jpg",
    "parque-zizhuyuan": "8/81/Bamboopic1.jpg",
    "parque-longtan": "8/86/Longtan_Park_pic_6.jpg",
    "catedral-del-sur": "c/c6/Beijinglifepic3.jpg",
    "iglesia-del-norte": "3/3b/Church_of_the_Saviour,_Beijing.jpg",
    "museo-del-cine-de-china": "b/b6/China_National_Film_Museum_(20240808162205).jpg",
    "museo-lu-xun": "6/64/Luxunguju.JPG",
    "yandai-xiejie": "a/ae/Yandai_Xiejie_4.jpg",
    "puerta-yongdingmen": "9/94/Yongdinggate.jpg",
    "torre-de-deshengmen": "8/89/Deshengmen_Northeast_View2022.jpg",
    "xidan-joy-city": "0/0e/Xidan_Joy_City_(20200827131915).jpg",
    "baoguosi": "e/e1/北京报国寺大殿_正面.jpg",
    "gongmei-dasha": "2/27/Gongmei_Emporium_(20230313144940).jpg",
    "parque-shougang": "4/4c/Shougang_International_Convention_and_Exhibition_Center_during_CIFTIS_2024_(20240916125402).jpg",
    "parque-badachu": "0/0b/Lingguang_Temple,_Badachu_(20250427095256).jpg",
    "centro-de-artes-de-tianqiao": "1/19/Beijing_Tianqiao_Performing_Arts_Center_(20230302094256).jpg",
    "sala-de-conciertos-de-pekin": "4/4a/Beijing_concert_hall_04_sep_2010.jpg",
    "teatro-poly": "4/49/Entrance_of_Poly_Theatre_(20200323173601).jpg",
    "museo-del-ferrocarril-de-china": "1/12/China_Railway_Museum,_Zhengyangmen_(20220415175928).jpg",
    "museo-geologico-de-china": "4/49/Before_the_Geological_Museum_of_China.jpg",
    "museo-de-paleozoologia": "6/6e/Paleozoological_Museum_of_China.jpg",
    "nanshan": "9/99/Nanshan_Ski_Village_20-JAN-2008.JPG",
    "libreria-sanlian": "0/03/Sanlian_Taofen_Bookstore_(20200924181744).jpg",
    "acuario-de-pekin": "5/5f/North_gate_of_Beijing_Aquarium_(20190626174439).jpg",
    "barco-en-el-lago-kunming": "5/55/Yiheyuan_Kunminghu_Jul2004.jpg",
    "calle-de-la-comida-de-wangfujing": "9/90/Entrance_of_277_Wangfujing_St_(20210601093824).jpg",
    "calle-guozijian": "8/89/Guozijian_Street_East_Entrance.jpg",
    "calle-huguosi": "2/22/Huguosi_St_from_the_west_(20231006164023).jpg",
    "casa-de-te-lao-she": "3/3f/Laoshe_Teahouse_(20200904130159).jpg",
    "catedral-de-san-jose": "3/31/St._Joseph's_Cathedral,_Beijing.JPG",
    "ciudad-prohibida": "2/23/Hall_of_Supreme_Harmony_(20241127120000).jpg",
    "colinas-fragantes": "f/f7/北京，香山红叶_-_panoramio.jpg",
    "cuandixia": "a/a4/Cuandixia_Village.jpg",
    "cubo-de-agua": "b/bc/Watercube_night.jpg",
    "dashilan": "8/89/Dashala_Enterance_2010.jpg",
    "distrito-de-arte-798": "8/87/Space-gallery_798-art-district.jpg",
    "edificio-de-la-cctv": "d/df/Guanghua_Road_Office_Area_of_CMG_(20240907141412).jpg",
    "estadio-nacional-nido-de-pajaro": "3/32/Beijing_National_Stadium_from_the_Central_Axis_(20220905140702).jpg",
    "estadio-wukesong": "b/bb/Cadillac_Arena_(20211011164821).jpg",
    "galaxy-soho": "f/fa/Galaxy_SOHO+.jpg",
    "gran-muralla-en-badaling": "c/c4/GreatWall_Badaling.jpg",
    "gran-muralla-en-mutianyu": "f/fa/Great_Wall_of_China_July_2006.JPG",
    "gran-teatro-nacional": "a/a3/National_Centre_for_the_Performing_Arts.jpg",
    "grand-hyatt-beijing": "4/47/Grand_Hyatt_Beijing_1.jpg",
    "great-leap-brewing": "a/a6/Great_Leap_Brewing_sign.jpg",
    "gubei": "f/f8/Gubei_water_village_from_Simatai_Great_Wall_in_Beijing_-_panoramio.jpg",
    "happy-valley": "b/ba/Happy_Valley_Beijing_-_29372010596.jpg",
    "mansion-del-principe-gong": "d/db/Gongwangfu.JPG",
    "mausoleo-de-mao": "2/29/62930-Beijing-Tiananmen-Square_(28609067112).jpg",
    "mercado-de-perlas-de-hongqiao": "7/7e/Hongqiao_Market_(20200803133253).jpg",
    "mezquita-de-niujie": "5/5a/Niujie_Mosque_-_CIMG3716.JPG",
    "museo-de-ciencia-y-tecnologia-de-china": "e/ee/China_Science_and_Technology_Museum_(20210403155720).jpg",
    "museo-de-historia-natural-de-pekin": "4/4a/Beijing_Museum_of_Natural_History_2.jpg",
    "museo-de-la-capital": "3/36/Capital_Museum_in_Beijing.jpg",
    "museo-militar": "a/ab/Military_Museum_of_the_Chinese_People's_Revolution_201709.jpg",
    "museo-nacional-de-arte-de-china": "3/36/National_Art_Museum_of_China_(20211212161924).jpg",
    "museo-nacional-de-china": "0/08/62684-Beijing-Tiananmen-Square_(28609003992).jpg",
    "nanluoguxiang": "8/86/Nanluogu_Xiang_(6230757826).jpg",
    "ovalo-nacional-de-patinaje": "6/69/National_Speed_Skating_Oval_Beijing_2.jpg",
    "panjiayuan": "6/6d/Panjiayuan_Market_Beijing_China.jpg",
    "parque-beihai": "e/eb/Beihai_Park.jpg",
    "parque-chaoyang": "a/aa/South_gate_of_Chaoyang_Park_20240818154413.jpg",
    "parque-del-bosque-olimpico": "f/fd/Olmypic_Forest_Park_in_Summer,_riverbank,_Beijing,_Jun_2016.jpg",
    "parque-jingshan": "9/9c/Jingshan_from_the_southwest_(20211107141052).jpg",
    "parque-yuyuantan": "0/02/Yuyuantan_Park_2010.jpg",
    "parque-zhongshan": "b/be/北京社稷坛中山堂2018.jpg",
    "plaza-de-tiananmen": "9/99/Tian'anmen_from_the_square_(20200825114150).jpg",
    "puente-de-marco-polo": "7/7a/Lugouqiao2.jpg",
    "qianmen-jianguo": "e/e9/Qianmen_Jianguo_Hotel_(20240319155504).jpg",
    "rosewood-beijing": "1/15/Jing_Guang_Centre_(20200724111340).jpg",
    "shichahai-y-houhai": "a/a8/Beijing_Shichahai_1.jpg",
    "skp-beijing": "8/81/SKP_Beijing_(20180415180620).jpg",
    "taikoo-li-sanlitun": "e/ee/三里屯太古里南区.jpg",
    "templo-de-la-nube-blanca": "0/0d/WhiteCloudpic1.jpg",
    "templo-de-los-lamas": "9/98/Pavillon_des_dix_mille_bonheurs.jpg",
    "templo-del-cielo": "5/5f/Temple_of_Heaven_20160323_01.jpg",
    "templo-fayuan": "4/40/Fa_yuan_temple02.jpg",
    "templo-jietai": "e/ed/Jietai_Temple_(20150117134744).JPG",
    "templo-miaoying": "1/18/White_Dagoba_temple_-_Beijing_-_2010.jpg",
    "templo-tanzhe": "e/e7/Tanzhe_Si.jpg",
    "the-peninsula-beijing": "f/f5/The_Peninsula_Beijing_in_2017.jpg",
    "tianjin": "4/40/原意大利驻天津领事馆.jpg",
    "tumbas-ming": "8/8c/Mingchangling201910.jpg",
    "ucca-center-for-contemporary-art": "2/27/Ullens_Center_for_Contemporary_Art_(UCCA).jpg",
    "universal-beijing-resort": "3/3d/Universal_Studios_Beijing_globe_square_(20210907121340).jpg",
    "wangfujing": "5/5d/2016-08-07_WangFuJing_Fußgängerzone_anagoria.jpg",
    "wangjing-soho": "5/51/Wangjing_SOHO,_Beijing.jpg",
    "yaoji-chaogan": "7/78/Yaoji_Chaogan_Restaurant_(20201105155735).jpg",
    "zhengyangmen": "a/aa/Tiananmen_Square3.jpg",
    "zoologico-de-pekin": "a/a0/Gate_of_Beijing_Zoo_(20210219172711).jpg",
  },

  /* Estaciones de metro por línea (los nombres de pekin.js), para "la estación más cercana" en cada ficha.
     Estaciones de OpenStreetMap (26/11/2026), según las relaciones de cada línea del metro de Pekín, con su nombre en inglés. */
  stations: {
    "Línea 1": [["Babaoshan", 39.90622, 116.22968], ["Bajiao Amusement Park", 39.90617, 116.20649], ["Baliqiao", 39.90509, 116.61278], ["Communication University of China", 39.90807, 116.54884], ["Dawanglu", 39.90700, 116.46949], ["Dongdan", 39.90696, 116.41397], ["Fushouling", 39.93856, 116.16497], ["Fuxingmen", 39.90588, 116.35132], ["Gaobeidian", 39.90827, 116.52554], ["Gongzhufen", 39.90622, 116.30412], ["Guaanzhuang", 39.90810, 116.59314], ["Gucheng", 39.90615, 116.18430], ["Guomao", 39.90709, 116.45329], ["Guoyuan", 39.89230, 116.64076], ["Huazhuang", 39.85534, 116.68918], ["Jianguomen", 39.90721, 116.42872], ["Jiukeshu", 39.88918, 116.65163], ["Linheli", 39.87431, 116.67287], ["Liyuan", 39.88256, 116.66274], ["Military Museum", 39.90619, 116.31782], ["Muxidi", 39.90616, 116.33150], ["Nanlishi Lu", 39.90592, 116.34657], ["Pingguoyuan", 39.92485, 116.17196], ["Shuangqiao", 39.90909, 116.57098], ["Sihui", 39.90771, 116.48939], ["Sihui East", 39.90724, 116.50948], ["Tian'anmen East", 39.90641, 116.39491], ["Tian'anmen West", 39.90604, 116.38516], ["Tongzhou Beiyuan", 39.90272, 116.63144], ["Tuqiao", 39.87077, 116.68028], ["Universal Resort", 39.84808, 116.67352], ["Wangfujing", 39.90671, 116.40517], ["Wanshoulu", 39.90626, 116.28877], ["Wukesong", 39.90626, 116.26803], ["Xidan", 39.90583, 116.36992], ["Yonganli", 39.90714, 116.44415], ["Yuquanlu", 39.90623, 116.24690]],
    "Línea 2": [["Andingmen", 39.94761, 116.40207], ["Beijing Railway", 39.90364, 116.42094], ["Changchunjie", 39.89811, 116.35721], ["Chaoyangmen", 39.92305, 116.42830], ["Chegongzhuang", 39.93101, 116.34974], ["Chongwenmen", 39.89974, 116.41070], ["Dongsi Shitiao", 39.93229, 116.42792], ["Dongzhimen", 39.93970, 116.42761], ["Fuchengmen", 39.92231, 116.35013], ["Fuxingmen", 39.90583, 116.35056], ["Gulou Dajie", 39.94748, 116.38792], ["Hepingmen", 39.89876, 116.37799], ["Jianguomen", 39.90717, 116.42949], ["Jishuitan", 39.94727, 116.36706], ["Qianmen", 39.89878, 116.39086], ["Xizhimen", 39.93914, 116.34940], ["Xuanwumen", 39.89845, 116.36803], ["Yonghegong Lama Temple", 39.94787, 116.41155]],
    "Línea 3": [["Chaoyang Park", 39.93248, 116.47340], ["Chaoyang Railway", 39.94300, 116.49983], ["Dongba", 39.96465, 116.54128], ["Dongbabei", 39.97473, 116.55193], ["Dongbanan", 39.95079, 116.54107], ["Dongsi Shitiao", 39.93231, 116.42802], ["Shifoying", 39.93422, 116.49341], ["Tuanjiehu", 39.93243, 116.45546], ["Workers' Stadium", 39.93241, 116.44485], ["Yaojiayuan", 39.94667, 116.52128]],
    "Línea 4": [["Anheqiaobei", 40.01103, 116.26403], ["Beigongmen", 40.00124, 116.27138], ["Beijing South Railway", 39.86353, 116.37290], ["Beijing Zoo", 39.93697, 116.33273], ["Biomedical Base", 39.68512, 116.31563], ["Caishikou", 39.88790, 116.36834], ["Gaomidian North", 39.77303, 116.32438], ["Gaomidian South", 39.76228, 116.32558], ["Gongyixiqiao", 39.83527, 116.36482], ["Haidian Huangzhuang", 39.97472, 116.31163], ["Huangcun Railway", 39.72150, 116.32661], ["Huangcun Xidajie", 39.73042, 116.32648], ["Jiaomen West", 39.84440, 116.36508], ["Lingjing Hutong", 39.91489, 116.36736], ["Majiapu", 39.85163, 116.36532], ["National Library", 39.94178, 116.31922], ["Peking University East Gate", 39.99075, 116.30982], ["Ping'anli", 39.93226, 116.36660], ["Qingyuanlu", 39.74175, 116.32625], ["Renmin University", 39.96573, 116.31583], ["Taoranting", 39.87745, 116.36831], ["Tiangongyuan", 39.66899, 116.31387], ["Weigongcun", 39.95629, 116.31729], ["Xidan", 39.90575, 116.36774], ["Xihongmen", 39.78839, 116.32265], ["Xin'Gong", 39.81116, 116.35926], ["Xinjiekou", 39.93947, 116.36136], ["Xisi", 39.92256, 116.36692], ["Xiyuan", 39.99675, 116.28556], ["Xizhimen", 39.93917, 116.34932], ["Xuanwumen", 39.89839, 116.36813], ["Yihezhuang", 39.71110, 116.31298], ["Yuanmingyuan Park", 39.99833, 116.30366], ["Zaoyuan", 39.75180, 116.32592], ["Zhongguancun", 39.98263, 116.31047]],
    "Línea 5": [["Beixinqiao", 39.93941, 116.41080], ["Beiyuanlu North", 40.02902, 116.41187], ["Chongwenmen", 39.89949, 116.41227], ["Ciqikou", 39.89170, 116.41254], ["Datunlu East", 40.00254, 116.41102], ["Dengshikou", 39.91541, 116.41174], ["Dongdan", 39.90687, 116.41225], ["Dongsi", 39.92307, 116.41157], ["East Gate of Temple of Heaven", 39.88226, 116.41448], ["Heping Xiqiao", 39.96668, 116.41171], ["Hepingli Beijie", 39.95739, 116.41215], ["Huixinxijie Beikou", 39.98618, 116.41089], ["Huixinxijie Nankou", 39.97596, 116.41127], ["Lishuiqiao", 40.05164, 116.40615], ["Lishuiqiao South", 40.04049, 116.40828], ["Liujiayao", 39.85594, 116.41553], ["Puhuangyu", 39.86412, 116.41536], ["Songjiazhuang", 39.84436, 116.42201], ["Tiantongyuan", 40.07378, 116.40661], ["Tiantongyuan North", 40.08209, 116.40675], ["Tiantongyuan South", 40.06513, 116.40649], ["Yonghegong Lama Temple", 39.94697, 116.41008], ["Zhangzizhong Lu", 39.93229, 116.41121]],
    "Línea 6": [["Baishi Bridge South", 39.93130, 116.31860], ["Beihai North", 39.93183, 116.38021], ["Beiyunhe East", 39.90221, 116.70182], ["Beiyunhe West", 39.90184, 116.68222], ["Caofang", 39.92358, 116.61027], ["Changying", 39.92436, 116.59363], ["Chaoyangmen", 39.92315, 116.42741], ["Chegongzhuang", 39.93110, 116.34863], ["Chegongzhuang West", 39.93110, 116.33799], ["Cishousi", 39.93171, 116.28858], ["Dalianpo", 39.92270, 116.55835], ["Dongdaqiao", 39.92152, 116.44555], ["Dongsi", 39.92304, 116.41025], ["Dongxiayuan", 39.90226, 116.72744], ["Erligou", 39.93112, 116.32731], ["Haidian Wuluju", 39.93144, 116.27089], ["Haojiafu", 39.90218, 116.71136], ["Huangqu", 39.92289, 116.57305], ["Huayuanqiao", 39.93118, 116.30411], ["Hujialou", 39.92197, 116.45552], ["Jin'anqiao", 39.92201, 116.15664], ["Jintailu", 39.92171, 116.47248], ["Liaogong Zhuang", 39.93149, 116.22088], ["Lucheng", 39.90163, 116.74192], ["Luyang", 39.88882, 116.75131], ["Nanluogu Xiang", 39.93170, 116.39671], ["Ping'anli", 39.93136, 116.36517], ["Pingguoyuan", 39.92442, 116.17129], ["Qingnianlu", 39.92179, 116.51111], ["Shilipu", 39.92171, 116.49595], ["Tian Cun", 39.92845, 116.24689], ["Tongyun Men", 39.91003, 116.66701], ["Tongzhou Beiguan", 39.91747, 116.65560], ["Wuzixueyuanlu", 39.92596, 116.63350], ["Xihuang Cun", 39.93257, 116.20062], ["Yang Zhuang", 39.92651, 116.17955]],
    "Línea 7": [["Baiziwan", 39.89144, 116.49004], ["Beijing Happy Valley", 39.86565, 116.49316], ["Beijing West Railway", 39.89354, 116.31514], ["Caishikou", 39.88803, 116.36749], ["Ciqikou", 39.89179, 116.41261], ["Daguanying", 39.88828, 116.33171], ["Dajiaoting", 39.89223, 116.48135], ["Fatou", 39.85964, 116.50571], ["Gaoloujin", 39.86167, 116.67953], ["Guangqumen Nei", 39.89235, 116.42773], ["Guangqumen Wai", 39.89237, 116.44305], ["Heizhuanghu", 39.85776, 116.59277], ["Huagong", 39.88401, 116.49759], ["Huangchang", 39.84802, 116.54752], ["Huazhuang", 39.85539, 116.68900], ["Hufangqiao", 39.88846, 116.37738], ["Inner Guang'anmen", 39.88867, 116.35174], ["Jiaohuachang", 39.85434, 116.53165], ["Jiulongshan", 39.89194, 116.47143], ["Langxinzhuang", 39.85557, 116.56409], ["Nanlouzizhuang", 39.87333, 116.49555], ["Qiaowan", 39.89132, 116.40132], ["Qunfang", 39.86237, 116.66471], ["Shuanghe", 39.85824, 116.52236], ["Shuangjing", 39.89214, 116.45523], ["Universal Resort", 39.84811, 116.67352], ["Wansheng East", 39.86238, 116.65091], ["Wansheng West", 39.86246, 116.62671], ["Wanzi", 39.88897, 116.32136], ["Zhushikou", 39.88977, 116.39126]],
    "Línea 8": [["Andeli Beijie", 39.95557, 116.38861], ["Anhuaqiao", 39.96712, 116.38854], ["Beitucheng", 39.97640, 116.38806], ["China Art Museum", 39.92355, 116.40464], ["Dahongmen", 39.84350, 116.39451], ["Dahongmen Nan", 39.83611, 116.39491], ["Demao", 39.77170, 116.43510], ["Donggao Di", 39.80384, 116.40236], ["Forest Park South Gate", 40.00920, 116.38652], ["Gulou Dajie", 39.94673, 116.38769], ["Haihu Tun", 39.85119, 116.39410], ["Heyi", 39.81410, 116.39592], ["Huilongguan Dongdajie", 40.07972, 116.35731], ["Huojian Wanyuan", 39.79850, 116.41243], ["Huoying", 40.07044, 116.35394], ["Jinyu Hutong", 39.91525, 116.40500], ["Lincuiqiao", 40.02067, 116.36679], ["Muxi Yuan", 39.85871, 116.39335], ["Nanluogu Xiang", 39.93235, 116.39769], ["Olympic Park", 39.99933, 116.38697], ["Olympic Sports Center", 39.98414, 116.38769], ["Outer Yongdingmen", 39.86528, 116.39313], ["Pingxifu", 40.08871, 116.34429], ["Qianmen", 39.89756, 116.39406], ["Shichahai", 39.93595, 116.39009], ["Tianqiao", 39.88118, 116.39259], ["Wangfujing", 39.90839, 116.40533], ["Wufu Tang", 39.78417, 116.41692], ["Xixiaokou", 40.04608, 116.34522], ["Yinghai", 39.75989, 116.44277], ["Yongtaizhuang", 40.03669, 116.34840], ["Yuxin", 40.05835, 116.34118], ["Yuzhilu", 40.08654, 116.32044], ["Zhushikou", 39.88910, 116.39231], ["Zhuxinzhuang", 40.10300, 116.30764]],
    "Línea 10": [["Agricultural Exhibition Center", 39.94025, 116.45636], ["Anzhenmen", 39.97581, 116.39918], ["Bagou", 39.97332, 116.28752], ["Beitucheng", 39.97575, 116.38796], ["Caoqiao", 39.84456, 116.34541], ["Capital University of Economics & Business", 39.84314, 116.31414], ["Changchunqiao", 39.95738, 116.28799], ["Chedaogou", 39.94516, 116.28781], ["Chengshousi", 39.84452, 116.44215], ["Cishousi", 39.93208, 116.28930], ["Dahongmen", 39.84395, 116.39348], ["Fengtaizhan", 39.84903, 116.29830], ["Fenzhongsi", 39.85069, 116.44761], ["Gongzhufen", 39.90619, 116.30348], ["Guomao", 39.90788, 116.45599], ["Haidian Huangzhuang", 39.97473, 116.31152], ["Huixinxijie Nankou", 39.97569, 116.41124], ["Hujialou", 39.92198, 116.45575], ["Huoqiying", 39.96423, 116.28342], ["Jiandemen", 39.97514, 116.37494], ["Jiaomen East", 39.84380, 116.37891], ["Jiaomen West", 39.84443, 116.36504], ["Jijiaomiao", 39.84313, 116.32735], ["Jinsong", 39.88312, 116.45526], ["Jintaixizhao", 39.91595, 116.45584], ["Liangmaqiao", 39.94814, 116.45638], ["Lianhuaqiao", 39.89619, 116.30421], ["Liuliqiao", 39.87883, 116.29672], ["Mudanyuan", 39.97496, 116.36308], ["Niwa", 39.85720, 116.29815], ["Panjiayuan", 39.87490, 116.45508], ["Sanyuanqiao", 39.95976, 116.45142], ["Shaoyaoju", 39.97577, 116.43161], ["Shilihe", 39.86444, 116.45293], ["Shiliuzhuang", 39.84445, 116.40742], ["Shuangjing", 39.89217, 116.45534], ["Songjiazhuang", 39.84464, 116.42242], ["Suzhoujie", 39.97439, 116.30019], ["Taiyanggong", 39.97135, 116.44122], ["Tuanjiehu", 39.93224, 116.45587], ["Xidiaoyutai", 39.92178, 116.29166], ["Xiju", 39.86429, 116.29779], ["Xitucheng", 39.97495, 116.34776], ["Zhichun Lu", 39.97523, 116.33579], ["Zhichunli", 39.97500, 116.32293]],
    "Línea 13": [["Beiyuan", 40.04164, 116.42832], ["Dazhongsi", 39.96527, 116.33900], ["Dongzhimen", 39.94163, 116.42860], ["Guangximen", 39.96699, 116.42567], ["Huilongguan", 40.06953, 116.32991], ["Huoying", 40.06918, 116.35455], ["Lishuiqiao", 40.05143, 116.40505], ["Liufang", 39.95681, 116.42664], ["Longze", 40.06959, 116.31319], ["Qinghe Railway", 40.03976, 116.30864], ["Shangdi", 40.03176, 116.31407], ["Shaoyaoju", 39.97625, 116.42972], ["Wangjing West", 39.99359, 116.44116], ["Wudaokou", 39.99158, 116.33168], ["Xi'erqi", 40.05175, 116.30024], ["Xizhimen", 39.94028, 116.34697], ["Zhichun Lu", 39.97514, 116.33385]],
    "Línea 14": [["Beijing South Railway", 39.86358, 116.37255], ["Beijing University of Technology West Gate", 39.87364, 116.47130], ["Caihuying", 39.86633, 116.33667], ["Chaoyang Park", 39.93195, 116.47237], ["Dajing", 39.86407, 116.26895], ["Dawanglu", 39.90735, 116.47193], ["Dawayao", 39.85835, 116.23444], ["Dongfeng Beiqiao", 39.95827, 116.47893], ["Dongguantou", 39.86618, 116.31443], ["Donghuqu", 40.00913, 116.46108], ["Fangzhuang", 39.86467, 116.43395], ["Futong", 39.99024, 116.46555], ["Garden Expo Park", 39.86006, 116.19577], ["Guozhuangzi", 39.86410, 116.24835], ["Hongmiao", 39.91457, 116.47206], ["Jiangtai", 39.96950, 116.48400], ["Jingfengmen", 39.86145, 116.36009], ["Jingtai", 39.86371, 116.40494], ["Jintailu", 39.92189, 116.47229], ["Jiulongshan", 39.89252, 116.47165], ["Laiguangying", 40.01922, 116.46069], ["Lize Business District", 39.86634, 116.32489], ["Outer Yongdingmen", 39.86601, 116.39321], ["Pingleyuan", 39.88385, 116.47131], ["Puhuangyu", 39.86442, 116.41695], ["Qilizhuang", 39.86512, 116.28590], ["Shan'gezhuang", 40.02653, 116.47255], ["Shilihe", 39.86522, 116.45200], ["Wangjing", 39.99773, 116.46198], ["Wangjing South", 39.98295, 116.47595], ["Xiju", 39.86539, 116.29932], ["Xitieying", 39.86006, 116.34970], ["Zaoying", 39.94293, 116.46894], ["Zhangguozhuang", 39.85679, 116.18092]],
    "Línea 15": [["Anlilu", 40.00112, 116.40161], ["Beishatan", 40.00006, 116.36205], ["China International Exhibition Center", 40.06890, 116.54946], ["Cuigezhuang", 40.02057, 116.48684], ["Datunlu East", 40.00149, 116.41247], ["Fengbo", 40.13128, 116.67889], ["Guanzhuang", 39.99969, 116.42511], ["Houshayu", 40.11298, 116.55854], ["Hualikan", 40.08334, 116.55194], ["Liudaokou", 39.99960, 116.34664], ["Maquanying", 40.03242, 116.49819], ["Nanfaxin", 40.12735, 116.60358], ["Olympic Park", 40.00077, 116.38533], ["Qinghua Donglu Xikou", 39.99930, 116.33363], ["Shimen", 40.12857, 116.63522], ["Shunyi", 40.12874, 116.65117], ["Sunhe", 40.04390, 116.52890], ["Wangjing", 39.99665, 116.46343], ["Wangjing East", 40.00191, 116.48082], ["Wangjing West", 39.99468, 116.44388]],
    "Línea 16": [["Beianhe", 40.06682, 116.12442], ["Daguanying", 39.89032, 116.32860], ["Daoxianghulu", 40.06744, 116.18227], ["Dongguantou South", 39.85334, 116.31698], ["Erligou", 39.93118, 116.32749], ["Fengtai Nanlu", 39.83958, 116.29069], ["Fengtai Railway", 39.84963, 116.29608], ["Fufengqiao", 39.83501, 116.28109], ["Ganjia Kou", 39.92245, 116.32841], ["Honglian Nanlu", 39.87620, 116.33071], ["Hongtaizhuang", 39.84750, 116.24298], ["Kandan", 39.83386, 116.26654], ["Lize Business District", 39.86585, 116.32553], ["Malianwa", 40.03146, 116.26562], ["Muxidi", 39.90771, 116.32765], ["National Library", 39.94044, 116.31736], ["Nongda Nanlu", 40.01836, 116.27691], ["Suzhou Qiao", 39.96194, 116.30133], ["Suzhoujie", 39.97440, 116.29991], ["Tundian", 40.06726, 116.20932], ["Wanpingcheng", 39.84780, 116.22338], ["Wanquanhe Qiao", 39.98387, 116.29427], ["Wanshousi", 39.94713, 116.30325], ["Wenyanglu", 40.06744, 116.15557], ["Xibeiwang", 40.04789, 116.25201], ["Xiyuan", 39.99749, 116.28623], ["Yongfeng", 40.07061, 116.23248], ["Yongfeng South", 40.06300, 116.24347], ["Yushuzhuang", 39.83757, 116.25307], ["Yuyuantan Park East Gate", 39.91395, 116.32875]],
    "Expreso Aeropuerto Capital": [["Beixinqiao", 39.93968, 116.41193], ["Capital Airport Terminal 2", 40.07801, 116.58713], ["Capital Airport Terminal 3", 40.05176, 116.60969], ["Dongzhimen", 39.94002, 116.42952], ["Sanyuanqiao", 39.96004, 116.45082]],
    "Expreso Aeropuerto Daxing": [["Caoqiao", 39.84613, 116.34248], ["Daxing Airport", 39.51250, 116.41072], ["Daxing Xincheng", 39.73413, 116.35959]]
  }
};
