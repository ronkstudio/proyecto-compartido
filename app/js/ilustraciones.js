/* Ilustraciones para los lugares sin foto (tarjeta #235).
   Una escena dibujada por tipo de lugar (café, restaurante, bar, museo, mercado, playa…), en líneas blancas con rellenos suaves.
   Se dibujan sobre el color del tipo de lugar y el dibujo propio de cada ciudad (css/styles.css, .media.noph).
   Uso: window.ILUS.escena(lugar) da el nombre de la escena; window.ILUS.svg(nombre, "slice" | "meet") da el <svg> listo.
   Las escenas están en un solo <svg> escondido al principio de la página; cada tarjeta lo reutiliza con <use>. */
(() => {
  "use strict";
  /* Trazos y rellenos (todo en currentColor: el color lo pone el CSS). */
  const L = 'fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"';
  const T = 'fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".7"';
  const A = 'fill="currentColor" fill-opacity=".12"';
  const B = 'fill="currentColor" fill-opacity=".24"';
  const C = 'fill="currentColor" fill-opacity=".5"';
  const W = 'fill="currentColor"';
  const suelo = '<path ' + L + ' d="M8 140H232"/>';
  const estrellas = (pts) => pts.map(p => '<circle ' + W + ' fill-opacity=".85" cx="' + p[0] + '" cy="' + p[1] + '" r="' + (p[2] || 1.4) + '"/>').join("");

  const E = {
    /* Café: ventana, lámpara colgante, taza humeante y una planta. */
    cafe:
      '<rect ' + A + ' x="26" y="30" width="52" height="66" rx="26"/><path ' + L + ' d="M26 96V56a26 26 0 0 1 52 0v40zM52 30v66M26 66h52"/>' +
      '<path ' + T + ' d="M120 0v26"/><path ' + B + ' d="M104 42l6-14h20l6 14z"/><path ' + L + ' d="M104 42l6-14h20l6 14z"/><circle ' + W + ' cx="120" cy="47" r="4"/>' +
      '<path ' + A + ' d="M96 98h48v12a22 22 0 0 1-22 22h-4a22 22 0 0 1-22-22z"/><path ' + L + ' d="M96 98h48v12a22 22 0 0 1-22 22h-4a22 22 0 0 1-22-22z"/>' +
      '<path ' + L + ' d="M144 104c12 0 12 16-2 16"/><path ' + B + ' d="M84 134h72l-6 6H90z"/><path ' + L + ' d="M84 134h72"/>' +
      '<path ' + T + ' d="M108 90c-6-6 6-10 0-18M120 88c-6-7 6-11 0-20M132 90c-6-6 6-10 0-18"/>' +
      '<path ' + B + ' d="M184 118h22l-3 22h-16z"/><path ' + L + ' d="M184 118h22l-3 22h-16zM195 118c0-14-10-20-16-22M195 118c0-12 8-20 16-24M195 118v-28"/>' + suelo,

    /* Restaurante: mantel, plato con cubiertos, copa, vela y dos lámparas. */
    restaurante:
      '<path ' + T + ' d="M70 0v20M170 0v20"/><path ' + B + ' d="M60 30a10 10 0 0 1 20 0z"/><path ' + B + ' d="M160 30a10 10 0 0 1 20 0z"/>' +
      '<path ' + L + ' d="M60 30a10 10 0 0 1 20 0zM160 30a10 10 0 0 1 20 0z"/><circle ' + W + ' cx="70" cy="34" r="2.5"/><circle ' + W + ' cx="170" cy="34" r="2.5"/>' +
      '<path ' + A + ' d="M22 112h196l-8 28H30z"/><path ' + L + ' d="M22 112h196M30 140l-8-28M210 140l8-28"/>' +
      '<ellipse ' + B + ' cx="120" cy="106" rx="36" ry="9"/><ellipse ' + L + ' cx="120" cy="106" rx="36" ry="9"/><ellipse ' + T + ' cx="120" cy="106" rx="22" ry="5"/>' +
      '<path ' + L + ' d="M72 86v24M67 86v8a5 5 0 0 0 10 0v-8M168 86c6 4 6 14 0 18v6"/>' +
      '<path ' + B + ' d="M186 72c0 16 20 16 20 0z"/><path ' + L + ' d="M186 72c0 16 20 16 20 0zM196 84v22M188 108h16"/>' +
      '<rect ' + B + ' x="38" y="88" width="8" height="20" rx="2"/><path ' + L + ' d="M38 108V88h8v20"/><path ' + W + ' d="M42 76c4 4 4 8 0 10-4-2-4-6 0-10z"/>',

    /* Bar: estante con botellas, luna, barra y una copa de cóctel. */
    bar:
      '<path ' + B + ' d="M196 22a16 16 0 1 0 12 26 13 13 0 1 1-12-26z"/><path ' + L + ' d="M196 22a16 16 0 1 0 12 26 13 13 0 1 1-12-26z"/>' +
      estrellas([[160, 20], [176, 46, 1], [222, 30], [140, 34, 1]]) +
      '<path ' + L + ' d="M24 62h104"/>' +
      '<path ' + A + ' d="M32 62V44l4-6v-8h4v8l4 6v18z"/><path ' + B + ' d="M54 62V40h10v22z"/><path ' + A + ' d="M74 62V46l5-8v-6h4v6l5 8v16z"/><path ' + B + ' d="M98 62V48h12v14z"/>' +
      '<path ' + T + ' d="M32 62V44l4-6v-8h4v8l4 6v18M54 62V40h10v22M74 62V46l5-8v-6h4v6l5 8v16M98 62V48h12v14"/>' +
      '<path ' + B + ' d="M14 114h212v26H14z"/><path ' + L + ' d="M14 114h212M14 122h212"/>' +
      '<path ' + A + ' d="M100 64h40l-20 24z"/><path ' + L + ' d="M100 64h40l-20 24zM120 88v22M108 112h24M136 56l-14 18"/><circle ' + W + ' cx="128" cy="70" r="3.5"/>',

    /* Música en vivo: escenario con luces, guitarra y notas. */
    musica:
      '<path ' + A + ' d="M70 0l-24 140h60zM170 0l-36 140h60z"/>' +
      '<path ' + B + ' d="M24 128h192v12H24z"/><path ' + L + ' d="M24 128h192"/>' +
      '<circle ' + B + ' cx="120" cy="108" r="17"/><circle ' + B + ' cx="120" cy="84" r="12"/><path ' + L + ' d="M120 125a17 17 0 1 1 0-34 12 12 0 1 1 0-24 12 12 0 1 1 0 24 17 17 0 1 1 0 34z"/>' +
      '<circle ' + L + ' cx="120" cy="102" r="5"/><path ' + L + ' d="M117 72V28h6v44M114 28h12l-2-8h-8z"/><path ' + T + ' d="M120 96v-60"/>' +
      '<path ' + L + ' d="M58 66v-24l16-4v24"/><circle ' + W + ' cx="54" cy="66" r="5"/><circle ' + W + ' cx="70" cy="62" r="5"/>' +
      '<path ' + L + ' d="M186 56V34"/><circle ' + W + ' cx="182" cy="56" r="5"/><path ' + L + ' d="M186 34c6 2 8 6 6 12"/>' +
      '<path ' + L + ' d="M196 128V88M188 84h16v6h-16z"/>',

    /* Museo: cuadro con su luz, banco y cordones. */
    museo:
      '<path ' + T + ' d="M90 18h60"/><path ' + A + ' d="M96 20l-20 70h88l-20-70z"/>' +
      '<rect ' + B + ' x="74" y="34" width="92" height="62" rx="2"/><rect ' + L + ' x="74" y="34" width="92" height="62" rx="2"/>' +
      '<rect ' + A + ' x="84" y="44" width="72" height="42"/><path ' + L + ' d="M84 44h72v42H84z"/><path ' + B + ' d="M84 86l22-22 14 12 12-10 24 20z"/><circle ' + W + ' cx="140" cy="56" r="5"/>' +
      '<path ' + B + ' d="M90 116h60v6H90z"/><path ' + L + ' d="M90 116h60v6H90zM96 122v18M144 122v18"/>' +
      '<path ' + L + ' d="M30 140v-30M210 140v-30M30 112c14 10 26 10 40 0M170 112c14 10 26 10 40 0M70 140v-30M170 140v-30"/>' +
      '<circle ' + W + ' cx="30" cy="108" r="3"/><circle ' + W + ' cx="70" cy="108" r="3"/><circle ' + W + ' cx="170" cy="108" r="3"/><circle ' + W + ' cx="210" cy="108" r="3"/>' + suelo,

    /* Monumento: fachada con columnas, escalinata y sol. */
    monumento:
      '<circle ' + B + ' cx="196" cy="34" r="14"/><circle ' + L + ' cx="196" cy="34" r="14"/>' +
      '<path ' + T + ' d="M30 40l6 4 6-4M48 30l5 3 5-3"/>' +
      '<path ' + B + ' d="M64 56l56-28 56 28z"/><path ' + L + ' d="M64 56l56-28 56 28zM58 56h124v10H58z"/><circle ' + L + ' cx="120" cy="46" r="5"/>' +
      '<path ' + A + ' d="M70 66h100v54H70z"/>' +
      [76, 98, 120, 142, 164].map(x => '<path ' + L + ' d="M' + (x - 5) + ' 120V70h10v50"/><path ' + T + ' d="M' + x + ' 72v46"/>').join("") +
      '<path ' + B + ' d="M60 120h120v8H60zM52 128h136v12H52z"/><path ' + L + ' d="M60 120h120v8H60zM52 128h136v12"/>' + suelo,

    /* Iglesia: cúpula, campanario y puerta. */
    iglesia:
      '<path ' + A + ' d="M84 84h72v56H84z"/><path ' + L + ' d="M84 140V84h72v56"/>' +
      '<path ' + B + ' d="M92 84a28 28 0 0 1 56 0z"/><path ' + L + ' d="M92 84a28 28 0 0 1 56 0zM120 56V40M114 46h12"/>' +
      '<path ' + B + ' d="M108 140v-24a12 12 0 0 1 24 0v24z"/><path ' + L + ' d="M108 140v-24a12 12 0 0 1 24 0v24"/>' +
      '<path ' + L + ' d="M94 108v-8a5 5 0 0 1 10 0v8zM136 108v-8a5 5 0 0 1 10 0v8z"/>' +
      '<path ' + A + ' d="M44 140V64h26v76z"/><path ' + L + ' d="M44 140V64h26v76M44 64l13-20 13 20M52 84v-6a5 5 0 0 1 10 0v6z"/>' +
      '<path ' + A + ' d="M170 140v-34h30v34z"/><path ' + L + ' d="M170 140v-34h30v34M166 106l19-14 19 14"/>' + suelo,

    /* Santuario japonés: torii y sol. */
    torii:
      '<circle ' + A + ' cx="120" cy="72" r="40"/><circle ' + T + ' cx="120" cy="72" r="40"/>' +
      '<path ' + C + ' d="M50 40c46-10 94-10 140 0l-4 10c-44-8-88-8-132 0z"/><path ' + L + ' d="M50 40c46-10 94-10 140 0l-4 10c-44-8-88-8-132 0z"/>' +
      '<path ' + B + ' d="M68 62h104v8H68z"/><path ' + L + ' d="M68 62h104v8H68zM116 50v12h8V50"/>' +
      '<path ' + B + ' d="M80 50h10v90H80zM150 50h10v90h-10z"/><path ' + L + ' d="M80 140V50h10v90M150 140V50h10v90"/>' +
      '<path ' + L + ' d="M76 140h18M146 140h18"/><path ' + T + ' d="M30 120c10-6 20-6 30 0M180 116c10-6 20-6 30 0"/>' + suelo,

    /* Parque: lomas, árboles, sol y un banco. */
    parque:
      '<circle ' + B + ' cx="184" cy="36" r="13"/><circle ' + L + ' cx="184" cy="36" r="13"/>' +
      '<path ' + A + ' d="M0 110c40-26 80-26 120-6s80 18 120-8v44H0z"/>' +
      '<circle ' + B + ' cx="72" cy="80" r="24"/><circle ' + L + ' cx="72" cy="80" r="24"/><path ' + L + ' d="M72 104v36M72 112l-8-8M72 118l9-9"/>' +
      '<path ' + B + ' d="M150 44l22 40h-12l16 28h-52l16-28h-12z"/><path ' + L + ' d="M150 44l22 40h-12l16 28h-52l16-28h-12zM150 112v28"/>' +
      '<path ' + B + ' d="M188 118h32v5h-32z"/><path ' + L + ' d="M188 118h32v5h-32zM192 123v17M216 123v17M188 110h32"/>' +
      '<path ' + T + ' d="M100 140c10-10 20-14 40-16"/>' + suelo,

    /* Playa: sol en el horizonte, olas, sombrilla y palmera. */
    playa:
      '<path ' + B + ' d="M120 104a34 34 0 0 1 68 0z"/><path ' + L + ' d="M120 104a34 34 0 0 1 68 0"/>' +
      '<path ' + L + ' d="M8 104h224"/><path ' + T + ' d="M20 114c10-6 20 6 30 0s20-6 30 0M110 116c10-6 20 6 30 0s20-6 30 0M60 124c10-6 20 6 30 0"/>' +
      '<path ' + A + ' d="M0 130c60-10 140-10 240 0v10H0z"/>' +
      '<path ' + B + ' d="M30 88c10-22 50-22 60 0z"/><path ' + L + ' d="M30 88c10-22 50-22 60 0zM60 70v66M45 88c4-10 10-16 15-18M75 88c-4-10-10-16-15-18"/>' +
      '<path ' + L + ' d="M206 140c-4-30-2-52 6-72"/><path ' + B + ' d="M212 68c-14-8-30-6-38 4 14-2 26 0 38-4zM212 68c10-12 26-14 34-6-12 0-24 2-34 6zM212 68c-4-14-16-20-28-18 12 4 20 10 28 18z"/><path ' + L + ' d="M212 68c-14-8-30-6-38 4M212 68c10-12 26-14 34-6M212 68c-4-14-16-20-28-18"/>' + suelo,

    /* Mercado: puesto con toldo a rayas, cajones de frutas y balanza. */
    mercado:
      '<path ' + B + ' d="M44 40h152v16c-7.6 8-11.4 8-19 0-7.6 8-11.4 8-19 0-7.6 8-11.4 8-19 0-7.6 8-11.4 8-19 0-7.6 8-11.4 8-19 0-7.6 8-11.4 8-19 0-7.6 8-11.4 8-19 0-7.6 8-11.4 8-19 0z"/>' +
      '<path ' + L + ' d="M44 40h152v16c-7.6 8-11.4 8-19 0-7.6 8-11.4 8-19 0-7.6 8-11.4 8-19 0-7.6 8-11.4 8-19 0-7.6 8-11.4 8-19 0-7.6 8-11.4 8-19 0-7.6 8-11.4 8-19 0-7.6 8-11.4 8-19 0zM40 40l8-14h144l8 14"/>' +
      [63, 101, 139, 177].map(x => '<path ' + C + ' d="M' + (x - 9.5) + ' 40h19v16c-3.8 4-15.2 4-19 0z"/>').join("") +
      '<path ' + L + ' d="M50 60v80M190 60v80"/><path ' + A + ' d="M50 104h140v36H50z"/><path ' + L + ' d="M50 104h140"/>' +
      '<path ' + L + ' d="M60 104l4-16h40l4 16M130 104l4-16h40l4 16"/>' +
      [[72, 84], [82, 82], [92, 84], [77, 76], [87, 76], [142, 84], [152, 82], [162, 84], [147, 77], [157, 77]].map(c => '<circle ' + B + ' cx="' + c[0] + '" cy="' + c[1] + '" r="5"/><circle ' + T + ' cx="' + c[0] + '" cy="' + c[1] + '" r="5"/>').join("") +
      '<path ' + T + ' d="M60 116h24M60 124h24M156 116h24M156 124h24"/>' + suelo,

    /* Tienda: fachada con toldo, vidriera y bolsas de compras. */
    tienda:
      '<path ' + A + ' d="M48 36h144v104H48z"/><path ' + L + ' d="M48 140V36h144v104"/><path ' + B + ' d="M48 36h144v10H48z"/>' +
      '<path ' + B + ' d="M44 56h152l-6 16H50z"/><path ' + L + ' d="M44 56h152l-6 16H50z"/>' + [70, 96, 122, 148, 174].map(x => '<path ' + T + ' d="M' + x + ' 56l-2 16"/>').join("") +
      '<rect ' + A + ' x="58" y="80" width="62" height="44" rx="2"/><rect ' + L + ' x="58" y="80" width="62" height="44" rx="2"/>' +
      '<path ' + T + ' d="M66 124v-14h12v14M86 124v-22h10v22M104 124v-10h10v10"/>' +
      '<path ' + B + ' d="M132 80h26v60h-26z"/><path ' + L + ' d="M132 140V80h26v60"/><circle ' + W + ' cx="152" cy="112" r="2"/>' +
      '<path ' + B + ' d="M168 110h22l3 30h-28z"/><path ' + L + ' d="M168 110h22l3 30h-28zM173 110c0-10 12-10 12 0"/>' +
      '<path ' + C + ' d="M190 120h18l2 20h-22z"/><path ' + L + ' d="M190 120h18l2 20h-22zM194 120c0-8 10-8 10 0"/>' + suelo,

    /* Hotel: edificio con ventanas encendidas, luna y entrada con marquesina. */
    hotel:
      '<path ' + B + ' d="M42 22a12 12 0 1 0 10 19 10 10 0 1 1-10-19z"/><path ' + L + ' d="M42 22a12 12 0 1 0 10 19 10 10 0 1 1-10-19z"/>' + estrellas([[70, 18], [200, 26], [214, 50, 1]]) +
      '<path ' + A + ' d="M74 26h92v114H74z"/><path ' + L + ' d="M74 140V26h92v114M70 26h100"/>' +
      [0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => {
        const x = 84 + c * 20, y = 36 + r * 20, lit = (r * 4 + c) % 3 === 0;
        return '<rect ' + (lit ? C : A) + ' x="' + x + '" y="' + y + '" width="12" height="12" rx="1"/><rect ' + T + ' x="' + x + '" y="' + y + '" width="12" height="12" rx="1"/>';
      }).join("")).join("") +
      '<path ' + B + ' d="M100 116h40l6 8h-52z"/><path ' + L + ' d="M100 116h40l6 8h-52zM108 124v16M132 124v16"/>' +
      '<circle ' + B + ' cx="52" cy="118" r="12"/><circle ' + L + ' cx="52" cy="118" r="12"/><path ' + L + ' d="M52 130v10"/>' +
      '<circle ' + B + ' cx="190" cy="118" r="12"/><circle ' + L + ' cx="190" cy="118" r="12"/><path ' + L + ' d="M190 130v10"/>' + suelo,

    /* Tour: mapa plegado con un recorrido punteado y un pin. */
    tour:
      '<path ' + A + ' d="M40 42l54-14 52 14 54-14v96l-54 14-52-14-54 14z"/><path ' + L + ' d="M40 42l54-14 52 14 54-14v96l-54 14-52-14-54 14zM94 28v96M146 42v96"/>' +
      '<path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="1 7" d="M58 112c14-20 30-6 44-26s30-6 44-10 20-24 34-30"/>' +
      '<circle ' + W + ' cx="58" cy="112" r="4"/>' +
      '<path ' + C + ' d="M180 44c0-12 18-12 18 0 0 9-9 17-9 17s-9-8-9-17z"/><path ' + L + ' d="M180 44c0-12 18-12 18 0 0 9-9 17-9 17s-9-8-9-17z"/><circle ' + W + ' cx="189" cy="44" r="3"/>' +
      '<circle ' + B + ' cx="70" cy="62" r="13"/><circle ' + L + ' cx="70" cy="62" r="13"/><path ' + W + ' d="M70 52l4 10-4 10-4-10z"/>' +
      '<path ' + T + ' d="M106 104h28M106 112h20M156 56h12"/>',

    /* Excursión: montañas, camino que se pierde en el horizonte y sol. */
    excursion:
      '<circle ' + B + ' cx="62" cy="38" r="13"/><circle ' + L + ' cx="62" cy="38" r="13"/>' +
      '<path ' + A + ' d="M0 100l46-46 30 26 44-50 50 52 26-20 44 38z"/>' +
      '<path ' + L + ' d="M0 100l46-46 30 26 44-50 50 52 26-20 44 38"/><path ' + C + ' d="M108 44l12-14 14 14-6 4-8-4-6 4z"/><path ' + C + ' d="M36 64l10-10 10 10-5 3-5-3z"/>' +
      '<path ' + B + ' d="M0 100h240v40H0z"/>' +
      '<path ' + A + ' d="M112 100h16l40 40H72z"/><path ' + L + ' d="M112 100l-40 40M128 100l40 40"/><path fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="6 7" d="M120 102v38"/>' +
      '<path ' + L + ' d="M196 140v-26l-8 8M196 122l8-8"/><path ' + T + ' d="M24 120l10-10 10 10M34 110v20"/>' + suelo,

    /* Estadio: tribunas, reflectores, cancha y pelota. */
    estadio:
      '<path ' + A + ' d="M24 98c0-30 192-30 192 0v42H24z"/><path ' + L + ' d="M24 140V98c0-30 192-30 192 0v42"/><path ' + T + ' d="M30 104c30-22 150-22 180 0M28 112c34-20 150-20 184 0"/>' +
      '<path ' + L + ' d="M38 92V30M202 92V30"/><path ' + B + ' d="M28 18h20v14H28zM192 18h20v14h-20z"/><path ' + L + ' d="M28 18h20v14H28zM192 18h20v14h-20z"/>' +
      '<path ' + A + ' d="M40 0L28 18h20zM200 0l-8 18h20z"/>' +
      '<path ' + B + ' d="M40 120h160v20H40z"/><path ' + L + ' d="M40 120h160M120 120v20"/><path ' + T + ' d="M106 140a14 8 0 0 1 28 0"/>' +
      '<circle ' + W + ' fill-opacity=".9" cx="150" cy="128" r="8"/><path fill="none" stroke="currentColor" stroke-width="1.2" stroke-opacity=".5" d="M146 124l4 3 4-3M147 133l3-3 3 3"/>' + suelo,

    /* Teatro: telón, bambalina y foco sobre el escenario. */
    teatro:
      '<path ' + B + ' d="M20 18h200v14c-10 8-15 8-25 0-10 8-15 8-25 0-10 8-15 8-25 0-10 8-15 8-25 0-10 8-15 8-25 0-10 8-15 8-25 0-10 8-15 8-25 0-10 8-15 8-25 0z"/><path ' + L + ' d="M20 18h200v14c-10 8-15 8-25 0-10 8-15 8-25 0-10 8-15 8-25 0-10 8-15 8-25 0-10 8-15 8-25 0-10 8-15 8-25 0-10 8-15 8-25 0-10 8-15 8-25 0z"/>' +
      '<path ' + C + ' d="M20 36h46c-6 30-2 70 12 98H20z"/><path ' + C + ' d="M220 36h-46c6 30 2 70-12 98h58z"/>' +
      '<path ' + L + ' d="M20 36h46c-6 30-2 70 12 98H20M220 36h-46c6 30 2 70-12 98h58"/><path ' + T + ' d="M34 40c-2 30 0 66 8 94M50 40c-4 30-2 66 10 94M206 40c2 30 0 66-8 94M190 40c4 30 2 66-10 94"/>' +
      '<ellipse ' + A + ' cx="120" cy="128" rx="40" ry="8"/><path ' + A + ' d="M110 36h20l30 92H80z"/>' +
      '<path ' + B + ' d="M10 134h220v6H10z"/><path ' + L + ' d="M10 134h220"/>',

    /* Fiesta / entretenimiento: guirnalda de banderines, luces y confeti. */
    fiesta:
      '<path ' + L + ' d="M10 24c40 24 80 24 110 0M120 24c30 24 70 24 110 0"/>' +
      [[26, 32], [48, 40], [72, 43], [96, 38], [140, 38], [164, 43], [188, 40], [212, 32]].map((p, i) => '<path ' + (i % 2 ? C : B) + ' d="M' + (p[0] - 7) + ' ' + p[1] + 'h14l-7 14z"/><path ' + T + ' d="M' + (p[0] - 7) + ' ' + p[1] + 'h14l-7 14z"/>').join("") +
      '<path ' + T + ' d="M30 70c30 14 60 14 90 0s60-14 90 0"/>' + [40, 66, 92, 120, 148, 174, 200].map((x, i) => '<circle ' + W + ' fill-opacity=".85" cx="' + x + '" cy="' + (i % 2 ? 78 : 74) + '" r="3"/>').join("") +
      '<path ' + B + ' d="M60 108h120v32H60z"/><path ' + L + ' d="M60 140v-32h120v32"/><path ' + A + ' d="M84 108l36-24 36 24z"/><path ' + L + ' d="M84 108l36-24 36 24"/>' +
      '<path ' + T + ' d="M30 100l6-4M210 96l-5 6M40 120l4 4M200 118l-4 4M120 58l0 6"/>' + suelo,

    /* Heladería: cucurucho con dos bochas. */
    helado:
      '<path ' + A + ' d="M30 140c20-50 60-80 90-80s70 30 90 80z"/>' +
      '<path ' + B + ' d="M100 86h40l-20 54z"/><path ' + L + ' d="M100 86h40l-20 54z"/><path ' + T + ' d="M106 96l26 14M104 90l30 34M134 96l-26 14M136 90l-28 34"/>' +
      '<circle ' + B + ' cx="120" cy="76" r="20"/><circle ' + L + ' cx="120" cy="76" r="20"/><circle ' + C + ' cx="120" cy="48" r="16"/><circle ' + L + ' cx="120" cy="48" r="16"/>' +
      '<path ' + L + ' d="M104 86c2 8 8 6 8 0M128 86c2 10 8 8 8 2"/><circle ' + W + ' cx="124" cy="30" r="4"/><path ' + L + ' d="M124 26c2-6 6-8 10-8"/>' +
      estrellas([[60, 50], [180, 44], [196, 72, 1], [46, 80, 1]]) + suelo,

    /* Pastelería: torta en su plato alto. */
    dulce:
      '<path ' + A + ' d="M40 140c10-40 50-64 80-64s70 24 80 64z"/>' +
      '<path ' + B + ' d="M78 72h84v18H78zM74 90h92v20H74z"/><path ' + L + ' d="M78 72h84v18H78zM74 90h92v20H74z"/>' +
      '<path ' + L + ' d="M78 76c7 8 14 8 21 0 7 8 14 8 21 0 7 8 14 8 21 0 7 8 14 8 21 0"/><path ' + T + ' d="M74 100h92"/>' +
      '<circle ' + W + ' cx="98" cy="64" r="5"/><circle ' + W + ' cx="120" cy="62" r="5"/><circle ' + W + ' cx="142" cy="64" r="5"/>' +
      '<path ' + B + ' d="M64 110h112l-6 6H70z"/><path ' + L + ' d="M64 110h112M120 116v18M104 140h32"/>' + suelo,

    /* Mirador: baranda en primer plano, ciudad a lo lejos y un largavista. */
    mirador:
      '<circle ' + B + ' cx="186" cy="34" r="13"/><circle ' + L + ' cx="186" cy="34" r="13"/>' +
      '<path ' + A + ' d="M0 96h20V78h12v18h10V64h14v32h12V84h16v12h14V58h12l6-10 6 10v38h14V74h18v22h14V82h12v14h14V70h14v26h12v44H0z"/>' +
      '<path ' + T + ' d="M0 96h20V78h12v18h10V64h14v32h12V84h16v12h14V58h12l6-10 6 10v38h14V74h18v22h14V82h12v14h14V70h14v26h12"/>' +
      '<path ' + B + ' d="M0 118h240v22H0z"/><path ' + L + ' d="M0 108h240M0 118h240"/>' + [20, 60, 100, 140, 180, 220].map(x => '<path ' + L + ' d="M' + x + ' 108v32"/>').join("") +
      '<path ' + C + ' d="M150 80h26l4 10h-34z"/><path ' + L + ' d="M150 80h26l4 10h-34zM163 90v18M156 108h14"/><circle ' + W + ' cx="152" cy="85" r="3"/>',

    /* Barco: velero sobre las olas y gaviotas. */
    barco:
      '<circle ' + B + ' cx="190" cy="34" r="13"/><circle ' + L + ' cx="190" cy="34" r="13"/><path ' + T + ' d="M40 34l6 4 6-4M60 24l5 3 5-3"/>' +
      '<path ' + B + ' d="M118 28v70H72z"/><path ' + C + ' d="M124 36v62h40z"/><path ' + L + ' d="M118 22v84M118 28v70H72zM124 36v62h40z"/>' +
      '<path ' + B + ' d="M64 104h112l-14 18H78z"/><path ' + L + ' d="M64 104h112l-14 18H78z"/>' +
      '<path ' + A + ' d="M0 122c20-8 40 8 60 0s40-8 60 0 40 8 60 0 40-8 60 0v18H0z"/><path ' + L + ' d="M0 122c20-8 40 8 60 0s40-8 60 0 40 8 60 0 40-8 60 0"/>' +
      '<path ' + T + ' d="M20 134c10-4 20 4 30 0M140 134c10-4 20 4 30 0"/>',

    /* Termas: pileta humeante entre piedras. */
    termas:
      '<path ' + T + ' d="M92 70c-8-10 8-16 0-28M120 66c-8-10 8-16 0-30M148 70c-8-10 8-16 0-28"/>' +
      '<ellipse ' + B + ' cx="120" cy="110" rx="80" ry="18"/><ellipse ' + L + ' cx="120" cy="110" rx="80" ry="18"/><path ' + T + ' d="M70 112c10-4 20 4 30 0M130 114c10-4 20 4 30 0"/>' +
      '<path ' + C + ' d="M30 110c0-14 22-18 30-8 4 8-2 16-14 16s-16-2-16-8zM182 104c4-12 26-12 28 0 2 10-8 14-18 12s-12-6-10-12z"/>' +
      '<path ' + L + ' d="M30 110c0-14 22-18 30-8 4 8-2 16-14 16s-16-2-16-8zM182 104c4-12 26-12 28 0 2 10-8 14-18 12s-12-6-10-12z"/>' +
      '<path ' + T + ' d="M106 84c-6-8 6-12 0-22M134 84c-6-8 6-12 0-22"/><circle ' + B + ' cx="196" cy="34" r="12"/><circle ' + L + ' cx="196" cy="34" r="12"/>' + suelo
  };

  /* Qué escena le toca a cada lugar: primero por el tipo (palabras clave), si no, por la categoría. */
  const POR_TIPO = [
    [/helad|gelat/i, "helado"], [/caf[eé]|casa de t[eé]|\btea\b/i, "cafe"], [/pasteler|panader|dulce|churro|torta|confiter/i, "dulce"],
    [/fado|tango|samba|salsa|jazz|música|musica|concierto|ópera|\bopera\b|milonga|escuelas de samba/i, "musica"],
    [/\bbar\b|cóctel|coctel|cocktail|cervec|vino|vinho|boteco|\bpub\b|vermut|izakaya|boliche|\bclub\b|bailar|discotec|biergarten/i, "bar"],
    [/teatro|\bcine\b|show/i, "teatro"], [/museo|galer[ií]a|\barte\b/i, "museo"], [/iglesia|catedral|bas[ií]lica/i, "iglesia"],
    [/santuario|templos y/i, "torii"], [/mirador|vista/i, "mirador"], [/playa|praia|islas/i, "playa"],
    [/barco|crucero|náutic|nautic|\bbote\b/i, "barco"], [/termas|\bspa\b|onsen|baños/i, "termas"],
    [/parque|jard[ií]n|naturaleza|bosque|sendero|reserva|lagos?\b|cerro|bici|pedalear|correr|ciclo/i, "parque"], [/mercado|feria|feira|pulgas/i, "mercado"],
    [/f[uú]tbol|estadio|sumo|polo|turf|hip[oó]dromo/i, "estadio"]
  ];
  const POR_CATEGORIA = { ver: "monumento", comer: "restaurante", noche: "bar", tours: "tour", escapadas: "excursion", dormir: "hotel",
    compras: "tienda", deporte: "estadio", ocio: "fiesta" };
  /* Eventos del año (calendario): la escena según su ícono; si no está, fiesta. */
  const POR_ICONO = { "🎬": "teatro", "🎭": "teatro", "🎸": "musica", "🎶": "musica", "🎵": "musica", "🎧": "bar", "💃": "musica", "🎨": "museo", "🖼️": "museo",
    "🏛️": "monumento", "⚽": "estadio", "🏃": "parque", "🌳": "parque", "🌹": "parque", "🌸": "parque", "🏖️": "playa", "🍷": "restaurante", "🍺": "bar",
    "🍸": "bar", "☕": "cafe", "🧺": "mercado", "🛍️": "tienda", "⛵": "barco", "🚆": "excursion", "🌇": "mirador" };
  const escenaEvento = icono => POR_ICONO[icono] || "fiesta";
  const escena = p => { const t = (POR_TIPO.find(k => k[0].test(p.sub || "")) || [])[1]; return t || POR_CATEGORIA[p.cat] || "monumento"; };

  /* "slice": llena la tarjeta (se recorta lo que sobra); "meet": entra entera, a la derecha (ficha); "mini": la parte central, entera (miniaturas de la lista). */
  const svg = (nombre, modo) => '<svg class="ilus" viewBox="' + (modo === "mini" ? "60 0 120 160" : "0 0 240 160") + '" preserveAspectRatio="' + (modo === "meet" ? "xMaxYMax meet" : "xMidYMax slice") +
    '" aria-hidden="true" focusable="false"><use href="#il-' + (E[nombre] ? nombre : "monumento") + '" x="0" y="0" width="240" height="160"/></svg>';

  const sprite = '<svg id="ilus-sprite" xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">' +
    Object.keys(E).map(k => '<symbol id="il-' + k + '" viewBox="0 0 240 160">' + E[k] + "</symbol>").join("") + "</svg>";
  const poner = () => { if (!document.getElementById("ilus-sprite")) document.body.insertAdjacentHTML("afterbegin", sprite); };
  if (document.body) poner(); else document.addEventListener("DOMContentLoaded", poner);

  window.ILUS = { escena, escenaEvento, svg, nombres: Object.keys(E) };
})();
