/* Lo que es propio de Tokio y la guía usa en Recién llegado, Tu vuelo, Práctica, Hoy y el aviso de bienvenida (tarjeta #216).
   Mismo formato que data/lisboa-local.js. Los textos van en castellano: los traduce i18n/traductor.js (lista i18n/fuentes/tokio.txt).
   Todas las direcciones web se abrieron y revisaron el 19/11/2026 (algunas bloquean a los robots, pero abren en el navegador). */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.tokio;
  if (!X) return;
  X.local = {
    mapa: "Tokio",                               // se agrega a las búsquedas de Google Maps
    coordCentro: [35.68, 139.76],                // centro del mapa y del clima (la estación de Tokio)
    limitesMapa: [[35.62, 139.68], [35.73, 139.82]],  // lo que se ve en el mapa al abrirlo
    zonasBase: [35, 139],                        // grados enteros para data/tokio-zones.js
    fuera: "Fuera de Tokio",
    pasaporte: "Pasaporte de Tokio",
    pasaporteSub: "Marcá los lugares que conocés y ganá sellos: templos, ramen, sushi, onsen, animé, explorador de barrios…",
    trasnoche: "Trasnoche en Tokio",
    interesNoche: "🏮 Yokocho y noche",
    metro: "Metro de Tokio",                     // igual al título del bloque de transporte donde van las líneas
    sinEstacion: "Sin estación de metro cerca: mejor en colectivo, taxi o app",
    buscarEj: "¿Qué buscás? Ramen, templos, animé, Monte Fuji…",
    rutaEj: "Ej.: Senso-ji, Shibuya Crossing, Meiji Jingu…",
    rutaEj2: "Ej.: Asakusa, Shibuya, Shinjuku…",
    aerolineasEj: "Ej.: JAL, ANA, Aeroméxico…",
    atajos: [["Ramen", { q: "ramen" }], ["Animé", { q: "anime" }]],
    moneda: { codigo: "JPY", nombre: "Yen", plural: "yenes", aria: "Monto en yenes", formato: "ja-JP" },
    centro: { q: "Tokyo Station", label: "Hasta el centro (estación de Tokio)" },
    /* Recién llegado */
    aeropuertos: [
      { label: "Desde el aeropuerto de Haneda", q: "Haneda Airport, Tokyo" },
      { label: "Desde el aeropuerto de Narita", q: "Narita International Airport" }
    ],
    uber: true,
    traslados: [   // [ícono, nombre, web, aclaración]
      ["✈️", "Aeropuerto de Haneda", "https://tokyo-haneda.com/en/", "Sitio oficial del aeropuerto"],
      ["✈️", "Aeropuerto de Narita", "https://www.narita-airport.jp/en/", "Sitio oficial del aeropuerto"],
      ["🚄", "Keisei Skyliner", "https://www.keisei.co.jp/keisei/tetudou/skyliner/us/", "De Narita a Ueno"],
      ["🚆", "JR East", "https://www.jreast.co.jp/en/multi/", "Narita Express, Suica y trenes"]
    ],
    aeropuertoTips: ["Haneda está más cerca: el tren Keikyu y el Tokyo Monorail aceptan Suica.",
      "Desde Narita, el Keisei Skyliner llega rápido a Ueno y el Narita Express de JR a Tokio, Shibuya y Shinjuku.",
      "Si vas con mucho equipaje, los micros del aeropuerto te dejan en las estaciones y los hoteles grandes.",
      "En el aeropuerto podés comprar la Welcome Suica, alquilar un wifi de bolsillo y mandar las valijas al hotel."],
    chips: [
      ["📱", "b-mobile Visitor SIM", "https://www.bmobile.ne.jp/english/", "Chip prepago para turistas"],
      ["📱", "IIJmio", "https://www.iijmio.jp/", "Chips y eSIM prepagos"],
      ["📱", "docomo", "https://www.docomo.ne.jp/english/", "Compañía de celular"],
      ["📱", "SoftBank", "https://www.softbank.jp/en/", "Compañía de celular"]
    ],
    chipsBuscar: "pocket wifi SIM rental airport",
    internetTips: ["Lo más cómodo es una eSIM de datos que activás antes de viajar.",
      "En los aeropuertos hay mostradores para alquilar un router wifi de bolsillo, ideal si viajan varios.",
      "Muchas estaciones, konbini y cafés tienen wifi gratis, pero es mejor no depender de eso."],
    plataTips: ["Llevá siempre algo de efectivo: muchos lugares chicos, templos y puestos no aceptan tarjeta.",
      "Los cajeros de 7-Eleven y del correo aceptan tarjetas extranjeras.",
      "Si el cajero o el lector de tarjetas te ofrece cobrarte en tu moneda, elegí pagar en yenes."],
    transporte: {
      t: "Prepará el transporte", s: "Suica, tarjeta del banco y pase de metro",
      acts: [
        ["🚇", "Tokyo Metro", "https://www.tokyometro.jp/en/", "Sitio oficial del metro"],
        ["🚇", "Toei", "https://www.kotsu.metro.tokyo.jp/eng/", "Metro y colectivos de la ciudad"],
        ["🎫", "Tokyo Subway Ticket", "https://www.tokyometro.jp/en/ticket/travel/index.html", "Pase de 24, 48 o 72 horas"],
        ["🚇", "Líneas del metro", "#/info/moverse", "Recorridos y consejos"]
      ],
      tips: ["Con una Suica (o la Welcome Suica) te movés en metro, trenes de JR y colectivos sin pensar en boletos.",
        "En el metro también podés pagar apoyando la tarjeta del banco sin contacto, pero no en los trenes de JR."]
    },
    moverseSub: "Metro, la Yamanote, trenes bala y aeropuertos",
    /* Alquiler de auto: agencias con oficinas en la ciudad y en los aeropuertos. Webs revisadas el 19/11/2026. */
    autos: {
      intro: "Para moverte por Tokio no conviene: el transporte es excelente y estacionar es caro y difícil. Sirve para salir, por ejemplo a la zona del Fuji, Hakone o Nikko.",
      acts: [
        ["🚗", "Toyota Rent a Car", "https://rent.toyota.co.jp/eng/", "Web oficial para alquilar"],
        ["🚗", "Nippon Rent-A-Car", "https://www.nipponrentacar.co.jp/english/", "Web oficial para alquilar"],
        ["🚗", "ORIX Rent-A-Car", "https://car.orix.co.jp/eng/", "Web oficial para alquilar"]
      ],
      tips: ["En Japón se maneja por la izquierda.",
"Solo vale el Permiso Internacional de Conducir de la Convención de Ginebra de 1949: algunos países no lo emiten, así que consultá antes de viajar.",
"Las autopistas tienen peaje: pedí en la agencia una tarjeta ETC para pasar sin frenar.",
"Los carteles de las rutas principales están también en inglés.",
"Antes de salir, revisá el auto y sacale fotos: si tiene algún golpe, que quede anotado en el contrato."]
    },
    /* Apps útiles. Número del App Store y nombre en Google Play revisados uno por uno el 19/11/2026. */
    apps: [
      ["🚇", "Para moverse", [
        ["Google Maps", "Qué tren o metro tomar, con horarios y andenes.", 585027354, "com.google.android.apps.maps"],
        ["Japan Travel by NAVITIME", "Recorridos en transporte y pases de tren para turistas.", 686373726, "com.navitime.inbound.walk"],
        ["GO", "Para pedir taxis desde el celular.", 1254341709, "com.dena.automotive.taxibell"],
        ["Uber", "Taxis y autos con chofer.", 368677368, "com.ubercab"]
      ]],
      ["🛟", "Para estar tranquilo", [
        ["Safety tips", "La app oficial con alertas de terremotos, tifones y otras emergencias, en varios idiomas.", 858357174, "jp.co.rcsc.safetyTips.android"],
        ["Google Translate", "Traduce carteles y menús con la cámara.", 414706506, "com.google.android.apps.translate"]
      ]],
      ["💬", "Para comunicarte", [
        ["LINE", "La app de mensajes que se usa en Japón.", 443904275, "jp.naver.line.android"]
      ]]
    ],
    /* Paros y cortes: dónde fijarse antes de salir. Revisadas el 19/11/2026. */
    avisosLinks: [
      ["🚇", "Tokyo Metro: el servicio hoy", "Demoras y cambios en las líneas.", "https://www.tokyometro.jp/en/"],
      ["🚆", "JR East: estado de los trenes", "Demoras de la Yamanote y otros trenes.", "https://www.jreast.co.jp/en/multi/"],
      ["📰", "Noticias de hoy", "Terremotos, tifones y cortes en las noticias del día.", "https://news.google.com/search?q=Tokyo%20train%20OR%20typhoon%20OR%20earthquake%20when%3A1d&hl=en-US&gl=US&ceid=US%3Aen"]
    ],
    /* Hoy: Tokio no tiene una agenda oficial abierta que se pueda leer de forma automática.
       Van la agenda fija de data/tokio-hoy.js y agendas para buscar más planes. */
    hoyNota: "⭐ Destacados de la semana. La agenda completa de la ciudad está en GO TOKYO: confirmá en su página antes de ir.",
    agendas: [
      ["🎭", "GO TOKYO: eventos (web oficial de turismo)", "https://www.gotokyo.org/es/"],
      ["🥋", "Sumo: calendario de torneos", "https://www.sumo.or.jp/En/"]
    ],
    /* Tu vuelo: pantallas de check-in. */
    aerolineas: [
    ["JAL (Japan Airlines)", "https://www.jal.co.jp/en-jp/my-booking.html"],
    ["ANA", "https://www.ana.co.jp/en/jp/guide/boarding-procedures/checkin/international/"],
    ["Aeroméxico", "https://www.aeromexico.com/es-mx/check-in"],
    ["Iberia", "https://www.iberia.com/es/autocheckin-online/"],
    ["Air France", "https://wwws.airfrance.fr/check-in"],
    ["KLM", "https://www.klm.com/check-in"],
    ["Lufthansa", "https://www.lufthansa.com/de/en/online-check-in"],
    ["Turkish Airlines", "https://www.turkishairlines.com/en-int/flights/manage-booking/"],
    ["United", "https://www.united.com/en/us/checkin"],
    ["American Airlines", "https://www.aa.com/check-in"],
    ["Delta", "https://www.delta.com/us/en/check-in-security/overview"],
    ["Air Canada", "https://www.aircanada.com/ca/en/aco/home/fly/check-in.html"]
    ],
    vueloAeropuertos: "Tokio tiene dos aeropuertos internacionales: Haneda (HND), dentro de la ciudad y a unos 30 minutos del centro, y Narita (NRT), en la prefectura de Chiba, a más de una hora. Fijate a cuál llega tu vuelo: cambia cómo vas al hotel.",
    /* Frases útiles en japonés: la frase va en romaji (como se lee) y en japonés, y abajo se explica. */
    idioma: "ja",
    frases: [
    ["Konnichiwa · こんにちは", "Hola"],
    ["Arigatō gozaimasu · ありがとうございます", "Muchas gracias"],
    ["Sumimasen · すみません", "Perdón, disculpe (también para llamar al mozo)"],
    ["Onegaishimasu · お願いします", "Por favor (al pedir algo)"],
    ["Eigo wa hanasemasu ka? · 英語は話せますか？", "¿Habla inglés?"],
    ["Kore o kudasai · これをください", "Esto, por favor (señalando)"],
    ["Okaikei onegaishimasu · お会計お願いします", "La cuenta, por favor"],
    ["… wa doko desu ka? · …はどこですか？", "¿Dónde queda…?"],
    ["Toire wa doko desu ka? · トイレはどこですか？", "¿Dónde está el baño?"],
    ["Wakarimasen · わかりません", "No entiendo"],
    ["Kādo de ii desu ka? · カードでいいですか？", "¿Puedo pagar con tarjeta?"],
    ["Isha ga hitsuyō desu · 医者が必要です", "Necesito un médico"]
    ],
    /* Aviso de bienvenida: qué hay en Info */
    aviso: ["🛬 Cómo llegar desde Haneda o Narita a tu alojamiento", "🎫 Cómo pagar el metro y los trenes con Suica o la tarjeta del banco", "💴 Cuándo llevar efectivo y dónde sacar yenes",
      "🍜 Cómo se pide en un restaurante con máquina de tickets", "🆘 Teléfonos de emergencia, para tocar y llamar"]
  };
})();
