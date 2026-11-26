/* Datos de la ciudad: Pekín (tarjeta #247).
   Tiene la estructura y toda la información de "Info". Los lugares están en data/pekin-lugares.js.
   price: 0 = gratis, 1 = $, 2 = $$, 3 = $$$, 4 = $$$$, null = no aplica.

   De dónde salen los datos (revisados el 26/11/2026; detalle en docs/fuentes-pekin.md):
   english.beijing.gov.cn (metro con tarjetas del exterior, línea 12345 en 8 idiomas, devolución de impuestos, GO BEIJING),
   avisos de las embajadas chinas del 4/11/2025 (ingreso sin visa hasta el 31/12/2026), nia.gov.cn (tránsito de 240 horas)
   y OpenStreetMap (líneas y estaciones del metro). Sin precios ni horarios exactos: cambian seguido. */
window.CITY_DATA = window.CITY_DATA || {};
window.CITY_DATA.pekin = {
  id: "pekin",
  name: "Pekín",
  fullName: "Pekín",
  country: "China",
  tz: "Asia/Shanghai",
  currency: "CNY",
  tagline: "Todo lo que necesitás para recorrer la ciudad",
  updated: "Noviembre 2026",

  categories: [
    { id: "ver", name: "Imperdibles", icon: "🏯", color: "#b8322a", desc: "Palacios, templos, museos, parques y hutongs" },
    { id: "comer", name: "Dónde comer", icon: "🥟", color: "#d1552f", desc: "Pato laqueado, olla caliente, fideos y bocaditos" },
    { id: "noche", name: "Noche", icon: "🏮", color: "#8a4fd1", desc: "Cervecerías, cócteles, música en vivo y ópera" },
    { id: "tours", name: "Tours y experiencias", icon: "🧭", color: "#1f9d8a", desc: "Hutongs, barcos, tai chi y la Gran Muralla" },
    { id: "escapadas", name: "Excursiones", icon: "🧱", color: "#3a9a3f", desc: "La Gran Muralla, las Tumbas Ming, Tianjin y Chengde" },
    { id: "dormir", name: "Hospedaje", icon: "🛏️", color: "#c58a12", desc: "Hostels, hoteles en casas de patio y lujo" },
    { id: "compras", name: "Compras", icon: "🛍️", color: "#d13f7a", desc: "Mercados, té, seda y antigüedades" },
    { id: "deporte", name: "Deportes", icon: "⚽", color: "#0b7285", desc: "Fútbol, patinaje sobre hielo y parques" },
    { id: "ocio", name: "Entretenimiento", icon: "🎭", color: "#e8590c", desc: "Ópera de Pekín, acrobacias y pandas" }
  ],

  /* Los lugares están en data/pekin-lugares.js. */
  places: [],

  barrios: [
    { name: "Ciudad Prohibida y Tiananmen", vibe: "El centro del poder", desc: "La Ciudad Prohibida, la plaza de Tiananmen, el Museo Nacional, el Gran Teatro y, detrás del palacio, la colina de Jingshan.", stay: "Lo más céntrico, pero de noche queda tranquilo y hay pocos hoteles." },
    { name: "Qianmen y Templo del Cielo", vibe: "El Pekín comercial de antes", desc: "La puerta de Qianmen, la calle Dashilan con sus tiendas centenarias, Liulichang, la ópera de Pekín y el Templo del Cielo con su parque.", stay: "Bien ubicado y con hostels en casas de patio." },
    { name: "Shichahai y Houhai", vibe: "Lagos y hutongs", desc: "Los lagos de Houhai y Qianhai rodeados de bares, el parque Beihai, la Mansión del Príncipe Gong y las torres del Tambor y la Campana.", stay: "Lindo y con hoteles en casas de patio; de noche, con música en los bares." },
    { name: "Gulou y Templo de los Lamas", vibe: "Hutongs con vida", desc: "Nanluoguxiang, Wudaoying y los callejones de alrededor, el Templo de los Lamas, el Templo de Confucio y la calle de la comida Gui Jie.", stay: "La mejor zona para vivir los hutongs, con cafés y bares." },
    { name: "Wangfujing y Dongsi", vibe: "Compras y callejones", desc: "La avenida peatonal de Wangfujing, la catedral, el Museo de Arte y, al norte, los hutongs ordenados de Dongsi.", stay: "Muy céntrico, con hoteles de todas las categorías y buen metro." },
    { name: "Sanlitun", vibe: "La noche internacional", desc: "Taikoo Li, las embajadas, el Estadio de los Trabajadores, bares, boliches y restaurantes de todo el mundo.", stay: "Ideal para salir; queda lejos de los hutongs." },
    { name: "CBD y Ritan", vibe: "Rascacielos y mercados", desc: "Las torres del centro de negocios, el edificio de la CCTV, el parque Ritan, Silk Street y el mercado de Panjiayuan.", stay: "Hoteles de lujo y buenas conexiones de metro." },
    { name: "798 y Wangjing", vibe: "Arte en fábricas", desc: "El distrito de arte 798 y el 751, en viejas fábricas, y las torres curvas de Wangjing SOHO.", stay: "Para visitar; queda lejos del centro." },
    { name: "Parque Olímpico", vibe: "Los Juegos de 2008", desc: "El Nido de Pájaro, el Cubo de Agua, la Torre Olímpica, el Museo de Ciencia y el gran Parque del Bosque Olímpico.", stay: "Para visitar, sobre todo de noche con las luces." },
    { name: "Haidian y Palacio de Verano", vibe: "Jardines imperiales y universidades", desc: "El Palacio de Verano, las ruinas del Antiguo Palacio de Verano, las Colinas Fragantes y las universidades de Pekín y Tsinghua.", stay: "Lejos del centro: mejor para ir a pasar el día." },
    { name: "Xidan y el oeste", vibe: "Templos y barrio musulmán", desc: "El Templo de la Nube Blanca, la calle Niujie con su mezquita, el Museo de la Capital, el zoológico con los pandas y los centros comerciales de Xidan.", stay: "Menos turístico y bien conectado." }
  ],

  /* Planes armados. Cada paso nombra un lugar de data/pekin-lugares.js ("ref" = nombre exacto). */
  itineraries: [
    { id: "1-dia", name: "Pekín en 1 día", icon: "⚡", desc: "Lo esencial si tenés solo una jornada.", steps: [
      { when: "Mañana", ref: "Plaza de Tiananmen", note: "Con la reserva y el pasaporte." },
      { when: "Mañana", ref: "Ciudad Prohibida", note: "Entrada comprada antes." },
      { when: "Mediodía", ref: "Parque Jingshan", note: "La vista del palacio desde arriba." },
      { when: "Almuerzo", ref: "Siji Minfu", note: "Sacá número al llegar." },
      { when: "Tarde", ref: "Shichahai y Houhai" },
      { when: "Atardecer", ref: "Torres del Tambor y de la Campana" },
      { when: "Noche", ref: "Nanluoguxiang" }
    ] },
    { id: "3-dias", name: "3 días clásicos", icon: "🗓️", desc: "El recorrido completo para una primera visita.", steps: [
      { when: "Día 1 · mañana", ref: "Ciudad Prohibida" },
      { when: "Día 1 · mediodía", ref: "Parque Jingshan" },
      { when: "Día 1 · tarde", ref: "Parque Beihai" },
      { when: "Día 1 · noche", ref: "Da Dong", note: "Pato laqueado." },
      { when: "Día 2 · todo el día", ref: "Gran Muralla en Mutianyu", note: "Salí temprano." },
      { when: "Día 2 · noche", ref: "Gui Jie" },
      { when: "Día 3 · mañana", ref: "Templo del Cielo", note: "Con la gente haciendo tai chi." },
      { when: "Día 3 · mediodía", ref: "Dashilan" },
      { when: "Día 3 · tarde", ref: "Palacio de Verano" },
      { when: "Día 3 · noche", ref: "Casa de té Lao She" }
    ] },
    { id: "hutongs", name: "Un día en los hutongs", icon: "🏮", desc: "Templos, callejones, cafés y lagos, todo a pie.", steps: [
      { when: "Mañana", ref: "Templo de los Lamas" },
      { when: "Mañana", ref: "Templo de Confucio y Guozijian" },
      { when: "Café", ref: "Wudaoying Hutong" },
      { when: "Mediodía", ref: "Yaoji Chaogan" },
      { when: "Tarde", ref: "Nanluoguxiang", note: "Metete en los callejones de los costados." },
      { when: "Atardecer", ref: "Shichahai y Houhai" },
      { when: "Noche", ref: "Great Leap Brewing" }
    ] },
    { id: "gratis", name: "Pekín gratis", icon: "💸", desc: "Lo mejor sin gastar en entradas (casi todo con reserva y pasaporte).", steps: [
      { when: "Amanecer", ref: "Izamiento de la bandera en Tiananmen" },
      { when: "Mañana", ref: "Museo Nacional de China" },
      { when: "Mediodía", ref: "Calle Qianmen" },
      { when: "Tarde", ref: "Museo del Hutong Shijia" },
      { when: "Tarde", ref: "Distrito de arte 798" },
      { when: "Noche", ref: "Estadio Nacional (Nido de Pájaro)", note: "Desde afuera, con las luces." }
    ] },
    { id: "chicos", name: "Con chicos", icon: "🧒", desc: "Un día pensado para chicos.", steps: [
      { when: "Mañana", ref: "Zoológico de Pekín", note: "Los pandas, temprano." },
      { when: "Mediodía", ref: "Acuario de Pekín" },
      { when: "Tarde", ref: "Museo de Ciencia y Tecnología de China" },
      { when: "Atardecer", ref: "Cubo de Agua" },
      { when: "Noche", ref: "Teatro Chaoyang", note: "Acrobacias." }
    ] }
  ],

  /* ───────────── TRANSPORTE ───────────── */
  /* Las líneas más útiles para turistas, con sus colores y estaciones de OpenStreetMap (26/11/2026). Pekín tiene 29 líneas. */
  subte: [
    { line: "Línea 1", color: "#c23a30", route: "Gucheng – Universal Resort", useful: "Tian'anmen East y West (Ciudad Prohibida), Wangfujing, Xidan, Guomao, Military Museum y Universal Resort" },
    { line: "Línea 2", color: "#00529b", route: "Circular", useful: "Qianmen, Dongzhimen (tren al aeropuerto), Yonghegong Lama Temple, Gulou Dajie y la estación de trenes de Pekín" },
    { line: "Línea 3", color: "#d90627", route: "Dongsi Shitiao – Dongbabei", useful: "Workers' Stadium (cerca de Sanlitun), Tuanjiehu y Chaoyang Park" },
    { line: "Línea 4", color: "#008994", route: "Anheqiaobei – Tiangongyuan", useful: "Beigongmen (Palacio de Verano), Yuanmingyuan Park, Beijing Zoo, Xidan, Caishikou y la estación Pekín Sur" },
    { line: "Línea 5", color: "#ae005f", route: "Tiantongyuan North – Songjiazhuang", useful: "Yonghegong Lama Temple, Beixinqiao, Dongsi, Dengshikou, Dongdan y East Gate of Temple of Heaven" },
    { line: "Línea 6", color: "#bb8900", route: "Jin'anqiao – Luyang", useful: "Beihai North, Nanluogu Xiang, Dongsi, Chaoyangmen y Dongdaqiao" },
    { line: "Línea 7", color: "#ffc66e", route: "Beijing West Railway – Universal Resort", useful: "La estación Pekín Oeste, Caishikou, Ciqikou, Happy Valley y Universal Resort" },
    { line: "Línea 8", color: "#00997a", route: "Zhuxinzhuang – Yinghai", useful: "Olympic Park, Gulou Dajie, Shichahai, Nanluogu Xiang, China Art Museum, Wangfujing, Qianmen y Tianqiao" },
    { line: "Línea 10", color: "#178abb", route: "Circular", useful: "Guomao (CBD), Panjiayuan, Tuanjiehu y Agricultural Exhibition Center (Sanlitun), Liangmaqiao, Zhichun Lu y Caoqiao (tren a Daxing)" },
    { line: "Línea 13", color: "#f9e700", route: "Xizhimen – Dongzhimen", useful: "Wudaokou (barrio universitario) y la vuelta por el norte de la ciudad" },
    { line: "Línea 14", color: "#d4a7a1", route: "Zhangguozhuang – Shan'gezhuang", useful: "Jiangtai (cerca del 798), Wangjing, Chaoyang Park y la estación Pekín Sur" },
    { line: "Línea 15", color: "#653279", route: "Qinghua Donglu Xikou – Fengbo", useful: "Olympic Park y Wangjing" },
    { line: "Línea 16", color: "#6da843", route: "Beianhe – Wanpingcheng", useful: "Wanpingcheng (Puente de Marco Polo), Yuyuantan Park East Gate y el oeste de Haidian" },
    { line: "Expreso Aeropuerto Capital", color: "#9b91b1", route: "Beixinqiao – Terminales 2 y 3", useful: "Del aeropuerto Capital a Sanyuanqiao, Dongzhimen y Beixinqiao, donde combinás con el metro" },
    { line: "Expreso Aeropuerto Daxing", color: "#3f48cc", route: "Caoqiao – Aeropuerto Daxing", useful: "Del aeropuerto Daxing a Caoqiao, donde combinás con la línea 10" }
  ],
  transport: [
    /* Revisado el 26/11/2026 con english.beijing.gov.cn (metro con tarjetas del exterior, desde 2024 y 2025). */
    { icon: "💳", title: "Cómo pagar: lo primero", items: [
      { t: "Con la tarjeta del banco", d: "En todas las líneas del metro de Pekín se pasa el molinete apoyando una tarjeta Visa, Mastercard, American Express, JCB o UnionPay sin contacto. Las máquinas de boletos también aceptan tarjetas del exterior." },
      { t: "Alipay y WeChat", d: "Las dos apps de pago chinas aceptan tarjetas del exterior y sirven para casi todo: taxis, bicis, comida y entradas. Instalalas y probalas antes de viajar." },
      { t: "Boletos sueltos", d: "En las máquinas de las estaciones se compra un boleto de un viaje: elegís la estación de destino y pagás." },
      { t: "Controles", d: "En cada estación de metro pasás el bolso por un escáner, como en un aeropuerto. Tenelo en cuenta si vas apurado." },
      { t: "Última revisión", d: "26 de noviembre de 2026, con la web oficial del gobierno de Pekín. Si algo no coincide, valen los carteles del metro." }
    ] },
    { icon: "🚇", title: "Metro de Pekín", items: [
      { t: "Una red enorme", d: "Tiene 29 líneas, con carteles y anuncios en chino e inglés. Cada línea tiene un número y un color." },
      { t: "Combinaciones largas", d: "En las estaciones grandes los pasillos entre líneas son largos: calculá tiempo extra." },
      { t: "Horas pico", d: "A la mañana temprano y a la salida del trabajo los trenes van llenísimos, sobre todo en las líneas 1, 4, 5 y 10." },
      { t: "Último tren", d: "El metro no anda toda la noche. Si salís tarde, volvé en taxi o con DiDi." }
    ] },
    { icon: "🚄", title: "Trenes bala", items: [
      { t: "Estaciones", d: "Pekín Sur sale a Tianjin y Shanghái; Pekín Oeste, a Xi'an; Pekín Chaoyang, a Chengde; y Qinghe, a la Gran Muralla de Badaling." },
      { t: "Pasajes", d: "Se compran con el pasaporte, en la web y la app oficial 12306 (en inglés) o en agencias como Trip.com. El día del viaje entrás pasando el pasaporte." },
      { t: "Llegá antes", d: "Las estaciones son enormes y hay control de seguridad y de pasaporte: llegá con tiempo." }
    ] },
    { icon: "✈️", title: "Aeropuertos", items: [
      { t: "Capital (PEK)", d: "Al noreste. El tren expreso sale de las terminales 3 y 2 y llega a Sanyuanqiao, Dongzhimen y Beixinqiao, donde combinás con el metro." },
      { t: "Daxing (PKX)", d: "Al sur, más lejos. El tren expreso llega a Caoqiao, en el sur de la ciudad, donde combinás con el metro." },
      { t: "Mostradores de ayuda", d: "En la salida de llegadas internacionales de los dos aeropuertos están los mostradores \"Beijing Service\": venden chips de celular y te ayudan a instalar las apps de pago." },
      { t: "Taxis", d: "Tomá taxi solo en la fila oficial, nunca con alguien que te lo ofrece adentro del aeropuerto." }
    ] },
    { icon: "🚕", title: "Taxis y apps", items: [
      { t: "DiDi", d: "La app para pedir autos y taxis, en inglés y con tarjeta del exterior. También se usa desde Alipay." },
      { t: "Taxis", d: "Funcionan con reloj y son baratos. Casi ningún taxista habla inglés: mostrá el nombre en chino del lugar, que en esta guía está en la dirección de cada ficha." },
      { t: "Uber", d: "No funciona en China." }
    ] },
    { icon: "🚲", title: "A pie y en bici", items: [
      { t: "Caminar", d: "Las avenidas son enormes y los cruces largos: calculá más tiempo del que marca el mapa. Los hutongs son el mejor lugar para caminar." },
      { t: "Bicis compartidas", d: "Hay bicis de alquiler en cada esquina; se desbloquean escaneando el código con Alipay." },
      { t: "Cuidado", d: "Las motos eléctricas son silenciosas y circulan por las bicisendas y a veces por la vereda: mirá siempre antes de cruzar." }
    ] }
  ],

  /* ───────────── SEGURIDAD ───────────── */
  emergencies: [
    { n: "110", t: "Policía" },
    { n: "120", t: "Ambulancia" },
    { n: "119", t: "Bomberos" },
    { n: "122", t: "Accidentes de tránsito" },
    { n: "12345", t: "Línea de ayuda de la ciudad de Pekín, también en inglés y en español (no es para emergencias)" }
  ],
  safety: [
    { icon: "✅", title: "Una ciudad muy segura", tone: "ok", items: [
      "Pekín es muy segura para caminar, también de noche: hay cámaras y policías por todos lados.",
      "Igual, cuidá el celular y la billetera en el metro y en los lugares con mucha gente.",
      "Las líneas de emergencia tienen intérpretes gratis en otros idiomas."
    ] },
    { icon: "🍵", title: "Estafas para turistas", tone: "warn", items: [
      "La más común: jóvenes simpáticos que quieren practicar inglés y te invitan a una casa de té o a una galería de arte. Al final llega una cuenta enorme. Decí que no, con amabilidad.",
      "En los aeropuertos y estaciones, tomá taxi solo en la fila oficial o pedilo con DiDi.",
      "En los mercados el primer precio puede ser muchas veces el real: regateá o seguí de largo."
    ] },
    { icon: "😷", title: "Aire y clima", tone: "warn", items: [
      "Algunos días de invierno hay mucha contaminación: mirá el índice de calidad del aire (AQI) en la app del clima y, si está alto, usá barbijo.",
      "En primavera pueden llegar tormentas de arena desde el norte.",
      "En verano hace mucho calor y hay tormentas fuertes: tomá mucha agua."
    ] },
    { icon: "📄", title: "Documentos y ayuda", tone: "ok", items: [
      "Llevá el pasaporte siempre: lo piden para entrar a la plaza de Tiananmen, a los museos, en los trenes y en los hoteles.",
      "Si te alojás en una casa particular y no en un hotel, tenés que registrarte en la comisaría del barrio dentro de las 24 horas de llegar. Los hoteles lo hacen por vos.",
      "Si te roban o perdés el pasaporte, hacé la denuncia en la policía y andá a tu embajada: en Info > Ayuda están en el mapa.",
      "Contratá un seguro de viaje: los hospitales con atención en inglés son caros."
    ] }
  ],

  /* ───────────── INFO PRÁCTICA ───────────── */
  practical: [
    { icon: "🛂", title: "Para entrar a China", items: [
      { t: "Sin visa, por ahora", d: "Los pasaportes de Argentina, Brasil, Chile, Perú, Uruguay, España, Italia, Francia y otros países pueden entrar sin visa hasta 30 días, por turismo. China anunció esta regla hasta el 31 de diciembre de 2026: si viajás después, fijate si la extendieron." },
      { t: "Tránsito de 240 horas", d: "Si seguís viaje a un tercer país, muchas nacionalidades pueden quedarse hasta 10 días sin visa en Pekín, Tianjin y Hebei. Se pide al llegar, con el pasaje de salida." },
      { t: "Otros países", d: "Si tu país no está en la lista, necesitás visa: consultá en la embajada o el consulado de China." },
      { t: "Antes de volar", d: "Completá la tarjeta de llegada por internet en la web oficial de inmigración de China: ahorra tiempo en el aeropuerto." }
    ] },
    { icon: "💴", title: "Dinero y pagos", items: [
      { t: "Moneda", d: "Yuan o renminbi (CNY). En la calle se le dice kuai." },
      { t: "Se paga con el celular", d: "En China casi todo se paga con Alipay o WeChat Pay. Las dos aceptan tarjetas del exterior: cargá la tarjeta en la app antes de viajar." },
      { t: "Efectivo", d: "Los comercios tienen que aceptar billetes, pero muchos no tienen cambio: llevá billetes chicos." },
      { t: "Cajeros", d: "Los cajeros de los bancos grandes, como Bank of China o ICBC, aceptan tarjetas del exterior." },
      { t: "Propina", d: "No se deja propina." },
      { t: "Devolución de impuestos", d: "Si gastás desde 200 yuanes en una misma tienda adherida y el mismo día, te pueden devolver el impuesto. En algunas grandes tiendas te lo devuelven en el momento, con el pasaporte." }
    ] },
    { icon: "📵", title: "Internet y apps", items: [
      { t: "Lo que no anda", d: "Con internet chino no funcionan Google (Maps, Gmail, el traductor), WhatsApp, Instagram, Facebook ni YouTube." },
      { t: "Tu chip o una eSIM", d: "Con el roaming de tu país o una eSIM de viaje comprada afuera, en general siguen funcionando. Con un chip chino o el wifi del hotel, no." },
      { t: "Mapas", d: "Google Maps en China anda mal: el mapa de Apple funciona bien en el iPhone, y las apps chinas Amap y Baidu también." },
      { t: "Instalá antes", d: "Bajá Alipay, WeChat, DiDi y un traductor antes de viajar, mientras todo funciona." }
    ] },
    { icon: "🕘", title: "Horarios de Pekín", items: [
      { t: "Reservas con pasaporte", d: "Casi todos los museos, palacios y la plaza de Tiananmen piden reservar antes, a tu nombre y con el número de pasaporte." },
      { t: "Lunes", d: "Muchos museos cierran los lunes, entre ellos la Ciudad Prohibida y el Museo Nacional." },
      { t: "Comidas", d: "Se almuerza y se cena temprano. Muchos restaurantes cierran la cocina antes de lo que esperás." },
      { t: "Feriados chinos", d: "En el Año Nuevo chino y en la primera semana de octubre viaja todo el país: todo se llena y las entradas se agotan." }
    ] },
    { icon: "🍂", title: "Clima y cuándo venir", items: [
      { t: "Otoño", d: "De septiembre a octubre es la mejor época: cielo limpio, temperatura agradable y árboles rojos y amarillos." },
      { t: "Primavera", d: "Abril y mayo son lindos, con flores en los parques, aunque puede haber viento y polvo." },
      { t: "Verano", d: "Muy caluroso y húmedo, con tormentas fuertes en julio y agosto." },
      { t: "Invierno", d: "Muy frío y seco, bajo cero. Los lagos se congelan y se patina; hay menos turistas." }
    ] },
    { icon: "🔌", title: "Datos útiles", items: [
      { t: "Electricidad", d: "220 V. Los enchufes de tres patas en V son parecidos a los de la Argentina, y muchos aceptan también dos patas planas o redondas." },
      { t: "Agua", d: "El agua de la canilla no se toma: comprá agua o hervila. Los hoteles tienen pava eléctrica." },
      { t: "Idioma", d: "Se habla chino mandarín y poca gente habla inglés. En cada ficha de esta guía está el nombre del lugar en chino, para mostrarlo." },
      { t: "Baños", d: "Hay baños públicos gratis en todos lados. Llevá pañuelos de papel: muchos no tienen." }
    ] },
    { icon: "🙇", title: "Costumbres", items: [
      { t: "En la mesa", d: "Los platos se comparten en el centro. No claves los palitos parados en el arroz." },
      { t: "Té y agua caliente", d: "En los restaurantes te sirven té o agua caliente: es lo normal." },
      { t: "Filas y empujones", d: "En el metro y en los lugares con mucha gente se empuja un poco: no es mala educación." },
      { t: "Para probar", d: "Pato laqueado, jiaozi, zhajiangmian, olla caliente de cordero, bollitos al vapor, brochetes de cordero y yogur en frasquito de cerámica." }
    ] }
  ]
};
