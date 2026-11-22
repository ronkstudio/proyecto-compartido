/* Busca más fotos libres para los lugares que no tienen, con Wikidata (tarjeta de fotos del 22/11/2026).
   Complementa a fotos2.pl: en vez de pedir lugar por lugar (Wikimedia limita mucho los pedidos sin cuenta),
   hace una sola consulta al servicio de consultas de Wikidata (query.wikidata.org) por cada tanda de lugares
   (tandas chicas: en ciudades densas como Berlín una tanda grande tarda más de lo que el servicio permite).
   Para cada lugar busca elementos de Wikidata con foto (P18) a menos de R metros y se queda con el que tiene
   el mismo nombre (en cualquier idioma, contando los otros nombres). R: 300 m para locales (comer, noche,
   dormir, compras), 800 m para el resto y 3 km para excursiones.
   Uso: NODE_USE_ENV_PROXY=1 node fotos3.js <entrada.tsv> <idioma local> > salida.tsv   (idioma: de, fr, it, pt, nl, ca, ja; es si no hay)
   NODE_USE_ENV_PROXY=1 hace falta en las compus que salen a internet por un proxy.
   Entrada (la misma de fotos2.pl): id, nombre, cat, sub, dirección, lat, lon, tieneFoto(0/1).
   Salida (la misma de fotos2.pl, sirve para hoja.pl y meterfotos.pl): id, ruta, camino, título, nota.
   Las fotos encontradas hay que mirarlas a ojo antes de cargarlas (hoja.pl): a veces muestran otra cosa. */
"use strict";
const fs = require("fs");
const crypto = require("crypto");
const UA = { "User-Agent": "guia-de-viaje/1.0", "Accept": "application/sparql-results+json" };
const espera = ms => new Promise(r => setTimeout(r, ms));
async function sparql(q) {
  for (let i = 1; i <= 6; i++) {
    try {
      const r = await fetch("https://query.wikidata.org/sparql", { method: "POST", headers: Object.assign({ "Content-Type": "application/x-www-form-urlencoded" }, UA), body: "query=" + encodeURIComponent(q) });
      if (r.ok) return (await r.json()).results.bindings;
      process.stderr.write("consulta: " + r.status + "\n");
      await espera(r.status === 429 ? ((+r.headers.get("retry-after") || 30) * 1000) : 5000 * i);
    } catch (e) { process.stderr.write("consulta: " + e.message + "\n"); await espera(5000 * i); }
  }
  return [];
}
const GEN = new Set("restaurante restaurant ristorante bar cafe caffe cafeteria hotel hostal hostel trattoria osteria pizzeria taberna bodega cerveceria la el los las il lo le les de del di da dei della delle des du the das der die und y e et and of a en im am zum zur al alla club pub bistro brasserie gasthaus kneipe forno pasticceria gelateria enoteca vineria wine".split(" "));
const norm = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/ß/g, "ss").replace(/[^a-z0-9぀-ヿ一-鿿]+/g, " ").trim();
const limpio = n => n.replace(/ · .*/, "").replace(/\(.*?\)/g, "");
const core = n => norm(limpio(n)).split(" ").filter(w => !GEN.has(w)).join(" ");
const nombra = (c, texto) => c.length >= 4 && (" " + norm(texto) + " ").indexOf(" " + c + " ") >= 0;
const ruta = f => { f = f.replace(/ /g, "_"); const m = crypto.createHash("md5").update(f, "utf8").digest("hex"); return m[0] + "/" + m.slice(0, 2) + "/" + f; };
const esimg = t => /\.(jpe?g|png|webp)$/i.test(t);   // TIFF no: la app no arma bien su miniatura
const dist = (a1, o1, a2, o2) => { const dx = (o2 - o1) * Math.cos(a1 * Math.PI / 180) * 111320, dy = (a2 - a1) * 110540; return Math.sqrt(dx * dx + dy * dy); };
const esLocal = p => /^(comer|noche|dormir|compras)$/.test(p.cat);
const radio = p => esLocal(p) ? 300 : p.cat === "excursiones" ? 3000 : 800;
// Fotos que no sirven de portada: mapas, planos, escudos, logos, placas, carteles.
// Y fotos de estaciones para lugares que no son estaciones (la estación "Jardim Zoológico" no es el zoológico).
const ESTACION = /(metro|station|estacao|estacion|bahnhof|u-bahn|s-bahn|subte|subway)/i;
const MALA = /(map|mapa|karte|carte|plan|plano|logo|escudo|coat of arms|wappen|flag|bandera|placa|plaque|gedenktafel|schild|cartel|diagram|grundriss|seal|signature|firma)/i;

(async () => {
  const L = fs.readFileSync(process.argv[2], "utf8").split("\n").map(l => l.replace(/\r$/, "").split("\t"))
    .filter(c => c.length >= 8 && c[7] !== "1" && c[5] !== "")
    .map(c => ({ id: c[0], name: c[1], cat: c[2], sub: c[3], addr: c[4], lat: +c[5], lon: +c[6], core: core(c[1]), full: norm(limpio(c[1])) }))
    .filter(p => p.core.length >= 3);
  process.stderr.write(L.length + " lugares sin foto con ubicación\n");
  const porId = {}; L.forEach(p => { porId[p.id] = p; p.cands = []; });
  const idiomas = ["es", "en", "mul", process.argv[3] || "es"].map(l => '"' + l + '"').join(",");
  for (const R of [300, 800, 3000]) {
    const grupo = L.filter(p => radio(p) === R), T = R === 300 ? 15 : R === 800 ? 8 : 4;
    for (let i = 0; i < grupo.length; i += T) {
      const tanda = grupo.slice(i, i + T);
      const vals = tanda.map(p => '("' + p.id + '" "Point(' + p.lon + " " + p.lat + ')"^^geo:wktLiteral)').join(" ");
      const q = "SELECT ?id ?item ?img ?coord (GROUP_CONCAT(DISTINCT ?l; separator=\"|\") AS ?nombres) WHERE {" +
        " VALUES (?id ?centro) { " + vals + " }" +
        " SERVICE wikibase:around { ?item wdt:P625 ?coord . bd:serviceParam wikibase:center ?centro ; wikibase:radius \"" + (R / 1000) + "\" . }" +
        " ?item wdt:P18 ?img . ?item rdfs:label|skos:altLabel ?l ." +
        " FILTER(LANG(?l) IN (" + idiomas + ")) } GROUP BY ?id ?item ?img ?coord";
      const filas = await sparql(q);
      for (const f of filas) {
        const p = porId[f.id.value]; if (!p) continue;
        const m = /Point\(([-\d.eE]+) ([-\d.eE]+)\)/.exec(f.coord.value); if (!m) continue;
        const img = decodeURIComponent(f.img.value.replace(/^.*Special:FilePath\//, ""));
        p.cands.push({ item: f.item.value.replace(/^.*\//, ""), img, d: dist(p.lat, p.lon, +m[2], +m[1]), nombres: f.nombres.value.split("|") });
      }
      process.stderr.write("radio " + R + " m: " + Math.min(i + T, grupo.length) + "/" + grupo.length + "\n");
      await espera(1500);
    }
  }
  let n = 0;
  for (const p of L) {
    // Si el núcleo del nombre es también la calle o el barrio (está en la dirección), se pide el nombre completo.
    const pedir = nombra(p.core, p.addr + " " + p.sub) ? p.full : p.core;
    const puntaje = c => {
      if (!esimg(c.img) || MALA.test(c.img)) return 0;
      if (ESTACION.test(c.img) && !ESTACION.test(p.name + " " + p.sub)) return 0;
      let s = 0;
      for (const nm of c.nombres) {
        const k = norm(nm);
        if (k === p.full || k === p.core) s = Math.max(s, 3);
        else if (nombra(pedir, nm)) s = Math.max(s, 2);
        // El nombre del elemento dentro del nombre del lugar ("Casa Rosada" en "Plaza de Mayo y Casa Rosada"):
        // solo con dos palabras o más, para que una ciudad o un barrio ("Lisboa", "Alfama") no cuenten.
        else if (k.length >= 6 && k.indexOf(" ") > 0 && nombra(k, p.full)) s = Math.max(s, 1);
      }
      return s;
    };
    const buenos = p.cands.map(c => Object.assign(c, { s: puntaje(c) })).filter(c => c.s > 0).sort((a, b) => b.s - a.s || a.d - b.d);
    if (!buenos.length) continue;
    const c = buenos[0];
    n++;
    process.stdout.write([p.id, ruta(c.img), "wikidata", c.img, Math.round(c.d) + " m (" + c.item + " " + c.nombres[0] + ")"].join("\t") + "\n");
  }
  process.stderr.write(n + " fotos nuevas\n");
})();
