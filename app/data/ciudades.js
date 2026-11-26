/* Lista de ciudades de la guía (tarjeta #98).

   Cada fila: id (el mismo de sus archivos en data/), nombre, país, bandera y los archivos de datos que hay que cargar, en orden.
   "letra" es la letra de los títulos de esa ciudad (familia de Google Fonts); sus colores están en css/temas.css (tarjeta #207).
   La primera de la lista es la que se abre si la persona todavía no eligió ninguna.
   Solo se cargan los archivos de la ciudad elegida (lo hace js/ciudad.js).

   Para sumar una ciudad: armar sus archivos (ver NUEVA-CIUDAD.md) y agregar acá su fila. */
window.GUIA_CIUDADES = [
  { id: "caba", name: "Buenos Aires", country: "Argentina", flag: "🇦🇷", letra: "Abril+Fatface",
    files: ["caba", "caba-coords", "caba-extra", "caba-zones", "caba-mas", "caba-boliches", "caba-hoy", "caba-local"] },
  { id: "berlin", name: "Berlín", country: "Alemania", flag: "🇩🇪", letra: "Archivo+Narrow:wght@600;700",
    files: ["berlin", "berlin-coords", "berlin-extra", "berlin-zones", "berlin-lugares", "berlin-mas", "berlin-hoy", "berlin-local"] },
  { id: "paris", name: "París", country: "Francia", flag: "🇫🇷", letra: "Cormorant:wght@600;700",
    files: ["paris", "paris-coords", "paris-extra", "paris-zones", "paris-lugares", "paris-hoy", "paris-local"] },
  { id: "roma", name: "Roma", country: "Italia", flag: "🇮🇹", letra: "Cinzel:wght@600;700",
    files: ["roma", "roma-coords", "roma-extra", "roma-zones", "roma-lugares", "roma-hoy", "roma-local"] },
  { id: "madrid", name: "Madrid", country: "España", flag: "🇪🇸", letra: "Bodoni+Moda:opsz,wght@6..96,600;6..96,700",
    files: ["madrid", "madrid-coords", "madrid-extra", "madrid-zones", "madrid-lugares", "madrid-hoy", "madrid-local"] },
  { id: "barcelona", name: "Barcelona", country: "España", flag: "🇪🇸", letra: "Josefin+Sans:wght@600;700",
    files: ["barcelona", "barcelona-coords", "barcelona-extra", "barcelona-zones", "barcelona-lugares", "barcelona-hoy", "barcelona-local"] },
  { id: "amsterdam", name: "Ámsterdam", country: "Países Bajos", flag: "🇳🇱", letra: "Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700",
    files: ["amsterdam", "amsterdam-coords", "amsterdam-extra", "amsterdam-zones", "amsterdam-lugares", "amsterdam-hoy", "amsterdam-local"] },
  { id: "rio", name: "Río de Janeiro", country: "Brasil", flag: "🇧🇷", letra: "Lexend:wght@600;700",
    files: ["rio", "rio-coords", "rio-extra", "rio-zones", "rio-lugares", "rio-hoy", "rio-local"] },
  { id: "bogota", name: "Bogotá", country: "Colombia", flag: "🇨🇴", letra: "Alegreya:wght@600;700",
    files: ["bogota", "bogota-coords", "bogota-extra", "bogota-zones", "bogota-lugares", "bogota-hoy", "bogota-local"] },
  { id: "lisboa", name: "Lisboa", country: "Portugal", flag: "🇵🇹", letra: "Young+Serif",
    files: ["lisboa", "lisboa-coords", "lisboa-extra", "lisboa-zones", "lisboa-lugares", "lisboa-hoy", "lisboa-local"] },
  { id: "tokio", name: "Tokio", country: "Japón", flag: "🇯🇵", letra: "Shippori+Mincho+B1:wght@700;800",
    files: ["tokio", "tokio-coords", "tokio-extra", "tokio-zones", "tokio-lugares", "tokio-hoy", "tokio-local"] },
  { id: "pekin", name: "Pekín", country: "China", flag: "🇨🇳", letra: "Noto+Serif+SC:wght@600;700",
    files: ["pekin", "pekin-coords", "pekin-extra", "pekin-zones", "pekin-lugares", "pekin-hoy", "pekin-local"] }
];
