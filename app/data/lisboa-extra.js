/* Datos complementarios de Lisboa (tarjeta #214): sellos del pasaporte, niveles de recomendación, dietas, días que abren,
   colecciones, zonas para armar viajes, calendario, fotos y estaciones.
   Las claves son los ids de los lugares (nombre en minúsculas, sin acentos, con guiones). */
window.CITY_EXTRA = window.CITY_EXTRA || {};
window.CITY_EXTRA.lisboa = {
  tz: "Europe/Lisbon",

  /* Pasaporte de Lisboa: sellos que se ganan marcando "Ya fui" en los lugares. Mismo formato que data/caba-extra.js. */
  stamps: [
    { id: "primer-paso", icon: "👣", name: "Primer paso", desc: "Visitá tu primer lugar", n: 1 },
    { id: "imperdibles", icon: "🏛️", name: "Lo esencial", desc: "5 imperdibles destacados", n: 5, cat: "ver", q: 3 },
    { id: "museos", icon: "🖼️", name: "De museo en museo", desc: "3 museos", n: 3, sub: "Museo" },
    { id: "nata", icon: "🥧", name: "Fan del pastel de nata", desc: "2 pastelerías", n: 2, sub: "Pastelería" },
    { id: "miradores", icon: "🌅", name: "Siete colinas", desc: "3 miradores", n: 3, tag: ["mirador"] },
    { id: "fado", icon: "🎶", name: "Saudade", desc: "Una noche de fado", n: 1, sub: "Fado" },
    { id: "mariscos", icon: "🦐", name: "Del mar a la mesa", desc: "Una marisquería", n: 1, sub: "Mariscos" },
    { id: "noche", icon: "🍸", name: "Trasnochador", desc: "2 salidas de noche", n: 2, cat: "noche" },
    { id: "escapada", icon: "🚆", name: "Escapada", desc: "Una excursión fuera de la ciudad", n: 1, cat: "escapadas" },
    { id: "barrios", icon: "🏘️", name: "Explorador de barrios", desc: "Lugares en 5 barrios distintos", n: 5, barrios: true },
    { id: "honorario", icon: "🇵🇹", name: "Alfacinha honorario", desc: "20 lugares visitados", n: 20 }
  ],

  /* Nivel de recomendación: 3 = Destacado, 2 = Muy recomendado, 1 = Buena opción.
     Los marcados como destacados en data/lisboa-lugares.js ya son 3; el resto es 2 salvo lo que se lista acá. */
  quality: {
    3: ["museu-nacional-de-arte-antiga", "maat", "igreja-de-sao-roque", "alma", "prado", "taberna-sal-grosso", "tasca-do-chico", "red-frog",
      "mosteiro-de-sao-vicente-de-fora", "miradouro-de-sao-pedro-de-alcantara", "cabo-da-roca", "jardim-botanico-de-lisboa"],
    1: ["elevador-de-santa-justa", "rua-augusta", "centro-colombo", "centro-vasco-da-gama", "el-corte-ingles", "casa-das-bifanas", "tour-en-tuk-tuk"]
  },
  awards: {},

  /* Dietas. Solo con fuente: OpenStreetMap ("diet:vegan=only", 19/11/2026), que marca estos locales como 100 % veganos.
     Detalle en docs/fuentes-lisboa.md. */
  diet: {
    "jardim-das-cerejas": ["vegano", "vegetariano"], "ao-26": ["vegano", "vegetariano"], "kong": ["vegano", "vegetariano"],
    "o-botanista": ["vegano", "vegetariano"], "the-green-affair": ["vegano", "vegetariano"]
  },
  dietFull: ["jardim-das-cerejas", "ao-26", "kong", "o-botanista", "the-green-affair"],

  /* Días que abren (0 = domingo … 6 = sábado). Solo los días fijos y conocidos; pueden cambiar en feriados. */
  only: {
    "feira-da-ladra": [2, 6]
  },

  /* Lista de preparación del viaje (se tilda y queda guardada en el dispositivo). */
  checklist: [
    { title: "Antes de viajar", items: [
      "Pasaporte vigente y una copia en el celular",
      "Seguro de viaje con cobertura médica",
      "Adaptador de enchufe tipo F, el de dos patas redondas (230 V)",
      "Avisar al banco que vas a usar la tarjeta en el exterior",
      "Calzado cómodo con buena suela, para las subidas y las calles de piedra",
      "Comprar con anticipación las entradas a Sintra, los Jerónimos y el Oceanario",
      "Descargar esta guía y los mapas de Google sin conexión"
    ] },
    { title: "Al llegar", items: [
      "Tomar el metro en la terminal 1 del aeropuerto",
      "Comprar la tarjeta navegante y cargarle zapping",
      "Activar la eSIM o comprar un chip",
      "Pedir que retiren la entrada de la mesa si no la vas a comer"
    ] }
  ],

  /* Colecciones del inicio: cada una es un filtro de Explorar. */
  collections: [
    { name: "Clásicos de Lisboa", icon: "🏛️", filter: { q: "clásico" }, cover: "praca-do-comercio" },
    { name: "Miradores", icon: "🌅", filter: { q: "mirador" }, cover: "miradouro-da-senhora-do-monte" },
    { name: "Belém y los descubrimientos", icon: "⛵", filter: { q: "historia" }, cover: "torre-de-belem" },
    { name: "Museos", icon: "🖼️", filter: { cat: "ver", sub: "Museo" }, cover: "museu-calouste-gulbenkian" },
    { name: "Lisboa gratis", icon: "💸", filter: { prices: [0] }, cover: "alfama" },
    { name: "Pastéis de nata", icon: "🥧", filter: { cat: "comer", sub: "Pastelería" }, cover: "pasteis-de-belem" },
    { name: "Cocina portuguesa", icon: "🍲", filter: { q: "comida portuguesa" }, cover: "taberna-da-rua-das-flores" },
    { name: "Mariscos", icon: "🦐", filter: { q: "mariscos" }, cover: "cervejaria-ramiro" },
    { name: "Noches de fado", icon: "🎶", filter: { q: "fado" }, cover: "clube-de-fado" },
    { name: "Terrazas al atardecer", icon: "🍹", filter: { q: "atardecer" }, cover: "park-bar" },
    { name: "Cocina de autor", icon: "👩‍🍳", filter: { q: "cocina de autor" }, cover: "belcanto" },
    { name: "Joyas menos conocidas", icon: "💎", filter: { q: "joya oculta" }, cover: "igreja-de-sao-roque" },
    { name: "Con chicos", icon: "🧒", filter: { q: "chicos" }, cover: "oceanario-de-lisboa" },
    { name: "Días de lluvia", icon: "🌧️", filter: { q: "lluvia" }, cover: "museu-nacional-do-azulejo" },
    { name: "Excursiones de un día", icon: "🚆", filter: { cat: "escapadas" }, cover: "palacio-nacional-da-pena" }
  ],

  /* Zonas para el armado automático de viajes, en orden de prioridad (las dos primeras forman el viaje de un día). */
  zones: [
    { name: "Baixa, Chiado y Alfama", barrios: ["Baixa e Chiado", "Alfama e Mouraria", "Graça"] },
    { name: "Belém", barrios: ["Belém", "Alcântara"] },
    { name: "Bairro Alto, Príncipe Real y Cais do Sodré", barrios: ["Bairro Alto e Príncipe Real", "Cais do Sodré e Santos", "Estrela e Campo de Ourique"] },
    { name: "Avenidas Novas", barrios: ["Avenidas Novas", "Benfica y Alvalade"] },
    { name: "Parque das Nações", barrios: ["Oriente y Marvila"] }
  ],
  zonasDosDias: [["Baixa, Chiado y Alfama", [0]], ["Belém, Bairro Alto y Cais do Sodré", [1, 2]]],
  zonaChicos: 4,

  /* Palabras que la gente escribe → cómo figura en la guía. */
  synonyms: {
    desayuno: "cafe", brunch: "cafe", merienda: "cafe", cafeteria: "cafe", bica: "cafe", vegano: "vegetariano",
    hotel: "hospedaje", hoteles: "hospedaje", dormir: "hospedaje", alojamiento: "hospedaje", hostal: "hostel",
    ninos: "chicos", nenes: "chicos", familia: "chicos", familias: "chicos", barato: "economico", baratos: "economico", gratuito: "gratis",
    tragos: "cocteles", cocktail: "cocteles", cocktails: "cocteles", boliche: "bailar", discoteca: "bailar", fiesta: "bailar",
    excursion: "excursiones", escapada: "excursiones", paseo: "caminar", shopping: "compras", souvenirs: "recuerdos", regalos: "recuerdos",
    lluvia: "lluvia", llueve: "lluvia", techo: "lluvia", vista: "mirador", vistas: "mirador", miradouro: "mirador", guia: "tours", guias: "tours", visita: "tours",
    nata: "pastelería", pastel: "pastelería", pasteis: "pastelería", bacalao: "comida portuguesa", bacalhau: "comida portuguesa", tipica: "comida portuguesa",
    sardinas: "comida portuguesa", marisco: "mariscos", gambas: "mariscos", tranvia: "tranvía", eletrico: "tranvía", azulejos: "azulejo",
    playa: "playa", praia: "playa", surf: "surf", sintra: "sintra", cascais: "cascais", ginja: "ginjinha", cerveza: "cerveza", futbol: "fútbol",
    benfica: "fútbol", sporting: "fútbol"
  },

  /* Calendario: fechas habituales, a confirmar cada año. m = meses (1-12). */
  events: [
    { m: [4], when: "25 de abril", icon: "🌹", name: "Día de la Libertad", desc: "El aniversario de la Revolución de los Claveles, con un desfile popular por la Avenida da Liberdade y claveles rojos por todos lados." },
    { m: [4, 5], when: "Abril o mayo", icon: "🎬", name: "IndieLisboa", desc: "El festival de cine independiente de la ciudad." },
    { m: [6], when: "Todo junio", icon: "🐟", name: "Fiestas de Lisboa", desc: "Arraiais en los barrios con sardinas asadas, música y guirnaldas. La gran noche es la de San Antonio, del 12 al 13 de junio, con las marchas populares por la Avenida da Liberdade." },
    { m: [7], when: "Julio", icon: "🎸", name: "NOS Alive", desc: "Uno de los grandes festivales de música de Europa, junto al río en Algés." },
    { m: [10], when: "Octubre", icon: "🏃", name: "Maratón de Lisboa", desc: "La maratón y la media maratón, con la llegada junto al río." },
    { m: [10, 11], when: "Octubre o noviembre", icon: "🎥", name: "Doclisboa", desc: "El festival internacional de cine documental." },
    { m: [11], when: "Noviembre", icon: "💻", name: "Web Summit", desc: "La gran conferencia de tecnología: la ciudad se llena y los hoteles suben." },
    { m: [12], when: "Diciembre", icon: "🎄", name: "Navidad en Lisboa", desc: "Luces en la Baixa y la Avenida da Liberdade, un árbol gigante en la Praça do Comércio y bolo rei en las pastelerías." },
    { m: [12], when: "31 de diciembre", icon: "🎆", name: "Fin de año", desc: "Fiesta y fuegos artificiales sobre el río en la Praça do Comércio." }
  ],

  /* Bloques extra para Info práctica. */
  practicalMore: [
    { icon: "🥖", title: "La entrada de la mesa", items: [
      { t: "El \"couvert\"", d: "Al sentarte te traen pan, manteca, aceitunas o quesos sin pedirlos. No son gratis: se cobra lo que comés." },
      { t: "Qué hacer", d: "Si no lo querés, pedí que lo retiren apenas lo traen. Es normal y nadie se ofende." }
    ] },
    { icon: "⛰️", title: "Subidas y calles de piedra", items: [
      { t: "Las siete colinas", d: "Lisboa está hecha de subidas: planificá el recorrido para ir en bajada, y usá los elevadores y el tranvía." },
      { t: "La calçada", d: "Las veredas de piedra blanca y negra son lindas pero resbalan, sobre todo cuando llueve: calzado con buena suela." },
      { t: "Sombra y agua", d: "En verano el sol pega fuerte: llevá agua y sombrero." }
    ] },
    { icon: "🏥", title: "Salud y farmacias", items: [
      { t: "Emergencias", d: "Llamá al 112. Para consultas de salud, la línea SNS 24 (808 24 24 24) te dice a dónde ir." },
      { t: "Farmacias", d: "Tienen una cruz verde. Siempre hay alguna de turno abierta de noche." },
      { t: "Agua", d: "El agua de la canilla es potable." },
      { t: "Seguro de viaje", d: "Muy recomendable: sin cobertura, la atención privada sale cara." }
    ] },
    { icon: "🔍", title: "Cómo elegimos los lugares", items: [
      { t: "Selección", d: "La guía incluye solo lugares con reputación sostenida: distinciones oficiales, guías reconocidas y buen consenso en reseñas públicas." },
      { t: "Niveles", d: "'Destacado' son los mejores de su categoría, 'Muy recomendado' es una apuesta segura y 'Buena opción' cumple bien pero no es imprescindible." },
      { t: "Opiniones al día", d: "En cada ficha, el botón 'Opiniones, horarios y fotos' abre el lugar en Google Maps con su puntaje, reseñas, horarios actualizados y fotos." },
      { t: "Precios", d: "Usamos niveles ($ a $$$$) en vez de montos porque los precios cambian seguido." }
    ] }
  ],

  /* Fotos: de Wikimedia Commons con licencia libre (ver docs/fuentes-lisboa.md). */
  photos: {
    "cervejaria-ramiro": "3/3f/Cervejaria_Ramiro_(42262921054).jpg",
    "the-green-affair": "1/1c/The_Green_Affair,_Lisbon.jpg",
    "o-faia": "1/11/Our_first_night_destination_Fado_Restaurant_O_Faia_in_Bairro_Alto_(47061589274).jpg",
    "red-frog": "5/57/Red_Frog_Speakeasy_(29108998038).jpg",
    "bairro-alto-hotel": "b/b0/Lisboa-_bairro_alto_hotel_(55850917).jpg",
    "free-tour-por-alfama-y-la-baixa": "1/16/Lisboa-Alfama-Rua_São_Miguel-20140917.jpg",
    "tour-de-comida-por-la-mouraria": "a/ae/Lisboa,_Mouraria_(53402431884).jpg",
    "tour-de-arte-urbano": "9/96/Galeria_Pública_de_Arte_Urbana_-_Bairro_Padre_Cruz_em_Lisboa_(Esquerda.Net_33435522295).jpg",
    "tour-por-belem-con-guia": "d/dc/Rio_Tejo_e_Torre_de_Belém_-_Lisboa_-_Portugal_(51248936208).jpg",
    "tour-en-tuk-tuk": "4/4e/Sé_de_Lisboa_with_Tuk-Tuk_Tour_Vehicle_(55260998385).jpg",
    "paseo-en-velero-por-el-tajo": "5/55/Veleiro_Formidável_no_Tejo_com_a_Ponte_25_de_Abril_(2026).jpg",
    "barco-a-cacilhas": "1/12/Cacilheiros_(Lisbon-cacilhas_ferry_boats)_(7617646782).jpg",
    "bici-por-la-ribera-hasta-belem": "e/ed/Lisboa,_Ciclovia_da_Frente_Ribeirinha.jpg",
    "tranvia-28": "b/b5/Le_tram_28.jpg",
    "museu-nacional-dos-coches": "c/ce/Carruagem_de_Gala_-_Museu_Nacional_dos_Coches_-_Lisboa_-_Portugal_(51000071911).jpg",
    "museu-do-aljube": "a/a5/Museu_do_aljube_(26340632078).jpg",
    "miradouro-das-portas-do-sol": "a/af/View_of_Mosteiro_de_São_Vicente_de_Fora_from_Miradouro_das_Portas_do_Sol,_Lisbon,_20250603_2018_9052.jpg",
    "parque-natural-da-arrabida": "8/80/Parque_Natural_da_Arrabida_04.jpg",
    "tivoli-avenida-liberdade": "2/2b/Hotel_Tivoli_Lisbon.jpg",
    "loja-das-conservas": "2/27/Conservas_Rua_do_Arsenal_Lisboa_Portugal.JPG",
    "ribera-del-tajo": "9/98/Lisboa_Ribeira_das_Naus_(15554913474).jpg",
    "casa-da-india": "!3/31/Casa_de_India_-_panoramio.jpg",
    "casa-das-bifanas": "3/38/Casa_das_bifanas_Lisboa.jpg",
    "alma": "e/ec/Soul_Mocktail_-_Alma,_Lisbon_(52740672085).jpg",
    "rua-cor-de-rosa": "a/a7/2025_(365_challenge_No._1)_-_Week_9_(Lisbon_trios)_-_Day_7,_Pic_3_-_coloured_umbrellas_on_Rua_Cor-de-Rosa_(54387664786).jpg",
    "el-corte-ingles": "8/88/Fisheye_image_of_escalators_in_the_interior_of_the_El_Corte_Ingles,_Lisbon,_Portugal_julesvernex2.jpg",
    "pilar-7": "6/60/The_Alcantara_and_Ponte_25_de_Abril_(41763869354).jpg",
    "conserveira-de-lisboa": "e/e6/Conseveira_de_Lisboa_selling_sardines_(4225387998).jpg",
    "luvaria-ulisses": "a/ac/Lissabon-Rua_do_Carmo-06-Luvaria_Ulisses-2011-gje.jpg",
    "clases-de-surf-en-carcavelos": "c/ce/Surfers_at_Carcavelos_Portugal.jpg",
    "telecabine-lisboa": "e/e8/Telecabine_Lisboa_(53530819724).jpg",
    "torre-de-belem": "b/b5/Belem_Tower_-_April_2019_(2).jpg",
    "elevador-de-santa-justa": "5/5f/Elevador_de_Santa_Justa,_Lisboa,_Portugal,_2022-07-24,_DD_07.jpg",
    "padrao-dos-descobrimentos": "b/bc/Lisbonne_-_Padrão_dos_Descobrimentos_-_Closeup.jpg",
    "arco-da-rua-augusta": "0/0a/Lisbon_Praça_do_Comércio_BW_2018-10-03_13-33-44_s.jpg",
    "museu-nacional-de-arte-antiga": "3/3e/MNAA.jpg",
    "miradouro-da-senhora-do-monte": "3/31/Miradouro_Nossa_Senhora_do_Monte_II.jpg",
    "miradouro-da-graca": "1/10/Miradouro_da_Graça.jpg",
    "se-de-lisboa": "5/54/West_facade_of_Lisbon_Cathedral_(retouched).jpg",
    "igreja-de-sao-roque": "a/a5/Exterior_of_Igreja_de_São_Roque_(Lisbon)_63.jpg",
    "panteao-nacional": "3/33/Exterior_of_Igreja_de_Santa_Engrácia_70.jpg",
    "mosteiro-de-sao-vicente-de-fora": "e/ef/Igreja_e_Mosteiro_de_São_Vicente_de_Fora.jpg",
    "basilica-da-estrela": "1/1d/Main_facade_of_Basílica_da_Estrela_57.jpg",
    "jardim-botanico-de-lisboa": "7/77/Jardim_Botânico_de_Lisboa_-_Portugal_🇵🇹_(54210262784).jpg",
    "jardim-do-principe-real": "9/98/Patriarcal_Reservoir_01.jpg",
    "aqueduto-das-aguas-livres": "1/1d/Aqueduto_das_Águas_Livres_(1).jpg",
    "rossio": "c/c8/Praça_Don_Pedro_IV_(Rossio).jpg",
    "mercado-de-arroios": "a/a1/Mercado_de_Arroios.jpg",
    "mercado-da-ribeira": "9/9a/Mercado_Ribeira_Lisbon.JPG",
    "a-brasileira": "d/d3/A_BRASILEIRA_DO_CHIADO.jpg",
    "a-ginjinha": "6/67/Ginjinha_store.jpg",
    "palacio-nacional-da-pena": "3/3e/Sintra_-_Palacio_da_Pena_(20332995770).jpg",
    "quinta-da-regaleira": "e/e7/Exterior_of_the_Quinta_da_Regaleira_20.jpg",
    "palacio-de-monserrate": "1/11/Monserrate500.jpg",
    "setubal": "e/e3/Fuerte_de_San_Felipe,_Setúbal,_Portugal,_2012-05-11,_DD_13.JPG",
    "praia-de-carcavelos": "f/f9/Praia_de_Carcavelos.jpg",
    "costa-da-caparica": "2/26/Praia_do_Dragão_Vermelho_-_Costa_da_Caparica_-_Portugal_(53289027762).jpg",
    "praia-do-portinho-da-arrabida": "5/51/Praia_do_Portinho,_Arrábida,_Setúbal,_Portugal,_2022-07-21,_DD_12.jpg",
    "cabo-da-roca": "d/de/Coasts_of_Cabo_da_Roca_13.jpg",
    "boca-do-inferno": "6/6d/A_dramática_'Boca_do_Inferno'.JPG",
    "feira-da-ladra": "2/2e/Feira_da_ladra.jpg",
    "lx-factory": "5/54/LX_Factory_(22379332901).jpg",
    "avenida-da-liberdade": "2/21/Avenida_da_Liberdade_(22344060581)_(cropped).jpg",
    "rua-augusta": "6/66/Rua_Augusta_from_Arco_Triunfal_da_Rua_Augusta_08.jpg",
    "centro-colombo": "3/3c/Centro_Comercial_Colombo_Novembro_2023.jpg",
    "centro-vasco-da-gama": "0/03/P1030545_(5581907448).jpg",
    "museu-benfica-cosme-damiao": "1/12/Museum_Benfica_dome.JPG",
    "estadio-jose-alvalade": "4/42/Estádio_José_Alvalade_antes_do_jogo_Sporting_-_Arouca.jpg",
    "estadio-nacional": "7/72/StadionJamor.JPG",
    "parque-tejo": "f/f0/Foz_do_Rio_Trancão.JPG",
    "teatro-nacional-d-maria-ii": "e/e4/Lisboa_DSC00338_(36409369424).jpg",
    "teatro-nacional-de-sao-carlos": "7/7d/Teatro_Nacional_de_São_Carlos_2021-04-20.png",
    "coliseu-dos-recreios": "8/8d/Lisboa_-_Panorama_-_06_-_Vista_desde_el_Jardín_de_San_Pedro_de_Alcántara_(cropped)_Coliseu.jpg",
    "pavilhao-do-conhecimento": "f/f4/Pavilhão_da_Ciência_e_Conhecimento.jpg",
    "jardim-zoologico": "2/28/Jardim_Zoologico_Lisboa_1.JPG",
    "mosteiro-dos-jeronimos": "0/0e/1502_legte_König_Manuel_I._den_Grundstein_für_das_Hieronymus_Kloster_in_Lissabon._06.jpg",
    "praca-do-comercio": "3/3c/\"Terreiro_do_Paço\"_seen_from_the_river_(4487596196).jpg",
    "castelo-de-sao-jorge": "3/37/Castelo_Sao_Jorge_Lisboa_1.JPG",
    "museu-calouste-gulbenkian": "c/c6/Calouste_Gulbenkian_Museum_Exterior_37.jpg",
    "museu-nacional-do-azulejo": "d/d5/Convento_da_Madre_de_Deus_-_Lisboa_-_Portugal_(46913633574).jpg",
    "maat": "c/c1/Exterior_of_Museu_de_Arte,_Arquitetura_e_Tecnologia_67.jpg",
    "museu-do-fado": "6/61/Lisboa_(Portugal)._(54223270144).jpg",
    "miradouro-de-santa-luzia": "7/75/+_Abends_mit_dem_Tuck-Tuck_durch_Lissabon._12.jpg",
    "miradouro-de-sao-pedro-de-alcantara": "5/54/041_Lisbon_(48821413627).jpg",
    "jardim-da-estrela": "6/61/Jardim_da_Estrela_-_Lissabon.JPG",
    "parque-eduardo-vii": "c/c9/Parque_Eduardo_Setimo.JPG",
    "estufa-fria": "e/e4/Estufa_Fría_(22181833839).jpg",
    "time-out-market": "2/24/Mercado_da_Ribeira,_Time_Out_Market,_Lisbon_-_49677105008.jpg",
    "mercado-de-campo-de-ourique": "c/ce/Campo_de_Ourique_Market.jpg",
    "pasteis-de-belem": "d/d0/20200206_Pasteis_de_Belem_7784_(49660289541).jpg",
    "confeitaria-nacional": "5/5b/ConfeitariaNacional.png",
    "pastelaria-versailles": "c/ce/Av_da_República_(pastelaria_Versailles)_7244.jpg",
    "clube-de-fado": "1/1f/Clube_de_Fado_in_Alfama_(Lissabon_2016)_(25491133644).jpg",
    "cristo-rei": "1/16/Cristo_Rei_(36211699613)_(cropped).jpg",
    "lisbon-destination-hostel": "5/55/Lisbon_Destination_Hostel_Bar,_2024.jpg",
    "pestana-palace": "2/2a/Pestana_Palace_Hotel_IMG_2004.jpg",
    "livraria-bertrand": "6/65/LivrariaBertrand2.JPG",
    "estadio-da-luz": "3/30/AdeptosBenfica.jpg",
    "meo-arena": "6/6d/Pavilhão_Atlântico_-_dynamosquito.jpg",
    "centro-cultural-de-belem": "c/c8/View_from_Padrão_dos_Descobrimentos_-_Centro_Cultural_de_Belém_(2)_-_Jul_2008.jpg",
    "oceanario-de-lisboa": "d/d5/2025-03-26_10-20-05_PT_Lisbon_JHe_N9_(55109564522).jpg",
    "museu-de-marinha": "e/ea/2024_09_14_Lisbon_P9143000_(54101723064).jpg",
    "miradouro-de-santa-catarina": "5/57/People_resting_in_the_shade_-_Miradouro_Santa_Catarina_-_Lisboa_(50856130506).jpg",
    "convento-do-carmo": "1/14/Nave_of_Igreja_do_Convento_do_Carmo_(Lisbon)_81.jpg",
    "alfama": "1/19/Balcony_in_Alfama,_Lisboa_(8016422149).jpg",
    "bairro-alto": "f/fc/Bairro_Alto_(3903214849).jpg",
    "mouraria": "6/6a/Mouraria,_Lisboa_-_panoramio.jpg",
    "chiado": "5/5b/Largo_do_Chiado_em_Lisboa.jpg",
    "casa-dos-bicos": "8/8a/Casa_dos_Bicos,_Lisboa_Rua_dos_Bacalhoeiros_10_-_panoramio.jpg",
    "cervejaria-trindade": "0/0d/Restaurant_Cervejaria_Trindade_(39916271621).jpg",
    "manteigaria": "1/10/Pastéis_de_Nata_from_Manteigaria_(22342423936).jpg",
    "copenhagen-coffee-lab": "e/e5/Copenhagen_Coffee_Lab_(21745787174).jpg",
    "kong": "d/d2/‘Cheesecake’_at_Kong_vegan_restaurant,_Lisbon_(54886481193).jpg",
    "park-bar": "6/65/Park_Terrace_Bar_-_Lisboa_-_Portugal_(49946961437).jpg",
    "pensao-amor": "d/d9/Pensão_Amor_-_Lisboa_-_Portugal_(51621560454).jpg",
    "foxtrot": "d/de/Bar_Foxtrot_-_Lisboa_-_Portugal_(52564294135).jpg",
    "pavilhao-chines": "4/41/Bar_Pavilhão_Chinês_-_Lisboa_-_Portugal_(53664321379).jpg",
    "procopio": "6/68/Procópio_Bar_-_Portugal_(53447702675).jpg",
    "castelo-dos-mouros": "0/05/Castelo_dos_Mouros,_Sintra_25.jpg",
    "cascais": "c/ce/Cascais_(54221222721).jpg",
    "obidos": "6/6f/Obidos_(37886179204).jpg",
    "evora": "3/3c/Praça_do_Giraldo_-_Évora_-_Portugal_(52460465445).jpg",
    "praia-do-guincho": "9/91/Praia_do_Guincho_-_Portugal_(4145484252).jpg",
    "lisbon-lounge-hostel": "6/69/Lisbon_lounge_hostel.jpg",
    "avenida-palace": "2/28/Lisbon,_the_hotel_Avenida_Palace.JPG",
    "hotel-mundial": "9/92/Rooftop_do_Hotel_Mundial_-_Lisboa_-_Portugal_🇵🇹_(54977638177).jpg",
    "embaixada": "1/10/Embaixada_(22368458665).jpg",
  },

  /* Estaciones del metro por línea (los nombres de lisboa.js), para "la estación más cercana" en cada ficha.
     Estaciones de OpenStreetMap (19/11/2026), según las líneas del metro. */
  stations: {
    "Azul": [["Alfornelos", 38.76033, -9.20456], ["Alto dos Moinhos", 38.74990, -9.17979], ["Amadora Este", 38.75841, -9.21832], ["Avenida", 38.71901, -9.14483], ["Baixa-Chiado", 38.71042, -9.14004], ["Carnide", 38.75924, -9.19274], ["Colégio Militar/Luz", 38.75338, -9.18929], ["Jardim Zoológico", 38.74209, -9.16891], ["Laranjeiras", 38.74825, -9.17304], ["Marquês de Pombal", 38.72416, -9.14915], ["Parque", 38.72952, -9.15026], ["Pontinha", 38.76223, -9.19684], ["Praça de Espanha", 38.73768, -9.15925], ["Reboleira", 38.75219, -9.22409], ["Restauradores", 38.71600, -9.14231], ["Santa Apolónia", 38.71367, -9.12244], ["São Sebastião", 38.73394, -9.15361], ["Terreiro do Paço", 38.70701, -9.13437]],
    "Amarela": [["Ameixoeira", 38.77933, -9.15967], ["Campo Grande", 38.76027, -9.15792], ["Campo Pequeno", 38.74111, -9.14679], ["Cidade Universitária", 38.75150, -9.15911], ["Entrecampos", 38.74703, -9.14820], ["Lumiar", 38.77339, -9.15937], ["Marquês de Pombal", 38.72472, -9.15033], ["Odivelas", 38.79326, -9.17300], ["Picoas", 38.73036, -9.14695], ["Quinta das Conchas", 38.76731, -9.15556], ["Rato", 38.72011, -9.15485], ["Saldanha", 38.73483, -9.14529], ["Senhor Roubado", 38.78562, -9.17183]],
    "Verde": [["Alameda", 38.73697, -9.13387], ["Alvalade", 38.75311, -9.14403], ["Anjos", 38.72697, -9.13490], ["Areeiro", 38.74233, -9.13350], ["Arroios", 38.73270, -9.13433], ["Baixa-Chiado", 38.71041, -9.14033], ["Cais do Sodré", 38.70614, -9.14683], ["Campo Grande", 38.76008, -9.15782], ["Intendente", 38.72317, -9.13528], ["Martim Moniz", 38.71761, -9.13580], ["Roma", 38.74799, -9.14124], ["Rossio", 38.71404, -9.13792], ["Telheiras", 38.75994, -9.16643]],
    "Vermelha": [["Aeroporto", 38.76842, -9.12828], ["Alameda", 38.73700, -9.13245], ["Bela Vista", 38.74754, -9.11768], ["Cabo Ruivo", 38.76298, -9.10406], ["Chelas", 38.75483, -9.11389], ["Encarnação", 38.77507, -9.11551], ["Moscavide", 38.77489, -9.10300], ["Olaias", 38.73949, -9.12395], ["Olivais", 38.76061, -9.11201], ["Oriente", 38.76786, -9.09973], ["Saldanha", 38.73520, -9.14434], ["São Sebastião", 38.73463, -9.15303]]
  }
};
