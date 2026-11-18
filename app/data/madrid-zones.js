/* Zonas de Madrid para el mapa (tarjeta #100): puntos de ayuda, canales a distancia y búsquedas "cerca mío".

   OFICINAS DE TURISMO Y AYUDA AL TURISTA: Carta de Servicios 2026 de Atención Turística de Emergencia del Ayuntamiento de Madrid
   (la vieja oficina SATE de la comisaría de Leganitos atiende desde 2025 en los puntos de información turística, todos los días de 10 a 20).
   COMISARÍAS Y HOSPITALES: OpenStreetMap del 17/11/2026 (amenity=police, amenity=hospital con emergency=yes), con la dirección
   confirmada en el callejero oficial de España (CartoCiudad, IGN). Solo hospitales públicos con urgencias las 24 horas.
   CONSULADOS Y EMBAJADAS: direcciones de las listas oficiales del Ministerio de Asuntos Exteriores de España (exteriores.gob.es):
   Lista Consular y Lista del Cuerpo Diplomático, las dos actualizadas al 30/10/2026. Ubicación: CartoCiudad (número de puerta).
   Los marcados "aprox" se ubicaron a mano.

   LÍMITES DE BARRIOS Y CAPAS: todavía no están (son opcionales). */
window.CITY_ZONES = window.CITY_ZONES || {};
window.CITY_ZONES.madrid = {
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
    { id: "ti-plazamayor", type: "info", name: "Centro de Turismo · Plaza Mayor", address: "Plaza Mayor 27", ll: [40.41583, -3.7074],
      note: "La oficina de turismo principal. Si te robaron o perdiste documentos, te ayudan con la denuncia, las tarjetas y el consulado." },
    { id: "ti-callao", type: "info", name: "Punto de Información Turística · Callao", address: "Plaza de Callao", ll: [40.41985, -3.70598], aprox: true,
      note: "Información turística y ayuda si te robaron, en plena Gran Vía." },
    { id: "ti-prado", type: "info", name: "Punto de Información Turística · Paseo del Prado", address: "Plaza de Neptuno, frente al Museo del Prado", ll: [40.41465, -3.69366],
      note: "Frente al Prado. Información y ayuda al turista." },
    { id: "ti-reinasofia", type: "info", name: "Punto de Información Turística · Reina Sofía", address: "Calle de Santa Isabel 52", ll: [40.4084, -3.69343],
      note: "Junto al Museo Reina Sofía y la estación de Atocha." },
    { id: "ti-palacio", type: "info", name: "Punto de Información Turística · Palacio Real", address: "Calle de Bailén, esquina Calle de Requena", ll: [40.41665, -3.71354], aprox: true,
      note: "Frente al Palacio Real y la catedral de la Almudena." },
    { id: "ti-cibeles", type: "info", name: "Punto de Información Turística · CentroCentro", address: "Palacio de Cibeles, Plaza de Cibeles 1", ll: [40.41907, -3.69194],
      note: "Dentro del Palacio de Cibeles. Cierra los lunes." },
    { id: "ti-bernabeu", type: "info", name: "Punto de Información Turística · Bernabéu", address: "Paseo de la Castellana 138", ll: [40.45264, -3.68960], aprox: true,
      note: "Junto al estadio Santiago Bernabéu." },
    { id: "ti-t4", type: "info", name: "Punto de Información Turística · Aeropuerto T4", address: "Terminal 4, Llegadas, sala 10", ll: [40.4913, -3.5935], aprox: true, far: true,
      note: "Información apenas llegás, en la zona de retiro de equipaje." },
    { id: "ti-t2", type: "info", name: "Punto de Información Turística · Aeropuerto T2", address: "Terminal 2, Llegadas", ll: [40.4697, -3.5711], aprox: true, far: true,
      note: "Información apenas llegás." },
    { id: "p-centro", type: "policia", name: "Policía Nacional · Comisaría Centro", address: "Calle de Leganitos 19", ll: [40.42137, -3.71016],
      note: "La comisaría del centro, a pasos de la Plaza de España. Denuncias por robo y pérdida de documentos." },
    { id: "p-retiro", type: "policia", name: "Policía Nacional · Comisaría Retiro", address: "Calle de las Huertas 76", ll: [40.41277, -3.69485],
      note: "La más cercana al Barrio de las Letras y a los museos del Paseo del Prado." },
    { id: "p-chamberi", type: "policia", name: "Policía Nacional · Comisaría Chamberí", address: "Calle de Rafael Calvo 33", ll: [40.43422, -3.69186],
      note: "Para Chamberí, Chueca y el norte del centro." },
    { id: "p-moncloa", type: "policia", name: "Policía Nacional · Comisaría Moncloa", address: "Calle del Rey Francisco 21", ll: [40.42697, -3.7164],
      note: "Para Argüelles, el Templo de Debod y el Parque del Oeste." },
    { id: "p-arganzuela", type: "policia", name: "Policía Nacional · Comisaría Arganzuela", address: "Ronda de Toledo 26", ll: [40.40538, -3.70601],
      note: "Para La Latina, el Rastro y Madrid Río." },
    { id: "p-oac-sol", type: "policia", name: "Policía Municipal · Atención en Sol", address: "Puerta del Sol", ll: [40.4178, -3.7025], aprox: true,
      note: "Oficina de atención de la Policía Municipal en la Puerta del Sol, con traducción a varios idiomas para hacer la denuncia." },
    { id: "h-maranon", type: "salud", name: "Hospital Gregorio Marañón", address: "Calle del Doctor Esquerdo 46", ll: [40.41966, -3.67117],
      note: "Público. Urgencias 24 h; el más cercano al Retiro y al barrio de Salamanca." },
    { id: "h-clinico", type: "salud", name: "Hospital Clínico San Carlos", address: "Calle del Profesor Martín Lagos", ll: [40.44067, -3.72001],
      note: "Hospital universitario. Urgencias 24 h; para Moncloa, Argüelles y Chamberí." },
    { id: "h-princesa", type: "salud", name: "Hospital de La Princesa", address: "Calle de Diego de León 62", ll: [40.43402, -3.67575],
      note: "Público. Urgencias 24 h, en el barrio de Salamanca." },
    { id: "h-fjd", type: "salud", name: "Hospital Fundación Jiménez Díaz", address: "Avenida de los Reyes Católicos 2", ll: [40.43857, -3.71888],
      note: "Atiende pacientes de la sanidad pública. Urgencias 24 h, junto a Moncloa." },
    { id: "h-12oct", type: "salud", name: "Hospital 12 de Octubre", address: "Avenida de Córdoba", ll: [40.37622, -3.69848],
      note: "Hospital universitario grande. Urgencias 24 h; para el sur de la ciudad." },
    { id: "h-lapaz", type: "salud", name: "Hospital La Paz", address: "Paseo de la Castellana 261", ll: [40.48139, -3.6873],
      note: "Hospital universitario grande, con urgencias de adultos e infantiles las 24 h; al norte de la Castellana." },
    { id: "h-ramonycajal", type: "salud", name: "Hospital Ramón y Cajal", address: "Carretera de Colmenar Viejo, km 9,1", ll: [40.48736, -3.69385],
      note: "Hospital universitario. Urgencias 24 h; para el norte de la ciudad." },
    { id: "h-ninojesus", type: "salud", name: "Hospital Infantil Niño Jesús", address: "Avenida de Menéndez Pelayo 65", ll: [40.41389, -3.67686],
      note: "Hospital de chicos. Urgencias pediátricas 24 h, junto al Retiro." },
    /* Consulados y embajadas: listas oficiales de exteriores.gob.es. Se pone el consulado general si hay; si no, la sección consular de la embajada. */
    { id: "cons-ar", type: "consul", name: "Argentina · Consulado General", address: "Paseo de la Castellana 16, 28046", ll: [40.42841, -3.68908], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España." },
    { id: "cons-uy", type: "consul", name: "Uruguay · Consulado General", address: "Paseo del Pintor Rosales 32, 28008", ll: [40.4273, -3.71978], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España." },
    { id: "cons-cl", type: "consul", name: "Chile · Consulado General", address: "Calle de Rafael Calvo 18, 28010", ll: [40.43387, -3.69421], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España." },
    { id: "cons-br", type: "consul", name: "Brasil · Consulado General", address: "Calle de Goya 5-7, pasaje, 28001", ll: [40.42578, -3.68901], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España." },
    { id: "cons-mx", type: "consul", name: "México · Embajada y sección consular", address: "Carrera de San Jerónimo 46, 28014", ll: [40.41604, -3.69735], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España." },
    { id: "cons-co", type: "consul", name: "Colombia · Consulado General", address: "Calle de Lagasca 88, 28001", ll: [40.43001, -3.68468], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España." },
    { id: "cons-pe", type: "consul", name: "Perú · Consulado General", address: "Paseo del Pintor Rosales 30, 28008", ll: [40.42715, -3.71963], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España." },
    { id: "cons-py", type: "consul", name: "Paraguay · Embajada y sección consular", address: "Calle del Doctor Fleming 3, 28036", ll: [40.45489, -3.68942], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España." },
    { id: "cons-bo", type: "consul", name: "Bolivia · Consulado General", address: "Calle del Aviador Lindbergh 3, 28002", ll: [40.44246, -3.6797], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España." },
    { id: "cons-ec", type: "consul", name: "Ecuador · Consulado General", address: "Calle de Alenza 1, 28003", ll: [40.44257, -3.70085], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España." },
    { id: "cons-ve", type: "consul", name: "Venezuela · Consulado General", address: "Calle de Apolonio Morales 3, 28036", ll: [40.46347, -3.68414], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España." },
    { id: "cons-cr", type: "consul", name: "Costa Rica · Consulado General", address: "Calle de Ríos Rosas 54, 28003", ll: [40.44154, -3.6956], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España." },
    { id: "cons-us", type: "consul", name: "Estados Unidos · Embajada y sección consular", address: "Calle de Serrano 75, 28006", ll: [40.43464, -3.68679], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España." },
    { id: "cons-it", type: "consul", name: "Italia · Consulado General", address: "Calle de Agustín de Betancourt 3, 28003", ll: [40.44241, -3.69524], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España." },
    { id: "cons-fr", type: "consul", name: "Francia · Consulado General", address: "Calle del Marqués de la Ensenada 10, 28004", ll: [40.42448, -3.69235], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Asuntos Exteriores de España." },
    { id: "t-atocha", type: "transporte", name: "Estación de Atocha (Almudena Grandes)", address: "Plaza del Emperador Carlos V", ll: [40.40655, -3.68955], aprox: true,
      note: "La estación principal: trenes rápidos al sur y al este, Cercanías (también al aeropuerto) y la línea 1 del metro." },
    { id: "t-chamartin", type: "transporte", name: "Estación de Chamartín (Clara Campoamor)", address: "Calle de Agustín de Foxá", ll: [40.47208, -3.68247], aprox: true,
      note: "Trenes rápidos al norte, Cercanías al aeropuerto y las líneas 1 y 10 del metro." },
    { id: "t-nuevosministerios", type: "transporte", name: "Nuevos Ministerios", address: "Paseo de la Castellana", ll: [40.44643, -3.69171], aprox: true,
      note: "Donde termina la línea 8 del metro al aeropuerto. También pasan Cercanías y las líneas 6 y 10." },
    { id: "t-principepio", type: "transporte", name: "Estación de Príncipe Pío", address: "Paseo de la Florida", ll: [40.42116, -3.72041], aprox: true,
      note: "Cercanías, metro (líneas 6, 10 y Ramal) y colectivos a las afueras." },
    { id: "t-sur", type: "transporte", name: "Estación Sur de Autobuses", address: "Calle de Méndez Álvaro 83", ll: [40.39505, -3.67827], aprox: true,
      note: "La terminal de micros de larga distancia. Metro Méndez Álvaro (línea 6)." },
    { id: "t-t123", type: "transporte", name: "Aeropuerto de Barajas · T1, T2 y T3", address: "Avenida de la Hispanidad", ll: [40.4697, -3.5711], aprox: true, far: true,
      note: "Metro línea 8 (Aeropuerto T1-T2-T3), colectivo Exprés Aeropuerto y taxis." },
    { id: "t-t4", type: "transporte", name: "Aeropuerto de Barajas · T4", address: "Avenida de la Hispanidad", ll: [40.4913, -3.5935], aprox: true, far: true,
      note: "Metro línea 8 (Aeropuerto T4), tren Cercanías, colectivo Exprés Aeropuerto y taxis." }
  ],
  /* Canales a distancia y búsquedas rápidas "cerca mío" (abren Google Maps). */
  channels: [
    { icon: "💊", name: "Farmacias", desc: "Buscador de farmacias del Colegio de Farmacéuticos de Madrid, también las de guardia (en castellano).", href: "https://www.cofm.es/es/buscador-de-farmacias/" },
    { icon: "🏥", name: "Salud y emergencias", desc: "Qué hacer si necesitás un médico en Madrid, en la web oficial de turismo.", href: "https://www.esmadrid.com/salud-emergencias-madrid" },
    { icon: "📞", name: "Turismo de Madrid", desc: "Información turística oficial y ayuda si te robaron: +34 91 578 78 10.", href: "https://www.esmadrid.com/" },
    { icon: "🛂", name: "Encontrar mi consulado", desc: "Busca consulados y embajadas en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=consulado+embajada+Madrid" }
  ],
  nearby: [["💊", "Farmacia", "Farmacia"], ["🏧", "Cajero", "Cajero automático"], ["💱", "Casa de cambio", "Casa de cambio"], ["🛒", "Supermercado", "Supermercado"], ["🧺", "Lavandería", "Lavandería autoservicio"], ["🧳", "Guardaequipaje", "Consigna equipaje"], ["🍫", "Churrería", "Churrería"], ["👮", "Comisaría", "Comisaría Policía Nacional"]],

  barrios: {}
};
