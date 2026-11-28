/* Zonas de Pekín para el mapa (tarjeta #247): puntos de ayuda, canales a distancia y búsquedas "cerca mío".

   AYUDA AL TURISTA: los mostradores "Beijing Service" de las llegadas internacionales de los dos aeropuertos (guía oficial para
   visitantes de english.beijing.gov.cn, 7/5/2026). En OpenStreetMap casi no hay oficinas de turismo cargadas en la ciudad.
   POLICÍA: comisarías de las zonas más visitadas, de OpenStreetMap (amenity=police, 26/11/2026). Para emergencias, siempre el 110.
   HOSPITALES: hospitales con guardia (emergency=yes) de OpenStreetMap del 26/11/2026, más el hospital privado United Family.
   EMBAJADAS: dirección de la web oficial de cada país (Argentina, Brasil, Chile, España e Italia) o, cuando esa web no se pudo leer,
   de la lista oficial de embajadas del gobierno de Pekín (english.beijing.gov.cn: Colombia, México, Perú, Uruguay y Estados Unidos).
   La ubicación sale de OpenStreetMap (office=diplomatic). Revisado el 26/11/2026.

   LÍMITES DE BARRIOS Y CAPAS: todavía no están (son opcionales). */
window.CITY_ZONES = window.CITY_ZONES || {};
window.CITY_ZONES.pekin = {
  guide: {},
  layers: [],

  helpTypes: {
    info: { name: "Ayuda al turista", icon: "ℹ️", color: "#1a73c8" },
    policia: { name: "Policía", icon: "👮", color: "#364fc7" },
    salud: { name: "Hospitales con guardia", icon: "🏥", color: "#e03131" },
    consul: { name: "Embajadas", icon: "🛂", color: "#0b7285" },
    transporte: { name: "Aeropuertos y estaciones", icon: "🚉", color: "#5f3dc4" }
  },
  help: [
    { id: "bs-t3", type: "info", name: "Beijing Service · Aeropuerto Capital, Terminal 3", address: "Terminal 3, aeropuerto Capital", ll: [40.06572, 116.60747], far: true, aprox: true,
      note: "En la salida de llegadas internacionales: chips de celular, ayuda con las apps de pago y entradas." },
    { id: "bs-t2", type: "info", name: "Beijing Service · Aeropuerto Capital, Terminal 2", address: "Terminal 2, aeropuerto Capital", ll: [40.07892, 116.58890], far: true, aprox: true,
      note: "En la salida de llegadas internacionales: chips de celular, ayuda con las apps de pago y entradas." },
    { id: "bs-pkx", type: "info", name: "Beijing Service · Aeropuerto Daxing", address: "Aeropuerto Daxing", ll: [39.50917, 116.41074], far: true, aprox: true,
      note: "Afuera de la sala de equipajes de los vuelos internacionales: chips de celular, ayuda con las apps de pago y entradas." },

    { id: "pol-tiananmen", type: "policia", name: "Policía de Tiananmen", address: "Plaza de Tiananmen, Dongcheng", ll: [39.90134, 116.39430],
      note: "La comisaría de la zona de la plaza y la Ciudad Prohibida." },
    { id: "pol-qianmen", type: "policia", name: "Comisaría de Qianmen", address: "Qianmen, Dongcheng", ll: [39.89817, 116.40260],
      note: "Cerca de la calle Qianmen y Dashilan." },
    { id: "pol-tiantan", type: "policia", name: "Comisaría del Templo del Cielo", address: "Qinghua Jie, Dongcheng", ll: [39.89052, 116.40865],
      note: "Al norte del Templo del Cielo." },
    { id: "pol-andingmen", type: "policia", name: "Comisaría de Andingmen", address: "Doufuchi Hutong, Dongcheng", ll: [39.94260, 116.39217],
      note: "Cerca de las Torres del Tambor y de la Campana y de Nanluoguxiang." },
    { id: "pol-beixinqiao", type: "policia", name: "Comisaría de Beixinqiao", address: "Beixinqiao, Dongcheng", ll: [39.94071, 116.42035],
      note: "Cerca del Templo de los Lamas y de Gui Jie." },
    { id: "pol-sanlitun", type: "policia", name: "Comisaría de Sanlitun", address: "Sanlitun Jie, Chaoyang", ll: [39.93462, 116.44727],
      note: "En la zona de bares y de las embajadas." },

    { id: "h-pumch", type: "salud", name: "Hospital Peking Union (PUMCH)", address: "Shuaifuyuan Hutong 1, Dongcheng", ll: [39.91121, 116.40883],
      note: "Uno de los hospitales más reconocidos de China, con guardia y un sector para extranjeros. A pasos de Wangfujing." },
    { id: "h-tongren", type: "salud", name: "Hospital Tongren", address: "Dongjiaominxiang, Dongcheng", ll: [39.90138, 116.41167],
      note: "Hospital público con guardia, conocido por oftalmología y otorrinolaringología." },
    { id: "h-chaoyang", type: "salud", name: "Hospital Chaoyang", address: "Gongti Nanlu, Chaoyang", ll: [39.92403, 116.44719],
      note: "Hospital público con guardia, cerca de Sanlitun y del CBD." },
    { id: "h-renmin", type: "salud", name: "Hospital del Pueblo de la Universidad de Pekín", address: "Xizhimen Nandajie, Xicheng", ll: [39.93542, 116.34800],
      note: "Hospital público con guardia, en el oeste de la ciudad." },
    { id: "h-zhongri", type: "salud", name: "Hospital de la Amistad China-Japón", address: "Yinghua Dongjie, Chaoyang", ll: [39.97268, 116.42070],
      note: "Hospital público con guardia y un sector internacional." },
    { id: "h-united", type: "salud", name: "Beijing United Family Hospital", address: "Jiangtai Lu, Chaoyang", ll: [39.97333, 116.47862],
      note: "Hospital privado con atención en inglés. Es caro: tené a mano el seguro de viaje." },

    { id: "c-ar", type: "consul", name: "Embajada de Argentina", address: "Sanlitun Dongwujie 11, Chaoyang", ll: [39.94283, 116.45004],
      note: "También atiende los trámites consulares." },
    { id: "c-br", type: "consul", name: "Embajada de Brasil", address: "Guanghua Lu 27, Chaoyang", ll: [39.91242, 116.43098],
      note: "Con sector consular." },
    { id: "c-cl", type: "consul", name: "Embajada de Chile", address: "Sanlitun Dongsijie 1, Chaoyang", ll: [39.93841, 116.45463],
      note: "También atiende los trámites consulares." },
    { id: "c-co", type: "consul", name: "Embajada de Colombia", address: "Guanghua Lu 34, Chaoyang", ll: [39.91164, 116.43832],
      note: "También atiende los trámites consulares." },
    { id: "c-es", type: "consul", name: "Embajada de España", address: "Sanlitun Lu 9, Chaoyang", ll: [39.94085, 116.44847],
      note: "La sección consular está a unas cuadras, en la misma zona de embajadas." },
    { id: "c-it", type: "consul", name: "Embajada de Italia", address: "Sanlitun Dong'erjie 2, Chaoyang", ll: [39.93486, 116.45422],
      note: "Con cancillería consular." },
    { id: "c-mx", type: "consul", name: "Embajada de México", address: "Sanlitun Dongwujie 5, Chaoyang", ll: [39.94311, 116.45232],
      note: "También atiende los trámites consulares." },
    { id: "c-pe", type: "consul", name: "Embajada de Perú", address: "Sanlitun Diplomatic Compound 1-91, Chaoyang", ll: [39.93285, 116.45154],
      note: "También atiende los trámites consulares." },
    { id: "c-uy", type: "consul", name: "Embajada de Uruguay", address: "Liangmaqiao DRC, Dongfang Donglu 22, sección A, 03-01, Chaoyang", ll: [39.95015, 116.45876],
      note: "En el complejo diplomático de Liangmaqiao." },
    { id: "c-us", type: "consul", name: "Embajada de Estados Unidos", address: "Anjialou Lu 55, Chaoyang", ll: [39.95334, 116.46014],
      note: "Con sección consular." },

    { id: "t-pek3", type: "transporte", name: "Aeropuerto Capital · Terminal 3", address: "Aeropuerto Capital (PEK)", ll: [40.06572, 116.60747], far: true,
      note: "El tren expreso sale hacia Sanyuanqiao, Dongzhimen y Beixinqiao." },
    { id: "t-pek2", type: "transporte", name: "Aeropuerto Capital · Terminal 2", address: "Aeropuerto Capital (PEK)", ll: [40.07892, 116.58890], far: true,
      note: "El tren expreso también para acá." },
    { id: "t-pkx", type: "transporte", name: "Aeropuerto Daxing", address: "Aeropuerto Daxing (PKX)", ll: [39.50917, 116.41074], far: true,
      note: "El tren expreso va hasta Caoqiao, donde combinás con la línea 10." },
    { id: "t-bjs", type: "transporte", name: "Estación de Pekín", address: "Beijingzhan, Dongcheng", ll: [39.90360, 116.42095],
      note: "La estación histórica, en el centro, con trenes comunes y algunos rápidos." },
    { id: "t-bjnan", type: "transporte", name: "Estación Pekín Sur", address: "Fengtai", ll: [39.86410, 116.37332],
      note: "Trenes bala a Tianjin y Shanghái. Metro: líneas 4 y 14." },
    { id: "t-bjxi", type: "transporte", name: "Estación Pekín Oeste", address: "Fengtai", ll: [39.89354, 116.31511],
      note: "Trenes bala a Xi'an y al sur del país. Metro: líneas 7 y 9." },
    { id: "t-qinghe", type: "transporte", name: "Estación Qinghe", address: "Haidian", ll: [40.03978, 116.30868],
      note: "Trenes bala a la Gran Muralla de Badaling." }
  ],
  /* Canales a distancia y búsquedas rápidas "cerca mío" (abren el mapa). */
  channels: [
    { icon: "📞", name: "Línea 12345", desc: "La línea de ayuda de la ciudad, en 8 idiomas, entre ellos inglés y español. No es para emergencias.", href: "https://english.beijing.gov.cn/12345hotline/" },
    { icon: "🗺️", name: "Guía oficial para visitantes", desc: "La web en inglés del gobierno de Pekín, con pagos, transporte y trámites.", href: "https://english.beijing.gov.cn/specials/beijinginboundtour/" },
    { icon: "💊", name: "Farmacias", desc: "Farmacias cerca, en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=pharmacy+Beijing" },
    { icon: "🛂", name: "Encontrar mi embajada", desc: "Busca embajadas en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=embassy+Beijing" }
  ],
  nearby: [["💊", "Farmacia", "药店"], ["🏧", "Cajero", "ATM"], ["🏪", "Almacén 24 horas", "便利店"], ["🧺", "Lavandería", "洗衣店"], ["🚻", "Baño", "公共厕所"], ["🍜", "Comida al paso", "小吃"]],

  barrios: {}
};
