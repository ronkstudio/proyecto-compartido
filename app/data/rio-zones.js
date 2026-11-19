/* Zonas de Río de Janeiro para el mapa (tarjeta #203): puntos de ayuda, canales a distancia y búsquedas "cerca mío".

   INFORMACIÓN TURÍSTICA: puntos de información de OpenStreetMap del 18/11/2026 (tourism=information, information=office).
   POLICÍA: la DEAT (comisaría especial de atención al turista) y la BPTUR (batallón de policía de zonas turísticas), con las direcciones
   de rio.js, y comisarías (delegacias) de la Policía Civil de la zona sur en OpenStreetMap del 18/11/2026 (amenity=police).
   HOSPITALES: hospitales con guardia de emergencias en OpenStreetMap del 18/11/2026 (amenity=hospital, emergency=yes).
   CONSULADOS: direcciones de la lista oficial de consulados de Riotur (riotur.rio, 18/11/2026) y la del Consulado General de los
   Estados Unidos (br.usembassy.gov). Ubicación de cada uno: la oficina diplomática en OpenStreetMap (office=diplomatic, 18/11/2026).
   Chile y Perú: OpenStreetMap los pone en otro número de la misma avenida (344 y 314); vale la dirección oficial y la ubicación es aproximada.
   Colombia: está en el mismo edificio que Argentina (ubicación aproximada).

   LÍMITES DE BARRIOS Y CAPAS: todavía no están (son opcionales). */
window.CITY_ZONES = window.CITY_ZONES || {};
window.CITY_ZONES.rio = {
  guide: {},
  layers: [],

  helpTypes: {
    info: { name: "Información turística", icon: "ℹ️", color: "#1a73c8" },
    policia: { name: "Policía y denuncias", icon: "👮", color: "#364fc7" },
    salud: { name: "Hospitales con guardia 24 h", icon: "🏥", color: "#e03131" },
    consul: { name: "Consulados", icon: "🛂", color: "#0b7285" },
    transporte: { name: "Aeropuertos y terminales", icon: "🚉", color: "#5f3dc4" }
  },
  help: [
    { id: "ti-ipanema", type: "info", name: "Información turística · Ipanema", address: "Rua Visconde de Pirajá", ll: [-22.98415, -43.20517], aprox: true,
      note: "Punto de información turística en Ipanema: mapas, consejos y ayuda en varios idiomas." },
    { id: "ti-tijuca", type: "info", name: "Centro de Visitantes del Parque Nacional da Tijuca", address: "Estrada da Cascatinha", ll: [-22.95596, -43.27990],
      note: "Información sobre los senderos, las cascadas y los miradores del bosque de Tijuca." },
    { id: "p-deat", type: "policia", name: "DEAT · Comisaría de Atención al Turista", address: "Avenida Afrânio de Melo Franco 159, Leblon", ll: [-22.98192, -43.21829],
      note: "La comisaría especial para turistas: atienden en varios idiomas y hacen la denuncia si te roban. Teléfono +55 21 2332-2893." },
    { id: "p-bptur", type: "policia", name: "BPTUR · Batallón de Policía en Zonas Turísticas", address: "Rua Figueiredo de Magalhães 550, Copacabana", ll: [-22.96626, -43.18935], aprox: true,
      note: "La policía que patrulla las zonas turísticas. Teléfono +55 21 2332-7949." },
    { id: "p-12dp", type: "policia", name: "12ª Delegacia · Copacabana", address: "Rua Hilário de Gouveia 102", ll: [-22.96737, -43.18434],
      note: "Comisaría de la Policía Civil de Copacabana." },
    { id: "p-13dp", type: "policia", name: "13ª Delegacia · Ipanema", address: "Avenida Nossa Senhora de Copacabana 1260", ll: [-22.98276, -43.19108],
      note: "Comisaría de la Policía Civil para Ipanema y el final de Copacabana." },
    { id: "p-14dp", type: "policia", name: "14ª Delegacia · Leblon", address: "Rua Humberto de Campos 315", ll: [-22.98175, -43.21862],
      note: "Comisaría de la Policía Civil de Leblon, al lado de la DEAT." },
    { id: "p-10dp", type: "policia", name: "10ª Delegacia · Botafogo", address: "Rua Bambina 140", ll: [-22.94784, -43.18651],
      note: "Comisaría de la Policía Civil de Botafogo." },
    { id: "h-souza-aguiar", type: "salud", name: "Hospital Municipal Souza Aguiar", address: "Praça da República 111, Centro", ll: [-22.90876, -43.19042],
      note: "Hospital público con emergencias las 24 horas, el más grande del Centro." },
    { id: "h-miguel-couto", type: "salud", name: "Hospital Municipal Miguel Couto", address: "Rua Mário Ribeiro 117, Gávea", ll: [-22.97743, -43.22370],
      note: "Hospital público con emergencias las 24 horas, cerca de Leblon y la Gávea." },
    { id: "h-copa-dor", type: "salud", name: "Hospital Copa D'Or", address: "Rua Figueiredo de Magalhães 875, Copacabana", ll: [-22.96556, -43.19033],
      note: "Hospital privado con guardia las 24 horas en Copacabana. Pedí el seguro de viaje antes de que te atiendan." },
    { id: "h-sao-lucas", type: "salud", name: "Hospital São Lucas", address: "Travessa Frederico Pamplona 32, Copacabana", ll: [-22.97245, -43.19280],
      note: "Hospital privado con guardia en Copacabana." },
    { id: "h-samaritano", type: "salud", name: "Hospital Samaritano", address: "Rua Bambina 98, Botafogo", ll: [-22.94656, -43.18613],
      note: "Hospital privado con guardia en Botafogo." },
    /* Consulados: lista oficial de Riotur (18/11/2026). */
    { id: "cons-ar", type: "consul", name: "Argentina · Consulado General", address: "Praia de Botafogo 228, Botafogo", ll: [-22.94244, -43.18143],
      note: "Pasaportes, trámites y ayuda si te roban los documentos. Teléfono +55 21 3850-8150. Dirección de la lista oficial de Riotur." },
    { id: "cons-bo", type: "consul", name: "Bolivia · Consulado General", address: "Avenida Rui Barbosa 664, sala 101, Flamengo", ll: [-22.94187, -43.17377],
      note: "Teléfono +55 21 2551-1796. Dirección de la lista oficial de Riotur." },
    { id: "cons-co", type: "consul", name: "Colombia · Consulado General", address: "Praia de Botafogo 228, Botafogo", ll: [-22.94244, -43.18143], aprox: true,
      note: "En el mismo edificio que el consulado argentino. Dirección de la lista oficial de Riotur." },
    { id: "cons-cl", type: "consul", name: "Chile · Consulado General", address: "Praia do Flamengo 244, oficina 701, Flamengo", ll: [-22.93380, -43.17450], aprox: true,
      note: "Dirección de la lista oficial de Riotur." },
    { id: "cons-es", type: "consul", name: "España · Consulado General", address: "Rua Lauro Müller 116, Botafogo", ll: [-22.95725, -43.17625],
      note: "En la Torre del Rio Sul. Dirección de la lista oficial de Riotur." },
    { id: "cons-fr", type: "consul", name: "Francia · Consulado General", address: "Avenida Presidente Antônio Carlos 58, Centro", ll: [-22.91013, -43.17155],
      note: "Dirección de la lista oficial de Riotur." },
    { id: "cons-it", type: "consul", name: "Italia · Consulado General", address: "Avenida Presidente Antônio Carlos 40, Centro", ll: [-22.91049, -43.17147],
      note: "Dirección de la lista oficial de Riotur." },
    { id: "cons-mx", type: "consul", name: "México · Consulado General", address: "Avenida Atlântica 1130, piso 7, Copacabana", ll: [-22.96483, -43.17419],
      note: "Dirección de la lista oficial de Riotur." },
    { id: "cons-py", type: "consul", name: "Paraguay · Consulado General", address: "Rua Barão do Flamengo 22, sala 102, Flamengo", ll: [-22.93298, -43.17543],
      note: "Teléfono +55 21 2553-2294. Dirección de la lista oficial de Riotur." },
    { id: "cons-pe", type: "consul", name: "Perú · Consulado General", address: "Avenida Rui Barbosa 214, piso 2, Flamengo", ll: [-22.93900, -43.17160], aprox: true,
      note: "Teléfono +55 21 2551-4496. Dirección de la lista oficial de Riotur." },
    { id: "cons-uy", type: "consul", name: "Uruguay · Consulado General", address: "Avenida Atlântica 1130, piso 6, Copacabana", ll: [-22.96474, -43.17396],
      note: "En el mismo edificio que el consulado de México. Dirección de la lista oficial de Riotur." },
    { id: "cons-us", type: "consul", name: "Estados Unidos · Consulado General", address: "Avenida Presidente Wilson 147, Centro", ll: [-22.91136, -43.17405],
      note: "Atención a ciudadanos con turno. Dirección de la web oficial de la embajada." },
    { id: "t-gig", type: "transporte", name: "Aeropuerto Internacional del Galeão (GIG)", address: "Avenida Vinte de Janeiro, Ilha do Governador", ll: [-22.81123, -43.25856], far: true,
      note: "El aeropuerto internacional, a unos 40 minutos de la zona sur sin tránsito." },
    { id: "t-sdu", type: "transporte", name: "Aeropuerto Santos Dumont (SDU)", address: "Praça Senador Salgado Filho, Centro", ll: [-22.91045, -43.16419],
      note: "Vuelos nacionales. Tiene parada del VLT en la puerta." },
    { id: "t-rodoviaria", type: "transporte", name: "Rodoviária Novo Rio", address: "Avenida Francisco Bicalho 1, Santo Cristo", ll: [-22.89765, -43.20602],
      note: "La terminal de micros de larga distancia. Llegá y salí en app o en taxi." },
    { id: "t-central", type: "transporte", name: "Central do Brasil", address: "Praça Cristiano Ottoni, Centro", ll: [-22.90355, -43.19142],
      note: "Estación de los trenes de cercanías (SuperVia) y del metro." },
    { id: "t-pracaxv", type: "transporte", name: "Estación de barcas de la Praça XV", address: "Praça Quinze de Novembro, Centro", ll: [-22.90330, -43.17180], aprox: true,
      note: "De acá salen las barcas a Niterói y a la isla de Paquetá." }
  ],
  /* Canales a distancia y búsquedas rápidas "cerca mío" (abren Google Maps). */
  channels: [
    { icon: "💊", name: "Farmacias", desc: "Las farmacias abiertas, en el mapa. Muchas abren las 24 horas.", href: "https://www.google.com/maps/search/?api=1&query=farm%C3%A1cia+Rio+de+Janeiro" },
    { icon: "👮", name: "Denuncia en línea", desc: "Delegacia Online: la Policía Civil permite denunciar por internet algunos robos y pérdidas.", href: "https://delegaciaonline.pcivil.rj.gov.br/" },
    { icon: "📞", name: "Riotur", desc: "Información turística oficial de la ciudad.", href: "https://riotur.rio/" },
    { icon: "🛂", name: "Encontrar mi consulado", desc: "Busca consulados en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=consulado+Rio+de+Janeiro" }
  ],
  nearby: [["💊", "Farmacia", "Farmácia"], ["🏧", "Cajero", "Caixa eletrônico"], ["🛒", "Supermercado", "Supermercado"], ["🧺", "Lavandería", "Lavanderia"], ["🧳", "Guardaequipaje", "Guarda-volumes"], ["🍹", "Kiosco de playa", "Quiosque"], ["☕", "Café", "Café"], ["👮", "Comisaría", "Delegacia"]],

  barrios: {}
};
