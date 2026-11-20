/* Zonas de Tokio para el mapa (tarjeta #216): puntos de ayuda, canales a distancia y búsquedas "cerca mío".

   INFORMACIÓN TURÍSTICA: los Tokyo Tourist Information Center de GO TOKYO (gotokyo.org, lista del 1/9/2026) y los centros de
   información de los barrios, ubicados con OpenStreetMap (tourism=information, 19/11/2026).
   POLICÍA: los koban (puestos de policía de barrio) de las zonas más visitadas, de OpenStreetMap (amenity=police, 19/11/2026).
   Para emergencias, siempre el 110.
   HOSPITALES: hospitales con urgencias en OpenStreetMap del 19/11/2026 (amenity=hospital, emergency=yes).
   CONSULADOS: direcciones de la web oficial de cada país (Argentina, Brasil, Chile, España e Italia) o, cuando esa web no se pudo
   leer, de la lista oficial del Ministerio de Relaciones Exteriores de Japón (mofa.go.jp, 19/11/2026: Colombia, México, Perú,
   Uruguay y Estados Unidos). La ubicación sale de OpenStreetMap (office=diplomatic); la de Uruguay, que se mudó en 2023, es aproximada.

   LÍMITES DE BARRIOS Y CAPAS: todavía no están (son opcionales). */
window.CITY_ZONES = window.CITY_ZONES || {};
window.CITY_ZONES.tokio = {
  guide: {},
  layers: [],

  helpTypes: {
    info: { name: "Información turística", icon: "ℹ️", color: "#1a73c8" },
    policia: { name: "Policía (koban)", icon: "👮", color: "#364fc7" },
    salud: { name: "Hospitales con urgencias", icon: "🏥", color: "#e03131" },
    consul: { name: "Embajadas y consulados", icon: "🛂", color: "#0b7285" },
    transporte: { name: "Aeropuertos y estaciones", icon: "🚉", color: "#5f3dc4" }
  },
  help: [
    { id: "tic-tocho", type: "info", name: "Tokyo Tourist Information Center · Gobierno de Tokio", address: "Nishi-Shinjuku, Shinjuku", ll: [35.69030, 139.69155], aprox: true,
      note: "En la planta baja del edificio del gobierno de Tokio, el del mirador gratis." },
    { id: "tic-busta", type: "info", name: "Tokyo Tourist Information Center · Busta Shinjuku", address: "Busta Shinjuku, Shibuya", ll: [35.68813, 139.70054],
      note: "En la terminal de micros de Shinjuku, sobre la estación." },
    { id: "tic-ueno", type: "info", name: "Tokyo Tourist Information Center · Keisei Ueno", address: "Estación Keisei Ueno, Taito", ll: [35.71109, 139.77367],
      note: "Frente a los molinetes del tren que va al aeropuerto de Narita." },
    { id: "info-asakusa", type: "info", name: "Asakusa Culture Tourist Information Center", address: "Kaminarimon, Taito", ll: [35.71065, 139.79652],
      note: "Frente al Kaminarimon, de Kengo Kuma, con un mirador gratis arriba." },
    { id: "info-shibuya", type: "info", name: "Shibu Hachi Box", address: "Hachiko, Shibuya", ll: [35.65908, 139.70079],
      note: "Puesto de información junto a la estatua de Hachiko." },
    { id: "k-shibuya", type: "policia", name: "Koban de la estación de Shibuya", address: "Salida Hachiko, Shibuya", ll: [35.65932, 139.70104],
      note: "Al lado de Hachiko. Para emergencias, llamá al 110." },
    { id: "k-shinjuku", type: "policia", name: "Koban de la salida este de Shinjuku", address: "Shinjuku, Shinjuku", ll: [35.69177, 139.70114],
      note: "En la salida este de la estación." },
    { id: "k-kabukicho", type: "policia", name: "Koban de Kabukicho", address: "Kabukicho, Shinjuku", ll: [35.69615, 139.70163],
      note: "En la entrada del barrio de la noche." },
    { id: "k-kaminarimon", type: "policia", name: "Koban de Kaminarimon", address: "Asakusa, Taito", ll: [35.71102, 139.79644],
      note: "Frente a la Puerta del Trueno." },
    { id: "k-ginza", type: "policia", name: "Koban de Ginza 4-chome", address: "Ginza, Chuo", ll: [35.67129, 139.76475],
      note: "En el cruce central de Ginza." },
    { id: "k-roppongi", type: "policia", name: "Koban de Roppongi", address: "Roppongi, Minato", ll: [35.66354, 139.73217],
      note: "En el cruce de Roppongi, en el centro de la noche." },
    { id: "k-ueno", type: "policia", name: "Koban del parque de Ueno", address: "Ueno, Taito", ll: [35.71087, 139.77379],
      note: "En la entrada del parque, frente a la estación." },
    { id: "h-ncgm", type: "salud", name: "National Center for Global Health and Medicine", address: "Toyama, Shinjuku", ll: [35.70293, 139.71629],
      note: "Hospital público con urgencias y atención a extranjeros." },
    { id: "h-toranomon", type: "salud", name: "Toranomon Hospital", address: "Toranomon, Minato", ll: [35.66874, 139.74503],
      note: "Gran hospital con urgencias, cerca de Roppongi y Ginza." },
    { id: "h-keio", type: "salud", name: "Keio University Hospital", address: "Shinanomachi, Shinjuku", ll: [35.68210, 139.71810],
      note: "Hospital universitario con urgencias." },
    { id: "h-todai", type: "salud", name: "The University of Tokyo Hospital", address: "Hongo, Bunkyo", ll: [35.71202, 139.76538],
      note: "Hospital universitario con urgencias, cerca de Ueno." },
    { id: "h-nihon", type: "salud", name: "Nihon University Hospital", address: "Kanda-Surugadai, Chiyoda", ll: [35.69736, 139.76267],
      note: "Hospital universitario con urgencias, cerca de Akihabara." },
    /* Consulados: web oficial de cada país o lista oficial de Japón (19/11/2026). */
    { id: "cons-ar", type: "consul", name: "Argentina · Embajada (sección consular)", address: "2-14-14 Moto-Azabu, Minato", ll: [35.65263, 139.73040],
      note: "Pasaportes, trámites y ayuda si te roban los documentos." },
    { id: "cons-br", type: "consul", name: "Brasil · Consulado General", address: "1-13-12 Higashi-Gotanda, Shinagawa", ll: [35.62671, 139.72452],
      note: "Trámites y ayuda consular, en el edificio Ichigo Gotanda." },
    { id: "cons-cl", type: "consul", name: "Chile · Embajada (sección consular)", address: "3-1-14 Shiba, Minato", ll: [35.65420, 139.74553],
      note: "En el edificio Shibakoen Hanshin, piso 8." },
    { id: "cons-co", type: "consul", name: "Colombia · Embajada", address: "3-10-53 Kami-Osaki, Shinagawa", ll: [35.63179, 139.71771],
      note: "Trámites y ayuda consular." },
    { id: "cons-es", type: "consul", name: "España · Embajada (sección consular)", address: "1-3-29 Roppongi, Minato", ll: [35.66561, 139.74152],
      note: "Trámites y ayuda consular." },
    { id: "cons-it", type: "consul", name: "Italia · Embajada", address: "2-5-4 Mita, Minato", ll: [35.65046, 139.74218],
      note: "Trámites y ayuda consular." },
    { id: "cons-mx", type: "consul", name: "México · Embajada", address: "2-15-1 Nagata-cho, Chiyoda", ll: [35.67692, 139.73952],
      note: "Trámites y ayuda consular." },
    { id: "cons-pe", type: "consul", name: "Perú · Consulado General", address: "1-13-12 Higashi-Gotanda, Shinagawa", ll: [35.62676, 139.72459],
      note: "En el edificio Ichigo Gotanda, piso 6." },
    { id: "cons-uy", type: "consul", name: "Uruguay · Embajada", address: "1-2-1 Shibadaimon, Minato", ll: [35.65680, 139.75480], aprox: true,
      note: "En el edificio Daimon KS, piso 7 (se mudó en 2023)." },
    { id: "cons-us", type: "consul", name: "Estados Unidos · Embajada", address: "1-10-5 Akasaka, Minato", ll: [35.66855, 139.74335],
      note: "Trámites y ayuda consular." },
    { id: "t-haneda", type: "transporte", name: "Aeropuerto de Haneda (HND)", address: "Ota", ll: [35.54930, 139.77980], far: true,
      note: "El aeropuerto más cercano al centro: tren Keikyu y Tokyo Monorail." },
    { id: "t-tokyo", type: "transporte", name: "Estación de Tokio", address: "Marunouchi, Chiyoda", ll: [35.68124, 139.76712],
      note: "Trenes bala (shinkansen), Narita Express y la línea Yamanote." },
    { id: "t-shinjuku", type: "transporte", name: "Estación de Shinjuku", address: "Shinjuku, Shinjuku", ll: [35.69060, 139.70040],
      note: "La estación más transitada del mundo. Arriba, la terminal de micros Busta Shinjuku (al Fuji y Hakone)." },
    { id: "t-ueno", type: "transporte", name: "Estación de Ueno", address: "Ueno, Taito", ll: [35.71380, 139.77730],
      note: "Shinkansen y, al lado, el Keisei Skyliner a Narita." }
  ],
  /* Canales a distancia y búsquedas rápidas "cerca mío" (abren Google Maps). */
  channels: [
    { icon: "📞", name: "Japan Visitor Hotline", desc: "050-3816-2787: ayuda para turistas en inglés, chino y coreano, todo el día.", href: "https://www.japan.travel/en/plan/hotline/" },
    { icon: "🩺", name: "AMDA", desc: "Información médica en varios idiomas: 03-6233-9266.", href: "https://www.amdamedicalcenter.com/" },
    { icon: "🗺️", name: "GO TOKYO", desc: "La web oficial de turismo de Tokio.", href: "https://www.gotokyo.org/es/" },
    { icon: "💊", name: "Farmacias", desc: "Farmacias y drugstores cerca, en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=pharmacy+Tokyo" },
    { icon: "🛂", name: "Encontrar mi consulado", desc: "Busca embajadas y consulados en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=embassy+Tokyo" }
  ],
  nearby: [["💊", "Farmacia", "薬局"], ["🏧", "Cajero (7-Eleven)", "セブン銀行 ATM"], ["🏪", "Konbini", "コンビニ"], ["🧺", "Lavandería", "コインランドリー"], ["🧳", "Guardaequipaje", "コインロッカー"], ["♨️", "Baño público", "銭湯"], ["🚻", "Baño", "トイレ"]],

  barrios: {}
};
