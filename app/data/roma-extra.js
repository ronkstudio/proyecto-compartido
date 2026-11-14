/* Datos complementarios de Roma (tarjetas #101 y #178): sellos del pasaporte, niveles de recomendación, dietas, días de cierre,
   colecciones, zonas para armar viajes, calendario, fotos y estaciones.
   Las claves son los ids de los lugares (nombre en minúsculas, sin acentos, con guiones). */
window.CITY_EXTRA = window.CITY_EXTRA || {};
window.CITY_EXTRA.roma = {
  tz: "Europe/Rome",

  /* Pasaporte romano: sellos que se ganan marcando "Ya fui" en los lugares. Mismo formato que data/caba-extra.js. */
  stamps: [
    { id: "primer-paso", icon: "👣", name: "Primer paso", desc: "Visitá tu primer lugar", n: 1 },
    { id: "imperdibles", icon: "🏛️", name: "Lo esencial", desc: "5 imperdibles destacados", n: 5, cat: "ver", q: 3 },
    { id: "antigua", icon: "🏺", name: "Romano antiguo", desc: "3 lugares de la Roma antigua", n: 3, sub: "Roma antigua" },
    { id: "iglesias", icon: "⛪", name: "De iglesia en iglesia", desc: "3 iglesias", n: 3, sub: "Iglesia" },
    { id: "museos", icon: "🎨", name: "Ojo de museo", desc: "3 museos", n: 3, sub: "Museo" },
    { id: "pasta", icon: "🍝", name: "Carbonara y compañía", desc: "2 trattorias", n: 2, sub: "Trattoria" },
    { id: "helado", icon: "🍦", name: "Gelato", desc: "2 heladerías", n: 2, sub: "Heladería" },
    { id: "noche", icon: "🍸", name: "Trasnochador", desc: "2 salidas de noche", n: 2, cat: "noche" },
    { id: "escapada", icon: "🚆", name: "Escapada", desc: "Una excursión fuera de la ciudad", n: 1, cat: "escapadas" },
    { id: "curioso", icon: "💎", name: "Fuera del circuito", desc: "Una joya oculta o un lugar de barrio", n: 1, tag: ["joya oculta", "vida de barrio"] },
    { id: "barrios", icon: "🏘️", name: "Explorador de barrios", desc: "Lugares en 5 barrios distintos", n: 5, barrios: true },
    { id: "honorario", icon: "🛵", name: "Romano honorario", desc: "20 lugares visitados", n: 20 }
  ],

  /* Nivel de recomendación: 3 = Destacado, 2 = Muy recomendado, 1 = Buena opción.
     Los marcados como destacados en data/roma-lugares.js ya son 3; el resto es 2 salvo lo que se lista acá. */
  quality: {
    3: ["museos-capitolinos", "santa-maria-in-trastevere", "san-luis-de-los-franceses", "palazzo-massimo-alle-terme", "roscioli-salumeria-con-cucina",
      "felice-a-testaccio", "pizzeria-ai-marmi", "supplizio", "forno-boccione", "jerry-thomas-speakeasy", "ostia-antica", "villa-d-este", "hotel-de-russie"],
    1: ["tour-en-vespa", "clase-de-cocina-de-pasta", "coin-termini", "the-space-cinema-moderno", "luneur-park", "palazzo-dello-sport", "playa-de-ostia"]
  },
  awards: {},

  /* Dietas. Solo con fuente: OpenStreetMap ("diet:vegan" / "diet:gluten_free"), su sitio o guías para celíacos, revisados el 14/11/2026.
     Sin TACC: Mama Eat (OpenStreetMap "only" y guías para celíacos), Voglia di Pizza (certificada por la AIC, según Table Journey),
     Pandalì (panadería sin gluten, según Wheatless Wanderlust y Scatti di Gusto) y Sans de Blé (pastelería sin gluten y sin lactosa, según OpenStreetMap y GlutoApp).
     Veganos: Buddy Veggy, Rifugio Romano, Ops! y Romeow Cat Bistrot, todos "diet:vegan=only" en OpenStreetMap. */
  diet: {
    "mama-eat": ["sin TACC"], "voglia-di-pizza": ["sin TACC"], "pandali": ["sin TACC"], "sans-de-ble": ["sin TACC"],
    "buddy-veggy": ["vegano", "vegetariano"], "rifugio-romano": ["vegano", "vegetariano"], "ops": ["vegano", "vegetariano"], "romeow-cat-bistrot": ["vegano", "vegetariano"]
  },
  dietFull: ["mama-eat", "voglia-di-pizza", "pandali", "sans-de-ble", "buddy-veggy", "rifugio-romano", "ops", "romeow-cat-bistrot"],

  /* Días que abren o cierran (0 = domingo … 6 = sábado). Solo los días fijos y conocidos; pueden cambiar en feriados. */
  only: {
    "mercado-de-porta-portese": [0], "mercado-de-campagna-amica": [6, 0]
  },
  closed: {
    "museos-vaticanos-y-capilla-sixtina": [0], "galeria-borghese": [1], "palazzo-massimo-alle-terme": [1], "palazzo-barberini": [1],
    "maxxi": [1], "museo-etrusco-de-villa-giulia": [1], "palazzo-altemps": [1], "galeria-nacional-de-arte-moderno": [1],
    "castillo-sant-angelo": [1], "museo-judio-y-gran-sinagoga": [6], "armando-al-pantheon": [0], "i-suppli": [0],
    "mercado-de-testaccio": [0], "mercado-trionfale": [0], "nuevo-mercado-esquilino": [0], "mercado-de-via-sannio": [0], "mordi-e-vai": [0]
  },

  /* Lista de preparación del viaje (se tilda y queda guardada en el dispositivo). */
  checklist: [
    { title: "Antes de viajar", items: [
      "Pasaporte o documento vigente, y una copia en el celular",
      "Seguro de viaje con cobertura médica",
      "Adaptador de enchufe tipo F o L (230 V)",
      "Avisar al banco que vas a usar la tarjeta en el exterior",
      "Reservar el Coliseo, los Museos Vaticanos y la Galería Borghese",
      "Descargar esta guía y los mapas de Google sin conexión"
    ] },
    { title: "Al llegar", items: [
      "Tomar el Leonardo Express o el taxi a precio fijo desde Fiumicino",
      "Pagar el transporte con la tarjeta sin contacto, o comprar un pase",
      "Comprar un chip prepago o activar la eSIM",
      "Llevar un pañuelo para entrar a las iglesias con los hombros tapados"
    ] }
  ],

  /* Colecciones del inicio: cada una es un filtro de Explorar. */
  collections: [
    { name: "Clásicos romanos", icon: "🏛️", filter: { q: "clásico" }, cover: "coliseo" },
    { name: "La Roma antigua", icon: "🏺", filter: { cat: "ver", sub: "Roma antigua" }, cover: "foro-romano" },
    { name: "Roma gratis", icon: "💸", filter: { prices: [0] }, cover: "piazza-navona" },
    { name: "Miradores", icon: "🌇", filter: { q: "mirador" }, cover: "terraza-del-pincio" },
    { name: "Arte y museos", icon: "🎨", filter: { q: "arte" }, cover: "galeria-borghese" },
    { name: "Iglesias con obras maestras", icon: "⛪", filter: { cat: "ver", sub: "Iglesia" }, cover: "basilica-de-san-pedro" },
    { name: "Pasta romana", icon: "🍝", filter: { cat: "comer", sub: "Trattoria" }, cover: "da-enzo-al-29" },
    { name: "Pizza", icon: "🍕", filter: { q: "pizza" }, cover: "bonci-pizzarium" },
    { name: "Helado artesanal", icon: "🍦", filter: { cat: "comer", sub: "Heladería" }, cover: "giolitti" },
    { name: "Cafés históricos", icon: "☕", filter: { cat: "comer", sub: "Café histórico" }, cover: "sant-eustachio-il-caffe" },
    { name: "Cocina judía romana", icon: "🕍", filter: { cat: "comer", sub: "Cocina judía romana" }, cover: "nonna-betta" },
    { name: "Vegetariano y vegano", icon: "🥬", filter: { diets: ["vegetariano"] }, cover: "" },
    { name: "Sin TACC", icon: "🌾", filter: { diets: ["sin TACC"] }, cover: "" },
    { name: "Vinos y cócteles", icon: "🍷", filter: { cat: "noche" }, cover: "cul-de-sac" },
    { name: "Joyas menos conocidas", icon: "💎", filter: { q: "joya oculta" }, cover: "cerradura-de-los-caballeros-de-malta" },
    { name: "Con chicos", icon: "🧒", filter: { q: "chicos" }, cover: "bioparco" },
    { name: "Días de lluvia", icon: "🌧️", filter: { q: "lluvia" }, cover: "museos-vaticanos-y-capilla-sixtina" },
    { name: "Mercados", icon: "🛍️", filter: { cat: "compras", sub: "Mercado" }, cover: "mercado-de-testaccio" },
    { name: "Excursiones de un día", icon: "🚆", filter: { cat: "escapadas" }, cover: "villa-d-este" }
  ],

  /* Zonas para el armado automático de viajes, en orden de prioridad. */
  zones: [
    { name: "Coliseo y Roma antigua", barrios: ["Coliseo y Foros", "Monti", "Aventino"] },
    { name: "Centro histórico", barrios: ["Centro Histórico"] },
    { name: "Vaticano", barrios: ["Vaticano y Prati"] },
    { name: "Plaza de España y Villa Borghese", barrios: ["Plaza de España y Tridente", "Villa Borghese"] },
    { name: "Trastevere y Testaccio", barrios: ["Trastevere", "Testaccio"] },
    { name: "Esquilino y San Juan", barrios: ["Esquilino y Termini", "San Giovanni"] }
  ],
  zonasDosDias: [["Roma antigua y centro histórico", [0, 1, 5]], ["Vaticano, Plaza de España y Trastevere", [2, 3, 4]]],
  zonaChicos: 3,

  /* Palabras que la gente escribe → cómo figura en la guía. */
  synonyms: {
    desayuno: "cafe", brunch: "cafe", merienda: "cafe", cafeteria: "cafe", vegano: "vegetariano",
    hotel: "hospedaje", hoteles: "hospedaje", dormir: "hospedaje", alojamiento: "hospedaje", hostal: "hostel",
    ninos: "chicos", nenes: "chicos", familia: "chicos", familias: "chicos", barato: "economico", baratos: "economico", gratuito: "gratis",
    tragos: "cocteles", cocktail: "cocteles", cocktails: "cocteles", boliche: "club", bailar: "club",
    excursion: "excursiones", escapada: "excursiones", paseo: "caminar", shopping: "compras", regalos: "regalos",
    lluvia: "lluvia", llueve: "lluvia", techo: "lluvia", vista: "mirador", vistas: "mirador", guia: "tours", guias: "tours", visita: "tours",
    gelato: "helado", gelateria: "helado", carbonara: "pasta", spaghetti: "pasta", fideos: "pasta", amatriciana: "pasta",
    ruinas: "ruinas", romanos: "historia", vino: "vinos", pizzeria: "pizza", sinagoga: "templo", vaticano: "vaticano"
  },

  /* Calendario: fechas habituales, a confirmar cada año. m = meses (1-12). */
  events: [
    { m: [1], when: "6 de enero", icon: "🧹", name: "La Befana", desc: "La fiesta de Reyes italiana: feria de dulces y juguetes en Piazza Navona, que se arma desde diciembre." },
    { m: [3], when: "Marzo", icon: "🏃", name: "Maratón de Roma", desc: "Pasa por el Coliseo, San Pedro y el centro; ese domingo hay muchos cortes de tránsito." },
    { m: [3, 4], when: "Semana Santa", icon: "✝️", name: "Pascua en el Vaticano", desc: "El Vía Crucis del Viernes Santo en el Coliseo y la misa de Pascua en la plaza de San Pedro. Hay muchísima gente." },
    { m: [4], when: "21 de abril", icon: "🎂", name: "Cumpleaños de Roma", desc: "El Natale di Roma: desfiles de gente vestida de romano antiguo en el Circo Máximo y museos con actividades." },
    { m: [5], when: "Mayo", icon: "🎾", name: "Abierto de Italia de tenis", desc: "Uno de los grandes torneos sobre polvo de ladrillo, en el Foro Itálico." },
    { m: [6], when: "2 de junio", icon: "🇮🇹", name: "Fiesta de la República", desc: "Desfile militar en Via dei Fori Imperiali y la escuadrilla de aviones pintando el cielo de verde, blanco y rojo." },
    { m: [6], when: "29 de junio", icon: "🎆", name: "San Pedro y San Pablo", desc: "El feriado de los santos patronos de Roma, con misa en San Pedro y fuegos artificiales en el Castillo Sant'Angelo." },
    { m: [6, 7, 8], when: "Junio a septiembre", icon: "🌙", name: "Verano romano", desc: "Cine al aire libre, conciertos, ópera en las Termas de Caracalla y puestos a orillas del Tíber (Lungo il Tevere)." },
    { m: [7], when: "Julio", icon: "🎉", name: "Festa de' Noantri", desc: "La fiesta popular de Trastevere, con procesión por el río y puestos en las calles." },
    { m: [10], when: "Octubre", icon: "🎬", name: "Fiesta del Cine de Roma", desc: "Festival de cine en el Auditorium Parco della Musica, con estrellas internacionales." },
    { m: [12], when: "8 de diciembre", icon: "🌹", name: "La Inmaculada", desc: "El papa visita la columna de la Inmaculada junto a Plaza de España. Empiezan las fiestas." },
    { m: [12, 1], when: "Diciembre a enero", icon: "🎄", name: "Navidad en Roma", desc: "Pesebres en las iglesias, el gran árbol y pesebre de la plaza de San Pedro y el mercado de Piazza Navona." },
    { m: [12], when: "31 de diciembre", icon: "🎆", name: "Fin de año", desc: "Festejo con conciertos gratis en el Circo Máximo. Hay mucha gente: cuidá tus cosas." }
  ],

  /* Bloques extra para Info práctica. */
  practicalMore: [
    { icon: "🗣️", title: "Palabras que vas a ver", items: [
      { t: "Entrata · Uscita", d: "Entrada y salida." },
      { t: "Aperto · Chiuso", d: "Abierto y cerrado." },
      { t: "Binario", d: "Andén, en las estaciones de tren." },
      { t: "Biglietto · Convalidare", d: "Boleto y validarlo, en el transporte." },
      { t: "Coperto", d: "El cubierto que se cobra por persona en muchos restaurantes." },
      { t: "Sciopero", d: "Paro: si lo ves en el transporte, revisá cómo moverte ese día." },
      { t: "ZTL", d: "Zona de tránsito limitado: los autos no pueden entrar sin permiso." }
    ] },
    { icon: "🏥", title: "Salud y farmacias", items: [
      { t: "Urgencias", d: "Llamá al 112 o al 118. Los hospitales grandes tienen guardia (Pronto Soccorso) las 24 horas." },
      { t: "Farmacias", d: "Tienen una cruz verde. De noche y los domingos hay farmacias de turno: el cartel está en la puerta de cualquier farmacia." },
      { t: "Seguro de viaje", d: "Muy recomendable: sin cobertura, la atención puede salir cara." }
    ] },
    { icon: "🔍", title: "Cómo elegimos los lugares", items: [
      { t: "Selección", d: "La guía incluye solo lugares con reputación sostenida: distinciones oficiales, guías reconocidas y buen consenso en reseñas públicas." },
      { t: "Niveles", d: "'Destacado' son los mejores de su categoría, 'Muy recomendado' es una apuesta segura y 'Buena opción' cumple bien pero no es imprescindible." },
      { t: "Opiniones al día", d: "En cada ficha, el botón 'Opiniones, horarios y fotos' abre el lugar en Google Maps con su puntaje, reseñas, horarios actualizados y fotos." },
      { t: "Precios", d: "Usamos niveles ($ a $$$$) en vez de montos porque los precios cambian seguido." }
    ] }
  ],

  /* Fotos (tarjeta #178): foto principal de cada lugar en Wikidata, de Wikimedia Commons con licencia libre,
     aceptada solo si el elemento de Wikidata está a menos de 1,5 km del lugar. Se probó que las 80 cargan; se sacaron 4 que mostraban otra cosa. */
  photos: {
    "coliseo": "d/de/Colosseo_2020.jpg",
    "foro-romano": "6/6a/Foro_Romano_Musei_Capitolini_Roma.jpg",
    "palatino": "6/62/Palatine_Hill_from_across_the_Circus_Maximus_April_2019.jpg",
    "termas-de-caracalla": "5/53/Baths_of_Caracalla,_facing_Caldarium.jpg",
    "circo-maximo": "4/4a/Circus_Maximus_2025.jpg",
    "teatro-de-marcelo": "a/a2/Teatro_di_Marcello_intero.jpg",
    "mausoleo-de-augusto": "c/cf/Photographs_of_the_Mausoleum_of_Augustus_14_(cropped).jpg",
    "piramide-cestia": "9/98/Pyramide_Caio_Cestio_-_Rome_(IT62)_-_2021-08-29_-_3.jpg",
    "panteon": "7/7b/Pantheon_(Rome)_-_Right_side_and_front.jpg",
    "fontana-di-trevi": "c/c7/Trevi_Fountain_-_Roma.jpg",
    "boca-de-la-verdad": "7/7b/Età_imperiale,_chiusino_a_forma_di_mascherone_di_divinità_fluviale,_detta_bocca_della_verità,_collocata_qui_nel_1632.jpg",
    "castillo-sant-angelo": "5/57/Castel_Sant'Angelo_at_Night.jpg",
    "plaza-de-san-pedro": "d/d6/St_Peter's_Square,_Vatican_City_-_April_2007.jpg",
    "piazza-navona": "1/18/Paolo_Monti_-_Servizio_fotografico_(Roma,_1966)_-_BEIC_6329173.jpg",
    "piazza-del-popolo": "b/b4/PIAZZA_DEL_POPOLO_VISTA_AEREA.jpg",
    "plaza-del-campidoglio": "3/36/Piazza_del_Campidoglio_2015.jpg",
    "fuente-de-las-tortugas": "1/12/The_Turtle_Fountain.jpg",
    "galeria-borghese": "5/50/Roma_Museo_Borghese.jpg",
    "museos-capitolinos": "a/a7/Palazzo_dei_Conservatori_in_Rome_(2).jpg",
    "palazzo-massimo-alle-terme": "7/7c/Palazzo_Massimo_alle_Terme_NE.jpg",
    "galleria-doria-pamphilj": "5/51/Roma-palazzodoriapamphili.jpg",
    "palazzo-barberini": "7/7d/PalaisBarberini-Facade_avant_du_palais.JPG",
    "centrale-montemartini": "9/9e/Le_musée_de_la_centrale_Montemartini_(Rome)_(34321364485).jpg",
    "palazzo-altemps": "7/73/Roma_2011_08_07_Palazzo_Altemps.jpg",
    "galeria-nacional-de-arte-moderno": "1/16/Galleria_nazionale_d'arte_moderna_-_Rome,_Italy_-_DSC05142.jpg",
    "basilica-de-san-pedro": "f/f5/Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg",
    "santa-maria-la-mayor": "8/84/Basilica_di_Santa_Maria_Maggiore_-_Roma.jpg",
    "san-juan-de-letran": "5/5f/San_Giovanni_in_Laterano_2021.jpg",
    "san-pablo-extramuros": "c/c0/StPaul.jpg",
    "santa-maria-in-trastevere": "6/63/01_Santa_Maria_in_Trastevere_Facade.jpg",
    "santa-maria-sopra-minerva": "6/6c/Santa_Maria_sopra_Minerva.jpg",
    "santa-maria-del-popolo": "2/2f/Church_St_Maria_del_popolo_1.jpg",
    "basilica-de-san-clemente": "c/cb/Basilica_di_San_Clemente_al_Laterano_-_esterno.jpg",
    "iglesia-del-gesu": "a/a6/Jesus_Church.jpg",
    "santa-prassede": "e/ec/Basilica_di_Santa_Prassede_-_esterno.jpg",
    "villa-borghese": "3/39/Villa_Borghese_-_entrata_2669.JPG",
    "villa-doria-pamphilj": "b/b3/Villa_Doria_Pamphilj_in_Rom.jpg",
    "parque-de-los-acueductos": "d/da/The_park_of_the_aqueducts.jpg",
    "villa-torlonia": "6/68/Roma,_Villa_Torlonia.jpg",
    "jardin-botanico-de-roma": "2/28/Orto_botanico_-_ingresso_2704.JPG",
    "trastevere": "d/de/Santa_Maria_in_Trastevere_fountain.jpg",
    "via-giulia": "1/1b/ViaGiulia.jpg",
    "via-margutta": "c/ca/03_Margutta.JPG",
    "catacumbas-de-san-calixto": "0/08/Catacombe.jpg",
    "catacumbas-de-san-sebastian": "3/3c/Catacombs_S._Sebastiano_Rome1.jpg",
    "catacumbas-de-domitila": "1/10/Arcosolium_(catacombe_di_Domitilla_).jpg",
    "catacumbas-de-priscila": "c/c6/Good_shepherd_01_small.jpg",
    "florencia": "c/c6/Panoramica_Firenze.jpg",
    "napoles": "6/6f/Naples_from_the_Castello_Sant_Elmo_with_Abbazia_San_Martino_the_port_and_the_Vesuv.jpg",
    "orvieto": "a/af/Orvieto_3.JPG",
    "civita-di-bagnoregio": "4/4a/Civita_(Bagnoregio)_-_Panorama.jpg",
    "asis": "1/1f/Assisi_panorama.jpg",
    "frascati": "1/16/Frascati_1_BW.JPG",
    "ostia-antica": "6/68/Frigidarium_Terme_del_Foro_Ostia_Antica_2006-09-08.jpg",
    "pompeya": "5/5f/Pompeii_(4873744179).jpg",
    "villa-adriana": "2/2d/Villa_adriana.jpg",
    "villa-d-este": "1/1d/Villa_d'Este_01.jpg",
    "jardin-de-ninfa": "c/c5/Castello_di_ninfa_e_giardino.jpg",
    "castel-gandolfo": "c/ce/Sudika_Castel_Gandolfo.jpg",
    "lago-de-bracciano": "1/15/Lago_di_bracciano.jpg",
    "lago-albano": "f/fb/Panoramica_Lago_Albano.jpg",
    "sperlonga": "3/31/Sperlonga02.jpg",
    "via-del-corso": "9/9d/Rom,_die_Straße_Via_del_Corso,_mittlerer_Teil.JPG",
    "via-condotti": "f/ff/Condotti_da_trinita_dei_monti_01.JPG",
    "via-dei-coronari": "8/8e/Ponte_-_Immagine_di_Ponte_1130330.JPG",
    "via-del-governo-vecchio": "5/53/Via_del_Governo_vecchio_(Rome).jpg",
    "stadio-dei-marmi": "c/c3/Stadio_dei_Marmi_(cropped).jpg",
    "palazzetto-dello-sport": "c/c8/Palazzetto_Dello_Sport_-_panoramio.jpg",
    "palazzo-dello-sport": "f/fd/Palazzo_dello_Sport_1959.jpg",
    "villa-ada": "1/1e/Villa_Ada_(Roma).JPG",
    "teatro-de-la-opera-de-roma": "4/4c/Teatro_de_la_Ópera,_Roma,_Italia,_2022-09-16,_DD_29.jpg",
    "auditorium-parco-della-musica": "d/dc/Auditorium_Parco_della_Musica_a_Parioli.JPG",
    "oratorio-del-gonfalone": "f/f3/20250919_161352(1)_fscciata.jpg",
    "teatro-argentina": "3/34/Roma_Teatro_Argentina.jpg",
    "teatro-quirino": "3/34/Teatro_Quirino.JPG",
    "teatro-sistina": "5/53/Roma,_teatro_sistina.JPG",
    "nuovo-sacher": "3/38/Cinéma_Nuevo_Sacher_de_Rome.JPG",
    "bioparco": "f/f8/Ingresso_bioparco_2.JPG",
    "luneur-park": "2/2e/Fun_Fair_at_EUR,_Rome_-_2803.jpg",
    "cinecitta-world": "a/a6/Altair_cinecitta_world.jpg"
  },

  /* Estaciones de metro (líneas A, B y C) de OpenStreetMap, 14/11/2026. Sirven para mostrar la estación más cercana en cada ficha. */
  stations: {
    "A": [["Arco di Travertino", 41.86607, 12.53578], ["Vittorio Emanuele", 41.89463, 12.50453], ["Spagna", 41.90679, 12.48455], ["Anagnina", 41.84279, 12.58609], ["Re di Roma", 41.88188, 12.51405], ["Flaminio", 41.91275, 12.47726], ["Repubblica", 41.90284, 12.49605], ["Manzoni", 41.89018, 12.50682], ["Baldo degli Ubaldi", 41.89903, 12.43359], ["Cinecittà", 41.84928, 12.57441], ["Giulio Agricola", 41.85662, 12.56263], ["Numidio Quadrato", 41.86213, 12.55263], ["Battistini", 41.90621, 12.41515], ["Lucio Sestio", 41.85977, 12.55712], ["Barberini", 41.90382, 12.48867], ["Valle Aurelia", 41.90290, 12.44137], ["Termini", 41.90169, 12.50078], ["Cornelia", 41.90054, 12.42643], ["Subaugusta", 41.85386, 12.56769], ["Colli Albani", 41.86949, 12.52987], ["Porta Furba/Quadraro", 41.86380, 12.54821], ["Lepanto", 41.91139, 12.46615], ["Furio Camillo", 41.87475, 12.52302], ["San Giovanni", 41.88531, 12.50992], ["Ottaviano", 41.90948, 12.45846], ["Cipro", 41.90739, 12.44768], ["Ponte Lungo", 41.87784, 12.51894]],
    "B": [["Bologna", 41.91358, 12.52054], ["Colosseo", 41.89168, 12.49166], ["Castro Pretorio", 41.90647, 12.50681], ["Basilica San Paolo", 41.85591, 12.47828], ["EUR Fermi", 41.82883, 12.47086], ["Quintiliani", 41.91587, 12.53837], ["Monti Tiburtini", 41.91576, 12.54790], ["Cavour", 41.89498, 12.49349], ["Laurentina", 41.82704, 12.48130], ["Jonio", 41.94687, 12.52759], ["Conca d'Oro", 41.93977, 12.52815], ["Libia", 41.93179, 12.51927], ["Termini", 41.90139, 12.50046], ["Ponte Mammolo", 41.92081, 12.56511], ["Marconi", 41.84937, 12.47564], ["Garbatella", 41.86634, 12.48306], ["Pietralata", 41.91472, 12.55518], ["Rebibbia", 41.92566, 12.57280], ["Santa Maria del Soccorso", 41.91555, 12.56057], ["Policlinico", 41.90888, 12.51208], ["Circo Massimo", 41.88341, 12.48808], ["Sant'Agnese/Annibaliano", 41.92387, 12.51593], ["Piramide", 41.87487, 12.48247], ["EUR Magliana", 41.83951, 12.46337], ["EUR Palasport", 41.83001, 12.46671], ["Tiburtina FS", 41.91079, 12.53033]],
    "C": [["Due Leoni - Fontana Candida", 41.86491, 12.65826], ["Borghesiana", 41.86469, 12.66709], ["Graniti", 41.86568, 12.69819], ["Parco di Centocelle", 41.87474, 12.56816], ["Torrenova", 41.86331, 12.61685], ["Pigneto", 41.88843, 12.52816], ["Porta Metronia", 41.88283, 12.50267], ["Colosseo – Fori Imperiali", 41.89164, 12.49025], ["Gardenie", 41.88620, 12.56213], ["Bolognetta", 41.86507, 12.68071], ["Finocchio", 41.86549, 12.68779], ["Giardinetti", 41.86432, 12.61001], ["Torre Gaia", 41.86415, 12.63556], ["Lodi", 41.88683, 12.51838], ["Mirti", 41.88120, 12.56660], ["Torre Angela", 41.86434, 12.62574], ["Malatesta", 41.88739, 12.54050], ["Alessandrino", 41.87154, 12.57849], ["Grotte Celoni", 41.86277, 12.64650], ["Monte Compatri - Pantano", 41.86567, 12.70765], ["San Giovanni", 41.88558, 12.51032], ["Torre Spaccata", 41.86879, 12.58712], ["Teano", 41.88903, 12.55147], ["Torre Maura", 41.86662, 12.59717]]
  }
};
