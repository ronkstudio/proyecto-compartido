/* Datos de la ciudad: Roma (tarjeta #101, etapa 1 de la expansión).
   Tiene la estructura y toda la información de "Info". Los lugares están en data/roma-lugares.js (tarjeta #177).
   price: 0 = gratis, 1 = $, 2 = $$, 3 = $$$, 4 = $$$$, null = no aplica.

   De dónde salen los datos (revisados el 14/11/2026):
   atac.roma.it (boletos BIT, pases Roma 24H, 48H, 72H y CIS, pago sin contacto Tap & Go), trenitalia.com (Leonardo Express),
   adr.it (aeropuertos de Fiumicino y Ciampino), tarifa fija de taxi de Roma Capitale (dentro de las Murallas Aurelianas),
   112.gov.it y poliziadistato.it (números de emergencia).
   Sin precios ni horarios exactos: cambian seguido. */
window.CITY_DATA = window.CITY_DATA || {};
window.CITY_DATA.roma = {
  id: "roma",
  name: "Roma",
  fullName: "Roma",
  country: "Italia",
  tz: "Europe/Rome",
  currency: "EUR",
  tagline: "Todo lo que necesitás para recorrer la ciudad",
  updated: "Noviembre 2026",

  categories: [
    { id: "ver", name: "Imperdibles", icon: "🏛️", color: "#2f7fd1", desc: "Ruinas antiguas, iglesias, museos y plazas" },
    { id: "comer", name: "Dónde comer", icon: "🍽️", color: "#d1552f", desc: "Trattorias, pizza, helado, cafés y cocina romana" },
    { id: "noche", name: "Noche", icon: "🍸", color: "#8a4fd1", desc: "Bares, vinotecas, cócteles y música en vivo" },
    { id: "tours", name: "Tours y guías", icon: "🧭", color: "#1f9d8a", desc: "Visitas guiadas y experiencias" },
    { id: "escapadas", name: "Excursiones", icon: "🚆", color: "#3a9a3f", desc: "Escapadas de un día" },
    { id: "dormir", name: "Hospedaje", icon: "🛏️", color: "#c58a12", desc: "Hostels, hoteles y dónde alojarse" },
    { id: "compras", name: "Compras y mercados", icon: "🛍️", color: "#d13f7a", desc: "Mercados, calles comerciales y pulgas" },
    { id: "deporte", name: "Deportes", icon: "⚽", color: "#0b7285", desc: "Estadios, parques y aire libre" },
    { id: "ocio", name: "Entretenimiento", icon: "🎡", color: "#e8590c", desc: "Ópera, conciertos, cine y planes con chicos" }
  ],

  /* Los lugares están en data/roma-lugares.js. */
  places: [],

  barrios: [
    { name: "Centro Histórico", vibe: "El corazón de Roma", desc: "El Panteón, la Piazza Navona, Campo de' Fiori, la Fontana di Trevi y el antiguo Gueto judío, con callecitas para perderse.", stay: "La mejor base para una primera visita: casi todo se hace a pie." },
    { name: "Coliseo y Foros", vibe: "La Roma antigua", desc: "El Coliseo, el Foro Romano, el Palatino y la colina del Capitolio con sus museos.", stay: "Muy céntrico, pero de noche hay poco movimiento fuera de Monti." },
    { name: "Monti", vibe: "Bohemio y de barrio", desc: "El barrio más antiguo de Roma, pegado al Coliseo, con tiendas de diseño, bares de vino y la plaza de la Madonna dei Monti.", stay: "Encantador y central, con buena vida de noche." },
    { name: "Trastevere", vibe: "Pintoresco y nocturno", desc: "Calles empedradas con hiedra, la basílica de Santa María in Trastevere y muchas trattorias y bares del otro lado del Tíber.", stay: "Con mucho encanto, ideal para salir a comer; puede ser ruidoso de noche." },
    { name: "Vaticano y Prati", vibe: "Monumental y ordenado", desc: "La basílica y la plaza de San Pedro, los Museos Vaticanos y el Castillo Sant'Angelo; al lado, Prati, con calles anchas y comercios.", stay: "Tranquilo y seguro, bien conectado con la línea A del metro." },
    { name: "Plaza de España y Tridente", vibe: "Elegante y comercial", desc: "La escalinata de Plaza de España, la Via del Corso, la Via Condotti con las marcas de lujo y la Piazza del Popolo.", stay: "Céntrico y con hoteles de categoría; suele ser caro." },
    { name: "Villa Borghese", vibe: "Verde y de museos", desc: "El gran parque de la ciudad, con la Galería Borghese, el zoológico y la terraza del Pincio sobre la Piazza del Popolo.", stay: "No es zona para alojarse: es para pasar el día." },
    { name: "Esquilino y Termini", vibe: "Práctico y multicultural", desc: "La estación Termini, la basílica de Santa María la Mayor, el mercado Esquilino y mucha comida del mundo.", stay: "Muchos hoteles y hostels baratos y todo conectado; de noche, alrededor de la estación, hay que estar atento." },
    { name: "Testaccio", vibe: "Popular y gastronómico", desc: "El barrio de la cocina romana de siempre, con su mercado, el Cementerio Protestante y la Pirámide Cestia.", stay: "Auténtico y tranquilo, con muy buena comida." },
    { name: "Aventino", vibe: "Tranquilo y con vistas", desc: "Una colina residencial con el Jardín de los Naranjos y la famosa cerradura de los Caballeros de Malta, frente al Circo Máximo.", stay: "Muy silencioso; mejor para pasear que para alojarse." },
    { name: "San Lorenzo", vibe: "Universitario y nocturno", desc: "El barrio de los estudiantes, junto a la universidad La Sapienza, con arte urbano, bares baratos y trattorias.", stay: "Económico y con mucha noche; no es la zona más linda." },
    { name: "Pigneto", vibe: "Alternativo y de moda", desc: "Una calle peatonal con bares, arte urbano y la Roma de las películas de Pasolini.", stay: "Para quienes ya conocen el centro y buscan algo distinto." },
    { name: "Ostiense", vibe: "Industrial y moderno", desc: "Viejas fábricas convertidas en espacios de arte, la Basílica de San Pablo Extramuros y vida nocturna.", stay: "Mejor para salir de noche que para alojarse." },
    { name: "Vía Apia", vibe: "Campo romano y catacumbas", desc: "La antigua Vía Apia, con sus catacumbas, tumbas y pinos, ideal para recorrer en bicicleta.", stay: "No es zona para alojarse: es para pasar el día." }
  ],

  /* Planes armados (tarjeta #178). Cada paso nombra un lugar de data/roma-lugares.js ("ref" = nombre exacto). */
  itineraries: [
    { id: "1-dia", name: "Roma en 1 día", icon: "⚡", desc: "Lo esencial si tenés solo una jornada.", steps: [
      { when: "Mañana", ref: "Coliseo", note: "Reservá horario en el sitio oficial y andá a primera hora." },
      { when: "Mañana", ref: "Foro Romano", note: "Va con la misma entrada." },
      { when: "Mediodía", ref: "Plaza del Campidoglio", note: "Mirá el Foro desde el balcón de atrás." },
      { when: "Mediodía", ref: "Pizza Florida", note: "Pizza al corte rápida." },
      { when: "Tarde", ref: "Panteón" },
      { when: "Tarde", ref: "Piazza Navona" },
      { when: "Tarde", ref: "Giolitti", note: "Un helado en el camino." },
      { when: "Atardecer", ref: "Fontana di Trevi", note: "Tirá la moneda de espaldas." },
      { when: "Noche", ref: "Plaza de España" },
      { when: "Noche", ref: "Armando al Pantheon", note: "Cena romana; reservá con tiempo." }
    ] },
    { id: "3-dias", name: "3 días clásicos", icon: "🗓️", desc: "El recorrido completo para una primera visita.", steps: [
      { when: "Día 1 · mañana", ref: "Coliseo" },
      { when: "Día 1 · mañana", ref: "Foro Romano" },
      { when: "Día 1 · tarde", ref: "Palatino" },
      { when: "Día 1 · tarde", ref: "Museos Capitolinos" },
      { when: "Día 1 · noche", ref: "Ai Tre Scalini", note: "Vinos en Monti." },
      { when: "Día 2 · mañana", ref: "Museos Vaticanos y Capilla Sixtina", note: "Reservá en museivaticani.va." },
      { when: "Día 2 · mediodía", ref: "Bonci Pizzarium" },
      { when: "Día 2 · tarde", ref: "Basílica de San Pedro" },
      { when: "Día 2 · tarde", ref: "Castillo Sant'Angelo" },
      { when: "Día 2 · noche", ref: "Da Enzo al 29", note: "Cruzá a Trastevere a cenar." },
      { when: "Día 3 · mañana", ref: "Galería Borghese", note: "Solo con reserva." },
      { when: "Día 3 · mañana", ref: "Terraza del Pincio" },
      { when: "Día 3 · tarde", ref: "Piazza del Popolo" },
      { when: "Día 3 · tarde", ref: "Panteón" },
      { when: "Día 3 · tarde", ref: "Fontana di Trevi" },
      { when: "Día 3 · noche", ref: "Roscioli Salumeria con Cucina", note: "Reservá." }
    ] },
    { id: "lluvia", name: "Día de lluvia", icon: "🌧️", desc: "Todo bajo techo.", steps: [
      { when: "Mañana", ref: "Museos Vaticanos y Capilla Sixtina" },
      { when: "Mediodía", ref: "Mercato Centrale Roma", note: "Almuerzo bajo techo en Termini." },
      { when: "Tarde", ref: "Palazzo Massimo alle Terme" },
      { when: "Tarde", ref: "Panteón", note: "Mirá cómo cae la lluvia por el óculo." },
      { when: "Tarde", ref: "Sant'Eustachio Il Caffè" },
      { when: "Noche", ref: "Alexanderplatz Jazz Club" }
    ] },
    { id: "gratis", name: "Roma gratis", icon: "💸", desc: "Lo mejor sin gastar en entradas.", steps: [
      { when: "Mañana", ref: "Plaza de San Pedro" },
      { when: "Mañana", ref: "Basílica de San Pedro", note: "Entrar es gratis; la cúpula se paga." },
      { when: "Mediodía", ref: "Piazza Navona" },
      { when: "Tarde", ref: "San Luis de los Franceses", note: "Tres Caravaggio gratis." },
      { when: "Tarde", ref: "Circo Máximo" },
      { when: "Atardecer", ref: "Jardín de los Naranjos" },
      { when: "Atardecer", ref: "Cerradura de los Caballeros de Malta" },
      { when: "Noche", ref: "Trastevere" }
    ] },
    { id: "chicos", name: "Con chicos", icon: "🧒", desc: "Un día pensado para chicos.", steps: [
      { when: "Mañana", ref: "Coliseo" },
      { when: "Mediodía", ref: "Bioparco" },
      { when: "Mediodía", ref: "Villa Borghese", note: "Bicis, botes y carritos a pedal." },
      { when: "Tarde", ref: "Explora", note: "Reservá el turno." },
      { when: "Tarde", ref: "Boca de la Verdad" },
      { when: "Tarde", ref: "Giolitti" }
    ] }
  ],

  /* ───────────── TRANSPORTE ───────────── */
  subte: [
    { line: "A", color: "#f28c28", route: "Battistini ↔ Anagnina", useful: "Vaticano (Ottaviano), Plaza de España, Piazza del Popolo (Flaminio), Termini y San Juan de Letrán" },
    { line: "B", color: "#2a5caa", route: "Laurentina ↔ Rebibbia / Jonio", useful: "Termini, Coliseo, Circo Máximo, Pirámide (Testaccio y Ostiense) y San Pablo Extramuros" },
    { line: "C", color: "#2a9d4b", route: "Monte Compatri / Pantano ↔ Colosseo-Fori Imperiali", useful: "Pigneto y San Giovanni hasta el Coliseo; se sigue extendiendo hacia el centro" }
  ],
  transport: [
    /* Revisado el 14/11/2026 contra atac.roma.it, trenitalia.com y adr.it. */
    { icon: "💳", title: "Cómo pagar: lo primero", items: [
      { t: "Pagá con la tarjeta", d: "En los molinetes del metro y en los colectivos y tranvías podés pagar apoyando tu tarjeta sin contacto o el celular (Tap & Go). Usá siempre la misma tarjeta para entrar y para cada viaje." },
      { t: "Boleto BIT", d: "Vale 100 minutos desde que lo validás: en ese tiempo podés tomar colectivos y tranvías sin límite, pero el metro una sola vez." },
      { t: "Pases para turistas", d: "Roma 24H, 48H y 72H, y el semanal CIS: viajes ilimitados en metro, colectivos, tranvías y trenes urbanos. Corren desde la primera validación." },
      { t: "Dónde se compra", d: "En las máquinas de las estaciones de metro, en los kioscos de diarios y tabaquerías (cartel con una T) y en la app MyCicero o Tabnet." },
      { t: "Validá siempre", d: "En el colectivo, el boleto de papel se valida en la maquinita amarilla apenas subís. Pasan inspectores y la multa es alta." },
      { t: "Última revisión", d: "14 de noviembre de 2026, con los sitios de ATAC, Trenitalia y Aeropuertos de Roma. Si algo no coincide, valen los carteles del transporte." }
    ] },
    { icon: "🚇", title: "Metro", items: [
      { t: "Cómo funciona", d: "Roma tiene solo tres líneas: A (naranja), B (azul) y C (verde). Se cruzan en Termini (A y B), San Giovanni (A y C) y Colosseo (B y C)." },
      { t: "Lo que no cubre", d: "El metro casi no entra al centro histórico, por las ruinas que hay bajo tierra. Al Panteón, la Piazza Navona o Trastevere se llega a pie, en colectivo o en tranvía." },
      { t: "Horarios", d: "Funciona desde temprano hasta cerca de las 23:30, y más tarde los viernes y sábados. De noche hay colectivos nocturnos." },
      { t: "Cómo orientarte", d: "Cada dirección se llama por la estación final de la línea. Seguí los carteles con la letra y el nombre de esa última estación." }
    ] },
    { icon: "🚌", title: "Colectivos y tranvías", items: [
      { t: "Colectivos", d: "Son la forma de llegar al centro histórico. Hay muchas líneas y a veces van llenos: cuidá tus cosas." },
      { t: "Tranvía 8", d: "Une Piazza Venezia, Largo Argentina y Trastevere: muy útil para cruzar al otro lado del Tíber." },
      { t: "De noche", d: "Cuando cierra el metro funcionan los colectivos nocturnos (con la letra N)." },
      { t: "Cómo saber cuál tomar", d: "Usá Google Maps, Moovit o la app de ATAC: indican línea, parada y cuánto falta." }
    ] },
    { icon: "✈️", title: "Aeropuertos", items: [
      { t: "Fiumicino (FCO)", d: "El aeropuerto principal. El tren Leonardo Express va directo a Termini en poco más de media hora; el tren regional FL1 para en Trastevere, Ostiense y Tiburtina." },
      { t: "Ciampino (CIA)", d: "El de las low cost. No tiene tren directo: hay colectivos a Termini y a estaciones de metro." },
      { t: "Taxi a precio fijo", d: "Desde los dos aeropuertos hasta cualquier punto dentro de las Murallas Aurelianas (el centro), los taxis blancos de Roma cobran una tarifa fija. Preguntala antes de subir." }
    ] },
    { icon: "🚆", title: "Trenes", items: [
      { t: "Estaciones", d: "Roma Termini es la principal; Roma Tiburtina también tiene trenes rápidos. Desde ahí salen a Florencia, Nápoles, Milán y Venecia." },
      { t: "Trenes rápidos", d: "Frecciarossa (Trenitalia) e Italo. Conviene comprar con anticipación: el precio sube cerca de la fecha." },
      { t: "Trenes regionales", d: "Tienen precio fijo y no hace falta reservar. El boleto de papel se valida antes de subir." }
    ] },
    { icon: "🚕", title: "Taxis y apps", items: [
      { t: "Taxis oficiales", d: "Son blancos, con el cartel TAXI en el techo y el escudo de Roma en la puerta. Se toman en las paradas o se piden por teléfono o app." },
      { t: "Apps", d: "FREENOW, itTaxi y Uber (en Roma, Uber trabaja con autos con chofer y taxis). Muestran el precio o una estimación antes de pedir." },
      { t: "Consejos", d: "En el aeropuerto y en Termini usá solo la fila de taxis oficial. No aceptes ofertas de gente que se te acerque." }
    ] },
    { icon: "🛴", title: "A pie y en bicicleta", items: [
      { t: "A pie", d: "El centro se recorre caminando: casi todo está a 20 o 30 minutos. Llevá calzado cómodo: hay adoquines y subidas." },
      { t: "Bicis y monopatines", d: "Hay bicis y monopatines eléctricos de alquiler por app. En el centro el tránsito es caótico: andá con cuidado." },
      { t: "Zona de tránsito limitado", d: "Al centro histórico no pueden entrar autos sin permiso (ZTL). Si alquilás auto, dejalo afuera: las multas llegan solas." }
    ] }
  ],

  /* ───────────── SEGURIDAD ───────────── */
  emergencies: [
    { n: "112", t: "Emergencias (número único europeo)" },
    { n: "113", t: "Policía" },
    { n: "118", t: "Ambulancia" },
    { n: "115", t: "Bomberos" },
    { n: "1522", t: "Violencia contra mujeres" },
    { n: "+39 06 0608", t: "Información turística (Roma Capitale)" }
  ],
  safety: [
    { icon: "🎒", title: "Lo más común: carteristas", tone: "warn", items: [
      "Pasa sobre todo en el metro y en los colectivos llenos (la línea 64 al Vaticano es famosa), en Termini y en los lugares con mucha gente.",
      "Llevá la mochila adelante y los bolsillos cerrados, sobre todo al subir y bajar del metro.",
      "En la Fontana di Trevi, el Coliseo, la Plaza de España y la plaza de San Pedro trabajan grupos organizados: cuidá el celular cuando sacás fotos.",
      "En terrazas y bares, no dejes el celular sobre la mesa ni la mochila colgada de la silla."
    ] },
    { icon: "🗺️", title: "Zonas para ir con atención", tone: "warn", items: [
      "Roma es una ciudad segura para recorrer; estos son lugares donde conviene estar más atento, sobre todo de noche.",
      "Los alrededores de la estación Termini de noche, sobre todo la Piazza dei Cinquecento y las calles del lado de Via Giolitti.",
      "Los andenes y escaleras del metro en Termini y Spagna a la hora pico.",
      "Las zonas de bares de Trastevere, San Lorenzo y Campo de' Fiori de madrugada."
    ] },
    { icon: "🎭", title: "Estafas típicas", tone: "warn", items: [
      "Los falsos centuriones del Coliseo: te ofrecen una foto y después te piden mucha plata. Si querés la foto, acordá el precio antes.",
      "Las pulseritas y las rosas: te atan una pulsera o te ponen una flor en la mano y después exigen plata. No extiendas la mano.",
      "Las firmas: te piden firmar por una causa solidaria y después exigen una donación, o aprovechan para robarte.",
      "Revendedores en la fila de los Museos Vaticanos y el Coliseo: comprá solo en los sitios oficiales.",
      "Taxis truchos en los aeropuertos y en Termini: usá solo la fila oficial o una app."
    ] },
    { icon: "✅", title: "Buenas prácticas", tone: "ok", items: [
      "Con las precauciones de cualquier gran capital, la gran mayoría de las visitas transcurre sin problemas.",
      "Llevá solo lo del día: una tarjeta, algo de efectivo y una copia del documento. El pasaporte, en el alojamiento.",
      "Si te roban, hacé la denuncia en cualquier comisaría de la Policía o de los Carabinieri. La vas a necesitar para el seguro y los documentos.",
      "Si te roban el pasaporte, después de la denuncia andá a tu consulado: en Info > Ayuda están en el mapa.",
      "Contratá un seguro de viaje: la atención médica de urgencia es buena, pero sin cobertura puede salir cara."
    ] }
  ],

  /* ───────────── INFO PRÁCTICA ───────────── */
  practical: [
    { icon: "💵", title: "Dinero y pagos", items: [
      { t: "Moneda", d: "Euro (EUR)." },
      { t: "Tarjetas", d: "Se aceptan casi en todos lados, también sin contacto y con el celular. Conviene tener algo de efectivo para cafés al paso y mercados." },
      { t: "Cajeros", d: "Usá los de bancos (dicen Bancomat). Si te ofrecen cobrarte en tu moneda, elegí siempre pagar en euros: el cambio del cajero es peor." },
      { t: "El cubierto", d: "Muchos restaurantes cobran un \"coperto\" por persona (pan y cubiertos). Es legal si figura en la carta." },
      { t: "Propina", d: "No es obligatoria. Se suele redondear o dejar unos euros si te atendieron bien." },
      { t: "Tasa turística", d: "Los hoteles cobran una tasa de estadía por persona y por noche, aparte de la tarifa. Se paga en el alojamiento." }
    ] },
    { icon: "🕘", title: "Horarios romanos", items: [
      { t: "Comidas", d: "Almuerzo de 13 a 15 y cena de 20 a 23. Fuera de esos horarios muchas cocinas cierran: buscá pizza al corte o un bar." },
      { t: "El café", d: "El café se toma rápido y de pie en la barra, y sale más barato que sentado en la mesa. El cappuccino es de la mañana." },
      { t: "Aperitivo", d: "Entre las 18 y las 20 muchos bares sirven el aperitivo: un trago con algo para picar." },
      { t: "Museos", d: "Muchos museos estatales cierran los lunes. Los Museos Vaticanos cierran los domingos, salvo el último domingo del mes." },
      { t: "Reservas", d: "Para el Coliseo, los Museos Vaticanos y la Galería Borghese hay que reservar horario en su sitio oficial, a veces con semanas de anticipación." }
    ] },
    { icon: "🌤️", title: "Clima y cuándo venir", items: [
      { t: "Primavera (abr–jun)", d: "Templado y soleado: la mejor época, pero también la de más gente." },
      { t: "Verano (jul–ago)", d: "Muy caluroso, con más de 30 °C. Los romanos se van en agosto y algunos comercios cierran." },
      { t: "Otoño (sep–nov)", d: "Agradable hasta octubre; en noviembre llueve bastante." },
      { t: "Invierno (dic–mar)", d: "Fresco, entre 5 y 15 °C, con menos turistas. En Navidad hay pesebres y mercados." }
    ] },
    { icon: "🔌", title: "Datos útiles", items: [
      { t: "Electricidad", d: "230 V. Enchufes tipo F y L (dos o tres patas redondas). Si venís de la Argentina, llevá adaptador." },
      { t: "Agua", d: "El agua de las fuentes de la calle (los \"nasoni\") es potable y fresca: llevá una botella para cargar." },
      { t: "Internet", d: "Para tener datos, lo más simple es una eSIM o un chip local." },
      { t: "Idioma", d: "Italiano. En las zonas turísticas muchos hablan inglés; un \"buongiorno\" al entrar cambia mucho la atención." },
      { t: "Iglesias", d: "Para entrar a iglesias y al Vaticano, hombros y rodillas tienen que estar tapados. Llevá un pañuelo." },
      { t: "Salud", d: "Las farmacias tienen una cruz verde. Urgencias: 112 o 118." }
    ] },
    { icon: "🍝", title: "Costumbres", items: [
      { t: "Saludo", d: "Al entrar a un negocio se dice \"Buongiorno\" (o \"Buonasera\" a la tarde) y \"Grazie, arrivederci\" al irte." },
      { t: "En el restaurante", d: "La cuenta no la traen solos: pedila con \"Il conto, per favore\". Antipasto, primo y secondo son opcionales: nadie pide todo." },
      { t: "Fuentes", d: "En la Fontana di Trevi y otras fuentes está prohibido meterse o sentarse en el borde: hay multas." },
      { t: "Para probar", d: "Las cuatro pastas romanas (carbonara, cacio e pepe, amatriciana y gricia), los supplì, la pizza al corte, la porchetta, los alcauciles a la judía y el helado artesanal." }
    ] }
  ]
};
