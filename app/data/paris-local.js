/* Lo que es propio de París y la guía usa en Recién llegado, Tu vuelo, Práctica, Hoy y el aviso de bienvenida (tarjeta #102).
   Mismo formato que data/caba-local.js. Los textos van en castellano: los traduce i18n/traductor.js (lista i18n/fuentes/paris.txt).
   Todas las direcciones web se abrieron y revisaron el 13/11/2026. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.paris;
  if (!X) return;
  X.local = {
    mapa: "Paris",                               // se agrega a las búsquedas de Google Maps
    coordCentro: [48.8566, 2.3522],              // centro del mapa y del clima (Hôtel de Ville)
    limitesMapa: [[48.815, 2.225], [48.902, 2.47]],   // lo que se ve en el mapa al abrirlo
    zonasBase: [48, 2],                          // grados enteros para data/paris-zones.js (París no cruza ningún grado entero)
    fuera: "Fuera de París",
    pasaporte: "Pasaporte parisino",
    pasaporteSub: "Marcá los lugares que conocés y ganá sellos: museos, bistrós, explorador de barrios…",
    trasnoche: "Trasnoche parisina",
    interesNoche: "🍸 Bares y noche",
    metro: "Metro y RER",                        // igual al título del bloque de transporte donde van las líneas
    sinEstacion: "Sin estación cerca: mejor bus o app",
    buscarEj: "¿Qué buscás? Museo, croissant, jazz, Marais…",
    rutaEj: "Ej.: Torre Eiffel, Louvre, Montmartre…",
    rutaEj2: "Ej.: Torre Eiffel, Louvre, Gare du Nord…",
    aerolineasEj: "Ej.: Air France, Iberia, LATAM…",
    atajos: [["Museos", { q: "museo" }], ["Panaderías", { q: "panaderia" }]],
    moneda: { codigo: "EUR", nombre: "Euro", plural: "euros", aria: "Monto en euros", formato: "es-ES" },
    centro: { q: "Hôtel de Ville, Paris", label: "Hasta el centro (Hôtel de Ville)" },
    /* Recién llegado */
    aeropuertos: [
      { label: "Desde el aeropuerto Charles de Gaulle (CDG)", q: "Aéroport Paris-Charles de Gaulle" },
      { label: "Desde el aeropuerto de Orly", q: "Aéroport de Paris-Orly" },
      { label: "Desde el aeropuerto de Beauvais", q: "Aéroport de Beauvais-Tillé" }
    ],
    uber: true,
    traslados: [   // [ícono, nombre, web, aclaración]
      ["🚆", "Transporte público a CDG", "https://www.parisaeroport.fr/en/passengers/transport-parking/public-transport-paris/cdg", "RER B, bus 9517 y buses nocturnos"],
      ["🚇", "Transporte público a Orly", "https://www.parisaeroport.fr/en/passengers/transport-parking/public-transport-paris/ory", "Metro 14, la opción más rápida"],
      ["🚌", "Aeropuerto de Beauvais", "https://www.aeroportparisbeauvais.com/en/passengers", "Sitio oficial: el micro hasta París"],
      ["🚕", "Bolt", "https://bolt.eu/en/cities/paris/"]
    ],
    aeropuertoTips: ["Desde Charles de Gaulle, lo más simple es el RER B: llega a Gare du Nord y Châtelet en unos 35 minutos.",
      "Desde Orly, el metro 14 te deja en el centro en unos 25 minutos.",
      "Para ir o volver del aeropuerto en transporte público necesitás el boleto Aeropuertos; el boleto común de metro no sirve.",
      "Los taxis oficiales esperan en la fila frente a la terminal y tienen tarifa fija hasta París. No aceptes ofertas de gente en el hall."],
    chips: [
      ["📱", "Orange", "https://boutique.orange.fr/vitrine/offres-prepayees/", "Chip prepago"],
      ["📱", "SFR", "https://www.sfr.fr/offre-mobile/carte-prepayee", "Chip prepago"]
    ],
    chipsBuscar: "Orange SFR Bouygues Free boutique",
    internetTips: ["En Francia, para activar un chip prepago te piden el pasaporte.",
      "Si tu celular acepta eSIM, podés activarla antes de viajar.",
      "Muchos parques, plazas y cafés tienen Wi-Fi gratis."],
    plataTips: ["Con tarjeta podés pagar casi todo, también sin contacto.",
      "Sacá plata en cajeros de bancos: los cajeros sueltos de las zonas turísticas cobran más.",
      "Si el cajero o el lector de tarjetas te ofrece cobrarte en tu moneda, elegí pagar en euros."],
    transporte: {
      t: "Prepará el transporte", s: "Boletos, pases y cómo moverte",
      acts: [
        ["🎫", "Boletos para visitantes", "https://www.iledefrance-mobilites.fr/en/titres-et-tarifs/liste?p=visiteur", "Sitio oficial de Île-de-France Mobilités"],
        ["🚇", "Líneas de metro y RER", "#/info/moverse", "Recorridos y consejos"]
      ],
      tips: ["Comprá una tarjeta Navigo Easy y cargale los boletos: sirve para todo el viaje.",
        "Para ir o volver de los aeropuertos necesitás el boleto Aeropuertos o un pase que los incluya."]
    },
    moverseSub: "Boletos, metro, taxis",
    /* Alquiler de auto (tarjeta #185): agencias con oficinas en la ciudad y en el aeropuerto. Cada web se abrió y revisó el 14/11/2026. */
    autos: {
      intro: "Para moverte por París no hace falta: el transporte llega a todos lados y estacionar es caro. Sirve para salir de la ciudad, por ejemplo al valle del Loira, a Normandía o a Giverny.",
      acts: [
        ["🚗", "Europcar", "https://www.europcar.fr/fr-fr", "Web oficial para alquilar"],
        ["🚗", "Hertz", "https://www.hertz.fr/", "Web oficial para alquilar"],
        ["🚗", "Avis", "https://www.avis.fr/", "Web oficial para alquilar"],
        ["🚗", "Sixt", "https://www.sixt.fr/", "Web oficial para alquilar"],
        ["🚗", "Enterprise", "https://www.enterprise.fr/", "Web oficial para alquilar"]
      ],
      tips: ["Para alquilar te piden licencia de conducir vigente, pasaporte y una tarjeta de crédito a nombre de quien maneja, para la garantía.",
"Si tu licencia no es de la Unión Europea y no está en francés, la ley pide que la acompañes con el Permiso Internacional de Conducir o una traducción oficial.",
"París es zona de bajas emisiones: los autos necesitan la etiqueta Crit'Air. Los de alquiler ya la traen.",
"Las autopistas de Francia tienen peaje: se paga con tarjeta en las cabinas.",
"Antes de salir, revisá el auto y sacale fotos: si tiene algún golpe, que quede anotado en el contrato."]
    },
    /* Apps útiles (tarjeta #137). Páginas del App Store ("ios") y Google Play ("android") revisadas el 13/11/2026. */
    apps: [
      ["🚇", "Para moverse", [
        ["Île-de-France Mobilités", "La app oficial: recorridos y boletos en el celular.", 484527651, "com.applidium.vianavigo"],
        ["Bonjour RATP", "Recorridos y estado del metro, RER y buses.", 507107090, "com.fabernovel.ratp"],
        ["Citymapper", "Recorridos en transporte, con salida de vagón recomendada.", 469463298, "com.citymapper.app.release"],
        ["SNCF Connect", "Trenes a toda Francia y a Versalles: horarios, boletos y demoras.", 343889987, "com.vsct.vsc.mobile.horaireetresa.android"],
        ["Google Maps", "Mapas y recorridos en transporte y a pie.", 585027354, "com.google.android.apps.maps"],
        ["G7 Taxi", "Para pedir taxis oficiales.", 402196027, "fr.taxisg7.grandpublic"],
        ["Uber", "Viajes en auto. Ves el precio antes de pedir.", 368677368, "com.ubercab"],
        ["Bolt", "Viajes en auto, también con precio de antemano.", 675033630, "ee.mtakso.client"],
        ["Heetch", "Viajes en auto, muy usada de noche.", 693137280, "com.heetch"],
        ["Vélib'", "Las bicis públicas de París.", 577807727, "com.paris.velib"]
      ]],
      ["🍔", "Para comer", [
        ["TheFork", "Reservas en restaurantes, a veces con descuento.", 424850908, "com.lafourchette.lafourchette"],
        ["Uber Eats", "Comida a domicilio.", 1058959277, "com.ubercab.eats"],
        ["Deliveroo", "Comida a domicilio.", 1001501844, "com.deliveroo.orderapp"]
      ]],
      ["💬", "Para comunicarte", [
        ["WhatsApp", "La más usada para escribir y llamar.", 310633997, "com.whatsapp"]
      ]]
    ],
    /* Paros, marchas y cortes (tarjeta #120): dónde fijarse antes de salir. Revisadas el 13/11/2026. Avisos puntuales: data/avisos.json. */
    avisosLinks: [
      ["🚇", "Estado del metro, RER y buses", "Demoras, obras y huelgas, en vivo (Île-de-France Mobilités). En francés.", "https://me-deplacer.iledefrance-mobilites.fr/infos-trafic/metro"],
      ["📰", "Noticias de hoy", "Huelgas (grève) y manifestaciones (manifestation) en las noticias del día.", "https://news.google.com/search?q=Paris%20gr%C3%A8ve%20OR%20manifestation%20when%3A1d&hl=fr&gl=FR&ceid=FR%3Afr"]
    ],
    /* Hoy: el archivo de eventos que arma herramientas/armar-hoy-paris.ps1 con la agenda oficial de la ciudad (Que faire à Paris),
       y otras agendas para buscar más planes. */
    hoy: "data/hoy-paris.json",
    hoyNota: "⭐ Destacados de la semana. 📅 Agenda oficial de la Ciudad de París. Los títulos están en francés. Confirmá en su página antes de ir.",
    agendas: [
      ["📰", "Que faire à Paris: agenda de la ciudad", "https://www.paris.fr/quefaire"],
      ["🖼️", "Paris Musées: muestras", "https://www.parismusees.paris.fr/fr/expositions"]
    ],
    /* Tu vuelo: pantallas de check-in. Cada una se abrió y se revisó el 13/11/2026. */
    aerolineas: [
    ["Air France", "https://wwws.airfrance.fr/check-in"],
    ["Transavia", "https://www.transavia.com/en-EU/my-transavia/check-in/login/"],
    ["Iberia", "https://www.iberia.com/es/autocheckin-online/"],
    ["Vueling", "https://tickets.vueling.com/manage?event=checkin&culture=en-GB"],
    ["Air Europa", "https://www.aireuropa.com/es/es/mytrips/checkin"],
    ["Ryanair", "https://www.ryanair.com/gb/en/lp/check-in"],
    ["Wizz Air", "https://www.wizzair.com/en-gb/help-centre/check-in-and-boarding"],
    ["LATAM", "https://www.latamairlines.com/es/es/check-in"],
    ["Lufthansa", "https://www.lufthansa.com/de/en/online-check-in"],
    ["KLM", "https://www.klm.com/check-in"],
    ["British Airways", "https://www.britishairways.com/travel/olcilandingpageauthreq/public/en_gb"],
    ["ITA Airways", "https://www.ita-airways.com/it/en/book-and-prepare/travel-information/check-in-information"],
    ["TAP Air Portugal", "https://www.flytap.com/en-us/check-in-information"],
    ["Turkish Airlines", "https://www.turkishairlines.com/en-int/flights/manage-booking/"],
    ["Emirates", "https://www.emirates.com/english/manage-booking/online-check-in/"],
    ["Qatar Airways", "https://cki.qatarairways.com/cki/dashboard"],
    ["United", "https://www.united.com/en/us/checkin"],
    ["Delta", "https://oci.delta.com/index.html"],
    ["American Airlines", "https://www.aa.com/check-in"]
    ],
    vueloAeropuertos: "París tiene dos aeropuertos grandes, Charles de Gaulle (CDG) y Orly (ORY), y uno más lejano para vuelos baratos, Beauvais (BVA). Fijate bien cuál es el tuyo y de qué terminal sale tu vuelo.",
    /* Frases para defenderte: la frase queda en francés y abajo se explica para qué sirve */
    idioma: "fr",
    frases: [
    ["Bonjour !", "Saludo obligatorio al entrar a cualquier negocio"],
    ["L'addition, s'il vous plaît.", "Para pedir la cuenta en un bar o restaurante"],
    ["Je peux payer par carte ?", "Antes de pedir, por si solo aceptan efectivo"],
    ["C'est combien ?", "Para preguntar el precio"],
    ["Pour aller à… ?", "Para pedir indicaciones en la calle"],
    ["Où sont les toilettes ?", "Para encontrar el baño"],
    ["Une table pour deux, s'il vous plaît.", "Al llegar a un restaurante"],
    ["Qu'est-ce que vous me conseillez ?", "Para pedir una sugerencia al mozo"],
    ["Une carafe d'eau, s'il vous plaît.", "Para pedir agua de la canilla, que es gratis"],
    ["Je suis cœliaque. Vous avez des plats sans gluten ?", "Para pedir comida sin gluten"],
    ["Pardon, je parle très peu français.", "Para que te hablen más despacio"],
    ["J'ai besoin d'un médecin.", "En una urgencia"],
    ["Merci beaucoup !", "Para agradecer"]
    ],
    /* Aviso de bienvenida: qué hay en Info */
    aviso: ["🛬 Cómo salir del aeropuerto y llegar a tu alojamiento", "💳 Cómo pagar y cuánto dejar de propina", "🎫 Qué boleto comprar para el metro y el aeropuerto",
      "⚠️ Las estafas más comunes y cómo evitarlas", "🆘 Teléfonos de emergencia, para tocar y llamar"]
  };
})();
