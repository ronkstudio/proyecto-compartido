/* Lo que es propio de Madrid y la guía usa en Recién llegado, Tu vuelo, Práctica, Hoy y el aviso de bienvenida (tarjeta #100).
   Mismo formato que data/roma-local.js. Los textos van en castellano: los traduce i18n/traductor.js (lista i18n/fuentes/madrid.txt).
   Todas las direcciones web se abrieron y revisaron el 17/11/2026. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.madrid;
  if (!X) return;
  X.local = {
    mapa: "Madrid",                              // se agrega a las búsquedas de Google Maps
    coordCentro: [40.4169, -3.7035],             // centro del mapa y del clima (Puerta del Sol)
    limitesMapa: [[40.385, -3.74], [40.455, -3.66]],  // lo que se ve en el mapa al abrirlo
    zonasBase: [40, -3],                         // grados enteros para data/madrid-zones.js
    fuera: "Fuera de Madrid",
    pasaporte: "Pasaporte madrileño",
    pasaporteSub: "Marcá los lugares que conocés y ganá sellos: museos, tapas, churros, explorador de barrios…",
    trasnoche: "Trasnoche madrileña",
    interesNoche: "🍸 Bares y noche",
    metro: "Metro",                              // igual al título del bloque de transporte donde van las líneas
    sinEstacion: "Sin estación cerca: mejor a pie o en colectivo",
    buscarEj: "¿Qué buscás? Tapas, churros, museo, Malasaña…",
    rutaEj: "Ej.: Prado, Plaza Mayor, Retiro…",
    rutaEj2: "Ej.: Prado, Plaza Mayor, Atocha…",
    aerolineasEj: "Ej.: Iberia, Air Europa, Aerolíneas Argentinas…",
    atajos: [["Tapas", { q: "tapas" }], ["Museos", { q: "museo" }]],
    moneda: { codigo: "EUR", nombre: "Euro", plural: "euros", aria: "Monto en euros", formato: "es-ES" },
    centro: { q: "Puerta del Sol, Madrid", label: "Hasta el centro (Puerta del Sol)" },
    /* Recién llegado */
    aeropuertos: [
      { label: "Desde el aeropuerto de Barajas, terminales T1, T2 y T3", q: "Aeropuerto Adolfo Suárez Madrid-Barajas Terminal 2" },
      { label: "Desde el aeropuerto de Barajas, terminal T4", q: "Aeropuerto Adolfo Suárez Madrid-Barajas Terminal 4" }
    ],
    uber: true,
    traslados: [   // [ícono, nombre, web, aclaración]
      ["🚇", "Barajas: cómo llegar al centro", "https://www.aena.es/es/adolfo-suarez-madrid-barajas/como-llegar/metro.html", "Sitio oficial de Aena: metro, tren, colectivo y taxi"],
      ["🚌", "Colectivo Exprés Aeropuerto", "https://www.emtmadrid.es/Aeropuerto", "Sitio oficial de la EMT: funciona las 24 horas"],
      ["🚆", "Cercanías al aeropuerto (T4)", "https://www.renfe.com/es/es/cercanias/cercanias-madrid", "Sitio oficial de Renfe"]
    ],
    aeropuertoTips: ["Fijate en tu pasaje de qué terminal salís o llegás: la T4 queda lejos de las otras tres y tiene sus propias estaciones.",
      "El metro (línea 8) es lo más simple si te alojás cerca de una estación: combinás en Nuevos Ministerios. En el aeropuerto se paga un suplemento.",
      "Desde la T4, el tren Cercanías va directo a Chamartín, Nuevos Ministerios y Atocha.",
      "El colectivo Exprés Aeropuerto funciona día y noche y va a Cibeles; de día sigue hasta Atocha.",
      "Los taxis tienen tarifa fija desde el aeropuerto hasta cualquier punto dentro de la M-30, sin recargos. Usá la fila oficial."],
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
      t: "Prepará el transporte", s: "Tarjeta, abono turístico y cómo moverte",
      acts: [
        ["🎫", "Abono turístico", "https://www.crtm.es/billete-turistico", "Sitio oficial del Consorcio de Transportes"],
        ["🚇", "Metro de Madrid", "https://www.metromadrid.es/", "Planos, estado del servicio y cómo pagar"],
        ["🚇", "Líneas de metro", "#/info/moverse", "Recorridos y consejos"]
      ],
      tips: ["En los molinetes del metro y en los colectivos podés pagar apoyando tu tarjeta sin contacto: no hace falta comprar boleto.",
        "Si vas a viajar mucho, compará con el abono turístico (de 1 a 7 días) o con el boleto de 10 viajes en la tarjeta Multi."]
    },
    moverseSub: "Metro, colectivos, taxis",
    /* Alquiler de auto (tarjeta #185): agencias con oficinas en la ciudad y en el aeropuerto. Cada web se abrió y revisó el 17/11/2026. */
    autos: {
      intro: "Para moverte por Madrid no hace falta: el transporte llega a todos lados y al centro casi no se puede entrar en auto. Sirve para salir de la ciudad, por ejemplo a Toledo, a Segovia o a la sierra.",
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
"Toda la ciudad es zona de bajas emisiones y al Distrito Centro solo pueden entrar algunos autos, con cámaras y multas. Los de alquiler traen la etiqueta ambiental; igual, retiralo fuera del centro, por ejemplo en el aeropuerto o en Atocha.",
"Muchas autopistas de España son gratis (autovías); las de peaje se pagan con tarjeta en las cabinas.",
"Antes de salir, revisá el auto y sacale fotos: si tiene algún golpe, que quede anotado en el contrato."]
    },
    /* Apps útiles. Número del App Store y nombre en Google Play revisados uno por uno el 17/11/2026. */
    apps: [
      ["🚇", "Para moverse", [
        ["Metro de Madrid", "La app oficial del metro: recorridos, estado de las líneas y avisos.", 481638277, "es.metromadrid.metroandroid"],
        ["EMT Madrid", "La app oficial de los colectivos: cuánto falta para que llegue el tuyo.", 332237215, "com.emtmadrid.emt"],
        ["Moovit", "Recorridos en metro, colectivo y tren, con horarios en vivo.", 498477945, "com.tranzmate"],
        ["Google Maps", "Mapas y recorridos en transporte y a pie.", 585027354, "com.google.android.apps.maps"],
        ["Cabify", "Autos con chofer y taxis, con el precio cerrado antes de pedir.", 476087442, "com.cabify.rider"],
        ["Uber", "Taxis y autos con chofer. Ves el precio antes de pedir.", 368677368, "com.ubercab"],
        ["Bolt", "Autos con chofer, con precio estimado.", 675033630, "ee.mtakso.client"],
        ["FREENOW", "Taxis y autos con chofer, con precio estimado.", 357852748, "taxi.android.client"]
      ]],
      ["🚆", "Para viajar fuera de Madrid", [
        ["Renfe", "Trenes rápidos y regionales a toda España: horarios, boletos y demoras.", 1544224672, "com.renfeviajeros.ticket"],
        ["Iryo", "Trenes rápidos a Barcelona, Valencia, Sevilla, Málaga y otras ciudades.", 6444018990, "eu.iryo.app.b2c"],
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
    /* Paros y cortes: dónde fijarse antes de salir. Revisadas el 17/11/2026. */
    avisosLinks: [
      ["🚇", "Metro de Madrid: estado del servicio", "Líneas cortadas, obras y paros (huelga), en vivo.", "https://www.metromadrid.es/"],
      ["🚌", "EMT: colectivos", "Desvíos de líneas por obras, marchas y eventos.", "https://www.emtmadrid.es/"],
      ["🚦", "Informo: el tránsito de Madrid", "Cortes de calles y estado del tránsito en vivo, del Ayuntamiento.", "https://informo.madrid.es/"],
      ["📰", "Noticias de hoy", "Paros (huelga) y manifestaciones en las noticias del día.", "https://news.google.com/search?q=Madrid%20huelga%20OR%20manifestaci%C3%B3n%20when%3A1d&hl=es&gl=ES&ceid=ES%3Aes"]
    ],
    /* Hoy: el archivo de eventos que arma herramientas/armar-hoy-madrid.ps1 con la agenda oficial del Ayuntamiento (datos.madrid.es),
       y agendas para buscar más planes. */
    hoy: "data/hoy-madrid.json",
    hoyNota: "⭐ Destacados de la semana. 📅 Agenda oficial del Ayuntamiento de Madrid. Confirmá en su página antes de ir.",
    agendas: [
      ["📰", "esMadrid: la agenda de la ciudad", "https://www.esmadrid.com/agenda-madrid"],
      ["🎭", "Ayuntamiento de Madrid: todas las actividades y eventos", "https://www.madrid.es/portales/munimadrid/es/Inicio/Actualidad/Actividades-y-eventos/?vgnextfmt=default&vgnextchannel=ca9671ee4a9eb410VgnVCM100000171f5a0aRCRD"]
    ],
    /* Tu vuelo: pantallas de check-in (las mismas que se revisaron para las otras ciudades). */
    aerolineas: [
    ["Iberia", "https://www.iberia.com/es/autocheckin-online/"],
    ["Air Europa", "https://www.aireuropa.com/es/es/mytrips/checkin"],
    ["Vueling", "https://tickets.vueling.com/manage?event=checkin&culture=en-GB"],
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
    vueloAeropuertos: "Madrid tiene un solo aeropuerto, Barajas, pero con dos zonas separadas: las terminales T1, T2 y T3, juntas, y la T4, con su satélite T4S, para Iberia y sus socias. Fijate bien de qué terminal sale tu vuelo.",
    /* Frases para defenderte: se habla castellano, pero con otras palabras. La frase queda como se dice en Madrid y abajo se explica. */
    idioma: "es",
    frases: [
    ["¡Hola, buenas!", "Saludo para entrar a cualquier bar o negocio"],
    ["¿Me cobras, por favor?", "Para pedir la cuenta en un bar o restaurante"],
    ["¿Puedo pagar con tarjeta?", "Antes de pedir, por si solo aceptan efectivo"],
    ["¿Cuánto cuesta?", "Para preguntar el precio"],
    ["¿Por dónde se va a…?", "Para pedir indicaciones en la calle"],
    ["¿Dónde están los servicios?", "Para encontrar el baño"],
    ["Una mesa para dos, por favor.", "Al llegar a un restaurante"],
    ["¿Qué me recomiendas?", "Para pedir una sugerencia al mozo"],
    ["Una caña, por favor.", "Para pedir una cerveza tirada chica"],
    ["Soy celíaco. ¿Tenéis algo sin gluten?", "Para pedir comida sin gluten"],
    ["Necesito un médico.", "En una urgencia"],
    ["¡Muchas gracias!", "Para agradecer"]
    ],
    /* Aviso de bienvenida: qué hay en Info */
    aviso: ["🛬 Cómo salir del aeropuerto y llegar a tu alojamiento", "💳 Cómo pagar y qué es el menú del día", "🎫 Cómo pagar el metro y el colectivo con la tarjeta",
      "⚠️ Las estafas más comunes y cómo evitarlas", "🆘 Teléfonos de emergencia, para tocar y llamar"]
  };
})();
