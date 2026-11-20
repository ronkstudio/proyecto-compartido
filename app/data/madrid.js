/* Datos de la ciudad: Madrid (tarjeta #100, etapa 1 de la expansión).
   Tiene la estructura y toda la información de "Info". Los lugares están en data/madrid-lugares.js (tarjeta #190).
   price: 0 = gratis, 1 = $, 2 = $$, 3 = $$$, 4 = $$$$, null = no aplica.

   De dónde salen los datos (revisados el 17/11/2026; detalle en docs/fuentes-madrid.md):
   crtm.es y metromadrid.es (pago con tarjeta bancaria en los molinetes desde el 1/6/2026, tarjeta Multi, abono turístico,
   suplemento del aeropuerto), emtmadrid.es (colectivos), aena.es (aeropuerto de Barajas), renfe.com (Cercanías y trenes),
   madrid.es (Policía Municipal 092, tarifa fija de taxi del aeropuerto, zona de bajas emisiones) y la Carta de Servicios 2026
   de Atención Turística de Emergencia del Ayuntamiento (la vieja oficina SATE de Leganitos).
   Sin precios ni horarios exactos: cambian seguido. */
window.CITY_DATA = window.CITY_DATA || {};
window.CITY_DATA.madrid = {
  id: "madrid",
  name: "Madrid",
  fullName: "Madrid",
  country: "España",
  tz: "Europe/Madrid",
  currency: "EUR",
  tagline: "Todo lo que necesitás para recorrer la ciudad",
  updated: "Noviembre 2026",

  categories: [
    { id: "ver", name: "Imperdibles", icon: "🏛️", color: "#2f7fd1", desc: "Museos, palacios, plazas y parques" },
    { id: "comer", name: "Dónde comer", icon: "🍽️", color: "#d1552f", desc: "Tapas, mercados, cocina madrileña y churros" },
    { id: "noche", name: "Noche", icon: "🍸", color: "#8a4fd1", desc: "Terrazas, vermut, cócteles, flamenco y discotecas" },
    { id: "tours", name: "Tours y guías", icon: "🧭", color: "#1f9d8a", desc: "Visitas guiadas y experiencias" },
    { id: "escapadas", name: "Excursiones", icon: "🚆", color: "#3a9a3f", desc: "Escapadas de un día" },
    { id: "dormir", name: "Hospedaje", icon: "🛏️", color: "#c58a12", desc: "Hostels, hoteles y dónde alojarse" },
    { id: "compras", name: "Compras y mercados", icon: "🛍️", color: "#d13f7a", desc: "Mercados, calles comerciales y el Rastro" },
    { id: "deporte", name: "Deportes", icon: "⚽", color: "#0b7285", desc: "Estadios, parques y aire libre" },
    { id: "ocio", name: "Entretenimiento", icon: "🎡", color: "#e8590c", desc: "Musicales, teatro, conciertos y planes con chicos" }
  ],

  /* Los lugares están en data/madrid-lugares.js. */
  places: [],

  barrios: [
    { name: "Sol y Gran Vía", vibe: "El centro de todo", desc: "La Puerta del Sol con el kilómetro cero, la Gran Vía con sus teatros y edificios de principios del siglo XX, y la calle Preciados llena de negocios.", stay: "Muy céntrico y bien conectado; hay mucha gente y ruido a toda hora." },
    { name: "Austrias y Palacio", vibe: "El Madrid de los reyes", desc: "La Plaza Mayor, el Palacio Real, la catedral de la Almudena, el Teatro Real y las callecitas del Madrid más antiguo.", stay: "Precioso y a pasos de todo; de noche es más tranquilo que Sol." },
    { name: "La Latina", vibe: "Tapas y domingo de Rastro", desc: "Calles en bajada llenas de bares de tapas, la Cava Baja y, los domingos, el Rastro y el vermut en la plaza de la Paja.", stay: "Con mucho ambiente y bien ubicado; los fines de semana es ruidoso." },
    { name: "Lavapiés", vibe: "Multicultural y alternativo", desc: "El barrio más mezclado de Madrid, con comida de todo el mundo, teatros chicos, arte urbano y el museo Reina Sofía al lado.", stay: "Económico y con mucha vida; de noche, como en todo el centro, atento a tus cosas." },
    { name: "Barrio de las Letras", vibe: "Literario y de tapeo", desc: "Las calles de Cervantes, Lope de Vega y Quevedo, con frases escritas en el piso, la plaza de Santa Ana y bares de toda la vida.", stay: "Una de las mejores bases: entre Sol y los museos, con mucho ambiente." },
    { name: "Paseo del Prado", vibe: "Los grandes museos", desc: "El Paseo del Arte: el Prado, el Thyssen y el Reina Sofía, la fuente de Cibeles, el Jardín Botánico y la estación de Atocha.", stay: "Elegante y céntrico, con hoteles de categoría." },
    { name: "Retiro", vibe: "Verde y señorial", desc: "El gran parque de Madrid, con el estanque, el Palacio de Cristal y la Rosaleda, rodeado de calles tranquilas.", stay: "Tranquilo y seguro, a un paseo de los museos." },
    { name: "Malasaña", vibe: "Hípster y nocturno", desc: "El barrio de la movida madrileña de los 80: tiendas vintage, cafés de especialidad, bares y la plaza del Dos de Mayo.", stay: "Joven y animado; puede ser ruidoso de noche." },
    { name: "Chueca", vibe: "Diverso y de moda", desc: "El corazón LGBTI de Madrid, con terrazas, tiendas de diseño, el Mercado de San Antón y mucha vida nocturna.", stay: "Céntrico y con mucho ambiente, sobre todo los fines de semana." },
    { name: "Salamanca", vibe: "Elegante y de compras", desc: "Calles anchas con edificios señoriales, las marcas de lujo de la calle Serrano y restaurantes de nivel.", stay: "Seguro y tranquilo; suele ser caro." },
    { name: "Chamberí", vibe: "El Madrid de los madrileños", desc: "Un barrio residencial con mercados, bares de vermut, la estación fantasma de Chamberí y el Museo Sorolla.", stay: "Auténtico y tranquilo, bien conectado con el metro." },
    { name: "Argüelles y Moncloa", vibe: "Atardeceres y estudiantes", desc: "El Templo de Debod, el Parque del Oeste, el teleférico a la Casa de Campo y la zona universitaria.", stay: "Tranquilo y verde, a un paseo de la Plaza de España." },
    { name: "Madrid Río y Matadero", vibe: "Parque junto al río", desc: "El parque a lo largo del río Manzanares, con puentes, juegos y el Matadero, un viejo frigorífico convertido en centro de arte.", stay: "Más para pasear que para alojarse." },
    { name: "Castellana y Chamartín", vibe: "Moderno y futbolero", desc: "El gran eje de la ciudad, con el estadio Santiago Bernabéu, los rascacielos de las Cuatro Torres y la estación de Chamartín.", stay: "Zona de oficinas; práctico si venís a un partido o a una feria." }
  ],

  /* Planes armados (tarjeta #191). Cada paso nombra un lugar de data/madrid-lugares.js ("ref" = nombre exacto). */
  itineraries: [
    { id: "1-dia", name: "Madrid en 1 día", icon: "⚡", desc: "Lo esencial si tenés solo una jornada.", steps: [
      { when: "Mañana", ref: "Chocolatería San Ginés", note: "Churros con chocolate para arrancar." },
      { when: "Mañana", ref: "Puerta del Sol" },
      { when: "Mañana", ref: "Plaza Mayor" },
      { when: "Mañana", ref: "Palacio Real", note: "Reservá horario en el sitio de Patrimonio Nacional." },
      { when: "Mediodía", ref: "Mercado de San Miguel", note: "Tapas para almorzar." },
      { when: "Tarde", ref: "Museo del Prado", note: "Elegí pocas salas: Velázquez y Goya." },
      { when: "Tarde", ref: "Parque del Retiro", note: "Alquilá un bote en el estanque." },
      { when: "Atardecer", ref: "Círculo de Bellas Artes", note: "La terraza, con vista a la Gran Vía." },
      { when: "Noche", ref: "Gran Vía" },
      { when: "Noche", ref: "Cava Baja", note: "Cena de tapas en La Latina." }
    ] },
    { id: "3-dias", name: "3 días clásicos", icon: "🗓️", desc: "El recorrido completo para una primera visita.", steps: [
      { when: "Día 1 · mañana", ref: "Puerta del Sol" },
      { when: "Día 1 · mañana", ref: "Plaza Mayor" },
      { when: "Día 1 · mañana", ref: "Palacio Real" },
      { when: "Día 1 · mediodía", ref: "Mercado de San Miguel" },
      { when: "Día 1 · tarde", ref: "Catedral de la Almudena" },
      { when: "Día 1 · tarde", ref: "Templo de Debod", note: "Llegá antes del atardecer." },
      { when: "Día 1 · noche", ref: "Casa Lucio", note: "Reservá." },
      { when: "Día 2 · mañana", ref: "Museo del Prado", note: "Comprá la entrada con horario." },
      { when: "Día 2 · mediodía", ref: "El Brillante", note: "Bocadillo de calamares." },
      { when: "Día 2 · tarde", ref: "Museo Reina Sofía", note: "El Guernica." },
      { when: "Día 2 · tarde", ref: "Parque del Retiro" },
      { when: "Día 2 · noche", ref: "Barrio de las Letras", note: "Tapas por la calle de las Huertas." },
      { when: "Día 3 · mañana", ref: "Museo Sorolla" },
      { when: "Día 3 · mediodía", ref: "Mercado de San Antón" },
      { when: "Día 3 · tarde", ref: "Gran Vía" },
      { when: "Día 3 · tarde", ref: "Plaza del Dos de Mayo" },
      { when: "Día 3 · noche", ref: "Corral de la Morería", note: "Flamenco; reservá." }
    ] },
    { id: "lluvia", name: "Día de lluvia", icon: "🌧️", desc: "Todo bajo techo.", steps: [
      { when: "Mañana", ref: "Museo Thyssen-Bornemisza" },
      { when: "Mediodía", ref: "Mercado de San Miguel", note: "Almuerzo bajo techo." },
      { when: "Tarde", ref: "Museo Arqueológico Nacional" },
      { when: "Tarde", ref: "Chocolatería San Ginés" },
      { when: "Noche", ref: "Café Central" }
    ] },
    { id: "gratis", name: "Madrid gratis", icon: "💸", desc: "Lo mejor sin gastar en entradas.", steps: [
      { when: "Mañana", ref: "Puerta del Sol" },
      { when: "Mañana", ref: "Plaza Mayor" },
      { when: "Mañana", ref: "Catedral de la Almudena", note: "Entrar es gratis; se pide una donación." },
      { when: "Mediodía", ref: "Campo del Moro" },
      { when: "Tarde", ref: "Ermita de San Antonio de la Florida", note: "Los frescos de Goya, gratis." },
      { when: "Tarde", ref: "Templo de Debod" },
      { when: "Atardecer", ref: "Museo del Prado", note: "Las últimas dos horas del día son gratis." },
      { when: "Noche", ref: "Barrio de las Letras" }
    ] },
    { id: "chicos", name: "Con chicos", icon: "🧒", desc: "Un día pensado para chicos.", steps: [
      { when: "Mañana", ref: "Zoo Aquarium de Madrid" },
      { when: "Mediodía", ref: "Teleférico de Madrid", note: "Volvé al centro volando sobre el parque." },
      { when: "Tarde", ref: "Templo de Debod" },
      { when: "Tarde", ref: "Parque del Retiro", note: "Botes, títeres y mucho lugar para correr." },
      { when: "Tarde", ref: "Chocolatería Valor" }
    ] }
  ],

  /* ───────────── TRANSPORTE ───────────── */
  subte: [
    { line: "1", color: "#38a3dc", route: "Pinar de Chamartín ↔ Valdecarros", useful: "Sol, Gran Vía, Tribunal (Malasaña), Antón Martín y Atocha" },
    { line: "2", color: "#e0292f", route: "Las Rosas ↔ Cuatro Caminos", useful: "Sol, Ópera, Banco de España (Cibeles), Retiro y Goya" },
    { line: "3", color: "#ffe114", route: "Villaverde Alto ↔ Moncloa", useful: "Sol, Callao, Plaza de España, Lavapiés, Legazpi (Matadero) y Moncloa" },
    { line: "4", color: "#814109", route: "Argüelles ↔ Pinar de Chamartín", useful: "Colón, Serrano y Goya: el barrio de Salamanca" },
    { line: "5", color: "#96bf0d", route: "Alameda de Osuna ↔ Casa de Campo", useful: "Callao, Ópera, La Latina, Chueca y Gran Vía" },
    { line: "6", color: "#9a9999", route: "Circular", useful: "Da la vuelta al centro: Moncloa, Príncipe Pío, Legazpi, Nuevos Ministerios y Argüelles" },
    { line: "7", color: "#f6a01a", route: "Hospital del Henares ↔ Pitis", useful: "Estadio Metropolitano (Atlético de Madrid), Gregorio Marañón y Alonso Cano" },
    { line: "8", color: "#fa7ac8", route: "Nuevos Ministerios ↔ Aeropuerto T4", useful: "El metro al aeropuerto (T1-T2-T3 y T4) y a la feria IFEMA" },
    { line: "9", color: "#a6067e", route: "Paco de Lucía ↔ Arganda del Rey", useful: "Avenida de América, Príncipe de Vergara y Valdebernardo (Faunia)" },
    { line: "10", color: "#005aa9", route: "Hospital Infanta Sofía ↔ Puerta del Sur", useful: "Plaza de España, Tribunal, Santiago Bernabéu, Chamartín y la Casa de Campo (Lago y Batán)" },
    { line: "R", color: "#2a5caa", route: "Ópera ↔ Príncipe Pío", useful: "El Ramal: un tramo corto entre el Palacio Real y la estación de Príncipe Pío" }
  ],
  transport: [
    /* Revisado el 17/11/2026 contra crtm.es, metromadrid.es, emtmadrid.es, aena.es y renfe.com. */
    { icon: "💳", title: "Cómo pagar: lo primero", items: [
      { t: "Pagá con la tarjeta", d: "Desde junio de 2026, en los molinetes de todas las estaciones de metro podés pagar cada viaje apoyando tu tarjeta sin contacto o el celular. En los colectivos de la EMT también se paga con tarjeta al subir." },
      { t: "Tarjeta Multi", d: "Es la tarjeta de transporte recargable. Se compra en las máquinas del metro y se carga con viajes sueltos o con el boleto de 10 viajes, que sirve en metro y colectivos y conviene si vas a viajar seguido." },
      { t: "Abono turístico", d: "Viajes ilimitados en metro, colectivos y trenes de Cercanías durante 1 a 7 días. La zona A cubre la ciudad y el aeropuerto; la zona T llega a pueblos de alrededor como Alcalá de Henares o El Escorial." },
      { t: "Ojo con el aeropuerto", d: "Las estaciones de metro del aeropuerto cobran un suplemento aparte del boleto. Con el abono turístico no se paga." },
      { t: "Última revisión", d: "17 de noviembre de 2026, con los sitios del Consorcio de Transportes de Madrid, Metro de Madrid, la EMT, Aena y Renfe. Si algo no coincide, valen los carteles del transporte." }
    ] },
    { icon: "🚇", title: "Metro", items: [
      { t: "Cómo funciona", d: "Es grande, limpio y llega a casi todo: 12 líneas con número y color, más el Ramal (R) entre Ópera y Príncipe Pío. Sol es la estación más céntrica." },
      { t: "Horarios", d: "Funciona desde temprano a la mañana hasta pasada la medianoche. De madrugada hay colectivos nocturnos (los \"búhos\")." },
      { t: "Cómo orientarte", d: "Cada dirección se llama por la estación final de la línea. Seguí los carteles con el número de la línea y el nombre de esa última estación." },
      { t: "Combinaciones", d: "En los transbordos se camina bastante por pasillos. Si vas con valija, buscá el cartel del ascensor: no todas las estaciones tienen." }
    ] },
    { icon: "🚌", title: "Colectivos y Cercanías", items: [
      { t: "Colectivos (EMT)", d: "Son azules y llegan a todos los barrios. Se sube por adelante y se paga con tarjeta o con la tarjeta Multi." },
      { t: "De noche", d: "Cuando cierra el metro funcionan los búhos (líneas N), que salen casi todos de la plaza de Cibeles." },
      { t: "Cercanías", d: "Son los trenes de Renfe que cruzan la ciudad y van a los alrededores. Unen Atocha, Sol, Nuevos Ministerios y Chamartín, y llegan al aeropuerto (T4)." },
      { t: "Cómo saber cuál tomar", d: "Usá Google Maps, Moovit o las apps de Metro de Madrid y de la EMT: indican línea, parada y cuánto falta." }
    ] },
    { icon: "✈️", title: "Aeropuertos", items: [
      { t: "Barajas (MAD)", d: "El aeropuerto de Madrid tiene dos zonas separadas: las terminales T1, T2 y T3, juntas, y la T4, que es la de Iberia y sus socias. Entre ellas hay un colectivo gratis." },
      { t: "Metro línea 8", d: "Sale de las dos zonas y llega a Nuevos Ministerios en unos 20 minutos, donde combinás con otras líneas. Se paga el suplemento del aeropuerto." },
      { t: "Tren Cercanías", d: "Desde la T4 va directo a Chamartín, Nuevos Ministerios, Recoletos y Atocha. Si tenés pasaje de tren de larga distancia, puede estar incluido." },
      { t: "Colectivo Exprés Aeropuerto", d: "Funciona las 24 horas: va a Cibeles y, de día, sigue hasta Atocha. Se paga con tarjeta al subir." },
      { t: "Taxi a precio fijo", d: "Entre el aeropuerto y cualquier punto dentro de la M-30 (el anillo que rodea el centro), los taxis cobran una tarifa fija, sin recargos. Usá la fila oficial." }
    ] },
    { icon: "🚆", title: "Trenes", items: [
      { t: "Estaciones", d: "Atocha (Almudena Grandes) es la principal, con trenes al sur y al este; Chamartín (Clara Campoamor), al norte. Desde ahí salen a Toledo, Segovia, Barcelona, Sevilla y Valencia." },
      { t: "Trenes rápidos", d: "AVE y Avlo (Renfe), Iryo y Ouigo. Hay competencia y precios muy distintos: conviene comprar con anticipación y comparar." },
      { t: "Antes de subir", d: "En los trenes rápidos pasás el equipaje por un control, como en el aeropuerto. Llegá con un rato de anticipación." }
    ] },
    { icon: "🚕", title: "Taxis y apps", items: [
      { t: "Taxis oficiales", d: "Son blancos con una franja roja en la puerta. Si tienen la luz verde prendida, están libres. Se toman en la calle, en las paradas o por app." },
      { t: "Apps", d: "Cabify, Uber, Bolt y FREENOW. Muestran el precio o una estimación antes de pedir." },
      { t: "Consejos", d: "En el aeropuerto y en las estaciones usá solo la fila de taxis oficial. Todos tienen que aceptar tarjeta." }
    ] },
    { icon: "🚲", title: "A pie y en bicicleta", items: [
      { t: "A pie", d: "El centro se recorre caminando: de la Plaza Mayor al Prado o a la Gran Vía son 15 minutos. Hay subidas y bajadas: llevá calzado cómodo." },
      { t: "BiciMAD", d: "Las bicis eléctricas públicas de la ciudad, con estaciones por todo el centro. Se alquilan con la app." },
      { t: "Bicis y monopatines", d: "También hay bicis y monopatines eléctricos de empresas privadas, por app. Andá por los carriles bici y con cuidado." }
    ] }
  ],

  /* ───────────── SEGURIDAD ───────────── */
  emergencies: [
    { n: "112", t: "Emergencias (número único europeo)" },
    { n: "091", t: "Policía Nacional" },
    { n: "092", t: "Policía Municipal" },
    { n: "062", t: "Guardia Civil" },
    { n: "016", t: "Violencia contra mujeres" },
    { n: "+34 91 578 78 10", t: "Turismo de Madrid: ayuda al turista si te roban o perdés documentos" },
    { n: "010", t: "Información de la ciudad (desde fuera de Madrid, +34 91 480 00 10)" }
  ],
  safety: [
    { icon: "🎒", title: "Lo más común: carteristas", tone: "warn", items: [
      "Pasa sobre todo en el metro (en las líneas 1, 2 y 3 y en la estación Sol), en la Puerta del Sol, la Gran Vía, la Plaza Mayor y el Rastro.",
      "Llevá la mochila adelante y los bolsillos cerrados, sobre todo al subir y bajar del metro y en las escaleras mecánicas.",
      "En las terrazas, no dejes el celular sobre la mesa ni la mochila colgada de la silla: es el robo más típico.",
      "En el Rastro de los domingos hay muchísima gente: llevá lo mínimo."
    ] },
    { icon: "🗺️", title: "Zonas para ir con atención", tone: "warn", items: [
      "Madrid es una ciudad segura para recorrer; estos son lugares donde conviene estar más atento, sobre todo de noche.",
      "La Puerta del Sol, la calle Montera y la Gran Vía de madrugada.",
      "Las zonas de bares de Malasaña, Chueca, Lavapiés y La Latina a la salida de los boliches.",
      "Los andenes y pasillos del metro en Sol y en las estaciones de Gran Vía a la hora pico."
    ] },
    { icon: "🎭", title: "Estafas típicas", tone: "warn", items: [
      "Los trileros: el juego de adivinar bajo qué vaso está la bolita, en la calle. Los que ganan son cómplices: no apuestes.",
      "Las firmas: te piden firmar por una causa solidaria y después exigen una donación, o aprovechan para robarte.",
      "La mancha: alguien te mancha la ropa y se ofrece a limpiarte mientras otro te saca la billetera.",
      "Las ramitas de romero: te ponen una en la mano para \"leerte la suerte\" y después piden plata. No extiendas la mano.",
      "Revendedores de entradas para museos y partidos: comprá solo en los sitios oficiales."
    ] },
    { icon: "✅", title: "Buenas prácticas", tone: "ok", items: [
      "Con las precauciones de cualquier gran capital, la gran mayoría de las visitas transcurre sin problemas.",
      "Llevá solo lo del día: una tarjeta, algo de efectivo y una copia del documento. El pasaporte, en el alojamiento.",
      "Si te roban, hacé la denuncia en una comisaría de la Policía Nacional. La vas a necesitar para el seguro y los documentos.",
      "La oficina de turismo de la Plaza Mayor y los puntos de información turística ayudan a turistas que sufrieron un robo: con la denuncia, los documentos, las tarjetas y el consulado.",
      "Si te roban el pasaporte, después de la denuncia andá a tu consulado: en Info > Ayuda están en el mapa.",
      "Contratá un seguro de viaje: la atención médica de urgencia es buena, pero sin cobertura puede salir cara."
    ] }
  ],

  /* ───────────── INFO PRÁCTICA ───────────── */
  practical: [
    { icon: "💵", title: "Dinero y pagos", items: [
      { t: "Moneda", d: "Euro (EUR)." },
      { t: "Tarjetas", d: "Se aceptan casi en todos lados, también sin contacto y con el celular, incluso para montos chicos. Conviene tener algo de efectivo para mercados y bares chicos." },
      { t: "Cajeros", d: "Usá los de bancos. Muchos cobran una comisión a las tarjetas del exterior: la pantalla te la muestra antes de sacar. Si te ofrecen cobrarte en tu moneda, elegí siempre euros." },
      { t: "Propina", d: "No es obligatoria ni se espera tanto como en otros países. Se suele redondear o dejar unas monedas si te atendieron bien." },
      { t: "El menú del día", d: "Al mediodía, de lunes a viernes, muchos restaurantes tienen un menú fijo con primer plato, segundo, postre o café y bebida. Es la forma más barata de comer bien." }
    ] },
    { icon: "🕘", title: "Horarios madrileños", items: [
      { t: "Comidas", d: "Se come tarde: el almuerzo, a media tarde, y la cena, avanzada la noche. Antes de esas horas, muchas cocinas están cerradas, pero siempre hay bares con tapas." },
      { t: "Tapas y cañas", d: "Ir de tapas es pasar por varios bares tomando una caña (una cerveza chica) o un vino con algo para picar. En algunos bares la tapa viene gratis con la bebida." },
      { t: "El vermut", d: "Los fines de semana a la mañana, antes del almuerzo, se toma el vermut con aceitunas o papas fritas. El domingo, después del Rastro, es casi obligatorio." },
      { t: "Comercios", d: "Las tiendas del centro abren todo el día, sin cortar al mediodía, y la mayoría también los domingos." },
      { t: "Museos", d: "El Prado abre todos los días; el Reina Sofía cierra los martes; muchos otros museos, los lunes. Varios son gratis en las últimas horas del día: fijate en su sitio oficial." }
    ] },
    { icon: "🌤️", title: "Clima y cuándo venir", items: [
      { t: "Primavera (abr–jun)", d: "Templado y soleado: la mejor época, con terrazas llenas y muchas fiestas." },
      { t: "Verano (jul–ago)", d: "Muy caluroso y seco, a veces con más de 35 °C. En agosto muchos madrileños se van y algunos comercios cierran." },
      { t: "Otoño (sep–nov)", d: "Agradable, con días soleados y noches frescas." },
      { t: "Invierno (dic–mar)", d: "Frío y seco, entre 0 y 12 °C, con mucho sol. En Navidad hay luces, mercados y la Puerta del Sol llena para fin de año." }
    ] },
    { icon: "🔌", title: "Datos útiles", items: [
      { t: "Electricidad", d: "230 V. Enchufes tipo C y F (dos patas redondas). Si venís de la Argentina, llevá adaptador." },
      { t: "Agua", d: "El agua de la canilla de Madrid es de muy buena calidad: podés tomarla y pedir una jarra de agua en los bares." },
      { t: "Internet", d: "Para tener datos, lo más simple es una eSIM o un chip local." },
      { t: "Idioma", d: "Se habla castellano, pero con palabras distintas: abajo tenés las más comunes. Te van a tutear casi siempre." },
      { t: "Salud", d: "Las farmacias tienen una cruz verde. Urgencias: 112." }
    ] },
    { icon: "🥘", title: "Costumbres", items: [
      { t: "Saludo", d: "Entre conocidos se saludan con dos besos, uno en cada mejilla. Al entrar a un negocio se dice \"Hola, buenos días\" (o \"buenas tardes\")." },
      { t: "En el bar", d: "La cuenta no la traen solos: pedila con \"¿Me cobras, por favor?\". En la barra muchas veces se paga al final." },
      { t: "Terrazas", d: "Sentarse afuera puede costar un poco más que en la barra. En la terraza se pide al mozo, no en la barra." },
      { t: "Para probar", d: "El bocadillo de calamares, el cocido madrileño, los callos, la tortilla de papas, las papas bravas, los churros con chocolate, las gallinejas y el vermut de grifo." }
    ] }
  ]
};
