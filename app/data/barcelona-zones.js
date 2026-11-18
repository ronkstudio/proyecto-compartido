/* Zonas de Barcelona para el mapa (tarjeta #193): puntos de ayuda, canales a distancia y búsquedas "cerca mío".

   OFICINAS DE TURISMO: barcelonaturisme.com (puntos de información turística), 18/11/2026.
   POLICÍA: en Barcelona las denuncias las toman los Mossos d'Esquadra (la policía de Cataluña). La Guàrdia Urbana tiene un servicio
   de atención al turista con traductores en La Rambla 43 (ajuntament.barcelona.cat/guardiaurbana, 18/11/2026). Comisarías y hospitales:
   OpenStreetMap del 18/11/2026 (amenity=police, amenity=hospital), con la dirección confirmada en el callejero oficial de España
   (CartoCiudad, IGN). Solo hospitales públicos con urgencias las 24 horas.
   CONSULADOS: direcciones de la Lista Consular del Ministerio de Asuntos Exteriores de España (exteriores.gob.es), actualizada al
   30/10/2026. Ubicación: CartoCiudad (número de puerta). Los marcados "aprox" se ubicaron a mano.

   LÍMITES DE BARRIOS Y CAPAS: todavía no están (son opcionales). */
window.CITY_ZONES = window.CITY_ZONES || {};
window.CITY_ZONES.barcelona = {
  guide: {},
  layers: [],

  helpTypes: {
    info: { name: "Información turística", icon: "ℹ️", color: "#1a73c8" },
    policia: { name: "Policía y denuncias", icon: "👮", color: "#364fc7" },
    salud: { name: "Hospitales con guardia 24 h", icon: "🏥", color: "#e03131" },
    consul: { name: "Consulados y embajadas", icon: "🛂", color: "#0b7285" },
    transporte: { name: "Terminales y aeropuertos", icon: "🚉", color: "#5f3dc4" }
  },
  help: [
    { id: "ti-catalunya", type: "info", name: "Oficina de Turismo · Plaça de Catalunya", address: "Plaça de Catalunya 17 (en el subsuelo)", ll: [41.38663, 2.17142],
      note: "La oficina de turismo principal, bajo la plaza, frente a El Corte Inglés. Información, mapas y entradas oficiales." },
    { id: "ti-catedral", type: "info", name: "Oficina de Turismo · Catedral", address: "Pla de la Seu 4", ll: [41.38428, 2.17580], aprox: true,
      note: "Al lado de la catedral, en pleno Barri Gòtic. Cierra los domingos." },
    { id: "ti-colom", type: "info", name: "Oficina de Turismo · Mirador de Colom", address: "Plaça del Portal de la Pau", ll: [41.37598, 2.17606], aprox: true,
      note: "Adentro del monumento a Colón, al final de La Rambla. Abre solo a la mañana." },
    { id: "ti-nord", type: "info", name: "Oficina de Turismo · Estació del Nord", address: "Carrer d'Alí Bei 80", ll: [41.39513, 2.18274],
      note: "En la terminal de micros. Abre solo a la mañana." },
    { id: "ti-t1", type: "info", name: "Oficina de Turismo · Aeropuerto T1", address: "Terminal 1, Llegadas", ll: [41.2889, 2.0729], aprox: true, far: true,
      note: "Información apenas llegás." },
    { id: "ti-t2", type: "info", name: "Oficina de Turismo · Aeropuerto T2", address: "Terminal 2, Llegadas", ll: [41.3036, 2.0790], aprox: true, far: true,
      note: "Información apenas llegás." },
    { id: "p-gu-rambla", type: "policia", name: "Guàrdia Urbana · Atención al turista", address: "La Rambla 43", ll: [41.37957, 2.17438],
      note: "Servicio de atención al turista de la policía de la ciudad, con traductores: te ayudan con la denuncia, a cancelar tarjetas y a contactar a tu consulado. Teléfono +34 93 256 24 31." },
    { id: "p-ciutatvella", type: "policia", name: "Mossos d'Esquadra · Comisaría Ciutat Vella", address: "Carrer Nou de la Rambla 76", ll: [41.37636, 2.17134],
      note: "La comisaría del casco antiguo. Abre las 24 horas para hacer la denuncia." },
    { id: "p-barceloneta", type: "policia", name: "Mossos d'Esquadra y Guàrdia Urbana · Barceloneta", address: "Passeig de Joan de Borbó 32", ll: [41.37878, 2.18811],
      note: "Oficina conjunta de las dos policías, junto a la playa. En verano abre las 24 horas." },
    { id: "p-eixample", type: "policia", name: "Mossos d'Esquadra · Comisaría Eixample", address: "Plaça d'Espanya 1", ll: [41.37541, 2.15036],
      note: "Para el Eixample, Sant Antoni y Montjuïc. Denuncias por robo y pérdida de documentos." },
    { id: "p-lescorts", type: "policia", name: "Mossos d'Esquadra · Comisaría Les Corts", address: "Travessera de les Corts 319", ll: [41.38821, 2.13729],
      note: "La más cercana al estadio del Barça." },
    { id: "h-clinic", type: "salud", name: "Hospital Clínic", address: "Carrer de Villarroel 170", ll: [41.38912, 2.15177],
      note: "Hospital universitario público. Urgencias 24 h; el más cercano al centro y al Eixample." },
    { id: "h-santpau", type: "salud", name: "Hospital de la Santa Creu i Sant Pau", address: "Carrer de Sant Quintí 89", ll: [41.41490, 2.17637],
      note: "Público. Urgencias 24 h; para la Sagrada Família, Gràcia y el Park Güell." },
    { id: "h-mar", type: "salud", name: "Hospital del Mar", address: "Passeig Marítim de la Barceloneta 25", ll: [41.38343, 2.19522],
      note: "Público, frente a la playa. Urgencias 24 h; para la Barceloneta, el Born y el Poblenou." },
    { id: "h-valldhebron", type: "salud", name: "Hospital Universitari Vall d'Hebron", address: "Passeig de la Vall d'Hebron 119", ll: [41.42827, 2.14056],
      note: "El hospital público más grande de Cataluña, con urgencias de adultos e infantiles las 24 h." },
    { id: "h-sjd", type: "salud", name: "Hospital Sant Joan de Déu", address: "Passeig de Sant Joan de Déu 2, Esplugues de Llobregat", ll: [41.38437, 2.10189], far: true,
      note: "Hospital de chicos, con urgencias pediátricas 24 h. Queda justo al salir de la ciudad, por la Diagonal." },
    /* Consulados: Lista Consular de exteriores.gob.es. Todos son consulados generales salvo Costa Rica, que tiene un consulado honorario. */
    { id: "cons-ar", type: "consul", name: "Argentina · Consulado General", address: "Passeig de Gràcia 11, 08007", ll: [41.38879, 2.16854], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España (30/10/2026)." },
    { id: "cons-uy", type: "consul", name: "Uruguay · Consulado General", address: "Avinguda Diagonal 453, 08036", ll: [41.39360, 2.14892], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España (30/10/2026)." },
    { id: "cons-cl", type: "consul", name: "Chile · Consulado General", address: "Carrer del Consell de Cent 357, 08007", ll: [41.39199, 2.16672], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España (30/10/2026)." },
    { id: "cons-br", type: "consul", name: "Brasil · Consulado General", address: "Avinguda Diagonal 468, 08006", ll: [41.39600, 2.15640], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España (30/10/2026)." },
    { id: "cons-mx", type: "consul", name: "México · Consulado", address: "Passeig de la Bonanova 55, 08017", ll: [41.40383, 2.12866], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España (30/10/2026)." },
    { id: "cons-co", type: "consul", name: "Colombia · Consulado General", address: "Carrer de Pau Claris 102, 08009", ll: [41.39111, 2.16943], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España (30/10/2026)." },
    { id: "cons-pe", type: "consul", name: "Perú · Consulado General", address: "Avinguda de Roma 10, 08015", ll: [41.37958, 2.14462], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España (30/10/2026)." },
    { id: "cons-py", type: "consul", name: "Paraguay · Consulado General", address: "Gran Via de les Corts Catalanes 529, 08011", ll: [41.38268, 2.15886], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España (30/10/2026)." },
    { id: "cons-bo", type: "consul", name: "Bolivia · Consulado General", address: "Avinguda de Josep Tarradellas 38, 08029", ll: [41.38337, 2.14279], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España (30/10/2026)." },
    { id: "cons-ec", type: "consul", name: "Ecuador · Consulado General", address: "Carrer de Nàpols 187, 08013", ll: [41.39856, 2.17501], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España (30/10/2026)." },
    { id: "cons-ve", type: "consul", name: "Venezuela · Consulado General", address: "Plaça d'Urquinaona 6, 08010", ll: [41.38957, 2.17307], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España (30/10/2026)." },
    { id: "cons-cr", type: "consul", name: "Costa Rica · Consulado Honorario", address: "Avinguda de Sarrià 2, 08029", ll: [41.39000, 2.14767], note: "Consulado honorario: ayuda básica y orientación. Para pasaportes, el consulado general de Madrid. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España (30/10/2026)." },
    { id: "cons-us", type: "consul", name: "Estados Unidos · Consulado General", address: "Passeig de la Reina Elisenda de Montcada 23, 08034", ll: [41.39769, 2.11714], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España (30/10/2026)." },
    { id: "cons-it", type: "consul", name: "Italia · Consulado General", address: "Carrer d'Aribau 185, 08021", ll: [41.39510, 2.15026], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España (30/10/2026)." },
    { id: "cons-fr", type: "consul", name: "Francia · Consulado General", address: "Ronda de la Universitat 22, 08007", ll: [41.38697, 2.16788], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España (30/10/2026)." },
    { id: "t-sants", type: "transporte", name: "Estación de Sants", address: "Plaça dels Països Catalans", ll: [41.3790, 2.1400], aprox: true,
      note: "La estación principal: trenes rápidos a Madrid y a Francia, Rodalies (también al aeropuerto) y las líneas L3 y L5 del metro." },
    { id: "t-franca", type: "transporte", name: "Estació de França", address: "Avinguda del Marquès de l'Argentera", ll: [41.3843, 2.1835], aprox: true,
      note: "Trenes regionales, junto al Born y la Barceloneta. Metro Barceloneta (L4)." },
    { id: "t-nord", type: "transporte", name: "Estació del Nord (micros)", address: "Carrer d'Alí Bei 80", ll: [41.39513, 2.18274],
      note: "La terminal de micros de larga distancia. Metro Arc de Triomf (L1)." },
    { id: "t-catalunya", type: "transporte", name: "Plaça de Catalunya", address: "Plaça de Catalunya", ll: [41.3870, 2.1700], aprox: true,
      note: "El centro de todo: metro L1 y L3, trenes FGC y Rodalies, el Aerobús y los colectivos nocturnos." },
    { id: "t-puerto", type: "transporte", name: "Terminales de cruceros", address: "Moll Adossat", ll: [41.3570, 2.1730], aprox: true,
      note: "Donde llegan los cruceros. Hay un colectivo lanzadera hasta el monumento a Colón." },
    { id: "t-t1", type: "transporte", name: "Aeropuerto de El Prat · T1", address: "Terminal 1", ll: [41.2889, 2.0729], aprox: true, far: true,
      note: "Aerobús A1, metro L9 Sud y taxis. Para el tren Rodalies, colectivo gratis a la T2." },
    { id: "t-t2", type: "transporte", name: "Aeropuerto de El Prat · T2", address: "Terminal 2", ll: [41.3036, 2.0790], aprox: true, far: true,
      note: "Aerobús A2, metro L9 Sud, tren Rodalies R2 Nord y taxis." }
  ],
  /* Canales a distancia y búsquedas rápidas "cerca mío" (abren Google Maps). */
  channels: [
    { icon: "💊", name: "Farmacias de guardia", desc: "Las farmacias abiertas de noche y los domingos, en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=farmacia+de+guardia+Barcelona" },
    { icon: "👮", name: "Guàrdia Urbana: atención al turista", desc: "Ayuda si te robaron, con traductores: +34 93 256 24 31.", href: "https://ajuntament.barcelona.cat/guardiaurbana/es/contacto" },
    { icon: "📞", name: "Turismo de Barcelona", desc: "Información turística oficial.", href: "https://www.barcelonaturisme.com/wv3/es/" },
    { icon: "🛂", name: "Encontrar mi consulado", desc: "Busca consulados y embajadas en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=consulado+Barcelona" }
  ],
  nearby: [["💊", "Farmacia", "Farmacia"], ["🏧", "Cajero", "Cajero automático"], ["💱", "Casa de cambio", "Casa de cambio"], ["🛒", "Supermercado", "Supermercado"], ["🧺", "Lavandería", "Lavandería autoservicio"], ["🧳", "Guardaequipaje", "Consigna equipaje"], ["🏖️", "Playa", "Playa"], ["👮", "Comisaría", "Comisaría Mossos d'Esquadra"]],

  barrios: {}
};
