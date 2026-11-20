/* Recorrido automático de pantallas (tarjeta #227). No se publica (los zz-* quedan afuera).
   Uso, con la app abierta en una ciudad (http://localhost:5173/?ciudad=lisboa), desde la consola:
     await fetch("/zz-recorrido.js").then(r => r.text()).then(eval); await window.RECORRIDO.correr();
   Abre cada pantalla, cada plan y la ficha de cada lugar, y anota en window.RECORRIDO.r:
   - desborde: pantallas donde algo se sale del ancho (y qué elemento);
   - enlaces: enlaces internos a lugares, planes o pestañas que no existen;
   - tel: enlaces de teléfono que no se pueden marcar;
   - errores: errores de JavaScript;
   - falta: textos que el traductor no encontró (solo si el idioma no es castellano). */
(() => {
  "use strict";
  const espera = ms => new Promise(r => setTimeout(r, ms));
  const R = { pantallas: 0, desborde: [], enlaces: [], tel: [], errores: [], falta: [], listo: false };
  window.addEventListener("error", e => R.errores.push((e.message || "error") + " @ " + location.hash));
  window.addEventListener("unhandledrejection", e => R.errores.push("promesa: " + (e.reason && e.reason.message || e.reason) + " @ " + location.hash));

  const ciudad = () => new URLSearchParams(location.search).get("ciudad") || (window.GUIA_CIUDAD || "");
  const norm = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const slug = s => norm(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const TABS = ["llegada", "moverse", "seguridad", "ayuda", "practica", "vuelo", "apps", "calendario"];

  /* Elemento más chico que se sale del ancho, sin contar los que están dentro de un carrusel con scroll propio. */
  const quienSeSale = raiz => {
    const W = document.documentElement.clientWidth;
    const scrollea = el => { for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) { const o = getComputedStyle(p).overflowX; if (o === "auto" || o === "scroll" || o === "hidden" || o === "clip") return true; } return false; };
    const malos = [];
    raiz.querySelectorAll("*").forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.right <= W + 1 || scrollea(el)) return;
      if (getComputedStyle(el).position === "fixed" && r.left >= W) return;
      malos.push(el);
    });
    const hojas = malos.filter(el => !malos.some(o => o !== el && el.contains(o)));
    return hojas.slice(0, 3).map(el => (el.tagName.toLowerCase() + (el.className && typeof el.className === "string" ? "." + el.className.trim().split(/\s+/).join(".") : "") + " «" + (el.textContent || "").trim().slice(0, 40) + "» " + Math.round(el.getBoundingClientRect().right) + "px"));
  };

  const revisar = (donde, ids, its) => {
    R.pantallas++;
    const W = document.documentElement.clientWidth;
    if (document.documentElement.scrollWidth > W + 1) R.desborde.push(donde + ": " + quienSeSale(document.body).join(" | "));
    const sheet = document.getElementById("sheet");
    if (sheet && sheet.offsetParent && sheet.scrollWidth > sheet.clientWidth + 1) R.desborde.push(donde + " (ficha): " + quienSeSale(sheet).join(" | "));
    document.querySelectorAll('a[href^="#/"]').forEach(a => {
      const [n, arg] = a.getAttribute("href").replace(/^#\/?/, "").split("/").map(decodeURIComponent);
      if (n === "lugar" && !ids.has(arg)) R.enlaces.push(donde + " → " + a.getAttribute("href"));
      if (n === "itinerario" && !its.has(arg)) R.enlaces.push(donde + " → " + a.getAttribute("href"));
      if (n === "info" && arg && TABS.indexOf(arg) < 0) R.enlaces.push(donde + " → " + a.getAttribute("href"));
    });
    document.querySelectorAll('a[href^="tel:"]').forEach(a => { if (!/^tel:\+?\d{2,15}$/.test(a.getAttribute("href"))) R.tel.push(donde + ": " + a.getAttribute("href")); });
    document.querySelectorAll('a[href=""], a[href="#"]').forEach(a => { if (!a.onclick && !a.dataset.act) R.enlaces.push(donde + ": enlace vacío «" + a.textContent.trim().slice(0, 30) + "»"); });
  };

  const ir = async (h, ms) => { location.hash = h; await espera(ms || 120); };

  async function correr(opciones) {
    const o = Object.assign({ lugares: true, pausa: 120 }, opciones || {});
    const id = ciudad(), city = window.CITY_DATA[id];
    const ids = new Set(city.places.map(p => slug(p.name)));
    const its = new Set((city.itineraries || []).map(i => i.id));
    const lista = ["#/", "#/explorar", "#/mapa", "#/barrios", "#/viaje", "#/armar", "#/pasaporte"]
      .concat(TABS.map(t => "#/info/" + t)).concat([...its].map(i => "#/itinerario/" + i));
    for (const h of lista) { await ir(h, o.pausa + 150); revisar(h, ids, its); }
    if (o.lugares) for (const p of ids) { await ir("#/lugar/" + p, o.pausa); revisar("#/lugar/" + p, ids, its); }
    await ir("#/", 200);
    if (window.I18N && window.I18N.falta) {
      const propios = new Set(); city.places.forEach(p => { propios.add(p.name); propios.add(p.address); propios.add(p.barrio); });
      const D = window.I18N_FULL || {}, traducidos = new Set(Object.keys(D).map(k => D[k]));
      const yaTraducido = t => traducidos.has(t) || t.split(/ · /).every(x => traducidos.has(x) || propios.has(x) || !/[a-záéíóúñ]{3}/i.test(x));
      R.falta = [...window.I18N.falta].filter(t => !propios.has(t) && /[a-záéíóúñ]{3}/i.test(t) && !yaTraducido(t) && !/^[A-Z]{3}( · .*)?$/.test(t))
        /* Quedan los que parecen castellano (tienen palabras comunes) y no son direcciones. */
        .filter(t => /(^|[^\p{L}])(y|de|del|la|el|los|las|con|en|para|que|tu|tus|un|una|es|más|cerca|abre|hoy|lugar|lugares)([^\p{L}]|$)/iu.test(t)
          && !/^(Rua|Avenida|Av\.|Praça|Travessa|Largo|Calçada|Estrada|Calle|Carrera|Via|Piazza|Rue|Place|Boulevard|Straße|Platz)\b/.test(t)
          && !/ · .* ·$/.test(t));
    }
    R.listo = true;
    return R;
  }
  window.RECORRIDO = { correr, r: R };
})();
