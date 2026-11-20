/* Agenda fija de la sección "Hoy en Tokio" (tarjeta #216). Mismo formato que data/lisboa-hoy.js.

   Tokio no tiene una agenda oficial abierta y al día que se pueda leer de forma automática. Por eso, como en Lisboa, "Hoy" junta
   lo que pasa en una época fija en un lugar de la guía, y remite a GO TOKYO y al calendario del sumo para lo demás.

   Cada fila de agenda: { dias: [0 = domingo … 6 = sábado], franja: "dia" o "noche", lugar: id del lugar, que: qué pasa, fuente }.
     meses: [..] → solo en esos meses. Sin horarios exactos: la ficha remite al sitio oficial. Revisado el 19/11/2026. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.tokio;
  if (!X) return;
  X.agenda = [
    { dias: [0, 1, 2, 3, 4, 5, 6], meses: [1, 5, 9], franja: "dia", lugar: "ryogoku-kokugikan", que: "Mes de torneo de sumo en el Ryogoku Kokugikan: fijate en el calendario oficial si hoy hay combates", fuente: "sumo.or.jp, 19/11/2026" },
    { dias: [0, 1, 2, 3, 4, 5, 6], meses: [4], franja: "dia", lugar: "ueno-park", que: "Temporada de cerezos: picnics bajo los árboles en el parque de Ueno (sobre todo a principios de abril)", fuente: "gotokyo.org, 19/11/2026" }
  ];
  X.destacados = [];
})();
