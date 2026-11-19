/* Lo que es propio de Lisboa y la guía usa en Recién llegado, Tu vuelo, Práctica, Hoy y el aviso de bienvenida (tarjeta #214).
   Mismo formato que data/bogota-local.js. Los textos van en castellano: los traduce i18n/traductor.js (lista i18n/fuentes/lisboa.txt).
   Todas las direcciones web se abrieron y revisaron el 19/11/2026 (algunas bloquean a los robots, pero abren en el navegador). */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.lisboa;
  if (!X) return;
  X.local = {
    mapa: "Lisboa",                              // se agrega a las búsquedas de Google Maps
    coordCentro: [38.715, -9.14],                // centro del mapa y del clima (la Baixa)
    limitesMapa: [[38.69, -9.22], [38.77, -9.09]],  // lo que se ve en el mapa al abrirlo
    zonasBase: [38, -9],                         // grados enteros para data/lisboa-zones.js
    fuera: "Fuera de Lisboa",
    pasaporte: "Pasaporte de Lisboa",
    pasaporteSub: "Marcá los lugares que conocés y ganá sellos: miradores, pastéis de nata, fado, azulejos, explorador de barrios…",
    trasnoche: "Trasnoche en Lisboa",
    interesNoche: "🎶 Fado y noche",
    metro: "Metro de Lisboa",                    // igual al título del bloque de transporte donde van las líneas
    sinEstacion: "Sin estación de metro cerca: mejor en tranvía, colectivo o app",
    buscarEj: "¿Qué buscás? Belém, pastel de nata, fado, miradores…",
    rutaEj: "Ej.: Torre de Belém, Castelo de São Jorge, Praça do Comércio…",
    rutaEj2: "Ej.: Alfama, Bairro Alto, Belém…",
    aerolineasEj: "Ej.: TAP, Iberia, Aerolíneas Argentinas…",
    atajos: [["Miradores", { q: "mirador" }], ["Fado", { q: "fado" }]],
    moneda: { codigo: "EUR", nombre: "Euro", plural: "euros", aria: "Monto en euros", formato: "pt-PT" },
    centro: { q: "Praça do Comércio, Lisboa", label: "Hasta el centro (Praça do Comércio)" },
    /* Recién llegado */
    aeropuertos: [
      { label: "Desde el aeropuerto Humberto Delgado", q: "Aeroporto Humberto Delgado, Lisboa" }
    ],
    uber: true,
    traslados: [   // [ícono, nombre, web, aclaración]
      ["✈️", "Aeropuerto de Lisboa", "https://www.aeroportolisboa.pt/", "Sitio oficial del aeropuerto"],
      ["🚇", "Metro de Lisboa", "https://www.metrolisboa.pt/", "Sitio oficial del metro"],
      ["🚋", "Carris (tranvías y colectivos)", "https://www.carris.pt/", "Sitio oficial de Carris"]
    ],
    aeropuertoTips: ["El metro (línea Vermelha) sale de la terminal 1 y es lo más barato para llegar al centro.",
      "Si llegás a la terminal 2, hay un colectivo que te lleva a la terminal 1.",
      "Los taxis tienen fila en llegadas y usan reloj. Las apps (Uber, Bolt, FREENOW) tienen un punto de encuentro señalado.",
      "En el metro se puede pagar con la tarjeta del banco sin contacto, o comprar la tarjeta navegante en las máquinas."],
    chips: [
      ["📱", "MEO", "https://www.meo.pt/", "Chip prepago"],
      ["📱", "Vodafone", "https://www.vodafone.pt/", "Chip prepago"],
      ["📱", "NOS", "https://www.nos.pt/", "Chip prepago"]
    ],
    chipsBuscar: "loja MEO Vodafone NOS",
    internetTips: ["Si tenés un chip de un país de la Unión Europea, funciona igual que en tu país.",
      "Si tu celular acepta eSIM, podés activarla antes de viajar: es lo más cómodo.",
      "Para comprar un chip te piden el pasaporte. Hay tiendas de las compañías en el aeropuerto y en los centros comerciales."],
    plataTips: ["Con tarjeta podés pagar en casi todos lados; algunas tascas chicas prefieren efectivo.",
      "Sacá plata en los cajeros Multibanco de los bancos, no en los de empresas de cambio.",
      "Si el cajero o el lector de tarjetas te ofrece cobrarte en tu moneda, elegí pagar en euros."],
    transporte: {
      t: "Prepará el transporte", s: "Tarjeta navegante, zapping y pase de 24 horas",
      acts: [
        ["🚇", "Metro de Lisboa", "https://www.metrolisboa.pt/", "Sitio oficial del metro"],
        ["🚋", "Carris", "https://www.carris.pt/", "Tranvías, colectivos y elevadores"],
        ["🎫", "Lisboa Card", "https://www.visitlisboa.com/en/p/lisboa-card", "Tarjeta turística oficial"],
        ["🚇", "Líneas del metro", "#/info/moverse", "Recorridos y consejos"]
      ],
      tips: ["Comprá la tarjeta navegante en una máquina del metro y cargala con zapping: cada viaje sale más barato.",
        "Si vas a usar mucho el tranvía y los elevadores, el pase de 24 horas conviene."]
    },
    moverseSub: "Metro, tranvías, elevadores, trenes y barcos",
    /* Alquiler de auto: agencias con oficinas en la ciudad y en el aeropuerto. Webs revisadas el 19/11/2026. */
    autos: {
      intro: "Para moverte por Lisboa no conviene: las calles son angostas y en subida, y cuesta estacionar. Sirve para salir, por ejemplo a la Arrábida, el Alentejo o la costa.",
      acts: [
        ["🚗", "Europcar", "https://www.europcar.pt/", "Web oficial para alquilar"],
        ["🚗", "Hertz", "https://www.hertz.pt/", "Web oficial para alquilar"],
        ["🚗", "Avis", "https://www.avis.com.pt/", "Web oficial para alquilar"],
        ["🚗", "Sixt", "https://www.sixt.pt/", "Web oficial para alquilar"]
      ],
      tips: ["Para alquilar te piden licencia de conducir vigente, pasaporte y una tarjeta de crédito a nombre de quien maneja, para la garantía.",
"Si tu licencia no es de la Unión Europea, llevá también el Permiso Internacional de Conducir.",
"Muchas autopistas tienen peaje electrónico, sin cabinas: pedí en la agencia el aparato (Via Verde) para pagarlo.",
"Para Sintra no conviene ir en auto: hay muy poco lugar para estacionar. Mejor en tren.",
"Antes de salir, revisá el auto y sacale fotos: si tiene algún golpe, que quede anotado en el contrato."]
    },
    /* Apps útiles. Número del App Store y nombre en Google Play revisados uno por uno el 19/11/2026. */
    apps: [
      ["🚇", "Para moverse", [
        ["navegante", "La app oficial del transporte de Lisboa: cargar la tarjeta y comprar pases.", 6484591306, "pt.card4b.navegante"],
        ["Uber", "Autos con chofer. Ves el precio antes de pedir.", 368677368, "com.ubercab"],
        ["Bolt", "Autos con chofer, suele ser más barata.", 675033630, "ee.mtakso.client"],
        ["FREENOW", "Para pedir taxis oficiales desde el celular.", 357852748, "taxi.android.client"],
        ["Citymapper", "Qué metro, tranvía o colectivo tomar, con horarios en vivo.", 469463298, "com.citymapper.app.release"],
        ["Moovit", "Transporte público con horarios en vivo.", 498477945, "com.tranzmate"],
        ["Google Maps", "Mapas y recorridos en transporte, a pie y en bici.", 585027354, "com.google.android.apps.maps"]
      ]],
      ["🍔", "Para comer", [
        ["TheFork", "Reservas en restaurantes, muchas veces con descuento.", 424850908, "com.lafourchette.lafourchette"],
        ["Glovo", "Comida, supermercado y farmacia a domicilio.", 951812684, "com.glovo"],
        ["Uber Eats", "Comida a domicilio.", 1058959277, "com.ubercab.eats"]
      ]],
      ["💬", "Para comunicarte", [
        ["WhatsApp", "En Portugal se usa para reservas, consultas y pedidos.", 310633997, "com.whatsapp"]
      ]]
    ],
    /* Paros y cortes: dónde fijarse antes de salir. Revisadas el 19/11/2026. */
    avisosLinks: [
      ["🚇", "Metro de Lisboa: el servicio hoy", "Estado de las líneas, cierres y huelgas.", "https://www.metrolisboa.pt/"],
      ["🚋", "Carris: avisos", "Cambios de recorrido de tranvías y colectivos.", "https://www.carris.pt/"],
      ["📰", "Noticias de hoy", "Huelgas y cortes en las noticias del día.", "https://news.google.com/search?q=Lisboa%20greve%20OR%20corte%20when%3A1d&hl=pt-PT&gl=PT&ceid=PT%3Apt-150"]
    ],
    /* Hoy: Lisboa no tiene una agenda oficial abierta que se pueda leer de forma automática.
       Van la agenda fija de data/lisboa-hoy.js y agendas para buscar más planes. */
    hoyNota: "⭐ Destacados de la semana. La agenda completa de la ciudad está en Visit Lisboa y en la agenda cultural de la ciudad: confirmá en su página antes de ir.",
    agendas: [
      ["🎭", "Visit Lisboa: qué hacer (agenda oficial)", "https://www.visitlisboa.com/"],
      ["📰", "Agenda Cultural de Lisboa", "https://www.agendalx.pt/"]
    ],
    /* Tu vuelo: pantallas de check-in (las mismas que se revisaron para las otras ciudades, más TAP). */
    aerolineas: [
    ["TAP Air Portugal", "https://www.flytap.com/en-pt/check-in"],
    ["Iberia", "https://www.iberia.com/es/autocheckin-online/"],
    ["Air Europa", "https://www.aireuropa.com/es/es/mytrips/checkin"],
    ["Aerolíneas Argentinas", "https://www.aerolineas.com.ar/?activeTab=checkIn"],
    ["LATAM", "https://www.latamairlines.com/es/es/check-in"],
    ["Azul", "https://www.voeazul.com.br/"],
    ["Avianca", "https://www.avianca.com/es/mi-reserva/servicios/check-in-online"],
    ["Ryanair", "https://www.ryanair.com/es/es/check-in"],
    ["Air France", "https://wwws.airfrance.fr/check-in"],
    ["KLM", "https://www.klm.com/check-in"],
    ["Lufthansa", "https://www.lufthansa.com/de/en/online-check-in"],
    ["Turkish Airlines", "https://www.turkishairlines.com/en-int/flights/manage-booking/"],
    ["United", "https://www.united.com/en/us/checkin"],
    ["American Airlines", "https://www.aa.com/check-in"]
    ],
    vueloAeropuertos: "Lisboa tiene un aeropuerto, el Humberto Delgado (LIS), dentro de la ciudad. La terminal 1 es la principal y tiene metro; la terminal 2 es para algunas low cost y se une con la 1 en colectivo. Es la base de TAP Air Portugal.",
    /* Frases útiles en portugués de Portugal: la frase queda como se dice allá y abajo se explica. */
    idioma: "pt",
    frases: [
    ["Bom dia!", "Buen día (a la tarde, \"Boa tarde\"; a la noche, \"Boa noite\")"],
    ["Olá!", "Hola"],
    ["Obrigado! · Obrigada!", "Gracias (\"obrigado\" si sos hombre, \"obrigada\" si sos mujer)"],
    ["Por favor.", "Por favor"],
    ["Desculpe.", "Perdón, disculpe"],
    ["Fala espanhol?", "¿Habla castellano?"],
    ["Uma bica, por favor.", "Un café corto, por favor"],
    ["Um galão, por favor.", "Un café con mucha leche, en vaso"],
    ["A conta, por favor.", "La cuenta, por favor"],
    ["Onde fica…?", "¿Dónde queda…?"],
    ["Não percebo.", "No entiendo"],
    ["Preciso de um médico.", "Necesito un médico"]
    ],
    /* Aviso de bienvenida: qué hay en Info */
    aviso: ["🛬 Cómo salir del aeropuerto y llegar a tu alojamiento", "🎫 Cómo pagar el metro, el tranvía y los elevadores", "👜 Cómo cuidarte de los carteristas del Tranvía 28",
      "🥖 Por qué te cobran el pan que ponen en la mesa", "🆘 Teléfonos de emergencia, para tocar y llamar"]
  };
})();
