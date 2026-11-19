/* Agenda fija de la sección "Hoy en Lisboa" (tarjeta #214). Mismo formato que data/bogota-hoy.js.

   Lisboa no tiene una agenda oficial abierta y al día que se pueda leer de forma automática. Por eso, como en Bogotá, "Hoy" junta:
     1. Los lugares que funcionan solo algunos días ("only" en data/lisboa-extra.js): la Feira da Ladra.
     2. Esta agenda: algo puntual que pasa un día fijo en un lugar de la guía.

   Cada fila de agenda: { dias: [0 = domingo … 6 = sábado], franja: "dia" o "noche", lugar: id del lugar, que: qué pasa, fuente }.
     meses: [..] → solo en esos meses. Sin horarios exactos: la ficha remite al sitio oficial. Revisado el 19/11/2026. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.lisboa;
  if (!X) return;
  X.agenda = [
    { dias: [2, 6], franja: "dia", lugar: "feira-da-ladra", que: "Feira da Ladra: el mercado de pulgas más antiguo de Lisboa, en el Campo de Santa Clara", fuente: "visitlisboa.com, 19/11/2026" },
    { dias: [0, 1, 2, 3, 4, 5, 6], meses: [6], franja: "noche", lugar: "alfama", que: "Fiestas de Lisboa: arraiais con sardinas asadas y música en las calles de Alfama", fuente: "visitlisboa.com y egeac.pt (Festas de Lisboa), 19/11/2026" }
  ];
  X.destacados = [];
})();
