/* Lo que es propio de Ámsterdam y la guía usa en Recién llegado, Tu vuelo, Práctica, Hoy y el aviso de bienvenida (tarjeta #199).
   Mismo formato que data/barcelona-local.js. Los textos van en castellano: los traduce i18n/traductor.js (lista i18n/fuentes/amsterdam.txt).
   Todas las direcciones web se abrieron y revisaron el 18/11/2026. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.amsterdam;
  if (!X) return;
  X.local = {
    mapa: "Amsterdam",                           // se agrega a las búsquedas de Google Maps
    coordCentro: [52.373, 4.893],                // centro del mapa y del clima (plaza Dam)
    limitesMapa: [[52.345, 4.855], [52.395, 4.935]],  // lo que se ve en el mapa al abrirlo
    zonasBase: [52, 4],                          // grados enteros para data/amsterdam-zones.js
    fuera: "Fuera de Ámsterdam",
    pasaporte: "Pasaporte de Ámsterdam",
    pasaporteSub: "Marcá los lugares que conocés y ganá sellos: museos, canales, panqueques, molinos, explorador de barrios…",
    trasnoche: "Trasnoche en Ámsterdam",
    interesNoche: "🍸 Bares y noche",
    metro: "Metro",                              // igual al título del bloque de transporte donde van las líneas
    sinEstacion: "Sin estación de metro cerca: mejor a pie, en tranvía o en bici",
    buscarEj: "¿Qué buscás? Van Gogh, canales, panqueques, Jordaan…",
    rutaEj: "Ej.: Rijksmuseum, Casa de Ana Frank, Vondelpark…",
    rutaEj2: "Ej.: plaza Dam, Museumplein, estación central…",
    aerolineasEj: "Ej.: KLM, Iberia, Aerolíneas Argentinas…",
    atajos: [["Canales", { q: "canales" }], ["Museos", { q: "museo" }]],
    moneda: { codigo: "EUR", nombre: "Euro", plural: "euros", aria: "Monto en euros", formato: "nl-NL" },
    centro: { q: "Dam, Amsterdam", label: "Hasta el centro (plaza Dam)" },
    /* Recién llegado */
    aeropuertos: [
      { label: "Desde el aeropuerto de Schiphol", q: "Amsterdam Airport Schiphol" }
    ],
    uber: true,
    traslados: [   // [ícono, nombre, web, aclaración]
      ["🚆", "Schiphol: tren a la estación central", "https://www.schiphol.nl/en/from-to-schiphol/by-public-transport/train/", "Sitio oficial del aeropuerto"],
      ["🚌", "Schiphol: colectivo 397 (Amsterdam Airport Express)", "https://www.schiphol.nl/en/from-to-schiphol/by-public-transport/bus/", "Sitio oficial del aeropuerto"],
      ["🎫", "Amsterdam Travel Ticket", "https://www.gvb.nl/en/travel-products/tourists/amsterdam-travel-ticket", "Sitio oficial de GVB"],
      ["💳", "Cómo pagar con la tarjeta del banco (OVpay)", "https://www.ovpay.nl/en", "Sitio oficial de OVpay"]
    ],
    aeropuertoTips: ["La estación de tren está justo debajo del hall de llegadas: el tren a la estación central tarda unos 15 minutos y sale muy seguido.",
      "Podés pagar el tren con tu tarjeta del banco sin contacto: pasala por los lectores amarillos que están arriba de las escaleras del hall, y otra vez al llegar.",
      "Cada persona necesita su propia tarjeta o celular para pasar.",
      "Si te alojás cerca del Museumplein o el Leidseplein, el colectivo 397 te deja más cerca.",
      "Los taxis cobran con taxímetro y salen caros. Usá la fila oficial."],
    chips: [
      ["📱", "KPN", "https://www.kpn.com/", "Chip prepago"],
      ["📱", "Vodafone", "https://www.vodafone.nl/", "Chip prepago"],
      ["📱", "Odido", "https://www.odido.nl/", "Chip prepago (antes T-Mobile)"],
      ["📱", "Lebara", "https://www.lebara.nl/", "Chip prepago barato, se compra en supermercados y kioscos"]
    ],
    chipsBuscar: "tienda KPN Vodafone Odido",
    internetTips: ["Si tu celular acepta eSIM, podés activarla antes de viajar.",
      "Los chips prepagos se compran en las tiendas de las compañías y en muchos supermercados.",
      "Muchos bares, museos y trenes tienen Wi-Fi gratis."],
    plataTips: ["Con tarjeta podés pagar casi todo, también sin contacto; muchos lugares no aceptan efectivo.",
      "Algunos supermercados y comercios chicos solo aceptan tarjetas de débito: llevá también una de débito.",
      "Si el cajero o el lector de tarjetas te ofrece cobrarte en tu moneda, elegí pagar en euros."],
    transporte: {
      t: "Prepará el transporte", s: "Tarjeta del banco, billetes de GVB y cómo moverte",
      acts: [
        ["🎫", "Billetes para turistas", "https://www.gvb.nl/en/travel-products/tourists", "Sitio oficial de GVB"],
        ["💳", "Viajar con la tarjeta del banco", "https://www.ovpay.nl/en", "Sitio oficial de OVpay"],
        ["🚇", "Líneas de metro", "#/info/moverse", "Recorridos y consejos"]
      ],
      tips: ["Si vas a viajar poco, alcanza con la tarjeta del banco: la pasás al subir y al bajar.",
        "Si vas a viajar mucho, un billete de GVB de 1 a 7 días, o el Amsterdam Travel Ticket si también vas y volvés del aeropuerto."]
    },
    moverseSub: "Tranvía, metro, ferris y bicis",
    /* Alquiler de auto: agencias con oficinas en la ciudad y en el aeropuerto. Webs revisadas el 18/11/2026. */
    autos: {
      intro: "Para moverte por Ámsterdam no sirve: el centro es de bicis y tranvías, estacionar es carísimo y muchas calles son angostas. Sirve para salir, por ejemplo a los molinos, a Giethoorn o al campo.",
      acts: [
        ["🚗", "Europcar", "https://www.europcar.nl/", "Web oficial para alquilar"],
        ["🚗", "Hertz", "https://www.hertz.nl/", "Web oficial para alquilar"],
        ["🚗", "Avis", "https://www.avis.nl/", "Web oficial para alquilar"],
        ["🚗", "Sixt", "https://www.sixt.nl/", "Web oficial para alquilar"]
      ],
      tips: ["Para alquilar te piden licencia de conducir vigente, pasaporte y una tarjeta de crédito a nombre de quien maneja, para la garantía.",
"Si tu licencia no es de la Unión Europea, llevá también el Permiso Internacional de Conducir.",
"Si venís en auto a la ciudad, dejalo en un estacionamiento P+R de las afueras y seguí en transporte: es mucho más barato.",
"Ámsterdam tiene zona ambiental: los autos más viejos y contaminantes no pueden entrar. Los de alquiler suelen cumplir.",
"Las bicis tienen prioridad en muchos cruces y aparecen por todos lados: mirá siempre los espejos antes de doblar.",
"Antes de salir, revisá el auto y sacale fotos: si tiene algún golpe, que quede anotado en el contrato."]
    },
    /* Apps útiles. Número del App Store y nombre en Google Play revisados uno por uno el 18/11/2026. */
    apps: [
      ["🚋", "Para moverse", [
        ["GVB", "La app oficial del tranvía, el metro, los colectivos y los ferris: recorridos, salidas en vivo y billetes.", 1544439867, "nl.gvb.reizigersapp"],
        ["NS", "La app de los trenes del país: horarios, demoras y boletos.", 370362301, "nl.ns.android.activity"],
        ["9292", "Recorridos en todo el transporte de los Países Bajos, con horarios en vivo.", 556557690, "nl.negentwee"],
        ["Google Maps", "Mapas y recorridos en transporte, a pie y en bici.", 585027354, "com.google.android.apps.maps"],
        ["Citymapper", "Recorridos en transporte con avisos de dónde bajar.", 469463298, "com.citymapper.app.release"],
        ["Uber", "Autos con chofer. Ves el precio antes de pedir.", 368677368, "com.ubercab"],
        ["Bolt", "Autos con chofer, con precio estimado.", 675033630, "ee.mtakso.client"],
        ["Donkey Republic", "Bicis de alquiler que se desbloquean con el celular.", 933526449, "com.donkeyrepublic.bike.android"]
      ]],
      ["🍔", "Para comer", [
        ["TheFork", "Reservas en restaurantes, a veces con descuento.", 424850908, "com.lafourchette.lafourchette"],
        ["Thuisbezorgd", "La app de comida a domicilio más usada del país.", 329472759, "com.takeaway.android"],
        ["Uber Eats", "Comida a domicilio.", 1058959277, "com.ubercab.eats"],
        ["Too Good To Go", "Comida que sobra en panaderías y restaurantes, a precio bajo.", 1060683933, "com.app.tgtg"]
      ]],
      ["💬", "Para comunicarte", [
        ["WhatsApp", "La más usada para escribir y llamar.", 310633997, "com.whatsapp"]
      ]]
    ],
    /* Paros y cortes: dónde fijarse antes de salir. Revisadas el 18/11/2026. */
    avisosLinks: [
      ["🚋", "GVB: desvíos y cortes", "Tranvías, metro y colectivos cortados por obras o eventos, en vivo.", "https://www.gvb.nl/en/travel-information/disruptions-diversions"],
      ["🚆", "NS: trenes", "Demoras y obras en los trenes, también al aeropuerto.", "https://www.ns.nl/en"],
      ["📰", "Noticias de hoy", "Paros (staking) y manifestaciones en las noticias del día.", "https://news.google.com/search?q=Amsterdam%20staking%20OR%20demonstratie%20when%3A1d&hl=nl&gl=NL&ceid=NL%3Anl"]
    ],
    /* Hoy: Ámsterdam no tiene una agenda oficial abierta y actualizada (la de api.data.amsterdam.nl termina en 2022).
       Van la agenda fija de data/amsterdam-hoy.js y agendas para buscar más planes. */
    hoyNota: "⭐ Destacados de la semana. La agenda completa de la ciudad está en I amsterdam: confirmá en su página antes de ir.",
    agendas: [
      ["🎭", "I amsterdam: qué hacer (agenda oficial)", "https://www.iamsterdam.com/en/whats-on"],
      ["📰", "Municipalidad de Ámsterdam", "https://www.amsterdam.nl/en/"]
    ],
    /* Tu vuelo: pantallas de check-in (las mismas que se revisaron para las otras ciudades). */
    aerolineas: [
    ["KLM", "https://www.klm.com/check-in"],
    ["Iberia", "https://www.iberia.com/es/autocheckin-online/"],
    ["Air Europa", "https://www.aireuropa.com/es/es/mytrips/checkin"],
    ["Aerolíneas Argentinas", "https://www.aerolineas.com.ar/?activeTab=checkIn"],
    ["LATAM", "https://www.latamairlines.com/es/es/check-in"],
    ["Avianca", "https://www.avianca.com/es/mi-reserva/servicios/check-in-online"],
    ["Copa Airlines", "https://checkin.copaair.com/"],
    ["Vueling", "https://tickets.vueling.com/manage?event=checkin&culture=en-GB"],
    ["Ryanair", "https://www.ryanair.com/gb/en/lp/check-in"],
    ["Wizz Air", "https://www.wizzair.com/en-gb/help-centre/check-in-and-boarding"],
    ["ITA Airways", "https://www.ita-airways.com/it/en/book-and-prepare/travel-information/check-in-information"],
    ["Air France", "https://wwws.airfrance.fr/check-in"],
    ["Lufthansa", "https://www.lufthansa.com/de/en/online-check-in"],
    ["British Airways", "https://www.britishairways.com/travel/olcilandingpageauthreq/public/en_gb"],
    ["TAP Air Portugal", "https://www.flytap.com/en-us/check-in-information"],
    ["Turkish Airlines", "https://www.turkishairlines.com/en-int/flights/manage-booking/"],
    ["Emirates", "https://www.emirates.com/english/manage-booking/online-check-in/"],
    ["Qatar Airways", "https://cki.qatarairways.com/cki/dashboard"],
    ["United", "https://www.united.com/en/us/checkin"],
    ["Delta", "https://oci.delta.com/index.html"],
    ["American Airlines", "https://www.aa.com/check-in"]
    ],
    vueloAeropuertos: "Ámsterdam tiene un aeropuerto, Schiphol, con una sola terminal grande y la estación de tren justo abajo. Es el aeropuerto de KLM: muchos vuelos desde Sudamérica llegan directo o con una escala.",
    /* Frases para defenderte: casi todos hablan inglés, pero un par de palabras en neerlandés siempre caen bien. La frase queda en neerlandés y abajo se explica. */
    idioma: "nl",
    frases: [
    ["Goedemorgen!", "Buen día (a la tarde, \"Goedemiddag\")"],
    ["Hallo!", "Hola, para cualquier momento"],
    ["Dank je wel!", "Muchas gracias"],
    ["Alstublieft.", "Por favor, y también \"acá tiene\" al dar algo"],
    ["Dag!", "Chau"],
    ["Mag ik de rekening?", "Para pedir la cuenta"],
    ["Kan ik met creditcard betalen?", "Antes de pedir, por si solo aceptan débito"],
    ["Hoeveel kost het?", "Para preguntar el precio"],
    ["Waar is het toilet?", "Para encontrar el baño"],
    ["Een biertje, alstublieft.", "Para pedir una cerveza"],
    ["Ik heb een dokter nodig.", "En una urgencia"],
    ["Spreekt u Engels?", "Para preguntar si te pueden atender en inglés"]
    ],
    /* Aviso de bienvenida: qué hay en Info */
    aviso: ["🛬 Cómo salir del aeropuerto y llegar a tu alojamiento", "💳 Cómo pagar el transporte con la tarjeta del banco", "🚲 Cómo cuidarte de las bicis y los carteristas",
      "🏮 Las reglas del centro y del Barrio Rojo", "🆘 Teléfonos de emergencia, para tocar y llamar"]
  };
})();
