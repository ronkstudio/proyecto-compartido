# Fuentes de Madrid (tarjetas #100, #190 y #191)

De dónde sale cada dato de Madrid en la guía. Revisado entre el 17 y el 18/11/2026.

## Ayuda al turista y oficinas de turismo

- **Carta de Servicios de Atención Turística de Emergencia 2026** (Ayuntamiento de Madrid, transparencia.madrid.es, evaluada el 26/02/2026). Dice:
  - El viejo SATE (Servicio de Atención al Turista Extranjero) se llama ahora Servicio de Atención Turística de Emergencias.
  - Hasta 2025 funcionaba en la comisaría de la calle Leganitos. Desde 2025 atiende en los Puntos de Información Turística del Ayuntamiento, todos los días de 10 a 20.
  - Ayuda con la denuncia, documentos perdidos, cancelar tarjetas, contacto con familia, consulados, aerolíneas y seguros. Si te robaron todo, te dan un abono turístico de 1 día para llegar al aeropuerto.
  - Teléfono de turismo: 91 578 78 10. Información municipal: 010 (desde fuera de Madrid, 914 800 010).
  - Oficinas: Plaza Mayor 27; Plaza de Callao; Plaza de Neptuno (frente al Prado); C/ Santa Isabel 52 (Reina Sofía); Paseo de la Castellana 138 (Bernabéu); C/ Bailén esquina Requena (Palacio Real); CentroCentro (Plaza de Cibeles 1, cierra los lunes); Cuesta de Moyano caseta 1; Aeropuerto T4 (sala 10, llegadas) y T2 (llegadas).
  - La Policía Municipal tiene Oficinas de Atención a la Ciudadanía con traducción en la Puerta del Sol, el Museo del Prado y el Reina Sofía.

## Emergencias

- 112 y Policía Municipal 092: madrid.es y comunidad.madrid (el 092 no es gratuito ni de información general).
- 091 (Policía Nacional), 062 (Guardia Civil) y 016 (violencia contra mujeres): números nacionales de España.
- Se dejó afuera el 080: en madrid.es solo aparece como indicativo de radio de Bomberos, no como teléfono para el público. Para bomberos, 112.

## Consulados y embajadas

- **Lista Consular** y **Lista del Cuerpo Diplomático** del Ministerio de Asuntos Exteriores de España (exteriores.gob.es, Protocolo), las dos actualizadas al 30/10/2026.
- Consulados generales en Madrid: Argentina (Paseo de la Castellana 16), Uruguay (Pintor Rosales 32), Chile (Rafael Calvo 18), Brasil (Goya 5-7), Colombia (Lagasca 88), Perú (Pintor Rosales 30), Bolivia (Aviador Lindbergh 3), Ecuador (Alenza 1), Venezuela (Apolonio Morales 3), Costa Rica (Ríos Rosas 54), Italia (Agustín de Betancourt 3) y Francia (Marqués de la Ensenada 10).
- Sin consulado general en Madrid, se puso la embajada con sección consular: México (Carrera de San Jerónimo 46), Paraguay (Doctor Fleming 3) y Estados Unidos (Serrano 75, confirmado también en travel.state.gov).
- Ubicación de cada dirección: CartoCiudad (geocodificador oficial del IGN), por número de puerta.

## Comisarías y hospitales

- OpenStreetMap del 17/11/2026 (amenity=police; amenity=hospital con emergency=yes), con la dirección confirmada en CartoCiudad.
- Comisarías de la Policía Nacional: Centro (Leganitos 19), Retiro (Huertas 76), Chamberí (Rafael Calvo 33), Moncloa (Rey Francisco 21) y Arganzuela (Ronda de Toledo 26).
- Hospitales públicos con urgencias: Gregorio Marañón, Clínico San Carlos, La Princesa, Fundación Jiménez Díaz, 12 de Octubre, La Paz, Ramón y Cajal y el Niño Jesús (pediátrico).

## Transporte

- Pago con tarjeta bancaria en los molinetes de todo el Metro desde el 1/6/2026: comunicado del CRTM (crtm.es, 25/05/2026) y de la Comunidad de Madrid.
- Abono turístico y suplemento del aeropuerto: crtm.es (billete turístico).
- Aeropuerto: aena.es (cómo llegar), emtmadrid.es (Exprés Aeropuerto), renfe.com (Cercanías).
- Tarifa fija de taxi aeropuerto ↔ dentro de la M-30 (tarifa 4, sin suplementos): Ayuntamiento de Madrid. Sin monto en la guía.
- Estaciones de metro: OpenStreetMap (relaciones route=subway), 17/11/2026, líneas 1 a 10 y Ramal.

## Apps

- Número del App Store (iTunes Search API, tienda de España) y nombre en Google Play (página de la app) revisados uno por uno el 17/11/2026: Metro de Madrid, EMT Madrid, Moovit, Google Maps, Cabify, Uber, Bolt, FREENOW, Renfe, Iryo, OUIGO España, TheFork, Glovo, Just Eat, Uber Eats y WhatsApp.

## Lugares

- Cada lugar se buscó por nombre en OpenStreetMap (Nominatim, dentro de Madrid) y por dirección en CartoCiudad. Si coincidían a menos de 250 m se usó OpenStreetMap; si no, la dirección oficial. Se revisaron a mano los que no coincidían:
  - Las Bravas: en OpenStreetMap solo figura el local del Pasaje de Mathéu 5; se cambió la dirección.
  - La Casa del Abuelo, Juana la Loca, El Tigre y Chocolatería Valor: OpenStreetMap encontraba otro local de la misma marca; se usó la dirección oficial.
  - Teatro Español, Caja Mágica, Estadio de Vallecas, Calle de Preciados, el Rastro, WiZink Center, Picalagartos, Galileo Galilei y el Andén 0 se ubicaron a mano o con la ficha de OpenStreetMap.
- Excursiones: Nominatim (ciudades y monumentos).
- Zoológico: se sacó la mención a los pandas porque no se pudo confirmar.

## Fotos

- Foto principal (P18) del elemento de Wikidata de cada lugar, de Wikimedia Commons, aceptada si el elemento está a menos de 1,5 km (15 km las excursiones). 93 fotos, todas cargadas en el navegador el 18/11/2026.
- Se sacaron por mostrar otra cosa: La Granja (era la fábrica de cristales), Cuatro Torres (una cancha de fútbol), Teleférico (uno de Venezuela), Chinchón, Sierra de Guadarrama y Casa de Campo (el archivo no dejaba claro qué mostraba).

## Agenda de Hoy

- datos.madrid.es: "Actividades culturales y de ocio municipal en los próximos 100 días" (JSON, 206974-0-agenda-eventos-culturales-100). La lee herramientas/armar-hoy-madrid.ps1. Los enlaces de cada evento van a madrid.es (se pasan a https).
- Horas gratis de museos: museodelprado.es, museoreinasofia.es (folleto de visita), museothyssen.org y esmadrid.com/gratis-temporal-madrid. En la guía sin horario exacto.
- Cambio de guardia (miércoles y sábados a la mañana) y relevo solemne (primer miércoles de mes, salvo enero, agosto y septiembre): esmadrid.com y Patrimonio Nacional.

## Alquiler de auto

- Europcar, Hertz, Avis, Sixt, Enterprise y Centauro: cada web se abrió el 17/11/2026 (Enterprise bloquea a los programas, pero abre en el navegador).
- Zona de bajas emisiones en toda la ciudad y restricción del Distrito Centro: madrid.es (Madrid 360). Dicho de forma general, sin detalles de etiquetas.

## Dietas y fotos nuevas (tarjeta #198, 18/11/2026)

- **Veganos:** La Encomienda, Santa y Pura, Frutas Prohibidas y VEGA (calle de la Luna). Los cuatro figuran en OpenStreetMap con `diet:vegan=only`, y su web dice que la cocina es vegana.
- **Sin TACC:** Sana Locura y LEON The Baker. Las dos figuran en OpenStreetMap con `diet:gluten_free=only`, y su web lo dice. No se encontró un tercero con fuente: Celicioso no respondió.
- **Fotos:** 14 más, buscadas por el local en OpenStreetMap y por fotos de Commons sacadas a menos de 150 m que nombran el lugar. Se miraron una por una y se sacaron 2: un tapiz en lugar de la Real Fábrica de Tapices y un retrato en lugar del Teatro Real.
