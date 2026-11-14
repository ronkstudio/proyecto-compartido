/* Junta los JSON de los ayudantes, controla y arma app/data/berlin-lugares.js.
   Uso: node armar.js <app> [--escribir] */
"use strict";
const fs = require("fs"), path = require("path");
const APP = process.argv[2], ESCRIBIR = process.argv.includes("--escribir");
const DIR = __dirname;
const ARCH = ["2-1-ver.json", "2-2-comer.json", "2-3-noche-ocio.json", "2-4-tours-escapadas-dormir.json", "2-5-compras-deporte.json"];
const norm = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();   // igual que js/app.js
const slug = s => norm(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const BARRIOS = ["Mitte", "Prenzlauer Berg", "Friedrichshain", "Kreuzberg", "Neukölln", "Charlottenburg", "Schöneberg", "Tiergarten",
  "Moabit", "Wedding", "Treptow", "Lichtenberg", "Pankow", "Köpenick", "Spandau", "Steglitz", "Zehlendorf", "Wilmersdorf", "Fuera de Berlín"];
const CATS = ["ver", "comer", "noche", "tours", "escapadas", "dormir", "compras", "deporte", "ocio"];
const avisos = [], errores = [];
let todos = [];
for (const a of ARCH) {
  const f = path.join(DIR, a);
  if (!fs.existsSync(f)) { avisos.push("falta " + a); continue; }
  let arr; try { arr = JSON.parse(fs.readFileSync(f, "utf8")); } catch (e) { errores.push(a + ": JSON inválido: " + e.message); continue; }
  arr.forEach(p => { p._de = a; });
  todos = todos.concat(arr);
}
/* Controles */
const vistos = {};
const PRECIO = /€|\bEUR\b|\beuros?\b|\d+\s?(?:€|eur)/i;
const HORA = /\b\d{1,2}(?::\d{2})?\s?(?:h|hs|horas|Uhr)\b|\bde \d{1,2}(?::\d{2})? a \d{1,2}|\b\d{1,2}:\d{2}\b/i;
todos.forEach(p => {
  const id = slug(p.name || "");
  const q = (p.name || "?") + " (" + p._de + ")";
  if (!p.name || !p.cat || !p.sub || !p.barrio || !p.address || !p.desc || !p.tip) errores.push(q + ": faltan campos");
  if (CATS.indexOf(p.cat) < 0) errores.push(q + ": categoría rara " + p.cat);
  if (BARRIOS.indexOf(p.barrio) < 0) errores.push(q + ": barrio no permitido " + p.barrio);
  if (!(p.price === null || [0, 1, 2, 3, 4].indexOf(p.price) > -1)) errores.push(q + ": precio raro " + p.price);
  if (vistos[id]) errores.push(q + ": repetido con " + vistos[id]); else vistos[id] = q;
  [["desc", p.desc], ["tip", p.tip]].forEach(([k, v]) => {
    if (!v) return;
    if (PRECIO.test(v)) avisos.push(q + ": " + k + " parece tener precio: " + v);
    if (HORA.test(v)) avisos.push(q + ": " + k + " parece tener horario: " + v);
    if (v.length > (k === "desc" ? 240 : 200)) avisos.push(q + ": " + k + " largo (" + v.length + ")");
    if (/"/.test(v)) avisos.push(q + ": " + k + " tiene comillas dobles");
  });
  if (!Array.isArray(p.tags) || !p.tags.length) avisos.push(q + ": sin etiquetas");
  if (!p.sources || !p.sources.length) avisos.push(q + ": sin fuente");
  if ((p.diet || []).some(d => ["sin TACC", "kosher", "halal"].indexOf(d) > -1) && !(p.sources || []).length) errores.push(q + ": dieta de salud sin fuente");
});
const porTipo = {};
todos.forEach(p => { const k = p.cat + " / " + p.sub; porTipo[k] = (porTipo[k] || 0) + 1; });
Object.entries(porTipo).forEach(([k, n]) => { if (n < 4) errores.push("tipo con menos de 4: " + k + " (" + n + ")"); });
console.log("lugares: " + todos.length);
console.log(Object.entries(porTipo).sort().map(([k, n]) => "  " + k + ": " + n).join("\n"));
const porBarrio = {}; todos.forEach(p => { porBarrio[p.barrio] = (porBarrio[p.barrio] || 0) + 1; });
console.log("barrios: " + Object.entries(porBarrio).sort((a, b) => b[1] - a[1]).map(([k, n]) => k + " " + n).join(", "));
console.log("\nERRORES (" + errores.length + ")\n" + errores.join("\n"));
console.log("\nAVISOS (" + avisos.length + ")\n" + avisos.join("\n"));
fs.writeFileSync(path.join(DIR, "todos.json"), JSON.stringify(todos, null, 1));
if (!ESCRIBIR) process.exit(0);
if (errores.length) { console.log("No escribo: hay errores."); process.exit(1); }

/* Arma data/berlin-lugares.js */
const J = s => JSON.stringify(s);
const TIT = { ver: "IMPERDIBLES", comer: "DÓNDE COMER", noche: "NOCHE", tours: "TOURS Y GUÍAS", escapadas: "EXCURSIONES", dormir: "HOSPEDAJE", compras: "COMPRAS Y MERCADOS", deporte: "DEPORTES", ocio: "ENTRETENIMIENTO" };
let filas = "";
CATS.forEach(c => {
  const ps = todos.filter(p => p.cat === c);
  if (!ps.length) return;
  filas += "\n    /* ───────────── " + TIT[c] + " ───────────── */\n";
  const subs = []; ps.forEach(p => { if (subs.indexOf(p.sub) < 0) subs.push(p.sub); });
  subs.forEach(s => ps.filter(p => p.sub === s).forEach(p => {
    const f = [p.cat, p.sub, p.name, p.barrio === "Fuera de Berlín" ? "@F" : p.barrio, p.address, p.price, p.desc, p.tip, p.tags || []];
    if (p.top) f.push(1);
    filas += "    [" + f.map(x => x === "@F" ? "F" : J(x)).join(", ") + "],\n";
  }));
});
filas = filas.replace(/,\n$/, "\n");
const cab = `/* Lugares de Berlín (etapa 2 de la expansión, tarjeta #126; tarjetas #127 a #131). Pedido de ezebesserr, 13/11.
   Se suman a la lista de data/berlin.js. Van en un archivo aparte para no cruzarse con otros cambios.

   Cada fila: [categoría, tipo, nombre, barrio, dirección, precio, descripción, consejo, etiquetas, destacado (1 = imperdible, opcional)]
   precio: 0 = gratis, 1 = $, 2 = $$, 3 = $$$, 4 = $$$$, null = no aplica.

   Cómo se verificó (13/11/2026): cada lugar se buscó en la web (sitio oficial, visitberlin.de, berlin.de, Guía Michelin y notas de 2025 y 2026)
   para confirmar que existe, que sigue abierto y su dirección. Se dejaron afuera los que cerraron o están cerrados por obras.
   Las fuentes de cada lugar están en docs/fuentes-berlin.md.
   Sin precios ni horarios exactos. Los datos de dietas (sin TACC, kosher, halal) están en data/berlin-extra.js, solo con fuente.
   Las ubicaciones en el mapa y las fotos se cargan en las tarjetas #132 y #133. */
(() => {
  "use strict";
  const city = window.CITY_DATA && window.CITY_DATA.berlin;
  if (!city) return;
  const F = "Fuera de Berlín";

  const filas = [${filas}  ];

  /* Barrios que se ofrecen en el filtro de Explorar. Los lugares de otros barrios se encuentran con el buscador y en el mapa. */
  city.filterBarrios = ["Mitte", "Prenzlauer Berg", "Friedrichshain", "Kreuzberg", "Neukölln", "Charlottenburg", "Schöneberg", "Tiergarten"];

  filas.forEach(f => {
    const p = { cat: f[0], sub: f[1], name: f[2], barrio: f[3], address: f[4], price: f[5], desc: f[6], tip: f[7], tags: f[8] };
    if (f[9]) p.top = true;
    city.places.push(p);
  });
})();
`;
fs.writeFileSync(path.join(APP, "data", "berlin-lugares.js"), cab);
console.log("escrito data/berlin-lugares.js");

/* Arma docs/fuentes-berlin.md: de dónde sale cada lugar, para poder revisarlo. */
const NOM = { ver: "Imperdibles", comer: "Dónde comer", noche: "Noche", tours: "Tours y guías", escapadas: "Excursiones", dormir: "Hospedaje", compras: "Compras y mercados", deporte: "Deportes", ocio: "Entretenimiento" };
let md = "# Fuentes de los lugares de Berlín\n\nDe dónde salió cada lugar de `app/data/berlin-lugares.js` y qué se revisó (13/11/2026). Tarjeta #126.\n" +
  "Si un lugar cierra o se muda, corregilo en `app/data/berlin-lugares.js` y anotalo acá.\n";
CATS.forEach(c => {
  const ps = todos.filter(p => p.cat === c);
  if (!ps.length) return;
  md += "\n## " + NOM[c] + "\n\n";
  ps.forEach(p => {
    md += "- **" + p.name + "** (" + p.sub + ", " + p.barrio + "): " + (p.check || "sin nota") +
      ((p.sources || []).length ? ". " + p.sources.map((u, i) => "[fuente" + ((p.sources.length > 1) ? " " + (i + 1) : "") + "](" + u + ")").join(", ") : "") + "\n";
  });
});
fs.mkdirSync(path.join(APP, "..", "docs"), { recursive: true });
fs.writeFileSync(path.join(APP, "..", "docs", "fuentes-berlin.md"), md);
console.log("escrito docs/fuentes-berlin.md");
