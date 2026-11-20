/* Zonas de Bogotá para el mapa (tarjeta #204): puntos de ayuda, canales a distancia y búsquedas "cerca mío".

   INFORMACIÓN TURÍSTICA: los Puntos de Información Turística (PIT) del Instituto Distrital de Turismo, con las direcciones de
   visitbogota.co (18/11/2026). Ubicación: OpenStreetMap; los que no están en el mapa, aproximada.
   POLICÍA: estaciones de la Policía Nacional en OpenStreetMap del 18/11/2026 (amenity=police). Para emergencias, siempre el 123.
   HOSPITALES: hospitales y clínicas con urgencias en OpenStreetMap del 18/11/2026 (amenity=hospital, emergency=yes).
   EMBAJADAS: casi todos los países tienen la sección consular dentro de su embajada. Direcciones de la web oficial de cada embajada o
   de su cancillería (18/11/2026); la ubicación sale de la oficina diplomática en OpenStreetMap (office=diplomatic). Uruguay: dirección
   del mapa consular oficial de su cancillería (ubicación aproximada: OpenStreetMap todavía tiene la dirección vieja). España: el
   consulado está en otra dirección que la embajada (ubicación aproximada). Los demás países no se cargaron: se buscan con
   "Encontrar mi consulado".

   LÍMITES DE BARRIOS Y CAPAS: todavía no están (son opcionales). */
window.CITY_ZONES = window.CITY_ZONES || {};
window.CITY_ZONES.bogota = {
  guide: {},
  layers: [],

  helpTypes: {
    info: { name: "Información turística", icon: "ℹ️", color: "#1a73c8" },
    policia: { name: "Policía y denuncias", icon: "👮", color: "#364fc7" },
    salud: { name: "Hospitales con urgencias 24 h", icon: "🏥", color: "#e03131" },
    consul: { name: "Embajadas y consulados", icon: "🛂", color: "#0b7285" },
    transporte: { name: "Aeropuerto y terminal", icon: "🚉", color: "#5f3dc4" }
  },
  help: [
    { id: "pit-centro", type: "info", name: "Punto de Información Turística · Centro Histórico", address: "La Candelaria", ll: [4.59786, -74.07699],
      note: "Información, mapas y recorridos por el centro, junto a la Plaza de Bolívar." },
    { id: "pit-monserrate", type: "info", name: "Punto de Información Turística · Monserrate", address: "Carrera 2 Este # 21-48", ll: [4.60534, -74.05530],
      note: "En la estación de subida a Monserrate." },
    { id: "pit-centro-int", type: "info", name: "Punto de Información Turística · Centro Internacional", address: "Carrera 10 # 26-21", ll: [4.61300, -74.07030], aprox: true,
      note: "Cerca del Museo Nacional y el Planetario." },
    { id: "pit-jardin", type: "info", name: "Punto de Información Turística · Jardín Botánico", address: "Calle 63 # 68-95", ll: [4.66790, -74.10009], aprox: true,
      note: "En la entrada del Jardín Botánico, junto al Parque Simón Bolívar." },
    { id: "pit-aeropuerto", type: "info", name: "Punto de Información Turística · Aeropuerto El Dorado", address: "Calle 26 # 103-09", ll: [4.70209, -74.14771], far: true, aprox: true,
      note: "En el hall de llegadas internacionales." },
    { id: "pit-salitre", type: "info", name: "Punto de Información Turística · Terminal Salitre", address: "Calle 22C # 68F-37", ll: [4.65756, -74.11367], aprox: true,
      note: "En la terminal de micros de larga distancia." },
    { id: "p-turismo", type: "policia", name: "Policía de Turismo · Monserrate", address: "Cerro de Monserrate", ll: [4.60584, -74.05496],
      note: "Policías que atienden a turistas. Para emergencias, llamá al 123." },
    { id: "p-candelaria", type: "policia", name: "Estación de Policía La Candelaria", address: "La Candelaria", ll: [4.59141, -74.07887],
      note: "Para el centro histórico. Ahí se hace la denuncia si te roban." },
    { id: "p-santafe", type: "policia", name: "Estación de Policía Santa Fe", address: "Carrera 5", ll: [4.61538, -74.06631],
      note: "Para la Macarena y el Centro Internacional." },
    { id: "p-chapinero", type: "policia", name: "Estación de Policía Chapinero", address: "Chapinero", ll: [4.64157, -74.05850],
      note: "Para Chapinero, la Zona G y la Zona Rosa." },
    { id: "p-teusaquillo", type: "policia", name: "Estación de Policía Teusaquillo", address: "Teusaquillo", ll: [4.62745, -74.06671],
      note: "Para Teusaquillo." },
    { id: "h-fsfb", type: "salud", name: "Fundación Santa Fe de Bogotá", address: "Calle 119 # 7-75", ll: [4.69521, -74.03322],
      note: "Hospital privado de referencia con urgencias las 24 horas, cerca de Usaquén. Pedí el seguro de viaje antes de que te atiendan." },
    { id: "h-country", type: "salud", name: "Clínica del Country", address: "Carrera 16 # 82-57", ll: [4.66909, -74.05669],
      note: "Clínica privada con urgencias, cerca de la Zona Rosa." },
    { id: "h-mederi", type: "salud", name: "Méderi · Hospital Universitario Mayor", address: "Calle 24 # 29-45", ll: [4.62332, -74.08265],
      note: "Hospital con urgencias las 24 horas, cerca del centro." },
    { id: "h-chapinero", type: "salud", name: "Hospital de Chapinero", address: "Calle 66", ll: [4.65369, -74.06565],
      note: "Hospital público con urgencias en Chapinero." },
    /* Embajadas con sección consular: web oficial de cada una (18/11/2026). */
    { id: "cons-ar", type: "consul", name: "Argentina · Embajada (sección consular)", address: "Carrera 11B # 97-56, piso 4", ll: [4.68150, -74.04621],
      note: "Pasaportes, trámites y ayuda si te roban los documentos." },
    { id: "cons-br", type: "consul", name: "Brasil · Embajada (sección consular)", address: "Calle 93 # 14-20, piso 8", ll: [4.67691, -74.05168],
      note: "Trámites y ayuda consular." },
    { id: "cons-cl", type: "consul", name: "Chile · Embajada (sección consular)", address: "Calle 100 # 11B-46", ll: [4.68390, -74.04496],
      note: "Trámites y ayuda consular." },
    { id: "cons-es", type: "consul", name: "España · Consulado General", address: "Calle 94A # 11A-70", ll: [4.67720, -74.04780], aprox: true,
      note: "El consulado está a pocas cuadras de la embajada (Calle 92 # 12-68)." },
    { id: "cons-it", type: "consul", name: "Italia · Embajada (sección consular)", address: "Calle 93B # 9-92", ll: [4.67587, -74.04537],
      note: "Trámites y ayuda consular." },
    { id: "cons-mx", type: "consul", name: "México · Embajada (sección consular)", address: "Calle 113 # 7-21, Torre A, Teleport", ll: [4.69141, -74.03463],
      note: "Trámites y ayuda consular." },
    { id: "cons-uy", type: "consul", name: "Uruguay · Embajada (sección consular)", address: "Carrera 11A # 93-67, oficina 502", ll: [4.67650, -74.04790], aprox: true,
      note: "Dirección del mapa consular oficial de Uruguay." },
    { id: "cons-us", type: "consul", name: "Estados Unidos · Embajada", address: "Carrera 45 # 24B-27", ll: [4.63644, -74.09454],
      note: "Atención a ciudadanos con turno." },
    { id: "cons-pe", type: "consul", name: "Perú · Consulado General", address: "Calle 90 # 14-26, oficina 417", ll: [4.67464, -74.05280],
      note: "Trámites y ayuda consular." },
    { id: "t-bog", type: "transporte", name: "Aeropuerto Internacional El Dorado (BOG)", address: "Calle 26 # 103-09", ll: [4.70209, -74.14771], far: true,
      note: "El aeropuerto de la ciudad, para vuelos nacionales e internacionales." },
    { id: "t-salitre", type: "transporte", name: "Terminal de Transporte Salitre", address: "Calle 22C # 68F-37", ll: [4.65756, -74.11367],
      note: "La terminal principal de micros de larga distancia." }
  ],
  /* Canales a distancia y búsquedas rápidas "cerca mío" (abren Google Maps). */
  channels: [
    { icon: "💊", name: "Farmacias (droguerías)", desc: "Las droguerías abiertas, en el mapa. Muchas hacen envíos a domicilio.", href: "https://www.google.com/maps/search/?api=1&query=droguer%C3%ADa+Bogot%C3%A1" },
    { icon: "👮", name: "Policía Nacional", desc: "Emergencias: 123. En la web, cómo hacer una denuncia.", href: "https://www.policia.gov.co/" },
    { icon: "📞", name: "Visit Bogotá", desc: "Información turística oficial de la ciudad.", href: "https://visitbogota.co/" },
    { icon: "🛂", name: "Encontrar mi consulado", desc: "Busca embajadas y consulados en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=embajada+Bogot%C3%A1" }
  ],
  nearby: [["💊", "Farmacia", "Droguería"], ["🏧", "Cajero", "Cajero automático"], ["🛒", "Supermercado", "Supermercado"], ["🧺", "Lavandería", "Lavandería"], ["🧳", "Guardaequipaje", "Guarda equipaje"], ["☕", "Café", "Café"], ["🍲", "Ajiaco", "Ajiaco"], ["👮", "Estación de policía", "Estación de policía"]],

  barrios: {}
};
