/* Zonas de Roma para el mapa (tarjeta #101): puntos de ayuda, canales a distancia y búsquedas "cerca mío".

   PUNTOS DE AYUDA: comisarías, hospitales con guardia y oficinas de turismo sacados de OpenStreetMap el 14/11/2026
   (amenity=police, amenity=hospital con emergency=yes, tourism=information). Las oficinas de turismo se cruzaron con turismoroma.it.
   CONSULADOS Y EMBAJADAS: direcciones de las listas oficiales del Ministerio de Relaciones Exteriores de Italia (esteri.it):
   Lista Consolare del 20/07/2026 y Lista Diplomatica del 19/08/2026. Ubicación: OpenStreetMap. Los marcados "aprox" se ubicaron a mano.

   LÍMITES DE BARRIOS Y CAPAS: todavía no están (son opcionales). */
window.CITY_ZONES = window.CITY_ZONES || {};
window.CITY_ZONES.roma = {
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
    { id: "ti-fori", type: "info", name: "Tourist Infopoint · Foros Imperiales", address: "Via dei Fori Imperiali", ll: [41.89287, 12.48865],
      note: "Oficina de turismo de Roma Capitale frente a los Foros. Información, mapas y la Roma Pass." },
    { id: "ti-minghetti", type: "info", name: "Tourist Infopoint · Minghetti", address: "Via Marco Minghetti, esquina Via del Corso", ll: [41.89984, 12.48111],
      note: "A pasos de la Fontana di Trevi." },
    { id: "ti-termini", type: "info", name: "Tourist Infopoint · Termini", address: "Estación Termini, Galleria Gommata", ll: [41.9011, 12.5016], aprox: true,
      note: "Dentro de la estación, en la planta de los andenes." },
    { id: "ti-fco", type: "info", name: "Tourist Infopoint · Aeropuerto de Fiumicino", address: "Terminal 3, Arribos internacionales", ll: [41.7999, 12.2462], aprox: true, far: true,
      note: "Información apenas llegás." },
    { id: "p-questura", type: "policia", name: "Questura de Roma", address: "Via di San Vitale 15", ll: [41.90045, 12.49139],
      note: "La jefatura central de la Policía. Denuncias y documentos." },
    { id: "p-trevi", type: "policia", name: "Comisaría Trevi · Campo Marzio", address: "Piazza del Collegio Romano", ll: [41.89766, 12.48012],
      note: "La más cercana al Panteón, la Fontana di Trevi y Via del Corso." },
    { id: "p-trastevere", type: "policia", name: "Comisaría Trastevere", address: "Via di San Francesco a Ripa 64", ll: [41.88607, 12.47273],
      note: "Para Trastevere y la zona de bares." },
    { id: "p-vaticano", type: "policia", name: "Policía · Inspección Vaticano", address: "Via del Mascherino 12", ll: [41.90342, 12.45875],
      note: "Cerca de la plaza de San Pedro." },
    { id: "p-viminale", type: "policia", name: "Comisaría Viminale", address: "Via Farini 40", ll: [41.89866, 12.4992],
      note: "La más cercana a Termini y Santa María la Mayor." },
    { id: "p-esquilino", type: "policia", name: "Comisaría Esquilino", address: "Via Petrarca 7", ll: [41.89199, 12.50516],
      note: "Para el Esquilino y la zona sur de Termini." },
    { id: "p-polfer", type: "policia", name: "Policía Ferroviaria · Termini", address: "Estación Termini", ll: [41.9003, 12.50524],
      note: "Dentro de la estación: para robos en trenes y en Termini." },
    { id: "p-cc-venezia", type: "policia", name: "Carabinieri · Piazza Venezia", address: "Piazza Venezia", ll: [41.89687, 12.48237],
      note: "Los Carabinieri también reciben denuncias." },
    { id: "p-cc-farnese", type: "policia", name: "Carabinieri · Piazza Farnese", address: "Piazza Farnese", ll: [41.89387, 12.47301],
      note: "La más cercana a Campo de' Fiori." },
    { id: "p-cc-sanlorenzo", type: "policia", name: "Carabinieri · San Lorenzo", address: "Via dei Volsci 112", ll: [41.89893, 12.51723],
      note: "Para San Lorenzo y su zona de bares." },
    { id: "h-santospirito", type: "salud", name: "Hospital Santo Spirito in Sassia", address: "Lungotevere in Sassia 1", ll: [41.90066, 12.46259],
      note: "Público. Guardia 24 h; el más cercano al Vaticano." },
    { id: "h-fbf", type: "salud", name: "Hospital Fatebenefratelli · Isola Tiberina", address: "Via di Ponte Quattro Capi 39", ll: [41.89091, 12.47696],
      note: "Guardia 24 h, en la isla del Tíber: el más cercano al centro histórico y a Trastevere." },
    { id: "h-umberto", type: "salud", name: "Policlinico Umberto I", address: "Viale del Policlinico 155", ll: [41.90656, 12.51205],
      note: "Hospital universitario. Guardia 24 h; cerca de Termini y San Lorenzo." },
    { id: "h-sangiovanni", type: "salud", name: "Hospital San Giovanni Addolorata", address: "Via dell'Amba Aradam", ll: [41.88615, 12.50222],
      note: "Público. Guardia 24 h; el más cercano al Coliseo y San Juan de Letrán." },
    { id: "h-sancamillo", type: "salud", name: "Hospital San Camillo", address: "Circonvallazione Gianicolense 87", ll: [41.86899, 12.45641],
      note: "Público. Guardia 24 h; para Monteverde y el sur de Trastevere." },
    { id: "h-gemelli", type: "salud", name: "Policlinico Gemelli", address: "Largo Agostino Gemelli 8", ll: [41.93177, 12.42972],
      note: "Hospital universitario grande. Guardia 24 h; al norte del Vaticano." },
    { id: "h-bambinogesu", type: "salud", name: "Hospital pediátrico Bambino Gesù", address: "Piazza di Sant'Onofrio 4", ll: [41.89706, 12.46062],
      note: "Hospital de chicos. Guardia pediátrica 24 h, sobre el Janículo." },
    { id: "h-pertini", type: "salud", name: "Hospital Sandro Pertini", address: "Via dei Monti Tiburtini 385", ll: [41.92058, 12.54046],
      note: "Público. Guardia 24 h; para el este de la ciudad." },
    /* Consulados y embajadas: listas oficiales de esteri.it. Se pone el consulado general si hay; si no, la sección consular de la embajada. */
    { id: "cons-ar", type: "consul", name: "Argentina · Consulado General", address: "Via Barberini 67, 00187", ll: [41.9047, 12.49171], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Relaciones Exteriores de Italia y en cancilleria.gob.ar." },
    { id: "cons-uy", type: "consul", name: "Uruguay · Embajada y sección consular", address: "Via Giacomo Puccini 10, 00198", ll: [41.91161, 12.49262], aprox: true, note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Relaciones Exteriores de Italia." },
    { id: "cons-cl", type: "consul", name: "Chile · Embajada y sección consular", address: "Viale Liegi 19/23, 00198", ll: [41.92133, 12.49479], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Relaciones Exteriores de Italia." },
    { id: "cons-br", type: "consul", name: "Brasil · Consulado General", address: "Piazza di Pasquino 8, 00186", ll: [41.89781, 12.47243], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Relaciones Exteriores de Italia." },
    { id: "cons-mx", type: "consul", name: "México · Embajada y sección consular", address: "Via Lazzaro Spallanzani 16, 00161", ll: [41.91309, 12.50935], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Relaciones Exteriores de Italia." },
    { id: "cons-co", type: "consul", name: "Colombia · Consulado General", address: "Piazzale Flaminio 9, 00196", ll: [41.91205, 12.4753], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Relaciones Exteriores de Italia." },
    { id: "cons-pe", type: "consul", name: "Perú · Embajada", address: "Via Francesco Siacci 2/B, 00197", ll: [41.92232, 12.48947], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Relaciones Exteriores de Italia." },
    { id: "cons-py", type: "consul", name: "Paraguay · Embajada y sección consular", address: "Via Firenze 43, 00184", ll: [41.90307, 12.49344], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Relaciones Exteriores de Italia." },
    { id: "cons-bo", type: "consul", name: "Bolivia · Embajada y sección consular", address: "Via Brenta 2A, 00198", ll: [41.91885, 12.50204], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Relaciones Exteriores de Italia." },
    { id: "cons-ec", type: "consul", name: "Ecuador · Consulado General", address: "Via Nomentana 257, 00161", ll: [41.9221, 12.51846], aprox: true, note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Relaciones Exteriores de Italia." },
    { id: "cons-ve", type: "consul", name: "Venezuela · Embajada y sección consular", address: "Via Nicolò Tartaglia 11, 00197", ll: [41.92482, 12.48794], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Relaciones Exteriores de Italia." },
    { id: "cons-es", type: "consul", name: "España · Consulado General", address: "Via di Campo Marzio 34, 00186", ll: [41.90306, 12.47763], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Relaciones Exteriores de Italia." },
    { id: "cons-us", type: "consul", name: "Estados Unidos · Embajada y sección consular", address: "Via Vittorio Veneto 121, 00187", ll: [41.90693, 12.4915], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Relaciones Exteriores de Italia." },
    { id: "cons-pt", type: "consul", name: "Portugal · Embajada y sección consular", address: "Via Guido d'Arezzo 5, 00198", ll: [41.92023, 12.49403], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del Ministerio de Relaciones Exteriores de Italia." },
    { id: "t-termini", type: "transporte", name: "Roma Termini", address: "Piazza dei Cinquecento", ll: [41.9009, 12.5016], aprox: true,
      note: "La estación principal: trenes a toda Italia, Leonardo Express a Fiumicino y las líneas A y B del metro." },
    { id: "t-tiburtina", type: "transporte", name: "Roma Tiburtina", address: "Piazzale della Stazione Tiburtina", ll: [41.9105, 12.5306], aprox: true,
      note: "Trenes rápidos, el tren regional al aeropuerto y la terminal de micros de larga distancia." },
    { id: "t-trastevere", type: "transporte", name: "Roma Trastevere", address: "Piazzale Biondo Flavio", ll: [41.8732, 12.4703], aprox: true,
      note: "Trenes regionales, también al aeropuerto de Fiumicino (FL1)." },
    { id: "t-ostiense", type: "transporte", name: "Roma Ostiense", address: "Piazzale 12 Ottobre 1492", ll: [41.87199, 12.48625],
      note: "Trenes regionales, también al aeropuerto de Fiumicino (FL1), y la línea B del metro (Piramide)." },
    { id: "t-sanpietro", type: "transporte", name: "Roma San Pietro", address: "Piazza della Stazione di San Pietro", ll: [41.89623, 12.45467],
      note: "Estación de trenes regionales a pocas cuadras del Vaticano." },
    { id: "t-fco", type: "transporte", name: "Aeropuerto de Fiumicino (FCO)", address: "Fiumicino", ll: [41.8003, 12.2389], aprox: true, far: true,
      note: "El aeropuerto principal. Leonardo Express a Termini o tren regional FL1." },
    { id: "t-cia", type: "transporte", name: "Aeropuerto de Ciampino (CIA)", address: "Ciampino", ll: [41.7994, 12.5949], aprox: true, far: true,
      note: "Vuelos baratos. Colectivos a Termini y al metro." }
  ],
  /* Canales a distancia y búsquedas rápidas "cerca mío" (abren Google Maps). */
  channels: [
    { icon: "💊", name: "Farmacias de turno", desc: "Farmacias abiertas hoy en Roma (en italiano).", href: "https://www.farmaciediturno.org/comune.asp?cod=58091" },
    { icon: "📞", name: "060608", desc: "Información turística y de la ciudad de Roma Capitale, por teléfono y en la web.", href: "https://www.060608.it/" },
    { icon: "ℹ️", name: "Oficinas de turismo", desc: "Dónde están y cuándo abren, en Turismo Roma.", href: "https://www.turismoroma.it/en/page/tourist-infopoints" },
    { icon: "🛂", name: "Encontrar mi consulado", desc: "Busca consulados y embajadas en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=consolato+ambasciata+Roma" }
  ],
  nearby: [["💊", "Farmacia", "Farmacia"], ["🏧", "Cajero", "Bancomat"], ["💱", "Casa de cambio", "Cambio valuta"], ["🛒", "Supermercado", "Supermercato"], ["🧺", "Lavandería", "Lavanderia self service"], ["🧳", "Guardaequipaje", "Deposito bagagli"], ["🍦", "Heladería", "Gelateria"], ["👮", "Comisaría", "Polizia"]],

  barrios: {}
};
