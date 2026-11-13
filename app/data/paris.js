/* Datos de la ciudad: París (tarjeta #102, etapa 1 de la expansión).
   Tiene la estructura y toda la información de "Info". Los lugares se cargan en la etapa 2 (data/paris-lugares.js).
   price: 0 = gratis, 1 = $, 2 = $$, 3 = $$$, 4 = $$$$, null = no aplica.

   De dónde salen los datos (revisados el 13/11/2026):
   iledefrance-mobilites.fr (boletos y pases), parisaeroport.fr (cómo llegar desde los aeropuertos CDG y Orly),
   aeroportparisbeauvais.com (aeropuerto de Beauvais), service-public.gouv.fr (números de emergencia).
   Sin precios ni horarios exactos: cambian seguido. */
window.CITY_DATA = window.CITY_DATA || {};
window.CITY_DATA.paris = {
  id: "paris",
  name: "París",
  fullName: "París",
  country: "Francia",
  tz: "Europe/Paris",
  currency: "EUR",
  tagline: "Todo lo que necesitás para recorrer la ciudad",
  updated: "Noviembre 2026",

  categories: [
    { id: "ver", name: "Imperdibles", icon: "🏛️", color: "#2f7fd1", desc: "Monumentos, museos y paseos" },
    { id: "comer", name: "Dónde comer", icon: "🍽️", color: "#d1552f", desc: "Bistrós, panaderías, cocina francesa y del mundo" },
    { id: "noche", name: "Noche", icon: "🍸", color: "#8a4fd1", desc: "Bares, cabarets, jazz y clubes" },
    { id: "tours", name: "Tours y guías", icon: "🧭", color: "#1f9d8a", desc: "Visitas guiadas, paseos en barco y experiencias" },
    { id: "escapadas", name: "Excursiones", icon: "🚆", color: "#3a9a3f", desc: "Escapadas de un día" },
    { id: "dormir", name: "Hospedaje", icon: "🛏️", color: "#c58a12", desc: "Hostels, hoteles y dónde alojarse" },
    { id: "compras", name: "Compras y mercados", icon: "🛍️", color: "#d13f7a", desc: "Mercados, grandes tiendas y pulgas" },
    { id: "deporte", name: "Deportes", icon: "⚽", color: "#0b7285", desc: "Estadios, parques y aire libre" },
    { id: "ocio", name: "Entretenimiento", icon: "🎡", color: "#e8590c", desc: "Cine, teatro, parques y planes con chicos" }
  ],

  /* Los lugares se cargan en la etapa 2, en data/paris-lugares.js. */
  places: [],

  barrios: [
    { name: "Islas del Sena", vibe: "El origen de París", desc: "La isla de la Cité, con Notre-Dame, la Sainte-Chapelle y la Conciergerie, y la tranquila isla Saint-Louis, unidas por puentes.", stay: "Hay muy pocos hoteles, pero todo lo demás queda a un paso." },
    { name: "Le Marais", vibe: "Histórico, de moda y con vida de barrio", desc: "Calles medievales, la Place des Vosges, el barrio judío de la Rue des Rosiers, galerías, tiendas de diseño y el Museo Picasso.", stay: "Muy buena base: céntrico, caminable y con mucho para hacer a cualquier hora." },
    { name: "Saint-Germain-des-Prés", vibe: "Elegante y literario", desc: "Los cafés de los escritores, librerías, galerías y el Jardín de Luxemburgo a pocas cuadras.", stay: "Ideal para una primera visita si buscás algo clásico y tranquilo; suele ser caro." },
    { name: "Barrio Latino", vibe: "Estudiantil y animado", desc: "La Sorbona, el Panteón, calles con restaurantes accesibles y la orilla del Sena frente a Notre-Dame.", stay: "Céntrico y con precios algo más razonables que Saint-Germain." },
    { name: "Torre Eiffel y Trocadero", vibe: "Monumental y residencial", desc: "La Torre Eiffel, el Campo de Marte, los Inválidos y las mejores vistas desde el Trocadero.", stay: "Lindo y seguro, pero de noche hay poco movimiento." },
    { name: "Louvre y Palais-Royal", vibe: "Clásico y central", desc: "El Louvre, el Jardín de las Tullerías, el Palais-Royal y las galerías cubiertas del siglo XIX.", stay: "Lo más céntrico posible: todo a pie o a una estación de metro." },
    { name: "Champs-Élysées", vibe: "Lujo y grandes avenidas", desc: "La avenida de los Campos Elíseos, el Arco del Triunfo y las marcas de lujo de la Avenue Montaigne.", stay: "Hoteles grandes y bien conectados; menos encanto de barrio." },
    { name: "Ópera y Grands Boulevards", vibe: "Comercial y teatral", desc: "La Ópera Garnier, las Galerías Lafayette y Printemps, y los teatros de los grandes bulevares.", stay: "Muy bien conectado, con muchos hoteles de precio medio." },
    { name: "Montmartre", vibe: "Bohemio y de colina", desc: "El Sagrado Corazón, la Place du Tertre con sus pintores, viñedos y escaleras con vista a toda la ciudad.", stay: "Con mucho encanto; tené en cuenta las subidas y que la zona de Pigalle es muy nocturna." },
    { name: "Canal Saint-Martin", vibe: "Joven y relajado", desc: "Puentes de hierro sobre el canal, bares, cafés y gente sentada en la orilla al atardecer.", stay: "Para quienes buscan un París más local y con buenos bares." },
    { name: "Bastille y Oberkampf", vibe: "Nocturno y popular", desc: "La plaza de la Bastilla, la Ópera moderna, el mercado de Aligre y calles llenas de bares.", stay: "Bueno para salir de noche y con precios razonables; puede ser ruidoso." },
    { name: "Belleville", vibe: "Multicultural y artístico", desc: "Arte urbano, comida china y del norte de África, y el parque de Belleville con una gran vista.", stay: "Económico y auténtico, para quienes ya conocen el centro." },
    { name: "Montparnasse", vibe: "Tranquilo y bien conectado", desc: "La torre Montparnasse con su mirador, las catacumbas cerca y las brasserías históricas.", stay: "Práctico y más tranquilo, con la estación de trenes al lado." },
    { name: "Distrito 13", vibe: "Barrio Chino y colina de pueblo", desc: "El Barrio Chino entre torres modernas y, al lado, la Butte-aux-Cailles, con casas bajas, arte urbano y bares baratos.", stay: "Económico y bien conectado, lejos del circuito turístico." },
    { name: "Passy", vibe: "Residencial y elegante", desc: "El oeste tranquilo de la ciudad, con el Museo Marmottan Monet, calles comerciales de barrio y el bosque de Boulogne cerca.", stay: "Muy seguro y silencioso, pero lejos de la vida nocturna." },
    { name: "Bosque de Boulogne", vibe: "Verde y enorme", desc: "El gran bosque del oeste de París, con lagos, la Fundación Louis Vuitton y el Jardín de Aclimatación.", stay: "No es zona para alojarse: es para pasar el día." },
    { name: "La Villette", vibe: "Moderno y al aire libre", desc: "El gran parque del noreste, con la Ciudad de las Ciencias, la Philharmonie y canales para caminar.", stay: "Mejor para visitar que para alojarse." }
  ],

  /* Los itinerarios se arman en la etapa 2, cuando estén cargados los lugares. */
  itineraries: [],

  /* ───────────── TRANSPORTE ───────────── */
  subte: [
    { line: "1", color: "#ffcd00", route: "La Défense ↔ Château de Vincennes", useful: "Campos Elíseos, Louvre, Hôtel de Ville y Bastilla" },
    { line: "2", color: "#003ca6", route: "Porte Dauphine ↔ Nation", useful: "Arco del Triunfo, Pigalle y Montmartre (Anvers) y Belleville" },
    { line: "4", color: "#cf009e", route: "Porte de Clignancourt ↔ Bagneux", useful: "Gare du Nord, Châtelet, Saint-Michel, Saint-Germain y Montparnasse" },
    { line: "6", color: "#6eca97", route: "Charles de Gaulle-Étoile ↔ Nation", useful: "Torre Eiffel (Bir-Hakeim y Trocadéro) y Montparnasse; buena parte va por arriba, con vistas" },
    { line: "7", color: "#fa9aba", route: "La Courneuve ↔ Villejuif / Mairie d'Ivry", useful: "Ópera, Louvre y Barrio Chino" },
    { line: "9", color: "#d5c900", route: "Pont de Sèvres ↔ Mairie de Montreuil", useful: "Trocadéro, Campos Elíseos y Grands Boulevards" },
    { line: "12", color: "#007852", route: "Mairie d'Aubervilliers ↔ Mairie d'Issy", useful: "Montmartre (Abbesses), Concordia y Saint-Germain" },
    { line: "14", color: "#62259d", route: "Saint-Denis Pleyel ↔ Aeropuerto de Orly", useful: "La más rápida: Saint-Lazare, Châtelet, Gare de Lyon y el aeropuerto de Orly" },
    { line: "RER B", color: "#5291ce", route: "Aeropuerto CDG ↔ Saint-Rémy-lès-Chevreuse", useful: "Aeropuerto Charles de Gaulle, Gare du Nord, Châtelet y Barrio Latino" },
    { line: "RER C", color: "#ffce00", route: "Cruza París por la orilla del Sena", useful: "Torre Eiffel (Champ de Mars), Museo de Orsay y Versalles" }
  ],
  transport: [
    /* Revisado el 13/11/2026 contra iledefrance-mobilites.fr y parisaeroport.fr. */
    { icon: "💳", title: "Cómo pagar: lo primero", items: [
      { t: "Dos boletos sueltos", d: "El boleto de metro, tren y RER sirve en toda la región, menos para ir a los aeropuertos. El de bus y tranvía es otro boleto, aparte." },
      { t: "Al aeropuerto, boleto propio", d: "Para ir o volver de Charles de Gaulle u Orly en RER, metro o bus hace falta el boleto Aeropuertos (Paris Région <> Aéroports)." },
      { t: "Dónde se compra", d: "En las máquinas y boleterías de las estaciones, o en la app oficial Île-de-France Mobilités, que carga los boletos en el celular." },
      { t: "Navigo Easy", d: "Es una tarjeta recargable sin nombre: se compra una vez en las estaciones y se le cargan boletos o pases. Reemplaza a los boletos de cartón." },
      { t: "Si te quedás varios días", d: "Comparalo con tu plan: el pase de un día (Navigo Jour), el semanal (Navigo Semaine, de lunes a domingo) o el pase turístico Paris Visite. El semanal y el Paris Visite incluyen los aeropuertos." },
      { t: "Guardá el boleto", d: "Hay molinetes a la entrada y a veces a la salida, y pasan inspectores. Sin boleto válido, la multa es alta." },
      { t: "Última revisión", d: "13 de noviembre de 2026, con los sitios de Île-de-France Mobilités y de los aeropuertos de París. Si algo no coincide, valen los carteles del transporte." }
    ] },
    { icon: "🚇", title: "Metro y RER", items: [
      { t: "Cómo funcionan", d: "El metro tiene 16 líneas numeradas y pasa muy seguido. El RER son trenes rápidos con letras (A, B, C, D, E) que cruzan la ciudad y llegan a las afueras." },
      { t: "Horarios", d: "El metro funciona desde temprano hasta pasada la medianoche, y un poco más los viernes y sábados. Verificá antes de volver tarde." },
      { t: "Cómo orientarte", d: "Cada dirección se llama por la estación final de la línea. Seguí los carteles con el número de línea y el nombre de esa última estación." },
      { t: "Combinaciones", d: "Las estaciones grandes como Châtelet tienen pasillos muy largos. Si vas cargado, buscá una combinación más simple." },
      { t: "Accesibilidad", d: "Muchas estaciones de metro tienen solo escaleras. La línea 14 y buena parte del RER tienen ascensores." }
    ] },
    { icon: "🚌", title: "Buses y tranvías", items: [
      { t: "Buses", d: "Cubren toda la ciudad y sirven para ver París desde la ventana. El boleto se valida al subir, en la maquinita junto al chofer." },
      { t: "De noche", d: "Cuando cierra el metro funcionan los buses nocturnos Noctilien (con la letra N). Varios salen de Châtelet y de las grandes estaciones." },
      { t: "Tranvías", d: "Rodean la ciudad por los bulevares de las afueras. Son útiles para ir de un borde a otro sin pasar por el centro." },
      { t: "Cómo saber cuál tomar", d: "Usá Google Maps, Citymapper o la app Île-de-France Mobilités: indican línea, parada y cuánto falta." }
    ] },
    { icon: "🚆", title: "Trenes y estaciones", items: [
      { t: "Seis grandes estaciones", d: "Gare du Nord, Gare de l'Est, Gare de Lyon, Gare d'Austerlitz, Gare Montparnasse y Gare Saint-Lazare. Cada una tiene trenes a una parte distinta de Francia y de Europa." },
      { t: "Trenes de larga distancia", d: "Los TGV se compran en SNCF Connect. Conviene comprar con anticipación: el precio sube cerca de la fecha." },
      { t: "A Versalles", d: "El RER C llega a Versalles Château Rive Gauche, a pocas cuadras del palacio." }
    ] },
    { icon: "🚕", title: "Taxis y apps", items: [
      { t: "Taxis oficiales", d: "Tienen un cartel \"TAXI PARISIEN\" en el techo: luz verde, libre; luz roja, ocupado. Se toman en las paradas, en la calle o por app." },
      { t: "Desde los aeropuertos", d: "Entre los aeropuertos y el centro de París los taxis oficiales cobran una tarifa fija. Preguntala antes de subir." },
      { t: "Apps", d: "Uber, Bolt, FREENOW, Heetch y G7 funcionan en toda la ciudad y muestran el precio antes de viajar." },
      { t: "Consejos", d: "En el aeropuerto usá solo la fila de taxis oficial. No aceptes ofertas de gente que se te acerque en la terminal." }
    ] },
    { icon: "🚲", title: "Bicicleta y a pie", items: [
      { t: "Vélib'", d: "Las bicis públicas de la ciudad, mecánicas y eléctricas, con estaciones en todo París. Se alquilan desde la app oficial." },
      { t: "Ciclovías", d: "París tiene muchas ciclovías nuevas. Si caminás, no te quedes parado en ellas: las bicis van rápido." },
      { t: "A pie", d: "El centro se recorre muy bien caminando, sobre todo por la orilla del Sena. Llevá calzado cómodo: vas a caminar mucho." }
    ] },
  ],

  /* ───────────── SEGURIDAD ───────────── */
  emergencies: [
    { n: "112", t: "Emergencias (número europeo)" },
    { n: "15", t: "Ambulancia y orientación médica (SAMU)" },
    { n: "17", t: "Policía" },
    { n: "18", t: "Bomberos" },
    { n: "3117", t: "Seguridad en el transporte público" },
    { n: "3919", t: "Violencia contra mujeres" }
  ],
  safety: [
    { icon: "🎒", title: "Lo más común: carteristas", tone: "warn", items: [
      "Pasa sobre todo en el metro y el RER llenos (la línea 1 y el RER B al aeropuerto), en los andenes y en los lugares con mucha gente.",
      "Llevá la mochila adelante y los bolsillos cerrados, sobre todo al subir y bajar del tren, cuando se cierran las puertas.",
      "En terrazas y cafés, no dejes el celular sobre la mesa ni la mochila colgada de la silla.",
      "Cuidá tus cosas en la Torre Eiffel, el Sagrado Corazón, el Louvre y Notre-Dame: ahí trabajan grupos organizados."
    ] },
    { icon: "🗺️", title: "Zonas para ir con atención", tone: "warn", items: [
      "París es una ciudad segura para recorrer; estos son lugares donde conviene estar más atento, sobre todo de noche.",
      "Los alrededores de Gare du Nord y Gare de l'Est de noche.",
      "Châtelet-Les Halles de madrugada.",
      "Barbès, La Chapelle y Stalingrad (norte de la ciudad): hay venta y consumo de drogas en la calle. De noche, mejor evitarlos.",
      "Pigalle a la salida de bares y cabarets, de madrugada."
    ] },
    { icon: "🎭", title: "Estafas típicas", tone: "warn", items: [
      "Las pulseritas de la amistad: en la subida al Sagrado Corazón te atan una pulsera en la muñeca y después exigen plata. Seguí caminando y no extiendas la mano.",
      "El anillo de oro: alguien \"encuentra\" un anillo en el piso, te lo regala y después te pide plata. Es de lata.",
      "Las firmas: te piden firmar por una causa solidaria y después exigen una donación, o aprovechan para robarte.",
      "El juego de los tres vasitos (bonneteau), sobre todo cerca de la Torre Eiffel: está arreglado y los que ganan son cómplices.",
      "Taxis truchos en los aeropuertos y estaciones: usá solo la fila oficial o una app."
    ] },
    { icon: "✅", title: "Buenas prácticas", tone: "ok", items: [
      "Con las precauciones de cualquier gran capital, la gran mayoría de las visitas transcurre sin problemas.",
      "Llevá solo lo del día: una tarjeta, algo de efectivo y una copia del documento. El pasaporte, en el alojamiento.",
      "Si te roban, podés hacer la denuncia en cualquier comisaría. La vas a necesitar para el seguro y para tramitar documentos.",
      "Si te roban el pasaporte, después de la denuncia andá a tu consulado: en Info > Ayuda están en el mapa.",
      "Contratá un seguro de viaje: la atención médica es muy buena, pero cara sin cobertura."
    ] }
  ],

  /* ───────────── INFO PRÁCTICA ───────────── */
  practical: [
    { icon: "💵", title: "Dinero y pagos", items: [
      { t: "Moneda", d: "Euro (EUR)." },
      { t: "Tarjetas", d: "Se aceptan casi en todos lados, también sin contacto y con el celular. Algunos lugares chicos piden un monto mínimo para pagar con tarjeta." },
      { t: "Efectivo", d: "Conviene tener algo para mercados, panaderías chicas y propinas." },
      { t: "Cajeros", d: "Usá los de bancos. Si te ofrecen cobrarte en tu moneda, elegí siempre pagar en euros: el cambio del cajero es peor." },
      { t: "Propina", d: "El servicio ya está incluido en la cuenta (\"service compris\"). Dejar algo extra es opcional: se suele redondear o dejar unos euros si te atendieron bien." },
      { t: "Agua gratis", d: "En los restaurantes podés pedir una jarra de agua de la canilla (\"une carafe d'eau\"): es gratis." }
    ] },
    { icon: "🕘", title: "Horarios parisinos", items: [
      { t: "Comidas", d: "Almuerzo de 12 a 14 y cena de 19:30 a 22:30. Entre la tarde y la noche muchas cocinas cierran: buscá brasseries, que sirven todo el día." },
      { t: "Domingos", d: "Muchos comercios cierran. En el Marais, los Campos Elíseos y algunas zonas turísticas abren igual." },
      { t: "Museos", d: "Casi todos cierran un día por semana: el Louvre los martes y el Orsay los lunes. Verificá antes de ir." },
      { t: "Reservas", d: "Para los museos y monumentos más pedidos (Louvre, Torre Eiffel, Sainte-Chapelle, Notre-Dame) conviene reservar horario en su sitio oficial." }
    ] },
    { icon: "🌤️", title: "Clima y cuándo venir", items: [
      { t: "Primavera (abr–jun)", d: "Templado, con los parques en flor. Muy buena época, aunque llueve seguido." },
      { t: "Verano (jul–ago)", d: "Días largos y calurosos, a veces con olas de calor. Muchos parisinos se van de vacaciones y algunos comercios cierran." },
      { t: "Otoño (sep–nov)", d: "Fresco y con hojas de colores; septiembre es de los mejores meses." },
      { t: "Invierno (dic–mar)", d: "Frío y gris, cerca de 0 a 8 °C. Menos turistas, iluminaciones y mercados de Navidad en diciembre." }
    ] },
    { icon: "🔌", title: "Datos útiles", items: [
      { t: "Electricidad", d: "230 V. Enchufes tipo E y F (dos patas redondas). Si venís de la Argentina, llevá adaptador." },
      { t: "Agua", d: "El agua de la canilla es potable. Las fuentes verdes de la calle (Wallace) también." },
      { t: "Internet", d: "Hay Wi-Fi gratis en parques, plazas y muchos cafés. Para tener datos, lo más simple es una eSIM." },
      { t: "Idioma", d: "Francés. En las zonas turísticas muchos hablan inglés; saludar en francés antes de preguntar cambia mucho la atención." },
      { t: "Baños públicos", d: "Las cabinas automáticas de la calle (sanisettes) son gratis. En cafés, el baño suele ser solo para clientes." },
      { t: "Salud", d: "Las farmacias tienen una cruz verde. Urgencias: 112 o 15." }
    ] },
    { icon: "🥐", title: "Costumbres", items: [
      { t: "Saludo", d: "Al entrar a cualquier negocio se dice \"Bonjour\" (o \"Bonsoir\" a la noche), y \"Merci, au revoir\" al irte. Es muy mal visto no saludar." },
      { t: "En el restaurante", d: "Esperá a que te ubiquen. La cuenta no la traen solos: pedila con \"L'addition, s'il vous plaît\"." },
      { t: "Tono", d: "Se habla bajo en el transporte y en los restaurantes." },
      { t: "Para probar", d: "Croissant y pain au chocolat, la baguette, el croque-monsieur, el steak frites, quesos, crêpes, macarons y el vino de la casa." }
    ] }
  ]
};
