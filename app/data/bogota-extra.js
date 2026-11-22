/* Datos complementarios de Bogotá (tarjeta #204): sellos del pasaporte, niveles de recomendación, dietas, días de cierre,
   colecciones, zonas para armar viajes, calendario, fotos y estaciones.
   Las claves son los ids de los lugares (nombre en minúsculas, sin acentos, con guiones). */
window.CITY_EXTRA = window.CITY_EXTRA || {};
window.CITY_EXTRA.bogota = {
  tz: "America/Bogota",

  /* Pasaporte de Bogotá: sellos que se ganan marcando "Ya fui" en los lugares. Mismo formato que data/caba-extra.js. */
  stamps: [
    { id: "primer-paso", icon: "👣", name: "Primer paso", desc: "Visitá tu primer lugar", n: 1 },
    { id: "imperdibles", icon: "🏛️", name: "Lo esencial", desc: "5 imperdibles destacados", n: 5, cat: "ver", q: 3 },
    { id: "museos", icon: "🏺", name: "De museo en museo", desc: "3 museos", n: 3, sub: "Museo" },
    { id: "cafe", icon: "☕", name: "Tinto y café de origen", desc: "2 cafés", n: 2, sub: "Café y pastelería" },
    { id: "colombiana", icon: "🍲", name: "Sabor colombiano", desc: "2 lugares de cocina colombiana", n: 2, sub: "Cocina colombiana" },
    { id: "mercados", icon: "🧺", name: "Plaza de mercado", desc: "Un mercado", n: 1, tag: ["mercado"] },
    { id: "salsa", icon: "💃", name: "A bailar salsa", desc: "Un bar de salsa", n: 1, sub: "Salsa" },
    { id: "cerros", icon: "⛰️", name: "En los cerros", desc: "2 lugares en la montaña", n: 2, tag: ["mirador", "sendero"] },
    { id: "noche", icon: "🍸", name: "Trasnochador", desc: "2 salidas de noche", n: 2, cat: "noche" },
    { id: "escapada", icon: "🚌", name: "Escapada", desc: "Una excursión fuera de la ciudad", n: 1, cat: "escapadas" },
    { id: "barrios", icon: "🏘️", name: "Explorador de barrios", desc: "Lugares en 5 barrios distintos", n: 5, barrios: true },
    { id: "honorario", icon: "🇨🇴", name: "Rolo honorario", desc: "20 lugares visitados", n: 20 }
  ],

  /* Nivel de recomendación: 3 = Destacado, 2 = Muy recomendado, 1 = Buena opción.
     Los marcados como destacados en data/bogota-lugares.js ya son 3; el resto es 2 salvo lo que se lista acá. */
  quality: {
    3: ["museo-nacional-de-colombia", "biblioteca-luis-angel-arango", "iglesia-de-san-francisco", "teatro-colon", "el-chato", "leo",
      "mesa-franca", "prudencia", "cafe-san-alberto", "el-goce-pagano", "villa-de-leyva", "teatro-mayor-julio-mario-santo-domingo"],
    1: ["torre-colpatria", "centro-comercial-santafe", "unicentro", "divercity", "zona-t", "theatron", "parque-deportivo-el-salitre"]
  },
  awards: {},

  /* Dietas. Solo con fuente: OpenStreetMap ("diet:vegan=only", 18/11/2026), que marca estos locales como 100 % veganos.
     Detalle en docs/fuentes-bogota.md. */
  diet: {
    "herbivoro-cocina-vegana": ["vegano", "vegetariano"], "gori-san": ["vegano", "vegetariano"], "frambuesa": ["vegano", "vegetariano"],
    "maha-vegan-food": ["vegano", "vegetariano"]
  },
  dietFull: ["herbivoro-cocina-vegana", "gori-san", "frambuesa", "maha-vegan-food"],

  /* Días que abren o cierran (0 = domingo … 6 = sábado). Solo los días fijos y conocidos; pueden cambiar en feriados.
     Los mercados de pulgas y la Ciclovía también funcionan los feriados. */
  only: {
    "mercado-de-pulgas-de-usaquen": [0], "mercado-de-pulgas-san-alejo": [0], "ciclovia": [0]
  },

  /* Lista de preparación del viaje (se tilda y queda guardada en el dispositivo). */
  checklist: [
    { title: "Antes de viajar", items: [
      "Pasaporte vigente y una copia en el celular",
      "Seguro de viaje con cobertura médica",
      "Adaptador de enchufe tipo A o B, el de patas planas (110 V)",
      "Avisar al banco que vas a usar la tarjeta en el exterior",
      "Ropa en capas: abrigo para la noche, campera de lluvia y protector solar",
      "Descargar esta guía y los mapas de Google sin conexión"
    ] },
    { title: "Al llegar", items: [
      "Tomar el taxi de la fila oficial del aeropuerto, con el papel de la tarifa",
      "Comprar un chip prepago o activar la eSIM",
      "Ir despacio el primer día por la altura y tomar mucha agua",
      "Comprar la tarjeta TuLlave si vas a usar TransMilenio"
    ] }
  ],

  /* Colecciones del inicio: cada una es un filtro de Explorar. */
  collections: [
    { name: "Museos", icon: "🏺", filter: { cat: "ver", sub: "Museo" }, cover: "museo-del-oro" },
    { name: "Clásicos de Bogotá", icon: "🏛️", filter: { q: "clásico" }, cover: "monserrate" },
    { name: "Bogotá gratis", icon: "💸", filter: { prices: [0] }, cover: "plaza-de-bolivar" },
    { name: "Historia y La Candelaria", icon: "📜", filter: { q: "historia" }, cover: "la-candelaria" },
    { name: "Miradores y cerros", icon: "⛰️", filter: { q: "mirador" }, cover: "monserrate" },
    { name: "Cocina colombiana", icon: "🍲", filter: { q: "comida colombiana" }, cover: "la-puerta-falsa" },
    { name: "Café de especialidad", icon: "☕", filter: { q: "café" }, cover: "cafe-san-alberto" },
    { name: "Plazas de mercado", icon: "🧺", filter: { q: "mercado" }, cover: "mercado-de-paloquemao" },
    { name: "Salsa y rumba", icon: "💃", filter: { q: "bailar" }, cover: "el-goce-pagano" },
    { name: "Cocina de autor", icon: "👩‍🍳", filter: { q: "cocina de autor" }, cover: "el-chato" },
    { name: "Parques", icon: "🌳", filter: { cat: "ver", sub: "Naturaleza" }, cover: "parque-simon-bolivar" },
    { name: "Joyas menos conocidas", icon: "💎", filter: { q: "joya oculta" }, cover: "iglesia-de-san-francisco" },
    { name: "Con chicos", icon: "🧒", filter: { q: "chicos" }, cover: "maloka" },
    { name: "Días de lluvia", icon: "🌧️", filter: { q: "lluvia" }, cover: "museo-nacional-de-colombia" },
    { name: "Excursiones de un día", icon: "🚌", filter: { cat: "escapadas" }, cover: "catedral-de-sal-de-zipaquira" }
  ],

  /* Zonas para el armado automático de viajes, en orden de prioridad (las dos primeras forman el viaje de un día). */
  zones: [
    { name: "La Candelaria, el centro y Monserrate", barrios: ["La Candelaria", "Centro", "Macarena y Centro Internacional", "Montaña y cerros"] },
    { name: "Chapinero y la Zona G", barrios: ["Chapinero", "Zona G", "Teusaquillo"] },
    { name: "Zona Rosa y Parque de la 93", barrios: ["Zona Rosa y Zona T", "Parque de la 93"] },
    { name: "Usaquén", barrios: ["Usaquén"] },
    { name: "Los grandes parques", barrios: ["Salitre y Simón Bolívar"] }
  ],
  zonasDosDias: [["La Candelaria y Monserrate", [0]], ["Chapinero, Zona Rosa y Usaquén", [1, 2, 3]]],
  zonaChicos: 4,

  /* Palabras que la gente escribe → cómo figura en la guía. */
  synonyms: {
    desayuno: "cafe", brunch: "cafe", merienda: "cafe", onces: "cafe", tinto: "cafe", cafeteria: "cafe", vegano: "vegetariano",
    hotel: "hospedaje", hoteles: "hospedaje", dormir: "hospedaje", alojamiento: "hospedaje", hostal: "hostel",
    ninos: "chicos", nenes: "chicos", familia: "chicos", familias: "chicos", barato: "economico", baratos: "economico", gratuito: "gratis",
    tragos: "cocteles", cocktail: "cocteles", cocktails: "cocteles", boliche: "bailar", discoteca: "bailar", rumba: "bailar", salsa: "salsa",
    excursion: "excursiones", escapada: "excursiones", paseo: "caminar", shopping: "compras", souvenirs: "recuerdos", regalos: "recuerdos",
    lluvia: "lluvia", llueve: "lluvia", techo: "lluvia", vista: "mirador", vistas: "mirador", guia: "tours", guias: "tours", visita: "tours",
    ajiaco: "ajiaco", tamal: "comida colombiana", tipica: "comida colombiana", esmeraldas: "joyas", esmeralda: "joyas", oro: "museo",
    graffiti: "grafiti", cerro: "mirador", cerros: "mirador", senderismo: "sendero", trekking: "sendero", bici: "bici", bicicleta: "bici",
    cerveza: "cerveza", futbol: "fútbol", millonarios: "fútbol", santafe: "fútbol"
  },

  /* Calendario: fechas habituales, a confirmar cada año. m = meses (1-12). */
  events: [
    { m: [3, 4], when: "Marzo o abril, algunos años", icon: "🎭", name: "Festival Iberoamericano de Teatro", desc: "Uno de los festivales de teatro más grandes del mundo, con funciones en salas y obras gratis en parques y calles." },
    { m: [3, 4], when: "Marzo o abril", icon: "🙏", name: "Semana Santa", desc: "Procesiones en el centro y miles de peregrinos suben a Monserrate. Muchos bogotanos salen de la ciudad." },
    { m: [3, 4], when: "Marzo o abril", icon: "🎸", name: "Festival Estéreo Picnic", desc: "El gran festival de música internacional de la ciudad." },
    { m: [4, 5], when: "Abril y mayo", icon: "📚", name: "Feria del Libro (FILBo)", desc: "La feria internacional del libro, en Corferias, con charlas, firmas y un país invitado." },
    { m: [6, 7], when: "Junio o julio", icon: "🤘", name: "Rock al Parque", desc: "Festival de rock gratis en el Parque Simón Bolívar, de los más grandes de América Latina." },
    { m: [8], when: "6 de agosto", icon: "🎂", name: "Cumpleaños de Bogotá", desc: "La ciudad celebra su fundación con actividades culturales." },
    { m: [8, 9], when: "Agosto o septiembre", icon: "💃", name: "Salsa al Parque", desc: "Orquestas y bailarines de salsa en un festival gratis al aire libre." },
    { m: [8], when: "Agosto", icon: "🪁", name: "Temporada de cometas", desc: "Los vientos de agosto llenan los parques de barriletes." },
    { m: [10], when: "31 de octubre", icon: "🎃", name: "Halloween", desc: "Los chicos salen disfrazados a pedir dulces por centros comerciales y barrios." },
    { m: [12], when: "Diciembre", icon: "🎄", name: "Alumbrados y novenas", desc: "Luces de Navidad en parques y calles, y las novenas, nueve noches de rezos, villancicos y buñuelos antes del 24." }
  ],

  /* Bloques extra para Info práctica. */
  practicalMore: [
    { icon: "🧭", title: "Cómo leer una dirección", items: [
      { t: "Calles y carreras", d: "Las calles van de este a oeste y aumentan hacia el norte; las carreras van de norte a sur y aumentan hacia el oeste, lejos de los cerros." },
      { t: "\"Carrera 7 # 28-66\"", d: "Quiere decir sobre la Carrera 7, a la altura de la Calle 28, a 66 metros de la esquina." },
      { t: "Los cerros", d: "Si ves las montañas, mirás hacia el este." },
      { t: "Sur y Este", d: "\"Sur\" o \"Este\" al final de la dirección quiere decir que está al sur de la Calle 1 o al este de la Carrera 1." }
    ] },
    { icon: "⛰️", title: "La altura", items: [
      { t: "2600 metros", d: "Bogotá es una de las capitales más altas del mundo: es normal cansarse rápido, dormir mal o tener dolor de cabeza los primeros días." },
      { t: "Qué hacer", d: "Caminá despacio, tomá mucha agua, comé liviano y tomá poco alcohol al principio." },
      { t: "Sol y frío", d: "El sol quema fuerte aunque haga fresco, y a la noche refresca: llevá ropa en capas." }
    ] },
    { icon: "🏥", title: "Salud y farmacias", items: [
      { t: "Urgencias", d: "Llamá al 123. Las clínicas privadas grandes tienen urgencias las 24 horas." },
      { t: "Farmacias", d: "Se llaman \"droguerías\". Hay muchas y varias hacen envíos a domicilio." },
      { t: "Agua", d: "El agua de la canilla de Bogotá es potable." },
      { t: "Seguro de viaje", d: "Muy recomendable: sin cobertura, la atención privada sale cara." }
    ] },
    { icon: "🔍", title: "Cómo elegimos los lugares", items: [
      { t: "Selección", d: "La guía incluye solo lugares con reputación sostenida: distinciones oficiales, guías reconocidas y buen consenso en reseñas públicas." },
      { t: "Niveles", d: "'Destacado' son los mejores de su categoría, 'Muy recomendado' es una apuesta segura y 'Buena opción' cumple bien pero no es imprescindible." },
      { t: "Opiniones al día", d: "En cada ficha, el botón 'Opiniones, horarios y fotos' abre el lugar en Google Maps con su puntaje, reseñas, horarios actualizados y fotos." },
      { t: "Precios", d: "Usamos niveles ($ a $$$$) en vez de montos porque los precios cambian seguido." }
    ] }
  ],

  /* Fotos: de Wikimedia Commons con licencia libre (ver docs/fuentes-bogota.md). */
  photos: {
    "museo-nacional-de-colombia": "1/14/Entrada_Principal_del_Museo_Nacional_de_Colombia.jpg",
    "museo-de-arte-miguel-urrutia": "d/d3/Bogotá_-_Museo_de_Arte_del_Banco_de_la_República.JPG",
    "museo-colonial": "4/44/Museo_AColonialB.jpg",
    "chorro-de-quevedo": "7/7f/Chorro_quevedo.jpg",
    "catedral-primada-de-colombia": "4/4c/2021_Bogotá_-_Catedral_Primada_de_Colombia.jpg",
    "iglesia-de-san-francisco": "b/bc/Iglesia_de_San_Francisco_1.JPG",
    "parque-simon-bolivar": "1/11/Bogotá_Lago_Simón_Bolívar.JPG",
    "parque-nacional-enrique-olaya-herrera": "6/68/Bogotá_parque_Nacional_Monumento_a_Rafael_Uribe_Uribe.JPG",
    "quebrada-la-vieja": "c/c3/Bogotá_agua_Chapinero_quebrda_La_Vieja.jpg",
    "parque-de-la-93": "3/3c/Bogotá_barrio_El_Chicó_-_Parque_de_la_93_tras_la_renovación.JPG",
    "la-puerta-falsa": "4/4f/Chocolate_santafereño_en_Café_La_Puerta_Falsa_1.jpg",
    "mercado-de-paloquemao": "8/8a/Market_in_Bogotá.jpg",
    "catedral-de-sal-de-zipaquira": "f/ff/Catedral_de_Sal_02.jpg",
    "laguna-de-guatavita": "7/7c/Laguna_Guatavita_06.jpg",
    "salto-del-tequendama": "0/0e/Tequendamasaltobta.jpg",
    "centro-andino": "9/91/Bogota_centro_comercial_Andino.JPG",
    "estadio-el-campin": "a/aa/Estadio_El_Campin_vacío.jpg",
    "movistar-arena": "1/12/Ma2_Bog_agt_2019.jpg",
    "parque-el-virrey": "4/46/BOG_El_Virrey_hacia_la_15.JPG",
    "cinemateca-de-bogota": "7/77/2019_Bogotá_-_Edificio_de_la_Cinemateca_en_la_Carrera_Tercera.jpg",
    "museo-del-oro": "0/0c/03_pares_de_orejeras_de_oro.jpg",
    "museo-botero": "d/dd/Museo_Botero,_Boteromuseum_03.jpg",
    "casa-de-moneda": "7/7e/2_Escudos_Felipe_IV.jpg",
    "plaza-de-bolivar": "e/e5/Plaza_de_Bolívar_en_Bogotá_(Colombia).jpg",
    "iglesia-de-san-ignacio": "9/9f/Iglesia_de_S._Ignacio_A.JPG",
    "teatro-colon": "b/b1/Entrada_principal,_Teatro_Colón.JPG",
    "centro-comercial-santafe": "d/dc/CC_Santafé_Bogotá_Cund_jul_2018_-_1.jpeg",
    "teatro-libre": "c/c1/Alibrecentro_002.jpg",
    "maloka": "9/98/Maloka_dome_theater_facade.jpg",
    "mambo": "b/b2/Vista_aérea_Bogotá_-_25_-_MAMBO.jpg",
    "monserrate": "8/8b/Vistas_desde_Monserrate_-_Bogotá_-_panoramio_(1).jpg",
    "torre-colpatria": "7/71/Torre_Colpatria_(6931242164).jpg",
    "biblioteca-luis-angel-arango": "a/a9/Biblioteca_Luis_Ángel_Arango_-_Interior_2.jpg",
    "capitolio-nacional": "f/f7/Perspectiva_de_un_parte_del_Capitolio_Nacional.JPG",
    "suesca": "b/b6/Iglesia_suesca_por_John_Franklin_Castro_Arëvalo.jpg",
    "unicentro": "a/a0/Unicentro_-_3_de_Enero_de_2009.jpg",
  },

  /* Estaciones de TransMilenio por troncal (las letras de bogota.js), para "la estación más cercana" en cada ficha.
     Estaciones de OpenStreetMap (18/11/2026), agrupadas por la avenida de cada troncal. Las de la Avenida Caracas que dicen
     "Temporal" en el mapa funcionan en otro lugar mientras se construye el metro. */
  stations: {
    "A": [["Tercer Milenio", 4.59798, -74.08396], ["Avenida Jiménez", 4.60279, -74.08048], ["Calle 19", 4.60688, -74.07756], ["Calle 22", 4.60969, -74.07574], ["Calle 26", 4.61655, -74.07224], ["Calle 34", 4.62434, -74.06915], ["Avenida 39", 4.62668, -74.06873], ["Calle 45", 4.63129, -74.06791], ["Marly", 4.63641, -74.06698], ["Calle 57", 4.64533, -74.06542], ["Calle 63", 4.64834, -74.06488], ["Calle 76 - San Felipe", 4.66298, -74.06128], ["Héroes", 4.66812, -74.06033]],
    "B": [["Héroes", 4.66812, -74.06033], ["Calle 100 - Marketmedios", 4.68380, -74.05770], ["Calle 106", 4.69296, -74.05619], ["Pepe Sierra", 4.69798, -74.05533], ["Calle 127", 4.70451, -74.05426], ["Prado", 4.71450, -74.05259], ["Alcalá", 4.72106, -74.05112], ["Calle 142", 4.72683, -74.05053], ["Calle 146", 4.73068, -74.04986], ["Mazurén", 4.73465, -74.04920], ["Calle 161", 4.74191, -74.04800], ["Toberín - Foundever", 4.74625, -74.04728], ["Portal Norte - Unicervantes", 4.75459, -74.04604], ["Calle 187", 4.76288, -74.04453], ["Terminal", 4.76849, -74.04362]],
    "F": [["Avenida Jiménez", 4.60279, -74.08048], ["De La Sabana", 4.60539, -74.08184], ["San Façon", 4.60966, -74.08668], ["Ricaurte", 4.61229, -74.09209], ["CDS - Carrera 32", 4.61618, -74.09401], ["Zona Industrial", 4.62037, -74.09873], ["Carrera 43 - Comapan", 4.62277, -74.10140], ["Puente Aranda", 4.62581, -74.10479], ["Distrito Grafiti", 4.62791, -74.11158], ["Pradera - Plaza Central", 4.62854, -74.11864], ["Marsella", 4.62971, -74.13019], ["Av. Américas - Avenida Boyacá", 4.63004, -74.13474], ["Mandalay", 4.63085, -74.14138], ["Banderas", 4.63148, -74.14559], ["Transversal 86", 4.63419, -74.15205], ["Biblioteca Tintal", 4.63842, -74.15901], ["Patio Bonito", 4.63284, -74.16495], ["Portal Américas", 4.62944, -74.17315]],
    "J": [["Avenida Jiménez", 4.60279, -74.08048], ["Museo del Oro", 4.60114, -74.07288], ["Las Aguas", 4.60259, -74.06842]],
    "K": [["Universidades", 4.60440, -74.06743], ["Calle 26", 4.61655, -74.07224], ["Centro Memoria", 4.62052, -74.07636], ["Concejo de Bogotá", 4.62602, -74.08030], ["CAD", 4.62338, -74.08423], ["Ciudad Universitaria - Lotería de Bogotá", 4.63094, -74.08358], ["Corferias", 4.63436, -74.08981], ["Quinta Paredes", 4.63760, -74.09316], ["Gobernación", 4.64297, -74.09661], ["CAN - British Council", 4.64699, -74.09912], ["Salitre - El Greco", 4.65097, -74.10171], ["El Tiempo - Cámara de Comercio de Bogotá", 4.65719, -74.10571], ["Avenida Rojas - UNISALESIANA", 4.66199, -74.10876], ["Normandía", 4.66898, -74.11326], ["Modelia", 4.67516, -74.11719], ["Portal Eldorado - Centro Comercial Nuestro Bogotá", 4.68166, -74.12138]],
    "L": [["Museo Nacional - FNG", 4.61522, -74.06923], ["San Diego", 4.61162, -74.07079], ["San Victorino", 4.60094, -74.07745], ["Bicentenario", 4.59350, -74.08190], ["Hospital", 4.59463, -74.08658], ["San Bernardo", 4.59013, -74.08436], ["Policarpa", 4.58620, -74.08696], ["Ciudad Jardín - Universidad Antonio Nariño", 4.58145, -74.09042], ["Avenida 1° de Mayo", 4.57685, -74.09370], ["Portal 20 de Julio", 4.56564, -74.09700]]
  }
};
