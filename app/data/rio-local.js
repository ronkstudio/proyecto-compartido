/* Lo que es propio de Río de Janeiro y la guía usa en Recién llegado, Tu vuelo, Práctica, Hoy y el aviso de bienvenida (tarjeta #203).
   Mismo formato que data/amsterdam-local.js. Los textos van en castellano: los traduce i18n/traductor.js (lista i18n/fuentes/rio.txt).
   Todas las direcciones web se abrieron y revisaron el 18/11/2026 (algunas bloquean a los robots, pero abren en el navegador). */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.rio;
  if (!X) return;
  X.local = {
    mapa: "Rio de Janeiro",                      // se agrega a las búsquedas de Google Maps
    coordCentro: [-22.945, -43.19],              // centro del mapa y del clima (entre el Centro y Copacabana)
    limitesMapa: [[-23.01, -43.25], [-22.89, -43.15]],  // lo que se ve en el mapa al abrirlo
    zonasBase: [-22, -43],                       // grados enteros para data/rio-zones.js
    fuera: "Fuera de Río",
    pasaporte: "Pasaporte de Río",
    pasaporteSub: "Marcá los lugares que conocés y ganá sellos: playas, miradores, botecos, samba, explorador de barrios…",
    trasnoche: "Trasnoche en Río",
    interesNoche: "🎶 Samba y noche",
    metro: "Metro",                              // igual al título del bloque de transporte donde van las líneas
    sinEstacion: "Sin estación de metro cerca: mejor en app, en colectivo o a pie",
    buscarEj: "¿Qué buscás? Cristo, playas, samba, feijoada, Lapa…",
    rutaEj: "Ej.: Cristo Redentor, Pan de Azúcar, Escadaria Selarón…",
    rutaEj2: "Ej.: Copacabana, Ipanema, Centro…",
    aerolineasEj: "Ej.: LATAM, GOL, Aerolíneas Argentinas…",
    atajos: [["Playas", { q: "playa" }], ["Miradores", { q: "mirador" }]],
    moneda: { codigo: "BRL", nombre: "Real", plural: "reales", aria: "Monto en reales", formato: "pt-BR" },
    centro: { q: "Praia de Copacabana, Rio de Janeiro", label: "Hasta Copacabana" },
    /* Recién llegado */
    aeropuertos: [
      { label: "Desde el aeropuerto del Galeão", q: "Aeroporto Internacional do Rio de Janeiro Galeão" },
      { label: "Desde el aeropuerto Santos Dumont", q: "Aeroporto Santos Dumont" }
    ],
    uber: true,
    traslados: [   // [ícono, nombre, web, aclaración]
      ["✈️", "Galeão: cómo llegar a la ciudad", "https://www.riogaleao.com/en/", "Sitio oficial del aeropuerto"],
      ["🚇", "MetrôRio: pagar con la tarjeta del banco", "https://www.metrorio.com.br/", "Sitio oficial del metro"],
      ["💳", "Jaé: la tarjeta de colectivos, BRT y VLT", "https://jae.com.br/", "Sitio oficial de Jaé"]
    ],
    aeropuertoTips: ["Lo más simple desde el Galeão es pedir un auto por app (Uber o 99) en el punto de encuentro señalado, o tomar un taxi de las cooperativas oficiales dentro del aeropuerto.",
      "No aceptes viajes de gente que te ofrece auto en el hall de llegadas.",
      "El BRT y los colectivos son más baratos, pero lentos y poco cómodos con valijas.",
      "El Santos Dumont está en el Centro: de ahí a Copacabana es un viaje corto en app, y el VLT pasa en la puerta.",
      "Antes de salir, guardá el celular: no lo lleves en la mano en la calle."],
    chips: [
      ["📱", "Vivo", "https://www.vivo.com.br/", "Chip prepago"],
      ["📱", "Claro", "https://www.claro.com.br/", "Chip prepago"],
      ["📱", "TIM", "https://www.tim.com.br/", "Chip prepago"]
    ],
    chipsBuscar: "loja Vivo Claro TIM",
    internetTips: ["Si tu celular acepta eSIM, podés activarla antes de viajar: es lo más cómodo.",
      "Para comprar un chip en Brasil te piden el pasaporte, y a veces un CPF (número de contribuyente): en las tiendas de las compañías lo resuelven.",
      "Muchos bares, hoteles y shoppings tienen Wi-Fi gratis."],
    plataTips: ["Con tarjeta podés pagar casi todo, también sin contacto.",
      "Llevá algo de efectivo para la playa, los kioscos y los puestos chicos.",
      "Si el cajero o el lector de tarjetas te ofrece cobrarte en tu moneda, elegí pagar en reales."],
    transporte: {
      t: "Prepará el transporte", s: "Metro con la tarjeta del banco, Jaé y apps",
      acts: [
        ["🚇", "MetrôRio", "https://www.metrorio.com.br/", "Sitio oficial del metro"],
        ["💳", "Jaé", "https://jae.com.br/", "Sitio oficial de Jaé"],
        ["🚇", "Líneas de metro", "#/info/moverse", "Recorridos y consejos"]
      ],
      tips: ["En el metro alcanza con la tarjeta del banco sin contacto o el celular: la apoyás en el molinete.",
        "Para colectivos, BRT y VLT, descargá Jaé o comprá la tarjeta. De noche y a zonas sin metro, mejor en app."]
    },
    moverseSub: "Metro, colectivos, VLT y apps",
    /* Alquiler de auto: agencias con oficinas en la ciudad y en los aeropuertos. Webs revisadas el 18/11/2026. */
    autos: {
      intro: "Para moverte por Río no hace falta: el tránsito es pesado, estacionar es difícil y en la ciudad todo se resuelve con metro y apps. Sirve para salir, por ejemplo a Petrópolis, a Búzios o a la Costa Verde.",
      acts: [
        ["🚗", "Localiza", "https://www.localiza.com/brasil/pt-br", "Web oficial para alquilar"],
        ["🚗", "Movida", "https://www.movida.com.br/", "Web oficial para alquilar"],
        ["🚗", "Unidas", "https://www.unidas.com.br/", "Web oficial para alquilar"],
        ["🚗", "Hertz", "https://www.hertz.com.br/", "Web oficial para alquilar"]
      ],
      tips: ["Para alquilar te piden licencia de conducir vigente, pasaporte y una tarjeta de crédito a nombre de quien maneja, para la garantía.",
"Con licencia de un país del Mercosur alcanza para manejar como turista; si no, llevá también el Permiso Internacional de Conducir.",
"Hay peajes en las rutas: muchos autos de alquiler tienen el pago automático incluido, preguntá al retirarlo.",
"No dejes nada a la vista dentro del auto y estacioná en lugares con cuidador o en estacionamientos.",
"Usá Waze o Google Maps, pero evitá los atajos que te mandan por calles que no conocés de noche.",
"Antes de salir, revisá el auto y sacale fotos: si tiene algún golpe, que quede anotado en el contrato."]
    },
    /* Apps útiles. Número del App Store y nombre en Google Play revisados uno por uno el 18/11/2026. */
    apps: [
      ["🚇", "Para moverse", [
        ["MetrôRio", "La app oficial del metro: recorridos, avisos del servicio y recargas.", 827533332, "com.thera.metrofacil"],
        ["Jaé", "La tarjeta digital para pagar colectivos, BRT y VLT.", 6449981829, "br.com.billingpay.app.pf"],
        ["Uber", "Autos con chofer. Ves el precio antes de pedir.", 368677368, "com.ubercab"],
        ["99", "La otra app de autos con chofer muy usada en Brasil, con taxis también.", 553663691, "com.taxis99"],
        ["Moovit", "Recorridos en colectivo y metro, con horarios en vivo.", 498477945, "com.tranzmate"],
        ["Google Maps", "Mapas y recorridos en transporte, a pie y en bici.", 585027354, "com.google.android.apps.maps"]
      ]],
      ["🍔", "Para comer", [
        ["iFood", "La app de comida a domicilio más usada de Brasil.", 483017239, "br.com.brainweb.ifood"],
        ["Rappi", "Comida, supermercado y farmacia a domicilio.", 984044296, "com.grability.rappi"]
      ]],
      ["💬", "Para comunicarte", [
        ["WhatsApp", "En Brasil se usa para todo: reservas, consultas y hasta para pedir.", 310633997, "com.whatsapp"]
      ]]
    ],
    /* Paros y cortes: dónde fijarse antes de salir. Revisadas el 18/11/2026. */
    avisosLinks: [
      ["🚇", "MetrôRio: el servicio hoy", "Avisos de demoras y cambios en las líneas del metro.", "https://www.metrorio.com.br/"],
      ["📰", "Noticias de hoy", "Paros (greve), cortes y manifestaciones en las noticias del día.", "https://news.google.com/search?q=Rio%20de%20Janeiro%20greve%20OR%20interdi%C3%A7%C3%A3o%20when%3A1d&hl=pt-BR&gl=BR&ceid=BR%3Apt-419"]
    ],
    /* Hoy: Río no tiene una agenda oficial abierta que se pueda leer de forma automática.
       Van la agenda fija de data/rio-hoy.js y agendas para buscar más planes. */
    hoyNota: "⭐ Destacados de la semana. La agenda completa de la ciudad está en Riotur: confirmá en su página antes de ir.",
    agendas: [
      ["🎭", "Riotur: qué hacer en Río (agenda oficial)", "https://riotur.rio/"]
    ],
    /* Tu vuelo: pantallas de check-in (las mismas que se revisaron para las otras ciudades, más GOL y Azul). */
    aerolineas: [
    ["LATAM", "https://www.latamairlines.com/es/es/check-in"],
    ["GOL", "https://www.voegol.com.br/check-in"],
    ["Azul", "https://www.voeazul.com.br/"],
    ["Aerolíneas Argentinas", "https://www.aerolineas.com.ar/?activeTab=checkIn"],
    ["Avianca", "https://www.avianca.com/es/mi-reserva/servicios/check-in-online"],
    ["Copa Airlines", "https://checkin.copaair.com/"],
    ["Iberia", "https://www.iberia.com/es/autocheckin-online/"],
    ["Air Europa", "https://www.aireuropa.com/es/es/mytrips/checkin"],
    ["TAP Air Portugal", "https://www.flytap.com/en-us/check-in-information"],
    ["Air France", "https://wwws.airfrance.fr/check-in"],
    ["KLM", "https://www.klm.com/check-in"],
    ["Lufthansa", "https://www.lufthansa.com/de/en/online-check-in"],
    ["British Airways", "https://www.britishairways.com/travel/olcilandingpageauthreq/public/en_gb"],
    ["ITA Airways", "https://www.ita-airways.com/it/en/book-and-prepare/travel-information/check-in-information"],
    ["Turkish Airlines", "https://www.turkishairlines.com/en-int/flights/manage-booking/"],
    ["Emirates", "https://www.emirates.com/english/manage-booking/online-check-in/"],
    ["Qatar Airways", "https://cki.qatarairways.com/cki/dashboard"],
    ["United", "https://www.united.com/en/us/checkin"],
    ["Delta", "https://oci.delta.com/index.html"],
    ["American Airlines", "https://www.aa.com/check-in"]
    ],
    vueloAeropuertos: "Río tiene dos aeropuertos: el Galeão (GIG), el internacional, en la Ilha do Governador, y el Santos Dumont (SDU), de vuelos nacionales, en pleno Centro. Fijate bien en tu pasaje de cuál sale tu vuelo.",
    /* Frases para defenderte: en Río se habla portugués; con castellano lento muchos te entienden, pero unas palabras ayudan. La frase queda en portugués y abajo se explica. */
    idioma: "pt",
    frases: [
    ["Bom dia!", "Buen día (a la tarde, \"Boa tarde\"; a la noche, \"Boa noite\")"],
    ["Oi!", "Hola, para cualquier momento"],
    ["Obrigado! · Obrigada!", "Gracias (\"obrigado\" si sos hombre, \"obrigada\" si sos mujer)"],
    ["Por favor.", "Por favor"],
    ["Tchau!", "Chau"],
    ["A conta, por favor.", "Para pedir la cuenta"],
    ["Quanto custa?", "Para preguntar el precio"],
    ["Aceita cartão?", "Para preguntar si aceptan tarjeta"],
    ["Onde fica o banheiro?", "Para encontrar el baño"],
    ["Um chope, por favor.", "Para pedir una cerveza tirada"],
    ["Preciso de um médico.", "En una urgencia"],
    ["Fala espanhol?", "Para preguntar si te pueden atender en castellano"]
    ],
    /* Aviso de bienvenida: qué hay en Info */
    aviso: ["🛬 Cómo salir del aeropuerto y llegar a tu alojamiento", "💳 Cómo pagar el metro con la tarjeta del banco", "📱 Cómo cuidar el celular en la calle y en la playa",
      "🌊 Cómo bañarte seguro en el mar", "🆘 Teléfonos de emergencia, para tocar y llamar"]
  };
})();
