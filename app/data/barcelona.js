/* Datos de la ciudad: Barcelona (tarjeta #193, etapa 1 de la expansión).
   Tiene la estructura y toda la información de "Info". Los lugares están en data/barcelona-lugares.js (tarjeta #194).
   price: 0 = gratis, 1 = $, 2 = $$, 3 = $$$, 4 = $$$$, null = no aplica.

   De dónde salen los datos (revisados el 18/11/2026; detalle en docs/fuentes-barcelona.md):
   tmb.cat (metro y colectivos, billete aeropuerto, compra con tarjeta bancaria en los colectivos y en algunos accesos del metro),
   holabarcelona.com (tarjeta Hola Barcelona), aena.es (aeropuerto de El Prat), rodalies.gencat.cat (trenes Rodalies),
   ajuntament.barcelona.cat/guardiaurbana (servicio de atención al turista de La Rambla 43), zbe.barcelona (zona de bajas emisiones)
   y barcelonaturisme.com (oficinas de turismo). Sin precios ni horarios exactos: cambian seguido. */
window.CITY_DATA = window.CITY_DATA || {};
window.CITY_DATA.barcelona = {
  id: "barcelona",
  name: "Barcelona",
  fullName: "Barcelona",
  country: "España",
  tz: "Europe/Madrid",
  currency: "EUR",
  tagline: "Todo lo que necesitás para recorrer la ciudad",
  updated: "Noviembre 2026",

  categories: [
    { id: "ver", name: "Imperdibles", icon: "🏛️", color: "#2f7fd1", desc: "Gaudí, museos, plazas, parques y playas" },
    { id: "comer", name: "Dónde comer", icon: "🍽️", color: "#d1552f", desc: "Tapas, mercados, cocina catalana y arroces" },
    { id: "noche", name: "Noche", icon: "🍸", color: "#8a4fd1", desc: "Vermut, cócteles, terrazas, flamenco y discotecas" },
    { id: "tours", name: "Tours y guías", icon: "🧭", color: "#1f9d8a", desc: "Visitas guiadas y experiencias" },
    { id: "escapadas", name: "Excursiones", icon: "🚆", color: "#3a9a3f", desc: "Escapadas de un día" },
    { id: "dormir", name: "Hospedaje", icon: "🛏️", color: "#c58a12", desc: "Hostels, hoteles y dónde alojarse" },
    { id: "compras", name: "Compras y mercados", icon: "🛍️", color: "#d13f7a", desc: "Mercados, calles comerciales y diseño" },
    { id: "deporte", name: "Deportes", icon: "⚽", color: "#0b7285", desc: "Estadios, playas y aire libre" },
    { id: "ocio", name: "Entretenimiento", icon: "🎡", color: "#e8590c", desc: "Teatro, conciertos, ópera y planes con chicos" }
  ],

  /* Los lugares están en data/barcelona-lugares.js. */
  places: [],

  barrios: [
    { name: "Barri Gòtic", vibe: "El corazón medieval", desc: "Callecitas de piedra, la catedral, la plaza Sant Jaume, la plaza Reial y restos de la ciudad romana, entre La Rambla y Via Laietana.", stay: "A pasos de todo y precioso; de noche hay mucho movimiento y conviene cuidar tus cosas." },
    { name: "El Born", vibe: "Medieval y de moda", desc: "La basílica de Santa Maria del Mar, el Museo Picasso, el mercado de Santa Caterina, tiendas de diseño y bares de cócteles.", stay: "Una de las mejores bases: céntrico, lindo y con mucha vida." },
    { name: "El Raval", vibe: "Multicultural y alternativo", desc: "Del otro lado de La Rambla: el mercado de La Boqueria, el MACBA, el Palau Güell, bares históricos y comida de todo el mundo.", stay: "Económico y con mucho ambiente; algunas calles conviene evitarlas de noche." },
    { name: "La Barceloneta", vibe: "El barrio de la playa", desc: "El viejo barrio de pescadores, con calles angostas, bares de tapas, arroces frente al mar y la playa más famosa de la ciudad.", stay: "Ideal en verano para estar cerca del mar; en la playa, atento a tus cosas." },
    { name: "Port Vell", vibe: "El puerto y el mar", desc: "El puerto viejo, el monumento a Colón, el Maremagnum, el Aquarium y el paseo marítimo hasta el Port Olímpic.", stay: "Más para pasear que para alojarse." },
    { name: "Eixample", vibe: "Modernismo y Passeig de Gràcia", desc: "Las manzanas en cuadrícula con esquinas cortadas, la Casa Batlló, La Pedrera, tiendas, restaurantes y mucha vida de barrio.", stay: "Seguro, bien conectado y con hoteles de todas las categorías." },
    { name: "Sagrada Família", vibe: "La basílica de Gaudí", desc: "Alrededor de la Sagrada Família: el Hospital de Sant Pau, la avenida Gaudí y calles residenciales.", stay: "Tranquilo y bien conectado; los alrededores de la basílica tienen muchos turistas." },
    { name: "Gràcia", vibe: "Un pueblo dentro de la ciudad", desc: "Plazas con terrazas, tiendas chicas, la Casa Vicens y, en agosto, la Festa Major con las calles decoradas por los vecinos.", stay: "Auténtico y con mucho ambiente, a un rato a pie del centro." },
    { name: "Park Güell y El Carmel", vibe: "Gaudí y vistas", desc: "El Park Güell y los barrios en las colinas, con los Bunkers del Carmel, el mejor mirador gratis de la ciudad.", stay: "Residencial y con subidas fuertes; mejor para visitar." },
    { name: "Sant Antoni", vibe: "Vermut y mercado", desc: "El mercado de Sant Antoni, el mercado del libro de los domingos y la calle Parlament, llena de bares y cafés.", stay: "De moda, céntrico y más tranquilo que el casco antiguo." },
    { name: "Poble-sec", vibe: "Tapas al pie de Montjuïc", desc: "La calle Blai con sus pinchos, teatros sobre el Paral·lel y la subida a Montjuïc.", stay: "Barrio con vida, bien ubicado y a buen precio." },
    { name: "Montjuïc", vibe: "La montaña de los museos", desc: "El MNAC, la Fundación Miró, el Poble Espanyol, el Estadio Olímpico, el castillo y jardines con vista al puerto.", stay: "Es un gran parque: para pasar el día, no para dormir." },
    { name: "Poblenou", vibe: "Viejas fábricas y playa", desc: "El barrio industrial reciclado: la Rambla del Poblenou, el Museo del Diseño, Glòries, la Torre Glòries y playas más tranquilas.", stay: "Tranquilo, moderno y cerca del mar." },
    { name: "Les Corts y Pedralbes", vibe: "Fútbol y monasterio", desc: "El estadio del Barça (Spotify Camp Nou), el monasterio de Pedralbes y la zona universitaria.", stay: "Residencial; práctico si venís a un partido." },
    { name: "Sarrià y Tibidabo", vibe: "La parte alta", desc: "El antiguo pueblo de Sarrià, CosmoCaixa y el Tibidabo, con su parque de diversiones y la mejor vista de la ciudad.", stay: "Tranquilo y señorial, pero lejos del centro." },
    { name: "Sants", vibe: "La estación y el barrio", desc: "La estación de Sants, de donde salen los trenes rápidos, y un barrio de vecinos con mercado y la Plaça d'Espanya cerca.", stay: "Práctico si llegás o salís en tren." }
  ],

  /* Planes armados (tarjeta #195). Cada paso nombra un lugar de data/barcelona-lugares.js ("ref" = nombre exacto). */
  itineraries: [
    { id: "1-dia", name: "Barcelona en 1 día", icon: "⚡", desc: "Lo esencial si tenés solo una jornada.", steps: [
      { when: "Mañana", ref: "Sagrada Família", note: "Entrada con horario, lo más temprano posible." },
      { when: "Mañana", ref: "Passeig de Gràcia" },
      { when: "Mañana", ref: "Casa Batlló", note: "Si no entrás, mirala desde la vereda." },
      { when: "Mediodía", ref: "Mercado de La Boqueria", note: "Almuerzo en una barra del mercado." },
      { when: "Tarde", ref: "La Rambla" },
      { when: "Tarde", ref: "Catedral de Barcelona" },
      { when: "Tarde", ref: "Basílica de Santa Maria del Mar" },
      { when: "Atardecer", ref: "Playa de la Barceloneta" },
      { when: "Noche", ref: "El Xampanyet", note: "Tapas y cava en el Born." }
    ] },
    { id: "3-dias", name: "3 días clásicos", icon: "🗓️", desc: "El recorrido completo para una primera visita.", steps: [
      { when: "Día 1 · mañana", ref: "Plaça de Catalunya" },
      { when: "Día 1 · mañana", ref: "La Rambla" },
      { when: "Día 1 · mañana", ref: "Mercado de La Boqueria" },
      { when: "Día 1 · mediodía", ref: "Catedral de Barcelona" },
      { when: "Día 1 · tarde", ref: "Museo Picasso", note: "Entrada con horario." },
      { when: "Día 1 · tarde", ref: "Basílica de Santa Maria del Mar" },
      { when: "Día 1 · noche", ref: "Cal Pep", note: "Llegá antes de que abra." },
      { when: "Día 2 · mañana", ref: "Sagrada Família", note: "Reservá." },
      { when: "Día 2 · mediodía", ref: "Recinte Modernista de Sant Pau" },
      { when: "Día 2 · tarde", ref: "Casa Milà (La Pedrera)" },
      { when: "Día 2 · tarde", ref: "Casa Batlló" },
      { when: "Día 2 · noche", ref: "Barrio de Gràcia", note: "Cena en las plazas de Gràcia." },
      { when: "Día 3 · mañana", ref: "Park Güell", note: "Reservá horario." },
      { when: "Día 3 · mediodía", ref: "Bunkers del Carmel" },
      { when: "Día 3 · tarde", ref: "Museu Nacional d'Art de Catalunya (MNAC)" },
      { when: "Día 3 · tarde", ref: "Castillo de Montjuïc" },
      { when: "Día 3 · noche", ref: "Carrer de Blai", note: "Pinchos en Poble-sec." }
    ] },
    { id: "lluvia", name: "Día de lluvia", icon: "🌧️", desc: "Todo bajo techo.", steps: [
      { when: "Mañana", ref: "Casa Batlló" },
      { when: "Mediodía", ref: "Mercado de Santa Caterina", note: "Almuerzo bajo techo." },
      { when: "Tarde", ref: "Museo Picasso" },
      { when: "Tarde", ref: "Granja M. Viader", note: "Un chocolate caliente." },
      { when: "Noche", ref: "Palau de la Música Catalana", note: "Un concierto." }
    ] },
    { id: "gratis", name: "Barcelona gratis", icon: "💸", desc: "Lo mejor sin gastar en entradas.", steps: [
      { when: "Mañana", ref: "Pont del Bisbe" },
      { when: "Mañana", ref: "Plaça de Sant Felip Neri" },
      { when: "Mañana", ref: "Templo de Augusto" },
      { when: "Mediodía", ref: "El Born Centre de Cultura i Memòria" },
      { when: "Tarde", ref: "Parc de la Ciutadella" },
      { when: "Tarde", ref: "Playa de la Barceloneta" },
      { when: "Atardecer", ref: "Bunkers del Carmel", note: "La mejor vista, gratis." },
      { when: "Noche", ref: "Montjuïc: Font Màgica", note: "Solo algunos días: revisá antes." }
    ] },
    { id: "chicos", name: "Con chicos", icon: "🧒", desc: "Un día pensado para chicos.", steps: [
      { when: "Mañana", ref: "Aquarium Barcelona" },
      { when: "Mediodía", ref: "Teleférico del Puerto", note: "Cruzá el puerto volando hasta Montjuïc." },
      { when: "Tarde", ref: "Parc de la Ciutadella", note: "Botes en el lago y lugar para correr." },
      { when: "Tarde", ref: "Museu de la Xocolata" }
    ] }
  ],

  /* ───────────── TRANSPORTE ───────────── */
  subte: [
    { line: "L1", color: "#e1393e", route: "Hospital de Bellvitge ↔ Fondo", useful: "Plaça d'Espanya, Universitat, Catalunya, Urquinaona, Arc de Triomf y Glòries" },
    { line: "L2", color: "#9a3b96", route: "Paral·lel ↔ Badalona Pompeu Fabra", useful: "Sant Antoni, Universitat, Passeig de Gràcia, Sagrada Família y Monumental" },
    { line: "L3", color: "#3aa03b", route: "Zona Universitària ↔ Trinitat Nova", useful: "Les Corts (Camp Nou), Sants Estació, Espanya, Paral·lel, Drassanes, Liceu, Catalunya, Passeig de Gràcia, Diagonal y Lesseps (Park Güell)" },
    { line: "L4", color: "#ffc20e", route: "Trinitat Nova ↔ La Pau", useful: "Passeig de Gràcia, Urquinaona, Jaume I (Gòtic y Born), Barceloneta, Ciutadella-Vila Olímpica y Poblenou" },
    { line: "L5", color: "#0070ba", route: "Cornellà Centre ↔ Vall d'Hebron", useful: "Sants Estació, Hospital Clínic, Diagonal, Verdaguer, Sagrada Família y Sant Pau-Dos de Maig" },
    { line: "L9S", color: "#f68b1f", route: "Aeroport T1 ↔ Zona Universitària", useful: "El metro del aeropuerto (T1 y T2) y la feria de Gran Via (Fira); combina con la L1 en Torrassa, la L5 en Collblanc y la L3 en Zona Universitària" },
    { line: "L9N", color: "#f68b1f", route: "La Sagrera ↔ Can Zam", useful: "Zona norte, de La Sagrera a Santa Coloma" },
    { line: "L10", color: "#00a6d6", route: "La Sagrera ↔ Gorg (norte) · Collblanc ↔ Zona Franca (sur)", useful: "Dos tramos separados, sobre todo para barrios de vecinos" },
    { line: "L11", color: "#a3c83a", route: "Trinitat Nova ↔ Can Cuiàs", useful: "Un tramo corto en el norte de la ciudad" },
    { line: "FM", color: "#0b6a3c", route: "Paral·lel ↔ Parc de Montjuïc", useful: "El funicular de Montjuïc: subís a la montaña con el mismo boleto del metro" }
  ],
  transport: [
    /* Revisado el 18/11/2026 contra tmb.cat, holabarcelona.com, aena.es y rodalies.gencat.cat. */
    { icon: "💳", title: "Cómo pagar: lo primero", items: [
      { t: "Boleto de 10 viajes (T-casual)", d: "Es el más usado: 10 viajes en metro, colectivos, tranvía y trenes dentro de la zona 1, con combinaciones incluidas. Es para una sola persona: si viajan dos, cada uno necesita el suyo. No sirve en las estaciones de metro del aeropuerto." },
      { t: "Hola Barcelona", d: "La tarjeta para turistas: viajes ilimitados de 2 a 5 días en metro, colectivos, tranvía y trenes de la zona 1, y sí incluye el metro del aeropuerto. Se compra en las máquinas del metro, en la web oficial o en su app." },
      { t: "Con la tarjeta del banco", d: "En los colectivos de TMB podés pagar el boleto sencillo apoyando la tarjeta sin contacto o el celular en el lector de adelante. En el metro, solo en algunos accesos que tienen un paso especial; en el resto hay que comprar el boleto en la máquina." },
      { t: "Ojo con el aeropuerto", d: "Las estaciones de metro del aeropuerto (línea L9 Sud) necesitan un boleto especial o la Hola Barcelona: la T-casual no sirve. El tren Rodalies y el colectivo 46 sí aceptan la T-casual." },
      { t: "Última revisión", d: "18 de noviembre de 2026, con los sitios de TMB, Hola Barcelona, Aena y Rodalies. Si algo no coincide, valen los carteles del transporte." }
    ] },
    { icon: "🚇", title: "Metro", items: [
      { t: "Cómo funciona", d: "Llega a casi todo lo que vas a visitar. Cada línea tiene número y color: la L3 (verde) pasa por La Rambla, Passeig de Gràcia y Sants, y la L4 (amarilla) por el Gòtic, el Born y la Barceloneta." },
      { t: "Horarios", d: "Funciona desde temprano a la mañana hasta la medianoche; los viernes hasta más tarde y los sábados toda la noche. De madrugada hay colectivos nocturnos (NitBus)." },
      { t: "Cómo orientarte", d: "Cada dirección se llama por la estación final de la línea. Seguí los carteles con el número de la línea y el nombre de esa última estación." },
      { t: "Carteles en catalán", d: "Los carteles y anuncios están en catalán, y muchos también en castellano e inglés: \"sortida\" es salida y \"andana\" es andén." }
    ] },
    { icon: "🚌", title: "Colectivos, tranvía y trenes", items: [
      { t: "Colectivos (TMB)", d: "Son rojos y llegan a todos los barrios, también a lugares sin metro como el Park Güell o la parte alta. Se sube por adelante; podés pagar con la tarjeta del banco o validar la T-casual." },
      { t: "De noche", d: "Cuando cierra el metro funcionan los NitBus (líneas N), que pasan casi todos por la Plaça de Catalunya." },
      { t: "FGC y Rodalies", d: "Los trenes de la Generalitat (FGC) salen de Plaça de Catalunya y Plaça d'Espanya hacia Sarrià, el Tibidabo y Montserrat. Rodalies son los trenes de cercanías, que van al aeropuerto, a Sitges y a otros pueblos." },
      { t: "Cómo saber cuál tomar", d: "Usá Google Maps, Moovit o la app de TMB: indican línea, parada y cuánto falta." }
    ] },
    { icon: "✈️", title: "Aeropuerto", items: [
      { t: "El Prat (BCN)", d: "El aeropuerto de Barcelona tiene dos terminales separadas, T1 y T2, unidas por un colectivo gratis. Fijate en tu pasaje de cuál salís o llegás." },
      { t: "Aerobús", d: "Es lo más simple para llegar al centro: va directo a la Plaça d'Espanya y la Plaça de Catalunya, sale muy seguido y se paga con tarjeta al subir. El A1 va a la T1 y el A2 a la T2." },
      { t: "Metro L9 Sud", d: "Sale de las dos terminales, pero es lento para ir al centro y hay que combinar. Necesita el boleto especial del aeropuerto o la Hola Barcelona." },
      { t: "Tren Rodalies (R2 Nord)", d: "Sale de la T2 y llega a Sants y Passeig de Gràcia. Acepta la T-casual. Si llegás a la T1, tomá antes el colectivo gratis a la T2." },
      { t: "Taxi", d: "Son negros y amarillos y cobran con taxímetro, más un recargo por salir del aeropuerto. Usá la fila oficial y desconfiá de quien te ofrezca un viaje adentro de la terminal." }
    ] },
    { icon: "🚆", title: "Trenes y micros", items: [
      { t: "Estaciones", d: "Sants es la principal: de ahí salen los trenes rápidos a Madrid, Valencia, Sevilla y Francia. La Estació de França tiene trenes regionales y la Estació del Nord, los micros de larga distancia." },
      { t: "Trenes rápidos", d: "AVE y Avlo (Renfe), Iryo y Ouigo van a Madrid en unas tres horas. Hay competencia y precios muy distintos: conviene comprar con anticipación y comparar." },
      { t: "Antes de subir", d: "En los trenes rápidos pasás el equipaje por un control, como en el aeropuerto. Llegá con un rato de anticipación." }
    ] },
    { icon: "🚕", title: "Taxis y apps", items: [
      { t: "Taxis oficiales", d: "Son negros y amarillos. Si tienen la luz verde prendida, están libres. Se toman en la calle, en las paradas o por app, y cobran con taxímetro." },
      { t: "Apps", d: "FREENOW y Uber piden taxis oficiales; Cabify y Bolt tienen taxis y autos con chofer, que en Barcelona tienen reglas más estrictas. Muestran el precio o una estimación antes de pedir." },
      { t: "Consejos", d: "En el aeropuerto, en el puerto y en las estaciones usá solo la fila de taxis oficial. Todos tienen que aceptar tarjeta." }
    ] },
    { icon: "🚲", title: "A pie y en bicicleta", items: [
      { t: "A pie", d: "El centro se recorre caminando: de la Plaça de Catalunya a la Barceloneta son unos 30 minutos por La Rambla o el Gòtic. Para el Park Güell y Montjuïc hay subidas fuertes." },
      { t: "Bicis", d: "El Bicing, las bicis públicas, es solo para residentes. Para pasear, alquilá una en un negocio de alquiler o hacé un tour en bici: hay muchos carriles bici." },
      { t: "Monopatines", d: "No hay monopatines eléctricos de alquiler, y en el transporte público no se pueden subir monopatines eléctricos." }
    ] }
  ],

  /* ───────────── SEGURIDAD ───────────── */
  emergencies: [
    { n: "112", t: "Emergencias (número único europeo)" },
    { n: "088", t: "Mossos d'Esquadra (la policía de Cataluña)" },
    { n: "092", t: "Guàrdia Urbana (policía de la ciudad)" },
    { n: "091", t: "Policía Nacional (pasaportes y extranjería)" },
    { n: "016", t: "Violencia contra mujeres" },
    { n: "+34 93 256 24 31", t: "Guàrdia Urbana: atención al turista en La Rambla 43, si te roban o perdés documentos" },
    { n: "010", t: "Información de la ciudad (solo desde Barcelona)" }
  ],
  safety: [
    { icon: "🎒", title: "Lo más común: carteristas", tone: "warn", items: [
      "Barcelona es famosa por sus carteristas: son muy hábiles y trabajan en grupo. No es peligroso, pero hay que estar atento todo el tiempo.",
      "Pasa sobre todo en La Rambla, el metro (líneas L3 y L1, en Liceu, Catalunya, Passeig de Gràcia y Sagrada Família), la Sagrada Família, el Park Güell y la playa de la Barceloneta.",
      "Llevá la mochila adelante y los bolsillos cerrados. En las terrazas, no dejes el celular sobre la mesa ni la mochila colgada de la silla.",
      "En la playa, nunca dejes cosas solas sobre la toalla mientras te metés al agua."
    ] },
    { icon: "🗺️", title: "Zonas para ir con atención", tone: "warn", items: [
      "Estos son lugares donde conviene estar más atento, sobre todo de noche.",
      "La Rambla y la Plaça Reial, a toda hora.",
      "Algunas calles del Raval de noche, sobre todo hacia el puerto.",
      "La playa de la Barceloneta y el Port Olímpic a la salida de las discotecas.",
      "Los andenes y escaleras mecánicas del metro en las estaciones más turísticas."
    ] },
    { icon: "🎭", title: "Estafas típicas", tone: "warn", items: [
      "Los trileros: el juego de adivinar bajo qué vaso está la bolita, sobre todo en La Rambla. Los que ganan son cómplices: no apuestes.",
      "La mancha o la caca de pájaro: alguien te mancha la ropa y se ofrece a limpiarte mientras otro te saca la billetera.",
      "El futbolista: alguien te frena para mostrarte una jugada o te abraza por un partido, y mientras te revisa los bolsillos.",
      "Los falsos policías: gente de civil que te pide ver la billetera o el pasaporte. La policía de verdad no hace eso en la calle.",
      "Las firmas: te piden firmar por una causa y después exigen una donación, o aprovechan para robarte.",
      "En la ruta: si alguien te hace señas de que tenés una goma pinchada, no pares en la banquina; seguí hasta una estación de servicio."
    ] },
    { icon: "✅", title: "Buenas prácticas", tone: "ok", items: [
      "Con estas precauciones, la gran mayoría de las visitas transcurre sin problemas.",
      "Llevá solo lo del día: una tarjeta, algo de efectivo y una copia del documento. El pasaporte, en el alojamiento.",
      "Si te roban, hacé la denuncia en una comisaría de los Mossos d'Esquadra o en el servicio de atención al turista de la Guàrdia Urbana (La Rambla 43), que tiene traductores.",
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
      { t: "Tasa turística", d: "Los alojamientos cobran aparte un impuesto por persona y por noche, que suma el de Cataluña y el de la ciudad. Preguntá si ya está incluido en el precio." },
      { t: "El menú del día", d: "Al mediodía, de lunes a viernes, muchos restaurantes tienen un menú fijo con primer plato, segundo, postre o café y bebida. Es la forma más barata de comer bien." }
    ] },
    { icon: "🕘", title: "Horarios de Barcelona", items: [
      { t: "Comidas", d: "Se come tarde: el almuerzo es de 13:30 a 15:30 y la cena, de 20:30 a 22:30. Fuera de esas horas, muchas cocinas están cerradas, pero siempre hay bares con tapas." },
      { t: "El vermut", d: "Los fines de semana, antes del almuerzo, se toma el vermut con aceitunas, papas fritas y conservas. Sant Antoni y Gràcia están llenos de bodegas para eso." },
      { t: "Comercios", d: "Las tiendas del centro abren todo el día, sin cortar al mediodía. Los domingos la mayoría cierra, salvo en las zonas más turísticas." },
      { t: "Museos y Gaudí", d: "Muchos museos cierran los lunes. La Sagrada Família, el Park Güell, la Casa Batlló y La Pedrera se llenan: sacá la entrada con día y horario en su sitio oficial." }
    ] },
    { icon: "🌤️", title: "Clima y cuándo venir", items: [
      { t: "Primavera (abr–jun)", d: "Templado y soleado: la mejor época para caminar, con terrazas llenas y el día de Sant Jordi." },
      { t: "Verano (jul–ago)", d: "Caluroso y húmedo, con playas llenas y mucha gente en todos lados. En agosto algunos comercios cierran." },
      { t: "Otoño (sep–nov)", d: "Agradable y todavía se puede ir a la playa en septiembre. Octubre puede traer lluvias fuertes." },
      { t: "Invierno (dic–mar)", d: "Suave, entre 5 y 15 °C, con días soleados. Hay menos turistas y los precios bajan." }
    ] },
    { icon: "🔌", title: "Datos útiles", items: [
      { t: "Electricidad", d: "230 V. Enchufes tipo C y F (dos patas redondas). Si venís de la Argentina, llevá adaptador." },
      { t: "Agua", d: "El agua de la canilla es potable, pero tiene gusto fuerte: mucha gente prefiere agua mineral o con filtro." },
      { t: "Internet", d: "Para tener datos, lo más simple es una eSIM o un chip local." },
      { t: "Idiomas", d: "Se hablan catalán y castellano, y todo el mundo te entiende en castellano. Los carteles suelen estar en catalán: abajo tenés las palabras más útiles." },
      { t: "Salud", d: "Las farmacias tienen una cruz verde. Urgencias: 112." }
    ] },
    { icon: "🥘", title: "Costumbres", items: [
      { t: "Saludo", d: "Entre conocidos se saludan con dos besos, uno en cada mejilla. Al entrar a un negocio se dice \"Hola, bon dia\" o \"Hola, buenos días\"." },
      { t: "En la calle", d: "No se puede andar en malla ni sin remera lejos de la playa: hay multas. Tampoco tomar alcohol en la calle." },
      { t: "En el bar", d: "La cuenta no la traen solos: pedila. En los bares de pinchos, se cuentan los palillos al final para cobrarte." },
      { t: "Para probar", d: "El pan con tomate, las bombas de la Barceloneta, la paella y el arroz negro, la fideuá, la escalivada, la crema catalana, los calçots en invierno y el vermut." }
    ] }
  ]
};
