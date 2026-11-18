/* Agenda fija de la sección "Hoy en Barcelona" (tarjeta #195). Mismo formato que data/madrid-hoy.js.

   La sección "Hoy" junta y muestra en carruseles (de día, a la noche, mañana, esta semana y este mes):
     1. Los eventos de la agenda cultural oficial del Ayuntamiento (data/hoy-barcelona.json, lo arma herramientas/armar-hoy-barcelona.ps1).
     2. Los lugares que funcionan solo algunos días ("only" en data/barcelona-extra.js): el mercado de Els Encants.
     3. Esta agenda: algo puntual que pasa un día fijo en un lugar de la guía.

   Cada fila de agenda: { dias: [0 = domingo … 6 = sábado], franja: "dia" o "noche", lugar: id del lugar, que: qué pasa, fuente }.
     n: 1 → solo el primero de esos días en el mes (por ejemplo, el primer domingo). meses: [..] → solo en esos meses.
   Las horas gratis de los museos se dicen sin horario exacto: cambian y la ficha remite al sitio oficial. Revisado el 18/11/2026. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.barcelona;
  if (!X) return;
  const PRIMER = "ajuntament.barcelona.cat: \"Cada primer domingo de mes, ¡ven a los museos!\" (29/06/2026)";
  const MNAC = "museunacional.cat (horarios y precios: gratis los sábados desde la tarde y el primer domingo, con reserva)";
  X.agenda = [
    /* Museos gratis el primer domingo de cada mes (con reserva en algunos). */
    { dias: [0], n: 1, franja: "dia", lugar: "museo-picasso", que: "Gratis el primer domingo del mes, con reserva previa", fuente: PRIMER },
    { dias: [0], n: 1, franja: "dia", lugar: "museu-nacional-d-art-de-catalunya-mnac", que: "Gratis el primer domingo del mes, con reserva previa", fuente: MNAC },
    { dias: [0], n: 1, franja: "dia", lugar: "museu-del-disseny", que: "Gratis el primer domingo del mes", fuente: PRIMER },
    { dias: [0], n: 1, franja: "dia", lugar: "museu-blau", que: "Gratis el primer domingo del mes", fuente: PRIMER },
    { dias: [0], n: 1, franja: "dia", lugar: "museu-d-historia-de-barcelona-muhba", que: "Gratis todo el día el primer domingo del mes", fuente: PRIMER },
    /* Gratis algunas tardes. */
    { dias: [6], franja: "dia", lugar: "museu-nacional-d-art-de-catalunya-mnac", que: "Gratis el sábado a la tarde, con reserva previa", fuente: MNAC },
    { dias: [0], franja: "dia", lugar: "museu-maritim", que: "Gratis el domingo a la tarde", fuente: PRIMER },
    { dias: [0], franja: "dia", lugar: "museu-d-historia-de-barcelona-muhba", que: "Gratis el domingo a la tarde", fuente: PRIMER }
  ];
  X.destacados = [];
})();
