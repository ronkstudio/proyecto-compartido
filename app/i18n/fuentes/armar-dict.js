/* Igual que armar-dict.ps1, pero con Node (sirve en Windows, Mac y Linux).
   Junta las listas en español con las traducciones de un idioma y arma i18n/dict/<idioma>.js.
   Controla que cada lista traducida tenga el mismo orden y la misma cantidad que la lista en español.
   Uso: node armar-dict.js pt            (arma ../dict/pt.js)
        node armar-dict.js todos         (arma los 7 idiomas) */
"use strict";
const fs = require("fs");
const path = require("path");
const trad = __dirname;
const leer = f => fs.existsSync(f) ? fs.readFileSync(f, "utf8").replace(/^﻿/, "").split(/\r?\n/) : [];
const esc = s => '"' + s.replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '"';

function armar(lang) {
  const d = new Map();
  let problemas = 0;
  const numeradas = nombre => {
    const k = leer(path.join(trad, nombre + ".txt")).filter(l => l.length > 0);
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
  ["ui", "extra", "desc", "tip"].forEach(numeradas);
  /* Listas propias de cada ciudad (tarjeta #98). Si una ciudad todavía no tiene lista, se saltea. */
  ["berlin", "madrid", "roma", "paris"].forEach(c => { if (fs.existsSync(path.join(trad, c + ".txt"))) numeradas(c); });
  const tk = leer(path.join(trad, "tags.txt")).filter(l => l.length > 0);
  const tf = path.join(trad, lang + ".tags.pipe");
  if (fs.existsSync(tf)) {
    const tt = fs.readFileSync(tf, "utf8").replace(/^﻿/, "").trim().split("|");
    if (tt.length !== tk.length) { console.log("tags : CANTIDAD DISTINTA (" + tt.length + " de " + tk.length + ")"); problemas++; }
    else { let n = 0; for (let i = 0; i < tk.length; i++) if (!d.has(tk[i])) { d.set(tk[i], tt[i]); n++; } console.log("tags : " + n); }
  }
  const rk = leer(path.join(trad, "re.txt")).filter(l => l.length > 0);
  const rt = leer(path.join(trad, lang + ".re.txt")).filter(l => l.length > 0);
  if (rt.length !== rk.length) { console.log("reglas : CANTIDAD DISTINTA (" + rt.length + " de " + rk.length + ")"); problemas++; }
  let out = "/* Diccionario '" + lang + "'. Se arma solo a partir de las listas de traduccion: no editar a mano los textos largos sin revisar la clave.\n   Clave: texto en espanol tal como se ve en la app. Valor: traduccion. */\nwindow.I18N_FULL = {\n";
  for (const [key, val] of d) out += esc(key) + ": " + esc(val) + ",\n";
  out += '"__re": [\n';
  const lin = [];
  for (let i = 0; i < Math.min(rk.length, rt.length); i++) lin.push("[" + esc(rk[i]) + ", " + esc(rt[i]) + "]");
  out += lin.join(",\n") + "\n]\n};\n";
  fs.writeFileSync(path.join(trad, "..", "dict", lang + ".js"), out, "utf8");
  console.log(lang + " total: " + d.size + " textos, " + lin.length + " reglas, problemas: " + problemas);
  return problemas;
}

const arg = process.argv[2];
if (!arg) { console.log("Uso: node armar-dict.js <idioma> | todos"); process.exit(1); }
const langs = arg === "todos" ? ["en", "pt", "fr", "it", "de", "zh", "ja"] : [arg];
const total = langs.reduce((s, l) => s + armar(l), 0);
process.exit(total ? 1 : 0);
