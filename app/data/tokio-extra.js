/* Datos complementarios de Tokio (tarjeta #216): sellos del pasaporte, niveles de recomendación, dietas, colecciones,
   zonas para armar viajes, calendario, fotos y estaciones.
   Las claves son los ids de los lugares (nombre en minúsculas, sin acentos, con guiones). */
window.CITY_EXTRA = window.CITY_EXTRA || {};
window.CITY_EXTRA.tokio = {
  tz: "Asia/Tokyo",

  /* Pasaporte de Tokio: sellos que se ganan marcando "Ya fui" en los lugares. Mismo formato que data/caba-extra.js. */
  stamps: [
    { id: "primer-paso", icon: "👣", name: "Primer paso", desc: "Visitá tu primer lugar", n: 1 },
    { id: "imperdibles", icon: "⛩️", name: "Lo esencial", desc: "5 imperdibles destacados", n: 5, cat: "ver", q: 3 },
    { id: "templos", icon: "🏯", name: "Peregrino", desc: "3 templos o santuarios", n: 3, sub: "Templo y santuario" },
    { id: "ramen", icon: "🍜", name: "Fanático del ramen", desc: "2 casas de ramen", n: 2, sub: "Ramen" },
    { id: "sushi", icon: "🍣", name: "Del mar a la barra", desc: "Un sushi", n: 1, sub: "Sushi" },
    { id: "yokocho", icon: "🏮", name: "Callejones", desc: "Una noche en un yokocho", n: 1, sub: "Yokocho y bares chicos" },
    { id: "onsen", icon: "♨️", name: "Agua caliente", desc: "Un onsen o baño público", n: 1, sub: "Onsen y baños" },
    { id: "anime", icon: "🎮", name: "Otaku", desc: "2 lugares de animé o videojuegos", n: 2, tag: ["anime", "videojuegos"] },
    { id: "miradores", icon: "🗼", name: "Desde arriba", desc: "3 miradores", n: 3, tag: ["mirador"] },
    { id: "escapada", icon: "🗻", name: "Escapada", desc: "Una excursión fuera de la ciudad", n: 1, cat: "escapadas" },
    { id: "barrios", icon: "🏘️", name: "Explorador de barrios", desc: "Lugares en 5 barrios distintos", n: 5, barrios: true },
    { id: "honorario", icon: "🇯🇵", name: "Edokko honorario", desc: "20 lugares visitados", n: 20 }
  ],

  /* Nivel de recomendación: 3 = Destacado, 2 = Muy recomendado, 1 = Buena opción.
     Los marcados como destacados en data/tokio-lugares.js ya son 3; el resto es 2 salvo lo que se lista acá. */
  quality: {
    3: ["nezu-museum", "hamarikyu-gardens", "rikugien", "kiyosumi-gardens", "bar-benfiddich", "the-sg-club", "bar-high-five", "kayaba-coffee",
      "cafe-de-l-ambre", "nezu-shrine", "fuunji", "daikokuya-tempura", "narisawa", "den", "hakone", "lago-kawaguchi"],
    1: ["mega-don-quijote-shibuya", "sushizanmai", "karaoke-kan-shibuya", "taito-station-akihabara", "hato-bus", "kabukicho", "falafel-brothers"]
  },
  awards: {},

  /* Dietas. Solo con fuente: OpenStreetMap ("diet:vegan=only", 19/11/2026), que marca estos locales como 100 % veganos.
     Detalle en docs/fuentes-tokio.md. */
  diet: {
    "t-s-tantan": ["vegano", "vegetariano"], "ain-soph-journey": ["vegano", "vegetariano"], "nagi-shokudo": ["vegano", "vegetariano"],
    "vegan-bistro-jangara": ["vegano", "vegetariano"], "falafel-brothers": ["vegano", "vegetariano"]
  },
  dietFull: ["t-s-tantan", "ain-soph-journey", "nagi-shokudo", "vegan-bistro-jangara", "falafel-brothers"],

  /* Lista de preparación del viaje (se tilda y queda guardada en el dispositivo). */
  checklist: [
    { title: "Antes de viajar", items: [
      "Pasaporte vigente y una copia en el celular",
      "Seguro de viaje con cobertura médica",
      "Adaptador de enchufe tipo A, el de dos patas planas, y cargadores que acepten 100 V",
      "Avisar al banco que vas a usar la tarjeta en el exterior",
      "Comprar antes las entradas con día y hora: Museo Ghibli, teamLab, Shibuya Sky y el sumo",
      "Completar Visit Japan Web, el registro oficial para la llegada",
      "Medias sin agujeros: en muchos lugares te sacás los zapatos",
      "Descargar esta guía y los mapas de Google sin conexión"
    ] },
    { title: "Al llegar", items: [
      "Comprar la Welcome Suica o agregar una Suica al celular",
      "Sacar yenes en un cajero de 7-Eleven o del correo",
      "Activar la eSIM o alquilar un wifi de bolsillo",
      "Bajar la app Safety tips, con alertas de terremotos"
    ] }
  ],

  /* Colecciones del inicio: cada una es un filtro de Explorar. */
  collections: [
    { name: "Clásicos de Tokio", icon: "⛩️", filter: { q: "clásico" }, cover: "senso-ji" },
    { name: "Templos y santuarios", icon: "🏯", filter: { cat: "ver", sub: "Templo y santuario" }, cover: "meiji-jingu" },
    { name: "Miradores", icon: "🗼", filter: { q: "mirador" }, cover: "shibuya-sky" },
    { name: "Museos", icon: "🖼️", filter: { cat: "ver", sub: "Museo" }, cover: "tokyo-national-museum" },
    { name: "Tokio gratis", icon: "💸", filter: { prices: [0] }, cover: "yanaka-ginza" },
    { name: "Ramen", icon: "🍜", filter: { cat: "comer", sub: "Ramen" }, cover: "ichiran-shibuya" },
    { name: "Sushi", icon: "🍣", filter: { cat: "comer", sub: "Sushi" }, cover: "sushi-dai" },
    { name: "Izakayas y yokocho", icon: "🏮", filter: { q: "izakaya" }, cover: "omoide-yokocho" },
    { name: "Animé y videojuegos", icon: "🎮", filter: { q: "anime" }, cover: "akihabara" },
    { name: "Jardines japoneses", icon: "🌸", filter: { q: "jardín" }, cover: "shinjuku-gyoen" },
    { name: "Bares de cócteles", icon: "🍸", filter: { q: "cocteles" }, cover: "bar-high-five" },
    { name: "Onsen y baños", icon: "♨️", filter: { cat: "ocio", sub: "Onsen y baños" }, cover: "thermae-yu" },
    { name: "Joyas menos conocidas", icon: "💎", filter: { q: "joya oculta" }, cover: "nezu-shrine" },
    { name: "Con chicos", icon: "🧒", filter: { q: "chicos" }, cover: "teamlab-planets" },
    { name: "Días de lluvia", icon: "🌧️", filter: { q: "lluvia" }, cover: "tokyo-national-museum" },
    { name: "Monte Fuji", icon: "🗻", filter: { q: "monte fuji" }, cover: "lago-kawaguchi" },
    { name: "Excursiones de un día", icon: "🚄", filter: { cat: "escapadas" }, cover: "nikko" }
  ],

  /* Zonas para el armado automático de viajes, en orden de prioridad (las dos primeras forman el viaje de un día). */
  zones: [
    { name: "Asakusa, Ueno y Akihabara", barrios: ["Asakusa y Sumida", "Ueno y Yanaka", "Akihabara y Kanda"] },
    { name: "Shibuya y Harajuku", barrios: ["Shibuya", "Harajuku y Omotesando", "Ebisu, Meguro y Shimokitazawa"] },
    { name: "Shinjuku", barrios: ["Shinjuku", "Ikebukuro"] },
    { name: "Ginza y el Palacio Imperial", barrios: ["Ginza y Tsukiji", "Marunouchi y Nihonbashi"] },
    { name: "Roppongi y Odaiba", barrios: ["Roppongi y Azabu", "Odaiba y la bahía"] }
  ],
  zonasDosDias: [["Asakusa, Ueno, Ginza y el palacio", [0, 3]], ["Shibuya, Harajuku y Shinjuku", [1, 2]]],
  zonaChicos: 4,

  /* Palabras que la gente escribe → cómo figura en la guía. */
  synonyms: {
    desayuno: "desayuno", brunch: "café", merienda: "café", cafeteria: "café", vegano: "vegetariano",
    hotel: "hospedaje", hoteles: "hospedaje", dormir: "hospedaje", alojamiento: "hospedaje", hostal: "hostel", capsula: "cápsula",
    ninos: "chicos", nenes: "chicos", familia: "chicos", familias: "chicos", barato: "económico", baratos: "económico", gratuito: "gratis",
    tragos: "cocteles", cocktail: "cocteles", cocktails: "cocteles", boliche: "bailar", discoteca: "bailar", fiesta: "bailar",
    excursion: "excursiones", escapada: "excursiones", paseo: "paseo", shopping: "compras", souvenirs: "recuerdos", regalos: "recuerdos",
    lluvia: "lluvia", llueve: "lluvia", techo: "lluvia", vista: "mirador", vistas: "mirador", guia: "tours", guias: "tours", visita: "tours",
    templo: "templo", templos: "templo", santuario: "santuario", santuarios: "santuario", shrine: "santuario", temple: "templo",
    fideos: "ramen", sopa: "ramen", pescado: "sushi", sashimi: "sushi", tempura: "tempura", yakitori: "izakaya", sake: "cerveza",
    manga: "anime", otaku: "anime", juegos: "videojuegos", arcade: "videojuegos", pokemon: "anime", ghibli: "anime",
    fuji: "monte fuji", onsen: "onsen", termas: "onsen", baños: "onsen", sento: "onsen", sumo: "sumo", beisbol: "béisbol",
    sakura: "cerezos", cerezo: "cerezos", jardin: "jardín", jardines: "jardín", neon: "neón", karaoke: "karaoke", te: "té", matcha: "té"
  },

  /* Calendario: fechas habituales, a confirmar cada año. m = meses (1-12). */
  events: [
    { m: [1], when: "Primeros días de enero", icon: "🎍", name: "Hatsumode", desc: "La primera visita del año a un templo o santuario: millones de personas pasan por el Meiji Jingu y el Senso-ji." },
    { m: [1, 5, 9], when: "Enero, mayo y septiembre", icon: "🥋", name: "Torneos de sumo", desc: "Los tres torneos de sumo de Tokio, de unas dos semanas cada uno, en el Ryogoku Kokugikan." },
    { m: [2, 3], when: "Febrero y marzo", icon: "🌺", name: "Flores de ciruelo", desc: "Los ciruelos florecen antes que los cerezos, en jardines como el Koishikawa Korakuen." },
    { m: [3], when: "Marzo", icon: "🏃", name: "Maratón de Tokio", desc: "Una de las grandes maratones del mundo, por el centro de la ciudad." },
    { m: [3, 4], when: "Fines de marzo y principios de abril", icon: "🌸", name: "Cerezos en flor (hanami)", desc: "La ciudad se llena de picnics bajo los cerezos: Ueno, Shinjuku Gyoen, Nakameguro y el río Sumida." },
    { m: [5], when: "Mayo", icon: "🏮", name: "Sanja Matsuri", desc: "La gran fiesta de Asakusa, con altares portátiles que se llevan a hombros por las calles." },
    { m: [7], when: "Fines de julio", icon: "🎆", name: "Fuegos artificiales del río Sumida", desc: "Uno de los festivales de fuegos artificiales más famosos de Japón, con gente en yukata." },
    { m: [8], when: "Agosto", icon: "💃", name: "Festivales de verano", desc: "Bailes en la calle, puestos de comida y fuegos artificiales en muchos barrios, como el Awa Odori de Koenji." },
    { m: [11], when: "Noviembre", icon: "🍁", name: "Hojas de otoño (koyo)", desc: "Los arces y ginkgos se ponen rojos y amarillos: Rikugien, la avenida de ginkgos de Jingu Gaien y el monte Takao." },
    { m: [12], when: "Diciembre", icon: "✨", name: "Iluminaciones de invierno", desc: "Luces en Marunouchi, Roppongi, Shibuya y Ebisu durante todo diciembre." },
    { m: [12], when: "31 de diciembre", icon: "🔔", name: "Fin de año", desc: "A medianoche, los templos tocan sus campanas 108 veces. Mucha gente va al templo en vez de salir de fiesta." }
  ],

  /* Bloques extra para Info práctica. */
  practicalMore: [
    { icon: "🏪", title: "Los konbini", items: [
      { t: "Qué son", d: "Los kioscos 7-Eleven, FamilyMart y Lawson están en cada esquina y no cierran nunca." },
      { t: "Qué tienen", d: "Comida rica y barata (onigiri, sándwiches, platos para calentar), cajeros, baños, wifi, impresoras y envío de paquetes." },
      { t: "Suica", d: "Se puede pagar con la Suica o la PASMO." }
    ] },
    { icon: "🍱", title: "Comer en Japón", items: [
      { t: "Máquinas de tickets", d: "En muchos locales de ramen y comida rápida se pide en una máquina en la entrada: elegís, pagás y le das el ticket al cocinero." },
      { t: "Filas", d: "Las filas son normales y se respetan. Si hay una lista en la puerta, anotate." },
      { t: "La tapita de los bares", d: "En los izakaya te traen una entrada que no pediste (otoshi) y se cobra: es como un cubierto." },
      { t: "Sin propina", d: "No se deja propina. Se paga en la caja, a la salida." },
      { t: "Ruido", d: "Sorber los fideos está bien visto: es señal de que te gustan." }
    ] },
    { icon: "🏥", title: "Salud y farmacias", items: [
      { t: "Emergencias", d: "Ambulancia: 119. Si no sabés si ir al hospital, el #7119 de Tokio te orienta (en japonés). AMDA da información médica en varios idiomas." },
      { t: "Farmacias", d: "Las \"drugstores\" venden de todo; para remedios con receta, buscá el cartel de farmacia (薬局)." },
      { t: "Seguro de viaje", d: "Muy recomendable: sin cobertura, la atención médica sale cara." }
    ] },
    { icon: "🔍", title: "Cómo elegimos los lugares", items: [
      { t: "Selección", d: "La guía incluye solo lugares con reputación sostenida: distinciones oficiales, guías reconocidas y buen consenso en reseñas públicas." },
      { t: "Niveles", d: "'Destacado' son los mejores de su categoría, 'Muy recomendado' es una apuesta segura y 'Buena opción' cumple bien pero no es imprescindible." },
      { t: "Opiniones al día", d: "En cada ficha, el botón 'Opiniones, horarios y fotos' abre el lugar en Google Maps con su puntaje, reseñas, horarios actualizados y fotos." },
      { t: "Precios", d: "Usamos niveles ($ a $$$$) en vez de montos porque los precios cambian seguido." }
    ] }
  ],

  /* Fotos: de Wikimedia Commons con licencia libre (ver docs/fuentes-tokio.md). */
  photos: {
    "shibuya-crossing": "d/d1/Shibuya_scramble_crossing_during_Halloween_2023,_actually_less_crowded_than_usual,_high_police_presence_2.jpg",
    "hachiko": "1/1d/Tokyo-Shibuya-and-Shinbashi---2025-07-13_094.jpg",
    "tokyo-skytree": "6/64/Tokyo_Skytree_2023.jpg",
    "palacio-imperial": "6/6c/Tatsumi-yagura,_Tokyo_Imperial_Palace_(52158185625).jpg",
    "tokyo-national-museum": "a/a5/Tokyo_National_Museum,_Honkan_2010.jpg",
    "national-museum-of-western-art": "9/9d/National_museum_of_western_art05s3200.jpg",
    "mori-art-museum": "8/83/Mori_Art_Museum_Entrance_2013.jpg",
    "shibuya-sky": "6/6b/Shibuya_Scramble_Square_-_SHIBUYA_SKY_12.jpg",
    "rikugien": "b/b3/Rikugien_(2572414370).jpg",
    "shimokitazawa": "9/9a/Shimokita_Night.jpg",
    "akihabara": "e/ef/Akiba_denkigai.jpg",
    "daikanyama": "5/50/Roaddaikanyama.JPG",
    "kagurazaka": "d/d9/KagurazakaStreet.JPG",
    "omoide-yokocho": "9/9d/Shinjuku-West_Omoide-Yokocho.jpg",
    "kanda-yabu-soba": "5/53/Kanda_Yabusoba6.JPG",
    "namiki-yabusoba": "f/fe/Namiki_Yabusoba1.JPG",
    "asakusa-imahan": "8/86/Asakusa_Imahan_Kokusai-dori_main_branch.jpg",
    "toyosu-market": "3/33/Toyosu_Market_Tokyo_2.jpg",
    "bar-benfiddich": "4/40/ベンフィディック看板2.jpg",
    "hakone": "2/2b/161223_Owakudani_Hakone_Japan08s3.jpg",
    "yokohama": "a/a2/Minato-mirai_from_Yamashita_Park_at_night.jpg",
    "the-millennials-shibuya": "2/26/The_Millennials_(44881632584).jpg",
    "hotel-ryumeikan-tokyo": "8/84/ホテル龍名館東京外観.JPG",
    "pokemon-center-mega-tokyo": "e/ec/Mega_Tokyo_Pokémon_Center_1.jpg",
    "sunshine-city": "0/08/Sunshine_City_2012.JPG",
    "daikanyama-t-site": "3/35/Daikanyama_T-SITE_2016-04-04.jpg",
    "cat-street": "f/fb/Cat_Street,_Ura_Harajuku_1.jpg",
    "national-museum-of-nature-and-science": "3/3d/NMNC01s3200.jpg",
    "tokyo-takarazuka-theater": "1/18/Tokyo_Takarazuka_Theater_2012.JPG",
    "teamlab-borderless": "0/07/TeamLab_Borderless_Azabudai_Hills.jpg",
    "womb": "f/f8/Lasers_at_WOMB,_2008.jpg",
    "blue-note-tokyo": "8/86/Blue_Note_(Tokyo).jpg",
    "the-okura-tokyo": "d/d9/Hotel_Okura_Tokyo_190912a14.jpg",
    "nintendo-tokyo": "4/43/Nintendo_TOKYO_(52505483447).jpg",
    "ginza-six": "6/60/Ginza_Six_01.jpg",
    "shibuya-109": "1/17/KOHRINBO109.JPG",
    "kodokan": "8/8b/Kodokan_Main_Entrance.jpg",
    "small-worlds-tokyo": "f/f6/SMALL_WORLDS_Miniature_Museum_01.jpg",
    "senso-ji": "d/d7/The_Pagoda_of_Sensō-ji,_Asakusa_(6155443515).jpg",
    "kaminarimon": "3/31/Kaminarimon_-02.jpg",
    "tokyo-tower": "4/45/Tokyo_Tower_(53081687538).jpg",
    "tokyo-station": "8/81/Tokyo_station_Marunouchi_at_night.jpg",
    "meiji-jingu": "8/87/September_2024_Meiji_Jingu_16.jpg",
    "zojo-ji": "b/b5/Zojo-ji_Temple_(24353192714).jpg",
    "nezu-shrine": "2/2d/Nezu_shrine_2024_Sept_10_various_13_28_38_244000.jpeg",
    "kanda-myojin": "6/60/Kanda-myojin,_Chiyoda;_January_2014_(01).jpg",
    "hie-shrine": "1/14/Hie_Shrine_Festival_Mikoshi-2.jpg",
    "gotoku-ji": "8/85/Gotoku-ji_Temple_01.jpg",
    "ueno-toshogu": "a/a8/Ueno_Toshogu.JPG",
    "ghibli-museum": "4/44/Ghibli_Museum,_Mitaka,_Tokyo,_20240823_1131_5545.jpg",
    "nezu-museum": "4/4e/Nezu_Museum_Garten-20091020-RM-112901.jpg",
    "sumida-hokusai-museum": "1/10/2020_Sumida_Hokusai_Museum_01.jpg",
    "miraikan": "0/05/Miraikan_-_panoramio_(1).jpg",
    "rainbow-bridge": "9/9f/Lascar_Tokyo_skyline_-_Rainbow_bridge_and_Tokyo_tower_(from_the_Giant_Sky_Wheel)_(1299696620).jpg",
    "shinjuku-gyoen": "5/5a/Shinjuku_Gyoen_(3800911377).jpg",
    "ueno-park": "5/54/2019_Sakura_Festival_in_Ueno_Park.jpg",
    "hamarikyu-gardens": "b/bc/Hamarikyu_gardens_(46829190482).jpg",
    "koishikawa-korakuen": "0/0f/Koishikawa_Korakuen_-_early_autumn_-_Nov_12_2021_various_20_27_29_166000.jpeg",
    "yoyogi-park": "3/35/Yoyogi_Park,_Shibuya,_Japan_(Unsplash).jpg",
    "yanaka-ginza": "3/3d/Yanaka_Ginza_1.jpg",
    "takeshita-street": "5/51/Takeshita_Street_2017_(34124176381).jpg",
    "omotesando": "1/1c/Omotesando_-_panoramio_-_kcomiida_(11).jpg",
    "tokyo-ramen-street": "2/2c/Tokyo_Ramen_Street_dish.jpg",
    "kanda-matsuya": "d/db/Soba,_Kanda-Matsuya,_Kanda-sudachō_(そば,_神田まつや,_神田須田町)_(2011-07-11_19.54.14_by_yuiseki_aoba).jpg",
    "komagata-dozeu": "0/00/Komagata_Dozeu_-01.jpg",
    "narisawa": "f/fa/Narisawa_restaurant.jpg",
    "tsukiji-outer-market": "b/b6/Tsukiji_Outer_Market_-09.jpg",
    "ameyoko": "4/48/AMEYOKO_Street_in_New_Year's_Eve_-_panoramio.jpg",
    "cafe-de-l-ambre": "b/be/Blanc_et_Noir_at_CAFE_DE_L'AMBRE.jpg",
    "kayaba-coffee": "2/2a/Kayaba_Coffee_by_Sansakisaka_Street_in_Ueno_Sakuragi,_Taito,_Tokyo,_Japan,_2024_May_-_2.jpg",
    "toraya-akasaka": "d/d1/Toraya_Akasaka_-_Sept_19_2021_various.jpeg",
    "nagi-shokudo": "0/01/Nagi_Shokudo.jpg",
    "golden-gai": "d/d3/Golden_Gai,_Kabukicho,_Shinjuku_(44144554722).jpg",
    "kabukicho": "e/ea/Kabukicho_(137666955).jpeg",
    "nakajima-no-ochaya": "d/dc/Nakajima-no-ochaya-20091017-RM-141803.jpg",
    "nikko": "9/98/Nikko_-_Nikko7925.jpg",
    "kamakura": "5/57/Kamakura_-_Kamakura914.jpg",
    "kawagoe": "9/9f/Kawazu_Cherry_Blossoms_Kawagoe_Koedo_(202394431).jpeg",
    "naritasan-shinshoji": "f/fa/Naritasan-Shinshoji-Temple.Great-Main-Hall.jpg",
    "enoshima": "f/f9/Enoshima_-_Enoshima217.jpg",
    "okutama": "a/a2/Okutama_,_Tokyo_-_panoramio_(2).jpg",
    "chureito-pagoda": "e/e3/Chureito_Pagoda,_Fujiyoshida_(34099246612).jpg",
    "oshino-hakkai": "5/57/Oshino_Hakkai_-_Oshino6874.jpg",
    "yokohama-chinatown": "c/cd/Guandimiao_Temple_in_Yokohama_Chinatown_at_night.JPG",
    "tokyo-disneyland": "0/02/It's_a_Small_World,_Tokyo_Disneyland_(9407124751).jpg",
    "trunk-hotel": "b/ba/TRUNK(HOTEL)_CAT_STREET.jpg",
    "yodobashi-akiba": "0/05/Yodobashi_Akiba.jpg",
    "super-potato": "9/9e/Super_Potato_(12767876374).jpg",
    "muji-ginza": "7/7f/Mens_clothes_at_the_Muji_Ginza_store_November_2023.jpg",
    "kappabashi": "3/39/Kappabashi_Street_with_Tokyo_Skytree_in_Background,_Tokyo_130810_1.jpg",
    "uniqlo-ginza": "d/de/UNIQLO_Ginza.jpg",
    "omotesando-hills": "3/3c/Omotesando_Hills_-_panoramio_(2).jpg",
    "tokyo-dome": "c/c3/Baseball_match_at_Tokyo_Dome_(15226343891).jpg",
    "meiji-jingu-stadium": "3/35/Meiji_Jingu_Stadium_aerial_view.jpg",
    "japan-national-stadium": "e/ef/2024_April_7,_FC_Tokyo_wins_over_Kashima_Antlers,_at_the_Japan_National_Stadium_3.jpg",
    "ajinomoto-stadium": "0/0a/Ajinomoto_Stadium_-_Tokyo_derby.jpg",
    "ryogoku-kokugikan": "3/34/Ryogoku_Kokugikan_Dohyo_suspended_roof.jpg",
    "sumo-museum": "2/27/Sumo_arena_in_Sumo_Museum,_Japan;_March_2014.jpg",
    "nippon-budokan": "4/4b/190809_Nippon_Budokan_aerial.jpg",
    "ueno-zoo": "8/8b/上野動物公園,_Ueno_Zoo（Ueno_Zoological_Gardens）_-_panoramio_(31).jpg",
    "thermae-yu": "3/3f/Thermae-yu_Shinjuku.jpg",
    "daikokuyu": "f/f1/Daikokuyu_250217_2.jpg",
    "kabuki-za": "f/f5/Kabuki-za_Theatre_2010_0430.JPG",
    "taito-station-akihabara": "4/4a/Taito_Station_Akihabara.jpg",
    "tokyo-metropolitan-government-building": "b/b6/2_Chome-11_Nishishinjuku,_Shinjuku-ku,_Tōkyō-to_160-0023,_Japan_-_panoramio.jpg",
    "ichiran-shibuya": "2/27/Ichiran_Ramen,_Shibuya_store_-_B1F_Iwamoto_Bldg.,_1-22-7_Jin'nan,_Shibuya,_Tokyo_(2018-04-03_by_Ajay_Suresh).jpg",
    "tsunahachi": "e/e1/Tendon2.jpg",
    "daikokuya-tempura": "1/1e/Rue_à_Asakusa.jpg",
    "nodaiwa": "1/18/1_Chome_Higashiazabu,_Minato-ku,_Tōkyō-to_106-0044,_Japan_-_panoramio.jpg",
    "toyosu-senkyaku-banrai": "e/e0/Toyosu_Senkyaku_Banrai_1F_Festival_Plaza_2024.JPG",
    "nonbei-yokocho": "6/68/のんべい横丁IMG_20220929_185944_HDR.jpg",
    "tokyo-disneysea": "2/2a/Maihama,_Urayasu,_Chiba_Prefecture_279-0031,_Japan_-_panoramio_-_jetsun_(19).jpg",
    "hotel-niwa-tokyo": "2/26/Hotel_Niwa_Tokyo_1F_Lobby_20131028-001.jpg",
    "hoshinoya-tokyo": "a/af/星のや東京.jpg",
    "the-peninsula-tokyo": "d/d5/ザ・ペニンシュラ東京_-_panoramio.jpg",
    "isetan-shinjuku": "6/67/Isetan_(7024307079).jpg",
    "mega-don-quijote-shibuya": "7/7b/Shibuyamegadonkihonten.jpg",
    "tokyo-character-street": "b/b0/At_Tokyo_2024_291.jpg",
    "laforet-harajuku": "9/99/January_2024_Harajuku_4.jpg",
    "sumida-park": "8/85/Sumidagawa_River_and_Sumidagawa_Bridge_of_Tobu_Skytree_Line.JPG",
    "showa-kinen-park": "5/51/立川_2015-04_(17118580571).jpg",
    "legoland-discovery-center-tokyo": "b/bf/レゴランド・ディスカバリー・センター東京_(20253210684).jpg",
    "tokyo-joypolis": "4/4f/Joypolis,_Decks.jpg",
    "tokyo-dome-city-attractions": "a/a9/Kourakuen(後楽園)_-_panoramio.jpg",
  },

  /* Estaciones de metro por línea (los nombres de tokio.js), para "la estación más cercana" en cada ficha.
     Estaciones de OpenStreetMap (19/11/2026), según las relaciones de cada línea de Tokyo Metro, Toei y la Yamanote de JR. */
  stations: {
    "Ginza": [["Akasaka-mitsuke", 35.67630, 139.73745], ["Aoyama-itchome", 35.67264, 139.72395], ["Asakusa", 35.71084, 139.79784], ["Gaiemmae", 35.67052, 139.71784], ["Ginza", 35.67143, 139.76533], ["Inaricho", 35.71137, 139.78267], ["Kanda", 35.69374, 139.77094], ["Kyobashi", 35.67674, 139.77011], ["Mitsukoshimae", 35.68710, 139.77367], ["Nihombashi", 35.68205, 139.77345], ["Omote-sando", 35.66503, 139.71245], ["Shibuya", 35.65894, 139.70252], ["Shimbashi", 35.66715, 139.75885], ["Suehirocho", 35.70294, 139.77170], ["Tameike-sanno", 35.67150, 139.74193], ["Tawaramachi", 35.70987, 139.79076], ["Toranomon", 35.67012, 139.75000], ["Ueno", 35.71169, 139.77617], ["Ueno-hirokoji", 35.70783, 139.77301]],
    "Marunouchi": [["Akasaka-mitsuke", 35.67634, 139.73759], ["Awajicho", 35.69513, 139.76746], ["Ginza", 35.67289, 139.76309], ["Higashi-koenji", 35.69799, 139.65816], ["Honancho", 35.68347, 139.65765], ["Hongo-sanchome", 35.70649, 139.76010], ["Ikebukuro", 35.73008, 139.71173], ["Kasumigaseki", 35.67421, 139.75291], ["Kokkai-gijidomae", 35.67455, 139.74554], ["Korakuen", 35.70732, 139.75121], ["Minami-asagaya", 35.69942, 139.63572], ["Myogadani", 35.71718, 139.73692], ["Nakano-fujimicho", 35.69053, 139.66701], ["Nakano-sakaue", 35.69718, 139.68193], ["Nakano-shimbashi", 35.69200, 139.67378], ["Nishi-shinjuku", 35.69444, 139.69279], ["Ochanomizu", 35.70056, 139.76407], ["Ogikubo", 35.70432, 139.61999], ["Otemachi", 35.68679, 139.76620], ["Shin-koenji", 35.69789, 139.64869], ["Shin-nakano", 35.69748, 139.66864], ["Shin-otsuka", 35.72577, 139.72991], ["Shinjuku", 35.69230, 139.70058], ["Shinjuku-gyoemmae", 35.68859, 139.71074], ["Shinjuku-sanchome", 35.69125, 139.70413], ["Tokyo", 35.68205, 139.76489], ["Yotsuya", 35.68468, 139.72999], ["Yotsuya-sanchome", 35.68801, 139.72057]],
    "Hibiya": [["Akihabara", 35.69852, 139.77548], ["Ebisu", 35.64699, 139.70863], ["Ginza", 35.67211, 139.76394], ["Hatchobori", 35.67502, 139.77703], ["Hibiya", 35.67443, 139.76036], ["Higashi-Ginza", 35.66975, 139.76699], ["Hiro-o", 35.65208, 139.72218], ["Iriya", 35.72073, 139.78457], ["Kamiyacho", 35.66301, 139.74504], ["Kasumigaseki", 35.67389, 139.75100], ["Kayabacho", 35.67926, 139.77972], ["Kita-Senju", 35.74954, 139.80528], ["Kodemmacho", 35.69074, 139.77843], ["Minami-senju", 35.73234, 139.79877], ["Minowa", 35.72957, 139.79127], ["Naka-meguro", 35.64410, 139.69875], ["Naka-okachimachi", 35.70658, 139.77614], ["Ningyocho", 35.68616, 139.78241], ["Roppongi", 35.66286, 139.73132], ["Toranomon Hills", 35.66749, 139.74782], ["Tsukiji", 35.66810, 139.77258], ["Ueno", 35.71185, 139.77757]],
    "Tozai": [["Baraki-nakayama", 35.70316, 139.94161], ["Gyotoku", 35.68288, 139.91447], ["Iidabashi", 35.70172, 139.74601], ["Kagurazaka", 35.70389, 139.73422], ["Kasai", 35.66368, 139.87269], ["Kayabacho", 35.68030, 139.77943], ["Kiba", 35.66945, 139.80654], ["Kudanshita", 35.69596, 139.75129], ["Minami-gyotoku", 35.67274, 139.90226], ["Minami-sunamachi", 35.66839, 139.83187], ["Monzen-nakacho", 35.67231, 139.79508], ["Myoden", 35.69117, 139.92432], ["Nakano", 35.70581, 139.66554], ["Nihombashi", 35.68228, 139.77453], ["Nishi-Funabashi", 35.70731, 139.95889], ["Nishi-kasai", 35.66460, 139.85932], ["Ochiai", 35.71069, 139.68591], ["Otemachi", 35.68467, 139.76637], ["Takadanobaba", 35.71340, 139.70502], ["Takebashi", 35.69013, 139.75873], ["Toyocho", 35.66962, 139.81748], ["Urayasu", 35.66585, 139.89298], ["Waseda", 35.70581, 139.72129]],
    "Chiyoda": [["Akasaka", 35.67219, 139.73628], ["Ayase", 35.76218, 139.82488], ["Hibiya", 35.67378, 139.75831], ["Kasumigaseki", 35.67256, 139.75166], ["Kita-Senju", 35.74968, 139.80443], ["Kita-ayase", 35.77705, 139.83212], ["Kokkai-gijidomae", 35.67376, 139.74342], ["Machiya", 35.74218, 139.78008], ["Meiji-jingumae 'Harajuku'", 35.66900, 139.70438], ["Nezu", 35.71735, 139.76572], ["Nijubashimae 'Marunouchi'", 35.68034, 139.76162], ["Nishi-nippori", 35.73258, 139.76722], ["Nogizaka", 35.66673, 139.72629], ["Omote-sando", 35.66528, 139.71244], ["Otemachi", 35.68678, 139.76358], ["Sendagi", 35.72555, 139.76327], ["Shin-ochanomizu", 35.69721, 139.76549], ["Yoyogi-Uehara", 35.66903, 139.67977], ["Yoyogi-koen", 35.66907, 139.69012], ["Yushima", 35.70733, 139.76993]],
    "Yurakucho": [["Chikatetsu-akatsuka", 35.76997, 139.64417], ["Chikatetsu-narimasu", 35.77670, 139.63133], ["Edogawabashi", 35.70957, 139.73360], ["Ginza-itchome", 35.67438, 139.76706], ["Gokokuji", 35.71910, 139.72751], ["Heiwadai", 35.75769, 139.65425], ["Higashi-ikebukuro", 35.72570, 139.71959], ["Hikawadai", 35.74986, 139.66508], ["Ichigaya", 35.69236, 139.73678], ["Iidabashi", 35.70156, 139.74362], ["Ikebukuro", 35.72971, 139.70973], ["Kanamecho", 35.73328, 139.69872], ["Kojimachi", 35.68403, 139.73767], ["Kotake-mukaihara", 35.74298, 139.68070], ["Nagatacho", 35.67799, 139.74161], ["Sakuradamon", 35.67746, 139.75169], ["Senkawa", 35.73829, 139.68950], ["Shin-kiba", 35.64597, 139.82665], ["Shintomicho", 35.67065, 139.77343], ["Tatsumi", 35.64552, 139.81074], ["Toyosu", 35.65508, 139.79625], ["Tsukishima", 35.66457, 139.78477], ["Wakoshi", 35.78835, 139.61287], ["Yurakucho", 35.67602, 139.76215]],
    "Hanzomon": [["Aoyama-itchome", 35.67287, 139.72389], ["Hanzomon", 35.68524, 139.74154], ["Jimbocho", 35.69598, 139.75692], ["Kinshicho", 35.69635, 139.81495], ["Kiyosumi-shirakawa", 35.68212, 139.79924], ["Kudanshita", 35.69526, 139.75054], ["Mitsukoshimae", 35.68500, 139.77310], ["Nagatacho", 35.67841, 139.73863], ["Omote-sando", 35.66514, 139.71228], ["Oshiage", 35.70994, 139.81333], ["Otemachi", 35.68676, 139.76504], ["Shibuya", 35.65956, 139.70208], ["Suitengumae", 35.68257, 139.78567], ["Sumiyoshi", 35.68873, 139.81568]],
    "Namboku": [["Akabane-iwabuchi", 35.78339, 139.72191], ["Azabu-juban", 35.65518, 139.73707], ["Hon-komagome", 35.72475, 139.75364], ["Ichigaya", 35.69332, 139.73670], ["Iidabashi", 35.70152, 139.74366], ["Komagome", 35.73597, 139.74669], ["Korakuen", 35.70822, 139.75175], ["Meguro", 35.63249, 139.71568], ["Nagatacho", 35.67850, 139.73914], ["Nishigahara", 35.74602, 139.74212], ["Oji", 35.75394, 139.73745], ["Oji-kamiya", 35.76505, 139.73570], ["Roppongi-itchome", 35.66496, 139.73894], ["Shimo", 35.77788, 139.73248], ["Shirokane-takanawa", 35.64295, 139.73412], ["Shirokanedai", 35.63812, 139.72656], ["Tameike-sanno", 35.67301, 139.74134], ["Todaimae", 35.71731, 139.75813], ["Yotsuya", 35.68558, 139.72942]],
    "Fukutoshin": [["Chikatetsu-akatsuka", 35.76997, 139.64417], ["Chikatetsu-narimasu", 35.77670, 139.63133], ["Heiwadai", 35.75769, 139.65425], ["Higashi-shinjuku", 35.69894, 139.70773], ["Hikawadai", 35.74986, 139.66508], ["Ikebukuro", 35.73122, 139.70900], ["Kanamecho", 35.73328, 139.69871], ["Kita-sando", 35.67848, 139.70550], ["Kotake-mukaihara", 35.74288, 139.68063], ["Meiji-jingumae 'Harajuku'", 35.66840, 139.70539], ["Nishi-waseda", 35.70792, 139.70906], ["Senkawa", 35.73829, 139.68950], ["Shibuya", 35.65862, 139.70275], ["Shinjuku-sanchome", 35.69071, 139.70483], ["Wakoshi", 35.78835, 139.61287], ["Zoshigaya", 35.72017, 139.71474]],
    "Asakusa": [["Asakusa", 35.70898, 139.79656], ["Asakusabashi", 35.69741, 139.78625], ["Daimon", 35.65693, 139.75469], ["Gotanda", 35.62714, 139.72417], ["Higashi-Ginza", 35.66989, 139.76716], ["Higashi-nihombashi", 35.69213, 139.78486], ["Honjo-azumabashi", 35.70858, 139.80435], ["Kuramae", 35.70324, 139.79094], ["Magome", 35.59681, 139.71187], ["Mita", 35.64716, 139.74760], ["Nakanobu", 35.60527, 139.71359], ["Nihombashi", 35.68190, 139.77583], ["Ningyocho", 35.68632, 139.78216], ["Nishi-magome", 35.58732, 139.70629], ["Oshiage", 35.71063, 139.81275], ["Sengakuji", 35.63868, 139.73998], ["Shimbashi", 35.66542, 139.75937], ["Takanawadai", 35.63181, 139.73033], ["Takaracho", 35.67544, 139.77187], ["Togoshi", 35.61454, 139.71630]],
    "Mita": [["Hakusan", 35.72152, 139.75213], ["Hasune", 35.78417, 139.67898], ["Hibiya", 35.67629, 139.76013], ["Itabashi-kuyakushomae", 35.75134, 139.71002], ["Itabashihoncho", 35.76143, 139.70550], ["Jimbocho", 35.69499, 139.75825], ["Kasuga", 35.70991, 139.75315], ["Meguro", 35.63249, 139.71568], ["Mita", 35.64808, 139.74858], ["Motohasunuma", 35.76851, 139.70243], ["Nishi-sugamo", 35.74353, 139.72866], ["Nishi-takashimadaira", 35.79190, 139.64576], ["Nishidai", 35.78695, 139.67401], ["Onarimon", 35.66083, 139.75129], ["Otemachi", 35.68397, 139.76267], ["Sengoku", 35.72768, 139.74495], ["Shibakoen", 35.65423, 139.74987], ["Shimura-sakaue", 35.77567, 139.69548], ["Shimura-sanchome", 35.77749, 139.68599], ["Shin-itabashi", 35.74874, 139.72000], ["Shin-takashimadaira", 35.79021, 139.65434], ["Shirokane-takanawa", 35.64297, 139.73401], ["Shirokanedai", 35.63812, 139.72656], ["Sugamo", 35.73374, 139.73818], ["Suidobashi", 35.70352, 139.75511], ["Takashimadaira", 35.78881, 139.66127], ["Uchisaiwaicho", 35.66949, 139.75530]],
    "Shinjuku": [["Akebonobashi", 35.69239, 139.72286], ["Bakuroyokoyama", 35.69210, 139.78279], ["Funabori", 35.68381, 139.86430], ["Hamacho", 35.68843, 139.78813], ["Higashi-ojima", 35.69027, 139.84595], ["Ichigaya", 35.69152, 139.73765], ["Ichinoe", 35.68599, 139.88312], ["Iwamotocho", 35.69547, 139.77538], ["Jimbocho", 35.69595, 139.75839], ["Kikukawa", 35.68836, 139.80613], ["Kudanshita", 35.69535, 139.75036], ["Mizue", 35.69323, 139.89771], ["Morishita", 35.68794, 139.79705], ["Motoyawata", 35.72374, 139.92713], ["Nishi-ojima", 35.68931, 139.82664], ["Ogawamachi", 35.69490, 139.76635], ["Ojima", 35.68969, 139.83510], ["Shinjuku-sanchome", 35.69056, 139.70631], ["Shinozaki", 35.70605, 139.90388], ["Shinsen-Shinjuku", 35.68855, 139.69920], ["Sumiyoshi", 35.68901, 139.81605]],
    "Oedo": [["Akabanebashi", 35.65508, 139.74390], ["Aoyama-itchome", 35.67278, 139.72412], ["Azabu-juban", 35.65655, 139.73618], ["Daimon", 35.65679, 139.75537], ["Higashi-nakano", 35.70733, 139.68327], ["Higashi-shinjuku", 35.69785, 139.70754], ["Hikarigaoka", 35.75860, 139.62937], ["Hongo-sanchome", 35.70749, 139.76055], ["Iidabashi", 35.70309, 139.74576], ["Kachidoki", 35.65901, 139.77711], ["Kasuga", 35.70848, 139.75275], ["Kiyosumi-shirakawa", 35.68254, 139.79863], ["Kokuritsu-kyogijo", 35.68015, 139.71396], ["Kuramae", 35.70548, 139.79239], ["Monzen-nakacho", 35.67264, 139.79493], ["Morishita", 35.68806, 139.79818], ["Nakai", 35.71404, 139.68639], ["Nakano-sakaue", 35.69728, 139.68299], ["Nerima", 35.73739, 139.65448], ["Nerima-kasugacho", 35.75144, 139.64040], ["Nishi-shinjuku-gochome", 35.69003, 139.68476], ["Ochiai-minami-nagasaki", 35.72325, 139.68363], ["Roppongi", 35.66361, 139.73198], ["Ryogoku", 35.69685, 139.79737], ["Shin-egota", 35.73264, 139.67044], ["Shin-okachimachi", 35.70701, 139.78189], ["Shinjuku", 35.68822, 139.69918], ["Shinjuku-nishiguchi", 35.69314, 139.69925], ["Shiodome", 35.66327, 139.76021], ["Tochomae", 35.69072, 139.69277], ["Toshimaen", 35.74217, 139.64913], ["Tsukijishijo", 35.66492, 139.76691], ["Tsukishima", 35.66420, 139.78444], ["Ueno-okachimachi", 35.70794, 139.77325], ["Ushigome-kagurazaka", 35.70088, 139.73598], ["Ushigome-yanagicho", 35.69942, 139.72557], ["Wakamatsu-kawada", 35.69926, 139.71842], ["Yoyogi", 35.68359, 139.70164]],
    "Yamanote (JR)": [["Akihabara", 35.69836, 139.77306], ["Ebisu", 35.64640, 139.71010], ["Gotanda", 35.62622, 139.72356], ["Hamamatsucho", 35.65511, 139.75708], ["Harajuku", 35.67022, 139.70237], ["Ikebukuro", 35.73026, 139.71095], ["Kanda", 35.69177, 139.77101], ["Komagome", 35.73662, 139.74722], ["Meguro", 35.63406, 139.71567], ["Mejiro", 35.72121, 139.70641], ["Nippori", 35.72799, 139.77043], ["Nishi-Nippori", 35.73222, 139.76670], ["Okachimachi", 35.70695, 139.77465], ["Osaki", 35.61947, 139.72866], ["Otsuka", 35.73173, 139.72861], ["Shibuya", 35.65802, 139.70159], ["Shimbashi", 35.66616, 139.75814], ["Shin-Okubo", 35.70130, 139.70019], ["Shinagawa", 35.62865, 139.73851], ["Shinjuku", 35.68896, 139.70029], ["Sugamo", 35.73346, 139.73940], ["Tabata", 35.73738, 139.76172], ["Takadanobaba", 35.71270, 139.70359], ["Takanawa Gateway", 35.63541, 139.74064], ["Tamachi", 35.64572, 139.74770], ["Tokyo", 35.68124, 139.76661], ["Ueno", 35.71358, 139.77614], ["Uguisudani", 35.72171, 139.77793], ["Yoyogi", 35.68394, 139.70199], ["Yurakucho", 35.67494, 139.76306]]
  }
};
