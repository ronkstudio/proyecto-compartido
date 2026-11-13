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

  quality: {},
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
  only: {},
  closed: {},

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

  photos: {},
  stations: {}
};
