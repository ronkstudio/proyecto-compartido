/* Agenda fija de la sección "Hoy en Berlín" (tarjeta #99). Mismo formato que data/caba-hoy.js.

   La sección "Hoy" junta tres cosas:
     1. Los lugares que funcionan solo algunos días ("only" en data/berlin-extra.js): mercados y mercados de pulgas.
     2. Esta agenda: algo puntual que pasa un día fijo en un lugar de la guía (tarjeta #134).
     3. Los eventos del día de la agenda cultural abierta de Berlín (data/hoy-berlin.json, que arma herramientas/armar-hoy-berlin.ps1).

   Cada fila de agenda: { dias: [0 = domingo … 6 = sábado], franja: "dia" o "noche", lugar: id del lugar en la guía, que: qué pasa, fuente }.
   Cada destacado: { desde: "AAAA-MM-DD", hasta (opcional), franja, t: qué es, lugar, barrio, url, fuente }. Se muestran solos el día que corresponde. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.berlin;
  if (!X) return;
  /* Solo lo que tiene fuente. Quedaron afuera el karaoke del Mauerpark (solo con buen tiempo, en los meses cálidos)
     y la noche queer de los lunes del Kino International (no se pudo confirmar que siga después de la reapertura de 2026). */
  X.agenda = [
    { dias: [3], franja: "noche", lugar: "b-flat", que: "Jam session de jazz de los miércoles", fuente: "visitberlin.de/en/blog/11-jazz-bars-berlin" },
    { dias: [3], franja: "noche", lugar: "tresor", que: "Noche de DJs nuevos de los miércoles", fuente: "technoairlines.com/club/tresor-berlin" },
    { dias: [4], franja: "noche", lugar: "markthalle-neun", que: "Street Food Thursday: puestos de comida de todo el mundo", fuente: "berlin.de/en/shopping/markets/street-food-markets/3862517-7974330-street-food-thursday.en.html" }
  ];
  X.destacados = [];
})();
