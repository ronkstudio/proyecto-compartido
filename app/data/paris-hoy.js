/* Agenda fija de la sección "Hoy en París" (tarjetas #102 y #172). Mismo formato que data/caba-hoy.js.

   La sección "Hoy" junta tres cosas y las muestra en carruseles: de día, a la noche, mañana, esta semana y este mes.
     1. Los lugares que funcionan solo algunos días ("only" en data/paris-extra.js): mercados y pulgas.
     2. Esta agenda: algo puntual que pasa un día fijo en un lugar de la guía.
     3. Los eventos del día de la agenda oficial de la ciudad (data/hoy-paris.json, que arma herramientas/armar-hoy-paris.ps1).

   Cada fila de agenda: { dias: [0 = domingo … 6 = sábado], franja: "dia" o "noche", lugar: id del lugar en la guía, que: qué pasa, fuente }.
     n: 1 → solo el primero de esos días en el mes (por ejemplo, el primer domingo). meses: [..] → solo en esos meses.
   Cada destacado: { desde: "AAAA-MM-DD", hasta (opcional), franja, t: qué es, lugar, barrio, url, fuente }. Se muestran solos el día que corresponde.
   Sin horarios exactos: la franja alcanza. Revisado el 14/11/2026. */
(() => {
  "use strict";
  const X = window.CITY_EXTRA && window.CITY_EXTRA.paris;
  if (!X) return;
  const NOCT = "paris.fr/pages/vingt-deux-musees-parisiens-ou-passer-la-nuit-25256 (actualizada el 13/03/2026)";
  X.agenda = [
    /* Museos abiertos hasta la noche, una vez por semana. */
    { dias: [3, 5], franja: "noche", lugar: "museo-del-louvre", que: "Abre hasta la noche: nocturna de los miércoles y viernes", fuente: "louvre.fr/expositions-et-evenements/evenements-activites/les-nocturnes-du-mercredi-et-du-vendredi" },
    { dias: [4], franja: "noche", lugar: "museo-de-orsay", que: "Abre hasta la noche: nocturna de los jueves", fuente: NOCT },
    { dias: [4], franja: "noche", lugar: "museo-del-quai-branly", que: "Abre hasta la noche: nocturna de los jueves", fuente: NOCT },
    { dias: [4], franja: "noche", lugar: "museo-marmottan-monet", que: "Abre hasta la noche: nocturna de los jueves", fuente: NOCT },
    { dias: [5], franja: "noche", lugar: "bourse-de-commerce", que: "Abre hasta la noche: nocturna de los viernes", fuente: NOCT },
    { dias: [6], franja: "noche", lugar: "atelier-des-lumieres", que: "Abre hasta la noche: nocturna de los sábados", fuente: NOCT },
    /* Música. */
    { dias: [1], franja: "noche", lugar: "le-baiser-sale", que: "La jam de los lunes: primero un concierto y después escenario abierto", fuente: "75.agendaculturel.fr y paris.fr/evenements (La Jam du Lundi de François Constantin, fechas de septiembre a diciembre de 2026)" },
    /* Una vez por mes. */
    { dias: [5], n: 1, meses: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12], franja: "noche", lugar: "museo-del-louvre", que: "Nocturna gratis del primer viernes del mes", fuente: "sortiraparis.com/arts-culture/exposition/articles/181320 y louvre.fr (gratis el primer viernes a la noche, salvo julio y agosto)" },
    { dias: [0], n: 1, franja: "dia", lugar: "museo-de-orsay", que: "Gratis el primer domingo del mes, con reserva previa", fuente: "paris-friendly.fr/musee-d-orsay-gratuit.html y sortiraparis.com (2026)" },
    { dias: [0], n: 1, franja: "dia", lugar: "museo-picasso", que: "Gratis el primer domingo del mes", fuente: "pleinsoleilparis.fr, guía de museos gratis el primer domingo de 2026" },
    { dias: [0], n: 1, franja: "dia", lugar: "museo-de-cluny", que: "Gratis el primer domingo del mes", fuente: "pleinsoleilparis.fr, guía de museos gratis el primer domingo de 2026" },
    { dias: [4], n: 1, franja: "noche", lugar: "museo-de-cluny", que: "Nocturna del primer jueves del mes", fuente: NOCT }
  ];
  X.destacados = [
    { desde: "2026-11-22", hasta: "2027-01-03", franja: "noche", t: "Luces de Navidad en los Campos Elíseos", lugar: "Avenida de los Campos Elíseos", barrio: "Champs-Élysées", url: "https://www.paris.fr/pages/les-champs-elysees-a-l-heure-des-illuminations-25395", fuente: "paris.fr; fecha de encendido según Le Bonbon y Paris Select Book, revisado 14/11/2026" },
    { desde: "2026-11-22", hasta: "2027-01-04", franja: "dia", t: "Vuelve el mercado de Navidad de los Campos Elíseos", lugar: "Avenida de los Campos Elíseos", barrio: "Champs-Élysées", url: "https://www.paris.fr/pages/installation-d-un-marche-de-noel-sur-l-avenue-des-champs-elysees-8e-35808", fuente: "paris.fr (actualizada el 13/07/2026), revisado 14/11/2026" }
  ];
})();
