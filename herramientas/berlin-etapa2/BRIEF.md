# Lugares de Berlín para la guía turística (proyecto ronkstudio/proyecto-compartido, carpeta app/)

La guía es una app web en castellano rioplatense (voseo: "andá", "llegá", "reservá"). Buenos Aires ya tiene 565 lugares.
Ahora hay que cargar Berlín con la MISMA estructura. Vos te encargás de UNA parte (te la indica tu tarea).

## Red: qué funciona
- SOLO funciona la herramienta WebSearch. WebFetch, curl y cualquier otra página están BLOQUEADOS en esta sesión: no los intentes.
- Usá WebSearch en modo "standard" casi siempre. "extended" solo si una búsqueda importante vuelve vacía o dudosa.
- Hacé varias búsquedas en el mismo turno cuando puedas (en paralelo).

## Reglas (obligatorias)
1. Solo lugares REALES y ABIERTOS hoy (noviembre de 2026). Berlín tuvo muchos cierres en 2024-2026 (por ejemplo, clubes como Watergate, Wilde Renate o ://about blank; Galeries Lafayette Berlín; el Pergamonmuseum está cerrado por obras hasta 2027). Si hay cualquier señal de cierre (buscá "<nombre> Berlin geschlossen", "<nombre> closed 2025"), no lo pongas. Si una sede se mudó, poné la dirección nueva.
2. Nada de precios exactos ni horarios exactos (ni "abre de 10 a 18", ni "la entrada cuesta 12 €"). Sí se puede decir "cierra los lunes", "conviene reservar", "entrada libre", "andá temprano".
3. Datos de salud (sin TACC/sin gluten, kosher, halal, alergias): SOLO si una fuente lo dice, y anotás la fuente.
4. Mínimo 4 lugares por cada tipo ("sub") que uses. Si no llegás a 4 en un tipo, juntalo con otro tipo de tu lista.
5. Nada inventado: si no encontrás la dirección, no lo pongas.
6. Variedad de barrios, y lo imprescindible primero.

## Formato de salida
Un archivo JSON (UTF-8) con un array. Cada elemento:
{
  "cat": "ver",                       // la categoría que te toca
  "sub": "Museo",                     // un tipo de la lista de tu tarea
  "name": "Isla de los Museos",       // nombre como lo diría un hispanohablante; usá el nombre en castellano si es habitual ("Puerta de Brandeburgo"), si no el original ("Markthalle Neun")
  "barrio": "Mitte",                  // uno de la lista de barrios de abajo
  "address": "Bodestraße 1-3",        // dirección real, en formato alemán (calle y número, o "Pariser Platz")
  "price": 0,                         // 0 = gratis, 1 = $, 2 = $$, 3 = $$$, 4 = $$$$, null = no aplica
  "desc": "...",                      // 1 o 2 oraciones, castellano rioplatense, máx. ~200 caracteres, qué es y por qué ir
  "tip": "...",                       // un consejo práctico, máx. ~160 caracteres, sin horarios ni precios exactos
  "tags": ["historia", "fotos"],      // 2 a 5 etiquetas en minúscula, preferí las de la lista de abajo
  "top": true,                        // solo para los 10-15 % más imprescindibles de tu parte
  "q": 3,                             // 3 = de lo mejor de la ciudad en su tipo (más o menos 1 de cada 4); omitilo si no
  "award": "Guía Michelin 2026 · 1 estrella",  // solo reconocimientos verificables (Michelin 2025 o 2026, Patrimonio UNESCO, The World's 50 Best Bars...). Omitilo si no hay
  "diet": ["vegano", "vegetariano"],  // solo comer: vegano, vegetariano, sin TACC, kosher, halal. Con fuente
  "dietFull": true,                   // solo si TODO el local es de esa dieta (100 % vegano, 100 % sin gluten, kosher certificado)
  "closed": [1],                      // días que suele cerrar (0 = domingo … 6 = sábado), solo si es seguro
  "only": [0],                        // días que SOLO funciona (por ejemplo, mercado de pulgas de los domingos), solo si es seguro
  "sources": ["https://..."],         // 1 a 3 URLs de lo que encontraste (sitio oficial, visitberlin.de, berlin.de, Michelin, Time Out, notas 2025-2026)
  "check": "abierto según su web y nota de 2026"   // qué verificaste, en pocas palabras
}

## Barrios permitidos
Mitte, Prenzlauer Berg, Friedrichshain, Kreuzberg, Neukölln, Charlottenburg, Schöneberg, Tiergarten,
y si el lugar queda en otro: Moabit, Wedding, Treptow, Lichtenberg, Pankow, Köpenick, Spandau, Steglitz, Zehlendorf, Wilmersdorf.
Lo que queda fuera de la ciudad (Potsdam, Sachsenhausen, Spreewald…): "Fuera de Berlín".

## Etiquetas preferidas (las que ya usa Buenos Aires)
clásico, lluvia, gratis, historia, arquitectura, vida de barrio, chicos, económico, café, fotos, naturaleza, compartir, arte, río, museo, caminar,
moderno, joya oculta, música, cócteles, fiesta, italiano, teatro, cine, helado, vegetariano, vegano, moda, al paso, vista, mirador, libros, tranquilo,
alta cocina, bar, noche, atardecer, vinos, cerveza, bici, ciencia, lujo, aire libre, tren, religioso, jardín, diseño, céntrico, mochileros, panadería,
boutique, antigüedades, merienda, degustación, asiático, pueblo, 5 estrellas, descuentos, celíacos, curiosidad, patio, brunch, dulce, cultura,
tragos, feria, speakeasy, jazz, tradición, terraza, fin de semana, desayuno, relajado, correr, kosher, halal, sin tacc, estadio, isla, bistró,
mercado, lgbt+, vintage, picnic, compras, domingo, hotel, pileta, lagos, palacio, memoria, muro, guerra fría, street art, techno, ópera, cabaret.
Para Berlín sumá también, cuando corresponda: muro, guerra fría, street art, techno, currywurst, döner, biergarten, lago, palacio, memoria.

## Estilo (ejemplos reales de Buenos Aires)
{"cat":"ver","sub":"Histórico","name":"Cementerio de la Recoleta","barrio":"Recoleta","address":"Junín 1760","price":1,
 "desc":"Un laberinto de mausoleos y esculturas donde descansan Evita y buena parte de la historia argentina. De los cementerios más lindos del mundo.",
 "tip":"Los visitantes no residentes pagan entrada. Al lado están la Basílica del Pilar y el Centro Cultural Recoleta.","tags":["historia","arquitectura","fotos"]}
{"cat":"ver","sub":"Cultura","name":"El Ateneo Grand Splendid","barrio":"Recoleta","address":"Av. Santa Fe 1860","price":0,
 "desc":"Una librería dentro de un antiguo teatro de 1919: palcos con estantes, cúpula pintada y un café sobre el escenario.",
 "tip":"Entrada libre. Subí a los palcos para la mejor foto.","tags":["libros","arquitectura","lluvia","fotos"]}
{"cat":"comer","sub":"Parrilla","name":"Don Julio","barrio":"Palermo","address":"Guatemala 4691","price":4,
 "desc":"La parrilla más premiada del país, con cortes madurados y una cava enorme de vinos argentinos.",
 "tip":"Reservá con mucha anticipación o andá temprano y esperá en la vereda con una copa de cortesía.","tags":["parrilla","carne","vinos"],"award":"Guía Michelin 2026 · 1 estrella"}

## Al terminar
- Guardá el JSON en la ruta que te indica tu tarea (usá la herramienta Write). Validá que sea JSON válido (por ejemplo con: node -e "JSON.parse(require('fs').readFileSync('RUTA','utf8'))").
- Tu respuesta final: corta. Cuántos lugares por tipo, cuáles dudosos dejaste afuera y por qué, y cualquier cosa que no pudiste confirmar.
