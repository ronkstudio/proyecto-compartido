/* Agenda fija de la sección "Hoy en Río de Janeiro" (tarjeta #203). Mismo formato que data/amsterdam-hoy.js.

   Río no tiene una agenda oficial abierta y al día que se pueda leer de forma automática. Por eso, como en Ámsterdam, "Hoy" junta:
     1. Los lugares que funcionan solo algunos días ("only" en data/rio-extra.js): la Feira Hippie de Ipanema.
     2. Esta agenda: algo puntual que pasa un día fijo en un lugar de la guía.

   Cada fila de agenda: { dias: [0 = domingo … 6 = sábado], franja: "dia" o "noche", lugar: id del lugar, que: qué pasa, fuente }.
     meses: [..] → solo en esos meses. Sin horarios exactos: la ficha remite al sitio oficial. Revisado el 18/11/2026. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.rio;
  if (!X) return;
  X.agenda = [
    { dias: [0], franja: "dia", lugar: "feira-hippie-de-ipanema", que: "Feria de artesanías, arte y comida bahiana en la Praça General Osório", fuente: "riotur.rio (ferias de la ciudad), 18/11/2026" },
    { dias: [1, 5], franja: "noche", lugar: "pedra-do-sal", que: "Roda de samba al aire libre, alrededor de la piedra", fuente: "guías de la ciudad y prensa local (fuente secundaria: confirmá antes de ir), 18/11/2026" }
  ];
  X.destacados = [];
})();
