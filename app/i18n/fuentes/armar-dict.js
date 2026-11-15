/* Arma los diccionarios de i18n/dict/ a partir de las listas de traducción (sirve en Windows, Mac y Linux).
   Controla que cada lista traducida tenga el mismo orden y la misma cantidad que la lista en español.
   Uso: node armar-dict.js pt            (arma el portugués)
        node armar-dict.js todos         (arma los 7 idiomas)

   Separado por ciudad (tarjeta #187): para que nadie baje los textos de ciudades que no usa, cada idioma tiene
   - un diccionario común, dict/<idioma>.js: menús, botones, Info, etiquetas, reglas y todo texto que aparezca en más de una ciudad;
   - uno por ciudad, dict/<idioma>.<ciudad>.js: los textos que solo usa esa ciudad (descripciones, consejos, planes...).
   La app carga el común y el de la ciudad elegida (i18n/traductor.js).

   Cómo decide dónde va cada texto:
   - ui.txt, extra.txt, hoy.txt, tags.txt y re.txt van siempre al común. extra.txt mezcla textos de Buenos Aires con
     otros que la app arma pegando partes ("Local 100 % " + "sin TACC") y que también se ven en las demás ciudades.
   - Las listas de una ciudad (<ciudad>.txt; para Buenos Aires: desc.txt y tip.txt) van a esa ciudad,
     salvo que el texto también aparezca en el código de la app (js/, index.html), en los datos que comparten todas
     (ciudades.js, el globo, avisos.json), en la lista de otra ciudad o en los datos de otra ciudad. Entonces va al común.
   - Cada texto conserva la misma traducción que tenía cuando todo iba en un solo archivo (gana la primera lista que lo trae). */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const trad = __dirname;
const app = path.join(trad, "..", "..");
const leer = f => fs.existsSync(f) ? fs.readFileSync(f, "utf8").replace(/^﻿/, "").split(/\r?\n/) : [];
const texto = f => fs.existsSync(f) ? fs.readFileSync(f, "utf8") : "";
const esc = s => '"' + s.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';

/* Las ciudades salen de data/ciudades.js. Las listas de Buenos Aires tienen otro nombre porque fueron las primeras. */
const caja = { window: {} };
vm.runInNewContext(texto(path.join(app, "data", "ciudades.js")), caja);
const CIUDADES = caja.window.GUIA_CIUDADES || [];
const LISTAS = { caba: ["desc", "tip"] };
CIUDADES.forEach(c => { if (!LISTAS[c.id]) LISTAS[c.id] = [c.id]; });

/* Todo el texto de los datos de cada ciudad, y el de lo que comparten todas. */
const datos = {};
const usados = new Set();
CIUDADES.forEach(c => {
  const fs_ = c.files.map(f => "data/" + f + ".js").concat(["data/hoy-" + c.id + ".json"]);
  if (c.id === "caba") fs_.push("data/hoy.json");
  fs_.forEach(f => usados.add(path.basename(f)));
  datos[c.id] = fs_.map(f => texto(path.join(app, f))).join("\n");
});
const comun = [];
const juntar = dir => fs.existsSync(dir) && fs.readdirSync(dir, { withFileTypes: true }).forEach(e => {
  const f = path.join(dir, e.name);
  if (e.isDirectory()) juntar(f); else if (/\.(js|html|json)$/.test(e.name)) comun.push(texto(f));
});
juntar(path.join(app, "js"));
comun.push(texto(path.join(app, "index.html")));
["i18n.js", "es.js"].forEach(f => comun.push(texto(path.join(app, "i18n", f))));
fs.readdirSync(path.join(app, "data")).forEach(f => { if (!usados.has(f)) comun.push(texto(path.join(app, "data", f))); });
const COMUN = comun.join("\n");
/* Un texto puede estar escrito tal cual o con las comillas escapadas. */
const aparece = (blob, k) => blob.includes(k) || blob.includes(JSON.stringify(k).slice(1, -1)) || blob.includes(k.replace(/'/g, "\\'"));

/* De qué lista sale cada texto: siempre la misma decisión para los 7 idiomas. */
const claves = n => leer(path.join(trad, n + ".txt")).filter(l => l.length > 0);
const ciudadDe = new Map();
const fijas = new Set();
["ui", "extra", "hoy", "tags", "re"].forEach(n => claves(n).forEach(k => fijas.add(k)));
const enListas = new Map();
Object.keys(LISTAS).forEach(id => LISTAS[id].forEach(n => claves(n).forEach(k => {
  if (!enListas.has(k)) enListas.set(k, new Set());
  enListas.get(k).add(id);
})));
for (const [k, ids] of enListas) {
  if (fijas.has(k) || ids.size > 1 || aparece(COMUN, k)) continue;
  const id = [...ids][0];
  if (Object.keys(datos).some(o => o !== id && aparece(datos[o], k))) continue;
  ciudadDe.set(k, id);
}

function armar(lang) {
  const d = new Map();
  let problemas = 0;
  const numeradas = nombre => {
    const k = claves(nombre);
    const t = leer(path.join(trad, lang + "." + nombre + ".txt")).filter(l => l.length > 0);
    if (!t.length) { console.log(nombre + " : sin traducir"); return; }
    if (t.length !== k.length) { console.log(nombre + " : CANTIDAD DISTINTA (" + t.length + " de " + k.length + ")"); problemas++; }
    let n = 0;
    for (let i = 0; i < t.length; i++) {
      const p = t[i].indexOf("|");
      if (p < 1 || parseInt(t[i].slice(0, p), 10) !== i + 1) { console.log(nombre + " : numero mal en la linea " + (i + 1)); problemas++; break; }
      const v = t[i].slice(p + 1);
      if (v.length > 0 && i < k.length && !d.has(k[i])) { d.set(k[i], v); n++; }
    }
    console.log(nombre + " : " + n);
  };
  ["ui", "extra", "desc", "tip", "hoy"].forEach(numeradas);
  /* Listas propias de cada ciudad (tarjeta #98). Si una ciudad todavía no tiene lista, se saltea. */
  CIUDADES.forEach(c => { if (c.id !== "caba" && fs.existsSync(path.join(trad, c.id + ".txt"))) numeradas(c.id); });
  const tk = claves("tags");
  const tf = path.join(trad, lang + ".tags.pipe");
  if (fs.existsSync(tf)) {
    const tt = fs.readFileSync(tf, "utf8").replace(/^﻿/, "").trim().split("|");
    if (tt.length !== tk.length) { console.log("tags : CANTIDAD DISTINTA (" + tt.length + " de " + tk.length + ")"); problemas++; }
    else { let n = 0; for (let i = 0; i < tk.length; i++) if (!d.has(tk[i])) { d.set(tk[i], tt[i]); n++; } console.log("tags : " + n); }
  }
  const rk = claves("re");
  const rt = leer(path.join(trad, lang + ".re.txt")).filter(l => l.length > 0);
  if (rt.length !== rk.length) { console.log("reglas : CANTIDAD DISTINTA (" + rt.length + " de " + rk.length + ")"); problemas++; }

  /* Reparto: común y una parte por ciudad. */
  const partes = { "": [] };
  CIUDADES.forEach(c => { partes[c.id] = []; });
  for (const [key, val] of d) partes[ciudadDe.get(key) || ""].push(esc(key) + ": " + esc(val) + ",\n");

  const dir = path.join(trad, "..", "dict");
  let out = "/* Diccionario común '" + lang + "'. Se arma solo con i18n/fuentes/armar-dict.js: no editar a mano.\n   Clave: texto en espanol tal como se ve en la app. Valor: traduccion. Los textos de una sola ciudad estan en " + lang + ".<ciudad>.js. */\nwindow.I18N_FULL = {\n";
  out += partes[""].join("");
  out += '"__re": [\n';
  const lin = [];
  for (let i = 0; i < Math.min(rk.length, rt.length); i++) lin.push("[" + esc(rk[i]) + ", " + esc(rt[i]) + "]");
  out += lin.join(",\n") + "\n]\n};\n";
  fs.writeFileSync(path.join(dir, lang + ".js"), out, "utf8");
  const resumen = [lang + ": común " + partes[""].length];
  CIUDADES.forEach(c => {
    const s = "/* Diccionario '" + lang + "' de " + c.name + ": textos que solo usa esta ciudad. Se arma solo con i18n/fuentes/armar-dict.js: no editar a mano. */\n" +
      "Object.assign(window.I18N_FULL = window.I18N_FULL || {}, {\n" + partes[c.id].join("").replace(/,\n$/, "\n") + "});\n";
    fs.writeFileSync(path.join(dir, lang + "." + c.id + ".js"), s, "utf8");
    resumen.push(c.id + " " + partes[c.id].length);
  });
  console.log(resumen.join(", ") + " (total " + d.size + " textos), " + lin.length + " reglas, problemas: " + problemas);
  return problemas;
}

const arg = process.argv[2];
if (!arg) { console.log("Uso: node armar-dict.js <idioma> | todos"); process.exit(1); }
const langs = arg === "todos" ? ["en", "pt", "fr", "it", "de", "zh", "ja"] : [arg];
const total = langs.reduce((s, l) => s + armar(l), 0);
process.exit(total ? 1 : 0);
