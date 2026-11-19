/* Zonas de Lisboa para el mapa (tarjeta #214): puntos de ayuda, canales a distancia y búsquedas "cerca mío".

   INFORMACIÓN TURÍSTICA: los puestos "Ask Me Lisboa" de Visit Lisboa en OpenStreetMap (tourism=information, 19/11/2026).
   POLICÍA: comisarías (esquadras) de la PSP en OpenStreetMap del 19/11/2026 (amenity=police), con el puesto de atención al turista
   de los Restauradores. Para emergencias, siempre el 112.
   HOSPITALES: hospitales con urgencias en OpenStreetMap del 19/11/2026 (amenity=hospital, emergency=yes).
   CONSULADOS: direcciones de la web oficial de cada país (19/11/2026); la ubicación sale de OpenStreetMap (office=diplomatic) o de la
   dirección. Las webs de Colombia, México, Uruguay y Estados Unidos no se pudieron leer: esos países no se cargaron y se buscan con
   "Encontrar mi consulado".

   LÍMITES DE BARRIOS Y CAPAS: todavía no están (son opcionales). */
window.CITY_ZONES = window.CITY_ZONES || {};
window.CITY_ZONES.lisboa = {
  guide: {},
  layers: [],

  helpTypes: {
    info: { name: "Información turística", icon: "ℹ️", color: "#1a73c8" },
    policia: { name: "Policía y denuncias", icon: "👮", color: "#364fc7" },
    salud: { name: "Hospitales con urgencias 24 h", icon: "🏥", color: "#e03131" },
    consul: { name: "Embajadas y consulados", icon: "🛂", color: "#0b7285" },
    transporte: { name: "Aeropuerto y estaciones", icon: "🚉", color: "#5f3dc4" }
  },
  help: [
    { id: "ask-comercio", type: "info", name: "Ask Me Lisboa · Praça do Comércio", address: "Praça do Comércio", ll: [38.70773, -9.13778],
      note: "Información, mapas, la Lisboa Card y entradas, junto a la plaza." },
    { id: "ask-restauradores", type: "info", name: "Ask Me Lisboa · Restauradores", address: "Praça dos Restauradores", ll: [38.71562, -9.14226], aprox: true,
      note: "En el Palácio Foz, al lado del Elevador da Glória." },
    { id: "ask-belem", type: "info", name: "Ask Me Lisboa · Belém", address: "Belém", ll: [38.69699, -9.20546],
      note: "Frente al Monasterio de los Jerónimos." },
    { id: "ask-aeropuerto", type: "info", name: "Ask Me Lisboa · Aeropuerto", address: "Aeroporto Humberto Delgado", ll: [38.77000, -9.12857], far: true,
      note: "En el hall de llegadas de la terminal 1." },
    { id: "p-turismo", type: "policia", name: "PSP · Atención al turista", address: "Praça dos Restauradores", ll: [38.71584, -9.14241],
      note: "Puesto de la policía para turistas. Para emergencias, llamá al 112." },
    { id: "p-baixa", type: "policia", name: "PSP · Esquadra de la Baixa", address: "Rua da Prata 38", ll: [38.70938, -9.13618],
      note: "Para la Baixa y el Chiado. Ahí se hace la denuncia si te roban." },
    { id: "p-bairro-alto", type: "policia", name: "PSP · Esquadra del Bairro Alto", address: "Travessa da Água-da-Flor 33", ll: [38.71341, -9.14497],
      note: "Para el Bairro Alto y el Príncipe Real." },
    { id: "p-martim-moniz", type: "policia", name: "PSP · Esquadra de Martim Moniz", address: "Rua da Palma 169", ll: [38.71785, -9.13600],
      note: "Para la Mouraria y Martim Moniz." },
    { id: "p-belem", type: "policia", name: "PSP · Esquadra de Belém", address: "Praça Afonso de Albuquerque 1", ll: [38.69738, -9.20174],
      note: "Para Belém." },
    { id: "p-nacoes", type: "policia", name: "PSP · Esquadra del Parque das Nações", address: "Rua Ilha dos Amores", ll: [38.78217, -9.09509],
      note: "Para el Parque das Nações." },
    { id: "h-sao-jose", type: "salud", name: "Hospital de São José", address: "Rua José António Serrano", ll: [38.71818, -9.13800],
      note: "Hospital público con urgencias las 24 horas, en el centro." },
    { id: "h-santa-maria", type: "salud", name: "Hospital de Santa Maria", address: "Avenida Professor Egas Moniz", ll: [38.74787, -9.16096],
      note: "El gran hospital universitario, con urgencias las 24 horas." },
    { id: "h-sao-francisco", type: "salud", name: "Hospital São Francisco Xavier", address: "Estrada Forte do Alto Duque", ll: [38.70740, -9.21770],
      note: "Hospital público con urgencias, cerca de Belém." },
    { id: "h-cuf", type: "salud", name: "Hospital CUF Descobertas", address: "Rua Mário Botas", ll: [38.75805, -9.09900],
      note: "Hospital privado con urgencias, en el Parque das Nações. Pedí el seguro de viaje antes de que te atiendan." },
    { id: "h-cruz-vermelha", type: "salud", name: "Hospital Cruz Vermelha", address: "Rua Duarte Galvão 54", ll: [38.74621, -9.17510],
      note: "Hospital privado con urgencias." },
    /* Consulados: web oficial de cada país (19/11/2026). */
    { id: "cons-ar", type: "consul", name: "Argentina · Embajada (sección consular)", address: "Avenida João Crisóstomo 8", ll: [38.73672, -9.14172],
      note: "Pasaportes, trámites y ayuda si te roban los documentos." },
    { id: "cons-br", type: "consul", name: "Brasil · Consulado General", address: "Rua António Maria Cardoso 39, Chiado", ll: [38.71002, -9.14254],
      note: "Trámites y ayuda consular." },
    { id: "cons-cl", type: "consul", name: "Chile · Embajada (sección consular)", address: "Avenida da República 32, 2.º", ll: [38.73777, -9.14535], aprox: true,
      note: "Dirección de la web oficial de la embajada." },
    { id: "cons-es", type: "consul", name: "España · Consulado General", address: "Rua do Salitre 3", ll: [38.71936, -9.14554],
      note: "Trámites y ayuda consular." },
    { id: "cons-it", type: "consul", name: "Italia · Sección consular", address: "Calçada do Conde de Pombeiro 24", ll: [38.72333, -9.13626], aprox: true,
      note: "Al lado de la embajada (Largo do Conde de Pombeiro 6)." },
    { id: "t-lis", type: "transporte", name: "Aeropuerto Humberto Delgado (LIS)", address: "Alameda das Comunidades Portuguesas", ll: [38.77420, -9.13410], far: true,
      note: "El aeropuerto de la ciudad; la terminal 1 tiene metro." },
    { id: "t-oriente", type: "transporte", name: "Estación de Oriente", address: "Avenida Dom João II", ll: [38.76790, -9.09880],
      note: "Trenes de larga distancia, metro y la terminal de micros." },
    { id: "t-santa-apolonia", type: "transporte", name: "Estación de Santa Apolónia", address: "Avenida Infante Dom Henrique", ll: [38.71360, -9.12260],
      note: "Trenes de larga distancia y metro, junto a Alfama." }
  ],
  /* Canales a distancia y búsquedas rápidas "cerca mío" (abren Google Maps). */
  channels: [
    { icon: "💊", name: "Farmacias", desc: "Las farmacias abiertas, en el mapa. Siempre hay alguna de turno.", href: "https://www.google.com/maps/search/?api=1&query=farm%C3%A1cia+Lisboa" },
    { icon: "🩺", name: "SNS 24", desc: "Línea de salud: 808 24 24 24. Te dicen a dónde ir.", href: "https://www.sns24.gov.pt/" },
    { icon: "📞", name: "Visit Lisboa", desc: "Información turística oficial de la ciudad.", href: "https://www.visitlisboa.com/" },
    { icon: "🛂", name: "Encontrar mi consulado", desc: "Busca embajadas y consulados en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=embaixada+Lisboa" }
  ],
  nearby: [["💊", "Farmacia", "Farmácia"], ["🏧", "Cajero", "Multibanco"], ["🛒", "Supermercado", "Supermercado"], ["🧺", "Lavandería", "Lavandaria"], ["🧳", "Guardaequipaje", "Guarda bagagem"], ["☕", "Café", "Café"], ["🚻", "Baño público", "Casa de banho pública"]],

  barrios: {}
};
