# Fuentes de Tokio (tarjeta #216)

De dónde sale cada dato de Tokio en la guía. Revisado el 19/11/2026.

## Transporte

- tokyometro.jp (leída en el navegador; bloquea a los robots):
  - Tokyo Subway Ticket de 24, 48 y 72 horas, para todas las líneas de Tokyo Metro y Toei, solo para visitantes de otros países y de otras regiones de Japón.
  - "Tap to Ride": pago con tarjeta de crédito, débito o prepaga sin contacto en todas las líneas de Tokyo Metro y en otras empresas (entre ellas Toei). No sirve para pasar a JR East.
- jreast.co.jp (leída en el navegador):
  - Welcome Suica: sin depósito y válida 28 días desde la compra. También existe la app Welcome Suica Mobile.
  - La Suica común se vende con un depósito que se devuelve al entregarla.
- pasmo.co.jp: muchos celulares Android comprados fuera de Japón no son compatibles con la PASMO móvil.
- keisei.co.jp: el Skyliner une el aeropuerto de Narita con Ueno.
- Estaciones de las 14 líneas: relaciones de OpenStreetMap del 19/11/2026.
  - Metro: route=subway de Tokyo Metro y Toei.
  - Yamanote: route=train.
  - Los nombres salen de `name:en`; los cinco que no lo tenían se pasaron a mano.
  - Quedaron: Ginza 19, Marunouchi 28, Hibiya 22, Tozai 23, Chiyoda 20, Yurakucho 24, Hanzomon 14, Namboku 19, Fukutoshin 16, Asakusa 20, Mita 27, Shinjuku 21, Oedo 38 y Yamanote 30.

## Compras sin impuesto

- mlit.go.jp (Agencia de Turismo de Japón, página para viajeros): desde las compras del 1/11/2026 el sistema es de reintegro.
  - Se paga con impuesto.
  - Se devuelve después de mostrar el pasaporte y lo comprado en la aduana del aeropuerto, dentro de los 90 días.

## Emergencias y ayuda

- japan.travel (JNTO), página de la línea de ayuda:
  - Japan Visitor Hotline 050-3816-2787, todo el día, en inglés, chino y coreano.
  - Policía 110, ambulancia y bomberos 119.
  - Información general de la policía en inglés: 03-3503-8484.
- tfd.metro.tokyo.lg.jp (Bomberos de Tokio): consulta de emergencias médicas, en japonés: #7119 desde celulares japoneses y 03-3212-2323 desde cualquier teléfono. En la guía va el 03-3212-2323, porque el "#" no se puede marcar tocando el número.
- amdamedicalcenter.com: AMDA, información médica en varios idiomas, 03-6233-9266.
- keishicho.metro.tokyo.lg.jp: 110 para delitos y accidentes.
- La web de Himawari, el centro de información médica de Tokio, no respondió: no se cargó.

## Información turística, policía y hospitales

- Tokyo Tourist Information Center: lista de gotokyo.org (actualizada el 1/9/2026). Se cargaron los del gobierno de Tokio, Busta Shinjuku y Keisei Ueno.
- Otros puntos de información, de OpenStreetMap (tourism=information, 19/11/2026): Asakusa Culture Tourist Information Center y Shibu Hachi Box.
- Koban (puestos de policía) de las zonas más visitadas: OpenStreetMap (amenity=police, 19/11/2026).
- Hospitales con urgencias: OpenStreetMap (amenity=hospital, emergency=yes, 19/11/2026). Son NCGM, Toranomon, Keio, Universidad de Tokio y Nihon.

## Consulados

- De la web oficial de cada país (19/11/2026), leídas en el navegador:
  - Argentina (ejapo.cancilleria.gob.ar): 2-14-14 Moto-Azabu.
  - Brasil (gov.br, Consulado-Geral em Tóquio): Higashi-Gotanda 1-13-12, edificio Ichigo Gotanda.
  - Chile (chile.gob.cl/japon): Shibakoen Hanshin Bldg. 8F, 3-1-14 Shiba.
  - España (exteriores.gob.es): 1-3-29 Roppongi.
  - Italia (ambtokyo.esteri.it): 2-5-4 Mita.
- Las webs de Colombia y México no dejaron leer (pedían resolver una verificación de robots). Para esos países y para Perú, Uruguay y Estados Unidos se usó la lista oficial de embajadas y consulados del Ministerio de Relaciones Exteriores de Japón (mofa.go.jp, 19/11/2026):
  - Colombia: 3-10-53 Kami-Osaki.
  - México: 2-15-1 Nagata-cho.
  - Perú (consulado general): edificio Ichigo Gotanda 6F, 1-13-12 Higashi-Gotanda.
  - Uruguay: edificio Daimon KS 7F, 1-2-1 Shibadaimon (se mudó en 2023).
  - Estados Unidos: 1-10-5 Akasaka.
- Ubicación: OpenStreetMap (office=diplomatic). La de Uruguay, que OpenStreetMap todavía tiene en la dirección vieja, es aproximada.

## Lugares

- Un lugar que aparece en OpenStreetMap no garantiza que siga abierto: es el mismo criterio que en las otras ciudades.
- Hay 217 lugares en `app/data/tokio-lugares.js`.
  - Cada uno se buscó por nombre en OpenStreetMap (Nominatim, 19/11/2026) y se confirmó que cae en su distrito (ku).
  - Los que no aparecían se buscaron por su nombre en japonés o con Overpass.
- 209 tienen ubicación. Los otros 8 son tours sin punto fijo y no la llevan.
- Se sacaron seis lugares que no figuran en OpenStreetMap: Kura Sushi Harajuku, Tempura Kondo, Torishiki, Naniwaya Sohonten, Nine Hours Shinjuku-North y Ryokan Kamogawa Asakusa.
- Florilège se reemplazó por Esquisse: OpenStreetMap todavía lo tiene en su dirección vieja.
- Se cambiaron algunos nombres por la sucursal que sí figura: Afuri Harajuku, Book and Bed Tokyo Shinjuku y First Cabin Kyobashi.
- En las cadenas se controló que la ubicación sea la del local de la ficha: Tonkatsu Maisen (el de Jingumae, en la vieja casa de baños), Sushizanmai (el principal, en Tsukiji) y Animate Ikebukuro (el principal) se corrigieron a mano.
- Se sacaron datos que no se pudieron confirmar: la calle peatonal de los domingos en Akihabara, la escena de Lost in Translation en una sucursal puntual de Karaoke Kan, las canciones en castellano del karaoke y la opción vegana de Afuri (dato de dieta sin fuente). También los consejos sobre qué remedios se pueden entrar a Japón: son datos de salud y la web del Ministerio de Salud no se pudo leer.

## Dietas

- Solo veganos marcados "diet:vegan=only" en OpenStreetMap (19/11/2026): T's Tantan, Ain Soph. Journey, Nagi Shokudo, Vegan Bistro Jangara y Falafel Brothers. No hay lugares sin TACC con fuente.

## Hoy en Tokio

- Torneos de sumo: calendario oficial de sumo.or.jp (2026 a 2028), leído el 20/11/2026. En el Kokugikan de Tokio son en enero, mayo y septiembre, de unas dos semanas cada uno.
- Temporada de cerezos: la página de Ueno de gotokyo.org dice que en abril el parque es el centro de atención por los cerezos y que es común hacer picnic bajo los árboles.

## Apps

- Número del App Store (búsqueda oficial de Apple, tienda de Japón) y nombre en Google Play revisados uno por uno el 19/11/2026: Google Maps, Japan Travel by NAVITIME, GO, Uber, Safety tips, Google Translate y LINE.
- Welcome Suica Mobile no se cargó como app porque no tiene versión en Google Play. Se nombra en el transporte.

## Fotos

- De Wikimedia Commons con licencia libre (19/11/2026), buscadas por nombre en OpenStreetMap y en Commons cerca de cada lugar, y revisadas a ojo. Se cargaron 95 y se descartaron 27 que mostraban otra cosa (gente en primer plano, carteles, estaciones, una peluquería, un motor de auto, etc.).
