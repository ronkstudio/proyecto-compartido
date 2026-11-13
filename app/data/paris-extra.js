/* Datos complementarios de París (tarjeta #102): sellos del pasaporte, lista de viaje, zonas para armar viajes, calendario y textos extra.
   Lo que depende de los lugares (nivel de recomendación, premios, días que cierran, fotos, estaciones, colecciones) se carga en la etapa 2.
   Las claves son los ids de los lugares (nombre en minúsculas, sin acentos, con guiones). */
window.CITY_EXTRA = window.CITY_EXTRA || {};
window.CITY_EXTRA.paris = {
  tz: "Europe/Paris",

  /* Pasaporte parisino: sellos que se ganan marcando "Ya fui" en los lugares. Mismo formato que data/caba-extra.js. */
  stamps: [
    { id: "primer-paso", icon: "👣", name: "Primer paso", desc: "Visitá tu primer lugar", n: 1 },
    { id: "imperdibles", icon: "🏛️", name: "Lo esencial", desc: "5 imperdibles destacados", n: 5, cat: "ver", q: 3 },
    { id: "museos", icon: "🎨", name: "Ojo de museo", desc: "3 museos", n: 3, sub: "Museo" },
    { id: "verde", icon: "🌳", name: "Aire libre", desc: "3 parques o jardines", n: 3, sub: "Naturaleza" },
    { id: "noche", icon: "🍸", name: "Trasnochador", desc: "2 salidas de noche", n: 2, cat: "noche" },
    { id: "mercados", icon: "🛍️", name: "De mercado en mercado", desc: "Un mercado", n: 1, sub: "Mercado" },
    { id: "escapada", icon: "🚆", name: "Escapada", desc: "Una excursión fuera de la ciudad", n: 1, cat: "escapadas" },
    { id: "curioso", icon: "💎", name: "Fuera del circuito", desc: "Una joya oculta o un lugar de barrio", n: 1, tag: ["joya oculta", "vida de barrio"] },
    { id: "barrios", icon: "🏘️", name: "Explorador de barrios", desc: "Lugares en 5 barrios distintos", n: 5, barrios: true },
    { id: "honorario", icon: "🥖", name: "Parisino honorario", desc: "20 lugares visitados", n: 20 }
  ],

  /* Nivel de recomendación (tarjeta #159): 3 = Destacado, 2 = Muy recomendado, 1 = Buena opción.
     Los marcados como destacados en data/paris-lugares.js ya son 3; el resto es 2 salvo lo que se lista acá. */
  quality: {
    3: ["museo-rodin", "museo-de-la-orangerie", "le-comptoir-du-relais", "septime", "berthillon", "giverny-y-la-casa-de-monet",
      "le-meurice", "ritz-paris", "jardin-de-las-tullerias", "les-deux-magots", "angelina", "le-bon-marche"],
    1: ["ibis-paris-tour-eiffel-cambronne", "novotel-paris-centre-tour-eiffel", "big-bus-paris", "tootbus-paris", "c-ur-de-breizh",
      "breizh-cafe-montorgueil", "france-miniature", "la-mer-de-sable", "museo-grevin", "st-christopher-s-inn-canal", "avenue-montaigne"]
  },
  awards: {},
  /* Dietas (tarjeta #154). Solo con fuente: el sitio de cada local y OpenStreetMap ("diet:vegan" / "diet:gluten_free"), revisados el 13/11/2026.
     Sin TACC: Chambelland (chambelland.com), Copains (copains-paris.com), Judy (judy-paris.com) y Kapunka Vegan (kapunka-vegan.fr)
     dicen en su sitio que todo es sin gluten. Vegetarianos: Le Grenier de Notre-Dame (vegetariano desde 1978, según su sitio)
     y los otros tres son 100 % veganos según su sitio u OpenStreetMap. L'As du Fallafel y L'Arpège tienen opciones vegetarianas. */
  diet: {
    "chambelland": ["sin TACC"], "copains": ["sin TACC"], "judy": ["sin TACC"], "kapunka-vegan": ["sin TACC", "vegano", "vegetariano"],
    "le-potager-de-charlotte": ["vegano", "vegetariano"], "wild-the-moon": ["vegano", "vegetariano"], "le-potager-du-marais": ["vegano", "vegetariano"],
    "le-grenier-de-notre-dame": ["vegetariano"], "l-as-du-fallafel": ["vegetariano"], "l-arpege": ["vegetariano"]
  },
  dietFull: ["chambelland", "copains", "judy", "kapunka-vegan", "le-potager-de-charlotte", "wild-the-moon", "le-potager-du-marais", "le-grenier-de-notre-dame"],
  /* Días que abren o cierran (0 = domingo … 6 = sábado). Días fijos de cada lugar, según su sitio oficial; pueden cambiar en feriados. */
  only: {
    "marche-bastille": [4, 0], "marche-raspail": [2, 5, 0], "marche-president-wilson": [3, 6],
    "marche-aux-puces-de-saint-ouen": [6, 0, 1], "puces-de-vanves": [6, 0]
  },
  closed: {
    "museo-del-louvre": [2], "museo-de-orsay": [1], "museo-de-la-orangerie": [2], "museo-rodin": [1], "museo-picasso": [1],
    "museo-carnavalet": [1], "petit-palais": [1], "museo-del-quai-branly": [1], "museo-marmottan-monet": [1], "bourse-de-commerce": [2],
    "fundacion-louis-vuitton": [2], "museo-de-cluny": [1], "gran-galeria-de-la-evolucion": [2], "museo-de-artes-decorativas": [1],
    "catacumbas-de-paris": [1], "museo-de-las-cloacas": [1], "ciudad-de-las-ciencias-y-de-la-industria": [1],
    "du-pain-et-des-idees": [6, 0], "l-as-du-fallafel": [6], "marche-des-enfants-rouges": [1], "marche-d-aligre": [1]
  },

  /* Lista de preparación del viaje (se tilda y queda guardada en el dispositivo). */
  checklist: [
    { title: "Antes de viajar", items: [
      "Pasaporte o documento vigente, y una copia en el celular",
      "Seguro de viaje con cobertura médica",
      "Adaptador de enchufe tipo E o F (230 V)",
      "Avisar al banco que vas a usar la tarjeta en el exterior",
      "Reservar con tiempo el Louvre, la Torre Eiffel y los lugares más pedidos",
      "Descargar esta guía y los mapas de Google sin conexión"
    ] },
    { title: "Al llegar", items: [
      "Comprar el boleto Aeropuertos para llegar al centro",
      "Comprar una tarjeta Navigo Easy y cargarle boletos",
      "Comprar un chip prepago o activar la eSIM",
      "Anotar la dirección del alojamiento y dejar el pasaporte ahí"
    ] }
  ],

  /* Colecciones del inicio (tarjeta #159): cada una es un filtro de Explorar. */
  collections: [
    { name: "Clásicos parisinos", icon: "🥐", filter: { q: "clásico" }, cover: "cafe-de-flore" },
    { name: "Joyas menos conocidas", icon: "💎", filter: { q: "joya oculta" }, cover: "galerie-vivienne" },
    { name: "París gratis", icon: "💸", filter: { prices: [0] }, cover: "jardin-de-luxemburgo" },
    { name: "Miradores y terrazas", icon: "🌇", filter: { q: "mirador" }, cover: "arco-del-triunfo" },
    { name: "Arte y museos", icon: "🎨", filter: { q: "arte" }, cover: "museo-de-orsay" },
    { name: "Bistrós", icon: "🍷", filter: { cat: "comer", sub: "Bistró" }, cover: "chez-janou" },
    { name: "Panaderías y dulces", icon: "🥖", filter: { q: "panadería" }, cover: "du-pain-et-des-idees" },
    { name: "Cafés históricos", icon: "☕", filter: { cat: "comer", sub: "Café histórico" }, cover: "les-deux-magots" },
    { name: "Jazz y cabarets", icon: "🎷", filter: { cat: "noche" }, cover: "moulin-rouge" },
    { name: "Con chicos", icon: "🧒", filter: { q: "chicos" }, cover: "jardin-d-acclimatation" },
    { name: "Vegetariano y vegano", icon: "🥬", filter: { diets: ["vegetariano"] }, cover: "" },
    { name: "Sin TACC", icon: "🌾", filter: { diets: ["sin TACC"] }, cover: "" },
    { name: "Grandes tiendas", icon: "🛍️", filter: { cat: "compras", sub: "Grandes tiendas" }, cover: "galerias-lafayette-haussmann" },
    { name: "Cine y teatro", icon: "🎭", filter: { cat: "ocio" }, cover: "le-grand-rex" },
    { name: "Barrios fuera del circuito", icon: "🏘️", filter: { q: "vida de barrio" }, cover: "" },
    { name: "Excursiones de un día", icon: "🚆", filter: { cat: "escapadas" }, cover: "palacio-de-versalles" }
  ],

  /* Zonas para el armado automático de viajes, en orden de prioridad. */
  zones: [
    { name: "Louvre, Tullerías y las islas", barrios: ["Louvre y Palais-Royal", "Islas del Sena"] },
    { name: "Torre Eiffel y Campos Elíseos", barrios: ["Torre Eiffel y Trocadero", "Champs-Élysées"] },
    { name: "Le Marais y Bastilla", barrios: ["Le Marais", "Bastille y Oberkampf"] },
    { name: "Saint-Germain y Barrio Latino", barrios: ["Saint-Germain-des-Prés", "Barrio Latino", "Montparnasse"] },
    { name: "Montmartre y la Ópera", barrios: ["Montmartre", "Ópera y Grands Boulevards"] },
    { name: "Canal Saint-Martin y Belleville", barrios: ["Canal Saint-Martin", "Belleville"] }
  ],
  zonasDosDias: [["Louvre, Marais y Saint-Germain", [0, 2, 3]], ["Torre Eiffel y Montmartre", [1, 4]]],
  zonaChicos: 1,

  /* Palabras que la gente escribe → cómo figura en la guía. */
  synonyms: {
    desayuno: "cafe", brunch: "cafe", merienda: "cafe", cafeteria: "cafe", vegano: "vegetariano",
    hotel: "hospedaje", hoteles: "hospedaje", dormir: "hospedaje", alojamiento: "hospedaje", hostal: "hostel",
    ninos: "chicos", nenes: "chicos", familia: "chicos", familias: "chicos", barato: "economico", baratos: "economico", gratuito: "gratis",
    tragos: "cocteles", cocktail: "cocteles", cocktails: "cocteles", boliche: "club", bailar: "club",
    excursion: "excursiones", escapada: "excursiones", paseo: "caminar", shopping: "compras", regalos: "souvenirs",
    lluvia: "lluvia", llueve: "lluvia", techo: "lluvia", vista: "mirador", vistas: "mirador", guia: "tours", guias: "tours", visita: "tours",
    boulangerie: "panaderia", croissant: "panaderia", medialunas: "panaderia", pan: "panaderia", bistro: "bistro", vino: "vinos", barco: "crucero"
  },

  /* Calendario: fechas habituales, a confirmar cada año. m = meses (1-12). */
  events: [
    { m: [1, 2], when: "Enero o febrero", icon: "🐉", name: "Año Nuevo chino", desc: "Desfiles con dragones y música en el Barrio Chino (distrito 13) y en Belleville." },
    { m: [3, 9, 10], when: "Marzo y fines de septiembre", icon: "👗", name: "Semana de la Moda", desc: "Los desfiles de las grandes marcas. La ciudad se llena de gente de la moda y los hoteles se encarecen." },
    { m: [4], when: "Abril", icon: "🏃", name: "Maratón de París", desc: "Pasa por los Campos Elíseos y los bosques de Vincennes y Boulogne; hay cortes de tránsito ese domingo." },
    { m: [5, 6], when: "Fines de mayo y principios de junio", icon: "🎾", name: "Roland Garros", desc: "El torneo de tenis sobre polvo de ladrillo, en el estadio del oeste de la ciudad." },
    { m: [6], when: "21 de junio", icon: "🎶", name: "Fiesta de la Música", desc: "Música gratis en plazas, bares y esquinas de toda la ciudad, hasta tarde." },
    { m: [6], when: "Fines de junio", icon: "🏳️‍🌈", name: "Marcha del Orgullo", desc: "La marcha del orgullo de París, con desfile por el centro." },
    { m: [7], when: "14 de julio", icon: "🇫🇷", name: "Fiesta Nacional", desc: "Desfile militar en los Campos Elíseos a la mañana y fuegos artificiales en la Torre Eiffel a la noche." },
    { m: [7], when: "Julio", icon: "🚴", name: "Llegada del Tour de Francia", desc: "La última etapa de la carrera de ciclismo termina en París, con miles de personas en la calle." },
    { m: [7, 8], when: "Julio y agosto", icon: "🏖️", name: "Paris Plages", desc: "Playas armadas a orillas del Sena y en el canal de la Villette, con actividades gratis." },
    { m: [9], when: "Tercer fin de semana de septiembre", icon: "🏛️", name: "Jornadas del Patrimonio", desc: "Edificios oficiales y lugares que suelen estar cerrados abren gratis al público." },
    { m: [10], when: "Octubre", icon: "🍇", name: "Fiesta de la Vendimia de Montmartre", desc: "Celebra la cosecha del viñedo de Montmartre con desfiles, puestos y fuegos artificiales." },
    { m: [11, 12, 1], when: "Fines de noviembre a enero", icon: "✨", name: "Luces de Navidad", desc: "Iluminación de los Campos Elíseos y de las grandes tiendas del bulevar Haussmann, con sus vidrieras animadas." },
    { m: [11, 12], when: "Fines de noviembre y diciembre", icon: "🎄", name: "Mercados de Navidad", desc: "Puestos con vino caliente, comida y artesanías en varias plazas y jardines de la ciudad." },
    { m: [12], when: "31 de diciembre", icon: "🎆", name: "Fin de año", desc: "Festejo en los Campos Elíseos, con proyecciones sobre el Arco del Triunfo. Hay mucha gente: cuidá tus cosas." }
  ],

  /* Bloques extra para Info práctica. */
  practicalMore: [
    { icon: "🗣️", title: "Palabras que vas a ver", items: [
      { t: "Entrée · Sortie", d: "Entrada y salida." },
      { t: "Ouvert · Fermé", d: "Abierto y cerrado." },
      { t: "Quai · Voie", d: "Andén y vía, en las estaciones." },
      { t: "Correspondance", d: "Combinación con otra línea, en el metro." },
      { t: "Boulangerie", d: "Panadería: baguette, croissants y algo dulce." },
      { t: "Service compris", d: "El servicio ya está incluido en la cuenta." },
      { t: "Grève", d: "Huelga: si la ves en el transporte, revisá cómo moverte ese día." }
    ] },
    { icon: "🏥", title: "Salud y farmacias", items: [
      { t: "Urgencias", d: "Llamá al 112 o al 15. Los hospitales grandes tienen guardia las 24 horas." },
      { t: "Si no es urgente", d: "El 15 también te orienta: te dicen si necesitás un médico y a dónde ir." },
      { t: "Farmacias", d: "Tienen una cruz verde. De noche y los domingos hay farmacias de turno: el cartel está en la puerta de cualquier farmacia." },
      { t: "Seguro de viaje", d: "Muy recomendable: la atención es muy buena, pero cara sin cobertura." }
    ] },
    { icon: "🔍", title: "Cómo elegimos los lugares", items: [
      { t: "Selección", d: "La guía incluye solo lugares con reputación sostenida: premios, distinciones oficiales y buen consenso en reseñas públicas." },
      { t: "Niveles", d: "'Destacado' son los mejores de su categoría, 'Muy recomendado' es una apuesta segura y 'Buena opción' cumple bien pero no es imprescindible." },
      { t: "Opiniones al día", d: "En cada ficha, el botón 'Opiniones, horarios y fotos' abre el lugar en Google Maps con su puntaje, reseñas, horarios actualizados y fotos." },
      { t: "Precios", d: "Usamos niveles ($ a $$$$) en vez de montos porque los precios cambian seguido." }
    ] }
  ],

  /* Fotos (tarjeta #158): la foto principal de cada lugar en Wikidata, que está en Wikimedia Commons con licencia libre.
     Solo se aceptó si el elemento de Wikidata tiene su ubicación a menos de 1,5 km del lugar; se revisaron una por una
     y se sacó la que no era del lugar. Los lugares sin foto muestran la tarjeta con su nombre. */
  photos: {
    "torre-eiffel": "a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    "arco-del-triunfo": "1/1a/Arc_de_Triomphe_-_Août_2026.jpg",
    "avenida-de-los-campos-eliseos": "7/72/Avenue_des_Champs-Élysées,_Paris_3_October_2010.jpg",
    "opera-garnier": "d/dc/Paris_Opera_full_frontal_architecture,_May_2009.jpg",
    "puente-alejandro-iii": "8/84/Pont_Alexandre_III_from_pont_de_la_Concorde,_Paris_17_May_2012.jpg",
    "museo-del-louvre": "2/28/Cour_Napoléon_at_night_-_Louvre.jpg",
    "museo-de-orsay": "b/bb/MuseeDOrsay.jpg",
    "museo-de-la-orangerie": "1/11/2011-12-Musee_de_lorangerie.jpg",
    "museo-rodin": "3/39/L'hôtel_Biron_(musée_Rodin)_à_Paris,_13_juin_2021_01.jpg",
    "museo-picasso": "c/c7/Paris_3e_Hôtel_Salé_640.jpg",
    "museo-carnavalet": "4/44/Carnavalet_París_10.JPG",
    "petit-palais": "2/25/Petit_Palais_Paris_2.jpg",
    "museo-del-quai-branly": "b/ba/Musée_du_quai_Branly_-_20150801_16h07_(10629).jpg",
    "museo-marmottan-monet": "5/54/Paris.-_Musée_Marmottan_Monet.jpg",
    "museo-jacquemart-andre": "9/90/Musée_Jacquemart_André_2007_-_Recoura.jpg",
    "bourse-de-commerce": "a/a0/Bourse_Commerce_-_Paris_I_(FR75)_-_2021-06-05_-_1.jpg",
    "fundacion-louis-vuitton": "a/a7/Fondation_Louis_Vuitton_5.jpg",
    "museo-de-cluny": "5/57/Hôtel_de_Cluny,_Paris_24_April_2012.jpg",
    "museo-de-montmartre": "e/eb/Musée_de_Montmartre_-_maison_du_Bel_Air.jpg",
    "atelier-des-lumieres": "3/38/Atelier_des_Lumières_Klimt.jpg",
    "museo-de-artes-decorativas": "d/d2/Musée_des_Arts_Décoratifs_2009_001.jpg",
    "catedral-de-notre-dame": "a/af/Notre-Dame_de_Paris_2013-07-24.jpg",
    "sainte-chapelle": "3/33/Szensapel.jpg",
    "basilica-del-sagrado-corazon": "c/c5/Le_sacre_coeur.jpg",
    "iglesia-de-saint-sulpice": "5/5a/Paris_Saint-Sulpice_Fassade_4-5_A.jpg",
    "iglesia-de-la-madeleine": "f/fc/Eglise_de_la_Madeleine_2024.jpg",
    "panteon": "5/58/Panthéon,_Paris_25_March_2012.jpg",
    "catacumbas-de-paris": "8/8b/Catacumbas,_París,_Francia,_2022-11-01,_DD_117-119_HDR.jpg",
    "la-conciergerie": "5/5f/Paris_Conciergerie_265.jpg",
    "cementerio-del-pere-lachaise": "b/b0/Main_gate_of_the_Père-Lachaise_Cemetery,_Paris_13_June_2014.jpg",
    "galerie-vivienne": "b/b9/P1040471_Paris_II_galerie_Vivienne_rwk.JPG",
    "passage-des-panoramas": "a/a8/Passage_Panoramas_-_Paris_II_(FR75)_-_2022-05-27_-_1.jpg",
    "coulee-verte-rene-dumont": "f/fc/Promenade_plantée,_Paris_August_2009_(10).jpg",
    "jardin-de-luxemburgo": "4/47/LuxembourgMontparnasse_2.jpg",
    "jardin-de-las-tullerias": "f/fc/Grande_Roue_de_Paris_-_Louvre_et_Jardins_des_Tuileries.jpg",
    "jardin-des-plantes": "4/48/Paris_75005_Grande_Galerie_de_l'Evolution_20070804.jpg",
    "parque-de-belleville": "b/b0/P1010851_Paris_XX_Parc_de_Belleville_reductwk.JPG",
    "parque-monceau": "b/b5/Parc_Monceau_20060812_35.jpg",
    "parque-de-la-villette": "8/85/Parc_de_la_Villette,_Paris_2010.jpg",
    "place-des-vosges": "3/3d/Place_des_Vosges_vue_aérienne.png",
    "plaza-de-la-concordia": "f/fa/Place_de_la_Concorde_from_the_Eiffel_Tower,_Paris_April_2011.jpg",
    "place-vendome": "d/da/The_Place_Vendôme_Column-Paris.jpg",
    "place-du-tertre": "0/00/Place_Tertre_-_Paris_XVIII_(FR75)_-_2026-04-10_-_1.jpg",
    "plaza-de-la-bastilla": "7/7e/Place_de_la_Bastille,_avril_2021.jpg",
    "butte-aux-cailles": "0/0d/Butte_aux_Cailles_3,_Paris_31_May_2008.jpg",
    "rue-cremieux": "6/62/Rue_Crémieux,_Paris_12.jpg",
    "bouillon-chartier": "3/3d/Paris_Chartier_1302.jpg",
    "bouillon-chartier-montparnasse": "0/02/Bouillon_Chartier_Montparnasse.jpg",
    "bouillon-racine": "d/d3/Exterior_of_the_Bouillon_Racine_(Paris).png",
    "brasserie-lipp": "9/95/Brasserie_Lipp,_151_boulevard_Saint-Germain,_Paris_6e.jpg",
    "la-coupole": "9/99/La_Coupole_-_Paris.JPG",
    "bofinger": "1/1a/Brasserie_Bofinger.JPG",
    "le-train-bleu": "8/80/Train_bleu_01.jpg",
    "le-procope": "6/68/Le_Procope_1,_Paris_2010.jpg",
    "cafe-de-flore": "6/69/Café_de_Flore,_172_boulevard_Saint-Germain,_Paris_6e.jpg",
    "les-deux-magots": "c/c8/Les_Deux_Magots,_25_September_2019.jpg",
    "le-consulat": "0/05/Paris_Rue_Norvins_2.jpg",
    "la-maison-rose": "0/02/Montmartre_Maison_Rose_002.JPG",
    "stohrer": "9/9c/Patisserie_Stohrer_(Paris).jpg",
    "laduree-champs-elysees": "3/30/Ladurée,_Champs-Élysées,_Paris_8e_005.JPG",
    "harry-s-new-york-bar": "0/07/HarrysNewYorkBar_Neon.JPG",
    "duc-des-lombards": "2/2c/Le_Duc_des_Lombards_-_Paris_-_3.jpg",
    "sunset-sunside": "1/19/Sunset-Sunside.jpg",
    "le-baiser-sale": "9/96/Le_Baiser_Salé_-_Paris.jpg",
    "new-morning": "3/35/Rue_des_Petites-Écuries_(Paris),_New_Morning.jpg",
    "moulin-rouge": "5/59/Moulin_Rouge,_17_April_2011.jpg",
    "crazy-horse": "e/e7/Crazy-Horse-Saloon-P1000388.jpg",
    "paradis-latin": "c/c5/Paradis_Latin_2012.JPG",
    "au-lapin-agile": "e/ec/Au_Lapin_Agile,_Paris_20_May_2014.jpg",
    "l-olympia": "3/3c/Olympia_Paris_6.jpg",
    "la-cigale": "1/14/La_Cigale_Paris.jpg",
    "le-bataclan": "0/0f/Bataclan,_50_boulevard_Voltaire,_Paris_18_July_2015_-_panoramio_1.jpg",
    "philharmonie-de-paris": "d/d3/Philharmonie_de_Paris_@_La_Villette_@_Paris_(33892630246).jpg",
    "le-grand-rex": "7/74/GrandRexFacade90ans.jpg",
    "max-linder-panorama": "d/dd/Max_Linder_Panorama_et_Théâtre_des_Nouveautés_façades.jpg",
    "studio-28": "8/87/Studio_28_nuit.jpg",
    "le-champo": "4/4e/Le_Champollion.JPG",
    "comedie-francaise": "e/eb/Comédie_Française_colonnes.jpg",
    "theatre-du-chatelet": "e/e4/Théâtre_du_Châtelet_Façade_(cropped).jpg",
    "theatre-de-la-ville": "7/72/Théâtre_Sarah-Bernhardt_1.jpg",
    "jardin-d-acclimatation": "c/c0/Jardin_d'acclimatation_-_Fondation_Louis_Vuitton.jpg",
    "museo-grevin": "c/ce/Musée_Grévin,_Paris_30_July_2016.jpg",
    "aquarium-de-paris": "f/f7/Tunnel_aquarium_trocadero.jpg",
    "bateaux-mouches": "e/e5/Bateaux_Mouches_Paris_2011.jpg",
    "vedettes-du-pont-neuf": "e/e0/Paris_Notre_Dame_and_Seine_River_Left_Side_Ile_de_la_Cité.jpg",
    "palacio-de-versalles": "0/04/Vue_aérienne_du_domaine_de_Versailles_par_ToucanWings_-_Creative_Commons_By_Sa_3.0_-_083.jpg",
    "castillo-de-fontainebleau": "8/85/Le_Grand_Escalier_à_Fer_de_Cheval.jpg",
    "auvers-sur-oise": "0/0f/Auvers-sur-Oise_(95),_château_de_Leyrit,_rue_de_Léry.jpg",
    "provins": "8/80/0_Provins_-_Le_centre_historique_de_la_ville_basse.JPG",
    "reims": "4/4c/Collage_Reims.jpg",
    "disneyland-paris": "f/f1/Disneyland_Park_05,_Paris_22_August_2013.jpg",
    "parc-asterix": "b/bb/Goudurix.JPG",
    "france-miniature": "5/58/Elancourt_France_miniature.jpg",
    "bosque-de-fontainebleau": "1/18/Rochers_en_forêt_de_Fontainebleau11.JPG",
    "le-meurice": "4/4b/Hôtel_Meurice_-_Paris.jpg",
    "ritz-paris": "e/ec/Hôtel_Ritz.jpg",
    "hotel-plaza-athenee": "d/da/Plaza_Athénée,_avenue_Montaigne,_Paris_8e.jpg",
    "four-seasons-hotel-george-v": "f/fd/Hôtel_George-V_25_08_2007_n3.jpg",
    "cheval-blanc-paris": "d/da/La_Samaritaine_depuis_le_pont_Neuf.jpg",
    "printemps-haussmann": "5/5c/Facade_printemps.JPG",
    "le-bon-marche": "d/d5/Le_Bon_Marché,_Paris_27_May_2012.jpg",
    "la-samaritaine": "3/3f/La_Samaritaine_and_Statue_of_Henri_IV.jpg",
    "la-grande-epicerie-de-paris": "e/ee/La_grande_épicerie_Entrée.jpg",
    "marche-d-aligre": "1/1c/P1010871_Paris_XII_Place_Aligre_Marché_Beauvau_reductwk.JPG",
    "marche-bastille": "e/e5/Marché_Bastille,_Paris_December_2006_007.jpg",
    "marche-raspail": "6/65/Marché_Raspail_(2405771984).jpg",
    "marche-aux-puces-de-saint-ouen": "9/96/Marche_Malassis4.jpg",
    "puces-de-vanves": "8/80/Marché_aux_puces_de_la_porte_de_Vanves_Paris.jpg",
    "village-saint-paul": "f/f5/P1010317_Carte_de_Paris_Vaugondy-1760_partie_est_quartier_Saint-Paul_reductwk.JPG",
    "shakespeare-and-company": "1/12/Shakespeare_and_Company,_Paris.jpg",
    "librairie-galignani": "5/5d/Galignani_001.jpg",
    "parc-des-princes": "f/f4/Paris_Parc_des_Princes_1.jpg",
    "stade-de-france": "5/53/StadeFranceNationsLeague2018.jpg",
    "accor-arena": "c/cd/Palais_Omnisports_de_Paris-Bercy_2007.jpg",
    "bosque-de-boulogne": "5/56/La_Défense_and_Bois_de_Boulogne_from_the_Eiffel_Tower,_11_June_2017_001.jpg",
    "parque-montsouris": "e/e4/Parc_Montsouris_@_Paris_(29860614110).jpg",
    "piscina-molitor": "7/75/Paris,_piscine_Molitor,_1_November_2015_003.jpg",
    "piscina-georges-vallerey": "5/5f/Piscine_Georges_Vallerey,_Paris_8_April_2017.jpg"
  },
  /* Estaciones de metro y RER dentro de París (tarjeta #158), de las líneas de OpenStreetMap, 13/11/2026. Sirven para mostrar la estación más cercana en cada ficha. */
  stations: {
    "1": [["Porte Maillot", 48.87820, 2.28144], ["Charles de Gaulle - Étoile", 48.87460, 2.29488], ["Franklin D. Roosevelt", 48.86965, 2.30805], ["Concorde", 48.86622, 2.32443], ["Palais Royal - Musée du Louvre", 48.86240, 2.33638], ["Châtelet", 48.85922, 2.34608], ["Louvre - Rivoli", 48.86081, 2.34114], ["Champs-Élysées - Clemenceau", 48.86750, 2.31408], ["Argentine", 48.87552, 2.28959], ["George V", 48.87209, 2.30043], ["Gare de Lyon", 48.84588, 2.37378], ["Bastille", 48.85202, 2.36868], ["Hôtel de Ville", 48.85736, 2.35208], ["Reuilly - Diderot", 48.84715, 2.38500], ["Nation", 48.84784, 2.39609], ["Porte de Vincennes", 48.84740, 2.40736], ["Saint-Paul", 48.85539, 2.36042], ["Tuileries", 48.86452, 2.32967]],
    "2": [["Ménilmontant", 48.86671, 2.38337], ["Philippe Auguste", 48.85826, 2.39017], ["Couronnes", 48.86906, 2.38047], ["Colonel Fabien", 48.87742, 2.37102], ["Anvers", 48.88297, 2.34461], ["La Chapelle", 48.88442, 2.35995], ["Stalingrad", 48.88427, 2.36633], ["Barbès - Rochechouart", 48.88380, 2.35012], ["Courcelles", 48.87940, 2.30437], ["Belleville", 48.87242, 2.37654], ["Jaurès", 48.88173, 2.37025], ["Pigalle", 48.88220, 2.33867], ["Place de Clichy", 48.88390, 2.32837], ["Père Lachaise", 48.86235, 2.38776], ["Nation", 48.84798, 2.39592], ["Villiers", 48.88111, 2.31492], ["Victor Hugo", 48.86996, 2.28604], ["Monceau", 48.88029, 2.30859], ["Ternes", 48.87829, 2.29908], ["Rome", 48.88224, 2.32133], ["Blanche", 48.88349, 2.33363], ["Alexandre Dumas", 48.85631, 2.39450], ["Avron", 48.85150, 2.39824], ["Charles de Gaulle - Étoile", 48.87455, 2.29546], ["Porte Dauphine", 48.87168, 2.27758]],
    "3": [["Gambetta", 48.86494, 2.39782], ["Saint-Lazare", 48.87511, 2.32441], ["Havre - Caumartin", 48.87322, 2.32802], ["Père Lachaise", 48.86303, 2.38638], ["Opéra", 48.87110, 2.33175], ["Réaumur Sébastopol", 48.86639, 2.35179], ["Sentier", 48.86752, 2.34657], ["Porte de Bagnolet", 48.86460, 2.40717], ["République", 48.86719, 2.36439], ["Arts et Métiers", 48.86553, 2.35618], ["Temple", 48.86652, 2.36088], ["Bourse", 48.86865, 2.34135], ["Rue Saint-Maur", 48.86433, 2.37948], ["Parmentier", 48.86538, 2.37391], ["Quatre Septembre", 48.86960, 2.33590], ["Europe", 48.87877, 2.32226], ["Malesherbes", 48.88280, 2.30932], ["Villiers", 48.88106, 2.31526], ["Porte de Champerret", 48.88602, 2.29414], ["Pereire", 48.88473, 2.29859], ["Wagram", 48.88389, 2.30411]],
    "3bis": [["Saint-Fargeau", 48.87152, 2.40431], ["Pelleport", 48.86810, 2.40132], ["Gambetta", 48.86539, 2.39892], ["Porte des Lilas", 48.87626, 2.40649]],
    "4": [["Simplon", 48.89385, 2.34784], ["Château Rouge", 48.88687, 2.34955], ["Étienne Marcel", 48.86395, 2.34939], ["Château d'Eau", 48.87289, 2.35631], ["Les Halles", 48.86216, 2.34588], ["Marcadet - Poissonniers", 48.89114, 2.34974], ["Barbès - Rochechouart", 48.88378, 2.34951], ["Gare de L'Est", 48.87605, 2.35772], ["Porte de Clignancourt", 48.89740, 2.34485], ["Gare du Nord", 48.87970, 2.35644], ["Châtelet", 48.85979, 2.34667], ["Réaumur - Sébastopol", 48.86672, 2.35283], ["Strasbourg - Saint-Denis", 48.86939, 2.35432], ["Montparnasse-Bienvenüe", 48.84328, 2.32581], ["Cité", 48.85533, 2.34752], ["Denfert-Rochereau", 48.83431, 2.33231], ["Vavin", 48.84225, 2.32892], ["Raspail", 48.83893, 2.33079], ["Mouton-Duvernet", 48.83129, 2.32985], ["Alésia", 48.82803, 2.32702], ["Porte d'Orléans", 48.82364, 2.32558], ["Odéon", 48.85237, 2.33941], ["Saint-Michel", 48.85310, 2.34307], ["Saint-Germain-des-Prés", 48.85365, 2.33448], ["Saint-Sulpice", 48.85112, 2.33067], ["Saint-Placide", 48.84711, 2.32700]],
    "5": [["Jacques Bonsergent", 48.87112, 2.36075], ["Quai de la Rapée", 48.84647, 2.36589], ["Laumière", 48.88516, 2.37946], ["Ourcq", 48.88706, 2.38668], ["Porte de Pantin", 48.88865, 2.39267], ["Jaurès", 48.88331, 2.37240], ["Gare d'Austerlitz", 48.84238, 2.36556], ["Stalingrad", 48.88442, 2.36601], ["Gare de L'Est", 48.87623, 2.35887], ["Gare du Nord", 48.87990, 2.35737], ["République", 48.86787, 2.36385], ["Saint-Marcel", 48.83829, 2.36082], ["Campo-Formio", 48.83512, 2.35818], ["Place d'Italie", 48.83082, 2.35574], ["Bastille", 48.85325, 2.36853], ["Oberkampf", 48.86404, 2.36940], ["Richard Lenoir", 48.86022, 2.37203], ["Bréguet-Sabin", 48.85664, 2.37040]],
    "6": [["Corvisart", 48.82979, 2.35049], ["Edgar Quinet", 48.84110, 2.32507], ["Sèvres-Lecourbe", 48.84550, 2.30996], ["Cambronne", 48.84738, 2.30338], ["La Motte-Picquet - Grenelle", 48.84872, 2.29897], ["Bir-Hakeim", 48.85363, 2.28960], ["Passy", 48.85731, 2.28595], ["Trocadéro", 48.86336, 2.28747], ["Charles de Gaulle - Étoile", 48.87442, 2.29496], ["Denfert-Rochereau", 48.83434, 2.33272], ["Nation", 48.84772, 2.39553], ["Pasteur", 48.84242, 2.31297], ["Kléber", 48.87096, 2.29296], ["Chevaleret", 48.83508, 2.36855], ["Nationale", 48.83330, 2.36316], ["Place d'Italie", 48.83120, 2.35708], ["Daumesnil", 48.83952, 2.39659], ["Quai de la Gare", 48.83718, 2.37317], ["Montparnasse-Bienvenüe", 48.84193, 2.31994], ["Bercy", 48.84027, 2.38059], ["Saint-Jacques", 48.83276, 2.33756], ["Glacière", 48.83101, 2.34393], ["Dugommier", 48.83901, 2.38970], ["Picpus", 48.84519, 2.40052], ["Bel-Air", 48.84166, 2.40104], ["Raspail", 48.83890, 2.33065], ["Boissière", 48.86703, 2.29011], ["Dupleix", 48.85027, 2.29406]],
    "7": [["Le Peletier", 48.87484, 2.33996], ["Cadet", 48.87597, 2.34429], ["Porte d'Italie", 48.81909, 2.35953], ["Porte d'Ivry", 48.82133, 2.36996], ["Châtelet", 48.85685, 2.34834], ["Opéra", 48.86980, 2.33251], ["Palais Royal - Musée du Louvre", 48.86289, 2.33664], ["Gare de L'Est", 48.87649, 2.35804], ["Pyramides", 48.86552, 2.33453], ["Chaussée d'Antin - La Fayette", 48.87320, 2.33370], ["Poissonnière", 48.87701, 2.34826], ["Place d'Italie", 48.83147, 2.35533], ["Louis Blanc", 48.88123, 2.36431], ["Château Landon", 48.87893, 2.36237], ["Maison Blanche", 48.82146, 2.35879]],
    "7bis": [["Buttes Chaumont", 48.87840, 2.38120], ["Bolivar", 48.88093, 2.37391], ["Jaurès", 48.88219, 2.37105], ["Botzaris", 48.87951, 2.38859], ["Place des Fêtes", 48.87692, 2.39327], ["Louis Blanc", 48.88092, 2.36496], ["Pré Saint-Gervais", 48.88025, 2.39884], ["Danube", 48.88176, 2.39419]],
    "8": [["Ledru-Rollin", 48.85129, 2.37603], ["Concorde", 48.86648, 2.32175], ["Invalides", 48.86034, 2.31468], ["Bastille", 48.85368, 2.36919], ["Daumesnil", 48.83979, 2.39559], ["Opéra", 48.87044, 2.33128], ["La Motte-Picquet - Grenelle", 48.85003, 2.29924], ["Reuilly — Diderot", 48.84710, 2.38705], ["Madeleine", 48.86958, 2.32617], ["République", 48.86769, 2.36283], ["Richelieu - Drouot", 48.87173, 2.33853], ["Bonne Nouvelle", 48.87047, 2.34894], ["Strasbourg - Saint-Denis", 48.86941, 2.35373], ["Grands Boulevards", 48.87143, 2.34357]],
    "9": [["Rue des Boulets", 48.85258, 2.38879], ["Saint-Augustin", 48.87447, 2.32179], ["Iéna", 48.86461, 2.29373], ["Rue de la Pompe", 48.86407, 2.27815], ["La Muette", 48.85798, 2.27406], ["Ranelagh", 48.85558, 2.27022], ["Jasmin", 48.85256, 2.26818], ["Exelmans", 48.84300, 2.26005], ["Porte de Saint-Cloud", 48.83779, 2.25656], ["Alma-Marceau", 48.86487, 2.30029], ["Saint-Philippe du Roule", 48.87224, 2.31005], ["Nation", 48.84895, 2.39611], ["Franklin D. Roosevelt", 48.86812, 2.30851], ["Havre - Caumartin", 48.87363, 2.32831], ["Oberkampf", 48.86411, 2.36954], ["Michel-Ange - Auteuil", 48.84806, 2.26429], ["Michel-Ange - Molitor", 48.84475, 2.26149], ["Chaussée d'Antin - La Fayette", 48.87288, 2.33387], ["Miromesnil", 48.87380, 2.31522], ["République", 48.86761, 2.36271], ["Richelieu - Drouot", 48.87219, 2.33879], ["Trocadéro", 48.86314, 2.28623], ["Strasbourg - Saint-Denis", 48.86937, 2.35372], ["Bonne Nouvelle", 48.87043, 2.34893], ["Grands Boulevards", 48.87139, 2.34356], ["Saint-Ambroise", 48.86105, 2.37480], ["Voltaire", 48.85816, 2.37980], ["Charonne", 48.85474, 2.38536], ["Buzenval", 48.85182, 2.40138], ["Maraîchers", 48.85271, 2.40611], ["Porte de Montreuil", 48.85352, 2.41065]],
    "10": [["Odéon", 48.85222, 2.33933], ["Jussieu", 48.84614, 2.35599], ["Sèvres-Babylone", 48.85161, 2.32734], ["La Motte-Picquet - Grenelle", 48.85002, 2.29928], ["Duroc", 48.84663, 2.31597], ["Michel-Ange - Molitor", 48.84522, 2.26107], ["Mabillon", 48.85290, 2.33498], ["Chardon-Lagache", 48.84541, 2.26717], ["Mirabeau", 48.84680, 2.27172], ["Javel - André Citroën", 48.84614, 2.27830], ["Charles Michels", 48.84650, 2.28587], ["Avenue Émile Zola", 48.84699, 2.29531], ["Ségur", 48.84699, 2.30748], ["Vaneau", 48.84912, 2.32188], ["Cluny-La Sorbonne", 48.85111, 2.34421], ["Maubert - Mutualité", 48.85011, 2.34837], ["Cardinal Lemoine", 48.84651, 2.35176], ["Gare d'Austerlitz", 48.84244, 2.36439], ["Michel-Ange - Auteuil", 48.84806, 2.26390], ["Église d'Auteuil", 48.84734, 2.26869], ["Porte d'Auteuil", 48.84807, 2.25877]],
    "11": [["Châtelet", 48.85780, 2.34752], ["République", 48.86801, 2.36511], ["Place des Fêtes", 48.87671, 2.39300], ["Porte des Lilas", 48.87742, 2.40744], ["Télégraphe", 48.87549, 2.39904], ["Arts et Métiers", 48.86535, 2.35660], ["Hôtel de Ville", 48.85789, 2.35171], ["Rambuteau", 48.86181, 2.35386], ["Jourdain", 48.87508, 2.38928], ["Pyrénées", 48.87388, 2.38529], ["Belleville", 48.87189, 2.37657], ["Goncourt", 48.87001, 2.37120]],
    "12": [["Porte de Versailles", 48.83243, 2.28799], ["Marx Dormoy", 48.89051, 2.36000], ["Concorde", 48.86572, 2.32282], ["Madeleine", 48.87032, 2.32526], ["Porte de la Chapelle", 48.89769, 2.35926], ["Saint-Lazare", 48.87570, 2.32784], ["Marcadet - Poissonniers", 48.89129, 2.35076], ["Pigalle", 48.88222, 2.33717], ["Pasteur", 48.84300, 2.31282], ["Montparnasse-Bienvenüe", 48.84397, 2.32355], ["Falguière", 48.84450, 2.31793], ["Rue du Bac", 48.85518, 2.32575], ["Jules Joffrin", 48.89246, 2.34464], ["Lamarck - Caulaincourt", 48.88975, 2.33883], ["Abbesses", 48.88480, 2.33864], ["Assemblée Nationale", 48.86058, 2.32117], ["Solférino", 48.85866, 2.32299], ["Notre-Dame de Lorette", 48.87604, 2.33742], ["Trinité d'Estienne d'Orves", 48.87636, 2.33263], ["Rennes", 48.84821, 2.32774], ["Notre-Dame des Champs", 48.84468, 2.32879], ["Volontaires", 48.84152, 2.30800], ["Vaugirard", 48.83958, 2.30129], ["Convention", 48.83731, 2.29663], ["Sèvres-Babylone", 48.85162, 2.32680], ["Saint-Georges", 48.87842, 2.33742]],
    "13": [["Saint-François-Xavier", 48.85140, 2.31440], ["Varenne", 48.85589, 2.31491], ["Invalides", 48.85964, 2.31422], ["Gaîté", 48.83863, 2.32249], ["Plaisance", 48.83178, 2.31403], ["Pernety", 48.83399, 2.31819], ["Liège", 48.87960, 2.32702], ["Saint-Lazare", 48.87531, 2.32500], ["Champs-Élysées - Clemenceau", 48.86717, 2.31340], ["Place de Clichy", 48.88349, 2.32728], ["Duroc", 48.84740, 2.31623], ["Miromesnil", 48.87335, 2.31453], ["Montparnasse-Bienvenüe", 48.84258, 2.32079], ["Porte de Vanves", 48.82767, 2.30531], ["La Fourche", 48.88698, 2.32579], ["Guy Môquet", 48.89273, 2.32732], ["Porte de Saint-Ouen", 48.89719, 2.32882], ["Champs-Elysées - Clémenceau", 48.86718, 2.31346], ["Porte de Clichy", 48.89448, 2.31346], ["Brochant", 48.89059, 2.32019]],
    "14": [["Pont Cardinet", 48.88951, 2.31526], ["Saint-Lazare", 48.87561, 2.32410], ["Olympiades", 48.82703, 2.36642], ["Gare de Lyon", 48.84340, 2.37396], ["Bercy", 48.83998, 2.37958], ["Bibliothèque François Mitterrand", 48.82993, 2.37672], ["Châtelet", 48.85972, 2.34584], ["Cour Saint-Émilion", 48.83355, 2.38595], ["Madeleine", 48.87040, 2.32656], ["Pyramides", 48.86569, 2.33452], ["Porte de Clichy", 48.89482, 2.31322], ["Maison Blanche", 48.82156, 2.35896]],
    "RER A": [["Gare de Lyon", 48.84366, 2.37449], ["Châtelet - Les Halles", 48.86077, 2.34792], ["Charles de Gaulle — Étoile", 48.87414, 2.29634], ["Nation", 48.84800, 2.39722], ["Auber", 48.87159, 2.33096]],
    "RER B": [["Denfert-Rochereau", 48.83393, 2.33286], ["Paris Gare du Nord – Voie 43", 48.88141, 2.35740], ["Cité Universitaire", 48.82257, 2.33811], ["Châtelet - Les Halles", 48.86251, 2.34645], ["Saint-Michel Notre-Dame", 48.85323, 2.34569], ["Luxembourg", 48.84650, 2.34033], ["Port Royal", 48.84081, 2.33729], ["Paris Gare du Nord – Voie 44", 48.88135, 2.35770], ["Paris Gare du Nord – Voie 42", 48.88139, 2.35747]],
    "RER C": [["Champ de Mars - Tour Eiffel", 48.85608, 2.28947], ["Boulainvilliers", 48.85657, 2.27518], ["Avenue du Président Kennedy", 48.85326, 2.28016], ["Porte de Clichy", 48.89413, 2.31549], ["Avenue Foch", 48.86977, 2.27477], ["Neuilly - Porte Maillot", 48.87865, 2.28579], ["Avenue Henri Martin", 48.86531, 2.27236], ["Pereire - Levallois", 48.88585, 2.29898], ["Javel", 48.84685, 2.27758], ["Pont du Garigliano - Hôpital Européen Georges-Pompidou", 48.83926, 2.27058], ["Pont de l'Alma", 48.86256, 2.29996], ["Saint-Michel Notre-Dame", 48.85341, 2.34562], ["Musée d'Orsay", 48.86055, 2.32609], ["Bibliothèque François Mitterrand", 48.82892, 2.37789], ["Paris Austerlitz", 48.84064, 2.36704]],
    "RER D": [["Paris Gare du Nord – Voie 41", 48.88146, 2.35713], ["Châtelet - Les Halles", 48.86174, 2.34684], ["Gare de Lyon", 48.84341, 2.37417], ["Paris Gare du Nord – Voie 42", 48.88139, 2.35747]],
    "RER E": [["Haussmann - Saint-Lazare", 48.87502, 2.32870], ["Rosa Parks", 48.89657, 2.37402], ["Magenta", 48.88074, 2.35863], ["Neuilly - Porte Maillot", 48.87815, 2.28240]]
  }
};
