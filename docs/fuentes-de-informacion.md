# De dónde sale la información

Propuesta para la tarjeta #7. La decisión la toman `ronkstudio` y `ezebesserr`.

Revisado el 9 de noviembre de 2026. Los datos de transporte cambian seguido: antes de usar algo de acá, volvé a mirar la fuente.

## En pocas palabras

1. **Hoy no conviene depender de los datos en vivo del Gobierno de la Ciudad.** Su portal de datos avisa que todas las fuentes de horarios y de tiempo real están suspendidas, en revisión.
2. **Para un turista, la SUBE ya no es obligatoria.** Los colectivos del AMBA aceptan tarjetas Visa y Mastercard sin contacto, también las emitidas en otros países. Esto cambia qué tiene que explicar la app.
3. **La primera versión puede funcionar con información escrita y revisada por nosotros**, más los datos fijos oficiales del subte (líneas, estaciones y bocas).
4. **Para "cómo llego", lo más simple es abrir la app de mapas del celular** con el destino ya cargado. Es gratis y no hay que mantener nada.

## Tema por tema

| Tema | De dónde puede salir | Costo | Permiso de uso | Estado hoy |
|---|---|---|---|---|
| Cómo pagar el transporte | Sitio oficial de SUBE | Gratis | Escribimos nuestro propio texto y citamos la fuente | Disponible |
| Dónde comprar y cargar la SUBE | Mapa oficial de SUBE (con un enlace) | Gratis | Solo enlazamos | El listado descargable que encontré es de 2019 |
| Subte: líneas, estaciones y bocas | BA Data, el portal de datos de la Ciudad | Gratis | Hay que nombrar la fuente | Disponible para descargar |
| Colectivos: recorridos y horarios | BA Data | Gratis | Hay que nombrar la fuente | Suspendido, en revisión |
| Tiempo real y cortes de tránsito | API Transporte de la Ciudad | Gratis | Sin confirmar | Suspendido; hay una versión nueva en desarrollo |
| Rutas ("cómo llego") | App de mapas del celular | Gratis | Sin restricciones | Disponible |
| Lugares para visitar | Lista corta armada por nosotros | Nuestro tiempo | Es nuestra | A armar |
| Hospedajes | Enlaces a sitios de reservas | Gratis | Solo enlazamos | Para más adelante |
| Avisos ("por dónde no pasar") | Fuentes oficiales | Gratis | Sin confirmar | Las fuentes en vivo están suspendidas |

### Cómo pagar el transporte

El sitio oficial de SUBE dice que en los colectivos se puede pagar con:

- Tarjetas Visa o Mastercard sin contacto (crédito, débito o prepagas), incluidas las emitidas en otros países.
- Celular o reloj con pago sin contacto.
- Código QR desde la app SUBE o la del Banco Nación.

Vale en todo el AMBA, que incluye la Ciudad. Con estos medios se paga la tarifa común: los descuentos por combinar viajes solo se aplican con la tarjeta SUBE.

Sobre el subte, las notas oficiales de la Ciudad que aparecen en el buscador dicen que acepta tarjetas sin contacto en los molinetes preparados para eso, también extranjeras si son Visa o Mastercard. Hoy no pude abrir esas páginas porque daban error, así que este punto queda sin confirmar.

Los precios cambian seguido. Propongo no escribir precios fijos en la app, o mostrarlos siempre con la fecha de la última revisión.

### Dónde comprar y cargar la SUBE

El único listado descargable de puntos de carga que apareció en el buscador tiene datos de octubre de 2019, y hoy su página daba error. Es demasiado viejo para mostrarlo como propio. Propongo explicar los pasos con texto nuestro y enlazar al mapa oficial.

### Subte

BA Data publica las líneas, las estaciones y las bocas de acceso en archivos que se pueden descargar. El conjunto de datos que revisé tiene una licencia que permite usarlo, también con fines comerciales, nombrando la fuente (CC BY 2.5 Argentina). Hay que confirmar la licencia de cada archivo antes de usarlo.

Estos datos cambian poco, así que se pueden guardar dentro de la app y funcionan sin internet.

### Colectivos y tiempo real

Acá está el problema principal. BA Data muestra este aviso en sus conjuntos de datos de transporte:

> "Todos los datasets con Formato API y GTFS, están suspendidos. Se encuentran en revisión y corrección."

Eso incluye los horarios de colectivos y la API de tiempo real de trenes, colectivos, subte y cortes de tránsito. Además, la página de la API avisa que la información "puede estar desactualizada o contener imprecisiones" y que hay una versión 2.0 en desarrollo, sin fecha.

Propongo que la primera versión no prometa horarios en vivo ni "cuánto falta para el colectivo".

### Rutas

Hay tres caminos:

- **Abrir la app de mapas del celular** (Google Maps o Apple Maps) con el destino ya cargado. Gratis, sin mantenimiento. La persona sale un momento de nuestra app.
- **Pagar el servicio de rutas de Google.** Se cobra por uso, con una cantidad gratis por mes. No pude confirmar el precio exacto para rutas en transporte público.
- **Armar un servidor propio** con programas gratuitos. Necesita los horarios oficiales, que hoy están suspendidos, y alguien que lo mantenga.

Propongo el primero para arrancar.

### Lugares para visitar

Para "la información justa y necesaria", propongo una lista corta elegida y escrita por nosotros, en vez de traer miles de lugares de una base externa. Así controlamos la calidad y se puede traducir.

Si más adelante hace falta una base grande, las opciones son OpenStreetMap (gratis, pide nombrar la fuente) y los servicios pagos de Google. BA Data tiene además un grupo de datos de cultura y turismo que no llegué a revisar.

### Hospedajes

Queda para más adelante. Si se incluye algo en la primera versión, que sean enlaces a sitios de reservas.

### Avisos ("por dónde no pasar")

Las fuentes oficiales en vivo (cortes de tránsito, estado del subte) son las que hoy están suspendidas. Propongo que la primera versión no muestre avisos en vivo. Sí puede tener consejos generales escritos por nosotros y enlaces a los canales oficiales.

### Idiomas

Todo lo que escribamos nosotros lo tenemos que traducir nosotros. Los datos oficiales están solo en español; los nombres de estaciones y calles no se traducen.

## Propuesta para la primera versión

- Información escrita por nosotros: cómo pagar, cómo usar el subte y el colectivo, qué hacer al llegar.
- Datos oficiales fijos del subte, guardados en la app.
- Lista corta de lugares, armada por nosotros.
- Botón "cómo llego" que abre la app de mapas del celular.
- Sin horarios en vivo y sin avisos en vivo, hasta que la Ciudad vuelva a publicar sus datos.

## Quién la mantiene al día

Falta decidirlo; depende del reparto de áreas de la tarjeta #2. Propongo:

- Una lista de "datos que vencen" (medios de pago, tarifas, lugares) con la fecha de la última revisión de cada uno.
- Una revisión por mes.
- Mostrar en la app la fecha de la última revisión, para que el turista sepa qué tan fresca es la información.

## Qué verifiqué y qué no

**Verificado hoy, leyendo la página oficial:**

- El aviso de suspensión de BA Data y la licencia del conjunto de datos de colectivos.
- La lista de conjuntos de datos del subte.
- Los medios de pago en colectivos, según el sitio de SUBE.
- El aviso de la página de la API Transporte.

**Sin verificar:**

- Los medios de pago en el subte: las páginas oficiales daban error.
- El listado de puntos de carga SUBE: lo vi solo en el buscador; su página daba error.
- La licencia de cada archivo del subte.
- Los precios del servicio de rutas de Google.
- Cuándo vuelven los datos suspendidos y cuándo sale la API 2.0.
- Las condiciones de uso de la API Transporte.

## Fuentes

- [SUBE: apertura a nuevos medios de pago](https://www.argentina.gob.ar/sube/terminos-y-condiciones-sitio-oficial-sube/apertura-de-sube-nuevos-medios-de-pago)
- [BA Data: Colectivos GTFS](https://data.buenosaires.gob.ar/dataset/colectivos-gtfs) (ahí está el aviso de suspensión)
- [BA Data: conjuntos de datos del subte](https://data.buenosaires.gob.ar/dataset/?q=subte)
- [Ciudad de Buenos Aires: API Transporte](https://buenosaires.gob.ar/infraestructura/movilidad/api-transporte)
- [Datos Argentina: puntos de carga SUBE](https://datos.gob.ar/dataset/transporte-puntos-carga-sube) (datos de 2019; hoy daba error)
- [Ciudad de Buenos Aires: pago del subte con tarjetas](https://buenosaires.gob.ar/noticias/se-habilito-el-pago-del-subte-con-celulares-tarjetas-de-debito-y-credito) (hoy daba error)
- [Visit Argentina: tarjeta SUBE, dónde se compra y cómo se usa](https://www.argentina.travel/novedades/tarjeta-sube-donde-se-compra-y-como-se-usa-para-viajar-en-argentina) (nota de enero de 2025)
- [Google Maps Platform: precios](https://developers.google.com/maps/billing-and-pricing/pricing)
- [OpenTripPlanner](https://docs.opentripplanner.org/en/v2.8.0/)
