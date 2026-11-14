/* Zonas de Berlín para el mapa (tarjeta #99): puntos de ayuda, canales a distancia y búsquedas "cerca mío".

   PUNTOS DE AYUDA: nombre, dirección y ubicación sacados de OpenStreetMap el 13/11/2026 (comisarías, hospitales con guardia,
   oficinas de turismo). Las oficinas de turismo se cruzaron con visitberlin.de. Los marcados "aprox" se ubicaron a mano.

   LÍMITES DE BARRIOS Y CAPAS: todavía no están (son opcionales). Si se suman, cada punto son 8 dígitos "AAAABBBB":
   latitud = 52 + AAAA/10000, longitud = 13 + BBBB/10000 (zonasBase en data/berlin-local.js). Berlín no cruza ningún grado entero. */
window.CITY_ZONES = window.CITY_ZONES || {};
window.CITY_ZONES.berlin = {
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
    { id: "ti-hbf", type: "info", name: "Berlin Tourist Info · Estación central", address: "Europaplatz 1, Hauptbahnhof", ll: [52.52563, 13.36858],
      note: "En la planta baja, por la entrada de Europaplatz. Información, mapas y venta de la Berlin WelcomeCard." },
    { id: "ti-tor", type: "info", name: "Berlin Tourist Info · Puerta de Brandeburgo", address: "Pariser Platz, Mitte", ll: [52.51608, 13.37791],
      note: "En el edificio sur de la puerta. Información y mapas en persona." },
    { id: "ti-humboldt", type: "info", name: "Berlin Tourist Info · Humboldt Forum", address: "Schloßplatz, Mitte", ll: [52.5177, 13.40152],
      note: "Dentro del Humboldt Forum, frente a la Isla de los Museos." },
    { id: "ti-ber", type: "info", name: "Berlin Brandenburg WelcomeCenter · Aeropuerto BER", address: "Willy-Brandt-Platz, Schönefeld", ll: [52.3647, 13.5097], aprox: true, far: true,
      note: "En la Terminal 1. Información apenas llegás." },
    { id: "p-alex", type: "policia", name: "Comisaría de Alexanderplatz", address: "Alexanderplatz, Mitte", ll: [52.52144, 13.41322],
      note: "Puesto de policía en la plaza misma, pensado para la zona más transitada de la ciudad." },
    { id: "p-57", type: "policia", name: "Comisaría 57", address: "Keibelstraße 35, Mitte", ll: [52.52428, 13.4157],
      note: "A pocas cuadras de Alexanderplatz. Denuncias por robos o pérdida de documentos." },
    { id: "p-53", type: "policia", name: "Comisaría 53 · Kreuzberg norte", address: "Friedrichstraße 219, Kreuzberg", ll: [52.50496, 13.39057],
      note: "Cerca de Checkpoint Charlie." },
    { id: "p-28", type: "policia", name: "Comisaría 28", address: "Alt-Moabit 145, Moabit", ll: [52.52203, 13.36594],
      note: "La más cercana a la estación central." },
    { id: "p-25", type: "policia", name: "Comisaría 25", address: "Bismarckstraße 111, Charlottenburg", ll: [52.51195, 13.31904],
      note: "La más cercana a Kurfürstendamm y Zoologischer Garten." },
    { id: "p-51", type: "policia", name: "Comisaría 51", address: "Wedekindstraße 10, Friedrichshain", ll: [52.51221, 13.44459],
      note: "La más cercana a la East Side Gallery y Warschauer Straße." },
    /* Tarjeta #173: más comisarías y hospitales para los barrios que no tenían, sacados de OpenStreetMap el 14/11/2026
       (amenity=police y amenity=hospital con emergency=yes). */
    { id: "p-15", type: "policia", name: "Comisaría 15", address: "Eberswalder Straße 6-9, Prenzlauer Berg", ll: [52.54068, 13.40686],
      note: "La más cercana al Mauerpark y a Kastanienallee." },
    { id: "p-kotti", type: "policia", name: "Puesto de policía de Kottbusser Tor", address: "Adalbertstraße 3, Kreuzberg", ll: [52.50012, 13.41838],
      note: "Puesto chico en plena plaza de Kottbusser Tor, una zona de mucho movimiento de noche." },
    { id: "p-54", type: "policia", name: "Comisaría 54", address: "Sonnenallee 107, Neukölln", ll: [52.48178, 13.44082],
      note: "La más cercana a la zona de bares de Neukölln." },
    { id: "p-41", type: "policia", name: "Comisaría 41", address: "Gothaer Straße 19, Schöneberg", ll: [52.48871, 13.34767],
      note: "La más cercana a Schöneberg y Nollendorfplatz." },
    { id: "h-charite", type: "salud", name: "Charité · Campus Mitte", address: "Charitéplatz 1, Mitte", ll: [52.52576, 13.37789],
      note: "Hospital universitario. Guardia 24 h." },
    { id: "h-friedrichshain", type: "salud", name: "Vivantes Klinikum im Friedrichshain", address: "Landsberger Allee 49, Friedrichshain", ll: [52.52553, 13.43948],
      note: "Público. Guardia 24 h." },
    { id: "h-urban", type: "salud", name: "Vivantes Klinikum Am Urban", address: "Dieffenbachstraße 1, Kreuzberg", ll: [52.49396, 13.40859],
      note: "Público. Guardia 24 h; el más cercano a Kreuzberg y Neukölln." },
    { id: "h-franziskus", type: "salud", name: "Franziskus-Krankenhaus", address: "Budapester Straße 15-19, Tiergarten", ll: [52.50603, 13.34522],
      note: "Guardia 24 h; cerca de Zoologischer Garten." },
    { id: "h-westend", type: "salud", name: "DRK Kliniken Berlin Westend", address: "Spandauer Damm 130, Charlottenburg", ll: [52.52026, 13.27729],
      note: "Guardia 24 h; el más cercano al Palacio de Charlottenburg." },
    { id: "h-virchow", type: "salud", name: "Charité · Campus Virchow-Klinikum", address: "Augustenburger Platz 1, Wedding", ll: [52.54215, 13.34286],
      note: "Hospital universitario. Guardia 24 h, también pediátrica." },
    { id: "h-avk", type: "salud", name: "Vivantes Auguste-Viktoria-Klinikum", address: "Rubensstraße 125, Schöneberg", ll: [52.46208, 13.34655],
      note: "Público. Guardia 24 h; el más cercano al sur de Schöneberg." },
    { id: "h-joseph", type: "salud", name: "St. Joseph Krankenhaus", address: "Wüsthoffstraße 15, Tempelhof", ll: [52.4781, 13.37296],
      note: "Guardia 24 h; cerca del parque de Tempelhof." },
    { id: "h-gertrauden", type: "salud", name: "Sankt Gertrauden-Krankenhaus", address: "Paretzer Straße 12, Wilmersdorf", ll: [52.48035, 13.31721],
      note: "Guardia 24 h; el más cercano a Wilmersdorf." },
    { id: "h-franklin", type: "salud", name: "Charité · Campus Benjamin Franklin", address: "Hindenburgdamm 30, Steglitz", ll: [52.44204, 13.32082],
      note: "Hospital universitario. Guardia 24 h; para el sudoeste de la ciudad." },
    /* Consulados y embajadas (tarjeta #170): direcciones de la lista oficial del Ministerio de Relaciones Exteriores de Alemania
       (auswaertiges-amt.de, página de cada país, consultada el 14/11/2026). Ubicación: OpenStreetMap. */
    { id: "cons-ar", type: "consul", name: "Argentina · Embajada y sección consular", address: "Von-der-Heydt-Straße 2, 10785", ll: [52.50704, 13.35440], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el Ministerio de Relaciones Exteriores de Alemania." },
    { id: "cons-uy", type: "consul", name: "Uruguay · Embajada y sección consular", address: "Budapester Straße 39, 10787", ll: [52.50499, 13.34067], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el Ministerio de Relaciones Exteriores de Alemania." },
    { id: "cons-cl", type: "consul", name: "Chile · Embajada y sección consular", address: "Anton-Wilhelm-Amo-Straße 42, 10117", ll: [52.51262, 13.39448], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el Ministerio de Relaciones Exteriores de Alemania." },
    { id: "cons-br", type: "consul", name: "Brasil · Embajada y sección consular", address: "Wallstraße 57, 10179", ll: [52.51362, 13.41363], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el Ministerio de Relaciones Exteriores de Alemania." },
    { id: "cons-mx", type: "consul", name: "México · Embajada y sección consular", address: "Klingelhöferstraße 3, 10785", ll: [52.50812, 13.35126], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el Ministerio de Relaciones Exteriores de Alemania." },
    { id: "cons-co", type: "consul", name: "Colombia · Embajada y sección consular", address: "Taubenstraße 23, 10117", ll: [52.51323, 13.39484], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el Ministerio de Relaciones Exteriores de Alemania." },
    { id: "cons-pe", type: "consul", name: "Perú · Embajada y sección consular", address: "Taubenstraße 20, 10117", ll: [52.51320, 13.39436], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el Ministerio de Relaciones Exteriores de Alemania." },
    { id: "cons-py", type: "consul", name: "Paraguay · Embajada y sección consular", address: "Hardenbergstraße 12, 10623", ll: [52.50838, 13.32690], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el Ministerio de Relaciones Exteriores de Alemania." },
    { id: "cons-bo", type: "consul", name: "Bolivia · Embajada y sección consular", address: "Wichmannstraße 6, 10787", ll: [52.50529, 13.34817], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el Ministerio de Relaciones Exteriores de Alemania." },
    { id: "cons-ec", type: "consul", name: "Ecuador · Embajada y sección consular", address: "Joachimsthaler Straße 12, 10719", ll: [52.50260, 13.33085], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el Ministerio de Relaciones Exteriores de Alemania." },
    { id: "cons-ve", type: "consul", name: "Venezuela · Embajada y sección consular", address: "Lietzenburger Straße 107, 10707", ll: [52.49931, 13.31708], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el Ministerio de Relaciones Exteriores de Alemania." },
    { id: "cons-es", type: "consul", name: "España · Embajada y sección consular", address: "Lichtensteinallee 1, 10787", ll: [52.51033, 13.34525], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el Ministerio de Relaciones Exteriores de Alemania." },
    { id: "cons-us", type: "consul", name: "Estados Unidos · Embajada", address: "Pariser Platz 2, 10117", ll: [52.51529, 13.37817], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el Ministerio de Relaciones Exteriores de Alemania." },
    { id: "cons-it", type: "consul", name: "Italia · Embajada y sección consular", address: "Hiroshimastraße 1, 10785", ll: [52.50933, 13.35974], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el Ministerio de Relaciones Exteriores de Alemania." },
    { id: "cons-pt", type: "consul", name: "Portugal · Embajada y sección consular", address: "Kurfürstenstraße 57, 10785", ll: [52.50198, 13.35538], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el Ministerio de Relaciones Exteriores de Alemania." },
    { id: "t-hbf", type: "transporte", name: "Berlin Hauptbahnhof (estación central)", address: "Europaplatz 1, Moabit", ll: [52.5251, 13.3694], aprox: true,
      note: "Trenes a toda Alemania y Europa, y al aeropuerto. S-Bahn y U5." },
    { id: "t-zob", type: "transporte", name: "Terminal de ómnibus (ZOB)", address: "Masurenallee 4-6, Charlottenburg", ll: [52.50775, 13.27981],
      note: "Micros de larga distancia. Se llega en S-Bahn (Messe Nord) o U2 (Kaiserdamm)." },
    { id: "t-ost", type: "transporte", name: "Berlin Ostbahnhof", address: "Koppenstraße 3, Friedrichshain", ll: [52.5103, 13.4347], aprox: true,
      note: "Trenes de larga distancia y S-Bahn. A pasos de la East Side Gallery." },
    { id: "t-zoo", type: "transporte", name: "Zoologischer Garten", address: "Hardenbergplatz, Charlottenburg", ll: [52.5073, 13.3325], aprox: true,
      note: "La estación del oeste: S-Bahn, U2, U9, regionales y muchos buses." },
    { id: "t-sk", type: "transporte", name: "Berlin Südkreuz", address: "General-Pape-Straße 1, Tempelhof", ll: [52.47657, 13.36604],
      note: "Trenes de larga distancia hacia el sur (Leipzig, Múnich, Dresde) y S-Bahn al aeropuerto." },
    { id: "t-gb", type: "transporte", name: "Berlin Gesundbrunnen", address: "Ramlerstraße, Gesundbrunnen", ll: [52.54865, 13.39022],
      note: "Trenes de larga distancia hacia el norte (Hamburgo, Rostock, el Báltico), S-Bahn y U8." },
    { id: "t-alex", type: "transporte", name: "Alexanderplatz", address: "Dircksenstraße, Mitte", ll: [52.52157, 13.41128],
      note: "Gran cruce del centro: S-Bahn, regionales al aeropuerto, U2, U5 y U8, tranvías y buses." },
    { id: "t-spandau", type: "transporte", name: "Berlin-Spandau", address: "Seegefelder Straße, Spandau", ll: [52.53477, 13.19563],
      note: "Trenes de larga distancia hacia el oeste (Hamburgo, Hannover) y la ciudadela de Spandau cerca." },
    { id: "t-ber", type: "transporte", name: "Aeropuerto Berlin Brandenburg (BER)", address: "Willy-Brandt-Platz, Schönefeld", ll: [52.3646, 13.5094], aprox: true, far: true,
      note: "El único aeropuerto de Berlín. Entre 30 y 45 minutos del centro en tren." }
  ],
  /* Canales a distancia y búsquedas rápidas "cerca mío" (abren Google Maps). */
  channels: [
    { icon: "📝", name: "Denuncia por internet", desc: "Sitio de la Policía de Berlín (en alemán).", href: "https://www.internetwache-polizei-berlin.de/" },
    { icon: "💊", name: "Farmacias de turno", desc: "Buscador de farmacias abiertas ahora (en alemán).", href: "https://www.aponet.de/notdienstsuche" },
    { icon: "ℹ️", name: "Oficinas de turismo", desc: "Dónde están y cuándo abren, en el sitio de visitBerlin.", href: "https://www.visitberlin.de/en/berlin-tourist-info-centres" },
    { icon: "🛂", name: "Encontrar mi consulado", desc: "Busca consulados y embajadas en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=consulado+embajada+Berlin" }
  ],
  nearby: [["💊", "Farmacia", "Apotheke"], ["🏧", "Cajero", "Geldautomat"], ["💱", "Casa de cambio", "Wechselstube"], ["🛒", "Supermercado", "Supermarkt"], ["🧺", "Lavandería", "Waschsalon"], ["🧳", "Guardaequipaje", "Gepäckaufbewahrung"], ["📶", "Café con wifi", "Café WLAN"], ["👮", "Comisaría", "Polizei"]],

  barrios: {}
};
