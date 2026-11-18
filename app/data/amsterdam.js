/* Datos de la ciudad: Ámsterdam (tarjeta #199).
   Tiene la estructura y toda la información de "Info". Los lugares están en data/amsterdam-lugares.js.
   price: 0 = gratis, 1 = $, 2 = $$, 3 = $$$, 4 = $$$$, null = no aplica.

   De dónde salen los datos (revisados el 18/11/2026; detalle en docs/fuentes-amsterdam.md):
   gvb.nl (tranvía, metro, colectivos y ferris; OVpay; Amsterdam Travel Ticket), schiphol.nl (tren al centro y lectores amarillos),
   ovpay.nl (pagar con la tarjeta del banco en todo el país), government.nl (embajadas y consulados) y amsterdam.nl.
   Sin precios ni horarios exactos: cambian seguido. */
window.CITY_DATA = window.CITY_DATA || {};
window.CITY_DATA.amsterdam = {
  id: "amsterdam",
  name: "Ámsterdam",
  fullName: "Ámsterdam",
  country: "Países Bajos",
  tz: "Europe/Amsterdam",
  currency: "EUR",
  tagline: "Todo lo que necesitás para recorrer la ciudad",
  updated: "Noviembre 2026",

  categories: [
    { id: "ver", name: "Imperdibles", icon: "🏛️", color: "#2f7fd1", desc: "Museos, canales, parques y barrios" },
    { id: "comer", name: "Dónde comer", icon: "🍽️", color: "#d1552f", desc: "Panqueques, arenque, rijsttafel y cafés" },
    { id: "noche", name: "Noche", icon: "🍸", color: "#8a4fd1", desc: "Cafés marrones, cervecerías, jazz y recitales" },
    { id: "tours", name: "Tours y guías", icon: "🧭", color: "#1f9d8a", desc: "En barco, en bici y a pie" },
    { id: "escapadas", name: "Excursiones", icon: "🚆", color: "#3a9a3f", desc: "Molinos, pueblos y ciudades cerca" },
    { id: "dormir", name: "Hospedaje", icon: "🛏️", color: "#c58a12", desc: "Hostels, hoteles y dónde alojarse" },
    { id: "compras", name: "Compras y mercados", icon: "🛍️", color: "#d13f7a", desc: "Mercados, quesos y calles comerciales" },
    { id: "deporte", name: "Deportes", icon: "⚽", color: "#0b7285", desc: "Estadios, bicis y aire libre" },
    { id: "ocio", name: "Entretenimiento", icon: "🎡", color: "#e8590c", desc: "Conciertos, teatro, cine y planes con chicos" }
  ],

  /* Los lugares están en data/amsterdam-lugares.js. */
  places: [],

  barrios: [
    { name: "Dam y Nieuwe Zijde", vibe: "El centro de todo", desc: "La plaza Dam, el Palacio Real, la estación central, el Begijnhof y las calles comerciales.", stay: "A pasos de todo; mucha gente y ruido a toda hora." },
    { name: "De Wallen", vibe: "El barrio más viejo", desc: "El Barrio Rojo, la Oude Kerk, canales angostos, el Zeedijk y el pequeño barrio chino.", stay: "Céntrico pero ruidoso y con mucho turismo de fiesta: no es para todos." },
    { name: "Canales", vibe: "La postal de Ámsterdam", desc: "El anillo de canales del siglo XVII: Herengracht, Keizersgracht y Prinsengracht, las Negen Straatjes y el mercado de flores.", stay: "Precioso y central; los hoteles en casas de canal tienen escaleras muy empinadas." },
    { name: "Jordaan", vibe: "Callecitas y cafés", desc: "El viejo barrio obrero: canales chicos, patios escondidos, cafés marrones, la Casa de Ana Frank y los mercados de los sábados.", stay: "El más lindo para quedarse: tranquilo y a pasos de todo." },
    { name: "Nieuwmarkt y Waterlooplein", vibe: "Rembrandt y el Barrio Judío", desc: "La plaza Nieuwmarkt con De Waag, la casa de Rembrandt, el mercado de pulgas y el Barrio Cultural Judío.", stay: "Céntrico, con más vida de vecinos que el Dam." },
    { name: "Rembrandtplein", vibe: "Bares y luces", desc: "La plaza de los bares y las discotecas, el cine Tuschinski y el canal Reguliersgracht.", stay: "Muy ruidoso de noche." },
    { name: "Leidseplein", vibe: "La movida", desc: "Teatros, salas de conciertos como Paradiso y Melkweg, bares y restaurantes.", stay: "Con mucha vida; de noche hay ruido." },
    { name: "Museumplein", vibe: "Los grandes museos", desc: "El Rijksmuseum, el Van Gogh, el Stedelijk y el Concertgebouw, alrededor de una gran plaza verde.", stay: "Elegante y tranquilo, a un paseo del centro." },
    { name: "Vondelpark y Oud-West", vibe: "Parque y barrio", desc: "El Vondelpark, Foodhallen, la calle Kinkerstraat y barrios de vecinos con cafés.", stay: "Tranquilo, lindo y bien conectado en tranvía." },
    { name: "De Pijp", vibe: "Mercado y comida del mundo", desc: "El mercado Albert Cuyp, la Heineken Experience, el Sarphatipark y muchísimos cafés y restaurantes.", stay: "Con mucha onda, buenos precios y metro (línea 52)." },
    { name: "Plantage", vibe: "Jardines y zoológico", desc: "El zoológico Artis, el Hortus Botanicus, Micropia y el Museo de la Resistencia, en calles con árboles.", stay: "Verde, tranquilo y cerca del centro." },
    { name: "Oosterdok y el puerto", vibe: "El agua y la arquitectura nueva", desc: "El NEMO, el Museo Marítimo, la biblioteca con mirador, el Bimhuis y las viejas islas del puerto.", stay: "Moderno y tranquilo, cerca de la estación." },
    { name: "Amsterdam Noord", vibe: "Del otro lado del agua", desc: "El Eye, la torre A'DAM con su mirador, el astillero NDSM y el campo de Waterland, a un ferry gratis del centro.", stay: "Más barato y alternativo; el ferry funciona toda la noche." },
    { name: "Westerpark", vibe: "Parque y cultura", desc: "El parque y la vieja fábrica de gas Westergas, con bares, cines y ferias.", stay: "Residencial y tranquilo." },
    { name: "Oost", vibe: "Multicultural", desc: "El Oosterpark, el Wereldmuseum, el mercado Dappermarkt y la cervecería del molino De Gooyer.", stay: "Barrio de vecinos, con metro y buenos precios." },
    { name: "Zuid y Zuidoost", vibe: "Bosques y estadios", desc: "El Amsterdamse Bos, el Estadio Olímpico y, más lejos, el estadio del Ajax y las salas de recitales grandes.", stay: "Lejos del centro; sirve si venís a un partido o un recital." }
  ],

  /* Planes armados. Cada paso nombra un lugar de data/amsterdam-lugares.js ("ref" = nombre exacto). */
  itineraries: [
    { id: "1-dia", name: "Ámsterdam en 1 día", icon: "⚡", desc: "Lo esencial si tenés solo una jornada.", steps: [
      { when: "Mañana", ref: "Rijksmuseum", note: "Entrada con horario, lo más temprano posible." },
      { when: "Mediodía", ref: "Vondelpark" },
      { when: "Mediodía", ref: "Vleminckx", note: "Un cono de papas fritas." },
      { when: "Tarde", ref: "Begijnhof" },
      { when: "Tarde", ref: "Plaza Dam" },
      { when: "Tarde", ref: "Paseo en barco por los canales" },
      { when: "Atardecer", ref: "El Jordaan" },
      { when: "Noche", ref: "Café 't Smalle", note: "Una cerveza junto al canal." }
    ] },
    { id: "3-dias", name: "3 días clásicos", icon: "🗓️", desc: "El recorrido completo para una primera visita.", steps: [
      { when: "Día 1 · mañana", ref: "Plaza Dam" },
      { when: "Día 1 · mañana", ref: "Palacio Real (Koninklijk Paleis)" },
      { when: "Día 1 · mediodía", ref: "Begijnhof" },
      { when: "Día 1 · tarde", ref: "Casa de Ana Frank", note: "Entrada comprada con semanas de anticipación." },
      { when: "Día 1 · tarde", ref: "El Jordaan" },
      { when: "Día 1 · noche", ref: "Moeders", note: "Cocina holandesa." },
      { when: "Día 2 · mañana", ref: "Museo Van Gogh", note: "Entrada con horario." },
      { when: "Día 2 · mediodía", ref: "Rijksmuseum" },
      { when: "Día 2 · tarde", ref: "Vondelpark" },
      { when: "Día 2 · tarde", ref: "Mercado Albert Cuyp" },
      { when: "Día 2 · noche", ref: "Restaurant Blauw", note: "Rijsttafel indonesia; reservá." },
      { when: "Día 3 · mañana", ref: "Zaanse Schans", note: "Molinos, a 20 minutos en tren." },
      { when: "Día 3 · tarde", ref: "Casa Museo de Rembrandt" },
      { when: "Día 3 · tarde", ref: "Paseo en barco por los canales" },
      { when: "Día 3 · atardecer", ref: "A'DAM Lookout", note: "Ferry gratis desde la estación." },
      { when: "Día 3 · noche", ref: "Brouwerij 't IJ" }
    ] },
    { id: "lluvia", name: "Día de lluvia", icon: "🌧️", desc: "Todo bajo techo.", steps: [
      { when: "Mañana", ref: "Rijksmuseum" },
      { when: "Mediodía", ref: "Foodhallen", note: "Almuerzo bajo techo." },
      { when: "Tarde", ref: "Nuestro Señor en el Ático (Ons' Lieve Heer op Solder)" },
      { when: "Tarde", ref: "Winkel 43", note: "Tarta de manzana caliente." },
      { when: "Noche", ref: "Pathé Tuschinski", note: "Una película en el cine más lindo." }
    ] },
    { id: "gratis", name: "Ámsterdam gratis", icon: "💸", desc: "Lo mejor sin gastar en entradas.", steps: [
      { when: "Mañana", ref: "Begijnhof" },
      { when: "Mañana", ref: "Los canales (Grachtengordel)" },
      { when: "Mediodía", ref: "El Jordaan" },
      { when: "Mediodía", ref: "Brouwersgracht" },
      { when: "Tarde", ref: "Vondelpark" },
      { when: "Tarde", ref: "Biblioteca Pública (OBA Oosterdok)", note: "La vista desde el último piso." },
      { when: "Atardecer", ref: "NDSM", note: "Con el ferry gratis." },
      { when: "Noche", ref: "Los siete puentes del Reguliersgracht" }
    ] },
    { id: "chicos", name: "Con chicos", icon: "🧒", desc: "Un día pensado para chicos.", steps: [
      { when: "Mañana", ref: "NEMO Science Museum" },
      { when: "Mediodía", ref: "The Pancake Bakery", note: "Panqueques para todos." },
      { when: "Tarde", ref: "Artis (zoológico)" },
      { when: "Tarde", ref: "Vondelpark", note: "Plazas y lugar para correr." }
    ] }
  ],

  /* ───────────── TRANSPORTE ───────────── */
  subte: [
    { line: "50", color: "#3aa03b", route: "Isolatorweg ↔ Gein", useful: "La línea en anillo: Sloterdijk, Lelylaan, Station Zuid, RAI y Amstel, sin pasar por el centro" },
    { line: "51", color: "#f28c00", route: "Isolatorweg ↔ Centraal Station", useful: "Station Zuid, Amstel, Wibautstraat, Weesperplein, Waterlooplein y Nieuwmarkt hasta la estación central" },
    { line: "52", color: "#00a3e0", route: "Noord ↔ Station Zuid", useful: "La línea norte-sur: Noord, Centraal Station, Rokin (Dam), Vijzelgracht, De Pijp y Europaplein (RAI)" },
    { line: "53", color: "#e3000b", route: "Centraal Station ↔ Gaasperplas", useful: "Nieuwmarkt, Waterlooplein, Weesperplein, Wibautstraat y Amstel" },
    { line: "54", color: "#ffd200", route: "Centraal Station ↔ Gein", useful: "Nieuwmarkt, Waterlooplein y Bijlmer ArenA (estadio del Ajax y Ziggo Dome)" }
  ],
  transport: [
    /* Revisado el 18/11/2026 contra gvb.nl, schiphol.nl y ovpay.nl. */
    { icon: "💳", title: "Cómo pagar: lo primero", items: [
      { t: "Con la tarjeta del banco (OVpay)", d: "En tranvías, colectivos, metro y trenes de todo el país podés pasar tu tarjeta de débito o crédito sin contacto, o el celular, por el lector al subir y otra vez al bajar. No hace falta registrarse ni bajar ninguna app." },
      { t: "Siempre marcá la salida", d: "Hay que apoyar la misma tarjeta al subir y al bajar. Si te olvidás de marcar la salida, te cobran una tarifa alta." },
      { t: "Una tarjeta por persona", d: "Cada persona necesita su propia tarjeta o celular: con una misma tarjeta no pueden viajar dos." },
      { t: "Billetes de GVB por días", d: "Si vas a viajar mucho, hay billetes de 1 a 7 días para viajar sin límite en tranvía, metro y colectivos de GVB. Se compran en la app de GVB, en las máquinas y en las oficinas de GVB. No sirven en los trenes." },
      { t: "Amsterdam Travel Ticket", d: "El billete para turistas de 1 a 3 días que incluye el viaje al aeropuerto de Schiphol en tren y todo el transporte de GVB." },
      { t: "No se paga en efectivo", d: "En tranvías y colectivos no se acepta efectivo." },
      { t: "Última revisión", d: "18 de noviembre de 2026, con los sitios de GVB, Schiphol y OVpay. Si algo no coincide, valen los carteles del transporte." }
    ] },
    { icon: "🚋", title: "Tranvía", items: [
      { t: "El más útil", d: "Los tranvías llegan a casi todo lo que vas a visitar: el centro, los canales, el Museumplein, el Vondelpark y De Pijp." },
      { t: "Cómo subir", d: "Se sube por las puertas marcadas y se apoya la tarjeta en el lector al subir y al bajar." },
      { t: "Cuidado en la calle", d: "Los tranvías son silenciosos y tienen prioridad. Mirá bien antes de cruzar las vías y no camines por las bicisendas (las rojas)." }
    ] },
    { icon: "🚇", title: "Metro", items: [
      { t: "Cómo funciona", d: "Hay cinco líneas, con número y color. La 52 cruza la ciudad de norte a sur por la estación central, Rokin (cerca del Dam) y De Pijp." },
      { t: "Molinetes", d: "En las estaciones de metro se pasa la tarjeta por el molinete al entrar y al salir." },
      { t: "Cómo saber cuál tomar", d: "Usá la app de GVB, Google Maps o 9292: indican línea, parada y cuánto falta." }
    ] },
    { icon: "⛴️", title: "Ferris, colectivos y de noche", items: [
      { t: "Ferris gratis", d: "Detrás de la estación central salen ferris gratis a Amsterdam Noord: al Eye, a la torre A'DAM y al NDSM. Se puede subir con bici." },
      { t: "Colectivos", d: "Llegan a los barrios de afuera y a pueblos cercanos." },
      { t: "De noche", d: "Cuando termina el tranvía funcionan los colectivos nocturnos (líneas N), que salen casi todos de la estación central." }
    ] },
    { icon: "✈️", title: "Aeropuerto", items: [
      { t: "Schiphol (AMS)", d: "El aeropuerto tiene una sola terminal grande, con la estación de tren justo abajo." },
      { t: "Tren a la estación central", d: "Es lo más rápido: unos 15 minutos y trenes muy seguido. Se paga con la tarjeta del banco en los lectores amarillos que están arriba de las escaleras del hall, o con el Amsterdam Travel Ticket." },
      { t: "Colectivo 397", d: "Va al Museumplein, Leidseplein y al centro, y sirve si te alojás por esa zona." },
      { t: "Taxi", d: "Usá la fila oficial de taxis, a la salida del hall. Cobran con taxímetro y el viaje sale caro." }
    ] },
    { icon: "🚆", title: "Trenes", items: [
      { t: "Estaciones", d: "La estación central (Amsterdam Centraal) es la principal. Station Zuid y Sloterdijk también tienen muchos trenes." },
      { t: "Trenes NS", d: "Los trenes del país los maneja NS: van a Haarlem, Utrecht, La Haya, Róterdam y el aeropuerto. Se paga con la tarjeta del banco o con boletos de la app de NS." },
      { t: "A otros países", d: "Hay trenes rápidos a Bruselas, París, Londres (Eurostar) y Alemania. Esos no se pagan con la tarjeta en el lector: hace falta un boleto." }
    ] },
    { icon: "🚕", title: "Taxis y apps", items: [
      { t: "Taxis oficiales", d: "Tienen patente azul y el cartel de taxi en el techo. Se toman en las paradas (no se paran en la calle con la mano) o por app." },
      { t: "Apps", d: "Uber y Bolt funcionan en la ciudad y muestran el precio antes de pedir." },
      { t: "Consejos", d: "El centro es chico y los taxis caros: muchas veces conviene el tranvía o caminar." }
    ] },
    { icon: "🚲", title: "En bicicleta y a pie", items: [
      { t: "La ciudad de las bicis", d: "Hay más bicis que personas y bicisendas en todos lados. Alquilar una es la forma más linda de recorrer, si ya andás con confianza." },
      { t: "Reglas", d: "Andá por la bicisenda, por la derecha, con luz de noche y sin el celular en la mano. Marcá con el brazo antes de doblar. Cuidado con las vías del tranvía: la rueda se traba." },
      { t: "Candado siempre", d: "Roban muchísimas bicis: atala siempre con el candado a algo fijo." },
      { t: "A pie", d: "El centro se recorre caminando. Mirá siempre a los dos lados: el peligro son las bicis, no los autos." }
    ] }
  ],

  /* ───────────── SEGURIDAD ───────────── */
  emergencies: [
    { n: "112", t: "Emergencias: policía, ambulancia y bomberos" },
    { n: "0900 8844", t: "Policía sin urgencia (para denunciar un robo)" },
    { n: "088 003 0600", t: "Médico de guardia a la noche y los fines de semana (huisartsenpost)" },
    { n: "0800 2000", t: "Violencia familiar y abuso (Veilig Thuis)" },
    { n: "14 020", t: "Municipalidad de Ámsterdam (información de la ciudad)" }
  ],
  safety: [
    { icon: "🎒", title: "Lo más común: carteristas", tone: "warn", items: [
      "Ámsterdam es una ciudad segura, pero hay carteristas donde hay mucha gente.",
      "Pasa sobre todo en la estación central, los tranvías llenos, la plaza Dam, el Damrak, el Barrio Rojo y los mercados.",
      "Llevá la mochila adelante y no dejes el celular sobre la mesa en las terrazas.",
      "Si alquilás una bici, atala siempre: el robo de bicis es lo más común de todo."
    ] },
    { icon: "🚲", title: "El peligro de verdad: las bicis", tone: "warn", items: [
      "La causa más común de accidentes de turistas es caminar por la bicisenda: es roja y está al lado de la vereda.",
      "Mirá a los dos lados antes de cruzar, también las bicis y los tranvías, que son silenciosos.",
      "Los canales no tienen baranda: de noche, y si tomaste algo, alejate del borde."
    ] },
    { icon: "🎭", title: "Estafas y cosas a evitar", tone: "warn", items: [
      "Los que te ofrecen drogas en la calle venden cosas falsas o peligrosas: no compres nunca.",
      "Los falsos policías: gente de civil que te pide ver la billetera. La policía de verdad no hace eso.",
      "Bicis robadas a precio regalado: comprar una bici robada es delito.",
      "Cambio de dinero: evitá las casas de cambio de la calle, que cobran mucho. Mejor pagar con tarjeta."
    ] },
    { icon: "🏮", title: "Reglas del centro", tone: "warn", items: [
      "En el Barrio Rojo no se puede fumar porro en la calle y está prohibido sacar fotos a las trabajadoras.",
      "En el centro no se puede tomar alcohol en la calle en muchas zonas, y hacer pis en la calle tiene multa.",
      "Los coffeeshops venden cannabis solo a mayores de 18, con documento. Lo que se compra ahí no se puede sacar del país.",
      "Los tours guiados por las vidrieras del Barrio Rojo están prohibidos."
    ] },
    { icon: "✅", title: "Buenas prácticas", tone: "ok", items: [
      "Con estas precauciones, la gran mayoría de las visitas transcurre sin problemas.",
      "Llevá solo lo del día: una tarjeta, algo de efectivo y una copia del documento.",
      "Si te roban, llamá a la policía al 0900 8844 o andá a una comisaría para hacer la denuncia.",
      "Si te roban el pasaporte: casi todas las embajadas están en La Haya, a una hora en tren; algunos países tienen consulado en Ámsterdam. En Info > Ayuda están en el mapa.",
      "Contratá un seguro de viaje: la atención médica es buena, pero cara sin cobertura."
    ] }
  ],

  /* ───────────── INFO PRÁCTICA ───────────── */
  practical: [
    { icon: "💵", title: "Dinero y pagos", items: [
      { t: "Moneda", d: "Euro (EUR)." },
      { t: "Tarjetas", d: "Se paga con tarjeta en casi todos lados, también sin contacto y con el celular. Muchos lugares no aceptan efectivo: verás carteles de \"pin only\" o \"no cash\"." },
      { t: "Ojo con la de crédito", d: "Algunos supermercados y comercios chicos solo aceptan tarjetas de débito. Llevá las dos." },
      { t: "Cajeros", d: "Usá los de bancos. Si el cajero o el lector te ofrece cobrarte en tu moneda, elegí siempre euros." },
      { t: "Propina", d: "No es obligatoria. Se suele redondear o dejar un poco más si te atendieron bien." },
      { t: "Tasa turística", d: "Los alojamientos cobran aparte un impuesto que es un porcentaje del precio de la habitación, de los más altos de Europa. Preguntá si ya está incluido." }
    ] },
    { icon: "🕘", title: "Horarios de Ámsterdam", items: [
      { t: "Comidas", d: "Se come temprano: el almuerzo es liviano, al mediodía, y la cena, entre las 18 y las 21. Muchas cocinas cierran temprano." },
      { t: "Comercios", d: "Abren todo el día; muchos abren más tarde los lunes a la mañana. Los domingos abren a partir del mediodía en el centro." },
      { t: "Museos", d: "Los más famosos (Rijksmuseum, Van Gogh, Casa de Ana Frank) se llenan: sacá la entrada con día y horario en su web oficial. La Casa de Ana Frank y el Van Gogh no venden en la puerta." }
    ] },
    { icon: "🌤️", title: "Clima y cuándo venir", items: [
      { t: "Primavera (abr–may)", d: "Fresca, con los tulipanes en flor y el Día del Rey (27 de abril), la gran fiesta naranja." },
      { t: "Verano (jun–ago)", d: "Templado, con días larguísimos, terrazas y festivales. Es la época con más gente." },
      { t: "Otoño (sep–nov)", d: "Fresco y lluvioso, con menos turistas." },
      { t: "Invierno (dic–feb)", d: "Frío, húmedo y con pocas horas de luz, pero con el festival de luces y pistas de patinaje." },
      { t: "Siempre", d: "Llueve seguido todo el año: llevá campera impermeable y un paraguas chico." }
    ] },
    { icon: "🔌", title: "Datos útiles", items: [
      { t: "Electricidad", d: "230 V. Enchufes tipo C y F (dos patas redondas). Si venís de la Argentina, llevá adaptador." },
      { t: "Agua", d: "El agua de la canilla es potable y muy buena." },
      { t: "Internet", d: "Para tener datos, lo más simple es una eSIM o un chip local." },
      { t: "Idiomas", d: "Se habla neerlandés, pero casi todo el mundo habla muy bien inglés." },
      { t: "Salud", d: "Las farmacias se llaman \"apotheek\". Para algo que no es urgente a la noche, llamá al médico de guardia antes de ir. Urgencias: 112." }
    ] },
    { icon: "🧀", title: "Costumbres", items: [
      { t: "Saludo", d: "Entre conocidos se saludan con tres besos. Con desconocidos, un apretón de manos." },
      { t: "Directos", d: "Los holandeses son muy directos: no es mala educación." },
      { t: "Las casas", d: "Las escaleras de las casas viejas son empinadísimas: subí con cuidado y con el equipaje liviano." },
      { t: "Para probar", d: "Arenque crudo, bitterballen y croquetas, stroopwafels, panqueques y poffertjes, tarta de manzana, queso viejo, papas fritas con mayonesa, rijsttafel indonesia y jenever." }
    ] }
  ]
};
