/* Intro animada al entrar a una ciudad y portada que responde al toque (tarjeta #212).

   Intro:
   - Se muestra al llegar a una ciudad desde el globo o desde la lista (js/globo.js y js/ciudad.js dejan "guia.intro" en sessionStorage
     antes de recargar; si no hay recarga, llaman a GUIA_INTRO.play). No se muestra al abrir la app de nuevo ni al recargar.
   - Cada ciudad tiene su dibujo (ARTE), su forma de mostrar el nombre y su salida. Los colores y la letra salen de css/temas.css.
   - Dura unos 2 segundos y se saltea tocando o con cualquier tecla. Con "reducir movimiento" es un fundido corto con el nombre.
   Portada:
   - Al tocar la portada de Inicio salen figuras de la ciudad desde el dedo (monedas en Roma, estrellas en Madrid, etc.).
     En la compu, el dibujo de fondo de la portada se mueve un poco con el mouse. Con "reducir movimiento" no hace nada.
   Estilos: css/intro.css. Solo se anima transform y opacity (y el trazo de algunos dibujos, que es chico). */
(() => {
  "use strict";
  const KEY = "guia.intro";
  const html = document.documentElement;
  const reduced = () => { try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } };
  const ciudad = () => html.getAttribute("data-ciudad") || "caba";

  /* ── Dibujos de cada ciudad (viewBox 0 0 400 300). Clases de animación en css/intro.css; --d es el retraso. ── */
  const D = (s, n) => "--d:" + (s + (n || 0)).toFixed(2) + "s";
  const rayos = () => { let s = ""; for (let i = 0; i < 16; i++) { const a = i * 22.5, l = i % 2 ? 84 : 104;
    s += '<line x1="200" y1="' + (150 - 58) + '" x2="200" y2="' + (150 - l) + '" transform="rotate(' + a + ' 200 150)"/>'; } return s; };
  const estrella = (x, y, r) => { let p = []; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .42 : r; p.push((x + rr * Math.cos(a)).toFixed(1) + "," + (y + rr * Math.sin(a)).toFixed(1)); } return '<polygon points="' + p.join(" ") + '"/>'; };
  const ARTE = {
    caba: () => '<g class="a-spin" style="' + D(.05) + '" fill="none" stroke="#f0c45a" stroke-width="6" stroke-linecap="round">' + rayos() + "</g>" +
      '<g class="a-pop" style="' + D(.25) + '"><circle cx="200" cy="150" r="50" fill="#f0c45a"/>' +
      '<g fill="#3b2600"><circle cx="184" cy="142" r="5"/><circle cx="216" cy="142" r="5"/></g>' +
      '<path d="M180 164q20 16 40 0" fill="none" stroke="#3b2600" stroke-width="4" stroke-linecap="round"/></g>' +
      '<g fill="none" stroke="#f0c45a" stroke-width="3.5" stroke-linecap="round">' +
      '<path class="a-draw" style="' + D(.45) + '" pathLength="1" d="M120 150c0-44-62-44-62 0 0 28 40 28 40 5 0-15-21-15-21 0"/>' +
      '<path class="a-draw" style="' + D(.45) + '" pathLength="1" d="M280 150c0 44 62 44 62 0 0-28-40-28-40-5 0 15 21 15 21 0"/></g>',
    berlin: () => '<line class="a-draw" style="' + D(0) + '" pathLength="1" x1="10" y1="236" x2="390" y2="236" stroke="#ffd400" stroke-width="4"/>' +
      '<g class="a-tren" style="' + D(.1) + '"><rect x="40" y="146" width="320" height="80" rx="16" fill="#ffd400"/>' +
      '<g fill="#1a1b1d"><rect x="62" y="162" width="44" height="34" rx="5"/><rect x="118" y="162" width="44" height="34" rx="5"/><rect x="178" y="162" width="44" height="64" rx="4"/><rect x="238" y="162" width="44" height="34" rx="5"/><rect x="294" y="162" width="44" height="34" rx="5"/></g>' +
      '<rect x="40" y="208" width="320" height="6" fill="#1a1b1d" opacity=".25"/><circle cx="90" cy="232" r="9" fill="#1a1b1d"/><circle cx="310" cy="232" r="9" fill="#1a1b1d"/></g>',
    paris: () => { let s = '<g fill="none" stroke="#e9c478" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">' +
      '<path class="a-draw" style="' + D(0) + '" pathLength="1" d="M200 22V40M200 40L186 118L166 196L136 276M200 40L214 118L234 196L264 276"/>' +
      '<path class="a-draw" style="' + D(.35) + '" pathLength="1" d="M182 118H218M172 160H228M156 214H244M144 276Q200 226 256 276"/></g><g fill="#fff">';
      const pts = [[120, 60], [282, 70], [150, 110], [252, 128], [100, 170], [300, 176], [130, 240], [276, 236], [200, 96], [210, 180], [170, 54], [240, 46], [86, 112], [318, 120]];
      pts.forEach((p, i) => { s += '<circle class="a-brillo" style="' + D(.6, (i * .11) % .9) + '" cx="' + p[0] + '" cy="' + p[1] + '" r="' + (i % 3 ? 2.4 : 3.6) + '"/>'; });
      return s + "</g>"; },
    roma: () => { let s = '<g fill="none" stroke="#f6ead8" stroke-width="3">';
      for (let i = 0; i < 7; i++) s += '<path class="a-sube" style="' + D(.04 * i) + '" d="M' + (66 + i * 40) + ' 250V212a14 14 0 0 1 28 0V250"/>';
      for (let i = 0; i < 6; i++) s += '<path class="a-sube" style="' + D(.3 + .04 * i) + '" d="M' + (86 + i * 40) + ' 196V164a12 12 0 0 1 24 0V196"/>';
      s += '<path class="a-draw" style="' + D(.55) + '" pathLength="1" d="M52 252H348M60 200H340M74 150H326"/></g>';
      return s + '<g class="a-moneda" style="' + D(.7) + '"><ellipse cx="200" cy="92" rx="22" ry="22" fill="#e0a13a" stroke="#fff3c4" stroke-width="3"/><text x="200" y="100" text-anchor="middle" font-size="22" font-weight="700" fill="#5c1e14">€</text></g>'; },
    madrid: () => { let s = '<circle class="a-draw" style="' + D(.5) + '" pathLength="1" cx="200" cy="150" r="104" fill="none" stroke="#f2b632" stroke-width="3"/><g fill="#fff">';
      for (let i = 0; i < 7; i++) { const a = -Math.PI / 2 + i * 2 * Math.PI / 7, x = 200 + 74 * Math.cos(a), y = 150 + 74 * Math.sin(a);
        const fx = Math.round(Math.cos(a) * 260 + (i % 2 ? 60 : -60)), fy = Math.round(Math.sin(a) * 220 - 40);
        s += '<g class="a-vuela" style="' + D(.06 * i) + ";--fx:" + fx + "px;--fy:" + fy + 'px">' + estrella(x, y, 16) + "</g>"; }
      return s + "</g>"; },
    barcelona: () => { let s = '<circle class="a-pop" style="' + D(.75) + '" cx="336" cy="52" r="28" fill="#f5c331"/><g fill="none" stroke="#fff" stroke-width="2">';
      for (let f = 0; f < 3; f++) for (let c = 0; c < 5; c++) { const x = 60 + c * 56, y = 66 + f * 56, cx = x + 28, cy = y + 28, dist = Math.abs(c - 2) + Math.abs(f - 1);
        s += '<g class="a-gira" style="' + D(.08 * dist) + '"><rect x="' + x + '" y="' + y + '" width="54" height="54" fill="rgba(255,255,255,.06)"/>' +
          '<path d="M' + cx + " " + cy + "C" + (cx - 11) + " " + (cy - 24) + " " + (cx + 11) + " " + (cy - 24) + " " + cx + " " + cy + "C" + (cx + 24) + " " + (cy - 11) + " " + (cx + 24) + " " + (cy + 11) + " " + cx + " " + cy +
          "C" + (cx + 11) + " " + (cy + 24) + " " + (cx - 11) + " " + (cy + 24) + " " + cx + " " + cy + "C" + (cx - 24) + " " + (cy + 11) + " " + (cx - 24) + " " + (cy - 11) + " " + cx + " " + cy + 'Z"/></g>'; }
      return s + "</g>"; },
    amsterdam: () => { const casas = ["M40 250V140h10v-14h10v-14h20v14h10v14h10v110", "M110 250V134q0-14 11-18v-14h18v14q11 4 11 18v116", "M160 250V130q4-26 20-26t20 26v120", "M210 250V140l22-36 22 36v110", "M264 250V134h8v-10h8v-10h16v10h8v10h8v116", "M320 250V140q0-16 20-22 20 6 20 22v110"];
      const colores = ["#ff9b5c", "#fff", "#ffcf9f", "#fff", "#ff8a1f", "#ffe1c4"];
      let s = ""; casas.forEach((d, i) => { s += '<g class="a-salta" style="' + D(.08 * i) + '"><path d="' + d + 'Z" fill="' + colores[i] + '" opacity=".92"/><g fill="#13293a" opacity=".55"><rect x="' + (52 + i * 54 - (i > 4 ? 2 : 0)) + '" y="170" width="10" height="14"/><rect x="' + (70 + i * 54 - (i > 4 ? 2 : 0)) + '" y="170" width="10" height="14"/><rect x="' + (60 + i * 54 - (i > 4 ? 2 : 0)) + '" y="210" width="12" height="40"/></g></g>'; });
      return s + '<g class="a-agua" style="' + D(.5) + '" fill="none" stroke="#8fd3df" stroke-width="4" stroke-linecap="round"><path d="M-40 268q20-10 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0"/><path d="M-20 284q20-10 40 0t40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0 40 0" opacity=".6"/></g>'; },
    rio: () => '<circle class="a-amanece" style="' + D(0) + '" cx="250" cy="150" r="46" fill="#ffc21a"/>' +
      '<path class="a-sube" style="' + D(.25) + '" d="M20 246C60 246 74 200 96 196 118 192 126 236 150 236 168 236 176 150 214 120 246 96 262 150 270 186 280 228 300 246 380 246V262H20Z" fill="#00513d"/>' +
      '<g class="a-ola" style="' + D(.45) + '" fill="#fff"><path d="M-80 262C-60 262-60 278-40 278S-20 262 0 262 20 278 40 278 60 262 80 262 100 278 120 278 140 262 160 262 180 278 200 278 220 262 240 262 260 278 280 278 300 262 320 262 340 278 360 278 380 262 400 262 420 278 440 278 460 262 480 262V272C460 272 460 288 440 288S420 272 400 272 380 288 360 288 340 272 320 272 300 288 280 288 260 272 240 272 220 288 200 288 180 272 160 272 140 288 120 288 100 272 80 272 60 288 40 288 20 272 0 272-20 288-40 288-60 272-80 272Z"/></g>',
    bogota: () => '<path class="a-sube" style="' + D(.3) + '" d="M10 272L90 214L130 234L200 172L270 226L320 204L390 272Z" fill="#5d8a6a"/>' +
      '<g class="a-sube" style="' + D(.5) + '" fill="#fcfbf8"><rect x="192" y="160" width="16" height="13"/><path d="M190 160l10-10 10 10z"/></g>' +
      '<g fill="none" stroke="#e9bd4f" stroke-width="4" stroke-linecap="round">' +
      '<path class="a-draw a-espiral" style="' + D(0) + '" pathLength="1" d="M200 106m-6 0a6 6 0 1 1 12 0a15 15 0 1 1-30 0a24 24 0 1 1 48 0a33 33 0 1 1-66 0a42 42 0 1 1 84 0"/>' +
      '<path class="a-izq" style="' + D(.2) + '" d="M0 30l14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14"/>' +
      '<path class="a-der" style="' + D(.2) + '" d="M0 286l14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14 14-14 14 14"/></g>'
  };

  /* Figuras que salen al tocar la portada. */
  const FIG = {
    caba: '<circle cx="10" cy="10" r="6" fill="#f0c45a"/><g stroke="#f0c45a" stroke-width="2"><path d="M10 0v3M10 17v3M0 10h3M17 10h3"/></g>',
    berlin: '<rect x="3" y="2" width="14" height="16" fill="#ffd400"/>',
    paris: '<path d="M10 0l2.6 7.4L20 10l-7.4 2.6L10 20l-2.6-7.4L0 10l7.4-2.6z" fill="#f3d99a"/>',
    roma: '<circle cx="10" cy="10" r="8" fill="#e0a13a" stroke="#fff3c4" stroke-width="2"/>',
    madrid: estrella(10, 10, 9).replace("<polygon", '<polygon fill="#fff"'),
    barcelona: '<path d="M10 10C6 1 14 1 10 10C19 6 19 14 10 10C14 19 6 19 10 10C1 14 1 6 10 10Z" fill="#fff" stroke="#f5c331" stroke-width="1.5"/>',
    amsterdam: '<path d="M10 20V11M4 4q6 2 6 7 0-5 6-7-1 9-6 9-5 0-6-9z" fill="#ff8a1f" stroke="#2f8f4e" stroke-width="1.6"/>',
    rio: '<circle cx="10" cy="10" r="7" fill="none" stroke="#fff" stroke-width="2.4"/>',
    bogota: '<path d="M10 10m-1.5 0a1.5 1.5 0 1 1 3 0a4 4 0 1 1-8 0a6.5 6.5 0 1 1 13 0" fill="none" stroke="#e9bd4f" stroke-width="2.2" stroke-linecap="round"/>'
  };
  /* Cómo se mueven: "cae" (con gravedad, como monedas tiradas), "sube" (como burbujas) o "explota" (para todos lados). */
  const MOV = { roma: "cae", rio: "sube", amsterdam: "cae", paris: "explota", madrid: "explota", berlin: "explota", caba: "explota", barcelona: "explota", bogota: "explota" };

  const nombreCiudad = id => {
    const c = (window.GUIA_CIUDADES || []).find(x => x.id === id);
    const n = c ? c.name : "";
    try { return (window.I18N && window.I18N.tr && window.I18N.tr(n)) || n; } catch (e) { return n; }
  };
  const letras = s => Array.from(s).map((ch, i) => '<span style="--i:' + i + '">' + (ch === " " ? "&nbsp;" : ch.replace(/[<&>]/g, "")) + "</span>").join("");

  let vivo = null;
  function play(id) {
    id = id || ciudad();
    if (vivo || !document.body) return;
    const arte = ARTE[id] || ARTE.caba;
    const el = document.createElement("div");
    el.className = "intro" + (reduced() ? " quieta" : "");
    el.setAttribute("data-c", id);
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = '<div class="intro-fondo"></div><svg class="intro-arte" viewBox="0 0 400 300" aria-hidden="true" focusable="false">' + arte() + "</svg>" +
      '<div class="intro-nombre">' + letras(nombreCiudad(id)) + "</div>";
    document.body.appendChild(el);
    try { performance.mark("guia-intro"); } catch (e) { /* nada */ }
    html.classList.remove("intro-tapa", "globo-llega");
    vivo = el;
    const dura = reduced() ? 700 : 2300;
    let t = setTimeout(salir, dura);
    /* No sale hasta que la guía terminó de armarse: así nunca se ve la página a medio cargar. */
    function salir() {
      if (!vivo) return;
      if (document.readyState === "loading") { clearTimeout(t); document.addEventListener("DOMContentLoaded", () => { t = setTimeout(salir, 120); }, { once: true }); return; }
      clearTimeout(t); vivo = null;
      el.classList.add("fuera");
      removeEventListener("pointerdown", salir, true); removeEventListener("keydown", salir, true);
      setTimeout(() => { el.remove(); pista(); }, reduced() ? 150 : 520);
    }
    /* Se saltea tocando o con una tecla (después de un instante, para que el toque que eligió la ciudad no la cierre). */
    setTimeout(() => { addEventListener("pointerdown", salir, true); addEventListener("keydown", salir, true); }, 350);
  }

  /* Al terminar la intro, la portada tira unas figuras sola, como pista de que se puede tocar. */
  function pista() {
    const h = document.querySelector(".hero");
    if (!h || reduced()) return;
    const r = h.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    rafaga(h, r.left + r.width * .78, r.top + r.height * .28, 7);
  }

  /* ── Portada que responde al toque ── */
  function rafaga(hero, x, y, n) {
    const id = ciudad(), fig = FIG[id] || FIG.caba, mov = MOV[id] || "explota";
    const r = hero.getBoundingClientRect();
    const capa = hero.querySelector(".hero-figuras") || (() => { const c = document.createElement("div"); c.className = "hero-figuras"; c.setAttribute("aria-hidden", "true"); hero.appendChild(c); return c; })();
    for (let i = 0; i < n; i++) {
      const s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      s.setAttribute("viewBox", "0 0 20 20"); s.setAttribute("class", "hero-fig");
      s.innerHTML = fig;
      const tam = 14 + Math.random() * 14;
      s.style.width = s.style.height = tam + "px";
      s.style.left = (x - r.left - tam / 2) + "px"; s.style.top = (y - r.top - tam / 2) + "px";
      capa.appendChild(s);
      const a = Math.random() * Math.PI * 2, v = 50 + Math.random() * 90, giro = (Math.random() - .5) * 540;
      let pasos;
      if (mov === "cae") {
        const dx = (Math.random() - .5) * 180, alto = 70 + Math.random() * 80;
        pasos = [{ transform: "translate(0,0) rotate(0) scale(.4)", opacity: 0 }, { transform: "translate(" + dx * .5 + "px," + (-alto) + "px) rotate(" + giro * .5 + "deg) scale(1)", opacity: 1, offset: .4 },
          { transform: "translate(" + dx + "px," + (alto * .6) + "px) rotate(" + giro + "deg) scale(.9)", opacity: 0 }];
      } else if (mov === "sube") {
        const dx = (Math.random() - .5) * 70;
        pasos = [{ transform: "translate(0,0) scale(.3)", opacity: 0 }, { transform: "translate(" + dx * .4 + "px,-30px) scale(1)", opacity: .95, offset: .25 },
          { transform: "translate(" + dx + "px," + (-120 - Math.random() * 80) + "px) scale(1.3)", opacity: 0 }];
      } else {
        pasos = [{ transform: "translate(0,0) rotate(0) scale(.3)", opacity: 0 }, { transform: "translate(" + Math.cos(a) * v * .5 + "px," + Math.sin(a) * v * .5 + "px) rotate(" + giro * .4 + "deg) scale(1.1)", opacity: 1, offset: .3 },
          { transform: "translate(" + Math.cos(a) * v + "px," + Math.sin(a) * v + "px) rotate(" + giro + "deg) scale(.6)", opacity: 0 }];
      }
      const an = s.animate(pasos, { duration: 900 + Math.random() * 500, easing: "cubic-bezier(.2,.7,.3,1)", fill: "forwards" });
      an.onfinish = () => s.remove();
    }
  }
  document.addEventListener("pointerdown", e => {
    if (reduced() || vivo) return;
    const hero = e.target.closest && e.target.closest(".hero");
    if (!hero || e.target.closest("a, button, input, select, label, textarea")) return;
    rafaga(hero, e.clientX, e.clientY, 9);
  });
  /* En la compu, el dibujo de la portada se corre un poco siguiendo el mouse. */
  document.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse" || reduced()) return;
    const hero = e.target.closest && e.target.closest(".hero");
    if (!hero) return;
    const r = hero.getBoundingClientRect();
    hero.style.setProperty("--px", ((e.clientX - r.left) / r.width - .5) * -18 + "px");
    hero.style.setProperty("--py", ((e.clientY - r.top) / r.height - .5) * -12 + "px");
  }, { passive: true });

  /* ── ¿Hay que mostrar la intro al cargar? ── */
  let pendiente = null;
  try { pendiente = sessionStorage.getItem(KEY); if (pendiente) sessionStorage.removeItem(KEY); } catch (e) { /* sin almacenamiento: sin intro */ }
  if (pendiente) {
    /* Hasta que se arma la intro, la página queda tapada con el fondo de la ciudad, para que no se vea un instante. */
    html.classList.add("intro-tapa");
    /* Arranca apenas existe <body>, mientras la guía todavía carga sus datos por detrás. */
    const ir = () => { if (document.body) play(pendiente === "1" ? null : pendiente); else setTimeout(ir, 16); };
    ir();
    setTimeout(() => html.classList.remove("intro-tapa"), 4000);
  }

  window.GUIA_INTRO = {
    play: play,
    /* Para antes de recargar: la próxima carga muestra la intro de esa ciudad. */
    pedir: id => { try { sessionStorage.setItem(KEY, id || "1"); } catch (e) { /* sin intro */ } }
  };
})();
