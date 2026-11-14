/* Globo de entrada y "Cambiar destino" (tarjeta #167; diseño en docs/diseno/mapa-galactico/, tarjeta #113).

   Qué hace:
   - La primera vez que alguien abre la guía (sin ciudad guardada y sin "?ciudad=" en el enlace) aparece el globo azul
     con la pregunta "¿A dónde viajás?". De dónde sale se calcula por la zona horaria del dispositivo (no pide permiso
     ni manda nada a ningún lado) y se puede cambiar.
   - Al tocar un destino se dibuja la ruta de vuelo, la cámara la sigue y entra "pum" a la ciudad: termina adentro de la
     guía, sin botón. Si es otra ciudad, se guarda y la página se recarga con un fundido azul.
   - "Cambiar destino" (el nombre de la ciudad arriba, o el botón del inicio) vuelve a abrir el globo y vuela desde la
     ciudad en la que estás.
   - Si el globo no puede cargar, se abre la lista de ciudades de siempre (js/ciudad.js).

   Archivos: este (se carga en el <head> y pesa poco hasta que se usa), css/globo.css, y los que trae al abrirse:
   js/vendor/d3-array.min.js y js/vendor/d3-geo.min.js (d3, licencia ISC) y data/globo-continentes.js (Natural Earth).
   Los textos del globo están traducidos acá abajo (TXT) y no pasan por el traductor general.

   Para sumar una ciudad al globo: su ubicación va en GEO (abajo) con el mismo id de data/ciudades.js. Si falta,
   la ciudad igual aparece en la lista, pero se entra sin vuelo. Las que todavía no están en la guía van en PRONTO. */
(() => {
  "use strict";

  /* Ubicación de cada ciudad: [longitud, latitud]. */
  const GEO = { caba: [-58.38, -34.60], berlin: [13.40, 52.52], paris: [2.35, 48.86], madrid: [-3.70, 40.42], roma: [12.50, 41.90] };
  /* Ciudades que vienen (tarjetas #100 y #101): se ven en el globo con un círculo vacío y "pronto". */
  const PRONTO = [{ id: "madrid", name: "Madrid", country: "España" }];

  /* Desde dónde sale la persona: se busca su zona horaria en esta lista. Si no está, arranca en Buenos Aires. */
  const ORIGINS = [
    { name: "Buenos Aires", id: "caba", p: [-58.38, -34.60], tz: ["America/Argentina/Buenos_Aires", "America/Buenos_Aires"] },
    { name: "Córdoba", p: [-64.18, -31.42], tz: ["America/Argentina/Cordoba", "America/Cordoba"] },
    { name: "Mendoza", p: [-68.83, -32.89], tz: ["America/Argentina/Mendoza", "America/Mendoza"] },
    { name: "Montevideo", p: [-56.16, -34.90], tz: ["America/Montevideo"] },
    { name: "Santiago de Chile", p: [-70.65, -33.45], tz: ["America/Santiago"] },
    { name: "San Pablo", p: [-46.63, -23.55], tz: ["America/Sao_Paulo"] },
    { name: "Lima", p: [-77.04, -12.05], tz: ["America/Lima"] },
    { name: "Bogotá", p: [-74.07, 4.71], tz: ["America/Bogota"] },
    { name: "Ciudad de México", p: [-99.13, 19.43], tz: ["America/Mexico_City"] },
    { name: "Nueva York", p: [-74.01, 40.71], tz: ["America/New_York", "America/Toronto"] },
    { name: "Los Ángeles", p: [-118.24, 34.05], tz: ["America/Los_Angeles"] },
    { name: "Madrid", id: "madrid", p: [-3.70, 40.42], tz: ["Europe/Madrid"] },
    { name: "Londres", p: [-0.13, 51.51], tz: ["Europe/London"] },
    { name: "París", id: "paris", p: [2.35, 48.86], tz: ["Europe/Paris"] },
    { name: "Berlín", id: "berlin", p: [13.40, 52.52], tz: ["Europe/Berlin"] },
    { name: "Roma", id: "roma", p: [12.50, 41.90], tz: ["Europe/Rome"] },
    { name: "Tokio", p: [139.69, 35.69], tz: ["Asia/Tokyo"] },
    { name: "Sídney", p: [151.21, -33.87], tz: ["Australia/Sydney"] }
  ];

  /* Textos del globo en cada idioma (los traduce Claude; nadie que hable cada idioma los revisó todavía). */
  const TXT = {
    en: { "¿A dónde viajás?": "Where are you traveling?", "Tocá un destino y te llevamos.": "Tap a destination and we'll take you there.", "Elegí tu próximo destino.": "Choose your next destination.", "Salís desde": "Leaving from", "Lo calculamos por la hora de tu dispositivo.": "We worked it out from your device's time zone.", "Estás acá": "You are here", "pronto": "soon", "Cerrar": "Close", "Destinos": "Destinations", "Cambiar destino": "Change destination", "Globo terráqueo. Arrastrá para girarlo.": "Globe. Drag to turn it." },
    pt: { "¿A dónde viajás?": "Para onde você vai viajar?", "Tocá un destino y te llevamos.": "Toque em um destino e levamos você até lá.", "Elegí tu próximo destino.": "Escolha seu próximo destino.", "Salís desde": "Saindo de", "Lo calculamos por la hora de tu dispositivo.": "Calculamos pelo fuso horário do seu aparelho.", "Estás acá": "Você está aqui", "pronto": "em breve", "Cerrar": "Fechar", "Destinos": "Destinos", "Cambiar destino": "Mudar destino", "Globo terráqueo. Arrastrá para girarlo.": "Globo terrestre. Arraste para girá-lo." },
    fr: { "¿A dónde viajás?": "Où partez-vous ?", "Tocá un destino y te llevamos.": "Touchez une destination, on vous y emmène.", "Elegí tu próximo destino.": "Choisissez votre prochaine destination.", "Salís desde": "Départ de", "Lo calculamos por la hora de tu dispositivo.": "Déduit du fuseau horaire de votre appareil.", "Estás acá": "Vous êtes ici", "pronto": "bientôt", "Cerrar": "Fermer", "Destinos": "Destinations", "Cambiar destino": "Changer de destination", "Globo terráqueo. Arrastrá para girarlo.": "Globe terrestre. Faites-le glisser pour le tourner." },
    it: { "¿A dónde viajás?": "Dove viaggi?", "Tocá un destino y te llevamos.": "Tocca una destinazione e ti ci portiamo.", "Elegí tu próximo destino.": "Scegli la tua prossima destinazione.", "Salís desde": "Parti da", "Lo calculamos por la hora de tu dispositivo.": "Lo ricaviamo dal fuso orario del tuo dispositivo.", "Estás acá": "Sei qui", "pronto": "presto", "Cerrar": "Chiudi", "Destinos": "Destinazioni", "Cambiar destino": "Cambia destinazione", "Globo terráqueo. Arrastrá para girarlo.": "Globo terrestre. Trascinalo per farlo girare." },
    de: { "¿A dónde viajás?": "Wohin reist du?", "Tocá un destino y te llevamos.": "Tippe auf ein Ziel und wir bringen dich hin.", "Elegí tu próximo destino.": "Wähle dein nächstes Ziel.", "Salís desde": "Abflug ab", "Lo calculamos por la hora de tu dispositivo.": "Ermittelt aus der Zeitzone deines Geräts.", "Estás acá": "Du bist hier", "pronto": "bald", "Cerrar": "Schließen", "Destinos": "Ziele", "Cambiar destino": "Ziel ändern", "Globo terráqueo. Arrastrá para girarlo.": "Globus. Zum Drehen ziehen." },
    zh: { "¿A dónde viajás?": "你要去哪里旅行？", "Tocá un destino y te llevamos.": "点一个目的地，我们带你去。", "Elegí tu próximo destino.": "选择你的下一个目的地。", "Salís desde": "出发地", "Lo calculamos por la hora de tu dispositivo.": "根据你设备的时区推算。", "Estás acá": "你在这里", "pronto": "即将上线", "Cerrar": "关闭", "Destinos": "目的地", "Cambiar destino": "更换目的地", "Globo terráqueo. Arrastrá para girarlo.": "地球仪。拖动可旋转。" },
    ja: { "¿A dónde viajás?": "どこへ旅行しますか？", "Tocá un destino y te llevamos.": "行き先をタップすると、そこへお連れします。", "Elegí tu próximo destino.": "次の行き先を選んでください。", "Salís desde": "出発地", "Lo calculamos por la hora de tu dispositivo.": "端末のタイムゾーンから推定しました。", "Estás acá": "現在地", "pronto": "近日公開", "Cerrar": "閉じる", "Destinos": "行き先", "Cambiar destino": "行き先を変更", "Globo terráqueo. Arrastrá para girarlo.": "地球儀。ドラッグして回せます。" }
  };
  const idioma = () => (window.I18N && window.I18N.lang) || "es";
  const t = s => (TXT[idioma()] && TXT[idioma()][s]) || s;
  /* Nombres de ciudades y países: los traduce el traductor general si los conoce. */
  const nombre = s => { try { return (window.I18N && window.I18N.tr && window.I18N.tr(s)) || s; } catch (e) { return s; } };

  /* ── Llegada después de recargar: un fundido azul que se abre (css/globo.css, "globo-llega") ── */
  const LLEGA = "guia.globoLlega";
  try {
    if (sessionStorage.getItem(LLEGA)) {
      sessionStorage.removeItem(LLEGA);
      document.documentElement.classList.add("globo-llega");
      setTimeout(() => document.documentElement.classList.remove("globo-llega"), 1400);
    }
  } catch (e) { /* sin almacenamiento: no hay fundido */ }
  /* Primera vez (sin ciudad guardada ni "?ciudad="): la guía queda tapada hasta que aparece el globo, para que no se vea un instante. */
  const espera = on => document.documentElement.classList.toggle("globo-espera", on);
  try { if (!localStorage.getItem("guia.ciudad") && !/[?&]ciudad=/.test(location.search)) { espera(true); setTimeout(() => espera(false), 8000); } } catch (e) { /* nada */ }

  /* ── Carga lo que hace falta la primera vez que se abre ── */
  const BASE = (() => { const s = document.currentScript && document.currentScript.src; return s ? s.replace(/js\/globo\.js(\?.*)?$/, "") : ""; })();
  const traer = src => new Promise((ok, mal) => {
    const s = document.createElement("script");
    s.src = BASE + src; s.onload = ok; s.onerror = mal;
    document.head.appendChild(s);
  });
  let listo = null;
  const preparar = () => listo || (listo = (window.d3 && window.d3.geoPath ? Promise.resolve() : traer("js/vendor/d3-array.min.js").then(() => traer("js/vendor/d3-geo.min.js")))
    .then(() => window.GUIA_GLOBO_DATOS ? null : traer("data/globo-continentes.js"))
    .then(() => { if (!window.d3 || !window.d3.geoPath || !window.GUIA_GLOBO_DATOS) throw new Error("globo"); })
    .catch(e => { listo = null; throw e; }));
  let fuente = false;
  const cargarFuente = () => {
    if (fuente) return; fuente = true;
    const l = document.createElement("link");
    l.rel = "stylesheet"; l.href = "https://fonts.googleapis.com/css2?family=Unbounded:wght@300;500&display=swap";
    document.head.appendChild(l);
  };

  let abierto = null;
  const abrir = modo => {
    if (abierto) return;
    modo = modo === "primera" ? "primera" : "cambiar";
    const C = window.GUIA_CIUDAD;
    if (!C) return;
    abierto = { modo };
    cargarFuente();
    preparar().then(() => { abierto = motor(modo, C); }).catch(() => { abierto = null; C.abrir(); })
      .then(() => espera(false), () => espera(false));
  };

  /* ════════════ El globo ════════════ */
  function motor(modo, C) {
    const d3 = window.d3, DATA = window.GUIA_GLOBO_DATOS;
    const RAD = Math.PI / 180, DEG = 180 / Math.PI;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
    const wrap = d => ((d + 180) % 360 + 360) % 360 - 180;

    const decode = s => s.split("|").map(poly => poly.split(";").map(r => {
      const v = r.split(",").map(Number), pts = [];
      let x = 0, y = 0;
      for (let i = 0; i < v.length; i += 2) { x += v[i]; y += v[i + 1]; pts.push([x / 100, y / 100]); }
      pts.push(pts[0]);
      return pts;
    })).map(poly => d3.geoArea({ type: "Polygon", coordinates: poly }) > 2 * Math.PI ? poly.map(r => r.slice().reverse()) : poly);

    // a: punto desde donde crece cada continente
    const CONTS = [
      { id: "NA", a: [-100, 45], grow: 0.75 }, { id: "SA", a: [-60, -16], grow: 0.9 }, { id: "EU", a: [20, 52], grow: 1.15 },
      { id: "AF", a: [19, 4], grow: 0.85 }, { id: "AS", a: [92, 44], grow: 0.65 }, { id: "OC", a: [138, -24], grow: 1.15 }
    ].map(c => Object.assign(c, { feature: { type: "Feature", geometry: { type: "MultiPolygon", coordinates: decode(DATA[c.id]) } }, k: 1, kv: 0, glow: 0, hov: 0 }));
    const contDe = p => CONTS.find(c => d3.geoContains(c.feature, p)) || null;

    const CITIES = C.lista.map(c => ({ id: c.id, name: c.name, country: c.country, p: GEO[c.id], live: true }))
      .concat(PRONTO.filter(x => !C.lista.some(c => c.id === x.id)).map(x => ({ id: x.id, name: x.name, country: x.country, p: GEO[x.id], live: false })));
    CITIES.forEach(c => { c.cont = c.p ? contDe(c.p) : null; });
    ORIGINS.forEach(o => { o.cont = contDe(o.p); });

    const SPHERE = { type: "Sphere" };
    const GRATICULE = d3.geoGraticule().step([15, 15])();
    const circle = d3.geoCircle().center([0, 90]).precision(2);
    const PARALLELS = [
      { g: circle.radius(90)(), a: 0.24, dash: [3, 5] },
      { g: circle.radius(90 - 23.44)(), a: 0.13, dash: [2, 7] },
      { g: circle.radius(90 + 23.44)(), a: 0.13, dash: [2, 7] },
      { g: circle.radius(90 - 66.56)(), a: 0.10, dash: [2, 7] }
    ];

    /* Vista de satélite inclinada: la cámara está a P radios del centro de la Tierra y mira en diagonal. */
    function satelliteRaw(P, omega) {
      const cosO = Math.cos(omega), sinO = Math.sin(omega);
      function vertical(l, p) { const cp = Math.cos(p), k = (P - 1) / (P - cp * Math.cos(l)); return [k * cp * Math.sin(l), k * Math.sin(p)]; }
      vertical.invert = (x, y) => {
        const r2 = x * x + y * y, r = Math.sqrt(r2);
        const sinc = (P - Math.sqrt(1 - r2 * (P + 1) / (P - 1))) / ((P - 1) / r + r / (P - 1));
        return [Math.atan2(x * sinc, r * Math.sqrt(1 - sinc * sinc)), r ? Math.asin(y * sinc / r) : 0];
      };
      function forward(l, p) { const c = vertical(l, p), y = c[1], A = y * sinO / (P - 1) + cosO; return [c[0] * cosO / A, y / A]; }
      forward.invert = (x, y) => { const k = (P - 1) / (P - 1 - y * sinO); return vertical.invert(k * x, k * y * cosO); };
      return forward;
    }
    const P = 3.2, CLIP = Math.acos(1 / P) * DEG - 0.4, TILT = 30, GROW = 10, NEAR = 50;
    const proj = d3.geoProjectionMutator(satelliteRaw)(P, TILT * RAD).clipAngle(CLIP).precision(0.8);

    /* ── La pantalla ── */
    const root = document.createElement("div");
    root.className = "globo";
    root.setAttribute("data-notr", "");
    root.setAttribute("role", "dialog");
    root.setAttribute("aria-modal", "true");
    root.setAttribute("aria-labelledby", "globo-t");
    root.setAttribute("lang", idioma());
    root.tabIndex = -1;
    root.innerHTML =
      '<div class="globo-stage"><canvas class="globo-sky" aria-hidden="true"></canvas><canvas class="globo-map" tabindex="0" role="img"></canvas></div>' +
      '<div class="globo-scrim" aria-hidden="true"></div>' +
      '<section class="globo-hero out" hidden aria-live="polite"><h2 class="globo-title" id="globo-t"></h2><p class="globo-sub"></p>' +
        '<div class="globo-dest" role="group"></div>' +
        '<p class="globo-origin"><label for="globo-origen"></label><select id="globo-origen"></select><span class="globo-note"></span></p></section>' +
      (modo === "cambiar" ? '<button type="button" class="globo-x">✕</button>' : "") +
      '<div class="globo-flash" aria-hidden="true"></div>';
    const $ = s => root.querySelector(s);
    const stage = $(".globo-stage"), sky = $(".globo-sky"), map = $(".globo-map"), hero = $(".globo-hero");
    const sctx = sky.getContext("2d"), ctx = map.getContext("2d");
    const heroTitle = $(".globo-title"), heroSub = $(".globo-sub"), destBox = $(".globo-dest");
    const originSel = $("#globo-origen"), originNote = $(".globo-note"), flash = $(".globo-flash");
    map.setAttribute("aria-label", t("Globo terráqueo. Arrastrá para girarlo."));
    destBox.setAttribute("aria-label", t("Destinos"));
    $(".globo-origin label").textContent = t("Salís desde");
    const cerrarBtn = $(".globo-x");
    if (cerrarBtn) cerrarBtn.setAttribute("aria-label", t("Cerrar"));
    const antes = document.activeElement;
    document.body.appendChild(root);
    document.documentElement.classList.add("globo-abierto");

    const css = getComputedStyle(root);
    const tok = n => css.getPropertyValue(n).trim();
    const rgb = n => tok(n).split(/[\s,]+/).join(",");
    const LAND = rgb("--land-rgb"), GLOW = rgb("--glow-rgb"), CITY = rgb("--city-rgb");
    const UNDER = tok("--under"), OCEAN = tok("--ocean"), INK = tok("--ink"), SPACE = tok("--space");
    const FONT = getComputedStyle(document.body).fontFamily || "system-ui, sans-serif";

    let path = d3.geoPath(proj, ctx);
    let W = 0, H = 0, dpr = 1, base = 1, ty0 = 0, zoom = 1, sphereTop = 0, cover = 1, rawTop = 0;
    const MINZ = 0.45, MAXZ = 9;        // relativos a cover
    let lon = 0, lat = 0, vLon = 0, vLat = 0;
    let glide = null, zoomAnim = null;
    let focus = null, hover = null, dirty = true, started = false, lowFx = false, drawAvg = 0;
    let stars = [], intro = null, route = null, pulses = [], skyWarp = 1, raf = 0, vivo = true;
    const trip = { origin: null, guessed: false, dest: null, phase: "elegir" };
    const F = () => [W / 2, H * 0.56];  // el punto de la pantalla que cuenta como "centro"

    function applyView() {
      const f = F();
      proj.scale(base * zoom).translate([W / 2, f[1] + (ty0 - f[1]) * zoom]).rotate([-lon, -lat, 0])
        .clipExtent([[-60, -60], [W + 60, H + 60]]);
    }
    function layout() {
      W = stage.clientWidth; H = stage.clientHeight;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      for (const c of [sky, map]) { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); }
      proj.clipExtent(null).scale(1).translate([0, 0]).rotate([0, 0, 0]);
      const b = d3.geoPath(proj).bounds(SPHERE);
      rawTop = b[0][1];
      base = (W >= H ? Math.max(W * 0.8, H * 1.15) : W * 1.5) / (b[1][0] - b[0][0]);
      ty0 = H * (W >= H ? 0.15 : 0.19) - b[0][1] * base;
      const rel = zoom / cover;
      cover = coverZoom();
      zoom = clamp(rel * cover, MINZ * cover, MAXZ * cover);
      applyView();
      const n = Math.min(2000, Math.round(W * H * 2.25 / 2000));
      if (stars.length !== n) {
        stars = Array.from({ length: n }, () => {
          const r = Math.random();
          return { x: Math.random(), y: Math.random(), r: 0.35 + r * r * r * 1.5, a: 0.25 + Math.random() * 0.6,
                   depth: Math.random() < 0.7 ? 2 : 5, tw: Math.random() < 0.3 ? 0.6 + Math.random() * 2.2 : 0,
                   ph: Math.random() * 6.283, blue: Math.random() < 0.35 };
        });
      }
      dirty = true;
    }
    // El zoom más chico con el que el globo tapa la pantalla: arriba solo asoma el horizonte curvo
    function coverZoom() {
      const keep = zoom, yTop = H * (W >= H ? 0.36 : 0.2);
      const corners = [[0, yTop], [W, yTop], [0, H], [W, H]];
      let z = 0.4;
      for (; z < 12; z *= 1.02) { zoom = z; applyView(); if (corners.every(c => geoAt(c[0], c[1]))) break; }
      zoom = keep; applyView();
      return z * 1.04;
    }
    // Cuánto más al norte queda el "centro" de la pantalla respecto del punto bajo la cámara
    function centerOffset() {
      const keep = proj.rotate();
      proj.rotate([0, 0, 0]);
      const g = proj.invert(F());
      proj.rotate(keep);
      return g && isFinite(g[1]) ? g[1] : 20;
    }
    function geoAt(x, y) {
      const g = proj.invert([x, y]);
      if (!g || !isFinite(g[0]) || !isFinite(g[1])) return null;
      if (d3.geoDistance(g, [lon, lat]) > CLIP * RAD) return null;
      return g;
    }

    /* ── Qué continente se agranda ── */
    const lift = c => (14 + 6 * Math.min(zoom / cover, 2)) * c.glow;
    function contAt(x, y) {
      if (focus) {
        const ap = F(), L = lift(focus);
        const g = geoAt(ap[0] + (x - ap[0]) / focus.k, ap[1] + (y + L - ap[1]) / focus.k);
        if (g && d3.geoContains(focus.feature, g)) return focus;
      }
      const g = geoAt(x, y);
      if (!g) return null;
      for (const c of CONTS) if (c !== focus && d3.geoContains(c.feature, g)) return c;
      return null;
    }
    function updateFocus() {
      if (!started) return;
      const f = F();
      let cand = contAt(f[0], f[1]);
      if (!cand) {
        const g = geoAt(f[0], f[1]);
        if (g) {
          let best = null, bd = Infinity, fd = Infinity;
          for (const c of CONTS) {
            const d = d3.geoDistance(c.a, g);
            if (c === focus) fd = d;
            if (d < bd) { bd = d; best = c; }
          }
          if (focus && fd < bd * 1.15) { best = focus; bd = fd; }
          cand = bd < 32 * RAD ? best : null;
        }
      }
      if (cand !== focus) { focus = cand; dirty = true; }
    }

    /* ── Dibujo ── */
    const visible = p => d3.geoDistance(p, [lon, lat]) < CLIP * RAD - 0.01;
    function lifted(c, p) {
      if (!c || c.glow < 0.01) return p;
      const ap = F();
      return [ap[0] + (p[0] - ap[0]) * c.k, ap[1] + (p[1] - ap[1]) * c.k - lift(c)];
    }
    function drawGlobe() {
      ctx.beginPath(); path(SPHERE);
      if (!lowFx) { ctx.shadowColor = "rgba(" + GLOW + ",0.9)"; ctx.shadowBlur = 55; }
      ctx.strokeStyle = "rgba(" + GLOW + ",0.5)"; ctx.lineWidth = 10; ctx.stroke();
      ctx.shadowBlur = 0; ctx.shadowColor = "transparent";
      ctx.fillStyle = OCEAN; ctx.fill();
      const haze = ctx.createLinearGradient(0, sphereTop, 0, sphereTop + H * 0.35);
      haze.addColorStop(0, "rgba(" + GLOW + ",0.38)"); haze.addColorStop(1, "rgba(" + GLOW + ",0)");
      ctx.fillStyle = haze; ctx.fill();
      const deep = ctx.createLinearGradient(0, H * 0.5, 0, H);
      deep.addColorStop(0, "rgba(2,6,23,0)"); deep.addColorStop(1, "rgba(2,6,23,0.35)");
      ctx.fillStyle = deep; ctx.fill();
      ctx.beginPath(); path(GRATICULE);
      ctx.strokeStyle = "rgba(" + GLOW + ",0.08)"; ctx.lineWidth = 1; ctx.stroke();
      for (const p of PARALLELS) {
        ctx.beginPath(); path(p.g); ctx.setLineDash(p.dash);
        ctx.strokeStyle = "rgba(" + GLOW + "," + p.a + ")"; ctx.stroke();
      }
      ctx.setLineDash([]);
    }
    function drawCont(c) {
      const g = c.glow;
      ctx.lineJoin = "round"; ctx.lineCap = "round";
      if (g > 0.01) {
        ctx.beginPath(); path(c.feature);   // sombra sobre el globo
        if (!lowFx) { ctx.shadowColor = "rgba(1,4,18,0.9)"; ctx.shadowBlur = 18; }
        ctx.fillStyle = "rgba(1,4,18," + (0.55 * g) + ")"; ctx.fill("evenodd");
        ctx.shadowBlur = 0; ctx.shadowColor = "transparent";
        const ap = F();                      // el continente levantado y agrandado
        ctx.save();
        ctx.translate(ap[0], ap[1] - lift(c)); ctx.scale(c.k, c.k); ctx.translate(-ap[0], -ap[1]);
        ctx.beginPath(); path(c.feature);
        if (!lowFx) { ctx.shadowColor = "rgba(" + GLOW + "," + (0.85 * g) + ")"; ctx.shadowBlur = 34 * g; }
        ctx.globalAlpha = Math.min(1, g * 1.4); ctx.fillStyle = UNDER; ctx.fill("evenodd");
        ctx.globalAlpha = 1; ctx.shadowBlur = 0; ctx.shadowColor = "transparent";
        ctx.fillStyle = "rgba(" + LAND + "," + (0.2 + 0.18 * g) + ")"; ctx.fill("evenodd");
        ctx.strokeStyle = "rgba(" + GLOW + "," + (0.32 * g) + ")"; ctx.lineWidth = (lowFx ? 7 : 4.5) / c.k; ctx.stroke();
        ctx.strokeStyle = "rgba(255,255,255," + (0.75 + 0.25 * g) + ")"; ctx.lineWidth = (0.9 + 0.8 * g) / c.k; ctx.stroke();
        ctx.restore();
        return;
      }
      ctx.beginPath(); path(c.feature);
      ctx.fillStyle = "rgba(" + LAND + "," + (0.17 + 0.08 * c.hov) + ")"; ctx.fill("evenodd");
      ctx.lineWidth = 0.9; ctx.strokeStyle = "rgba(255,255,255," + (0.72 + 0.15 * c.hov) + ")"; ctx.stroke();
    }
    function drawRoute() {
      if (!route || route.u <= 0) return;
      const coords = Array.from({ length: 65 }, (_, i) => route.interp(route.u * i / 64));
      ctx.beginPath(); path({ type: "LineString", coordinates: coords });
      if (!lowFx) { ctx.shadowColor = "rgba(" + CITY + ",0.9)"; ctx.shadowBlur = 12; }
      ctx.strokeStyle = "rgba(" + CITY + ",0.95)"; ctx.lineWidth = 2.4; ctx.lineCap = "round"; ctx.stroke();
      ctx.shadowBlur = 0; ctx.shadowColor = "transparent";
      const head = coords[coords.length - 1];
      if (route.u < 1 && visible(head)) {
        const [x, y] = proj(head);
        const halo = ctx.createRadialGradient(x, y, 0, x, y, 16);
        halo.addColorStop(0, "rgba(255,255,255,0.95)"); halo.addColorStop(0.3, "rgba(" + CITY + ",0.6)"); halo.addColorStop(1, "rgba(" + CITY + ",0)");
        ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(x, y, 16, 0, 6.283); ctx.fill();
      }
    }
    const easeOut = k => 1 - Math.pow(1 - clamp(k, 0, 1), 3);
    function drawPulses(now) {
      pulses = pulses.filter(p => now - p.t0 < (p.shock ? 900 : 3200));
      for (const p of pulses) {
        if (!visible(p.p)) continue;
        const [x, y] = lifted(p.cont, proj(p.p));
        if (p.shock) {
          const k = easeOut((now - p.t0) / 900), R = 20 + Math.hypot(W, H) * 0.55 * k;
          ctx.strokeStyle = "rgba(255,255,255," + (0.7 * (1 - k)) + ")"; ctx.lineWidth = 3 + 10 * (1 - k);
          ctx.beginPath(); ctx.arc(x, y, R, 0, 6.283); ctx.stroke();
          ctx.strokeStyle = "rgba(" + CITY + "," + (0.8 * (1 - k)) + ")"; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.arc(x, y, R * 0.7, 0, 6.283); ctx.stroke();
          continue;
        }
        for (const off of [0, 800]) {
          const k = ((now - p.t0 - off) % 1600) / 1600;
          if (now - p.t0 < off || k < 0) continue;
          ctx.strokeStyle = "rgba(" + CITY + "," + (0.9 * (1 - k)) + ")"; ctx.lineWidth = 2 * (1 - k) + 0.5;
          ctx.beginPath(); ctx.arc(x, y, 6 + 38 * k, 0, 6.283); ctx.stroke();
        }
      }
    }
    const addPulse = (c, shock) => { if (c && c.p) pulses.push({ p: c.p, cont: c.cont, t0: performance.now(), shock: !!shock }); };
    const ciudadDe = o => o && o.id && CITIES.find(c => c.id === o.id && c.p);
    function drawOrigin() {
      const o = trip.origin;
      if (!o || !visible(o.p) || trip.phase !== "elegir") return;
      const [x, y] = lifted(o.cont, proj(o.p));
      ctx.font = "700 12px " + FONT; ctx.textBaseline = "middle";
      if (!ciudadDe(o)) {
        ctx.fillStyle = "rgba(" + GLOW + ",0.35)"; ctx.beginPath(); ctx.arc(x, y, 9, 0, 6.283); ctx.fill();
        ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.arc(x, y, 3.6, 0, 6.283); ctx.fill();
      }
      ctx.shadowColor = SPACE; ctx.shadowBlur = 6; ctx.fillStyle = INK;
      const txt = ciudadDe(o) ? t("Estás acá") : t("Estás acá") + " · " + nombre(o.name);
      // si es una ciudad de la guía, su nombre va a la derecha; si no entra en la pantalla, también va a la izquierda
      if (ciudadDe(o) || x + 12 + ctx.measureText(txt).width > W - 8) { ctx.textAlign = "right"; ctx.fillText(txt, x - 12, y); ctx.textAlign = "left"; }
      else ctx.fillText(txt, x + 12, y);
      ctx.shadowBlur = 0;
    }
    function drawCities() {
      drawOrigin();
      ctx.font = "700 12px " + FONT; ctx.textBaseline = "middle";
      for (const c of CITIES) {
        if (!c.p || !visible(c.p)) continue;
        const [x, y] = lifted(c.cont, proj(c.p));
        if (x < -40 || x > W + 40 || y < -20 || y > H + 20) continue;
        const g = c.cont ? c.cont.glow : 0;
        if (c.live) {
          const R = 11 + 5 * g;
          const halo = ctx.createRadialGradient(x, y, 0, x, y, R);
          halo.addColorStop(0, "rgba(" + CITY + ",0.85)"); halo.addColorStop(0.35, "rgba(" + CITY + ",0.35)"); halo.addColorStop(1, "rgba(" + CITY + ",0)");
          ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(x, y, R, 0, 6.283); ctx.fill();
          ctx.fillStyle = "rgb(" + CITY + ")"; ctx.beginPath(); ctx.arc(x, y, 3.4 + 0.6 * g, 0, 6.283); ctx.fill();
          ctx.fillStyle = "rgba(255,235,238,0.95)"; ctx.beginPath(); ctx.arc(x, y, 1.2, 0, 6.283); ctx.fill();
        } else {
          ctx.strokeStyle = INK; ctx.lineWidth = 1.3; ctx.beginPath(); ctx.arc(x, y, 2.8 + 0.5 * g, 0, 6.283); ctx.stroke();
        }
        if (g > 0.05 || trip.dest === c) {
          ctx.globalAlpha = Math.max(trip.dest === c ? 1 : 0, Math.min(1, g * 1.3)); ctx.shadowColor = SPACE; ctx.shadowBlur = 6;
          ctx.fillStyle = INK; ctx.fillText(nombre(c.name), x + 9, y);
          ctx.shadowBlur = 0; ctx.globalAlpha = 1;
        }
      }
    }
    function draw() {
      const t0 = performance.now();
      applyView();
      sphereTop = proj.translate()[1] + rawTop * proj.scale();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      drawGlobe();
      for (const c of CONTS.slice().sort((a, b) => (a.glow + a.hov * 0.01) - (b.glow + b.hov * 0.01))) drawCont(c);
      ctx.beginPath(); path(SPHERE);
      ctx.strokeStyle = "rgba(200,222,255,0.6)"; ctx.lineWidth = 1.2; ctx.stroke();
      drawRoute();
      drawCities();
      drawPulses(performance.now());
      const ms = performance.now() - t0;
      drawAvg = drawAvg ? drawAvg * 0.9 + ms * 0.1 : ms;
      if (!lowFx && drawAvg > 18) lowFx = true;   // en celulares lentos se apagan las sombras
    }
    let skyLast = 0;
    function drawSky(now, force) {
      if (!force && (reduced || now - skyLast < 33)) return;
      skyLast = now;
      sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sctx.clearRect(0, 0, W, H);
      const s = now / 1000, m = 0.7 + 0.3 * skyWarp;
      for (const st of stars) {
        const x = W / 2 + (((((st.x * W * 1.5 + lon * st.depth) % (W * 1.5)) + W * 1.5) % (W * 1.5)) - W * 0.25 - W / 2) * m;
        const y = H / 2 + (((((st.y * H * 1.5 - lat * st.depth) % (H * 1.5)) + H * 1.5) % (H * 1.5)) - H * 0.25 - H / 2) * m;
        if (x < -2 || x > W + 2 || y < -2 || y > H + 2) continue;
        let a = st.a;
        if (st.tw && !reduced) a *= 0.55 + 0.45 * Math.sin(s * st.tw + st.ph);
        sctx.fillStyle = st.blue ? "rgba(" + GLOW + "," + a + ")" : "rgba(238,243,255," + a + ")";
        if (st.r < 0.9) sctx.fillRect(x, y, st.r * 1.6, st.r * 1.6);
        else { sctx.beginPath(); sctx.arc(x, y, st.r, 0, 6.283); sctx.fill(); }
      }
    }

    /* ── Movimiento ── */
    const degPerPx = () => DEG / (base * zoom);
    function rotateBy(dx, dy) { const r = degPerPx(); lon = wrap(lon - dx * r); lat = clamp(lat + dy * r, -72, 62); dirty = true; }
    const setZoom = z => { zoom = clamp(z, MINZ * cover, MAXZ * cover); dirty = true; };
    const approach = px => { if (px) setZoom(zoom * Math.exp(px * 0.00024 * NEAR / 50)); };   // cuanto más te movés, más se acerca
    const ease = k => k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    const easeOutBack = k => { const c1 = 1.70158, c3 = c1 + 1, x = clamp(k, 0, 1) - 1; return 1 + c3 * x * x * x + c1 * x * x; };
    function glideTo(tLon, tLat, dur) {
      vLon = vLat = 0;
      glide = { lon0: lon, lat0: lat, dlon: wrap(tLon - lon), dlat: clamp(tLat, -72, 62) - lat, t0: performance.now(), dur: reduced ? 1 : dur };
    }
    const viewOf = p => ({ lon: p[0], lat: clamp(p[1] - centerOffset(), -72, 62) });

    const pointers = new Map();
    let drag = null, pinch = null;
    // Tocar una ciudad roja en el globo también te lleva
    function cityAt(x, y) {
      let best = null, bd = 26;
      for (const c of CITIES) {
        if (!c.live || !c.p || !visible(c.p)) continue;
        const q = lifted(c.cont, proj(c.p)), d = Math.hypot(q[0] - x, q[1] - y);
        if (d < bd) { bd = d; best = c; }
      }
      return best;
    }
    map.addEventListener("pointerdown", e => {
      if (intro && trip.phase === "elegir") finishIntro();
      if (trip.phase !== "elegir") return;
      map.setPointerCapture(e.pointerId);
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      glide = null; zoomAnim = null;
      if (pointers.size === 1) { drag = { x0: e.clientX, y0: e.clientY, last: e.timeStamp, moved: false, multi: false }; vLon = vLat = 0; map.classList.add("dragging"); }
      else if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinch = { d0: Math.hypot(a.x - b.x, a.y - b.y) || 1, z0: zoom, mid: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 } };
        if (drag) { drag.moved = true; drag.multi = true; }
      }
    });
    map.addEventListener("pointermove", e => {
      const p = pointers.get(e.pointerId);
      if (!p) {
        if (e.pointerType === "mouse" && trip.phase === "elegir") {
          const c = contAt(e.clientX, e.clientY);
          if (c !== hover) { hover = c; dirty = true; }
          map.classList.toggle("on-city", !!cityAt(e.clientX, e.clientY));
        }
        return;
      }
      const px = p.x, py = p.y; p.x = e.clientX; p.y = e.clientY;
      if (pointers.size === 1 && drag) {
        const dx = p.x - px, dy = p.y - py, r = degPerPx();
        rotateBy(dx, dy); approach(Math.hypot(dx, dy));
        const dt = (e.timeStamp - drag.last) / 1000;
        if (dt > 0) { vLon = vLon * 0.7 + (-dx * r / dt) * 0.3; vLat = vLat * 0.7 + (dy * r / dt) * 0.3; }
        drag.last = e.timeStamp;
        if (!drag.moved && Math.hypot(p.x - drag.x0, p.y - drag.y0) > 6) drag.moved = true;
      } else if (pointers.size >= 2 && pinch) {
        const [a, b] = [...pointers.values()];
        const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
        rotateBy(mid.x - pinch.mid.x, mid.y - pinch.mid.y);
        setZoom(pinch.z0 * Math.hypot(a.x - b.x, a.y - b.y) / pinch.d0);
        pinch.mid = mid;
      }
    });
    function endPointer(e) {
      if (!pointers.has(e.pointerId)) return;
      pointers.delete(e.pointerId);
      if (pointers.size === 1) { pinch = null; vLon = vLat = 0; if (drag) drag.last = e.timeStamp; return; }
      if (pointers.size > 0) return;
      map.classList.remove("dragging");
      if (drag && !drag.moved && e.type === "pointerup") {
        const city = cityAt(e.clientX, e.clientY);
        if (city) flyTo(city);
        else {
          const c = contAt(e.clientX, e.clientY);
          if (c) { glideTo(c.a[0], c.a[1] - centerOffset(), 950); zoomAnim = { z0: zoom, z1: clamp(zoom * 1.25, MINZ * cover, MAXZ * cover), t0: performance.now(), dur: reduced ? 1 : 950 }; }
        }
      } else if (drag && (drag.multi || e.timeStamp - drag.last > 90 || reduced)) { vLon = vLat = 0; }
      vLon = clamp(vLon, -400, 400); vLat = clamp(vLat, -300, 300);
      drag = null; pinch = null;
    }
    map.addEventListener("pointerup", endPointer);
    map.addEventListener("pointercancel", endPointer);
    map.addEventListener("pointerleave", e => { if (e.pointerType === "mouse" && hover) { hover = null; dirty = true; } });
    map.addEventListener("wheel", e => {
      e.preventDefault();
      if (trip.phase !== "elegir") return;
      if (intro) finishIntro();
      const unit = e.deltaMode === 1 ? 16 : 1;
      setZoom(zoom * Math.exp(-e.deltaY * unit * (e.ctrlKey ? 0.01 : 0.0016)));
      zoomAnim = null;
    }, { passive: false });
    map.addEventListener("keydown", e => {
      if (trip.phase !== "elegir") return;
      if (intro) finishIntro();
      const keys = { ArrowLeft: [-12, 0], ArrowRight: [12, 0], ArrowUp: [0, 8], ArrowDown: [0, -8] };
      const z = f => { zoomAnim = { z0: zoom, z1: clamp(zoom * f, MINZ * cover, MAXZ * cover), t0: performance.now(), dur: reduced ? 1 : 300 }; };
      if (keys[e.key]) { e.preventDefault(); glideTo(lon + keys[e.key][0], lat + keys[e.key][1], 380); }
      else if (e.key === "+" || e.key === "=") { e.preventDefault(); z(1.4); }
      else if (e.key === "-" || e.key === "_") { e.preventDefault(); z(1 / 1.4); }
    });
    const onResize = () => layout();
    window.addEventListener("resize", onResize);
    const onKey = e => { if (e.key === "Escape" && modo === "cambiar" && trip.phase === "elegir") { e.preventDefault(); cerrar(); } };
    document.addEventListener("keydown", onKey);
    if (cerrarBtn) cerrarBtn.addEventListener("click", () => cerrar());

    /* ── El viaje ── */
    const CLOSE = 5;  // cuánto se acerca al llegar (veces el zoom de arranque)
    function showHero() { hero.hidden = false; requestAnimationFrame(() => hero.classList.remove("out")); dirty = true; }
    function hideHero() { hero.classList.add("out"); dirty = true; }
    function renderHero() {
      heroTitle.textContent = t("¿A dónde viajás?");
      heroSub.textContent = t(modo === "cambiar" ? "Elegí tu próximo destino." : "Tocá un destino y te llevamos.");
      originNote.textContent = trip.guessed ? t("Lo calculamos por la hora de tu dispositivo.") : "";
      for (const b of destBox.children) {
        const aca = b._city.id === C.id && modo === "cambiar";
        b.classList.toggle("aca", aca);
        b.querySelector("small").textContent = !b._city.live ? t("pronto") : aca ? t("Estás acá") : "";
      }
    }

    // Al abrir: llegás desde el espacio al lugar de donde salís
    function openAt(o) {
      const v = viewOf(o.p);
      trip.phase = "elegir"; trip.dest = null; route = null; hideHero();
      started = false; focus = null;
      const desdeLejos = modo === "primera";
      const c0 = { lon, lat, zoom };
      intro = {
        t0: performance.now(), dur: desdeLejos ? 2600 : 1300,
        step(k) {
          const e = ease(k);
          if (desdeLejos) {
            zoom = cover * Math.pow(0.05, 1 - easeOut(k));
            lon = wrap(v.lon - 100 * (1 - e)); lat = v.lat + 12 * (1 - e);
            skyWarp = easeOut(k);
          } else {
            zoom = c0.zoom * Math.pow(cover / c0.zoom, e);
            lon = wrap(c0.lon + wrap(v.lon - c0.lon) * e); lat = c0.lat + (v.lat - c0.lat) * e;
          }
        },
        end() { lon = v.lon; lat = v.lat; zoom = cover; skyWarp = 1; started = true; addPulse(o); renderHero(); showHero(); }
      };
      if (reduced) finishIntro();
    }

    // Elegiste destino: la cámara va al punto de salida, sigue la ruta y entra "pum" a la ciudad
    function flyTo(d) {
      if (trip.phase !== "elegir" || !d.live) return;
      if (intro) finishIntro();
      if (!d.p) { llegar(d); return; }
      const o = trip.origin, dist = d3.geoDistance(o.p, d.p);
      trip.dest = d; trip.phase = "volando"; hideHero();
      if (document.activeElement && root.contains(document.activeElement)) root.focus({ preventScroll: true });
      started = false; vLon = vLat = 0; glide = null; zoomAnim = null; pulses = []; drag = null; pinch = null; pointers.clear();
      const cerca = dist < 0.03;                                   // menos de unos 200 km: no hace falta volar
      route = cerca ? null : { interp: d3.geoInterpolate(o.p, d.p), u: 0 };
      const c0 = { lon, lat, zoom }, vo = viewOf(o.p), vd = viewOf(d.p);
      const pre = cerca ? 500 : 700, fly = cerca ? 0 : clamp(1500 + dist * DEG * 15, 1800, 4400), pum = 950;
      const dip = 0.5 * Math.min(1, dist / 1.4);
      let hit = false;
      intro = {
        t0: performance.now(), dur: pre + fly + pum,
        step(k) {
          const T = k * this.dur;
          if (T < pre) {
            const e = ease(T / pre), to = cerca ? vd : vo;
            lon = wrap(c0.lon + wrap(to.lon - c0.lon) * e); lat = c0.lat + (to.lat - c0.lat) * e;
            zoom = c0.zoom * Math.pow(cover * 0.95 / c0.zoom, e);
          } else if (T < pre + fly) {
            const e = ease((T - pre) / fly);
            route.u = e;
            const v = viewOf(route.interp(e));
            lon = v.lon; lat = v.lat;
            zoom = cover * 0.95 * (1 - dip * Math.sin(Math.PI * e));
          } else {
            // "pum": un amague para atrás y después entra rápido, pasándose un poquito
            if (route) route.u = 1;
            lon = vd.lon; lat = vd.lat;
            const q = (T - pre - fly) / pum, z0 = cover * 0.95, zA = z0 * 0.9;
            if (q < 0.2) zoom = z0 * Math.pow(0.9, ease(q / 0.2));
            else zoom = zA * Math.pow(cover * CLOSE / zA, easeOutBack((q - 0.2) / 0.8));
            if (!hit && q > 0.45) { hit = true; impact(d); }
          }
        },
        end() { if (!hit) impact(d); lon = vd.lon; lat = vd.lat; zoom = cover * CLOSE; llegar(d); }
      };
      if (reduced) finishIntro();
    }
    function impact(d) {
      addPulse(d, true); addPulse(d);
      if (reduced) return;
      const p = lifted(d.cont, proj(d.p));
      flash.style.setProperty("--x", p[0] + "px"); flash.style.setProperty("--y", p[1] + "px");
      flash.classList.remove("go"); stage.classList.remove("shake");
      void flash.offsetWidth;
      flash.classList.add("go"); stage.classList.add("shake");
    }
    // Termina el "pum": se entra a la guía sin tocar nada
    function llegar(d) {
      trip.phase = "llegó";
      if (d.id === C.id) {
        C.guardar(d.id);
        if (location.hash && location.hash !== "#/" && modo === "primera") location.hash = "#/";
        cerrar(true);
      } else {
        try { sessionStorage.setItem(LLEGA, d.id); } catch (e) { /* sin fundido */ }
        root.classList.add("sale");
        setTimeout(() => C.elegir(d.id), reduced ? 0 : 260);
      }
    }
    function finishIntro() {
      if (!intro) return;
      const it = intro; intro = null;
      it.end();
      dirty = true;
    }

    function cerrar(entrando) {
      if (!vivo) return;
      vivo = false;
      window.removeEventListener("resize", onResize);
      document.removeEventListener("keydown", onKey);
      root.classList.add(entrando ? "entra" : "cierra");
      document.documentElement.classList.remove("globo-abierto");
      const fin = () => { cancelAnimationFrame(raf); root.remove(); abierto = null; };
      if (reduced) fin(); else setTimeout(fin, entrando ? 750 : 400);
      const vuelta = document.getElementById("city-btn");
      try { (antes && antes.isConnected ? antes : vuelta || document.body).focus({ preventScroll: true }); } catch (e) { /* nada */ }
    }

    // Botones de destino
    for (const c of CITIES) {
      const b = document.createElement("button");
      b.type = "button"; b.className = "globo-btn" + (c.live ? "" : " soon"); b._city = c;
      b.innerHTML = '<i class="globo-dot" aria-hidden="true"></i><span></span><small></small>';
      b.querySelector("span").textContent = nombre(c.name);
      if (!c.live) b.disabled = true;
      b.addEventListener("click", () => flyTo(c));
      destBox.appendChild(b);
    }

    // Desde dónde salís
    ORIGINS.forEach((o, i) => { const opt = document.createElement("option"); opt.value = i; opt.textContent = nombre(o.name); originSel.appendChild(opt); });
    originSel.addEventListener("change", () => {
      trip.origin = ORIGINS[+originSel.value]; trip.guessed = false;
      const v = viewOf(trip.origin.p);
      glideTo(v.lon, v.lat, 1000);
      zoomAnim = { z0: zoom, z1: cover, t0: performance.now(), dur: reduced ? 1 : 1000 };
      addPulse(trip.origin); renderHero();
    });

    /* ── Bucle ── */
    let last = performance.now();
    function frame(now) {
      if (!root.isConnected) return;
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      let moved = false;
      if (intro) {
        const k = clamp((now - intro.t0) / intro.dur, 0, 1);
        intro.step(k);
        moved = true;
        if (k >= 1) finishIntro();
      } else if (glide) {
        const k = Math.min(1, (now - glide.t0) / glide.dur), e = ease(k);
        lon = wrap(glide.lon0 + glide.dlon * e); lat = glide.lat0 + glide.dlat * e;
        moved = true; if (k >= 1) glide = null;
      } else if (!drag && (Math.abs(vLon) > 0.5 || Math.abs(vLat) > 0.5)) {
        lon = wrap(lon + vLon * dt); lat = clamp(lat + vLat * dt, -72, 62);
        approach(Math.hypot(vLon * Math.cos(lat * RAD), vLat) * dt / degPerPx());
        const f = Math.exp(-dt * 3.4); vLon *= f; vLat *= f; moved = true;
      }
      if (zoomAnim) {
        const k = Math.min(1, (now - zoomAnim.t0) / zoomAnim.dur);
        setZoom(zoomAnim.z0 + (zoomAnim.z1 - zoomAnim.z0) * ease(k)); moved = true;
        if (k >= 1) zoomAnim = null;
      }
      if (moved || pulses.length) dirty = true;
      if (dirty) { applyView(); updateFocus(); }
      // resorte: el continente del centro crece (los chicos un poco más que los grandes)
      for (const c of CONTS) {
        const target = c === focus ? 1 + GROW / 100 * c.grow / Math.sqrt(zoom / cover) : 1;
        if (reduced) { c.k = target; c.kv = 0; }
        else { const a = 170 * (target - c.k) - 17 * c.kv; c.kv += a * dt; c.k += c.kv * dt; }
        const gt = c === focus ? 1 : 0, ht = c === hover ? 1 : 0;
        const gl = reduced ? gt : c.glow + (gt - c.glow) * Math.min(1, dt * 7);
        const hv = reduced ? ht : c.hov + (ht - c.hov) * Math.min(1, dt * 10);
        if (Math.abs(gl - c.glow) > 0.0005 || Math.abs(hv - c.hov) > 0.0005 || Math.abs(c.kv) > 0.0005 || Math.abs(target - c.k) > 0.0005) dirty = true;
        c.glow = gl; c.hov = hv;
      }
      if (dirty) { draw(); drawSky(now, true); dirty = false; } else drawSky(now, false);
      raf = requestAnimationFrame(frame);
    }

    // Arranque: primera vez, desde la zona horaria; al cambiar, desde la ciudad en la que estás
    let origin = null, guessed = false;
    if (modo === "cambiar") origin = ORIGINS.find(o => o.id === C.id) || (GEO[C.id] && { name: C.actual.name, id: C.id, p: GEO[C.id], cont: contDe(GEO[C.id]) });
    if (!origin) {
      let tz = "";
      try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (e) { /* sin zona horaria */ }
      const hit = ORIGINS.find(o => o.tz.indexOf(tz) > -1) || (tz.indexOf("America/Argentina/") === 0 ? ORIGINS[0] : null);
      origin = hit || ORIGINS[0]; guessed = !!hit;
    }
    if (ORIGINS.indexOf(origin) < 0) { ORIGINS.push(Object.assign(origin, { tz: [] })); const opt = document.createElement("option"); opt.value = ORIGINS.length - 1; opt.textContent = nombre(origin.name); originSel.appendChild(opt); }
    trip.origin = origin; trip.guessed = guessed;
    originSel.value = String(ORIGINS.indexOf(origin));

    layout();
    zoom = modo === "primera" ? cover : cover * 0.6;
    lon = modo === "primera" ? -60 : wrap(origin.p[0] - 40); lat = modo === "primera" ? -16 - centerOffset() : origin.p[1] - centerOffset();
    applyView();
    renderHero();
    requestAnimationFrame(now => {
      last = now; root.classList.add("ready"); openAt(origin); frame(now);
      try { root.focus({ preventScroll: true }); } catch (e) { /* nada */ }
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { dirty = true; });

    return { cerrar };
  }

  /* "Cambiar destino": cualquier botón con data-globo abre el globo. (El nombre de la ciudad, arriba, lo abre desde js/ciudad.js.) */
  document.addEventListener("click", e => {
    const b = e.target.closest && e.target.closest("[data-globo]");
    if (b) { e.preventDefault(); abrir("cambiar"); }
  });

  /* Primera vez: el globo aparece solo. */
  const alArrancar = () => { const C = window.GUIA_CIUDAD; if (C && C.nueva && window.CITY_DATA) abrir("primera"); else espera(false); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", alArrancar); else alArrancar();

  window.GUIA_GLOBO = { abrir, t };
})();
