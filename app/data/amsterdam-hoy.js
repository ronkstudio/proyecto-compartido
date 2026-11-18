/* Agenda fija de la sección "Hoy en Ámsterdam" (tarjeta #199). Mismo formato que data/roma-hoy.js.

   Ámsterdam no tiene una agenda oficial abierta y al día que se pueda leer de forma automática: la de la Municipalidad
   (api.data.amsterdam.nl, "evenementen") termina en 2022. Por eso, como en Roma, "Hoy" junta:
     1. Los lugares que funcionan solo algunos días ("only" en data/amsterdam-extra.js): Noordermarkt, Lindengracht y el mercado de libros del Spui.
     2. Esta agenda: algo puntual que pasa un día fijo en un lugar de la guía.

   Cada fila de agenda: { dias: [0 = domingo … 6 = sábado], franja: "dia" o "noche", lugar: id del lugar, que: qué pasa, fuente }.
     meses: [..] → solo en esos meses. Sin horarios exactos: la ficha remite al sitio oficial. Revisado el 18/11/2026. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.amsterdam;
  if (!X) return;
  const CG = "concertgebouw.nl (lunchconcerten: todas las semanas salvo julio y agosto, con entrada gratis online) y la agenda de iamsterdam.com (18/11/2026)";
  X.agenda = [
    { dias: [3], meses: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12], franja: "dia", lugar: "concertgebouw", que: "Concierto gratis al mediodía, con entrada gratis sacada online", fuente: CG },
    { dias: [1], franja: "dia", lugar: "noordermarkt", que: "Mercado de pulgas de los lunes a la mañana", fuente: "iamsterdam.com (mercados especiales) y guías de mercados de la ciudad, 18/11/2026" },
    { dias: [6], franja: "dia", lugar: "noordermarkt", que: "Mercado orgánico de los sábados", fuente: "iamsterdam.com (mercados especiales) y guías de mercados de la ciudad, 18/11/2026" }
  ];
  X.destacados = [];
})();
