/* Lo que es propio de Buenos Aires y la guía usa en Recién llegado, Tu vuelo, Práctica y el aviso de bienvenida.
   Antes estaba escrito adentro de js/app.js; se pasó acá para que sumar otra ciudad sea copiar este archivo y cambiar los datos
   (pedido de Bautista, 12/11/2026). La guía usa estos datos y, si una ciudad no los tiene, esconde esa parte.

   Cómo armar el de otra ciudad: copiar este archivo como data/<ciudad>-local.js, cambiar "caba" por el id de la ciudad
   y revisar cada dirección web antes de publicarla. Los textos van en castellano: los traduce i18n/traductor.js. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.caba;
  if (!X) return;
  X.local = {
    mapa: "Buenos Aires",                       // se agrega a las búsquedas de Google Maps
    coordCentro: [-34.6037, -58.3816],          // centro del mapa y del clima
    limitesMapa: [[-34.705, -58.531], [-34.527, -58.335]],   // lo que se ve en el mapa al abrirlo
    zonasBase: [-34, -58],                      // grados enteros que usa data/caba-zones.js para achicar los puntos
    pasaporte: "Pasaporte porteño",
    trasnoche: "Trasnoche porteña",
    moneda: { codigo: "ARS", nombre: "Peso argentino", plural: "pesos", aria: "Monto en pesos argentinos", formato: "es-AR" },
    centro: { q: "Obelisco, Buenos Aires", label: "Hasta el centro (Obelisco)" },
    /* Recién llegado */
    aeropuertos: [
      { label: "Desde Ezeiza", q: "Aeropuerto Internacional Ezeiza" },
      { label: "Desde Aeroparque", q: "Aeroparque Jorge Newbery" }
    ],
    uber: true,
    traslados: [   // [ícono, nombre, web, aclaración] revisadas el 12/11/2026
      ["🚕", "Cabify", "https://cabify.com/ar"],
      ["🚖", "DiDi", "https://web.didiglobal.com/ar/"],
      ["🚌", "Micro al centro", "https://www.tiendaleon.com/", "Tienda León, desde Ezeiza"]
    ],
    aeropuertoTips: ["Taxis y remises: contratalos en los mostradores oficiales de adentro del aeropuerto.",
      "No aceptes ofertas de gente que se te acerque en el hall.",
      "Ezeiza queda lejos del centro: contá con un buen rato de viaje."],
    chips: [
      ["📱", "Personal", "https://www.personal.com.ar/prepago", "Chip prepago"],
      ["📱", "Claro", "https://www.claro.com.ar/personas/elegi-prepago", "Chip prepago"],
      ["✨", "Claro eSIM", "https://simple.claro.com.ar/esimple", "Sin chip físico"],
      ["📱", "Movistar", "https://www.movistar.com.ar/prepago", "Chip prepago"]
    ],
    chipsBuscar: "tienda Personal Claro Movistar",
    internetTips: ["Para comprar un chip te pueden pedir el pasaporte.",
      "Si tu celular acepta eSIM, podés activarla antes de viajar.",
      "Muchos bares y cafés tienen Wi-Fi gratis: pedí la clave."],
    plataTips: ["Pagar con tarjeta extranjera suele convenir.",
      "Tené algo de efectivo en billetes chicos para propinas y kioscos.",
      "No cambies dinero con gente en la calle."],
    transporte: {
      t: "Prepará el transporte", s: "Tarjeta SUBE y cómo moverte",
      acts: [
        ["📍", "Dónde comprar y cargar", "https://tarjetasube.sube.gob.ar/SubeWeb/WebForms/admin/views/mapa-sube.aspx?id=1", "Mapa oficial de puntos SUBE"],
        ["📲", "App SUBE", "https://www.argentina.gob.ar/sube/nuestras-apps", "Mirá tu saldo"],
        ["🚇", "Líneas de subte", "#/info/moverse", "Recorridos y consejos"]
      ],
      tips: ["La SUBE se compra en kioscos, estaciones de subte y puntos SUBE.",
        "En el subte y en muchos colectivos también podés pagar con tu tarjeta sin contacto."]
    },
    moverseSub: "SUBE, subte, taxis",
    /* Alquiler de auto (tarjeta #185): agencias con oficinas en la ciudad y en el aeropuerto. Cada web se abrió y revisó el 14/11/2026. */
    autos: {
      intro: "Para moverte por la ciudad no hace falta: hay mucho tránsito y es difícil estacionar. Sirve para salir de Buenos Aires, por ejemplo al Delta, a la costa o a una estancia.",
      acts: [
        ["🚗", "Localiza", "https://www.localiza.com/argentina/es-ar", "Web oficial para alquilar"],
        ["🚗", "Hertz", "https://www.hertz.com.ar/", "Web oficial para alquilar"],
        ["🚗", "Avis", "https://avis.com.ar/", "Web oficial para alquilar"],
        ["🚗", "Budget", "https://budget.com.ar/", "Web oficial para alquilar"],
        ["🚗", "Europcar", "https://www.europcar.com.ar/", "Web oficial para alquilar"],
        ["🚗", "Sixt", "https://www.sixt.com.ar/", "Web oficial para alquilar"]
      ],
      tips: ["Para alquilar te piden licencia de conducir vigente, pasaporte y una tarjeta de crédito a nombre de quien maneja, para la garantía.",
"Con licencia de otro país podés manejar como turista. Si no está en español, llevá también el Permiso Internacional de Conducir: algunas agencias lo piden.",
"Las autopistas de la ciudad cobran el peaje sin barreras, con TelePASE: preguntá en la agencia si el auto lo tiene y cómo se paga.",
"Antes de salir, revisá el auto y sacale fotos: si tiene algún golpe, que quede anotado en el contrato."]
    },
    /* Hoy: el archivo de eventos que arma herramientas/armar-hoy.ps1 todos los días, y otras agendas para buscar más planes (revisadas el 12/11/2026) */
    /* Apps útiles (tarjeta #137): las que más se usan en la Argentina. Cada una con su página en el App Store (número "ios") y en
       Google Play (nombre "android"); revisadas una por una el 13/11/2026. Si la app ya está instalada, la tienda muestra "Abrir". */
    apps: [
      ["🚕", "Para moverse", [
        ["Uber", "Viajes en auto y moto. Ves el precio antes de pedir.", 368677368, "com.ubercab"],
        ["Cabify", "Viajes en auto, también con precio de antemano.", 476087442, "com.cabify.rider"],
        ["DiDi", "Viajes en auto, suele ser la más barata.", 1362398401, "com.didiglobal.passenger"],
        ["Google Maps", "Mapas y recorridos en subte, colectivo y a pie.", 585027354, "com.google.android.apps.maps"],
        ["Moovit", "Qué colectivo o subte tomar, con horarios en vivo.", 498477945, "com.tranzmate"],
        ["BA Ecobici", "Las bicis públicas de la Ciudad.", 1452339584, "com.tembici.ecobici"]
      ]],
      ["🍔", "Para pedir comida", [
        ["PedidosYa", "Comida, súper y farmacia a domicilio. La más usada.", 490099807, "com.pedidosya"],
        ["Rappi", "Comida y compras a domicilio.", 984044296, "com.grability.rappi"]
      ]],
      ["🛍️", "Para comprar y pagar", [
        ["Mercado Pago", "Muchos comercios cobran con su QR.", 925436649, "com.mercadopago.wallet"],
        ["Mercado Libre", "Para comprar casi cualquier cosa por internet.", 463624852, "com.mercadolibre"]
      ]],
      ["💬", "Para comunicarte", [
        ["WhatsApp", "Acá todo se arregla por WhatsApp: reservas, consultas y turnos.", 310633997, "com.whatsapp"]
      ]]
    ],
    /* Paros, marchas y cortes (tarjeta #120): dónde fijarse antes de salir. Cada dirección se abrió y se revisó el 13/11/2026.
       Los avisos puntuales se cargan en data/avisos.json. */
    avisosLinks: [
      ["🚇", "Estado del subte", "Cómo funciona cada línea, en vivo (Emova).", "https://emova.com.ar/"],
      ["🚧", "Cortes de tránsito", "Los avisos oficiales de la Ciudad.", "https://buenosaires.gob.ar/noticias-relacionadas/Cortes%20de%20tr%C3%A1nsito"],
      ["📰", "Noticias de hoy", "Paros, marchas y cortes en las noticias del día.", "https://news.google.com/search?q=paro%20OR%20marcha%20OR%20corte%20Buenos%20Aires%20when%3A1d&hl=es-419&gl=AR&ceid=AR%3Aes-419"]
    ],
    hoy: "data/hoy.json",
    agendas: [
      ["🏛️", "Agenda de la Ciudad", "https://linda.buenosaires.gob.ar/agenda"],
      ["📰", "Time Out: qué hacer esta semana", "https://www.timeout.com/es/buenos-aires/agenda-semana"],
      ["🎭", "Alternativa Teatral: cartelera", "https://www.alternativateatral.com/cartelera.asp"],
      ["🎧", "Resident Advisor: fiestas electrónicas", "https://ra.co/events/ar/buenosaires"]
    ],
    /* Tu vuelo: pantallas de check-in revisadas una por una el 12/11/2026 */
    aerolineas: [
    ["Aerolíneas Argentinas", "https://www.aerolineas.com.ar/?activeTab=checkIn"],
    ["Flybondi", "https://reserva.flybondi.com/booking/widget?carrier=fo&module=webcheckin"],
    ["JetSMART", "https://jetsmart.com/ar/es/minisitios/checkin"],
    ["LATAM", "https://www.latamairlines.com/ar/es/check-in"],
    ["GOL", "https://b2c.voegol.com.br/check-in/"],
    ["Sky Airline", "https://www.skyairline.com/argentina/check-in"],
    ["Copa Airlines", "https://checkin.copaair.com/"],
    ["Avianca", "https://www.avianca.com/es/mi-reserva/servicios/check-in-online"],
    ["American Airlines", "https://www.aa.com/check-in"],
    ["United", "https://www.united.com/es/ar/checkin"],
    ["Delta", "https://oci.delta.com/index.html"],
    ["Iberia", "https://www.iberia.com/ar/autocheckin-online/"],
    ["Air Europa", "https://www.aireuropa.com/ar/es/check-in"],
    ["Air France", "https://wwws.airfrance.com.ar/check-in"],
    ["KLM", "https://www.klm.com.ar/check-in"],
    ["Lufthansa", "https://www.lufthansa.com/ar/es/online-check-in"],
    ["ITA Airways", "https://www.ita-airways.com/ar/es/manage-my-bookings/manage/check-in"],
    ["British Airways", "https://www.britishairways.com/travel/olcilandingpageauthreq/public/es_ar"],
    ["Turkish Airlines", "https://www.turkishairlines.com/es-ar/flights/manage-booking/"],
    ["Emirates", "https://www.emirates.com/ar/spanish/manage-booking/online-check-in/"],
    ["Qatar Airways", "https://cki.qatarairways.com/cki-web/pages/autocheckin.xhtml"]
    ],
    vueloAeropuertos: "Ezeiza es para casi todos los vuelos internacionales; Aeroparque, para los de cabotaje y algunos a países vecinos. Fijate bien cuál es el tuyo.",
    /* Frases para defenderte: la frase queda en el idioma local y abajo se explica para qué sirve */
    idioma: "es",
    frases: [
    ["Hola, ¿cómo andás?", "Saludo amistoso, para cualquier momento"],
    ["¿Me traés la cuenta, por favor?", "Para pedir la cuenta en un bar o restaurante"],
    ["¿Puedo pagar con tarjeta?", "Antes de pedir, por si solo aceptan efectivo"],
    ["¿Cuánto sale?", "Para preguntar el precio"],
    ["¿Cómo llego a…?", "Para pedir indicaciones en la calle"],
    ["¿Dónde está el baño?", "Para encontrar el baño"],
    ["Una mesa para dos, por favor.", "Al llegar a un restaurante"],
    ["¿Qué me recomendás?", "Para pedir una sugerencia al mozo"],
    ["Soy celíaco: ¿tienen algo sin TACC?", "Para pedir comida sin gluten"],
    ["Perdón, no hablo bien castellano.", "Para que te hablen más despacio"],
    ["Necesito un médico.", "En una urgencia"],
    ["¡Gracias, muy amable!", "Para agradecer"]
    ],
    /* Aviso de bienvenida: qué hay en Info */
    aviso: ["🛬 Cómo salir del aeropuerto y llegar a tu alojamiento", "💳 Cómo pagar y dónde cambiar plata", "🚇 La tarjeta SUBE y cómo moverte",
      "⚠️ Las estafas más comunes y cómo evitarlas", "🆘 Teléfonos de emergencia, para tocar y llamar"]
  };
})();
