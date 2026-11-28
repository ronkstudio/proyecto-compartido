/* Agenda fija de la sección "Hoy en Pekín" (tarjeta #247). Mismo formato que data/tokio-hoy.js.

   Pekín no tiene una agenda oficial abierta y al día que se pueda leer de forma automática. Por eso, como en Tokio, "Hoy" junta
   lo que pasa todos los días o en una época fija en un lugar de la guía, y remite a Visit Beijing y al Gran Teatro Nacional para lo demás.

   Cada fila de agenda: { dias: [0 = domingo … 6 = sábado], franja: "dia" o "noche", lugar: id del lugar, que: qué pasa, fuente }.
     meses: [..] → solo en esos meses. Sin horarios exactos: la ficha remite al sitio oficial. Revisado el 26/11/2026. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.pekin;
  if (!X) return;
  X.agenda = [
    { dias: [0, 1, 2, 3, 4, 5, 6], franja: "dia", lugar: "izamiento-de-la-bandera-en-tiananmen", que: "Izamiento de la bandera en Tiananmen al salir el sol: hay que reservar antes, con el pasaporte", fuente: "english.beijing.gov.cn, 14/4/2023 y 23/9/2024" },
    { dias: [0, 1, 2, 3, 4, 5, 6], franja: "dia", lugar: "teatro-chaoyang", que: "Función diaria de acrobacia china en el Teatro Chaoyang: sacá entrada antes", fuente: "chaoyangtheatre.com, 28/11/2026" },
    { dias: [0, 1, 2, 3, 4, 5, 6], meses: [9, 10], franja: "dia", lugar: "plaza-de-tiananmen", que: "La plaza de Tiananmen se decora con flores para el Día Nacional, el 1 de octubre", fuente: "english.beijing.gov.cn, 24/9/2024" }
  ];
  X.destacados = [];
})();
