/* Lo que es propio de Bogotá y la guía usa en Recién llegado, Tu vuelo, Práctica, Hoy y el aviso de bienvenida (tarjeta #204).
   Mismo formato que data/amsterdam-local.js. Los textos van en castellano: los traduce i18n/traductor.js (lista i18n/fuentes/bogota.txt).
   Todas las direcciones web se abrieron y revisaron el 18/11/2026 (algunas bloquean a los robots, pero abren en el navegador). */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.bogota;
  if (!X) return;
  X.local = {
    mapa: "Bogotá",                              // se agrega a las búsquedas de Google Maps
    coordCentro: [4.63, -74.07],                 // centro del mapa y del clima (entre La Candelaria y Chapinero)
    limitesMapa: [[4.58, -74.11], [4.71, -74.02]],  // lo que se ve en el mapa al abrirlo
    zonasBase: [4, -74],                         // grados enteros para data/bogota-zones.js
    fuera: "Fuera de Bogotá",
    pasaporte: "Pasaporte de Bogotá",
    pasaporteSub: "Marcá los lugares que conocés y ganá sellos: museos, café, salsa, mercados, explorador de barrios…",
    trasnoche: "Trasnoche en Bogotá",
    interesNoche: "💃 Salsa y noche",
    metro: "TransMilenio",                       // igual al título del bloque de transporte donde van las líneas
    sinEstacion: "Sin estación de TransMilenio cerca: mejor en app o en taxi",
    buscarEj: "¿Qué buscás? Monserrate, Museo del Oro, ajiaco, salsa…",
    rutaEj: "Ej.: Museo del Oro, Monserrate, Plaza de Bolívar…",
    rutaEj2: "Ej.: La Candelaria, Zona G, Parque de la 93…",
    aerolineasEj: "Ej.: Avianca, LATAM, Aerolíneas Argentinas…",
    atajos: [["Museos", { q: "museo" }], ["Café", { q: "cafe" }]],
    moneda: { codigo: "COP", nombre: "Peso colombiano", plural: "pesos colombianos", aria: "Monto en pesos colombianos", formato: "es-CO" },
    centro: { q: "Plaza de Bolívar, Bogotá", label: "Hasta el centro (Plaza de Bolívar)" },
    /* Recién llegado */
    aeropuertos: [
      { label: "Desde el aeropuerto El Dorado", q: "Aeropuerto Internacional El Dorado" }
    ],
    uber: true,
    traslados: [   // [ícono, nombre, web, aclaración]
      ["✈️", "El Dorado: cómo llegar a la ciudad", "https://www.eldorado.aero/transporte", "Sitio oficial del aeropuerto"],
      ["🚌", "TransMilenio", "https://www.transmilenio.gov.co/", "Sitio oficial de TransMilenio"],
      ["💳", "Tarjeta TuLlave", "https://www.tullaveplus.gov.co/", "Sitio oficial de TuLlave"]
    ],
    aeropuertoTips: ["Usá la fila oficial de taxis: te dan un papel impreso con el destino y la tarifa, que es la que tenés que pagar.",
      "También podés pedir un auto por app (Uber, Cabify o DiDi) desde la zona señalada.",
      "No aceptes viajes de gente que te ofrece auto en el hall de llegadas.",
      "Hay colectivos que unen el aeropuerto con el Portal El Dorado de TransMilenio: son baratos, pero incómodos con valijas.",
      "Bogotá está a 2600 metros de altura: el primer día caminá despacio y tomá mucha agua."],
    chips: [
      ["📱", "Claro", "https://www.claro.com.co/", "Chip prepago"],
      ["📱", "Movistar", "https://www.movistar.co/", "Chip prepago"],
      ["📱", "Tigo", "https://www.tigo.com.co/", "Chip prepago"]
    ],
    chipsBuscar: "tienda Claro Movistar Tigo",
    internetTips: ["Si tu celular acepta eSIM, podés activarla antes de viajar: es lo más cómodo.",
      "Para comprar un chip te piden el pasaporte. Se compran en las tiendas de las compañías y en los centros comerciales.",
      "Muchos cafés, restaurantes y centros comerciales tienen Wi-Fi gratis."],
    plataTips: ["Con tarjeta podés pagar en casi todos los restaurantes, hoteles y comercios.",
      "Llevá algo de efectivo para taxis, mercados y puestos chicos.",
      "Si el cajero o el lector de tarjetas te ofrece cobrarte en tu moneda, elegí pagar en pesos colombianos."],
    transporte: {
      t: "Prepará el transporte", s: "TuLlave, tarjeta del banco y apps",
      acts: [
        ["🚌", "TransMilenio", "https://www.transmilenio.gov.co/", "Sitio oficial de TransMilenio"],
        ["💳", "Tarjeta TuLlave", "https://www.tullaveplus.gov.co/", "Sitio oficial de TuLlave"],
        ["🚌", "Líneas de TransMilenio", "#/info/moverse", "Recorridos y consejos"]
      ],
      tips: ["Para viajar mucho en TransMilenio, comprá la tarjeta TuLlave en una estación y cargala.",
        "En muchas estaciones ya se puede pagar con la tarjeta del banco sin contacto. De noche y para distancias cortas, mejor en app."]
    },
    moverseSub: "TransMilenio, colectivos SITP y apps",
    /* Alquiler de auto: agencias con oficinas en la ciudad y en el aeropuerto. Webs revisadas el 18/11/2026. */
    autos: {
      intro: "Para moverte por Bogotá no conviene: el tránsito es muy pesado y hay \"pico y placa\", que prohíbe circular algunos días según el número de la patente. Sirve para salir, por ejemplo a Zipaquirá, Guatavita o Villa de Leyva.",
      acts: [
        ["🚗", "Localiza", "https://www.localiza.com/colombia/es-co", "Web oficial para alquilar"],
        ["🚗", "Budget", "https://www.budget.com.co/", "Web oficial para alquilar"],
        ["🚗", "Hertz", "https://www.hertz.com/", "Web oficial para alquilar"],
        ["🚗", "Avis", "https://www.avis.com/", "Web oficial para alquilar"]
      ],
      tips: ["Para alquilar te piden licencia de conducir vigente, pasaporte y una tarjeta de crédito a nombre de quien maneja, para la garantía.",
"Como turista podés manejar con la licencia de tu país; llevá también el Permiso Internacional de Conducir por las dudas.",
"Preguntá al retirar el auto qué días no puede circular por el pico y placa, y si la agencia tiene excepción.",
"Hay peajes en todas las rutas de salida: llevá efectivo.",
"Los fines de semana largos las salidas de la ciudad se llenan: salí temprano.",
"Antes de salir, revisá el auto y sacale fotos: si tiene algún golpe, que quede anotado en el contrato."]
    },
    /* Apps útiles. Número del App Store y nombre en Google Play revisados uno por uno el 18/11/2026. */
    apps: [
      ["🚌", "Para moverse", [
        ["TransMi App", "La app oficial de TransMilenio: rutas, estaciones y recargas.", 1195720094, "com.nexura.transmilenio"],
        ["Uber", "Autos con chofer. Ves el precio antes de pedir.", 368677368, "com.ubercab"],
        ["Cabify", "Autos con chofer, con el precio cerrado antes de pedir.", 476087442, "com.cabify.rider"],
        ["DiDi", "Autos con chofer y taxis, suele ser la más barata.", 1362398401, "com.didiglobal.passenger"],
        ["Taxis Libres", "Para pedir un taxi de una empresa conocida, con datos del chofer.", 686270238, "com.cotech.taxislibres"],
        ["Moovit", "Qué TransMilenio o colectivo tomar, con horarios en vivo.", 498477945, "com.tranzmate"],
        ["Google Maps", "Mapas y recorridos en transporte, a pie y en bici.", 585027354, "com.google.android.apps.maps"]
      ]],
      ["🍔", "Para comer", [
        ["Rappi", "La app colombiana de comida, supermercado y farmacia a domicilio.", 984044296, "com.grability.rappi"]
      ]],
      ["💬", "Para comunicarte", [
        ["WhatsApp", "En Colombia se usa para todo: reservas, consultas y pedidos.", 310633997, "com.whatsapp"]
      ]]
    ],
    /* Paros y cortes: dónde fijarse antes de salir. Revisadas el 18/11/2026. */
    avisosLinks: [
      ["🚌", "TransMilenio: el servicio hoy", "Cierres de estaciones y desvíos por obras, marchas o eventos.", "https://www.transmilenio.gov.co/"],
      ["📰", "Noticias de hoy", "Paros, marchas y cortes en las noticias del día.", "https://news.google.com/search?q=Bogot%C3%A1%20paro%20OR%20marcha%20OR%20cierre%20when%3A1d&hl=es-419&gl=CO&ceid=CO%3Aes-419"]
    ],
    /* Hoy: Bogotá no tiene una agenda oficial abierta que se pueda leer de forma automática.
       Van la agenda fija de data/bogota-hoy.js y agendas para buscar más planes. */
    hoyNota: "⭐ Destacados de la semana. La agenda completa de la ciudad está en Visit Bogotá: confirmá en su página antes de ir.",
    agendas: [
      ["🎭", "Visit Bogotá: qué hacer (agenda oficial)", "https://visitbogota.co/"],
      ["📰", "Alcaldía de Bogotá", "https://bogota.gov.co/"]
    ],
    /* Tu vuelo: pantallas de check-in (las mismas que se revisaron para las otras ciudades, más Wingo). */
    aerolineas: [
    ["Avianca", "https://www.avianca.com/es/mi-reserva/servicios/check-in-online"],
    ["LATAM", "https://www.latamairlines.com/es/es/check-in"],
    ["Wingo", "https://www.wingo.com/"],
    ["Copa Airlines", "https://checkin.copaair.com/"],
    ["Aerolíneas Argentinas", "https://www.aerolineas.com.ar/?activeTab=checkIn"],
    ["GOL", "https://www.voegol.com.br/check-in"],
    ["Iberia", "https://www.iberia.com/es/autocheckin-online/"],
    ["Air Europa", "https://www.aireuropa.com/es/es/mytrips/checkin"],
    ["Air France", "https://wwws.airfrance.fr/check-in"],
    ["KLM", "https://www.klm.com/check-in"],
    ["Lufthansa", "https://www.lufthansa.com/de/en/online-check-in"],
    ["Turkish Airlines", "https://www.turkishairlines.com/en-int/flights/manage-booking/"],
    ["United", "https://www.united.com/en/us/checkin"],
    ["Delta", "https://oci.delta.com/index.html"],
    ["American Airlines", "https://www.aa.com/check-in"]
    ],
    vueloAeropuertos: "Bogotá tiene un aeropuerto, El Dorado (BOG), con una terminal principal para vuelos nacionales e internacionales. Es la base de Avianca: desde ahí salen vuelos a toda Colombia.",
    /* Frases y palabras de Bogotá: se habla castellano, pero hay expresiones propias. La frase queda como se dice allá y abajo se explica. */
    idioma: "es",
    frases: [
    ["¿Me regala…?", "La forma amable de pedir algo en un negocio, aunque lo pagues"],
    ["¡Qué chévere!", "¡Qué bueno!"],
    ["Parce · Parcero", "Amigo, compañero"],
    ["¿Qué más?", "Saludo: \"¿cómo andás?\""],
    ["A la orden.", "Lo dicen los vendedores: \"¿en qué te puedo ayudar?\""],
    ["Tinto", "Un café negro chico, no vino tinto"],
    ["Onces", "La merienda bogotana: chocolate, pan y queso"],
    ["Rumba", "Salida de noche, fiesta"],
    ["Un tris", "Un poquito"],
    ["¡Qué pena!", "Perdón, disculpá"],
    ["¿La cuenta, por favor?", "Para pedir la cuenta; te preguntan si querés sumar la propina"],
    ["Necesito un médico.", "En una urgencia"]
    ],
    /* Aviso de bienvenida: qué hay en Info */
    aviso: ["🛬 Cómo salir del aeropuerto y llegar a tu alojamiento", "🚌 Cómo usar TransMilenio y las apps de transporte", "🍹 Cómo cuidarte de la escopolamina y el paseo millonario",
      "⛰️ Cómo llevar la altura", "🆘 Teléfonos de emergencia, para tocar y llamar"]
  };
})();
