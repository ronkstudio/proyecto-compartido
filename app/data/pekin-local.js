/* Lo que es propio de Pekín y la guía usa en Recién llegado, Tu vuelo, Práctica, Hoy y el aviso de bienvenida (tarjeta #247).
   Mismo formato que data/tokio-local.js. Los textos van en castellano: los traduce i18n/traductor.js (lista i18n/fuentes/pekin.txt).
   Todas las direcciones web se abrieron y revisaron el 26/11/2026 (algunas bloquean a los robots, pero abren en el navegador). */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.pekin;
  if (!X) return;
  X.local = {
    mapa: "Beijing",                             // se agrega a las búsquedas de Google Maps
    coordCentro: [39.905, 116.397],              // centro del mapa y del clima (la plaza de Tiananmen)
    limitesMapa: [[39.86, 116.32], [39.99, 116.49]],  // lo que se ve en el mapa al abrirlo
    zonasBase: [39, 116],                        // grados enteros para data/pekin-zones.js
    fuera: "Fuera de Pekín",
    pasaporte: "Pasaporte de Pekín",
    pasaporteSub: "Marcá los lugares que conocés y ganá sellos: palacios, templos, pato laqueado, hutongs, la Gran Muralla…",
    trasnoche: "Trasnoche en Pekín",
    interesNoche: "🏮 Hutongs y noche",
    metro: "Metro de Pekín",                     // igual al título del bloque de transporte donde van las líneas
    sinEstacion: "Sin estación de metro cerca: mejor en taxi o con DiDi",
    buscarEj: "¿Qué buscás? Pato laqueado, templos, hutongs, Gran Muralla…",
    rutaEj: "Ej.: Ciudad Prohibida, Templo del Cielo, Palacio de Verano…",
    rutaEj2: "Ej.: Wangfujing, Sanlitun, Qianmen…",
    aerolineasEj: "Ej.: Air China, Iberia, Air France…",
    atajos: [["Pato laqueado", { q: "pato" }], ["Hutongs", { q: "vida de barrio" }]],
    moneda: { codigo: "CNY", nombre: "Yuan", plural: "yuanes", aria: "Monto en yuanes", formato: "zh-CN" },
    centro: { q: "Tiananmen Square, Beijing", label: "Hasta el centro (plaza de Tiananmen)" },
    /* Recién llegado */
    aeropuertos: [
      { label: "Desde el aeropuerto Capital", q: "Beijing Capital International Airport" },
      { label: "Desde el aeropuerto Daxing", q: "Beijing Daxing International Airport" }
    ],
    uber: false,                                 // Uber no funciona en China: se usa DiDi
    traslados: [   // [ícono, nombre, web, aclaración]
      ["✈️", "Aeropuerto Capital", "https://en.bcia.com.cn/", "Sitio oficial del aeropuerto"],
      ["✈️", "Aeropuerto Daxing", "https://www.bdia.com.cn/en/", "Sitio oficial del aeropuerto"],
      ["🚄", "Trenes de China (12306)", "https://www.12306.cn/en/index.html", "Pasajes de tren oficiales, con pasaporte"],
      ["🚕", "DiDi", "https://www.didiglobal.com/", "Autos y taxis por app"]
    ],
    aeropuertoTips: ["Del aeropuerto Capital, el tren expreso te deja en Dongzhimen o Beixinqiao, donde combinás con el metro.",
      "Del aeropuerto Daxing, el tren expreso va hasta Caoqiao, en el sur de la ciudad.",
      "En los dos aeropuertos, en la salida de llegadas internacionales, el mostrador \"Beijing Service\" vende chips de celular y te ayuda con las apps de pago.",
      "Tomá taxi solo en la fila oficial o pedilo con DiDi: no aceptes ofertas adentro del aeropuerto."],
    chips: [
      ["📱", "China Mobile", "https://www.10086.cn/", "La compañía de celular más grande de China"]
    ],
    chipsBuscar: "SIM card Beijing airport",
    internetTips: ["Con un chip chino o el wifi del hotel no funcionan Google, WhatsApp ni Instagram.",
      "El roaming de tu compañía o una eSIM de viaje comprada antes de salir suelen seguir funcionando con todas tus apps.",
      "En los aeropuertos hay chips chinos para turistas: se compran con el pasaporte."],
    plataTips: ["Antes de viajar, instalá Alipay y WeChat y cargales tu tarjeta: en China casi todo se paga con el celular.",
      "Llevá algo de efectivo en billetes chicos, por si la app falla.",
      "Si el cajero o el lector de tarjetas te ofrece cobrarte en tu moneda, elegí pagar en yuanes."],
    transporte: {
      t: "Prepará el transporte", s: "Metro con la tarjeta del banco, DiDi y trenes",
      acts: [
        ["🚇", "Metro de Pekín", "https://english.beijing.gov.cn/travellinginbeijing/transportation/", "El transporte, en la web oficial de la ciudad"],
        ["🚄", "Trenes de China (12306)", "https://www.12306.cn/en/index.html", "Pasajes de tren oficiales"],
        ["🚇", "Líneas del metro", "#/info/moverse", "Recorridos y consejos"]
      ],
      tips: ["En el metro pasás el molinete apoyando tu tarjeta de crédito o débito sin contacto: no hace falta comprar boleto.",
        "Para taxis y bicis compartidas, usá DiDi o Alipay."]
    },
    moverseSub: "Metro, trenes bala, aeropuertos y DiDi",
    /* Alquiler de auto: con el permiso internacional no alcanza. Webs revisadas el 26/11/2026. */
    autos: {
      intro: "No conviene: en China el Permiso Internacional de Conducir no vale y hace falta un permiso chino. Para salir de la ciudad, mejor tren, una excursión o un auto con chofer.",
      acts: [
        ["🚗", "eHi", "https://www.1hai.cn/", "Alquiler de autos (en chino)"],
        ["🚗", "CAR Inc", "https://www.zuche.com/", "Alquiler de autos (en chino)"]
      ],
      tips: ["China no reconoce el Permiso Internacional de Conducir: para manejar hace falta un permiso temporal chino.",
"Se maneja por la derecha, pero el tránsito es intenso y las motos eléctricas aparecen por todos lados.",
"Para la Gran Muralla y otras excursiones, muchas agencias ofrecen auto con chofer por el día."]
    },
    /* Apps útiles. Número del App Store y nombre en Google Play revisados uno por uno el 26/11/2026. */
    apps: [
      ["💳", "Para pagar", [
        ["Alipay", "La app de pagos que se usa en todos lados. Acepta tarjetas del exterior y tiene DiDi, bicis y entradas adentro.", 333206289, "com.eg.android.AlipayGphone"],
        ["WeChat", "Mensajes y pagos: casi todos los chinos la usan.", 414478124, "com.tencent.mm"]
      ]],
      ["🚇", "Para moverse", [
        ["DiDi", "Para pedir autos y taxis, en inglés.", 554499054, "com.sdu.didi.psnger"],
        ["AMap", "Mapas y recorridos en transporte que funcionan bien en China.", 461703208, "com.autonavi.minimap"],
        ["Trip.com", "Pasajes de tren, hoteles y entradas, en inglés.", 681752345, "ctrip.english"]
      ]],
      ["🛟", "Para estar tranquilo", [
        ["IQAir AirVisual", "La calidad del aire, para saber si conviene usar barbijo.", 1048912974, "com.airvisual"],
        ["Pleco", "Diccionario de chino: traduce carteles con la cámara.", 341922306, "com.pleco.chinesesystem"]
      ]]
    ],
    /* Paros y cortes: dónde fijarse antes de salir. Revisadas el 26/11/2026. */
    avisosLinks: [
      ["🏙️", "Gobierno de Pekín: noticias", "Cambios en el transporte y en las atracciones.", "https://english.beijing.gov.cn/"],
      ["📰", "Noticias de hoy", "Cortes, tormentas y cierres en las noticias del día.", "https://news.google.com/search?q=Beijing%20subway%20OR%20closure%20OR%20storm%20when%3A1d&hl=en-US&gl=US&ceid=US%3Aen"]
    ],
    /* Hoy: Pekín no tiene una agenda oficial abierta que se pueda leer de forma automática.
       Van la agenda fija de data/pekin-hoy.js y agendas para buscar más planes. */
    hoyNota: "⭐ Destacados de la semana. Para más planes, mirá la agenda de Visit Beijing y la del Gran Teatro Nacional: confirmá antes de ir.",
    agendas: [
      ["🎭", "Visit Beijing: eventos (web oficial de turismo)", "https://english.visitbeijing.com.cn/"],
      ["🎻", "Gran Teatro Nacional: programación", "https://en.chncpa.org/"]
    ],
    /* Tu vuelo: pantallas de check-in. */
    aerolineas: [
    ["Air China", "https://www.airchina.com.cn/en/"],
    ["China Eastern", "https://us.ceair.com/en/"],
    ["China Southern", "https://www.csair.com/en/"],
    ["Hainan Airlines", "https://www.hainanairlines.com/"],
    ["Iberia", "https://www.iberia.com/es/autocheckin-online/"],
    ["Air France", "https://wwws.airfrance.fr/check-in"],
    ["KLM", "https://www.klm.com/check-in"],
    ["Lufthansa", "https://www.lufthansa.com/de/en/online-check-in"],
    ["Turkish Airlines", "https://www.turkishairlines.com/en-int/flights/manage-booking/"],
    ["United", "https://www.united.com/en/us/checkin"]
    ],
    vueloAeropuertos: "Pekín tiene dos aeropuertos internacionales: Capital (PEK), al noreste y más cerca del centro, y Daxing (PKX), al sur y más lejos. Fijate a cuál llega tu vuelo: cambia cómo vas al hotel.",
    /* Frases útiles en chino mandarín: la frase va en pinyin (como se lee) y en chino, y abajo se explica. */
    idioma: "zh",
    frases: [
    ["Nǐ hǎo · 你好", "Hola"],
    ["Xièxie · 谢谢", "Gracias"],
    ["Bù hǎo yìsi · 不好意思", "Perdón, disculpe"],
    ["Nǐ huì shuō Yīngyǔ ma? · 你会说英语吗？", "¿Habla inglés?"],
    ["Wǒ yào zhège · 我要这个", "Quiero esto (señalando)"],
    ["Duōshao qián? · 多少钱？", "¿Cuánto cuesta?"],
    ["Tài guì le · 太贵了", "Es muy caro"],
    ["Mǎidān · 买单", "La cuenta, por favor"],
    ["… zài nǎr? · …在哪儿？", "¿Dónde queda…?"],
    ["Xǐshǒujiān zài nǎr? · 洗手间在哪儿？", "¿Dónde está el baño?"],
    ["Bú yào là · 不要辣", "Sin picante, por favor"],
    ["Wǒ tīng bù dǒng · 我听不懂", "No entiendo"],
    ["Wǒ xūyào yīshēng · 我需要医生", "Necesito un médico"]
    ],
    /* Aviso de bienvenida: qué hay en Info */
    aviso: ["🛬 Cómo llegar desde los aeropuertos Capital o Daxing a tu alojamiento", "💳 Cómo pagar con Alipay, WeChat o la tarjeta del banco en el metro", "📵 Qué apps no funcionan en China y cómo prepararte",
      "🛂 Cuándo podés entrar sin visa", "🆘 Teléfonos de emergencia, para tocar y llamar"]
  };
})();
