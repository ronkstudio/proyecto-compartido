# Herramientas

No son parte de la app ni se publican. Sirven para armar datos.

- `armar-hoy.ps1`: baja la agenda oficial de la Ciudad y arma `app/data/hoy.json` con los eventos puntuales de los próximos 3 días, para la sección "Hoy en Buenos Aires" (tarjeta #65). Para correrlo a mano en Windows:

      powershell -ExecutionPolicy Bypass -File herramientas/armar-hoy.ps1 -out app/data/hoy.json

- `armar-hoy-berlin.ps1`: lo mismo para Berlín, con la agenda cultural abierta de Berlín (kulturdaten.berlin); arma `app/data/hoy-berlin.json` (tarjeta #99).

Los dos los corre solos el paso automático `.github/workflows/publicar-guia.yml` dos veces por día, antes de publicar la guía.

Si `hoy.json` no está o tiene más de 3 días, la guía no muestra eventos de la agenda y sigue con la agenda fija (`app/data/caba-hoy.js`).
