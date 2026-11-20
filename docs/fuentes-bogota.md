# Fuentes de Bogotá (tarjeta #204)

De dónde sale cada dato de Bogotá en la guía. Revisado el 18 y 19/11/2026.

## Información turística

- Puntos de Información Turística (PIT) del Instituto Distrital de Turismo, con las direcciones de visitbogota.co: Monserrate (Carrera 2 Este # 21-48), Aeropuerto (Calle 26 # 103-09), Jardín Botánico (Calle 63 # 68-95), Terminal Salitre (Calle 22C # 68F-37) y Centro Internacional (Carrera 10 # 26-21). El del Centro Histórico sale de OpenStreetMap. Los que no figuran en el mapa están marcados "aprox".

## Emergencias

- 123 (línea única de emergencias), 155 (violencia contra la mujer), 144 (Defensa Civil), 195 (información de Bogotá) y Cancillería de Colombia (+57 601 3814000): números públicos de Colombia y de Bogotá.
- El sitio de la Cancillería (cancilleria.gov.co) bloquea a los robots; no se usó para las direcciones de embajadas.

## Embajadas y consulados

- Direcciones de la web oficial de cada embajada o de su cancillería (18/11/2026): Argentina (Carrera 11B # 97-56, piso 4), Brasil (Calle 93 # 14-20, piso 8: de directorios de embajadas, que coinciden con OpenStreetMap), Chile (Calle 100 # 11B-46), España (consulado en Calle 94A # 11A-70; embajada en Calle 92 # 12-68), Italia (Calle 93B # 9-92), México (Calle 113 # 7-21, Teleport), Estados Unidos (Carrera 45 # 24B-27) y Uruguay (Carrera 11A # 93-67, oficina 502, del mapa consular oficial de Uruguay).
- Ubicación: la oficina diplomática en OpenStreetMap (office=diplomatic, 19/11/2026). Uruguay (OpenStreetMap tiene la dirección vieja) y el consulado de España están marcados "aprox".
- Los demás países no se cargaron: se buscan con "Encontrar mi consulado".

## Comisarías y hospitales

- OpenStreetMap del 19/11/2026: estaciones de la Policía Nacional (La Candelaria, Santa Fe, Chapinero, Teusaquillo y la de turismo en Monserrate) y hospitales con urgencias (Fundación Santa Fe, Clínica del Country, Méderi y Hospital de Chapinero).

## Transporte

- bogota.gov.co, transmilenio.gov.co y tullaveplus.gov.co: TuLlave, pago con Visa y Mastercard sin contacto desde 2026 (cada entrada cobra un pasaje completo), SITP y TransMiCable.
- Aeropuerto El Dorado (eldorado.aero/transporte): fila oficial de taxis con el papel de la tarifa.
- Estaciones de TransMilenio: las estaciones de OpenStreetMap (amenity=bus_station, 19/11/2026), agrupadas a mano por la avenida de cada troncal (A Caracas, B Autopista Norte, F Américas, J Eje Ambiental, K Calle 26 y L Carrera 10). Las de la Avenida Caracas que en el mapa dicen "Temporal" funcionan provisoriamente mientras se construye el metro.

## Lugares

- 121 lugares en `app/data/bogota-lugares.js`. Las direcciones de Bogotá ("Carrera 7 # 28-66") indican la carrera y la calle que se cruzan, y Nominatim no las entiende. Por eso cada lugar se buscó por nombre en OpenStreetMap y se confirmó con un modelo de la grilla de calles y carreras armado con 31 lugares bien ubicados (diferencia típica: unos 200 metros). Si el resultado por nombre quedaba lejos de lo que predice la grilla, se usó el punto de la grilla (aproximado).
- 116 tienen ubicación; 5 no la llevan: 3 tours sin punto fijo, la Ciclovía y los senderos de los cerros. Andrés Carne de Res de Chía tiene ubicación desde el 20/11/2026 (OpenStreetMap, tarjeta #225).
- Direcciones corregidas: Apache (Carrera 11 # 93-53, en el Parque de la 93, según OpenStreetMap).
- Se sacaron horarios exactos que se habían colado (la Ciclovía, el horario para ir al mercado de flores y el de un bar).

## Dietas

- Solo veganos marcados "diet:vegan=only" en OpenStreetMap (18/11/2026): Herbívoro Cocina Vegana, Gori San, Frambuesa y Maha Vegan Food. No hay lugares sin TACC con fuente.

## Hoy en Bogotá

- Ciclovía los domingos y feriados: bogota.gov.co e idrd.gov.co.
- Museo del Oro gratis los domingos: banrepcultural.org.
- Mercado de pulgas de Usaquén los domingos y feriados: visitbogota.co.

## Fotos

- 16 fotos de Wikimedia Commons con licencia libre (19/11/2026), buscadas por nombre en OpenStreetMap y en Commons cerca de cada lugar, y revisadas a ojo. Se descartaron 6 que mostraban otra cosa (Museo Nacional, Parque de la 93, Planetario, La Candelaria, La Puerta Falsa y Centro Andino).

## Consulados sumados (tarjeta #223, 20/11/2026)

- **Perú**: Consulado General, Calle 90 # 14-26, oficina 417, según el directorio de consulados del Perú de 2025 (leído con el buscador; gob.pe no abre en el navegador). Coincide con OpenStreetMap. [fuente](https://www.gob.pe/consulado-del-peru-en-bogota)
Ubicación: OpenStreetMap (office=diplomatic o la dirección en Nominatim).
