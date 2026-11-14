/* Agenda fija de la sección "Hoy en Roma" (tarjeta #178). Mismo formato que data/paris-hoy.js.

   La sección "Hoy" junta y muestra en carruseles (de día, a la noche, mañana, esta semana y este mes):
     1. Los lugares que funcionan solo algunos días ("only" en data/roma-extra.js): el mercado de Porta Portese y el de Campagna Amica.
     2. Esta agenda: algo puntual que pasa un día fijo en un lugar de la guía.
   Roma no tiene una agenda oficial que se pueda leer de forma automática: en "Buscar más planes" están Turismo Roma y el 060608.

   Cada fila de agenda: { dias: [0 = domingo … 6 = sábado], franja: "dia" o "noche", lugar: id del lugar, que: qué pasa, fuente }.
     n: 1 → solo el primero de esos días en el mes (por ejemplo, el primer domingo). meses: [..] → solo en esos meses.
   Quedaron afuera por no poder confirmarlos: el domingo gratis de los Museos Vaticanos (es el último del mes y la guía todavía
   no sabe marcar "el último") y las fechas 2026 del mercado de Navidad de Piazza Navona (no están publicadas).
   Sin horarios exactos: la franja alcanza. Revisado el 14/11/2026. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.roma;
  if (!X) return;
  const GRATIS = "turismoroma.it/en/events/prima-domenica-del-mese-ingresso-gratuito-nei-musei-statali (Domenica al Museo, Ministerio de Cultura)";
  const VATICANO = "press.vatican.va y vatican.va (agenda del papa, 2026)";
  X.agenda = [
    /* Primer domingo del mes: museos y sitios estatales gratis. */
    { dias: [0], n: 1, franja: "dia", lugar: "coliseo", que: "Gratis el primer domingo del mes (Coliseo, Foro Romano y Palatino), con muchísima gente", fuente: GRATIS },
    { dias: [0], n: 1, franja: "dia", lugar: "castillo-sant-angelo", que: "Gratis el primer domingo del mes", fuente: GRATIS },
    { dias: [0], n: 1, franja: "dia", lugar: "palazzo-massimo-alle-terme", que: "Gratis el primer domingo del mes", fuente: GRATIS },
    { dias: [0], n: 1, franja: "dia", lugar: "palazzo-barberini", que: "Gratis el primer domingo del mes", fuente: GRATIS },
    { dias: [0], n: 1, franja: "dia", lugar: "museo-etrusco-de-villa-giulia", que: "Gratis el primer domingo del mes", fuente: GRATIS },
    { dias: [0], n: 1, franja: "dia", lugar: "galeria-borghese", que: "Gratis el primer domingo del mes, con reserva obligatoria", fuente: GRATIS },
    /* El papa, cuando está en Roma. */
    { dias: [3], franja: "dia", lugar: "plaza-de-san-pedro", que: "Audiencia general del papa a la mañana, cuando está en Roma (entrada gratis, con pedido previo)", fuente: VATICANO },
    { dias: [0], franja: "dia", lugar: "plaza-de-san-pedro", que: "Ángelus del papa al mediodía desde la ventana, cuando está en Roma", fuente: VATICANO }
  ];
  X.destacados = [];
})();
