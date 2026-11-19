/* Agenda fija de la sección "Hoy en Bogotá" (tarjeta #204). Mismo formato que data/amsterdam-hoy.js.

   Bogotá no tiene una agenda oficial abierta y al día que se pueda leer de forma automática. Por eso, como en Ámsterdam, "Hoy" junta:
     1. Los lugares que funcionan solo algunos días ("only" en data/bogota-extra.js): la Ciclovía y los mercados de pulgas de Usaquén y San Alejo.
     2. Esta agenda: algo puntual que pasa un día fijo en un lugar de la guía.

   Cada fila de agenda: { dias: [0 = domingo … 6 = sábado], franja: "dia" o "noche", lugar: id del lugar, que: qué pasa, fuente }.
     meses: [..] → solo en esos meses. Sin horarios exactos: la ficha remite al sitio oficial. Revisado el 18/11/2026. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.bogota;
  if (!X) return;
  X.agenda = [
    { dias: [0], franja: "dia", lugar: "ciclovia", que: "Ciclovía: más de cien kilómetros de avenidas cerradas a los autos para bicis, patines y caminantes (también los feriados)", fuente: "bogota.gov.co e idrd.gov.co, 18/11/2026" },
    { dias: [0], franja: "dia", lugar: "museo-del-oro", que: "Entrada gratis los domingos", fuente: "banrepcultural.org (Museo del Oro), 18/11/2026" },
    { dias: [0], franja: "dia", lugar: "mercado-de-pulgas-de-usaquen", que: "Mercado de pulgas y artesanías en las calles de Usaquén (también los feriados)", fuente: "visitbogota.co, 18/11/2026" }
  ];
  X.destacados = [];
})();
