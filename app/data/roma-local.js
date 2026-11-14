/* Lo que es propio de Roma y la guía usa en Recién llegado, Tu vuelo, Práctica, Hoy y el aviso de bienvenida (tarjeta #101).
   Mismo formato que data/paris-local.js. Los textos van en castellano: los traduce i18n/traductor.js (lista i18n/fuentes/roma.txt).
   Todas las direcciones web se abrieron y revisaron el 14/11/2026. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.roma;
  if (!X) return;
  X.local = {
    mapa: "Roma",                                // se agrega a las búsquedas de Google Maps
    coordCentro: [41.8986, 12.4769],             // centro del mapa y del clima (Panteón)
    limitesMapa: [[41.855, 12.43], [41.94, 12.53]],   // lo que se ve en el mapa al abrirlo
    zonasBase: [41, 12],                         // grados enteros para data/roma-zones.js
    fuera: "Fuera de Roma",
    pasaporte: "Pasaporte romano",
    pasaporteSub: "Marcá los lugares que conocés y ganá sellos: ruinas, pasta, helado, explorador de barrios…",
    trasnoche: "Trasnoche romana",
    interesNoche: "🍸 Bares y noche",
    metro: "Metro",                              // igual al título del bloque de transporte donde van las líneas
    sinEstacion: "Sin estación cerca: mejor a pie, colectivo o tranvía",
    buscarEj: "¿Qué buscás? Carbonara, helado, museo, Trastevere…",
    rutaEj: "Ej.: Coliseo, Panteón, Vaticano…",
    rutaEj2: "Ej.: Coliseo, Panteón, Termini…",
    aerolineasEj: "Ej.: ITA Airways, Iberia, Ryanair…",
    atajos: [["Pasta", { q: "pasta" }], ["Helado", { q: "helado" }]],
    moneda: { codigo: "EUR", nombre: "Euro", plural: "euros", aria: "Monto en euros", formato: "es-ES" },
    centro: { q: "Pantheon, Roma", label: "Hasta el centro (Panteón)" },
    /* Recién llegado */
    aeropuertos: [
      { label: "Desde el aeropuerto de Fiumicino (FCO)", q: "Aeroporto di Roma-Fiumicino" },
      { label: "Desde el aeropuerto de Ciampino (CIA)", q: "Aeroporto di Roma-Ciampino" }
    ],
    uber: true,
    traslados: [   // [ícono, nombre, web, aclaración]
      ["🚆", "Fiumicino: trenes, colectivos y taxis", "https://www.adr.it/web/aeroporti-di-roma-en/pax-fco-to-and-from", "Sitio oficial de Aeropuertos de Roma"],
      ["🚆", "Fiumicino: Leonardo Express y FL1", "https://www.adr.it/web/aeroporti-di-roma-en/pax-fco-train", "Trenes al centro"],
      ["🚌", "Ciampino: colectivos al centro", "https://www.adr.it/web/aeroporti-di-roma-en/pax-cia-bus", "Sitio oficial de Aeropuertos de Roma"]
    ],
    aeropuertoTips: ["Desde Fiumicino, lo más simple es el Leonardo Express: llega a Termini en poco más de media hora, sin paradas.",
      "El tren regional FL1 también sale de Fiumicino y para en Trastevere, Ostiense y Tiburtina: conviene si te alojás de ese lado.",
      "Desde Ciampino no hay tren directo: hay colectivos a Termini y a estaciones de metro.",
      "Los taxis blancos de Roma tienen tarifa fija desde los dos aeropuertos hasta el centro (dentro de las Murallas Aurelianas). Usá la fila oficial."],
    chips: [
      ["📱", "Vodafone", "https://www.vodafone.it/", "Chip prepago"],
      ["📱", "WindTre", "https://www.windtre.it/", "Chip prepago"],
      ["📱", "Iliad", "https://www.iliad.it/", "Chip prepago, se activa en máquinas de los locales"]
    ],
    chipsBuscar: "TIM Vodafone WindTre Iliad negozio",
    internetTips: ["En Italia, para activar un chip te piden el pasaporte.",
      "Si tu celular acepta eSIM, podés activarla antes de viajar.",
      "Muchos bares y museos tienen Wi-Fi gratis."],
    plataTips: ["Con tarjeta podés pagar casi todo, también sin contacto.",
      "Sacá plata en cajeros de bancos (Bancomat): los cajeros sueltos de las zonas turísticas cobran más.",
      "Si el cajero o el lector de tarjetas te ofrece cobrarte en tu moneda, elegí pagar en euros."],
    transporte: {
      t: "Prepará el transporte", s: "Boletos, pases y cómo moverte",
      acts: [
        ["🎫", "Boletos y pases", "https://www.atac.roma.it/en/tickets-and-passes", "Sitio oficial de ATAC"],
        ["🚇", "Líneas de metro", "#/info/moverse", "Recorridos y consejos"]
      ],
      tips: ["En el metro, los colectivos y los tranvías podés pagar apoyando tu tarjeta sin contacto: no hace falta comprar boleto.",
        "Si vas a viajar mucho, compará con los pases Roma 24H, 48H o 72H."]
    },
    moverseSub: "Boletos, metro, taxis",
    /* Apps útiles. Número del App Store y nombre en Google Play revisados uno por uno el 14/11/2026. */
    apps: [
      ["🚇", "Para moverse", [
        ["Moovit", "Recorridos en metro, colectivo y tranvía, con horarios en vivo.", 498477945, "com.tranzmate"],
        ["Google Maps", "Mapas y recorridos en transporte y a pie.", 585027354, "com.google.android.apps.maps"],
        ["itTaxi", "Para pedir taxis oficiales de Roma.", 527559443, "it.ud.microtek.ITTaxi"],
        ["FREENOW", "Taxis y autos con chofer, con precio estimado.", 357852748, "taxi.android.client"],
        ["Uber", "Taxis y autos con chofer. Ves el precio antes de pedir.", 368677368, "com.ubercab"]
      ]],
      ["🚆", "Para viajar fuera de Roma", [
        ["Trenitalia", "Trenes rápidos y regionales a toda Italia: horarios, boletos y demoras.", 331050847, "com.lynxspa.prontotreno"],
        ["Italo", "Trenes rápidos a las grandes ciudades de Italia: horarios y boletos.", 804056898, "it.italotreno"]
      ]],
      ["🍔", "Para comer", [
        ["TheFork", "Reservas en restaurantes, a veces con descuento.", 424850908, "com.lafourchette.lafourchette"],
        ["Glovo", "Comida y compras a domicilio.", 951812684, "com.glovo"],
        ["Just Eat", "Comida a domicilio.", 566347057, "com.justeat.app.it"],
        ["Deliveroo", "Comida a domicilio.", 1001501844, "com.deliveroo.orderapp"]
      ]],
      ["💬", "Para comunicarte", [
        ["WhatsApp", "La más usada para escribir y llamar.", 310633997, "com.whatsapp"]
      ]]
    ],
    /* Paros y cortes: dónde fijarse antes de salir. Revisadas el 14/11/2026. */
    avisosLinks: [
      ["🚇", "ATAC: metro, colectivos y tranvías", "Noticias del servicio, obras y paros (sciopero). En italiano e inglés.", "https://www.atac.roma.it/"],
      ["🚦", "Roma Servizi per la Mobilità", "Tránsito, cortes y estado del transporte en vivo. En italiano.", "https://romamobilita.it/"],
      ["📰", "Noticias de hoy", "Paros (sciopero) y manifestaciones (manifestazione) en las noticias del día.", "https://news.google.com/search?q=Roma%20sciopero%20OR%20manifestazione%20when%3A1d&hl=it&gl=IT&ceid=IT%3Ait"]
    ],
    /* Hoy: agendas para buscar más planes. */
    hoyNota: "⭐ Destacados de la semana. Confirmá en su página antes de ir.",
    agendas: [
      ["📰", "Turismo Roma: eventos", "https://www.turismoroma.it/en/tipo-evento/events"],
      ["📞", "060608: información turística y cultural de Roma", "https://www.060608.it/"]
    ],
    /* Tu vuelo: pantallas de check-in (las mismas que se revisaron para París el 13/11/2026). */
    aerolineas: [
    ["ITA Airways", "https://www.ita-airways.com/it/en/book-and-prepare/travel-information/check-in-information"],
    ["Iberia", "https://www.iberia.com/es/autocheckin-online/"],
    ["Vueling", "https://tickets.vueling.com/manage?event=checkin&culture=en-GB"],
    ["Air Europa", "https://www.aireuropa.com/es/es/mytrips/checkin"],
    ["Ryanair", "https://www.ryanair.com/gb/en/lp/check-in"],
    ["Wizz Air", "https://www.wizzair.com/en-gb/help-centre/check-in-and-boarding"],
    ["LATAM", "https://www.latamairlines.com/es/es/check-in"],
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
    vueloAeropuertos: "Roma tiene dos aeropuertos: Fiumicino (FCO), el grande, para casi todos los vuelos internacionales, y Ciampino (CIA), más chico, para vuelos baratos. Fijate bien cuál es el tuyo y de qué terminal sale tu vuelo.",
    /* Frases para defenderte: la frase queda en italiano y abajo se explica para qué sirve */
    idioma: "it",
    frases: [
    ["Buongiorno!", "Saludo para entrar a cualquier negocio (a la tarde, \"Buonasera\")"],
    ["Il conto, per favore.", "Para pedir la cuenta en un bar o restaurante"],
    ["Posso pagare con la carta?", "Antes de pedir, por si solo aceptan efectivo"],
    ["Quanto costa?", "Para preguntar el precio"],
    ["Per andare a…?", "Para pedir indicaciones en la calle"],
    ["Dov'è il bagno?", "Para encontrar el baño"],
    ["Un tavolo per due, per favore.", "Al llegar a un restaurante"],
    ["Cosa mi consiglia?", "Para pedir una sugerencia al mozo"],
    ["Un caffè, per favore.", "En la barra: es un espresso"],
    ["Sono celiaco. Avete piatti senza glutine?", "Para pedir comida sin gluten"],
    ["Scusi, parlo poco italiano.", "Para que te hablen más despacio"],
    ["Ho bisogno di un medico.", "En una urgencia"],
    ["Grazie mille!", "Para agradecer"]
    ],
    /* Aviso de bienvenida: qué hay en Info */
    aviso: ["🛬 Cómo salir del aeropuerto y llegar a tu alojamiento", "💳 Cómo pagar y qué es el cubierto", "🎫 Cómo pagar el metro y el colectivo con la tarjeta",
      "⚠️ Las estafas más comunes y cómo evitarlas", "🆘 Teléfonos de emergencia, para tocar y llamar"]
  };
})();
