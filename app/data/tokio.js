/* Datos de la ciudad: Tokio (tarjeta #216).
   Tiene la estructura y toda la información de "Info". Los lugares están en data/tokio-lugares.js.
   price: 0 = gratis, 1 = $, 2 = $$, 3 = $$$, 4 = $$$$, null = no aplica.

   De dónde salen los datos (revisados el 19/11/2026; detalle en docs/fuentes-tokio.md):
   tokyometro.jp (Tokyo Subway Ticket y pago con tarjeta del banco), jreast.co.jp (Suica y Welcome Suica), keisei.co.jp (Skyliner),
   japan.travel (línea de ayuda para turistas y teléfonos útiles), keishicho.metro.tokyo.lg.jp (policía), tfd.metro.tokyo.lg.jp (#7119)
   y mlit.go.jp (reintegro del impuesto desde el 1/11/2026). Sin precios ni horarios exactos: cambian seguido. */
window.CITY_DATA = window.CITY_DATA || {};
window.CITY_DATA.tokio = {
  id: "tokio",
  name: "Tokio",
  fullName: "Tokio",
  country: "Japón",
  tz: "Asia/Tokyo",
  currency: "JPY",
  tagline: "Todo lo que necesitás para recorrer la ciudad",
  updated: "Noviembre 2026",

  categories: [
    { id: "ver", name: "Imperdibles", icon: "⛩️", color: "#c8402f", desc: "Templos, santuarios, miradores, museos y jardines" },
    { id: "comer", name: "Dónde comer", icon: "🍜", color: "#d1552f", desc: "Ramen, sushi, izakayas, mercados y dulces" },
    { id: "noche", name: "Noche", icon: "🏮", color: "#8a4fd1", desc: "Yokocho, bares de cócteles, jazz y clubes" },
    { id: "tours", name: "Tours y experiencias", icon: "🧭", color: "#1f9d8a", desc: "Barcos, comida, kimono y ceremonia del té" },
    { id: "escapadas", name: "Excursiones", icon: "🚄", color: "#3a9a3f", desc: "Monte Fuji, Nikko, Kamakura y Hakone" },
    { id: "dormir", name: "Hospedaje", icon: "🛏️", color: "#c58a12", desc: "Hostels, cápsulas, ryokan y hoteles" },
    { id: "compras", name: "Compras", icon: "🛍️", color: "#d13f7a", desc: "Animé, tecnología, diseño y grandes tiendas" },
    { id: "deporte", name: "Deportes", icon: "🥋", color: "#0b7285", desc: "Sumo, béisbol, judo y parques" },
    { id: "ocio", name: "Entretenimiento", icon: "🎮", color: "#e8590c", desc: "Onsen, kabuki, karaoke y planes con chicos" }
  ],

  /* Los lugares están en data/tokio-lugares.js. */
  places: [],

  barrios: [
    { name: "Asakusa y Sumida", vibe: "El Tokio de antes", desc: "El templo Senso-ji, la calle Nakamise, casas de comida de siempre y, del otro lado del río, la Tokyo Skytree y Ryogoku, el barrio del sumo.", stay: "Tranquilo de noche y con muchos ryokan; un poco lejos de Shibuya y Shinjuku." },
    { name: "Ueno y Yanaka", vibe: "Museos y callecitas", desc: "El parque de Ueno con sus museos y el zoológico, el mercado Ameyoko y, al lado, Yanaka, un barrio de templos y casas de madera que sobrevivió a la guerra.", stay: "Bien conectado con el aeropuerto de Narita (Skyliner)." },
    { name: "Akihabara y Kanda", vibe: "Animé y electrónica", desc: "La ciudad eléctrica, con tiendas de animé, videojuegos y electrónica; Kanda, con casas de soba centenarias; y Jimbocho, el barrio de las librerías.", stay: "Práctico y céntrico, en la línea Yamanote." },
    { name: "Marunouchi y Nihonbashi", vibe: "El centro y el palacio", desc: "La estación de Tokio, los rascacielos de oficinas, el Palacio Imperial y sus jardines, y Nihonbashi, el viejo kilómetro cero.", stay: "Ideal para tomar trenes bala; tranquilo los fines de semana." },
    { name: "Ginza y Tsukiji", vibe: "Elegancia y mercado", desc: "Ginza, con las grandes tiendas, el kabuki y los mejores bares de cócteles; y Tsukiji, con su mercado de comida.", stay: "Céntrico y elegante." },
    { name: "Shinjuku", vibe: "Neón y rascacielos", desc: "La estación más transitada del mundo, Kabukicho con sus luces, Golden Gai, Omoide Yokocho, el mirador del gobierno y el parque Shinjuku Gyoen.", stay: "La mejor base: conexiones para todo y noche hasta tarde." },
    { name: "Shibuya", vibe: "El cruce y la juventud", desc: "El cruce más famoso del mundo, Hachiko, el Shibuya Sky, tiendas, bares y clubes.", stay: "Mucho movimiento, ideal para salir." },
    { name: "Harajuku y Omotesando", vibe: "Moda y santuario", desc: "Takeshita Street y la moda juvenil, la avenida Omotesando con sus edificios de diseño, y el Meiji Jingu en medio del bosque.", stay: "Lindo para pasear; menos hoteles." },
    { name: "Roppongi y Azabu", vibe: "Arte y noche internacional", desc: "Roppongi Hills, Tokyo Midtown, teamLab Borderless, la Tokyo Tower, y la noche más internacional de la ciudad.", stay: "Hoteles de lujo; de noche, atención con los promotores de la calle." },
    { name: "Odaiba y la bahía", vibe: "Futuro sobre el agua", desc: "Islas artificiales con el Rainbow Bridge, el Gundam gigante, teamLab Planets, el mercado de Toyosu y museos de ciencia.", stay: "Para visitar; queda a trasmano del resto." },
    { name: "Ikebukuro", vibe: "Animé y centros comerciales", desc: "Sunshine City con su acuario y el Pokémon Center, y tiendas de animé y manga.", stay: "Hoteles más baratos y bien conectados." },
    { name: "Ebisu, Meguro y Shimokitazawa", vibe: "Barrios con onda", desc: "Ebisu y sus barcitos, el canal de Nakameguro con cerezos, la elegante Daikanyama y la bohemia Shimokitazawa.", stay: "Más tranquilos y con mucha vida local." }
  ],

  /* Planes armados. Cada paso nombra un lugar de data/tokio-lugares.js ("ref" = nombre exacto). */
  itineraries: [
    { id: "1-dia", name: "Tokio en 1 día", icon: "⚡", desc: "Lo esencial si tenés solo una jornada.", steps: [
      { when: "Mañana", ref: "Senso-ji", note: "Llegá temprano, antes de la multitud." },
      { when: "Mañana", ref: "Nakamise-dori" },
      { when: "Mediodía", ref: "Tsukiji Outer Market" },
      { when: "Tarde", ref: "Meiji Jingu" },
      { when: "Tarde", ref: "Takeshita Street" },
      { when: "Atardecer", ref: "Shibuya Sky", note: "Comprá la entrada antes." },
      { when: "Noche", ref: "Shibuya Crossing" },
      { when: "Noche", ref: "Omoide Yokocho", note: "Yakitori bajo las vías." }
    ] },
    { id: "3-dias", name: "3 días clásicos", icon: "🗓️", desc: "El recorrido completo para una primera visita.", steps: [
      { when: "Día 1 · mañana", ref: "Senso-ji" },
      { when: "Día 1 · mediodía", ref: "Daikokuya Tempura" },
      { when: "Día 1 · tarde", ref: "Crucero por el río Sumida", note: "Bajá en los jardines Hamarikyu." },
      { when: "Día 1 · tarde", ref: "Hamarikyu Gardens" },
      { when: "Día 1 · noche", ref: "Tokyo Skytree" },
      { when: "Día 2 · mañana", ref: "Meiji Jingu" },
      { when: "Día 2 · mañana", ref: "Takeshita Street" },
      { when: "Día 2 · mediodía", ref: "Omotesando" },
      { when: "Día 2 · tarde", ref: "Shibuya Crossing" },
      { when: "Día 2 · noche", ref: "Golden Gai" },
      { when: "Día 3 · mañana", ref: "Tsukiji Outer Market" },
      { when: "Día 3 · tarde", ref: "teamLab Planets", note: "Entrada con día y hora." },
      { when: "Día 3 · atardecer", ref: "Unicorn Gundam" },
      { when: "Día 3 · noche", ref: "Akihabara" }
    ] },
    { id: "lluvia", name: "Día de lluvia", icon: "🌧️", desc: "Todo bajo techo.", steps: [
      { when: "Mañana", ref: "Tokyo National Museum" },
      { when: "Mediodía", ref: "Tokyo Ramen Street" },
      { when: "Tarde", ref: "teamLab Borderless" },
      { when: "Tarde", ref: "Isetan Shinjuku", note: "El subsuelo de comida." },
      { when: "Noche", ref: "Thermae-Yu", note: "Un baño termal para cerrar el día." }
    ] },
    { id: "gratis", name: "Tokio gratis", icon: "💸", desc: "Lo mejor sin gastar en entradas.", steps: [
      { when: "Mañana", ref: "Palacio Imperial", note: "Los Jardines del Este." },
      { when: "Mañana", ref: "Senso-ji" },
      { when: "Mediodía", ref: "Yanaka Ginza" },
      { when: "Tarde", ref: "Meiji Jingu" },
      { when: "Tarde", ref: "Yoyogi Park" },
      { when: "Atardecer", ref: "Tokyo Metropolitan Government Building", note: "El mirador gratis del piso 45." }
    ] },
    { id: "chicos", name: "Con chicos", icon: "🧒", desc: "Un día pensado para chicos.", steps: [
      { when: "Mañana", ref: "Miraikan" },
      { when: "Mediodía", ref: "Unicorn Gundam" },
      { when: "Tarde", ref: "teamLab Planets" },
      { when: "Tarde", ref: "Pokémon Center Mega Tokyo" },
      { when: "Noche", ref: "Sunshine Aquarium" }
    ] }
  ],

  /* ───────────── TRANSPORTE ───────────── */
  /* Las 13 líneas de metro (Tokyo Metro y Toei) y la Yamanote de JR, la línea circular que más usan los turistas. */
  subte: [
    { line: "Ginza", color: "#ff9500", route: "Shibuya – Asakusa", useful: "Omotesando, Ginza, Nihonbashi, Ueno y Asakusa (Senso-ji)" },
    { line: "Marunouchi", color: "#f62e36", route: "Ogikubo – Ikebukuro", useful: "Shinjuku, la estación de Tokio, Ginza, Korakuen (Tokyo Dome) e Ikebukuro" },
    { line: "Hibiya", color: "#9c9c94", route: "Naka-meguro – Kita-senju", useful: "Nakameguro, Ebisu, Roppongi, Ginza, Tsukiji, Akihabara y Ueno" },
    { line: "Tozai", color: "#009bbf", route: "Nakano – Nishi-funabashi", useful: "Kagurazaka, Otemachi, Nihonbashi y Monzen-nakacho" },
    { line: "Chiyoda", color: "#00bb85", route: "Yoyogi-uehara – Kita-ayase", useful: "Meiji-jingumae (Harajuku), Omotesando, Nijubashimae (Palacio Imperial), Nezu y Sendagi (Yanaka)" },
    { line: "Yurakucho", color: "#c1a470", route: "Wakoshi – Shin-kiba", useful: "Ikebukuro, Yurakucho, Ginza y Toyosu (teamLab Planets y el mercado)" },
    { line: "Hanzomon", color: "#8f76d6", route: "Shibuya – Oshiage", useful: "Shibuya, Omotesando, Jimbocho, Kiyosumi-shirakawa y Oshiage (Tokyo Skytree)" },
    { line: "Namboku", color: "#00ac9b", route: "Meguro – Akabane-iwabuchi", useful: "Roppongi-itchome, Korakuen (Tokyo Dome) y Komagome (Rikugien)" },
    { line: "Fukutoshin", color: "#9c5e31", route: "Wakoshi – Shibuya", useful: "Ikebukuro, Shinjuku-sanchome, Meiji-jingumae (Harajuku) y Shibuya" },
    { line: "Asakusa", color: "#e85298", route: "Nishi-magome – Oshiage", useful: "Asakusa, Nihonbashi y Higashi-ginza; algunos trenes siguen directo a los aeropuertos de Haneda y Narita" },
    { line: "Mita", color: "#0079c2", route: "Meguro – Nishi-takashimadaira", useful: "Shibakoen (Tokyo Tower), Jimbocho y Kasuga" },
    { line: "Shinjuku", color: "#6cbb5a", route: "Shinjuku – Motoyawata", useful: "Shinjuku, Jimbocho y Bakuro-yokoyama" },
    { line: "Oedo", color: "#b6007a", route: "Tochomae – Hikarigaoka (en forma de 6)", useful: "Tochomae (mirador del gobierno), Roppongi, Azabu-juban, Tsukijishijo (mercado), Ryogoku (sumo) y Ueno-okachimachi" },
    { line: "Yamanote (JR)", color: "#80c241", route: "Circular", useful: "La vuelta a la ciudad: Tokio, Akihabara, Ueno, Ikebukuro, Shinjuku, Harajuku, Shibuya, Ebisu y Shinagawa" }
  ],
  transport: [
    /* Revisado el 19/11/2026 con tokyometro.jp, jreast.co.jp y keisei.co.jp. */
    { icon: "💳", title: "Cómo pagar: lo primero", items: [
      { t: "Suica o PASMO", d: "Las tarjetas recargables de Tokio: sirven en el metro, los trenes de JR, los colectivos y hasta en los kioscos (konbini) y las máquinas expendedoras. La Suica común se compra en las máquinas de las estaciones de JR, con un depósito que te devuelven al entregarla." },
      { t: "Welcome Suica", d: "Una Suica para turistas, sin depósito, que sirve 28 días desde que la comprás. También existe la app Welcome Suica Mobile para el celular." },
      { t: "En el celular", d: "En el iPhone se puede agregar una Suica o una PASMO a Apple Wallet y cargarla con tu tarjeta. Muchos celulares Android comprados fuera de Japón no son compatibles." },
      { t: "Con la tarjeta del banco", d: "En todas las líneas de Tokyo Metro y en el Toei se puede pasar el molinete apoyando una tarjeta de crédito o débito sin contacto (o el celular con la tarjeta cargada). Paga el boleto común. No sirve en los trenes de JR, como la Yamanote: para esos, Suica o PASMO." },
      { t: "Tokyo Subway Ticket", d: "Un pase de 24, 48 o 72 horas para todas las líneas de Tokyo Metro y Toei, solo para turistas de otros países (y de otras regiones de Japón). No incluye los trenes de JR." },
      { t: "Última revisión", d: "19 de noviembre de 2026, con las webs oficiales de Tokyo Metro, JR East y Keisei. Si algo no coincide, valen los carteles del transporte." }
    ] },
    { icon: "🚇", title: "Metro de Tokio", items: [
      { t: "Dos empresas, un mapa", d: "Hay 13 líneas de metro: 9 de Tokyo Metro y 4 de Toei. Cada línea tiene un color y una letra, y cada estación un número (por ejemplo G-16): así es fácil no perderse." },
      { t: "La Yamanote", d: "La línea circular de JR, verde claro, une los barrios más visitados: Tokio, Akihabara, Ueno, Ikebukuro, Shinjuku, Harajuku y Shibuya." },
      { t: "Combinaciones", d: "Algunas estaciones, como Shinjuku, Tokio o Shibuya, son enormes: seguí los carteles con el color de la línea y el número de salida." },
      { t: "Horas pico", d: "A la mañana temprano y a la salida del trabajo, los trenes van llenísimos. Si podés, evitá esas horas con valijas." },
      { t: "Último tren", d: "El metro no anda toda la noche. Si salís tarde, fijate cuándo pasa el último tren o volvé en taxi." }
    ] },
    { icon: "🚄", title: "Trenes bala y JR", items: [
      { t: "Shinkansen", d: "Los trenes bala salen de las estaciones de Tokio, Shinagawa y Ueno. Se pagan aparte de la Suica: comprá el pasaje en las máquinas o la boletería de JR, o por la web." },
      { t: "Japan Rail Pass", d: "El pase de trenes de JR para todo Japón. Conviene solo si hacés viajes largos, por ejemplo Tokio, Kioto y Osaka en pocos días: hacé la cuenta antes." },
      { t: "Con la Suica", d: "Para trenes comunes de JR alrededor de Tokio (Yokohama, Kamakura, Nikko con combinaciones) alcanza con la Suica." }
    ] },
    { icon: "✈️", title: "Aeropuertos", items: [
      { t: "Haneda (HND)", d: "El más cerca del centro. Se llega con el tren Keikyu (hasta Shinagawa, y algunos siguen por la línea Asakusa) o con el Tokyo Monorail (hasta Hamamatsucho). Los dos aceptan Suica." },
      { t: "Narita (NRT)", d: "Más lejos, a más de una hora. El Keisei Skyliner va rápido hasta Ueno y Nippori; el Narita Express de JR, hasta Tokio, Shinagawa, Shibuya y Shinjuku." },
      { t: "Micros", d: "Hay micros del aeropuerto (Airport Limousine) a las estaciones y grandes hoteles: cómodos con valijas." },
      { t: "Envío de valijas", d: "Desde el aeropuerto y los hoteles podés mandar las valijas a tu próximo hotel con servicios de envío (takkyubin): muy útil para viajar en tren sin cargar." }
    ] },
    { icon: "🚕", title: "Taxis y apps", items: [
      { t: "Taxis", d: "Son limpios y seguros, y funcionan con reloj. La puerta de atrás se abre y se cierra sola: no la toques." },
      { t: "Apps", d: "Con GO o Uber pedís taxis desde el celular, con el destino escrito: así no hace falta explicarlo." },
      { t: "De noche", d: "Después del último tren los taxis son la única opción y tienen recargo nocturno." }
    ] },
    { icon: "🚲", title: "A pie y en bici", items: [
      { t: "Caminar", d: "Tokio es enorme pero muy caminable dentro de cada barrio. Llevá calzado cómodo: se camina mucho dentro de las estaciones." },
      { t: "Escaleras mecánicas", d: "En Tokio la gente se para a la izquierda y deja libre la derecha." },
      { t: "Bicis", d: "Hay bicis de alquiler por app en toda la ciudad. Se maneja por la izquierda, como los autos." }
    ] }
  ],

  /* ───────────── SEGURIDAD ───────────── */
  emergencies: [
    { n: "110", t: "Policía" },
    { n: "119", t: "Ambulancia y bomberos" },
    { n: "050-3816-2787", t: "Japan Visitor Hotline: ayuda para turistas en inglés, chino y coreano, todo el día" },
    { n: "#7119", t: "Consulta de emergencias médicas de Tokio: si no sabés si ir al hospital (en japonés)" },
    { n: "03-3503-8484", t: "Policía: información general en inglés y otros idiomas" },
    { n: "03-6233-9266", t: "AMDA: información médica en varios idiomas" }
  ],
  safety: [
    { icon: "✅", title: "Una de las ciudades más seguras", tone: "ok", items: [
      "Tokio es de las grandes ciudades más seguras del mundo: se camina tranquilo de noche y es raro que roben.",
      "Si perdés algo, muchas veces aparece: preguntá en la estación o en el koban, el puestito de policía de cada barrio.",
      "Igual, cuidá tus cosas en los lugares con mucha gente, como en cualquier lado."
    ] },
    { icon: "🍸", title: "Bares y promotores", tone: "warn", items: [
      "En Kabukicho (Shinjuku) y Roppongi hay promotores en la calle que te invitan a bares: no los sigas. Hay casos de cuentas enormes y bebidas adulteradas.",
      "Elegí bares que conozcas o con buenas reseñas, y mirá los precios antes de pedir.",
      "Muchos bares chicos cobran una entrada o una tapita obligatoria (\"otoshi\"): es normal, no es estafa."
    ] },
    { icon: "🌏", title: "Terremotos y tifones", tone: "warn", items: [
      "En Japón hay temblores seguido. Si tiembla, alejate de vidrios, protegé la cabeza y seguí las indicaciones del personal.",
      "Bajá la app Safety tips de la agencia de turismo de Japón: avisa de terremotos y alertas en varios idiomas.",
      "De agosto a octubre puede haber tifones: si anuncian uno, se pueden suspender trenes y vuelos."
    ] },
    { icon: "📄", title: "Documentos y ayuda", tone: "ok", items: [
      "Llevá el pasaporte encima: la policía lo puede pedir y lo piden en muchos hoteles y clubes.",
      "Si te roban o perdés el pasaporte, hacé la denuncia en un koban y después andá a tu consulado: en Info > Ayuda están en el mapa.",
      "Contratá un seguro de viaje: la atención médica sin seguro es cara."
    ] }
  ],

  /* ───────────── INFO PRÁCTICA ───────────── */
  practical: [
    { icon: "💴", title: "Dinero y pagos", items: [
      { t: "Moneda", d: "Yen (JPY). No tiene centavos." },
      { t: "Tarjetas y efectivo", d: "Las tarjetas se aceptan cada vez más, pero muchos restaurantes chicos, templos y puestos solo aceptan efectivo: llevá siempre algo." },
      { t: "Cajeros", d: "Los cajeros de los kioscos 7-Eleven y del correo (Japan Post) aceptan tarjetas extranjeras. Muchos de bancos japoneses, no." },
      { t: "Propina", d: "En Japón no se deja propina: puede incomodar." },
      { t: "Compras sin impuesto", d: "Desde el 1 de noviembre de 2026, los turistas pagan las compras con impuesto y se lo devuelven después, cuando muestran el pasaporte y lo comprado en la aduana del aeropuerto al irse del país. Llevá todo en el equipaje de mano y llegá con tiempo." }
    ] },
    { icon: "🕘", title: "Horarios de Tokio", items: [
      { t: "Comidas", d: "Se almuerza y se cena temprano. Muchos restaurantes cierran la cocina antes de lo que esperás." },
      { t: "Comercios", d: "Los negocios abren todos los días, también domingos, y los kioscos (konbini) no cierran nunca." },
      { t: "Museos", d: "Muchos museos cierran los lunes (o el martes, si el lunes es feriado)." }
    ] },
    { icon: "🌸", title: "Clima y cuándo venir", items: [
      { t: "Primavera", d: "Fines de marzo y principios de abril es la época de los cerezos: la más linda y la más llena." },
      { t: "Verano", d: "Muy caluroso y húmedo. En junio y julio está la temporada de lluvias, y de agosto a octubre puede haber tifones." },
      { t: "Otoño", d: "Noviembre es ideal: templado, seco y con los árboles rojos y amarillos." },
      { t: "Invierno", d: "Frío pero seco y con sol. Es cuando mejor se ve el monte Fuji." }
    ] },
    { icon: "🔌", title: "Datos útiles", items: [
      { t: "Electricidad", d: "100 V. Enchufes tipo A, de dos patas planas: si venís de la Argentina, llevá adaptador. Fijate que tus cargadores acepten 100 V." },
      { t: "Agua", d: "El agua de la canilla es potable." },
      { t: "Internet", d: "Lo más fácil es una eSIM antes de viajar. También hay chips y routers wifi de bolsillo para alquilar en el aeropuerto." },
      { t: "Idioma", d: "Se habla japonés. Los carteles del transporte están en inglés, pero mucha gente no lo habla: el traductor del celular ayuda mucho." },
      { t: "Basura", d: "Casi no hay tachos en la calle: llevá una bolsita y tirá la basura en el hotel o en los tachos de los konbini." }
    ] },
    { icon: "🙇", title: "Costumbres", items: [
      { t: "Zapatos", d: "En casas, ryokan, algunos restaurantes y templos te sacás los zapatos. Llevá medias sin agujeros." },
      { t: "En el tren", d: "No se habla por teléfono y se habla bajito. Tampoco se come en los trenes comunes." },
      { t: "Onsen", d: "En los baños termales se entra desnudo, después de ducharse. Muchos no dejan entrar con tatuajes: preguntá antes." },
      { t: "Saludo", d: "Una pequeña reverencia y un \"arigato\" (gracias) se agradecen mucho." },
      { t: "Para probar", d: "Ramen, sushi, tempura, tonkatsu, yakitori, onigiri del konbini, dulces de poroto rojo, té matcha y sake." }
    ] }
  ]
};
