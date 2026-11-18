/* Agenda fija de la sección "Hoy en Madrid" (tarjeta #191). Mismo formato que data/roma-hoy.js.

   La sección "Hoy" junta y muestra en carruseles (de día, a la noche, mañana, esta semana y este mes):
     1. Los eventos de la agenda oficial del Ayuntamiento (data/hoy-madrid.json, lo arma herramientas/armar-hoy-madrid.ps1).
     2. Los lugares que funcionan solo algunos días ("only" en data/madrid-extra.js): el Rastro y el Parque El Capricho.
     3. Esta agenda: algo puntual que pasa un día fijo en un lugar de la guía.

   Cada fila de agenda: { dias: [0 = domingo … 6 = sábado], franja: "dia" o "noche", lugar: id del lugar, que: qué pasa, fuente }.
     n: 1 → solo el primero de esos días en el mes (por ejemplo, el primer miércoles). meses: [..] → solo en esos meses.
   Las horas gratis de los museos se dicen sin horario exacto: cambian y la ficha remite al sitio oficial. Revisado el 17/11/2026. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.madrid;
  if (!X) return;
  const PRADO = "museodelprado.es (horario gratuito) y esmadrid.com/gratis-temporal-madrid";
  const REINA = "museoreinasofia.es (folleto de visita: horario gratuito)";
  const THYSSEN = "museothyssen.org (lunes gratis en la colección permanente)";
  const GUARDIA = "esmadrid.com/agenda/relevo-solemne-cambio-guardia-palacio-real y Patrimonio Nacional";
  X.agenda = [
    /* Museos gratis en algunas horas. */
    { dias: [0, 1, 2, 3, 4, 5, 6], franja: "dia", lugar: "museo-del-prado", que: "Gratis en las últimas dos horas del día, con fila", fuente: PRADO },
    { dias: [1, 3, 4, 5, 6], franja: "noche", lugar: "museo-reina-sofia", que: "Gratis en las últimas horas, con entrada sin costo", fuente: REINA },
    { dias: [0], franja: "dia", lugar: "museo-reina-sofia", que: "Gratis el domingo al mediodía, con entrada sin costo", fuente: REINA },
    { dias: [1], franja: "dia", lugar: "museo-thyssen-bornemisza", que: "Colección permanente gratis el lunes al mediodía (la entrada se retira en la boletería)", fuente: THYSSEN },
    /* Cambio de guardia en el Palacio Real. */
    { dias: [3, 6], franja: "dia", lugar: "palacio-real", que: "Cambio de guardia a la mañana frente a la Puerta del Príncipe (gratis)", fuente: GUARDIA },
    { dias: [3], n: 1, meses: [2, 3, 4, 5, 6, 7, 10, 11, 12], franja: "dia", lugar: "palacio-real", que: "Relevo solemne de la Guardia Real al mediodía, con caballos y música (gratis)", fuente: GUARDIA }
  ];
  X.destacados = [];
})();
