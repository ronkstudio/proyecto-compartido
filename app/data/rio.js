/* Datos de la ciudad: Río de Janeiro (tarjeta #203).
   Tiene la estructura y toda la información de "Info". Los lugares están en data/rio-lugares.js.
   price: 0 = gratis, 1 = $, 2 = $$, 3 = $$$, 4 = $$$$, null = no aplica.

   De dónde salen los datos (revisados el 18/11/2026; detalle en docs/fuentes-rio.md):
   riotur.rio ("Informações úteis": consulados, DEAT, BPTUR, horarios del metro, BRT y VLT), metrorio.com.br y la prensa sobre el pago
   con tarjeta sin contacto en el metro (Diário do Transporte, 2026), mobi-rio.rio.br (BRT y Conexão BRT al aeropuerto, 11/2026).
   Sin precios ni horarios exactos: cambian seguido. */
window.CITY_DATA = window.CITY_DATA || {};
window.CITY_DATA.rio = {
  id: "rio",
  name: "Río de Janeiro",
  fullName: "Río de Janeiro",
  country: "Brasil",
  tz: "America/Sao_Paulo",
  currency: "BRL",
  tagline: "Todo lo que necesitás para recorrer la ciudad",
  updated: "Noviembre 2026",

  categories: [
    { id: "ver", name: "Imperdibles", icon: "🏛️", color: "#2f7fd1", desc: "Cristo, Pan de Azúcar, playas, morros y museos" },
    { id: "comer", name: "Dónde comer", icon: "🍽️", color: "#d1552f", desc: "Botecos, churrasco, feijoada y jugos" },
    { id: "noche", name: "Noche", icon: "🍸", color: "#8a4fd1", desc: "Samba, bossa nova, caipirinhas y terrazas" },
    { id: "tours", name: "Tours y guías", icon: "🧭", color: "#1f9d8a", desc: "Visitas guiadas, senderos y paseos en barco" },
    { id: "escapadas", name: "Excursiones", icon: "🚌", color: "#3a9a3f", desc: "Islas, pueblos coloniales y playas cerca" },
    { id: "dormir", name: "Hospedaje", icon: "🛏️", color: "#c58a12", desc: "Hostels, hoteles y dónde alojarse" },
    { id: "compras", name: "Compras y mercados", icon: "🛍️", color: "#d13f7a", desc: "Ferias, shoppings y diseño carioca" },
    { id: "deporte", name: "Deportes", icon: "⚽", color: "#0b7285", desc: "Maracaná, surf, senderos y aire libre" },
    { id: "ocio", name: "Entretenimiento", icon: "🎡", color: "#e8590c", desc: "Escuelas de samba, shows y planes con chicos" }
  ],

  /* Los lugares están en data/rio-lugares.js. */
  places: [],

  barrios: [
    { name: "Copacabana", vibe: "La playa más famosa", desc: "Cuatro kilómetros de arena, la vereda de ondas, quioscos, el Fuerte de Copacabana y edificios de los años 50.", stay: "Bien conectado y con hoteles de todos los precios; de noche, atento en las calles laterales y en la playa." },
    { name: "Ipanema", vibe: "Playa y onda", desc: "La playa de la canción, el Arpoador, la Feria Hippie de los domingos y calles con tiendas y bares.", stay: "Una de las mejores bases: lindo, con vida y más tranquilo que Copacabana." },
    { name: "Leblon", vibe: "Elegante y tranquilo", desc: "La punta de la playa frente al morro Dos Hermanos, con restaurantes, botecos clásicos y mucha vida de barrio.", stay: "El más seguro y caro de la zona sur." },
    { name: "Botafogo", vibe: "Bares y vista al Pan de Azúcar", desc: "La bahía con la mejor postal del Pan de Azúcar, calles llenas de bares y restaurantes nuevos y el mirador Dona Marta cerca.", stay: "Barrio de vecinos, con metro y buenos precios." },
    { name: "Urca", vibe: "Un pueblo al pie del Pan de Azúcar", desc: "Calles tranquilas, la Praia Vermelha, el teleférico del Pan de Azúcar y la mureta para tomar algo al atardecer.", stay: "Tranquilo y seguro, pero con pocos hoteles." },
    { name: "Flamengo y Catete", vibe: "El Aterro y el Museo de la República", desc: "El gran parque costero del Aterro, el Museo de Arte Moderno y el Palacio del Catete.", stay: "Céntrico y con metro; de noche el parque queda vacío." },
    { name: "Lagoa y Jardim Botânico", vibe: "La laguna y la selva", desc: "La laguna Rodrigo de Freitas con su bicisenda, el Jardín Botánico y el Parque Lage al pie del Corcovado.", stay: "Residencial y verde, lejos del metro." },
    { name: "Santa Teresa", vibe: "Bohemio en el morro", desc: "Casonas antiguas, el tranvía amarillo (bondinho), talleres de artistas, bares y vistas a la bahía.", stay: "Encantador de día; de noche, moverse en auto o app." },
    { name: "Lapa", vibe: "Arcos y samba", desc: "Los Arcos de Lapa, la Escalera Selarón y la noche de samba y choro en casonas viejas.", stay: "Mucha fiesta y ruido; de noche, mejor moverse en auto o app." },
    { name: "Centro", vibe: "La ciudad histórica", desc: "El Theatro Municipal, la Confitería Colombo, iglesias barrocas, el Paço Imperial y la Catedral Metropolitana.", stay: "Lindo de día en semana; de noche y los domingos queda vacío." },
    { name: "Porto Maravilha", vibe: "El puerto renovado", desc: "La Plaza Mauá con el Museo del Mañana y el MAR, el AquaRio, el mural Etnias y la Pequeña África con la Pedra do Sal.", stay: "Más para visitar que para dormir." },
    { name: "Gávea", vibe: "Universitario y verde", desc: "El Planetario, el Instituto Moreira Salles y bares de estudiantes al pie de la montaña.", stay: "Tranquilo, lejos del metro." },
    { name: "Tijuca y Maracanã", vibe: "Fútbol y escuelas de samba", desc: "El estadio Maracaná, la Quinta da Boa Vista y la escuela de samba Salgueiro.", stay: "Zona norte, de vecinos; para visitar." },
    { name: "Barra da Tijuca", vibe: "Playa larga y shoppings", desc: "Una playa enorme, avenidas, shoppings, la Ciudad de las Artes y, más lejos, las playas salvajes de Prainha y Grumari.", stay: "Moderna y lejos de todo lo histórico; práctica con auto." }
  ],

  /* Planes armados. Cada paso nombra un lugar de data/rio-lugares.js ("ref" = nombre exacto). */
  itineraries: [
    { id: "1-dia", name: "Río en 1 día", icon: "⚡", desc: "Lo esencial si tenés solo una jornada.", steps: [
      { when: "Mañana", ref: "Cristo Redentor", note: "Lo más temprano posible, antes de que se nuble." },
      { when: "Mediodía", ref: "Escadaria Selarón" },
      { when: "Mediodía", ref: "Confeitaria Colombo", note: "Un café en la confitería de 1894." },
      { when: "Tarde", ref: "Pan de Azúcar", note: "Subí para el atardecer." },
      { when: "Noche", ref: "Praia de Copacabana", note: "Una caipirinha en un quiosco de la playa." }
    ] },
    { id: "3-dias", name: "3 días clásicos", icon: "🗓️", desc: "El recorrido completo para una primera visita.", steps: [
      { when: "Día 1 · mañana", ref: "Cristo Redentor" },
      { when: "Día 1 · mediodía", ref: "Jardim Botânico" },
      { when: "Día 1 · tarde", ref: "Parque Lage" },
      { when: "Día 1 · atardecer", ref: "Arpoador", note: "El atardecer más aplaudido de Río." },
      { when: "Día 1 · noche", ref: "Bracarense", note: "Chopp y bolinhos en Leblon." },
      { when: "Día 2 · mañana", ref: "Theatro Municipal" },
      { when: "Día 2 · mañana", ref: "Real Gabinete Português de Leitura" },
      { when: "Día 2 · mediodía", ref: "Confeitaria Colombo" },
      { when: "Día 2 · tarde", ref: "Museu do Amanhã" },
      { when: "Día 2 · tarde", ref: "Santa Teresa" },
      { when: "Día 2 · noche", ref: "Pedra do Sal", note: "Samba en la calle; mirá qué días hay rueda." },
      { when: "Día 3 · mañana", ref: "Praia de Ipanema" },
      { when: "Día 3 · mediodía", ref: "Casa da Feijoada" },
      { when: "Día 3 · tarde", ref: "Pan de Azúcar" },
      { when: "Día 3 · noche", ref: "Bar Urca", note: "En la mureta, frente a la bahía." }
    ] },
    { id: "lluvia", name: "Día de lluvia", icon: "🌧️", desc: "Todo bajo techo.", steps: [
      { when: "Mañana", ref: "Museu do Amanhã" },
      { when: "Mediodía", ref: "AquaRio" },
      { when: "Tarde", ref: "Real Gabinete Português de Leitura" },
      { when: "Tarde", ref: "Confeitaria Colombo" },
      { when: "Noche", ref: "Rio Scenarium", note: "Samba y choro bajo techo." }
    ] },
    { id: "gratis", name: "Río gratis", icon: "💸", desc: "Lo mejor sin gastar en entradas.", steps: [
      { when: "Mañana", ref: "Praia de Ipanema" },
      { when: "Mediodía", ref: "Arpoador" },
      { when: "Tarde", ref: "Escadaria Selarón" },
      { when: "Tarde", ref: "Arcos da Lapa" },
      { when: "Atardecer", ref: "Mirante Dona Marta", note: "Mejor con guía o en grupo." },
      { when: "Noche", ref: "Pedra do Sal" }
    ] },
    { id: "chicos", name: "Con chicos", icon: "🧒", desc: "Un día pensado para chicos.", steps: [
      { when: "Mañana", ref: "AquaRio" },
      { when: "Mediodía", ref: "Museu do Amanhã" },
      { when: "Tarde", ref: "Lagoa Rodrigo de Freitas", note: "Bicis y botes a pedal." },
      { when: "Tarde", ref: "Planetário da Gávea" }
    ] }
  ],

  /* ───────────── TRANSPORTE ───────────── */
  subte: [
    { line: "1", color: "#f28a00", route: "Uruguai ↔ General Osório", useful: "Centro (Carioca, Cinelândia), Glória, Catete, Flamengo, Botafogo, Copacabana (Cardeal Arcoverde, Siqueira Campos, Cantagalo) e Ipanema (General Osório)" },
    { line: "2", color: "#00a650", route: "Pavuna ↔ Botafogo", useful: "Maracanã, Estácio y la zona norte; comparte el tramo entre Estácio y Botafogo con la línea 1" },
    { line: "4", color: "#fdc300", route: "General Osório ↔ Jardim Oceânico", useful: "Sigue a la línea 1 hacia Ipanema (Nossa Senhora da Paz), Leblon (Jardim de Alah, Antero de Quental), Gávea y la Barra da Tijuca" }
  ],
  transport: [
    /* Revisado el 18/11/2026 con riotur.rio, metrorio.com.br, mobi-rio.rio.br y la prensa (Diário do Transporte). */
    { icon: "💳", title: "Cómo pagar: lo primero", items: [
      { t: "Metro con la tarjeta del banco", d: "En los molinetes de todas las estaciones del metro se paga apoyando la tarjeta de crédito sin contacto o el celular. No hace falta comprar nada antes." },
      { t: "Colectivos, BRT y VLT: Jaé", d: "En los colectivos municipales, el BRT y el tranvía VLT se usa la tarjeta o la app Jaé, que se carga con plata. En algunas líneas también se acepta la tarjeta del banco: fijate en el lector." },
      { t: "Trenes y barcas", d: "Los trenes de cercanías (SuperVia) y las barcas a Niterói y Paquetá también aceptan la tarjeta sin contacto en muchos accesos." },
      { t: "Lo más cómodo", d: "Para moverse de noche o a zonas sin metro, la mayoría de los visitantes usa apps como Uber o 99: son baratas y más seguras que caminar." },
      { t: "Última revisión", d: "18 de noviembre de 2026, con Riotur, MetrôRio y Mobi-Rio. Si algo no coincide, valen los carteles del transporte." }
    ] },
    { icon: "🚇", title: "Metro", items: [
      { t: "Cómo funciona", d: "Tres líneas: la 1 va del Centro a Ipanema pasando por Flamengo, Botafogo y Copacabana; la 4 sigue hasta Leblon y la Barra; la 2 va a la zona norte y al Maracaná." },
      { t: "Horarios", d: "Funciona desde temprano hasta la medianoche de lunes a sábado; los domingos y feriados abre más tarde y cierra antes." },
      { t: "Seguro y con aire", d: "Es el transporte más seguro y cómodo de la ciudad. En hora pico hay vagones solo para mujeres." }
    ] },
    { icon: "🚌", title: "Colectivos, BRT y VLT", items: [
      { t: "Colectivos", d: "Llegan a todos lados, pero pueden ser confusos y van llenos. Usá Google Maps o Moovit para saber cuál tomar y mostrá el destino al chofer." },
      { t: "BRT", d: "Colectivos articulados con carril propio que unen la Barra, la zona oeste y el aeropuerto del Galeão." },
      { t: "VLT", d: "El tranvía moderno del Centro: une la Rodoviária, la Plaza Mauá y el aeropuerto Santos Dumont." },
      { t: "El bondinho de Santa Teresa", d: "El tranvía amarillo histórico sube de la estación Carioca a Santa Teresa. Es un paseo en sí mismo." }
    ] },
    { icon: "✈️", title: "Aeropuertos", items: [
      { t: "Galeão (GIG)", d: "El aeropuerto internacional, en la Ilha do Governador, a unos 40 minutos de la zona sur sin tránsito." },
      { t: "Santos Dumont (SDU)", d: "El aeropuerto de vuelos nacionales, en el Centro, junto a la bahía. Tiene parada del VLT y del metro cerca." },
      { t: "App o taxi oficial", d: "Desde el Galeão lo más simple es pedir un auto por app (Uber o 99) en el punto de encuentro señalado o tomar un taxi de las cooperativas oficiales, que tienen precio fijo por zona." },
      { t: "BRT y colectivos", d: "El BRT TransCarioca une el Galeão con la Barra y con la línea 2 del metro, y hay colectivos ejecutivos a la zona sur. Son más baratos pero más lentos y con equipaje incómodos." }
    ] },
    { icon: "🚕", title: "Taxis y apps", items: [
      { t: "Apps", d: "Uber y 99 funcionan muy bien y muestran el precio antes de pedir. Fijate que la patente coincida antes de subir." },
      { t: "Taxis", d: "Los taxis comunes son amarillos con franja azul y cobran con taxímetro (tarifa más alta de noche y los domingos). Los taxis especiales tienen precio fijo." },
      { t: "Consejo", d: "No subas a autos que te ofrecen viaje en el aeropuerto o en la calle." }
    ] },
    { icon: "🚲", title: "A pie y en bici", items: [
      { t: "La costanera", d: "Toda la orilla, del Leme al Leblon, tiene bicisenda y vereda para caminar." },
      { t: "Bicis públicas", d: "Hay bicis de alquiler (las naranjas de Bike Itaú) que se desbloquean con la app." },
      { t: "Ojo con las distancias", d: "La ciudad es larga: entre el Centro e Ipanema conviene ir en metro." }
    ] }
  ],

  /* ───────────── SEGURIDAD ───────────── */
  emergencies: [
    { n: "190", t: "Policía Militar (emergencias)" },
    { n: "192", t: "Ambulancia (SAMU)" },
    { n: "193", t: "Bomberos y rescate en el mar" },
    { n: "+55 21 2332-2893", t: "DEAT: comisaría de apoyo al turista, en Leblon" },
    { n: "+55 21 2332-7949", t: "BPTUR: policía de zonas turísticas, en Copacabana" },
    { n: "180", t: "Violencia contra la mujer" },
    { n: "1746", t: "Municipalidad de Río (información de la ciudad)" }
  ],
  safety: [
    { icon: "📱", title: "Lo más común: robo del celular", tone: "warn", items: [
      "El problema más frecuente es el robo del celular en la calle, en la playa y en la vereda: muchas veces desde una bici o con un tirón.",
      "No camines con el celular en la mano ni lo dejes sobre la mesa en las terrazas. Para mirar el mapa, entrá a un negocio.",
      "En la playa llevá solo lo justo: una copia del documento, poca plata y nada de valor sobre la arena.",
      "Usá una sola tarjeta y, si podés, una de débito con poco saldo."
    ] },
    { icon: "🗺️", title: "Zonas para ir con atención", tone: "warn", items: [
      "El Centro y Lapa de noche y los domingos, cuando quedan vacíos.",
      "Santa Teresa de noche: moverse en auto o app.",
      "Las favelas solo con una visita guiada organizada y con guía local.",
      "Los senderos del Corcovado y de los morros: mejor con guía y en grupo.",
      "Las playas a la noche y la vereda del lado del mar después de oscurecer."
    ] },
    { icon: "🎭", title: "Estafas típicas", tone: "warn", items: [
      "Clonación de tarjetas: no pierdas de vista la tarjeta y revisá el monto en la maquinita antes de pagar.",
      "En la playa, alguien te ofrece algo \"de regalo\" y después cobra caro: preguntá siempre el precio antes.",
      "Taxis truchos en el aeropuerto: usá la app o la cooperativa oficial.",
      "En las discotecas, no dejes el vaso sin mirar."
    ] },
    { icon: "🌊", title: "En el mar", tone: "warn", items: [
      "Hay corrientes fuertes: metete donde haya guardavidas y respetá las banderas rojas.",
      "El sol es muy fuerte: protector solar, sombrero y mucha agua."
    ] },
    { icon: "✅", title: "Buenas prácticas", tone: "ok", items: [
      "Con estas precauciones, la gran mayoría de las visitas transcurre sin problemas.",
      "Si te roban, no te resistas. Después hacé la denuncia en la DEAT (comisaría del turista, en Leblon) o en línea en la web de la Policía Civil.",
      "Si te roban el pasaporte, después de la denuncia andá a tu consulado: en Info > Ayuda están en el mapa.",
      "Contratá un seguro de viaje: la atención médica privada es buena pero cara."
    ] }
  ],

  /* ───────────── INFO PRÁCTICA ───────────── */
  practical: [
    { icon: "💵", title: "Dinero y pagos", items: [
      { t: "Moneda", d: "Real (BRL)." },
      { t: "Tarjetas y Pix", d: "Se paga con tarjeta casi en todos lados, también sin contacto. Los brasileños usan mucho Pix (transferencia con el celular); algunos lugares chicos solo aceptan Pix o efectivo." },
      { t: "Cajeros", d: "Usá los cajeros dentro de bancos o shoppings, de día. Si el cajero te ofrece cobrarte en tu moneda, elegí reales." },
      { t: "Propina", d: "En restaurantes y bares se suma un 10 % de servicio a la cuenta: es opcional, pero se paga casi siempre." },
      { t: "En la playa", d: "Los vendedores y las sillas de la playa suelen cobrar en efectivo o Pix." }
    ] },
    { icon: "🕘", title: "Horarios de Río", items: [
      { t: "Comidas", d: "Se almuerza entre las 12 y las 15 y se cena desde las 20. Los botecos funcionan todo el día." },
      { t: "Comercios", d: "Las tiendas de calle abren en horario comercial; los shoppings, todos los días hasta la noche." },
      { t: "Cristo y Pan de Azúcar", d: "Se llenan: sacá la entrada con horario en su web oficial y fijate el pronóstico, porque con nubes no se ve nada." }
    ] },
    { icon: "🌤️", title: "Clima y cuándo venir", items: [
      { t: "Verano (dic–mar)", d: "Calor fuerte y húmedo, lluvias de tarde, playas llenas, fin de año y Carnaval." },
      { t: "Otoño (abr–jun)", d: "La mejor época: menos calor y menos gente." },
      { t: "Invierno (jul–sep)", d: "Templado, entre 18 y 26 °C, días secos y claros: ideal para el Cristo y los senderos." },
      { t: "Primavera (oct–nov)", d: "Calor que sube, algunas lluvias y la ciudad preparándose para el verano." }
    ] },
    { icon: "🔌", title: "Datos útiles", items: [
      { t: "Electricidad", d: "127 V en la mayoría de los lugares (algunos 220 V). Enchufes tipo N de tres patas redondas: llevá adaptador." },
      { t: "Agua", d: "No tomes agua de la canilla: comprá agua mineral." },
      { t: "Internet", d: "Para tener datos, lo más simple es una eSIM o un chip local." },
      { t: "Idioma", d: "Se habla portugués. Con castellano lento te entienden bastante; abajo tenés las palabras más útiles." },
      { t: "Salud", d: "Las farmacias (drogarias) abren hasta tarde. Urgencias: 192." }
    ] },
    { icon: "🥥", title: "Costumbres", items: [
      { t: "Saludo", d: "Entre conocidos, uno o dos besos. Los cariocas son muy cálidos e informales." },
      { t: "En la playa", d: "Se alquilan sillas y sombrillas a las barracas, y los vendedores pasan con de todo: mate helado, galletitas Globo, queso a la parrilla." },
      { t: "Para probar", d: "Feijoada, picanha, pão de queijo, coxinha, acaí, jugos naturales, agua de coco, caipirinha y chopp bien frío." }
    ] }
  ]
};
