/* Tercera pasada de fotos (tarjeta de fotos del 23/11/2026). Para los lugares que siguen sin foto después de fotos2.pl y fotos3.js.
   Todo pasa por el servicio de consultas de Wikidata (query.wikidata.org): Commons limita mucho los pedidos directos sin cuenta
   (frena a los 3 o 4 pedidos), pero el servicio de consultas puede preguntarle a Commons y a Wikipedia por nosotros (MWAPI).
   Dos modos:
   - "cerca": elementos de Wikidata con foto a pocos metros del lugar (como fotos3.js), pero con el nombre comparado palabra por
     palabra y no entero, para que "Reichstag y su cúpula" encuentre "Reichstag". Toma también otras fotos del elemento
     (vista, vista nocturna, interior, panorámica) si no tiene la principal.
   - "commons": fotos de Commons sacadas a pocos metros del lugar (búsqueda geográfica) cuyo título nombra al lugar. Sirve para
     restaurantes, bares, hoteles y tiendas, que casi nunca tienen elemento en Wikidata.
   - "texto": búsqueda de texto en Commons con el nombre entre comillas y el nombre de la ciudad, para las fotos que no
     tienen ubicación. El título de la foto tiene que nombrar al lugar.
   Opciones (variables de entorno): SOLO=comer,noche,dormir (solo esos tipos), RADIO_LOCAL=200 (radio de los locales en "commons").
   Uso: NODE_USE_ENV_PROXY=1 node fotos4.js <cerca|commons|texto> <ciudad>.tsv <idioma local> [ciudad] > salida.tsv
   Entrada y salida: las mismas de fotos2.pl y fotos3.js (sirven para hoja.pl y meterfotos.pl). La nota dice qué palabras coincidieron.
   Hay que revisar cada foto antes de cargarla: la coincidencia por palabras se equivoca más que la del nombre entero. */
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
  return null;
}
// Palabras que no sirven para reconocer un lugar (tipos de lugar, artículos, la ciudad).
const GEN = new Set(("restaurante restaurant ristorante restaurace bar bars cafe caffe cafeteria coffee kaffee hotel hoteles hostal hostel trattoria osteria pizzeria pizza taberna bodega cerveceria brewery brauerei la el los las il lo le les gli de del di da dei della delle des du dos das do the der die und y e et and of a o en im am an zum zur al alla club pub bistro brasserie gasthaus kneipe forno pasticceria gelateria enoteca vineria wine vino vinos casa house haus maison museo museum musee musei iglesia church kirche eglise chiesa igreja basilica catedral cathedral dom templo temple mercado market markt marche mercato feira mercat mercados parque park parc parco plaza platz place piazza praca placa calle strasse street rue via rua avenida avenue paseo barrio kiez quartier bairro centro center centre zentrum cultural kultur teatro theater theatre opera cine kino cinema galeria galerias gallery galerie torre tower turm palacio palace palast palais palazzo palacio castillo castle schloss chateau castello jardin jardines garden garten jardim giardino isla island insel ile lago lake see playa beach strand praia mirador terraza ciudad city stadt cidade tienda tiendas store shop laden libreria bookshop buchhandlung piscina pileta pool bad monumento monument memorial denkmal gedenkstatte estacion station bahnhof puente bridge brucke pont ponte nuestra senora san santa santo saint sankt st sao new nuevo nueva old viejo vieja grand gran grande petit tour tours paseos visita visitas mundo world sur norte este oeste berlin paris roma rome madrid barcelona amsterdam rio janeiro bogota lisboa lisbon lisbonne tokio tokyo buenos aires caba ciudad").split(" "));
const norm = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/ß/g, "ss").replace(/['’]/g, "").replace(/[^a-z0-9぀-ヿ一-鿿]+/g, " ").trim();
const palabras = s => norm(s).split(" ").filter(w => w.length >= 4 && !GEN.has(w) && !/^\d+$/.test(w));
const ruta = f => { f = f.replace(/ /g, "_"); const m = crypto.createHash("md5").update(f, "utf8").digest("hex"); return m[0] + "/" + m.slice(0, 2) + "/" + f; };
const esimg = t => /\.(jpe?g|png|webp)$/i.test(t);
const dist = (a1, o1, a2, o2) => { const dx = (o2 - o1) * Math.cos(a1 * Math.PI / 180) * 111320, dy = (a2 - a1) * 110540; return Math.sqrt(dx * dx + dy * dy); };
// Fotos o grabados de antes de 1990 (un año en el nombre del archivo): el lugar puede estar muy distinto.
// No cuenta el número de foto de la cámara ("IMG 1510", "DSC_1873").
const VIEJA = t => { const re = /(?<![0-9])(1[7-9][0-9][0-9])(?![0-9])/g; let m;
  while ((m = re.exec(t))) { if (/(img|dsc|dscn|dscf|pic|p)[ _-]?$/i.test(t.slice(Math.max(0, m.index - 5), m.index))) continue; if (+m[1] < 1990) return true; }
  return false; };
const ESTACION = /(metro|station|estacao|estacion|bahnhof|u-bahn|s-bahn|subte|subway|駅|haltestelle|bus stop|arret)/i;
const MALA = /(map|mapa|karte|carte|plan|plano|logo|escudo|coat of arms|wappen|flag|bandera|placa|plaque|gedenktafel|schild|cartel|diagram|grundriss|seal|signature|firma|menu|speisekarte|ticket|entrada \d|poster|flyer|screenshot|stolperstein|grab|grave|tumba|portrait|retrato|pianta|toilet|toilette|urinoir|baustelle|chantier|unfall|accident|protest|demonstration|manifestation|parking|parkplatz)/i;

const [modo, archivo, local] = process.argv.slice(2);
const L = fs.readFileSync(archivo, "utf8").split("\n").map(l => l.replace(/\r$/, "").split("\t"))
  .filter(c => c.length >= 8 && c[7] !== "1" && (c[5] !== "" || process.argv[2] === "texto"))   // la búsqueda de texto no necesita ubicación
  .map(c => ({ id: c[0], name: c[1], cat: c[2], sub: c[3], addr: c[4], lat: +c[5], lon: +c[6] }));
// SOLO=comer,noche,dormir busca solo esos tipos de lugar.
if (process.env.SOLO) { const t = process.env.SOLO.split(","); for (let i = L.length - 1; i >= 0; i--) if (t.indexOf(L[i].cat) < 0) L.splice(i, 1); }
for (const p of L) {
  // Palabras propias del nombre: sin las de la dirección (la calle) salvo que el nombre sea solo eso.
  const dir = new Set(palabras(p.addr));
  const todas = palabras(p.name);
  p.pal = todas.filter(w => !dir.has(w));
  if (!p.pal.length) p.pal = todas;
}
const conPal = L.filter(p => p.pal.length);
process.stderr.write(L.length + " lugares sin foto, " + conPal.length + " con palabras para buscar\n");

// Cuántas palabras del lugar aparecen en un texto, y cuáles.
const coinciden = (p, texto) => { const t = " " + norm(texto) + " "; return p.pal.filter(w => t.indexOf(" " + w + " ") >= 0 || (w.length >= 7 && t.indexOf(w) >= 0)); };
const puntaje = (p, textos) => {
  let mejor = [];
  for (const t of textos) { const c = coinciden(p, t); if (c.length > mejor.length) mejor = c; }
  // Todas las palabras propias = 3; la más larga (7 letras o más) = 2; alguna = 1.
  if (!mejor.length) return { s: 0, w: [] };
  if (mejor.length === p.pal.length) return { s: 3, w: mejor };
  const larga = p.pal.slice().sort((a, b) => b.length - a.length)[0];
  if (mejor.indexOf(larga) >= 0 && larga.length >= 7) return { s: 2, w: mejor };
  return { s: 1, w: mejor };
};
const radioCerca = p => p.cat === "escapadas" ? 5000 : /^(comer|noche|dormir)$/.test(p.cat) ? 150 : p.cat === "tours" ? 300 : 700;
// RADIO_LOCAL=200 agranda el radio de los locales (a veces la ubicación del lugar o la de la foto están corridas).
const radioCommons = p => p.cat === "escapadas" ? 3000 : /^(comer|noche|dormir|compras)$/.test(p.cat) ? (+process.env.RADIO_LOCAL || 80) : 400;

(async () => {
  const salida = [];
  if (modo === "cerca") {
    const idiomas = ["es", "en", "mul", local || "es"].map(l => '"' + l + '"').join(",");
    const grupos = {};
    conPal.forEach(p => { (grupos[radioCerca(p)] = grupos[radioCerca(p)] || []).push(p); p.cands = []; });
    const porId = {}; conPal.forEach(p => porId[p.id] = p);
    for (const R of Object.keys(grupos).map(Number)) {
      const g = grupos[R], T = R >= 3000 ? 2 : R >= 700 ? 4 : 10;
      for (let i = 0; i < g.length; i += T) {
        const tanda = g.slice(i, i + T);
        const vals = tanda.map(p => '("' + p.id + '" "Point(' + p.lon + " " + p.lat + ')"^^geo:wktLiteral)').join(" ");
        const q = "SELECT ?id ?item ?prop ?img ?coord ?sl (GROUP_CONCAT(DISTINCT ?l; separator=\"|\") AS ?nombres) WHERE {" +
          " VALUES (?id ?centro) { " + vals + " }" +
          " SERVICE wikibase:around { ?item wdt:P625 ?coord . bd:serviceParam wikibase:center ?centro ; wikibase:radius \"" + (R / 1000) + "\" . }" +
          " VALUES ?prop { wdt:P18 wdt:P8517 wdt:P3451 wdt:P5775 wdt:P4291 wdt:P8592 wdt:P5252 } ?item ?prop ?img . ?item wikibase:sitelinks ?sl . ?item rdfs:label|skos:altLabel ?l ." +
          " FILTER(LANG(?l) IN (" + idiomas + ")) } GROUP BY ?id ?item ?prop ?img ?coord ?sl";
        const filas = await sparql(q);
        if (!filas) process.stderr.write("tanda perdida: " + tanda.map(p => p.id).join(" ") + "\n");
        for (const f of filas || []) {
          const p = porId[f.id.value]; if (!p) continue;
          const m = /Point\(([-\d.eE]+) ([-\d.eE]+)\)/.exec(f.coord.value); if (!m) continue;
          const img = decodeURIComponent(f.img.value.replace(/^.*Special:FilePath\//, ""));
          p.cands.push({ item: f.item.value.replace(/^.*\//, ""), img, p18: /P18$/.test(f.prop.value) ? 1 : 0, sl: +f.sl.value, d: dist(p.lat, p.lon, +m[2], +m[1]), nombres: f.nombres.value.split("|") });
        }
        process.stderr.write("radio " + R + " m: " + Math.min(i + T, g.length) + "/" + g.length + "\n");
        await espera(1000);
      }
    }
    // Con el mismo puntaje gana uno que esté a menos de 300 m (así el castillo le gana al pueblo que lleva su nombre);
    // después, el elemento más conocido (más artículos en Wikipedia): así el puente le gana a "la protesta en el puente"
    // y la calle a "el accidente en la calle". Al final, el más cercano.
    const lista = [];
    for (const p of conPal) {
      const sirve = p.cands.filter(c => esimg(c.img) && !MALA.test(c.img) && !VIEJA(c.img) && !(ESTACION.test(c.img + " " + c.nombres.join(" ")) && !ESTACION.test(p.name + " " + p.sub)));
      const buenos = sirve.map(c => Object.assign(c, puntaje(p, c.nombres))).filter(c => c.s > 0).sort((a, b) => b.s - a.s || (a.d > 300) - (b.d > 300) || b.sl - a.sl || a.d - b.d || b.p18 - a.p18);
      if (!buenos.length) {
        // Para revisar a mano: los 4 elementos más conocidos cerca (el nombre en castellano a veces no se parece al de Wikidata).
        const top = sirve.filter((c, i, a) => a.findIndex(x => x.item === c.item) === i).sort((a, b) => b.sl - a.sl || a.d - b.d).slice(0, 4);
        if (top.length) lista.push(p.id + "\t<" + p.name + "> " + p.sub + "\n" + top.map(c => "    " + c.item + " sl" + c.sl + " " + Math.round(c.d) + "m " + c.nombres.slice(0, 3).join(" / ") + " :: " + c.img).join("\n"));
        continue;
      }
      const c = buenos[0];
      salida.push([p.id, ruta(c.img), "wikidata", c.img, "s" + c.s + " sl" + c.sl + " " + Math.round(c.d) + " m (" + c.item + " " + c.nombres.slice(0, 3).join(" / ") + ") [" + c.w.join(",") + "] <" + p.name + ">"].join("\t"));
    }
    if (process.env.LISTA) fs.writeFileSync(process.env.LISTA, lista.join("\n") + "\n");
  } else if (modo === "commons") {
    const porId = {}; conPal.forEach(p => { porId[p.id] = p; p.cands = []; });
    const T = 6;
    for (let i = 0; i < conPal.length; i += T) {
      const tanda = conPal.slice(i, i + T);
      const vals = tanda.map(p => '("' + p.id + '" "' + p.lat + "|" + p.lon + '" "' + radioCommons(p) + '")').join(" ");
      const q = "SELECT ?id ?title WHERE { VALUES (?id ?c ?r) { " + vals + " }" +
        " SERVICE wikibase:mwapi { bd:serviceParam wikibase:endpoint \"commons.wikimedia.org\"; wikibase:api \"Generator\";" +
        " mwapi:generator \"geosearch\"; mwapi:ggscoord ?c; mwapi:ggsradius ?r; mwapi:ggsnamespace \"6\"; mwapi:ggslimit \"100\"; wikibase:limit \"once\" ." +
        " ?title wikibase:apiOutput mwapi:title. } }";
      const filas = await sparql(q);
      if (!filas) process.stderr.write("tanda perdida: " + tanda.map(p => p.id).join(" ") + "\n");
      for (const f of filas || []) { const p = porId[f.id.value]; if (p) p.cands.push(f.title.value.replace(/^File:/, "")); }
      process.stderr.write("commons: " + Math.min(i + T, conPal.length) + "/" + conPal.length + "\n");
      await espera(800);
    }
    for (const p of conPal) {
      const buenos = p.cands.filter(t => esimg(t) && !MALA.test(t) && !VIEJA(t) && !(ESTACION.test(t) && !ESTACION.test(p.name + " " + p.sub)))
        .map(t => Object.assign({ t }, puntaje(p, [t.replace(/\.[a-z]+$/i, "")]))).filter(c => c.s >= 2 || (c.s === 1 && p.pal.length === 1));
      if (!buenos.length) continue;
      // Entre las que nombran al lugar, la que más palabras tiene en común; a igualdad, la más reciente por el nombre (año más alto).
      const anio = t => Math.max(0, ...(t.match(/(19|20)\d\d/g) || []).map(Number));
      buenos.sort((a, b) => b.s - a.s || b.w.length - a.w.length || anio(b.t) - anio(a.t));
      const c = buenos[0];
      salida.push([p.id, ruta(c.t), "commons", c.t, "s" + c.s + " [" + c.w.join(",") + "] " + buenos.length + " fotos <" + p.name + ">"].join("\t"));
    }
  }
  if (modo === "texto") {
    // Cómo se nombra la ciudad en los títulos de Commons.
    const CIUDAD = { caba: '"Buenos Aires"', berlin: "Berlin", paris: "Paris", roma: "(Roma OR Rome)", madrid: "Madrid", barcelona: "Barcelona",
      amsterdam: "Amsterdam", rio: '"Rio de Janeiro"', bogota: "(Bogotá OR Bogota)", lisboa: "(Lisboa OR Lisbon)", tokio: "(Tokyo OR 東京)" }[process.argv[5]] || "";
    const esc = t => t.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    const porId = {}; conPal.forEach(p => { porId[p.id] = p; p.cands = []; });
    const T = 4;
    for (let i = 0; i < conPal.length; i += T) {
      const tanda = conPal.slice(i, i + T);
      const vals = tanda.map(p => '("' + p.id + '" "' + esc('"' + p.name.replace(/ · .*/, "").replace(/\(.*?\)/g, "").replace(/"/g, "").trim() + '" ' + CIUDAD + " filetype:bitmap") + '")').join(" ");
      const q = "SELECT ?id ?title WHERE { VALUES (?id ?s) { " + vals + " }" +
        " SERVICE wikibase:mwapi { bd:serviceParam wikibase:endpoint \"commons.wikimedia.org\"; wikibase:api \"Search\"; mwapi:srsearch ?s;" +
        " mwapi:srnamespace \"6\"; mwapi:srlimit \"10\"; wikibase:limit \"once\" . ?title wikibase:apiOutput mwapi:title. } }";
      const filas = await sparql(q);
      if (!filas) process.stderr.write("tanda perdida: " + tanda.map(p => p.id).join(" ") + "\n");
      for (const f of filas || []) { const p = porId[f.id.value]; if (p) p.cands.push(f.title.value.replace(/^File:/, "")); }
      process.stderr.write("texto: " + Math.min(i + T, conPal.length) + "/" + conPal.length + "\n");
      await espera(800);
    }
    for (const p of conPal) {
      const buenos = p.cands.filter(t => esimg(t) && !MALA.test(t) && !VIEJA(t) && !(ESTACION.test(t) && !ESTACION.test(p.name + " " + p.sub)))
        .map(t => Object.assign({ t }, puntaje(p, [t.replace(/\.[a-z]+$/i, "")]))).filter(c => c.s >= 2 || (c.s === 1 && p.pal.length === 1));
      if (!buenos.length) continue;
      buenos.sort((a, b) => b.s - a.s || b.w.length - a.w.length);
      const c = buenos[0];
      salida.push([p.id, ruta(c.t), "texto", c.t, "s" + c.s + " [" + c.w.join(",") + "] " + buenos.length + " fotos <" + p.name + "> | " + buenos.slice(1, 4).map(x => x.t).join(" | ")].join("\t"));
    }
  }
  process.stdout.write(salida.join("\n") + (salida.length ? "\n" : ""));
  process.stderr.write(salida.length + " fotos encontradas\n");
})();
