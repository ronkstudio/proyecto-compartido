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
    { dias: [4], franja: "noche", lugar: "markthalle-neun", que: "Street Food Thursday: puestos de comida de todo el mundo", fuente: "berlin.de/en/shopping/markets/street-food-markets/3862517-7974330-street-food-thursday.en.html" },
    /* Tarjeta #172, revisado el 14/11/2026. meses: solo en esos meses. */
    { dias: [3], meses: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12], franja: "dia", lugar: "filarmonica-de-berlin", que: "Concierto gratis al mediodía en el foyer", fuente: "berliner-philharmoniker.de (Lunch concert: los miércoles de septiembre a junio, entrada libre)" },
    { dias: [2], franja: "noche", lugar: "zig-zag-jazz-club", que: "Jam session de los martes", fuente: "zigzag-jazzclub.berlin y regioactive.de (todos los martes, 2026)" },
    { dias: [6], meses: [1, 2, 3, 4, 5, 9, 10, 11, 12], franja: "noche", lugar: "a-trane", que: "Jam session de trasnoche, después del concierto", fuente: "visitberlin.de/en/trane-jazz-club (Jazz after Midnight; no hay en junio, julio y agosto)" },
    { dias: [6], franja: "noche", lugar: "berghain", que: "Klubnacht: arranca el sábado a la medianoche y sigue el domingo", fuente: "berghain.berlin/en (programa de cada fin de semana)" },
    { dias: [0], franja: "dia", lugar: "hamburger-bahnhof", que: "Domingo en familia: actividades para chicos", fuente: "smb.museum/veranstaltungen/veranstaltungsreihe/jeder-sonntag-ist-familiensonntag-im-hamburger-bahnhof/" }
  ];
  X.destacados = [
    { desde: "2026-11-14", hasta: "2026-11-15", franja: "dia", t: "30 horas seguidas abierto y con entrada gratis", lugar: "Hamburger Bahnhof", barrio: "Moabit", url: "https://www.museumsportal-berlin.de/de/veranstaltungen/30-stunden-hamburger-bahnhof-teil-1/", gratis: true, fuente: "Museumsportal Berlin, revisado 14/11/2026" },
    { desde: "2026-11-23", hasta: "2026-12-31", franja: "dia", t: "Mercado de Navidad del Gendarmenmarkt (WeihnachtsZauber)", lugar: "Gendarmenmarkt", barrio: "Mitte", url: "https://www.visitberlin.de/de/blog/diese-weihnachtsmaerkte-oeffnen-als-erste-11-tipps", fuente: "visitBerlin, revisado 14/11/2026" },
    { desde: "2026-11-23", hasta: "2026-12-22", franja: "dia", t: "Mercado de Navidad del Palacio de Charlottenburg", lugar: "Palacio de Charlottenburg", barrio: "Charlottenburg", url: "https://www.berlin.de/weihnachtsmarkt/3240314-3496862-weihnachtsmarkt-am-schloss-charlottenbur.html", fuente: "berlin.de y visitBerlin; las fechas de cierre no coinciden, se usa la más temprana. Revisado 14/11/2026" }
  ];
})();
