/* Datos complementarios de Río de Janeiro (tarjeta #203): sellos del pasaporte, niveles de recomendación, dietas, días de cierre,
   colecciones, zonas para armar viajes, calendario, fotos y estaciones.
   Las claves son los ids de los lugares (nombre en minúsculas, sin acentos, con guiones). */
window.CITY_EXTRA = window.CITY_EXTRA || {};
window.CITY_EXTRA.rio = {
  tz: "America/Sao_Paulo",

  /* Pasaporte de Río: sellos que se ganan marcando "Ya fui" en los lugares. Mismo formato que data/caba-extra.js. */
  stamps: [
    { id: "primer-paso", icon: "👣", name: "Primer paso", desc: "Visitá tu primer lugar", n: 1 },
    { id: "imperdibles", icon: "🗿", name: "Lo esencial", desc: "5 imperdibles destacados", n: 5, cat: "ver", q: 3 },
    { id: "playas", icon: "🏖️", name: "De playa en playa", desc: "3 playas", n: 3, sub: "Playa" },
    { id: "miradores", icon: "🌄", name: "Río desde arriba", desc: "3 miradores", n: 3, tag: ["mirador"] },
    { id: "boteco", icon: "🍺", name: "Boteco carioca", desc: "2 botecos", n: 2, sub: "Boteco" },
    { id: "samba", icon: "🥁", name: "Al ritmo del samba", desc: "2 lugares con samba", n: 2, tag: ["samba"] },
    { id: "museos", icon: "🎨", name: "De museo en museo", desc: "3 museos", n: 3, sub: "Museo" },
    { id: "noche", icon: "🍹", name: "Trasnochador", desc: "2 salidas de noche", n: 2, cat: "noche" },
    { id: "escapada", icon: "🚌", name: "Escapada", desc: "Una excursión fuera de la ciudad", n: 1, cat: "escapadas" },
    { id: "curioso", icon: "💎", name: "Fuera del circuito", desc: "Una joya oculta", n: 1, tag: ["joya oculta"] },
    { id: "barrios", icon: "🏘️", name: "Explorador de barrios", desc: "Lugares en 5 barrios distintos", n: 5, barrios: true },
    { id: "honorario", icon: "🇧🇷", name: "Carioca honorario", desc: "20 lugares visitados", n: 20 }
  ],

  /* Nivel de recomendación: 3 = Destacado, 2 = Muy recomendado, 1 = Buena opción.
     Los marcados como destacados en data/rio-lugares.js ya son 3; el resto es 2 salvo lo que se lista acá. */
  quality: {
    3: ["museu-chacara-do-ceu", "instituto-moreira-salles", "mosteiro-de-sao-bento", "parque-lage", "aprazivel", "lasai", "oro", "bip-bip",
      "beco-das-garrafas", "paraty", "ilha-grande", "copacabana-palace", "mirante-dona-marta"],
    1: ["yup-star", "qualistage", "rio-sul", "village-mall", "fosfobox", "futevolei-en-copacabana", "vuelo-en-helicoptero"]
  },
  awards: {},

  /* Dietas. Solo con fuente: OpenStreetMap ("diet:vegan=only", 18/11/2026), que marca estos locales como 100 % veganos.
     Detalle en docs/fuentes-rio.md. */
  diet: {
    "teva": ["vegano", "vegetariano"], "vegan-vegan": ["vegano", "vegetariano"], "refeitorio-organico": ["vegano", "vegetariano"],
    "dona-vegana": ["vegano", "vegetariano"]
  },
  dietFull: ["teva", "vegan-vegan", "refeitorio-organico", "dona-vegana"],

  /* Días que abren o cierran (0 = domingo … 6 = sábado). Solo los días fijos y conocidos; pueden cambiar en feriados. */
  only: {
    "feira-hippie-de-ipanema": [0]
  },
  closed: {
    "feira-de-sao-cristovao": [1]
  },

  /* Lista de preparación del viaje (se tilda y queda guardada en el dispositivo). */
  checklist: [
    { title: "Antes de viajar", items: [
      "Pasaporte o documento vigente (con el del Mercosur alcanza), y una copia en el celular",
      "Seguro de viaje con cobertura médica",
      "Adaptador de enchufe tipo N, el de tres patas redondas",
      "Avisar al banco que vas a usar la tarjeta en el exterior",
      "Sacar online las entradas con horario del Cristo y del Pan de Azúcar",
      "Protector solar, sombrero y ojotas",
      "Descargar esta guía y los mapas de Google sin conexión"
    ] },
    { title: "Al llegar", items: [
      "Salir del aeropuerto en app o en taxi oficial",
      "Comprar un chip prepago o activar la eSIM",
      "Descargar Jaé para los colectivos, el BRT y el VLT",
      "No caminar con el celular en la mano"
    ] }
  ],

  /* Colecciones del inicio: cada una es un filtro de Explorar. */
  collections: [
    { name: "Playas", icon: "🏖️", filter: { cat: "ver", sub: "Playa" }, cover: "praia-de-ipanema" },
    { name: "Clásicos de Río", icon: "🗿", filter: { q: "clásico" }, cover: "cristo-redentor" },
    { name: "Miradores", icon: "🌄", filter: { q: "mirador" }, cover: "pan-de-azucar" },
    { name: "Río gratis", icon: "💸", filter: { prices: [0] }, cover: "escadaria-selaron" },
    { name: "Museos", icon: "🎨", filter: { cat: "ver", sub: "Museo" }, cover: "museu-do-amanha" },
    { name: "Naturaleza en la ciudad", icon: "🌿", filter: { cat: "ver", sub: "Naturaleza" }, cover: "jardim-botanico" },
    { name: "Botecos", icon: "🍺", filter: { cat: "comer", sub: "Boteco" }, cover: "bracarense" },
    { name: "Cocina brasileña", icon: "🍲", filter: { q: "comida brasileña" }, cover: "casa-da-feijoada" },
    { name: "Churrascarias", icon: "🥩", filter: { cat: "comer", sub: "Churrascaria" }, cover: "fogo-de-chao" },
    { name: "Samba y música", icon: "🥁", filter: { q: "samba" }, cover: "pedra-do-sal" },
    { name: "Carnaval todo el año", icon: "🎭", filter: { q: "carnaval" }, cover: "sambodromo" },
    { name: "Joyas menos conocidas", icon: "💎", filter: { q: "joya oculta" }, cover: "parque-das-ruinas" },
    { name: "Con chicos", icon: "🧒", filter: { q: "chicos" }, cover: "aquario" },
    { name: "Días de lluvia", icon: "🌧️", filter: { q: "lluvia" }, cover: "museu-do-amanha" },
    { name: "Excursiones de un día", icon: "🚌", filter: { cat: "escapadas" }, cover: "petropolis" }
  ],

  /* Zonas para el armado automático de viajes, en orden de prioridad (las dos primeras forman el viaje de un día). */
  zones: [
    { name: "Centro, Lapa y Santa Teresa", barrios: ["Centro", "Lapa", "Santa Teresa", "Porto Maravilha"] },
    { name: "Pan de Azúcar, Botafogo y Copacabana", barrios: ["Urca", "Botafogo", "Flamengo y Catete", "Copacabana"] },
    { name: "Cristo, Lagoa, Ipanema y Leblon", barrios: ["Lagoa y Jardim Botânico", "Ipanema", "Leblon", "Gávea"] },
    { name: "Tijuca y Maracanã", barrios: ["Tijuca y Maracanã"] },
    { name: "Barra da Tijuca", barrios: ["Barra da Tijuca"] }
  ],
  zonasDosDias: [["Centro, Lapa y Pan de Azúcar", [0, 1]], ["Cristo, Lagoa e Ipanema", [2]]],
  zonaChicos: 0,

  /* Palabras que la gente escribe → cómo figura en la guía. */
  synonyms: {
    desayuno: "cafe", brunch: "cafe", merienda: "cafe", cafeteria: "cafe", vegano: "vegetariano",
    hotel: "hospedaje", hoteles: "hospedaje", dormir: "hospedaje", alojamiento: "hospedaje", hostal: "hostel",
    ninos: "chicos", nenes: "chicos", familia: "chicos", familias: "chicos", barato: "economico", baratos: "economico", gratuito: "gratis",
    tragos: "cocteles", cocktail: "cocteles", cocktails: "cocteles", boliche: "bailar", discoteca: "bailar",
    excursion: "excursiones", escapada: "excursiones", paseo: "caminar", shopping: "compras", souvenirs: "recuerdos", regalos: "recuerdos",
    lluvia: "lluvia", llueve: "lluvia", techo: "lluvia", vista: "mirador", vistas: "mirador", guia: "tours", guias: "tours", visita: "tours",
    praia: "playa", playas: "playa", corcovado: "cristo", favela: "favela", escola: "samba", carnival: "carnaval",
    cerveza: "chopp", chope: "chopp", carne: "churrasco", asado: "churrasco", parrilla: "churrasco", trilha: "sendero", trekking: "sendero",
    senderismo: "sendero", futbol: "fútbol", flamengo: "flamengo", ojotas: "recuerdos", chinelas: "recuerdos"
  },

  /* Calendario: fechas habituales, a confirmar cada año. m = meses (1-12). */
  events: [
    { m: [1], when: "20 de enero", icon: "⛪", name: "Día de San Sebastián", desc: "El santo patrono de la ciudad: feriado municipal con misas y procesiones." },
    { m: [2, 3], when: "Febrero o marzo", icon: "🎭", name: "Carnaval", desc: "Los desfiles de las escuelas de samba en el Sambódromo y cientos de blocos en la calle por toda la ciudad. Hay que reservar con mucha anticipación." },
    { m: [6, 7], when: "Junio y julio", icon: "🌽", name: "Fiestas juninas", desc: "Fiestas de pueblo con comidas de maíz, quentão, forró y baile de cuadrillas, en escuelas, iglesias y la Feira de São Cristóvão." },
    { m: [6], when: "Junio", icon: "🏃", name: "Maratón de Río", desc: "Recorre la costanera hasta el Aterro do Flamengo; ese domingo hay cortes de tránsito." },
    { m: [9], when: "Septiembre, algunos años", icon: "🎸", name: "Rock in Rio", desc: "El gran festival de música en la Cidade do Rock, en la Barra." },
    { m: [10], when: "Octubre", icon: "🎬", name: "Festival do Rio", desc: "El festival internacional de cine, con funciones en toda la ciudad." },
    { m: [12], when: "Diciembre", icon: "🎄", name: "Navidad en la Lagoa", desc: "Luces de Navidad en la laguna y en los barrios de la zona sur." },
    { m: [12], when: "31 de diciembre", icon: "🎆", name: "Réveillon en Copacabana", desc: "Millones de personas vestidas de blanco reciben el año en la playa, con shows y fuegos artificiales sobre el mar." }
  ],

  /* Bloques extra para Info práctica. */
  practicalMore: [
    { icon: "🗣️", title: "Palabras en portugués que vas a ver", items: [
      { t: "Entrada · Saída", d: "Entrada y salida: en el metro, en los shoppings y en los negocios." },
      { t: "Aberto · Fechado", d: "Abierto y cerrado." },
      { t: "Rua · Avenida · Praça", d: "Calle, avenida y plaza: los vas a ver en todas las direcciones." },
      { t: "Posto", d: "Los puestos de guardavidas numerados de la playa: \"en el Posto 9\" sirve para encontrarse." },
      { t: "Feira", d: "Feria o mercado." },
      { t: "Farmácia · Drogaria", d: "Farmacia." },
      { t: "Greve", d: "Paro (huelga): si lo ves en el transporte, revisá cómo moverte ese día." },
      { t: "Chopp", d: "Cerveza tirada, bien fría: la bebida del boteco." }
    ] },
    { icon: "🏥", title: "Salud y farmacias", items: [
      { t: "Urgencias", d: "Ambulancia: 192. Los hospitales públicos atienden urgencias gratis, pero suelen estar llenos; con seguro, andá a uno privado." },
      { t: "Farmacias", d: "Hay muchas, varias abiertas las 24 horas, y venden remedios simples sin receta." },
      { t: "Agua", d: "No tomes agua de la canilla: comprá agua embotellada." },
      { t: "Mosquitos", d: "En verano hay dengue: usá repelente, sobre todo al atardecer." },
      { t: "Seguro de viaje", d: "Muy recomendable: sin cobertura, la atención privada sale cara." }
    ] },
    { icon: "🔍", title: "Cómo elegimos los lugares", items: [
      { t: "Selección", d: "La guía incluye solo lugares con reputación sostenida: distinciones oficiales, guías reconocidas y buen consenso en reseñas públicas." },
      { t: "Niveles", d: "'Destacado' son los mejores de su categoría, 'Muy recomendado' es una apuesta segura y 'Buena opción' cumple bien pero no es imprescindible." },
      { t: "Opiniones al día", d: "En cada ficha, el botón 'Opiniones, horarios y fotos' abre el lugar en Google Maps con su puntaje, reseñas, horarios actualizados y fotos." },
      { t: "Precios", d: "Usamos niveles ($ a $$$$) en vez de montos porque los precios cambian seguido." }
    ] }
  ],

  /* Fotos: de Wikimedia Commons con licencia libre (ver docs/fuentes-rio.md). */
  photos: {
    "cristo-redentor": "4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg",
    "theatro-municipal": "3/3f/Teatro_Municipal_-_panoramio_(4).jpg",
    "mar-museu-de-arte-do-rio": "4/46/Praça_Mauá_11_2015_Rio_708.JPG",
    "mam-rio": "f/fd/Museu_de_Arte_Moderna,_Rio_de_Janeiro_(2001).jpg",
    "real-gabinete-portugues-de-leitura": "5/59/Real_Gabinete_Português_de_Leitura_11-18.jpg",
    "centro-cultural-banco-do-brasil": "e/e5/Detalhe_do_Átrio_do_Centro_Cultural_Banco_do_Brasil_no_Rio_de_Janeiro_por_Rodrigo_Tetsuo_Argenton_(02).jpg",
    "praia-de-copacabana": "e/e6/Aerial_view_of_Copacabana_beach.jpg",
    "praia-de-ipanema": "a/af/1_ipanema_beach_vidigal_sunset.jpg",
    "arpoador": "3/32/Arpoador_Rock_and_City_Mountains_1.jpg",
    "lagoa-rodrigo-de-freitas": "d/d9/Lagoa_Rodrigo_de_Freitas.jpg",
    "morro-da-urca": "3/33/Morro_da_Urca_-_Pan_de_Azucar_Rio_de_Janeiro_Brasil_-_panoramio_(98).jpg",
    "urca": "2/22/Bondinho_descendo_o_Morro_da_Urca.jpg",
    "bar-luiz": "1/1f/Bar_Luiz.jpg",
    "casa-cave": "d/d9/Casa_cave_centro_rio.jpg",
    "feira-de-sao-cristovao": "d/d8/Mercado_by_Diego_Baravelli.jpg",
    "circo-voador": "1/17/At_Rio_de_Janeiro_2019_140.jpg",
    "ilha-de-paqueta": "f/ff/Paqueta2008.JPG",
    "ilha-grande": "7/7f/IlhaGrande-LopesMendes1.jpg",
    "rio-sul": "6/6d/Interior_do_Rio_Sul_Shopping_(2).jpg",
    "estadio-nilton-santos": "9/95/Stitched_003.jpg",
    "estadio-sao-januario": "b/b2/Estádio_de_São_Januário_by_Diego_Baravelli.jpg",
    "bioparque-do-rio": "9/93/Quinta_da_Boa_Vista_18.jpg",
    "escadaria-selaron": "0/0c/1920x2560_escalas_lapa_rio_de_janeiro_brasil.jpg",
    "arcos-da-lapa": "a/a3/2018_Rio_de_Janeiro_-_Aqueduto_da_Carioca.jpg",
    "museu-do-amanha": "2/2f/-i---i-_(33551648894).jpg",
    "museu-nacional-de-belas-artes": "3/34/Museu_Nacional_de_Belas_Artes_02.jpg",
    "museu-historico-nacional": "c/cd/2005_f_santiago_rj.jpg",
    "museu-da-republica": "c/c1/Arquitetura_museu_do_catete.jpg",
    "museu-chacara-do-ceu": "4/42/ChacaraCeu-1.jpg",
    "museu-casa-do-pontal": "7/78/Museu_Casa_do_Pontal_01.jpg",
    "igreja-de-nossa-senhora-da-gloria-do-outeiro": "e/e1/At_Rio_de_Janeiro_2019_004.jpg",
    "paco-imperial": "8/85/PacoImperial1.jpg",
    "ilha-fiscal": "4/42/Ilha_Fiscal_no_Rio_de_Janeiro_(53299621447).jpg",
    "forte-de-copacabana": "c/c2/Forte_de_Copacabana_panorama.jpg",
    "aterro-do-flamengo": "8/87/Rio-Aterro-Flamengo-Gloria.jpg",
    "vista-chinesa": "8/88/20170825_Blick_auf_den_Corcovado_und_den_Pão_de_Açúcar.jpg",
    "santa-teresa": "8/83/Cine_Santa_Teresa_Rio_de_Janeiro_02.jpg",
    "pedra-do-sal": "f/f3/2018_Rio_de_Janeiro_-_Pedra_do_Sal.jpg",
    "confeitaria-colombo": "1/1d/Confeitaria_Colombo_-_Rio_de_Janeiro_-_20210911155216.jpg",
    "copacabana-palace": "4/43/Belmond_Copacabana_Palace_entrance_at_night,_Rio_de_Janeiro,_Brazil.jpg",
    "village-mall": "6/6f/Village_Mall.jpg",
    "sambodromo": "b/b7/\"Brasil,_Brega_e_Kitsch\".jpg",
    "cidade-do-samba": "a/a4/Cidade_do_Samba_(460133830).jpg",
    "cidade-das-artes": "e/e4/2016-08-27_-_Cidade_da_Música.jpg",
    "aquario": "f/f7/Amphiprion_ephippium_A74264020241123.jpg",
    "yup-star": "9/98/AquaRio_RioStar.jpg",
    "maracana": "8/82/Architectural_Detail_-_Maracana_Stadium_-_Rio_de_Janeiro_-_Brazil_-_09_(16936742323).jpg",
    "catedral-metropolitana": "d/d4/Interior_Catedral_Metropolitana_de_Río_de_Janeiro_A74232520241122.jpg",
    "instituto-moreira-salles": "b/b2/Instituto_Moreira_Salles_na_Gávea.jpg",
    "mosteiro-de-sao-bento": "4/48/Mosteiro_São_Bento,_interior.jpg",
    "igreja-da-candelaria": "c/c6/Igreja_Candelária.JPG",
    "convento-de-santo-antonio": "c/c5/Lascar_Convento_Santo_Antonio_(4551784166).jpg",
    "praia-vermelha": "e/ee/Praia_Vermelha_panorama.jpg",
    "prainha": "9/9a/Prainha,_Rio_de_Janeiro,_RJ,_Brazil.jpg",
    "jardim-botanico": "c/c4/Jardim_Botânico_-_Rio_de_Janeiro_(4471421847).jpg",
    "parque-lage": "f/f4/Parque_Lage_(3734648269).jpg",
    "bar-urca": "1/19/Beach_roads,_Urca_(7355699342).jpg",
    "aprazivel": "3/32/Sitting_in_the_tree_house_of_Aprazivel_restaurant_in_the_\"Rio_rainforest\"_-_panoramio.jpg",
    "paraty": "5/5a/Centro_Histórico_de_Paraty,_RJ_-_2023-11-11_-_DSC06814.jpg",
    "saara": "2/2a/Saara,_Centro_do_Rio_de_Janeiro-RJ.jpg",
    "feira-do-rio-antigo": "0/0e/Feira_Rio_Antigo_na_Rua_do_Lavradio_II.jpg",
    "teatro-riachuelo-rio": "0/0f/2018_Rio_de_Janeiro_-_Teatro_Riachuelo.jpg",
  },

  /* Estaciones de metro, para "la estación más cercana" en cada ficha. OpenStreetMap, 18/11/2026. */
  stations: {
    "1": [["Afonso Pena / Tijuca", -22.91845, -43.21775], ["Botafogo", -22.95036, -43.18422], ["Cantagalo / Copacabana", -22.97568, -43.19451], ["Cardeal Arcoverde", -22.96381, -43.18141], ["Carioca", -22.90756, -43.17808], ["Catete", -22.92595, -43.17655], ["Central do Brasil / Centro", -22.90504, -43.19078], ["Cinelândia / Centro", -22.91091, -43.17565], ["Estácio", -22.91364, -43.20645], ["Flamengo", -22.93720, -43.17853], ["General Osório / Ipanema", -22.98155, -43.19656], ["Glória", -22.92065, -43.17666], ["Largo do Machado", -22.93117, -43.17768], ["Praça Onze", -22.90992, -43.20028], ["Saara / Presidente Vargas", -22.90334, -43.18618], ["Saens Peña / Tijuca", -22.92414, -43.23259], ["Siqueira Campos / Copacabana", -22.96729, -43.18737], ["São Francisco Xavier / Tijuca", -22.92083, -43.22383], ["Uruguai / Tijuca", -22.93094, -43.23827], ["Uruguaiana / Engenheiro Fernando Mac Dowell", -22.90291, -43.18182]],
    "2": [["Acari / Fazenda Botafogo", -22.82500, -43.34930], ["Botafogo", -22.95036, -43.18422], ["Carioca", -22.90756, -43.17808], ["Catete", -22.92595, -43.17655], ["Central do Brasil / Centro", -22.90504, -43.19078], ["Cidade Nova", -22.90875, -43.20630], ["Cinelândia / Centro", -22.91091, -43.17565], ["Coelho Neto", -22.83187, -43.34292], ["Colégio", -22.84266, -43.33455], ["Del Castilho", -22.87928, -43.27193], ["Engenho da Rainha", -22.86792, -43.29738], ["Flamengo", -22.93720, -43.17853], ["Glória", -22.92065, -43.17666], ["Inhaúma", -22.87457, -43.28346], ["Irajá", -22.84802, -43.32327], ["Largo do Machado", -22.93117, -43.17768], ["Maria da Graça", -22.88149, -43.26019], ["Pavuna", -22.80637, -43.36553], ["Rei Pelé / Maracanã", -22.90972, -43.23389], ["Saara / Presidente Vargas", -22.90334, -43.18618], ["São Cristóvão", -22.90969, -43.22099], ["Thomáz Coelho", -22.86260, -43.30679], ["Triagem", -22.89685, -43.24448], ["Uruguaiana / Engenheiro Fernando Mac Dowell", -22.90291, -43.18182], ["Vicente de Carvalho", -22.85404, -43.31315]],
    "4": [["Antero de Quental / Leblon", -22.98468, -43.22431], ["General Osório / Ipanema", -22.98155, -43.19656], ["Jardim Oceânico / Barra da Tijuca", -23.00680, -43.31095], ["Jardim de Alah / Leblon", -22.98366, -43.21658], ["Nossa Senhora da Paz / Ipanema", -22.98399, -43.20666], ["São Conrado", -22.99135, -43.25559]]
  }
};
