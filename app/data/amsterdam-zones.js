/* Zonas de Ámsterdam para el mapa (tarjeta #199): puntos de ayuda, canales a distancia y búsquedas "cerca mío".

   OFICINA DE TURISMO: el I amsterdam Visitor Centre, frente a la estación central (ubicación aproximada).
   POLICÍA: comisarías de la Policía Nacional (Nationale Politie) en OpenStreetMap del 18/11/2026 (amenity=police).
   Para denunciar un robo sin urgencia también se puede llamar al 0900 8844.
   HOSPITALES: hospitales con guardia de emergencias (SEH) en OpenStreetMap del 18/11/2026 (amenity=hospital, emergency=yes).
   CONSULADOS Y EMBAJADAS: direcciones de la lista oficial del gobierno de los Países Bajos (government.nl, "Embassies, consulates
   and other representations", 18/11/2026). Casi todas las embajadas están en La Haya (Den Haag), a una hora en tren: esas quedan
   fuera del mapa de la ciudad ("far"). Ubicación de cada dirección: OpenStreetMap (Nominatim). Uruguay: la lista oficial tiene su
   teléfono pero no la dirección; la dirección sale de su embajada (aprox).

   LÍMITES DE BARRIOS Y CAPAS: todavía no están (son opcionales). */
window.CITY_ZONES = window.CITY_ZONES || {};
window.CITY_ZONES.amsterdam = {
  guide: {},
  layers: [],

  helpTypes: {
    info: { name: "Información turística", icon: "ℹ️", color: "#1a73c8" },
    policia: { name: "Policía y denuncias", icon: "👮", color: "#364fc7" },
    salud: { name: "Hospitales con guardia 24 h", icon: "🏥", color: "#e03131" },
    consul: { name: "Consulados y embajadas", icon: "🛂", color: "#0b7285" },
    transporte: { name: "Estaciones y aeropuerto", icon: "🚉", color: "#5f3dc4" }
  },
  help: [
    { id: "ti-centraal", type: "info", name: "I amsterdam Visitor Centre · Estación Central", address: "Stationsplein 10", ll: [52.37749, 4.90031], aprox: true,
      note: "La oficina de turismo oficial, frente a la estación central. Información, mapas, el I amsterdam City Card y entradas." },
    { id: "p-nzvoorburgwal", type: "policia", name: "Comisaría Nieuwezijds Voorburgwal", address: "Nieuwezijds Voorburgwal 35", ll: [52.37645, 4.89437],
      note: "La comisaría más cerca de la estación central y el Dam. Para hacer la denuncia si te roban." },
    { id: "p-lijnbaansgracht", type: "policia", name: "Comisaría Lijnbaansgracht (Leidseplein)", address: "Lijnbaansgracht 219", ll: [52.36517, 4.88140],
      note: "Al lado del Leidseplein." },
    { id: "p-ijtunnel", type: "policia", name: "Comisaría IJ-tunnel", address: "IJ-tunnel 2", ll: [52.37000, 4.90916],
      note: "Cerca de Nieuwmarkt y el Barrio Rojo." },
    { id: "p-elandsgracht", type: "policia", name: "Jefatura de Policía (Hoofdbureau)", address: "Elandsgracht 117", ll: [52.36839, 4.87801],
      note: "La sede central de la policía de Ámsterdam, en el Jordaan." },
    { id: "p-depijp", type: "policia", name: "Comisaría Zuid-De Pijp", address: "President Kennedylaan 11", ll: [52.33998, 4.90222],
      note: "Para De Pijp y el sur de la ciudad." },
    { id: "p-oost", type: "policia", name: "Comisaría Oost", address: "Linnaeusstraat 111", ll: [52.35747, 4.92729],
      note: "Para Oost y el Oosterpark." },
    { id: "p-noord", type: "policia", name: "Comisaría Boven-IJ (Noord)", address: "Rode Kruisstraat 79", ll: [52.39503, 4.92783],
      note: "Para Amsterdam Noord." },
    { id: "h-olvg-oost", type: "salud", name: "OLVG, sede Oost", address: "Oosterpark 9", ll: [52.35815, 4.91532],
      note: "Hospital con guardia de emergencias (SEH) las 24 horas, el más cerca del centro." },
    { id: "h-amc", type: "salud", name: "Amsterdam UMC, sede AMC", address: "Meibergdreef 9", ll: [52.29250, 4.95692], far: true,
      note: "Hospital universitario con emergencias las 24 horas. Adentro está el Emma Kinderziekenhuis, el hospital de chicos." },
    { id: "h-bovenij", type: "salud", name: "BovenIJ Ziekenhuis (Noord)", address: "Statenjachtstraat 1", ll: [52.40465, 4.92192],
      note: "Hospital con guardia de emergencias en Amsterdam Noord." },
    /* Consulados en Ámsterdam y embajadas en La Haya: lista oficial de government.nl (18/11/2026). */
    { id: "cons-ar", type: "consul", name: "Argentina · Embajada (sección consular)", address: "Javastraat 20, Den Haag", ll: [52.08774, 4.30265], far: true,
      note: "Argentina no tiene consulado en Ámsterdam: pasaportes y trámites en la embajada de La Haya, a una hora en tren. Teléfono +31 70 311 84 11. Dirección de la lista oficial del gobierno de los Países Bajos." },
    { id: "cons-uy", type: "consul", name: "Uruguay · Embajada (sección consular)", address: "Mauritskade 33, Den Haag", ll: [52.08484, 4.30767], far: true, aprox: true,
      note: "Uruguay no tiene consulado en Ámsterdam: trámites en la embajada de La Haya. Teléfono +31 70 360 98 15, de la lista oficial del gobierno de los Países Bajos." },
    { id: "cons-cl", type: "consul", name: "Chile · Consulado General", address: "Herengracht 500", ll: [52.36490, 4.89321],
      note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del gobierno de los Países Bajos (18/11/2026)." },
    { id: "cons-br", type: "consul", name: "Brasil · Consulado General", address: "Strawinskylaan 481", ll: [52.33999, 4.87361],
      note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del gobierno de los Países Bajos (18/11/2026)." },
    { id: "cons-mx", type: "consul", name: "México · Embajada (sección consular)", address: "Nassauplein 28, Den Haag", ll: [52.08997, 4.30597], far: true,
      note: "México no tiene consulado en Ámsterdam: trámites en la embajada de La Haya. Teléfono +31 70 360 29 00." },
    { id: "cons-co", type: "consul", name: "Colombia · Consulado General", address: "Herengracht 444", ll: [52.36612, 4.88881],
      note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del gobierno de los Países Bajos (18/11/2026)." },
    { id: "cons-pe", type: "consul", name: "Perú · Consulado General", address: "Boelelaan 7", ll: [52.33438, 4.88640],
      note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del gobierno de los Países Bajos (18/11/2026)." },
    { id: "cons-py", type: "consul", name: "Paraguay · Consulado Honorario", address: "Haatlandhaven 1, Kampen", ll: [52.57320, 5.88364], far: true,
      note: "Consulado honorario: ayuda básica y orientación. Para pasaportes, la embajada en Bruselas (Avenue Louise 475). Datos de la lista oficial del gobierno de los Países Bajos." },
    { id: "cons-bo", type: "consul", name: "Bolivia · Embajada (sección consular)", address: "Nassauplein 2, Den Haag", ll: [52.08935, 4.30569], far: true,
      note: "Bolivia no tiene consulado en Ámsterdam: trámites en la embajada de La Haya. Teléfono +31 70 361 67 07." },
    { id: "cons-ec", type: "consul", name: "Ecuador · Consulado Honorario", address: "Strawinskylaan 1441", ll: [52.33996, 4.87498],
      note: "Consulado honorario: ayuda básica y orientación. Para pasaportes, la embajada de La Haya (Koninginnegracht 84). Datos de la lista oficial del gobierno de los Países Bajos." },
    { id: "cons-ve", type: "consul", name: "Venezuela · Embajada (sección consular)", address: "Churchillplein 5, Den Haag", ll: [52.09414, 4.28303], far: true,
      note: "Venezuela no tiene consulado en Ámsterdam: trámites en la embajada de La Haya. Teléfono +31 70 363 38 05." },
    { id: "cons-cr", type: "consul", name: "Costa Rica · Embajada (sección consular)", address: "Laan Copes van Cattenburch 46, Den Haag", ll: [52.09122, 4.30561], far: true,
      note: "Costa Rica no tiene consulado en Ámsterdam: trámites en la embajada de La Haya. Teléfono +31 70 354 07 80." },
    { id: "cons-us", type: "consul", name: "Estados Unidos · Consulado General", address: "Museumplein 19", ll: [52.35615, 4.88204],
      note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del gobierno de los Países Bajos (18/11/2026)." },
    { id: "cons-es", type: "consul", name: "España · Consulado General", address: "Frederiksplein 34", ll: [52.36035, 4.89796],
      note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del gobierno de los Países Bajos (18/11/2026)." },
    { id: "cons-it", type: "consul", name: "Italia · Embajada (sección consular)", address: "Parkstraat 28, Den Haag", ll: [52.08356, 4.30735], far: true,
      note: "Italia no tiene consulado en Ámsterdam: trámites en la embajada de La Haya. Teléfono +31 70 302 10 30." },
    { id: "cons-fr", type: "consul", name: "Francia · Consulado General", address: "Boelelaan 7", ll: [52.33438, 4.88640],
      note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en la lista oficial del gobierno de los Países Bajos (18/11/2026)." },
    { id: "t-centraal", type: "transporte", name: "Estación Central (Amsterdam Centraal)", address: "Stationsplein", ll: [52.37890, 4.90058],
      note: "La estación principal: trenes al aeropuerto y a todo el país, metro 51, 52, 53 y 54, tranvías y, atrás, los ferris gratis a Noord." },
    { id: "t-zuid", type: "transporte", name: "Station Amsterdam Zuid", address: "Zuidplein", ll: [52.33872, 4.87134],
      note: "Trenes al aeropuerto y a otras ciudades, metro 50, 51 y 52." },
    { id: "t-sloterdijk", type: "transporte", name: "Station Sloterdijk", address: "Orlyplein", ll: [52.38903, 4.83811],
      note: "Trenes a Haarlem y la costa, y salida de muchos micros de larga distancia." },
    { id: "t-amstel", type: "transporte", name: "Station Amstel", address: "Julianaplein", ll: [52.34647, 4.91756],
      note: "Trenes, metro y colectivos regionales." },
    { id: "t-pta", type: "transporte", name: "Terminal de cruceros (PTA)", address: "Piet Heinkade 27", ll: [52.37781, 4.91533],
      note: "Donde llegan los cruceros, a un paseo de la estación central." }
  ],
  /* Canales a distancia y búsquedas rápidas "cerca mío" (abren Google Maps). */
  channels: [
    { icon: "💊", name: "Farmacias de guardia", desc: "Las farmacias (apotheek) abiertas, en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=apotheek+Amsterdam" },
    { icon: "👮", name: "Policía sin urgencia", desc: "Para denunciar un robo: 0900 8844.", href: "https://www.politie.nl/en" },
    { icon: "📞", name: "I amsterdam", desc: "Información turística oficial.", href: "https://www.iamsterdam.com/en" },
    { icon: "🛂", name: "Encontrar mi consulado", desc: "Busca consulados y embajadas en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=consulate+Amsterdam" }
  ],
  nearby: [["💊", "Farmacia", "Apotheek"], ["🏧", "Cajero", "Geldautomaat"], ["🛒", "Supermercado", "Supermarkt"], ["🧺", "Lavandería", "Wasserette"], ["🧳", "Guardaequipaje", "Luggage storage"], ["🚲", "Alquiler de bicis", "Fietsverhuur"], ["☕", "Café", "Café"], ["👮", "Comisaría", "Politiebureau"]],

  barrios: {}
};
