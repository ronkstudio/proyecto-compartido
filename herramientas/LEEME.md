# Herramientas

No son parte de la app ni se publican. Sirven para armar datos.

- `armar-hoy.ps1`: baja la agenda oficial de la Ciudad y arma `app/data/hoy.json` con los eventos puntuales de los próximos 3 días, para la sección "Hoy en Buenos Aires" (tarjeta #65). Para correrlo a mano en Windows:

      powershell -ExecutionPolicy Bypass -File herramientas/armar-hoy.ps1 -out app/data/hoy.json

- `armar-hoy-berlin.ps1`: lo mismo para Berlín, con la agenda cultural abierta de Berlín (kulturdaten.berlin); arma `app/data/hoy-berlin.json` (tarjeta #99).

- `armar-hoy-madrid.ps1`: lo mismo para Madrid, con la agenda oficial del Ayuntamiento ("Actividades culturales y de ocio municipal en los próximos 100 días", datos.madrid.es); arma `app/data/hoy-madrid.json` (tarjeta #191). Las muestras y ciclos de una semana o más entran marcados como "serie".
- `armar-hoy-barcelona.ps1`: lo mismo para Barcelona, con la agenda cultural oficial del Ayuntamiento ("Agenda cultural de la ciutat de Barcelona", opendata-ajuntament.barcelona.cat, se actualiza todos los días); arma `app/data/hoy-barcelona.json` (tarjeta #195). Los días y horas salen de la tabla de horarios de cada evento, escrita en catalán. Deja afuera talleres y cursos, y los eventos sin horario que se pueda leer. Los títulos quedan en catalán, como vienen. Cada evento enlaza a su página en agenda500.barcelona.cat.

Todos los corre solos el paso automático `.github/workflows/publicar-guia.yml` dos veces por día, antes de publicar la guía.

Si `hoy.json` no está o tiene más de 3 días, la guía no muestra eventos de la agenda y sigue con la agenda fija (`app/data/caba-hoy.js`).
