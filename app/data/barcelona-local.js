/* Lo que es propio de Barcelona y la guía usa en Recién llegado, Tu vuelo, Práctica, Hoy y el aviso de bienvenida (tarjeta #193).
   Mismo formato que data/madrid-local.js. Los textos van en castellano: los traduce i18n/traductor.js (lista i18n/fuentes/barcelona.txt).
   Todas las direcciones web se abrieron y revisaron el 18/11/2026. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.barcelona;
  if (!X) return;
  X.local = {
    mapa: "Barcelona",                           // se agrega a las búsquedas de Google Maps
    coordCentro: [41.387, 2.170],                // centro del mapa y del clima (Plaça de Catalunya)
    limitesMapa: [[41.355, 2.12], [41.425, 2.21]],  // lo que se ve en el mapa al abrirlo
    zonasBase: [41, 2],                          // grados enteros para data/barcelona-zones.js
    fuera: "Fuera de Barcelona",
    pasaporte: "Pasaporte barcelonés",
    pasaporteSub: "Marcá los lugares que conocés y ganá sellos: Gaudí, tapas, vermut, playa, explorador de barrios…",
    trasnoche: "Trasnoche barcelonesa",
    interesNoche: "🍸 Bares y noche",
    metro: "Metro",                              // igual al título del bloque de transporte donde van las líneas
    sinEstacion: "Sin estación cerca: mejor a pie o en colectivo",
    buscarEj: "¿Qué buscás? Gaudí, tapas, playa, Gràcia…",
    rutaEj: "Ej.: Sagrada Família, Park Güell, Barceloneta…",
    rutaEj2: "Ej.: Sagrada Família, Plaça de Catalunya, Sants…",
    aerolineasEj: "Ej.: Vueling, Iberia, Aerolíneas Argentinas…",
    atajos: [["Gaudí", { q: "gaudí" }], ["Tapas", { q: "tapas" }]],
    moneda: { codigo: "EUR", nombre: "Euro", plural: "euros", aria: "Monto en euros", formato: "es-ES" },
    centro: { q: "Plaça de Catalunya, Barcelona", label: "Hasta el centro (Plaça de Catalunya)" },
    /* Recién llegado */
    aeropuertos: [
      { label: "Desde el aeropuerto de El Prat, terminal T1", q: "Aeropuerto Josep Tarradellas Barcelona-El Prat Terminal 1" },
      { label: "Desde el aeropuerto de El Prat, terminal T2", q: "Aeropuerto Josep Tarradellas Barcelona-El Prat Terminal 2" }
    ],
    uber: true,
    traslados: [   // [ícono, nombre, web, aclaración]
      ["🚌", "El Prat: colectivos al centro (Aerobús)", "https://www.aena.es/es/josep-tarradellas-barcelona-el-prat/como-llegar/autobus.html", "Sitio oficial de Aena: Aerobús y colectivos"],
      ["🚇", "El Prat: metro L9 Sud", "https://www.aena.es/es/josep-tarradellas-barcelona-el-prat/como-llegar/metro.html", "Sitio oficial de Aena"],
      ["🚆", "El Prat: tren Rodalies (T2)", "https://www.aena.es/es/josep-tarradellas-barcelona-el-prat/como-llegar/tren.html", "Sitio oficial de Aena"],
      ["🎫", "Boleto del metro del aeropuerto", "https://www.tmb.cat/es/tarifas-metro-bus-barcelona/billete-aeropuerto", "Sitio oficial de TMB"]
    ],
    aeropuertoTips: ["Fijate en tu pasaje de qué terminal salís o llegás: la T1 y la T2 están lejos y se unen con un colectivo gratis.",
      "El Aerobús es lo más simple para llegar al centro: va directo a la Plaça d'Espanya y la Plaça de Catalunya y se paga con tarjeta al subir.",
      "El metro L9 Sud necesita el boleto especial del aeropuerto o la tarjeta Hola Barcelona: la T-casual no sirve ahí.",
      "Desde la T2, el tren Rodalies va a Sants y Passeig de Gràcia, y acepta la T-casual.",
      "Los taxis cobran con taxímetro más un recargo por salir del aeropuerto. Usá la fila oficial."],
    chips: [
      ["📱", "Movistar", "https://www.movistar.es/", "Chip prepago"],
      ["📱", "Vodafone", "https://www.vodafone.es/", "Chip prepago"],
      ["📱", "Orange", "https://www.orange.es/", "Chip prepago"],
      ["📱", "Digi", "https://www.digimobil.es/", "Chip prepago barato, se compra en locutorios y kioscos"]
    ],
    chipsBuscar: "tienda Movistar Vodafone Orange Digi",
    internetTips: ["En España, para activar un chip te piden el pasaporte.",
      "Si tu celular acepta eSIM, podés activarla antes de viajar.",
      "Muchos bares y museos tienen Wi-Fi gratis."],
    plataTips: ["Con tarjeta podés pagar casi todo, también sin contacto.",
      "Muchos cajeros cobran una comisión a las tarjetas del exterior: la pantalla te la avisa antes. Probá en otro banco si es alta.",
      "Si el cajero o el lector de tarjetas te ofrece cobrarte en tu moneda, elegí pagar en euros."],
    transporte: {
      t: "Prepará el transporte", s: "T-casual, Hola Barcelona y cómo moverte",
      acts: [
        ["🎫", "Hola Barcelona", "https://www.holabarcelona.com/es", "La tarjeta para turistas, en su web oficial"],
        ["🎫", "T-casual (10 viajes)", "https://www.tmb.cat/es/tarifas-metro-bus-barcelona/sencillos-e-integrados/t-casual", "Sitio oficial de TMB"],
        ["🚇", "Líneas de metro", "#/info/moverse", "Recorridos y consejos"]
      ],
      tips: ["Si vas a viajar mucho y llegás o te vas en metro desde el aeropuerto, te conviene la Hola Barcelona (de 2 a 5 días). Si no, la T-casual de 10 viajes.",
        "En los colectivos podés pagar el boleto sencillo apoyando la tarjeta del banco; en el metro, solo en algunos accesos."]
    },
    moverseSub: "Metro, colectivos, taxis",
    /* Alquiler de auto (tarjeta #185): agencias con oficinas en la ciudad y en el aeropuerto. Las mismas webs de España revisadas el 17/11/2026. */
    autos: {
      intro: "Para moverte por Barcelona no hace falta: el transporte llega a todos lados y estacionar es difícil y caro. Sirve para salir de la ciudad, por ejemplo a la Costa Brava, a Montserrat o al Penedès.",
      acts: [
        ["🚗", "Europcar", "https://www.europcar.es/es-es", "Web oficial para alquilar"],
        ["🚗", "Hertz", "https://www.hertz.es/", "Web oficial para alquilar"],
        ["🚗", "Avis", "https://www.avis.es/", "Web oficial para alquilar"],
        ["🚗", "Sixt", "https://www.sixt.es/", "Web oficial para alquilar"],
        ["🚗", "Enterprise", "https://www.enterprise.es/", "Web oficial para alquilar"],
        ["🚗", "Centauro", "https://www.centauro.net/", "Web oficial para alquilar"]
      ],
      tips: ["Para alquilar te piden licencia de conducir vigente, pasaporte y una tarjeta de crédito a nombre de quien maneja, para la garantía.",
"Si tu licencia no es de la Unión Europea, llevá también el Permiso Internacional de Conducir: algunas agencias y la policía lo piden.",
"Barcelona y las ciudades de alrededor son zona de bajas emisiones (dentro de las Rondas): los días hábiles solo pueden entrar autos con etiqueta ambiental. Los de alquiler la traen; igual, conviene retirarlo en el aeropuerto o en Sants.",
"Muchas autopistas de España son gratis (autovías); las de peaje se pagan con tarjeta en las cabinas.",
"Antes de salir, revisá el auto y sacale fotos: si tiene algún golpe, que quede anotado en el contrato."]
    },
    /* Apps útiles. Número del App Store y nombre en Google Play revisados uno por uno el 18/11/2026. */
    apps: [
      ["🚇", "Para moverse", [
        ["TMB App", "La app oficial del metro y los colectivos: recorridos, cuánto falta y avisos.", 387847254, "com.geomobile.tmbmobile"],
        ["Rodalies", "La app de los trenes de cercanías, que van al aeropuerto y a los pueblos de alrededor.", 6788656454, "com.renfe.renferodalies"],
        ["Moovit", "Recorridos en metro, colectivo y tren, con horarios en vivo.", 498477945, "com.tranzmate"],
        ["Google Maps", "Mapas y recorridos en transporte y a pie.", 585027354, "com.google.android.apps.maps"],
        ["FREENOW", "Taxis oficiales, con precio estimado.", 357852748, "taxi.android.client"],
        ["Uber", "En Barcelona, pide taxis oficiales. Ves el precio antes de pedir.", 368677368, "com.ubercab"],
        ["Cabify", "Taxis y autos con chofer, con el precio cerrado antes de pedir.", 476087442, "com.cabify.rider"],
        ["Bolt", "Autos con chofer, con precio estimado.", 675033630, "ee.mtakso.client"]
      ]],
      ["🚆", "Para viajar fuera de Barcelona", [
        ["Renfe", "Trenes rápidos y regionales a toda España: horarios, boletos y demoras.", 1544224672, "com.renfeviajeros.ticket"],
        ["Iryo", "Trenes rápidos a Madrid, Valencia, Sevilla, Málaga y otras ciudades.", 6444018990, "eu.iryo.app.b2c"],
        ["OUIGO España", "Trenes rápidos y baratos a las grandes ciudades de España.", 1540252023, "com.sncf.ouigo.espana"]
      ]],
      ["🍔", "Para comer", [
        ["TheFork", "Reservas en restaurantes, a veces con descuento.", 424850908, "com.lafourchette.lafourchette"],
        ["Glovo", "Comida y compras a domicilio.", 951812684, "com.glovo"],
        ["Just Eat", "Comida a domicilio.", 566347057, "com.justeat.app.es"],
        ["Uber Eats", "Comida a domicilio.", 1058959277, "com.ubercab.eats"]
      ]],
      ["💬", "Para comunicarte", [
        ["WhatsApp", "La más usada para escribir y llamar.", 310633997, "com.whatsapp"]
      ]]
    ],
    /* Paros y cortes: dónde fijarse antes de salir. Revisadas el 18/11/2026. */
    avisosLinks: [
      ["🚇", "TMB: estado del metro", "Líneas cortadas, obras y paros (huelga), en vivo.", "https://www.tmb.cat/es/transporte-barcelona/estado-red-metro"],
      ["🚌", "TMB: estado de los colectivos", "Desvíos de líneas por obras, marchas y eventos.", "https://www.tmb.cat/es/transporte-barcelona/estado-red-bus"],
      ["🚆", "Rodalies: avisos", "Demoras y cortes en los trenes de cercanías, también al aeropuerto.", "https://rodalies.gencat.cat/es/inici/"],
      ["📰", "Noticias de hoy", "Paros (huelga) y manifestaciones en las noticias del día.", "https://news.google.com/search?q=Barcelona%20huelga%20OR%20manifestaci%C3%B3n%20when%3A1d&hl=es&gl=ES&ceid=ES%3Aes"]
    ],
    /* Hoy: el archivo de eventos que arma herramientas/armar-hoy-barcelona.ps1 con la agenda cultural oficial del Ayuntamiento
       (opendata-ajuntament.barcelona.cat), y agendas para buscar más planes. */
    hoy: "data/hoy-barcelona.json",
    hoyNota: "⭐ Destacados de la semana. 📅 Agenda cultural oficial del Ayuntamiento de Barcelona (los títulos vienen en catalán). Confirmá en su página antes de ir.",
    agendas: [
      ["📰", "Ayuntamiento de Barcelona: qué hacer", "https://www.barcelona.cat/es/que-hacer-en-bcn"],
      ["🎭", "Turismo de Barcelona: la web oficial", "https://www.barcelonaturisme.com/wv3/es/"]
    ],
    /* Tu vuelo: pantallas de check-in (las mismas que se revisaron para las otras ciudades). */
    aerolineas: [
    ["Vueling", "https://tickets.vueling.com/manage?event=checkin&culture=en-GB"],
    ["Iberia", "https://www.iberia.com/es/autocheckin-online/"],
    ["Air Europa", "https://www.aireuropa.com/es/es/mytrips/checkin"],
    ["Aerolíneas Argentinas", "https://www.aerolineas.com.ar/?activeTab=checkIn"],
    ["LATAM", "https://www.latamairlines.com/es/es/check-in"],
    ["Avianca", "https://www.avianca.com/es/mi-reserva/servicios/check-in-online"],
    ["Copa Airlines", "https://checkin.copaair.com/"],
    ["Ryanair", "https://www.ryanair.com/gb/en/lp/check-in"],
    ["Wizz Air", "https://www.wizzair.com/en-gb/help-centre/check-in-and-boarding"],
    ["ITA Airways", "https://www.ita-airways.com/it/en/book-and-prepare/travel-information/check-in-information"],
    ["Air France", "https://wwws.airfrance.fr/check-in"],
    ["Lufthansa", "https://www.lufthansa.com/de/en/online-check-in"],
    ["KLM", "https://www.klm.com/check-in"],
    ["British Airways", "https://www.britishairways.com/travel/olcilandingpageauthreq/public/en_gb"],
    ["TAP Air Portugal", "https://www.flytap.com/en-us/check-in-information"],
    ["Turkish Airlines", "https://www.turkishairlines.com/en-int/flights/manage-booking/"],
    ["Emirates", "https://www.emirates.com/english/manage-booking/online-check-in/"],
    ["Qatar Airways", "https://cki.qatarairways.com/cki/dashboard"],
    ["United", "https://www.united.com/en/us/checkin"],
    ["Delta", "https://oci.delta.com/index.html"],
    ["American Airlines", "https://www.aa.com/check-in"]
    ],
    vueloAeropuertos: "Barcelona tiene un aeropuerto, El Prat, con dos terminales separadas: la T1, la más grande, y la T2, que usan sobre todo las aerolíneas de bajo costo. Se unen con un colectivo gratis: fijate bien de cuál sale tu vuelo.",
    /* Frases para defenderte: todos te entienden en castellano, pero un par de palabras en catalán siempre caen bien. La frase queda en catalán y abajo se explica. */
    idioma: "ca",
    frases: [
    ["Bon dia!", "Saludo para entrar a cualquier negocio (a la tarde, \"Bona tarda\")"],
    ["Gràcies!", "Para agradecer"],
    ["Si us plau.", "Por favor"],
    ["Adéu!", "Para despedirte"],
    ["Em cobra, si us plau?", "Para pedir la cuenta en un bar o restaurante"],
    ["Puc pagar amb targeta?", "Antes de pedir, por si solo aceptan efectivo"],
    ["Quant costa?", "Para preguntar el precio"],
    ["On és el lavabo?", "Para encontrar el baño"],
    ["Una taula per a dos, si us plau.", "Al llegar a un restaurante"],
    ["Una canya, si us plau.", "Para pedir una cerveza tirada chica"],
    ["Necessito un metge.", "En una urgencia"],
    ["Parla castellà?", "Para preguntar si te pueden atender en castellano"]
    ],
    /* Aviso de bienvenida: qué hay en Info */
    aviso: ["🛬 Cómo salir del aeropuerto y llegar a tu alojamiento", "🎫 Qué boleto conviene: T-casual u Hola Barcelona", "⚠️ Cómo cuidarte de los carteristas y las estafas más comunes",
      "🗣️ Palabras en catalán que vas a ver en los carteles", "🆘 Teléfonos de emergencia, para tocar y llamar"]
  };
})();
