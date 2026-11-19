/* Lugares de Bogotá (tarjeta #204, 18/11/2026). Se suman a la lista de data/bogota.js, como en las otras ciudades.

   Cada fila: [categoría, tipo, nombre, barrio, dirección, precio, descripción, consejo, etiquetas, destacado (1 = imperdible, opcional)]
   precio: 0 = gratis, 1 = $, 2 = $$, 3 = $$$, 4 = $$$$, null = no aplica.

   Cómo se verificó: cada lugar se buscó en OpenStreetMap (nombre y calle, 18/11/2026). De ahí sale su ubicación (data/bogota-coords.js).
   Se dejaron afuera los que no aparecen (lista en docs/fuentes-bogota.md). Cada tipo tiene 4 lugares o más.
   Los veganos tienen su fuente en data/bogota-extra.js (diet). Sin precios ni horarios exactos. */
(() => {
  "use strict";
  const city = window.CITY_DATA && window.CITY_DATA.bogota;
  if (!city) return;
  const F = "Fuera de Bogotá";

  const filas = [
    /* ───────────── IMPERDIBLES ───────────── */
    ["ver", "Museo", "Museo del Oro", "Centro", "Carrera 6 # 15-88", 1, "La colección de orfebrería prehispánica más grande del mundo: miles de piezas de oro de las culturas indígenas de Colombia.", "Los domingos la entrada es gratis. No te pierdas la sala de la ofrenda, en el último piso.", ["museo","historia","clásico","lluvia"], 1],
    ["ver", "Museo", "Museo Botero", "La Candelaria", "Calle 11 # 4-41", 0, "La donación de Fernando Botero: sus gordos famosos y su colección de Picasso, Monet, Renoir y Dalí, en una casona colonial. Siempre gratis.", "Es parte del Banco de la República, junto con el Museo de Arte y la Casa de Moneda.", ["museo","arte","gratis","clásico","lluvia"], 1],
    ["ver", "Museo", "Museo Nacional de Colombia", "Macarena y Centro Internacional", "Carrera 7 # 28-66", 1, "La historia de Colombia en una vieja cárcel con forma de cruz, con arte, arqueología y objetos de la independencia.", "Calculá un par de horas.", ["museo","historia","lluvia"]],
    ["ver", "Museo", "Museo de Arte Miguel Urrutia", "La Candelaria", "Calle 11 # 4-21", 0, "El museo de arte del Banco de la República, conectado con el Museo Botero, con arte colombiano de varias épocas.", "Gratis, como el Botero.", ["museo","arte","gratis"]],
    ["ver", "Museo", "Casa de Moneda", "La Candelaria", "Calle 11 # 4-93", 0, "La casa donde se acuñaron las monedas desde la colonia, con patios y maquinarias antiguas.", "Se recorre junto al Museo Botero.", ["museo","historia","gratis"]],
    ["ver", "Museo", "MAMBO", "Macarena y Centro Internacional", "Calle 24 # 6-00", 1, "El Museo de Arte Moderno de Bogotá, en un edificio de ladrillo de Rogelio Salmona.", "Mirá qué muestra hay.", ["museo","arte","arquitectura"]],
    ["ver", "Museo", "Museo Colonial", "La Candelaria", "Carrera 6 # 9-77", 1, "Arte y objetos de la época colonial en un claustro jesuita del siglo XVII.", "Está a una cuadra de la Plaza de Bolívar.", ["museo","historia"]],
    ["ver", "Ícono", "Monserrate", "Montaña y cerros", "Carrera 2 Este # 21-48", 2, "El cerro sobre la ciudad, con un santuario blanco y la vista más amplia de Bogotá. Se sube en funicular, teleférico o caminando.", "Subí temprano, cuando el cielo está despejado. Abrigate: arriba hace frío.", ["mirador","clásico","religión"], 1],
    ["ver", "Ícono", "Plaza de Bolívar", "La Candelaria", "Carrera 7 # 11-10", 0, "La plaza principal, rodeada por la Catedral Primada, el Capitolio, el Palacio de Justicia y la Alcaldía.", "Atento a la mochila: hay mucha gente.", ["plaza","historia","gratis","clásico"], 1],
    ["ver", "Ícono", "Chorro de Quevedo", "La Candelaria", "Calle 13 # 1A-12", 0, "Una placita donde, según la tradición, se fundó la ciudad, rodeada de callecitas con grafitis y bares.", "De noche se llena de estudiantes: volvé en app.", ["plaza","historia","gratis"]],
    ["ver", "Ícono", "Torre Colpatria", "Centro", "Carrera 7 # 24-89", 1, "Uno de los edificios más altos de la ciudad, con un mirador en el piso 48.", "El mirador abre los fines de semana: revisá antes.", ["mirador","fotos"]],
    ["ver", "Ícono", "Carrera Séptima peatonal", "Centro", "Carrera 7", 0, "La calle peatonal del centro, con artistas callejeros, puestos y edificios históricos.", "Atento a la mochila.", ["paseo","gratis"]],
    ["ver", "Iglesia", "Catedral Primada de Colombia", "La Candelaria", "Carrera 7 # 10-80", 0, "La catedral neoclásica de la Plaza de Bolívar, la más grande del país.", "Respetá los horarios de misa.", ["iglesia","historia","gratis"]],
    ["ver", "Iglesia", "Iglesia de San Francisco", "Centro", "Avenida Jiménez # 7-02", 0, "La iglesia más antigua de Bogotá, con un altar mayor dorado impresionante.", "Está frente al Museo del Oro.", ["iglesia","historia","gratis","joya oculta"]],
    ["ver", "Iglesia", "Santuario de Monserrate", "Montaña y cerros", "Cerro de Monserrate", 0, "El santuario blanco del Señor Caído, en lo alto del cerro, destino de peregrinos.", "Los domingos hay muchos peregrinos.", ["iglesia","mirador","religión"]],
    ["ver", "Iglesia", "Iglesia de San Ignacio", "La Candelaria", "Calle 10 # 6-35", 0, "Una iglesia jesuita del siglo XVII con un interior barroco dorado.", "Al lado del Museo Colonial.", ["iglesia","historia","gratis"]],
    ["ver", "Histórico", "Biblioteca Luis Ángel Arango", "La Candelaria", "Calle 11 # 4-14", 0, "Una de las bibliotecas más visitadas de América Latina, con salas de concierto y exposiciones.", "Tiene una sala de música con conciertos.", ["historia","lluvia","gratis"]],
    ["ver", "Histórico", "Quinta de Bolívar", "La Candelaria", "Calle 21 # 4A-30 Este", 1, "La casa de campo donde vivió Simón Bolívar, con jardines al pie de Monserrate.", "Combinala con la subida a Monserrate.", ["historia","jardín"]],
    ["ver", "Histórico", "Teatro Colón", "La Candelaria", "Calle 10 # 5-32", 2, "Un teatro de 1892 de estilo italiano, restaurado, con ópera, danza y conciertos.", "Hay visitas guiadas algunos días.", ["teatro","historia","arquitectura","lluvia"]],
    ["ver", "Histórico", "Capitolio Nacional", "La Candelaria", "Carrera 7 # 10-50", 0, "La sede del Congreso, un edificio neoclásico sobre la Plaza de Bolívar.", "Hay visitas guiadas con reserva.", ["historia","arquitectura","gratis"]],
    ["ver", "Naturaleza", "Jardín Botánico de Bogotá", "Salitre y Simón Bolívar", "Calle 63 # 68-95", 1, "El jardín botánico José Celestino Mutis, con plantas de los Andes, un tropicario y bosques de niebla.", "Tiene un punto de información turística.", ["jardín","aire libre","chicos"], 1],
    ["ver", "Naturaleza", "Parque Simón Bolívar", "Salitre y Simón Bolívar", "Calle 63 # 59A-06", 0, "El gran parque de la ciudad, con un lago, botes y festivales gratis de rock y salsa.", "Ideal un domingo.", ["parque","aire libre","gratis","chicos"]],
    ["ver", "Naturaleza", "Parque Nacional Enrique Olaya Herrera", "Macarena y Centro Internacional", "Carrera 7 # 36-00", 0, "Un parque arbolado al pie de los cerros, con senderos y un reloj de flores.", "De día y en zonas con gente.", ["parque","aire libre","gratis"]],
    ["ver", "Naturaleza", "Quebrada La Vieja", "Montaña y cerros", "Calle 71 con Carrera 1 Este", 0, "Un sendero de montaña en los cerros orientales, con bosque y vista de la ciudad.", "Abre solo a la mañana y con registro: revisá antes.", ["naturaleza","sendero","gratis"]],
    ["ver", "Barrio", "La Candelaria", "La Candelaria", "Calle 11", 0, "El barrio colonial: calles empedradas, casas de colores, universidades, cafés y grafitis.", "Recorrelo de día y volvé en app de noche.", ["barrio","historia","fotos","gratis"], 1],
    ["ver", "Barrio", "Usaquén", "Usaquén", "Carrera 6A # 119B-52", 0, "El antiguo pueblo del norte, con su plaza, restaurantes en casas viejas y el mercado de pulgas de los domingos.", "Andá un domingo para el mercado.", ["barrio","mercado","tranquilo"], 1],
    ["ver", "Barrio", "Zona G", "Zona G", "Calle 69A", 0, "Un puñado de cuadras con algunos de los mejores restaurantes de la ciudad.", "Reservá a la noche.", ["barrio","comida","noche"]],
    ["ver", "Barrio", "Parque de la 93", "Parque de la 93", "Calle 93A", 0, "Un parque rodeado de restaurantes, cafés y bares, con eventos gratis.", "Seguro y animado a la noche.", ["parque","noche","gratis"]],
    ["ver", "Barrio", "Barrio La Macarena", "Macarena y Centro Internacional", "Carrera 4A", 0, "Un barrio de ladrillo en la ladera con restaurantes de autor y galerías.", "Buen lugar para cenar.", ["barrio","comida","arte"]],

    /* ───────────── DÓNDE COMER ───────────── */
    ["comer", "Cocina colombiana", "La Puerta Falsa", "La Candelaria", "Calle 11 # 6-50", 1, "Un local diminuto de 1816 junto a la catedral, famoso por el tamal, el chocolate santafereño con queso y los dulces.", "Siempre hay fila: avanza rápido.", ["comida colombiana","historia","barato","clásico"], 1],
    ["comer", "Cocina colombiana", "Casa Santa Clara", "Montaña y cerros", "Cerro de Monserrate", 2, "Cocina bogotana en una casona en lo alto de Monserrate, con vista a la ciudad.", "Probá el ajiaco.", ["comida colombiana","mirador"]],
    ["comer", "Cocina colombiana", "La Puerta de la Catedral", "La Candelaria", "Carrera 7 # 9-97", 2, "Ajiaco, sobrebarriga y comida típica junto a la Plaza de Bolívar.", "Ideal para almorzar en el centro.", ["comida colombiana","ajiaco"]],
    ["comer", "Cocina colombiana", "Andrés D.C.", "Zona Rosa y Zona T", "Calle 82 # 12-21", 3, "La versión urbana de Andrés Carne de Res: carnes, cocina colombiana y fiesta en cuatro pisos con decoración delirante.", "Andá un jueves o sábado a la noche.", ["comida colombiana","fiesta","noche","clásico"], 1],
    ["comer", "Cocina colombiana", "Club Colombia", "Zona Rosa y Zona T", "Avenida 82 # 9-11", 3, "Cocina colombiana tradicional en una casona inglesa.", "Probá los patacones y el ajiaco.", ["comida colombiana"]],
    ["comer", "De autor", "Leo", "Chapinero", "Calle 65 Bis # 4-23", 4, "La cocina de Leonor Espinosa con ingredientes de todo el país, entre los mejores restaurantes de América Latina.", "Menú de degustación: reservá con mucha anticipación.", ["cocina de autor","especial"]],
    ["comer", "De autor", "El Chato", "Chapinero", "Calle 65 # 4-76", 4, "Cocina colombiana contemporánea, uno de los restaurantes más premiados del país.", "Reservá con tiempo.", ["cocina de autor","especial"]],
    ["comer", "De autor", "Harry Sasson", "Zona Rosa y Zona T", "Carrera 9 # 75-70", 4, "El restaurante del chef más conocido de Bogotá, en una casona inglesa con un jardín vidriado.", "Ideal para una ocasión especial.", ["cocina de autor","especial"]],
    ["comer", "De autor", "Mesa Franca", "Chapinero", "Calle 72 # 5-83", 3, "Platos para compartir con productos colombianos y cócteles de autor.", "Reservá.", ["cocina de autor","para compartir"]],
    ["comer", "De autor", "Prudencia", "La Candelaria", "Carrera 2 # 11-34", 3, "Cocina a la leña en una casona de La Candelaria, con menú que cambia cada semana.", "Abre solo algunos días: reservá.", ["cocina de autor","joya oculta"]],
    ["comer", "Café y pastelería", "Café San Alberto", "La Candelaria", "Carrera 4 # 9-70", 2, "Un café de especialidad de una finca familiar, con catas guiadas.", "Hacé la cata de café.", ["café","especialidad"]],
    ["comer", "Café y pastelería", "Amor Perfecto", "Chapinero", "Carrera 4 # 66-46", 2, "Uno de los pioneros del café de especialidad en Colombia, con métodos de filtrado y catas.", "Preguntá por los cafés de cada región.", ["café","especialidad"]],
    ["comer", "Café y pastelería", "Pastelería Florida", "Centro", "Carrera 7 # 20-82", 1, "Una pastelería de 1936 famosa por el chocolate santafereño con queso.", "Pedí chocolate con almojábana.", ["café","dulce","historia","barato"]],
    ["comer", "Café y pastelería", "Masa", "Zona Rosa y Zona T", "Carrera 9 # 70A-11", 2, "Una panadería y café con brunch y panes de masa madre.", "Ideal para desayunar.", ["café","desayuno","panadería"]],
    ["comer", "Café y pastelería", "Café Quindío", "Usaquén", "Carrera 6 # 117-26", 1, "Un café colombiano en Usaquén con granos de la región cafetera.", "Ideal después del mercado.", ["café"]],
    ["comer", "Mercado", "Mercado de Paloquemao", "Centro", "Calle 19 # 25-04", 1, "La gran plaza de mercado: frutas exóticas, flores, comida típica y jugos.", "Andá temprano y probá frutas que no conocés.", ["mercado","comida","frutas","flores"], 1],
    ["comer", "Mercado", "Plaza de Mercado La Perseverancia", "Macarena y Centro Internacional", "Carrera 5 # 30A-30", 1, "Una plaza de barrio famosa por sus cocinas de mujeres que hacen ajiaco y comida del Pacífico.", "Andá al mediodía.", ["mercado","comida colombiana","barato"]],
    ["comer", "Mercado", "Plaza de Mercado de Usaquén", "Usaquén", "Carrera 7 # 119-20", 1, "Un mercado de barrio con cocinas y frutas en Usaquén.", "Combinalo con el mercado de pulgas.", ["mercado","comida"]],
    ["comer", "Mercado", "Plaza de Mercado del 7 de Agosto", "Teusaquillo", "Carrera 24 # 66-17", 1, "Una plaza de mercado popular con comida barata y frutas.", "Ideal para un almuerzo de mercado.", ["mercado","barato"]],
    ["comer", "Vegetariano", "Herbívoro Cocina Vegana", "Chapinero", "Calle 71 # 9-55", 2, "Cocina vegana en Chapinero, con platos colombianos versión vegetal.", "Confirmá en el local si tenés alguna alergia.", ["vegano","vegetariano"]],
    ["comer", "Vegetariano", "Gori San", "Chapinero", "Calle 71 # 9-14", 2, "Comida asiática vegana en Chapinero.", "Confirmá en el local si tenés alguna alergia.", ["vegano","vegetariano"]],
    ["comer", "Vegetariano", "Frambuesa", "Chapinero", "Carrera 13A # 79-66", 1, "Un café vegano con desayunos y tortas.", "Confirmá en el local si tenés alguna alergia.", ["vegano","vegetariano","café"]],
    ["comer", "Vegetariano", "Maha Vegan Food", "Teusaquillo", "Calle 46 con Carrera 7", 1, "Comida vegana casera y barata.", "Confirmá en el local si tenés alguna alergia.", ["vegano","vegetariano"]],

    /* ───────────── NOCHE ───────────── */
    ["noche", "Salsa", "Galería Café Libro", "Zona Rosa y Zona T", "Carrera 11A # 93-42", 2, "Una salsoteca clásica con salsa en vivo y pista llena.", "Andá con ganas de bailar.", ["salsa","bailar","música en vivo"], 1],
    ["noche", "Salsa", "Quiebracanto", "La Candelaria", "Carrera 5 # 17-76", 1, "Un bar de salsa en La Candelaria, con música en vivo y ambiente universitario.", "Volvé en app.", ["salsa","bailar"]],
    ["noche", "Salsa", "El Goce Pagano", "La Candelaria", "Carrera 1 # 20-04", 1, "Un clásico de la salsa brava en Bogotá desde los años 70.", "Abre de jueves a sábado.", ["salsa","bailar","historia"]],
    ["noche", "Salsa", "Salsa Camará", "Zona Rosa y Zona T", "Carrera 14A # 82-16", 2, "Una salsoteca con orquesta en vivo los fines de semana.", "Hay clases antes del baile algunos días.", ["salsa","bailar","música en vivo"]],
    ["noche", "Bar de cócteles", "Huerta Coctelería", "Chapinero", "Calle 70A # 5-11", 3, "Cócteles con ingredientes colombianos, uno de los bares más premiados del país.", "Reservá.", ["cócteles"]],
    ["noche", "Bar de cócteles", "Apache", "Parque de la 93", "Carrera 11 # 93-53", 3, "Una terraza en la azotea con cócteles y DJs.", "Lindo al atardecer.", ["cócteles","terraza","mirador"]],
    ["noche", "Bar de cócteles", "La Sala de Laura", "Chapinero", "Calle 66 # 10-36", 3, "Un bar escondido con cócteles de autor.", "Reservá por mensaje.", ["cócteles","joya oculta"]],
    ["noche", "Bar de cócteles", "Black Bear", "Zona Rosa y Zona T", "Carrera 11A # 89-06", 3, "Un restaurante y bar de cócteles en el norte, con buen ambiente.", "Reservá el fin de semana.", ["cócteles"]],
    ["noche", "Cervecería", "Bogotá Beer Company", "Usaquén", "Carrera 6 # 119-24", 2, "La cervecería artesanal más famosa de Bogotá, con locales por toda la ciudad.", "Probá la Candelaria Clásica.", ["cerveza","cervecería"]],
    ["noche", "Cervecería", "Cervecería Statua Rota", "Chapinero", "Calle 55 # 9-22", 2, "Una cervecería artesanal con cervezas propias y buena comida.", "Probá la degustación.", ["cerveza","cervecería"]],
    ["noche", "Cervecería", "Madre", "Usaquén", "Carrera 5 # 117-70", 2, "Pizza a la leña y cerveza artesanal en una casona de Usaquén.", "Buen plan para grupos.", ["cerveza","pizza"]],
    ["noche", "Cervecería", "Chapinero Beer Company", "Chapinero", "Carrera 9 # 60-37", 2, "Bar de cerveza artesanal colombiana en Chapinero.", "Buen ambiente los fines de semana.", ["cerveza"]],
    ["noche", "Para bailar", "Theatron", "Chapinero", "Calle 58 # 10-32", 2, "Una de las discotecas más grandes de América Latina, con muchas pistas, centro de la noche LGBT.", "Andá en grupo y volvé en app.", ["boliche","lgbt","fiesta"]],
    ["noche", "Para bailar", "Armando Records", "Zona Rosa y Zona T", "Calle 85 # 14-46", 2, "Un bar con terraza y DJ de música alternativa y electrónica.", "Se llena tarde, cerca de la medianoche.", ["boliche","terraza","electrónica"]],
    ["noche", "Para bailar", "Video Club", "Chapinero", "Calle 64 # 13-09", 2, "Un club de música electrónica muy popular.", "Abre tarde.", ["boliche","electrónica"]],
    ["noche", "Para bailar", "Gaira Café", "Zona Rosa y Zona T", "Carrera 13 # 96-11", 3, "El bar de la familia de Carlos Vives, con vallenato y música colombiana en vivo.", "Reservá el fin de semana.", ["música en vivo","bailar","vallenato"]],

    /* ───────────── TOURS ───────────── */
    ["tours", "Visita guiada", "Tour de grafiti", "La Candelaria", "Parque de los Periodistas", 0, "Un recorrido a pie por los murales y el arte callejero de La Candelaria, contado por artistas.", "Funciona a la gorra: dejá la propina que te parezca.", ["arte","a pie","gratis"], 1],
    ["tours", "Visita guiada", "Free tour por La Candelaria", "La Candelaria", "Plaza de Bolívar", 0, "Recorridos a pie por el centro histórico con guía, a la gorra.", "Al final se deja la propina.", ["a pie","historia","barato"]],
    ["tours", "Visita guiada", "Tour en bici por Bogotá", "La Candelaria", "Carrera 3 # 12-72", 2, "Recorrido guiado en bici por el centro, los mercados y los barrios.", "Las bicis y el casco están incluidos.", ["bici","aire libre"]],
    ["tours", "Visita guiada", "Tour del café", "La Candelaria", "Carrera 4 # 9-70", 2, "Catas y recorridos para aprender sobre el café colombiano, desde el grano a la taza.", "Ideal si te gusta el café.", ["café","especialidad"]],
    ["tours", "Visita guiada", "Tour por TransMiCable y Ciudad Bolívar", F, "Ciudad Bolívar", 2, "Recorridos guiados por un barrio popular subiendo en el teleférico urbano, con murales y miradores.", "Solo con guía local.", ["cultura","mirador"]],

    /* ───────────── EXCURSIONES ───────────── */
    ["escapadas", "Ciudad y pueblo", "Catedral de Sal de Zipaquirá", F, "Zipaquirá", 2, "Una catedral subterránea tallada en una mina de sal, con cruces iluminadas a 180 metros de profundidad.", "A una hora y media; los fines de semana hay un tren turístico.", ["historia","religión","clásico"], 1],
    ["escapadas", "Ciudad y pueblo", "Villa de Leyva", F, "Villa de Leyva", 2, "Un pueblo colonial con una de las plazas más grandes de América, a unas tres horas.", "Quedate una noche.", ["pueblo","historia","fotos"], 1],
    ["escapadas", "Ciudad y pueblo", "Guatavita", F, "Guatavita", 1, "Un pueblo blanco reconstruido junto a un embalse, cerca de la laguna de la leyenda de El Dorado.", "Combinalo con la laguna.", ["pueblo"]],
    ["escapadas", "Ciudad y pueblo", "Chía y Andrés Carne de Res", F, "Chía", 3, "El restaurante y fiesta original de Andrés Carne de Res, a una hora de la ciudad.", "Volvé con transporte contratado.", ["comida colombiana","fiesta","noche"]],
    ["escapadas", "Naturaleza", "Laguna de Guatavita", F, "Laguna de Guatavita", 1, "La laguna sagrada de los muiscas, donde nació la leyenda de El Dorado.", "Se recorre con guía; llevá abrigo.", ["naturaleza","historia","sendero"]],
    ["escapadas", "Naturaleza", "Parque Natural Chicaque", F, "San Antonio del Tequendama", 1, "Un bosque de niebla con senderos y cabañas, a una hora de la ciudad.", "Llevá ropa impermeable.", ["naturaleza","sendero"]],
    ["escapadas", "Naturaleza", "Salto del Tequendama", F, "Soacha", 1, "Una cascada de 150 metros frente a una vieja mansión convertida en museo.", "Mejor en temporada de lluvias.", ["naturaleza","mirador"]],
    ["escapadas", "Naturaleza", "Suesca", F, "Suesca", 1, "Paredes de roca junto al río, el lugar preferido para escalar cerca de Bogotá.", "Hay escuelas de escalada para principiantes.", ["naturaleza","aventura"]],

    /* ───────────── HOSPEDAJE ───────────── */
    ["dormir", "Lujo", "Four Seasons Casa Medina", "Zona Rosa y Zona T", "Carrera 7 # 69A-22", 4, "Un hotel en una casona de los años 40 con patios y madera tallada, junto a la Zona G.", "El restaurante del hotel es muy bueno.", ["lujo","historia"]],
    ["dormir", "Lujo", "Sofitel Bogotá Victoria Regia", "Parque de la 93", "Carrera 13 # 85-80", 4, "Hotel de lujo de estilo clásico cerca de la Zona Rosa.", "Bien ubicado para salir.", ["lujo"]],
    ["dormir", "Lujo", "JW Marriott Bogotá", "Parque de la 93", "Calle 73 # 8-60", 4, "Hotel de lujo moderno en el norte, cerca de la Zona G.", "Pedí piso alto.", ["lujo","moderno"]],
    ["dormir", "Lujo", "Hotel de la Opera", "La Candelaria", "Calle 10 # 5-72", 3, "Un hotel en dos casonas coloniales junto al Teatro Colón, con terraza con vista a la catedral.", "La terraza es linda al atardecer.", ["lujo","historia","mirador"]],
    ["dormir", "Hotel", "Hotel Casa Deco", "La Candelaria", "Calle 14 # 2-30", 2, "Un hotel art déco de colores en La Candelaria, con terraza.", "Bien ubicado para recorrer el centro.", ["boutique","económico"]],
    ["dormir", "Hotel", "Hotel B3 Virrey", "Parque de la 93", "Carrera 15 # 88-36", 2, "Hotel moderno de diseño con un jardín vertical, frente al parque El Virrey.", "Buena relación precio y ubicación.", ["diseño","moderno"]],
    ["dormir", "Hotel", "GHL Hotel Hamilton", "Zona Rosa y Zona T", "Calle 81 # 11-55", 3, "Hotel moderno en la Zona Rosa.", "Ideal para salir de noche.", ["moderno"]],
    ["dormir", "Hotel", "Hotel Click Clack Bogotá", "Parque de la 93", "Carrera 11 # 93-77", 3, "Hotel de diseño con terraza en la azotea, junto al Parque de la 93.", "La terraza es un buen plan aunque no te alojes.", ["diseño","terraza"]],
    ["dormir", "Hostel", "Selina Chapinero", "Chapinero", "Calle 65 # 3-90", 1, "Un hostel con cowork en una casona de Chapinero Alto.", "Buena opción para viajar solo.", ["hostel","económico"]],
    ["dormir", "Hostel", "Masaya Bogotá", "La Candelaria", "Carrera 2 # 12-48", 1, "Un hostel grande en una casona colonial de La Candelaria, con actividades.", "Ideal para conocer gente.", ["hostel","económico"]],
    ["dormir", "Hostel", "Botanika Hostel", "La Candelaria", "Calle 13 # 1-50", 1, "Un hostel con un patio lleno de plantas, junto al Chorro de Quevedo.", "Tranquilo y bien ubicado.", ["hostel","económico"]],
    ["dormir", "Hostel", "Casa Bellavista", "La Candelaria", "Carrera 2 # 10-21", 1, "Un hostel familiar en una casa colonial del centro histórico.", "Ambiente tranquilo.", ["hostel","económico"]],

    /* ───────────── COMPRAS ───────────── */
    ["compras", "Mercado", "Mercado de Pulgas de Usaquén", "Usaquén", "Carrera 6A # 119B-52", null, "El mercado de artesanías, antigüedades y comida de los domingos en las calles de Usaquén.", "Solo los domingos y festivos.", ["mercado","artesanías","vintage"], 1],
    ["compras", "Mercado", "Mercado de Pulgas San Alejo", "Centro", "Carrera 7 # 24-70", null, "Un mercado de pulgas de los domingos en el centro, con antigüedades y curiosidades.", "Solo los domingos.", ["mercado","vintage","barato"]],
    ["compras", "Mercado", "Pasaje Rivas", "Centro", "Carrera 10 # 10-54", null, "Un pasaje de artesanías de barro, cestería y objetos de uso diario.", "Regateá un poco.", ["mercado","artesanías","barato"]],
    ["compras", "Mercado", "Plaza de las Flores de Paloquemao", "Centro", "Calle 19 # 25-04", null, "El mercado mayorista de flores colombianas, una explosión de colores temprano a la mañana.", "Andá muy temprano.", ["mercado","flores","fotos"]],
    ["compras", "Zona comercial", "Centro Andino", "Zona Rosa y Zona T", "Carrera 11 # 82-71", null, "El centro comercial más tradicional del norte, junto a la Zona T.", "Ideal un día de lluvia.", ["shopping","lluvia","marcas"]],
    ["compras", "Zona comercial", "Centro Comercial Santafé", "Usaquén", "Calle 185 # 45-03", null, "Uno de los centros comerciales más grandes del país.", "Queda en el norte lejano.", ["shopping","lluvia"]],
    ["compras", "Zona comercial", "Unicentro", "Usaquén", "Avenida Carrera 15 # 124-30", null, "Un centro comercial grande y tradicional del norte.", "Ideal un día de lluvia.", ["shopping","lluvia"]],
    ["compras", "Zona comercial", "Zona T", "Zona Rosa y Zona T", "Calle 83", null, "Calles peatonales en forma de T con tiendas, bares y restaurantes.", "De noche se llena.", ["shopping","noche"]],
    ["compras", "Artesanías", "Artesanías de Colombia", "Macarena y Centro Internacional", "Carrera 2 # 18A-58", null, "La tienda oficial de artesanías de todo el país, con piezas de comunidades indígenas.", "Lindo para regalos de calidad.", ["artesanías","recuerdos"]],
    ["compras", "Artesanías", "Galería Cano", "Centro", "Carrera 13 # 27-98", null, "Réplicas de piezas del Museo del Oro y joyería con diseño precolombino.", "Buen recuerdo de Bogotá.", ["recuerdos","joyas"]],
    ["compras", "Artesanías", "Plaza de los Artesanos", "Salitre y Simón Bolívar", "Transversal 48 # 63A-52", null, "Un gran espacio con puestos de artesanos de todo el país.", "Mirá la agenda de ferias.", ["artesanías","mercado"]],
    ["compras", "Artesanías", "Esmeralderos de la Avenida Jiménez", "Centro", "Avenida Jiménez con Carrera 7", null, "La zona de los comerciantes de esmeraldas, con tiendas y joyerías.", "Comprá solo en joyerías establecidas, con certificado.", ["joyas","recuerdos"]],

    /* ───────────── DEPORTES ───────────── */
    ["deporte", "Estadio", "Estadio El Campín", "Salitre y Simón Bolívar", "Carrera 30 # 57-60", 2, "El estadio de Millonarios y Santa Fe, con un ambiente muy intenso.", "Comprá en las taquillas oficiales y andá con camiseta neutral.", ["fútbol","estadio"], 1],
    ["deporte", "Estadio", "Coliseo MedPlus", "Salitre y Simón Bolívar", "Carrera 30 # 57-60", 2, "El coliseo cubierto junto al Campín, para básquet, conciertos y eventos.", "Mirá la agenda.", ["estadio","recitales"]],
    ["deporte", "Estadio", "Movistar Arena", "Salitre y Simón Bolívar", "Diagonal 61C # 26-36", 3, "El estadio cubierto más grande de la ciudad, para conciertos y deportes.", "Se llega en TransMilenio.", ["recitales","estadio"]],
    ["deporte", "Estadio", "Parque Deportivo El Salitre", "Salitre y Simón Bolívar", "Avenida 68 # 63-45", 1, "Un complejo deportivo con piscinas, pistas y canchas.", "Ideal para nadar o correr.", ["natación","aire libre"]],
    ["deporte", "Correr y pedalear", "Ciclovía", "Zona Rosa y Zona T", "Carrera 7", 0, "Domingos y festivos, más de cien kilómetros de avenidas cerradas a los autos para bicis, patines y caminantes.", "Alquilá una bici y sumate: es el plan más bogotano.", ["bici","aire libre","gratis"], 1],
    ["deporte", "Correr y pedalear", "Sendero de Monserrate", "Montaña y cerros", "Carrera 2 Este # 21-48", 0, "El camino de piedra que sube al cerro: unos 1.500 escalones, con fieles y deportistas.", "Subí de día y en horario de apertura.", ["sendero","aire libre","gratis"]],
    ["deporte", "Correr y pedalear", "Parque El Virrey", "Parque de la 93", "Calle 88 con Carrera 15", 0, "Un parque lineal junto a un canal, preferido para correr en el norte.", "Seguro y con gente.", ["parque","aire libre","gratis"]],
    ["deporte", "Correr y pedalear", "Senderos de los cerros orientales", "Montaña y cerros", "Cerros Orientales", 0, "Senderos de montaña habilitados por la ciudad en los cerros, con bosque y vistas.", "Abren con horario y registro: revisá en la web del Distrito.", ["sendero","naturaleza","gratis"]],

    /* ───────────── ENTRETENIMIENTO ───────────── */
    ["ocio", "Espectáculos", "Teatro Mayor Julio Mario Santo Domingo", "Usaquén", "Avenida Calle 170 # 67-51", 3, "El gran teatro de la ciudad, con orquestas, ópera y danza internacional.", "Queda en el norte: volvé en app.", ["teatro","concierto","música clásica"]],
    ["ocio", "Espectáculos", "Teatro Libre", "Chapinero", "Carrera 11 # 61-80", 2, "Un teatro independiente con obras colombianas e internacionales.", "Mirá la cartelera.", ["teatro"]],
    ["ocio", "Espectáculos", "Teatro Nacional La Castellana", "Zona Rosa y Zona T", "Calle 95 # 47-15", 2, "Un teatro con comedias y musicales populares.", "Mirá la cartelera.", ["teatro","comedia"]],
    ["ocio", "Espectáculos", "Cinemateca de Bogotá", "Centro", "Carrera 3 # 19-10", 1, "El centro de cine de la ciudad, con películas de autor y muestras.", "Las funciones son baratas.", ["cine","lluvia"]],
    ["ocio", "Con chicos", "Maloka", "Salitre y Simón Bolívar", "Carrera 68D # 24A-51", 2, "Un museo interactivo de ciencia con domo de cine y experimentos para tocar.", "Calculá medio día.", ["chicos","ciencia","lluvia"]],
    ["ocio", "Con chicos", "Planetario de Bogotá", "Centro", "Calle 26B # 5-93", 1, "El planetario con funciones de cúpula y un museo del espacio.", "Mirá los horarios.", ["chicos","ciencia","lluvia"]],
    ["ocio", "Con chicos", "Museo de los Niños", "Salitre y Simón Bolívar", "Carrera 48 # 63-97", 1, "Un museo para que los chicos aprendan jugando.", "Ideal para los más chicos.", ["chicos","lluvia"]],
    ["ocio", "Con chicos", "Divercity", "Usaquén", "Calle 185 # 45-03", 2, "Una ciudad en miniatura donde los chicos juegan a trabajar, dentro del Centro Comercial Santafé.", "Reservá el fin de semana.", ["chicos","lluvia"]]
  ];

  /* Barrios que se ofrecen en el filtro de Explorar (los más visitados). */
  city.filterBarrios = ["La Candelaria", "Centro", "Macarena y Centro Internacional", "Chapinero", "Zona Rosa y Zona T", "Parque de la 93", "Usaquén",
    "Salitre y Simón Bolívar", "Montaña y cerros"];

  filas.forEach(f => {
    const p = { cat: f[0], sub: f[1], name: f[2], barrio: f[3], address: f[4], price: f[5], desc: f[6], tip: f[7], tags: f[8] };
    if (f[9]) p.top = true;
    city.places.push(p);
  });
})();
