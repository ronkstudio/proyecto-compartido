/* Datos de la ciudad: Bogotá (tarjeta #204).
   Tiene la estructura y toda la información de "Info". Los lugares están en data/bogota-lugares.js.
   price: 0 = gratis, 1 = $, 2 = $$, 3 = $$$, 4 = $$$$, null = no aplica.

   De dónde salen los datos (revisados el 18/11/2026; detalle en docs/fuentes-bogota.md):
   bogota.gov.co (Puntos de Información Turística del IDT, marzo de 2026; Ciclovía, febrero de 2026; Línea 123; pago con tarjetas bancarias
   en TransMilenio, enero de 2026), transmilenio.gov.co y banrepcultural.org. Sin precios ni horarios exactos: cambian seguido. */
window.CITY_DATA = window.CITY_DATA || {};
window.CITY_DATA.bogota = {
  id: "bogota",
  name: "Bogotá",
  fullName: "Bogotá",
  country: "Colombia",
  tz: "America/Bogota",
  currency: "COP",
  tagline: "Todo lo que necesitás para recorrer la ciudad",
  updated: "Noviembre 2026",

  categories: [
    { id: "ver", name: "Imperdibles", icon: "🏛️", color: "#2f7fd1", desc: "Museos, La Candelaria, Monserrate y parques" },
    { id: "comer", name: "Dónde comer", icon: "🍽️", color: "#d1552f", desc: "Ajiaco, cafés, mercados y cocina de autor" },
    { id: "noche", name: "Noche", icon: "🍸", color: "#8a4fd1", desc: "Salsa, cócteles, cerveza artesanal y boliches" },
    { id: "tours", name: "Tours y guías", icon: "🧭", color: "#1f9d8a", desc: "Grafiti, café, bici y caminatas" },
    { id: "escapadas", name: "Excursiones", icon: "🚌", color: "#3a9a3f", desc: "Catedral de Sal, lagunas y pueblos coloniales" },
    { id: "dormir", name: "Hospedaje", icon: "🛏️", color: "#c58a12", desc: "Hostels, hoteles y dónde alojarse" },
    { id: "compras", name: "Compras y mercados", icon: "🛍️", color: "#d13f7a", desc: "Mercados, artesanías y centros comerciales" },
    { id: "deporte", name: "Deportes", icon: "⚽", color: "#0b7285", desc: "Fútbol, ciclovía y montaña" },
    { id: "ocio", name: "Entretenimiento", icon: "🎡", color: "#e8590c", desc: "Teatro, conciertos y planes con chicos" }
  ],

  /* Los lugares están en data/bogota-lugares.js. */
  places: [],

  barrios: [
    { name: "La Candelaria", vibe: "El centro histórico", desc: "Calles empedradas, casas coloniales de colores, la Plaza de Bolívar, el Museo Botero, el Chorro de Quevedo y grafitis por todos lados.", stay: "Lindo y lleno de hostels; de noche las calles quedan vacías: moverse en app." },
    { name: "Centro", vibe: "Museos y vida de ciudad", desc: "El Museo del Oro, la carrera Séptima peatonal, el Parque Santander y la Torre Colpatria.", stay: "De día muy movido; de noche, mejor no caminar." },
    { name: "Macarena y Centro Internacional", vibe: "Bohemio y gastronómico", desc: "Un barrio de ladrillo en la ladera con restaurantes de autor, la Plaza de toros convertida en espacio cultural y el Museo Nacional cerca.", stay: "Tranquilo y con buenos restaurantes." },
    { name: "Chapinero", vibe: "Joven y diverso", desc: "Cafés de especialidad, bares, la vida LGBT de la ciudad y Chapinero Alto con restaurantes en casonas.", stay: "Con mucha vida y bien ubicado; algunas cuadras de noche, con cuidado." },
    { name: "Zona G", vibe: "La zona gourmet", desc: "Pocas cuadras con algunos de los mejores restaurantes de la ciudad.", stay: "Tranquilo, seguro y céntrico." },
    { name: "Zona Rosa y Zona T", vibe: "Compras y noche", desc: "El Centro Andino, calles peatonales con bares y discotecas, y el Parque de la 93 cerca.", stay: "Seguro, moderno y con muchos hoteles." },
    { name: "Parque de la 93", vibe: "Elegante y verde", desc: "Un parque rodeado de restaurantes y bares, con eventos gratis.", stay: "Una de las zonas más seguras." },
    { name: "Usaquén", vibe: "Un pueblo dentro de la ciudad", desc: "El antiguo pueblo con su plaza, iglesia, restaurantes en casas viejas y el mercado de pulgas de los domingos.", stay: "Tranquilo y lindo, lejos del centro histórico." },
    { name: "Teusaquillo", vibe: "Casas inglesas y parques", desc: "Un barrio residencial de casas de ladrillo, con el Parque Simón Bolívar y el Jardín Botánico cerca.", stay: "Tranquilo, de vecinos." },
    { name: "Salitre y Simón Bolívar", vibe: "Los grandes parques", desc: "El Parque Simón Bolívar, el Jardín Botánico, el estadio El Campín y la Biblioteca Virgilio Barco.", stay: "Práctico para eventos y el aeropuerto." },
    { name: "Montaña y cerros", vibe: "Bogotá desde arriba", desc: "Monserrate, Guadalupe y los senderos de los cerros orientales.", stay: "Para visitar, no para dormir." }
  ],

  /* Planes armados. Cada paso nombra un lugar de data/bogota-lugares.js ("ref" = nombre exacto). */
  itineraries: [
    { id: "1-dia", name: "Bogotá en 1 día", icon: "⚡", desc: "Lo esencial si tenés solo una jornada.", steps: [
      { when: "Mañana", ref: "Monserrate", note: "Subí temprano, con cielo despejado." },
      { when: "Mañana", ref: "Museo del Oro" },
      { when: "Mediodía", ref: "La Puerta Falsa", note: "Tamal y chocolate santafereño." },
      { when: "Tarde", ref: "Plaza de Bolívar" },
      { when: "Tarde", ref: "Museo Botero" },
      { when: "Tarde", ref: "Chorro de Quevedo" },
      { when: "Noche", ref: "Zona G", note: "Cena en la zona gourmet." }
    ] },
    { id: "3-dias", name: "3 días clásicos", icon: "🗓️", desc: "El recorrido completo para una primera visita.", steps: [
      { when: "Día 1 · mañana", ref: "Museo del Oro" },
      { when: "Día 1 · mediodía", ref: "La Puerta Falsa" },
      { when: "Día 1 · tarde", ref: "Plaza de Bolívar" },
      { when: "Día 1 · tarde", ref: "Museo Botero" },
      { when: "Día 1 · tarde", ref: "Tour de grafiti", note: "Con guía, por La Candelaria." },
      { when: "Día 2 · mañana", ref: "Monserrate" },
      { when: "Día 2 · mediodía", ref: "Mercado de Paloquemao", note: "Probá frutas que no conocés." },
      { when: "Día 2 · tarde", ref: "Museo Nacional de Colombia" },
      { when: "Día 2 · noche", ref: "Andrés D.C.", note: "Cena con fiesta." },
      { when: "Día 3 · mañana", ref: "Catedral de Sal de Zipaquirá" },
      { when: "Día 3 · tarde", ref: "Usaquén" },
      { when: "Día 3 · noche", ref: "Parque de la 93" }
    ] },
    { id: "lluvia", name: "Día de lluvia", icon: "🌧️", desc: "Todo bajo techo.", steps: [
      { when: "Mañana", ref: "Museo del Oro" },
      { when: "Mediodía", ref: "Biblioteca Luis Ángel Arango" },
      { when: "Tarde", ref: "Museo Botero" },
      { when: "Tarde", ref: "Café San Alberto", note: "Un café colombiano de verdad." },
      { when: "Noche", ref: "Teatro Colón" }
    ] },
    { id: "gratis", name: "Bogotá gratis", icon: "💸", desc: "Lo mejor sin gastar en entradas.", steps: [
      { when: "Mañana", ref: "Ciclovía", note: "Domingos y festivos." },
      { when: "Mediodía", ref: "Museo Botero", note: "Siempre gratis." },
      { when: "Tarde", ref: "Plaza de Bolívar" },
      { when: "Tarde", ref: "Chorro de Quevedo" },
      { when: "Atardecer", ref: "Parque de la 93" }
    ] },
    { id: "chicos", name: "Con chicos", icon: "🧒", desc: "Un día pensado para chicos.", steps: [
      { when: "Mañana", ref: "Maloka" },
      { when: "Mediodía", ref: "Parque Simón Bolívar" },
      { when: "Tarde", ref: "Jardín Botánico de Bogotá" },
      { when: "Tarde", ref: "Planetario de Bogotá" }
    ] }
  ],

  /* ───────────── TRANSPORTE ───────────── */
  /* Bogotá no tiene metro todavía (la línea 1 está en construcción). Acá van las troncales de TransMilenio más útiles. */
  subte: [
    { line: "A", color: "#0072bc", route: "Troncal Caracas", useful: "Atraviesa la ciudad de norte a sur por la Avenida Caracas, cerca de Chapinero y el Centro" },
    { line: "B", color: "#7ac143", route: "Troncal Autopista Norte", useful: "Hacia el norte: Portal Norte, Usaquén y los parques del norte" },
    { line: "F", color: "#e2007a", route: "Troncal Américas", useful: "Hacia el suroeste por la Avenida de las Américas" },
    { line: "J", color: "#f7941d", route: "Eje Ambiental", useful: "La entrada a La Candelaria por la Avenida Jiménez: Museo del Oro y Las Aguas" },
    { line: "K", color: "#00a99d", route: "Troncal Calle 26 (El Dorado)", useful: "Une el Centro con el Portal El Dorado, cerca del aeropuerto" },
    { line: "L", color: "#8e44ad", route: "Troncal Carrera 10", useful: "Del Centro Internacional hacia el sur por la carrera Décima" }
  ],
  transport: [
    /* Revisado el 18/11/2026 con bogota.gov.co y transmilenio.gov.co. */
    { icon: "💳", title: "Cómo pagar: lo primero", items: [
      { t: "Tarjeta TuLlave", d: "La tarjeta del transporte público (TransMilenio y colectivos azules del SITP). Se compra y se carga en las estaciones y en puntos autorizados." },
      { t: "Con la tarjeta del banco", d: "Desde 2026 TransMilenio acepta tarjetas Visa y Mastercard sin contacto, o el celular, en los torniquetes que tienen el lector bancario. Cada entrada cobra un pasaje completo, sin transbordos gratis." },
      { t: "Lo más cómodo", d: "Muchos visitantes se mueven con apps de transporte. TransMilenio es rápido, pero en hora pico va muy lleno." },
      { t: "Última revisión", d: "18 de noviembre de 2026, con bogota.gov.co y TransMilenio. Si algo no coincide, valen los carteles del transporte." }
    ] },
    { icon: "🚌", title: "TransMilenio", items: [
      { t: "Cómo funciona", d: "Colectivos articulados rojos con carriles propios y estaciones cerradas, como un metro en superficie. Cada servicio tiene un código (letra y número) y para en estaciones distintas." },
      { t: "Cómo orientarte", d: "Fijate en los mapas de cada estación qué servicio para en tu destino. Google Maps y la app de TransMilenio lo indican." },
      { t: "Cuidado", d: "En hora pico hay mucha gente y carteristas: llevá la mochila adelante." },
      { t: "Metro", d: "La primera línea del metro de Bogotá está en construcción: todavía no funciona." }
    ] },
    { icon: "🚡", title: "Colectivos y cables", items: [
      { t: "SITP", d: "Los colectivos azules del sistema integrado llegan a los barrios. Se pagan con TuLlave." },
      { t: "TransMiCable", d: "Un teleférico urbano en Ciudad Bolívar, con vista a la ciudad. Se recorre mejor con un tour del barrio." },
      { t: "Monserrate", d: "Al cerro se sube en funicular o teleférico desde la estación al pie del cerro, o caminando por el sendero." }
    ] },
    { icon: "✈️", title: "Aeropuerto", items: [
      { t: "El Dorado (BOG)", d: "El aeropuerto internacional, a unos 30 a 60 minutos del centro según el tránsito." },
      { t: "Taxi oficial", d: "En la fila de taxis oficial te dan un papel con el valor del viaje según el destino. No aceptes ofertas dentro de la terminal." },
      { t: "Apps", d: "Las apps de transporte tienen un punto de encuentro señalado." },
      { t: "TransMilenio", d: "Hay colectivos que conectan el aeropuerto con el Portal El Dorado de TransMilenio. Es barato pero incómodo con equipaje." }
    ] },
    { icon: "🚕", title: "Taxis y apps", items: [
      { t: "Apps", d: "Lo más seguro es pedir por app: Cabify, DiDi o Uber, o taxis por apps como Taxis Libres." },
      { t: "Taxis amarillos", d: "No tomes taxis en la calle, sobre todo de noche: pedilos por app o por teléfono." },
      { t: "Pico y placa", d: "Hay restricciones para los autos según el número de patente. Los taxis también tienen su propio pico y placa." }
    ] },
    { icon: "🚲", title: "En bici y a pie", items: [
      { t: "Ciclovía", d: "Los domingos y festivos, desde temprano hasta el comienzo de la tarde, más de cien kilómetros de avenidas se cierran a los autos para bicis, patines y caminantes." },
      { t: "Bicisendas", d: "Bogotá tiene una de las redes de ciclorrutas más grandes de América Latina." },
      { t: "La altura", d: "La ciudad está a 2.600 metros: los primeros días caminá despacio y tomá mucha agua." }
    ] }
  ],

  /* ───────────── SEGURIDAD ───────────── */
  emergencies: [
    { n: "123", t: "Línea única de emergencias: policía, ambulancia y bomberos" },
    { n: "155", t: "Violencia contra la mujer" },
    { n: "144", t: "Defensa civil" },
    { n: "195", t: "Línea de información de Bogotá" },
    { n: "+57 601 3814000", t: "Cancillería de Colombia (Ministerio de Relaciones Exteriores)" }
  ],
  safety: [
    { icon: "📱", title: "Lo más común: robo de celulares", tone: "warn", items: [
      "El robo de celulares es lo más frecuente, en la calle, en TransMilenio y en las mesas de los bares.",
      "No camines con el celular en la mano, y no lo dejes sobre la mesa.",
      "En TransMilenio y los mercados, la mochila adelante."
    ] },
    { icon: "🗺️", title: "Zonas para ir con atención", tone: "warn", items: [
      "La Candelaria y el Centro de noche, cuando las calles quedan vacías.",
      "Los alrededores de las estaciones de TransMilenio en hora pico.",
      "El sendero de Monserrate: subí de día y en horario de apertura.",
      "Barrios alejados: solo con guía o en tour."
    ] },
    { icon: "🎭", title: "Estafas y riesgos típicos", tone: "warn", items: [
      "Escopolamina (burundanga): una droga que te ponen en la bebida o te soplan. No aceptes tragos de desconocidos y no dejes el vaso sin mirar.",
      "El \"paseo millonario\": robos en taxis tomados en la calle. Pedí siempre por app.",
      "Citas por apps: encontrate siempre en lugares públicos.",
      "Falsos policías que piden ver tu plata: la policía de verdad no hace eso."
    ] },
    { icon: "✅", title: "Buenas prácticas", tone: "ok", items: [
      "Con estas precauciones, la gran mayoría de las visitas transcurre sin problemas.",
      "Llevá solo lo del día: una tarjeta, algo de efectivo y una copia del pasaporte.",
      "Si te roban, llamá al 123 y hacé la denuncia en línea en la web de la Policía Nacional o en una estación de policía.",
      "Si te roban el pasaporte, después de la denuncia andá a tu embajada: en Info > Ayuda están en el mapa.",
      "Contratá un seguro de viaje."
    ] }
  ],

  /* ───────────── INFO PRÁCTICA ───────────── */
  practical: [
    { icon: "💵", title: "Dinero y pagos", items: [
      { t: "Moneda", d: "Peso colombiano (COP). Los precios tienen muchos ceros: fijate bien antes de pagar." },
      { t: "Tarjetas", d: "Se aceptan en restaurantes, hoteles y comercios; en mercados y tiendas chicas, mejor efectivo." },
      { t: "Cajeros", d: "Usá cajeros dentro de bancos o centros comerciales, de día. Si te ofrecen cobrarte en tu moneda, elegí pesos." },
      { t: "Propina", d: "En restaurantes se sugiere un 10 % de servicio en la cuenta: te preguntan si lo querés incluir. Es voluntario." }
    ] },
    { icon: "🕘", title: "Horarios de Bogotá", items: [
      { t: "Comidas", d: "Se almuerza entre las 12 y las 14, y la cena es temprano. El almuerzo es la comida fuerte." },
      { t: "Comercios", d: "Abren temprano. Los domingos muchos cierran, salvo los centros comerciales." },
      { t: "Museos", d: "Muchos museos cierran los lunes. El Museo Botero es gratis y el Museo del Oro, gratis los domingos." }
    ] },
    { icon: "🌤️", title: "Clima y cuándo venir", items: [
      { t: "Todo el año", d: "Fresco todo el año, entre 7 y 20 °C. Puede hacer sol, llover y refrescar en el mismo día." },
      { t: "Temporadas secas", d: "Diciembre a marzo y julio a agosto suelen ser más secos." },
      { t: "Qué llevar", d: "Abrigo liviano, campera impermeable y protector solar: el sol es fuerte por la altura." }
    ] },
    { icon: "🔌", title: "Datos útiles", items: [
      { t: "Electricidad", d: "110 V. Enchufes tipo A y B (patas planas): si venís de la Argentina, llevá adaptador." },
      { t: "Agua", d: "El agua de la canilla de Bogotá es potable." },
      { t: "Altura", d: "2.600 metros sobre el nivel del mar: puede dar cansancio y dolor de cabeza los primeros días. Comé liviano y tomá agua." },
      { t: "Internet", d: "Para tener datos, lo más simple es una eSIM o un chip local." },
      { t: "Salud", d: "Hay droguerías en todas las cuadras. Urgencias: 123." }
    ] },
    { icon: "☕", title: "Costumbres", items: [
      { t: "Trato", d: "Los bogotanos son muy amables y formales: se tratan de \"usted\" y siempre saludan." },
      { t: "Para pedir", d: "Se dice \"¿me regala…?\" para pedir algo en un negocio, aunque se pague." },
      { t: "Para probar", d: "Ajiaco santafereño, tamal con chocolate, changua, empanadas, arepas, almojábanas, frutas exóticas (lulo, maracuyá, guanábana), un tinto (café negro) y aguardiente." }
    ] }
  ]
};
