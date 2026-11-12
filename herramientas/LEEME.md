# Herramientas

No son parte de la app ni se publican. Sirven para armar datos.

- `armar-hoy.ps1`: baja la agenda oficial de la Ciudad y arma `app/data/hoy.json` con los eventos puntuales de los próximos 3 días, para la sección "Hoy en Buenos Aires" (tarjeta #65). Para correrlo a mano en Windows:

      powershell -ExecutionPolicy Bypass -File herramientas/armar-hoy.ps1 -out app/data/hoy.json

- `actualizar-hoy.yml`: el paso automático de GitHub que corre `armar-hoy.ps1` dos veces por día en el repositorio publicado. **No está activado**: adentro dice cómo activarlo.

Si `hoy.json` no está o tiene más de 3 días, la guía no muestra eventos de la agenda y sigue con la agenda fija (`app/data/caba-hoy.js`).
