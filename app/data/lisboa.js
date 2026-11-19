/* Datos de la ciudad: Lisboa (tarjeta #214).
   Tiene la estructura y toda la información de "Info". Los lugares están en data/lisboa-lugares.js.
   price: 0 = gratis, 1 = $, 2 = $$, 3 = $$$, 4 = $$$$, null = no aplica.

   De dónde salen los datos (revisados el 19/11/2026; detalle en docs/fuentes-lisboa.md):
   visitlisboa.com (Lisboa Card), metrolisboa.pt (tarjetas, zapping, pago sin contacto y pase de 24 horas) y carris.pt (tranvías y pago a bordo).
   Sin precios ni horarios exactos: cambian seguido. */
window.CITY_DATA = window.CITY_DATA || {};
window.CITY_DATA.lisboa = {
  id: "lisboa",
  name: "Lisboa",
  fullName: "Lisboa",
  country: "Portugal",
  tz: "Europe/Lisbon",
  currency: "EUR",
  tagline: "Todo lo que necesitás para recorrer la ciudad",
  updated: "Noviembre 2026",

  categories: [
    { id: "ver", name: "Imperdibles", icon: "🏛️", color: "#2f7fd1", desc: "Belém, el castillo, miradores, museos y azulejos" },
    { id: "comer", name: "Dónde comer", icon: "🍽️", color: "#d1552f", desc: "Pastéis de nata, tascas, mariscos y mercados" },
    { id: "noche", name: "Noche", icon: "🍸", color: "#8a4fd1", desc: "Fado, terrazas, ginjinha y boliches" },
    { id: "tours", name: "Tours y guías", icon: "🧭", color: "#1f9d8a", desc: "Caminatas, tuk-tuk, barcos y comida" },
    { id: "escapadas", name: "Excursiones", icon: "🚆", color: "#3a9a3f", desc: "Sintra, Cascais, playas y pueblos" },
    { id: "dormir", name: "Hospedaje", icon: "🛏️", color: "#c58a12", desc: "Hostels, hoteles y dónde alojarse" },
    { id: "compras", name: "Compras y mercados", icon: "🛍️", color: "#d13f7a", desc: "Conservas, azulejos, libros y ferias" },
    { id: "deporte", name: "Deportes", icon: "⚽", color: "#0b7285", desc: "Fútbol, surf y la ribera en bici" },
    { id: "ocio", name: "Entretenimiento", icon: "🎡", color: "#e8590c", desc: "Oceanario, teatro, conciertos y planes con chicos" }
  ],

  /* Los lugares están en data/lisboa-lugares.js. */
  places: [],

  barrios: [
    { name: "Baixa e Chiado", vibe: "El centro elegante", desc: "La Baixa, reconstruida en cuadrícula después del terremoto de 1755, con la Praça do Comércio, la Rua Augusta y el Rossio; arriba, el Chiado con sus cafés históricos, librerías y teatros.", stay: "Céntrico y bien conectado; mucho movimiento de turistas." },
    { name: "Alfama e Mouraria", vibe: "La Lisboa más antigua", desc: "Callecitas en subida, ropa colgada, casas de fado, la Sé, el castillo arriba y el Tranvía 28 pasando por calles angostas. La Mouraria, al lado, es el barrio de los inmigrantes y la cuna del fado.", stay: "Con mucho encanto; hay que subir y bajar escaleras." },
    { name: "Graça", vibe: "Miradores y vida de barrio", desc: "Uno de los barrios más altos, con dos de los mejores miradores de la ciudad y el Monasterio de São Vicente de Fora.", stay: "Tranquilo y con vista; lejos del metro." },
    { name: "Bairro Alto e Príncipe Real", vibe: "Noche y diseño", desc: "El Bairro Alto es de día un barrio tranquilo y de noche la gran fiesta en la calle. El Príncipe Real, al lado, tiene jardines, tiendas de diseño y restaurantes.", stay: "Ideal para salir; en el Bairro Alto hay ruido hasta tarde." },
    { name: "Cais do Sodré e Santos", vibe: "La ribera que no duerme", desc: "La vieja zona del puerto, con el Time Out Market, la Rua Cor-de-Rosa llena de bares, y Santos y la Lapa con el Museo de Arte Antiga.", stay: "Muy bien conectado con trenes y barcos; ruidoso de noche." },
    { name: "Belém", vibe: "Los descubrimientos", desc: "Junto al río, el Monasterio de los Jerónimos, la Torre de Belém, el Padrão dos Descobrimentos, el MAAT y los pastéis de Belém.", stay: "Para visitar; está a unos minutos del centro en tranvía o tren." },
    { name: "Alcântara", vibe: "Fábricas convertidas", desc: "La LX Factory, el puente 25 de Abril y la ribera con bares y restaurantes en viejos depósitos.", stay: "Más para salir y comer que para dormir." },
    { name: "Estrela e Campo de Ourique", vibe: "Vida de barrio", desc: "La Basílica da Estrela, su jardín, el Mercado de Campo de Ourique y el acueducto cerca.", stay: "Residencial y tranquilo, con el Tranvía 28." },
    { name: "Avenidas Novas", vibe: "Avenidas y jardines", desc: "La Avenida da Liberdade con sus tiendas, el Parque Eduardo VII, la Fundación Gulbenkian, el Saldanha y el zoológico.", stay: "Hoteles grandes y buena conexión de metro." },
    { name: "Oriente y Marvila", vibe: "La Lisboa moderna", desc: "El Parque das Nações, construido para la Expo 98, con el Oceanario y la costanera; y Marvila, con cervecerías artesanales y el Museo del Azulejo cerca.", stay: "Moderno y práctico para el aeropuerto." },
    { name: "Benfica y Alvalade", vibe: "Fútbol y centros comerciales", desc: "Los estadios del Benfica y del Sporting y el Centro Colombo, uno de los centros comerciales más grandes de la península.", stay: "Lejos de lo turístico; bien conectado en metro." }
  ],

  /* Planes armados. Cada paso nombra un lugar de data/lisboa-lugares.js ("ref" = nombre exacto). */
  itineraries: [
    { id: "1-dia", name: "Lisboa en 1 día", icon: "⚡", desc: "Lo esencial si tenés solo una jornada.", steps: [
      { when: "Mañana", ref: "Mosteiro dos Jerónimos", note: "Llegá temprano: se forma fila." },
      { when: "Mañana", ref: "Pastéis de Belém" },
      { when: "Mañana", ref: "Torre de Belém" },
      { when: "Mediodía", ref: "Time Out Market" },
      { when: "Tarde", ref: "Praça do Comércio" },
      { when: "Tarde", ref: "Alfama", note: "Subí caminando o en el Tranvía 28." },
      { when: "Atardecer", ref: "Miradouro da Senhora do Monte" },
      { when: "Noche", ref: "Clube de Fado", note: "Cena con fado en vivo." }
    ] },
    { id: "3-dias", name: "3 días clásicos", icon: "🗓️", desc: "El recorrido completo para una primera visita.", steps: [
      { when: "Día 1 · mañana", ref: "Praça do Comércio" },
      { when: "Día 1 · mañana", ref: "Elevador de Santa Justa" },
      { when: "Día 1 · mediodía", ref: "Manteigaria", note: "Un pastel de nata recién salido." },
      { when: "Día 1 · tarde", ref: "Castelo de São Jorge" },
      { when: "Día 1 · tarde", ref: "Miradouro de Santa Luzia" },
      { when: "Día 1 · noche", ref: "Bairro Alto" },
      { when: "Día 2 · mañana", ref: "Mosteiro dos Jerónimos" },
      { when: "Día 2 · mañana", ref: "Pastéis de Belém" },
      { when: "Día 2 · tarde", ref: "MAAT" },
      { when: "Día 2 · tarde", ref: "LX Factory" },
      { when: "Día 2 · noche", ref: "Cervejaria Ramiro", note: "Mariscos y un prego de postre." },
      { when: "Día 3 · todo el día", ref: "Palácio Nacional da Pena", note: "Tren desde Rossio. Comprá la entrada antes." },
      { when: "Día 3 · tarde", ref: "Quinta da Regaleira" }
    ] },
    { id: "lluvia", name: "Día de lluvia", icon: "🌧️", desc: "Todo bajo techo.", steps: [
      { when: "Mañana", ref: "Museu Nacional do Azulejo" },
      { when: "Mediodía", ref: "Time Out Market" },
      { when: "Tarde", ref: "Museu Calouste Gulbenkian" },
      { when: "Tarde", ref: "A Brasileira", note: "Un café en el Chiado." },
      { when: "Noche", ref: "Tasca do Chico", note: "Fado en una tasca chiquita." }
    ] },
    { id: "gratis", name: "Lisboa gratis", icon: "💸", desc: "Lo mejor sin gastar en entradas.", steps: [
      { when: "Mañana", ref: "Praça do Comércio" },
      { when: "Mañana", ref: "Alfama" },
      { when: "Mediodía", ref: "Miradouro das Portas do Sol" },
      { when: "Tarde", ref: "Jardim do Príncipe Real" },
      { when: "Tarde", ref: "Miradouro de São Pedro de Alcântara" },
      { when: "Atardecer", ref: "Ribera del Tajo", note: "Caminata por la costanera hasta Belém." }
    ] },
    { id: "chicos", name: "Con chicos", icon: "🧒", desc: "Un día pensado para chicos.", steps: [
      { when: "Mañana", ref: "Oceanário de Lisboa" },
      { when: "Mediodía", ref: "Telecabine Lisboa" },
      { when: "Tarde", ref: "Pavilhão do Conhecimento" },
      { when: "Tarde", ref: "Parque Tejo" }
    ] }
  ],

  /* ───────────── TRANSPORTE ───────────── */
  subte: [
    { line: "Azul", color: "#4e84c4", route: "Reboleira – Santa Apolónia", useful: "Baixa-Chiado, Restauradores, Avenida da Liberdade, Marquês de Pombal, Jardim Zoológico y la estación de trenes de Santa Apolónia" },
    { line: "Amarela", color: "#fdb913", route: "Odivelas – Rato", useful: "Saldanha, Campo Grande y el Marquês de Pombal" },
    { line: "Verde", color: "#00a890", route: "Telheiras – Cais do Sodré", useful: "Cais do Sodré (trenes a Cascais y barcos), Baixa-Chiado, Rossio y Martim Moniz" },
    { line: "Vermelha", color: "#e63a46", route: "São Sebastião – Aeroporto", useful: "La única que llega al aeropuerto; pasa por Saldanha y Oriente (Parque das Nações)" }
  ],
  transport: [
    /* Revisado el 19/11/2026 con metrolisboa.pt, carris.pt, cp.pt y ttsl.pt. */
    { icon: "💳", title: "Cómo pagar: lo primero", items: [
      { t: "Tarjeta navegante ocasional", d: "La tarjeta recargable para turistas (antes se llamaba Viva Viagem), para el metro, los tranvías, los colectivos de Carris, los barcos y los trenes. Se compra en las máquinas del metro; la tarjeta en sí también se paga." },
      { t: "Zapping", d: "Cargá saldo (\"zapping\") en la tarjeta: cada viaje sale más barato que el boleto suelto y sirve en todos los transportes de la ciudad." },
      { t: "Con la tarjeta del banco", d: "En el metro y a bordo de los colectivos y tranvías de Carris se puede pagar con Visa o Mastercard sin contacto. Cada viaje cobra un boleto suelto, más caro que con zapping." },
      { t: "Pase de 24 horas", d: "Hay un pase de 24 horas para el metro y Carris (tranvías, colectivos y elevadores), y otros que suman los barcos o los trenes. Conviene si vas a usar mucho el tranvía y los elevadores, que comprados a bordo son caros." },
      { t: "Lisboa Card", d: "La tarjeta turística oficial: transporte gratis, entrada gratis a decenas de museos y monumentos, y descuentos en otros." },
      { t: "Última revisión", d: "19 de noviembre de 2026, con las webs oficiales del metro, Carris, CP y los barcos. Si algo no coincide, valen los carteles del transporte." }
    ] },
    { icon: "🚇", title: "Metro de Lisboa", items: [
      { t: "Cuatro líneas", d: "Azul, Amarela, Verde y Vermelha, con estaciones decoradas con azulejos de artistas portugueses." },
      { t: "Al aeropuerto", d: "La línea Vermelha llega a la terminal 1 del aeropuerto. Para el centro se combina en Alameda (Verde) o São Sebastião (Azul)." },
      { t: "Cómo entrar", d: "Pasá la tarjeta por el lector al entrar y guardala: también hace falta para salir." }
    ] },
    { icon: "🚋", title: "Tranvías y elevadores", items: [
      { t: "Tranvía 28", d: "El amarillo clásico, que sube por la Graça, Alfama, la Baixa, el Chiado y la Estrela. Va lleno: subí en la punta (Martim Moniz o Campo de Ourique) y cuidá la billetera." },
      { t: "Tranvía 15", d: "El moderno, de la Praça da Figueira a Algés por la ribera, pasando por Belém." },
      { t: "Elevadores", d: "Los funiculares de la Glória, la Bica y la Lavra, y el Elevador de Santa Justa, salvan las subidas del centro. Con el pase de 24 horas están incluidos." },
      { t: "Colectivos", d: "Carris tiene colectivos por toda la ciudad. Se paga con la tarjeta navegante o con la tarjeta del banco sin contacto." }
    ] },
    { icon: "🚆", title: "Trenes y barcos", items: [
      { t: "A Sintra", d: "Trenes de CP desde la estación del Rossio, en el centro." },
      { t: "A Cascais", d: "Trenes de CP desde Cais do Sodré, por la costa, pasando por Belém y las playas." },
      { t: "Barcos", d: "Desde Cais do Sodré salen los barcos a Cacilhas, al otro lado del río: un paseo corto con vista a la ciudad." },
      { t: "Larga distancia", d: "Los trenes a Oporto y al Algarve salen de Santa Apolónia y de Oriente." }
    ] },
    { icon: "✈️", title: "Aeropuerto", items: [
      { t: "Aeropuerto Humberto Delgado (LIS)", d: "Está dentro de la ciudad, a unos 20 minutos del centro. Tiene dos terminales: la 1 para la mayoría de los vuelos y la 2 para algunas low cost, unidas por un colectivo." },
      { t: "Metro", d: "La línea Vermelha sale de la terminal 1: es lo más barato." },
      { t: "Taxis y apps", d: "Hay fila de taxis en llegadas y punto de encuentro para Uber, Bolt y FREENOW." }
    ] },
    { icon: "🚕", title: "Taxis y apps", items: [
      { t: "Apps", d: "Uber, Bolt y FREENOW funcionan bien y muchas veces salen más baratas que el taxi." },
      { t: "Taxis", d: "Son negros con techo verde o beige. Funcionan con reloj; de noche y con valijas hay recargo." }
    ] },
    { icon: "🚲", title: "A pie y en bici", items: [
      { t: "Las siete colinas", d: "Lisboa es de subidas y bajadas, con calles de piedra que resbalan cuando llueve: llevá calzado cómodo, con buena suela." },
      { t: "Ribera", d: "Hay una bicisenda plana por la costanera, de Cais do Sodré a Belém y más allá." },
      { t: "Bicis públicas", d: "GIRA es el sistema de bicis de la ciudad, con muchas eléctricas para las subidas." }
    ] }
  ],

  /* ───────────── SEGURIDAD ───────────── */
  emergencies: [
    { n: "112", t: "Emergencias: policía, ambulancia y bomberos" },
    { n: "808 24 24 24", t: "SNS 24: línea de salud, te dicen a dónde ir" },
    { n: "800 202 148", t: "Violencia doméstica (gratis, todo el día)" },
    { n: "800 250 250", t: "Centro de información antivenenos" },
    { n: "116 111", t: "Línea de ayuda para chicos" }
  ],
  safety: [
    { icon: "👜", title: "Lo más común: carteristas", tone: "warn", items: [
      "Lisboa es una de las capitales más seguras de Europa, pero hay carteristas donde se junta gente.",
      "El Tranvía 28 y el Elevador de Santa Justa son los lugares clásicos: la mochila adelante y la billetera guardada.",
      "En la Baixa, el Rossio y los miradores, no dejes el celular sobre la mesa."
    ] },
    { icon: "🗺️", title: "Zonas para ir con atención", tone: "warn", items: [
      "Bairro Alto y Cais do Sodré, de madrugada, cuando hay mucha gente tomando en la calle.",
      "Martim Moniz y el Intendente, de noche.",
      "Las escaleras y callecitas vacías de Alfama, muy tarde."
    ] },
    { icon: "🎭", title: "Estafas típicas", tone: "warn", items: [
      "En la Baixa y el Rossio te ofrecen \"hachís\" o \"cocaína\": suele ser falso y es ilegal. Seguí de largo.",
      "En los restaurantes, la entrada que ponen en la mesa (pan, aceitunas, quesos) se cobra si la comés. Si no la querés, pedí que la retiren.",
      "Taxis sin reloj o que te dan vueltas: pedí por app."
    ] },
    { icon: "✅", title: "Buenas prácticas", tone: "ok", items: [
      "Con estas precauciones, la gran mayoría de las visitas transcurre sin problemas.",
      "Si te roban, llamá al 112 o andá a una comisaría de la PSP (la policía) para hacer la denuncia.",
      "Si te roban el pasaporte, después de la denuncia andá a tu consulado: en Info > Ayuda están en el mapa.",
      "Contratá un seguro de viaje."
    ] }
  ],

  /* ───────────── INFO PRÁCTICA ───────────── */
  practical: [
    { icon: "💶", title: "Dinero y pagos", items: [
      { t: "Moneda", d: "Euro (EUR)." },
      { t: "Tarjetas", d: "Se aceptan casi en todos lados; en algunas tascas y quioscos piden efectivo o un mínimo para pagar con tarjeta." },
      { t: "Cajeros", d: "Usá los cajeros Multibanco de los bancos. Evitá los cajeros de colores de empresas de cambio: cobran comisiones altas. Si te ofrecen cobrarte en tu moneda, elegí euros." },
      { t: "Propina", d: "No es obligatoria. Si te atendieron bien, se deja algo de cambio o redondeando la cuenta." }
    ] },
    { icon: "🕘", title: "Horarios de Lisboa", items: [
      { t: "Comidas", d: "Se almuerza y se cena más temprano que en España. Las tascas cierran la cocina temprano." },
      { t: "Comercios", d: "Muchos negocios chicos cierran los domingos; los centros comerciales abren todos los días." },
      { t: "Museos", d: "La mayoría de los museos cierra los lunes." }
    ] },
    { icon: "🌤️", title: "Clima y cuándo venir", items: [
      { t: "Primavera y otoño", d: "La mejor época: templado y con sol." },
      { t: "Verano", d: "Caluroso, seco y con muchos turistas. En junio son las fiestas de Santo António." },
      { t: "Invierno", d: "Suave pero lluvioso, y las casas son frías. Las calles de piedra resbalan cuando llueve." },
      { t: "El mar", d: "El agua del Atlántico es fría todo el año." }
    ] },
    { icon: "🔌", title: "Datos útiles", items: [
      { t: "Electricidad", d: "230 V. Enchufes tipo F (dos patas redondas): si venís de la Argentina, llevá adaptador." },
      { t: "Agua", d: "El agua de la canilla es potable." },
      { t: "Internet", d: "Si tenés chip de un país de la Unión Europea, funciona igual que en casa. Si no, una eSIM o un chip local." },
      { t: "Idioma", d: "Se habla portugués. Mucha gente entiende el castellano si hablás despacio, y casi todos hablan inglés." },
      { t: "Salud", d: "Farmacias con la cruz verde en todos los barrios. Emergencias: 112." }
    ] },
    { icon: "☕", title: "Costumbres", items: [
      { t: "El café", d: "Una \"bica\" es un café corto; un \"galão\", con mucha leche en vaso; una \"meia de leite\", un café con leche." },
      { t: "Trato", d: "Los portugueses son amables y algo formales. Un \"bom dia\" y un \"obrigado\" se agradecen mucho." },
      { t: "Para probar", d: "Pastel de nata, bacalao (hay cientos de recetas), sardinas asadas en junio, bifana, prego, arroz de marisco, ginjinha y vino verde." }
    ] }
  ]
};
