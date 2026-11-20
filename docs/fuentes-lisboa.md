# Fuentes de Lisboa (tarjeta #214)

De dónde sale cada dato de Lisboa en la guía. Revisado el 19/11/2026.

## Transporte

- metrolisboa.pt: tarjeta navegante ocasional (antes Viva Viagem), zapping, pago con Visa y Mastercard sin contacto en el metro y pase de 24 horas Carris/Metro (y los que suman barcos o trenes).
- carris.pt: pago sin contacto a bordo de colectivos y tranvías, y recorridos del 15E (Praça da Figueira – Algés) y del 28E (Martim Moniz – Campo de Ourique).
- visitlisboa.com: Lisboa Card (transporte gratis, entrada gratis a decenas de museos y monumentos, descuentos).
- Estaciones del metro: las relaciones de las cuatro líneas en OpenStreetMap (route=subway, 19/11/2026): Azul 18, Amarela 13, Verde 13 y Vermelha 12 estaciones.
- La web del aeropuerto (aeroportolisboa.pt) no se pudo leer con robots; lo del aeropuerto (dos terminales, metro en la terminal 1) se dejó en términos generales.

## Emergencias y salud

- 112 (emergencias europeas), 800 202 148 (violencia doméstica), 800 250 250 (antivenenos) y 116 111 (chicos): números públicos de Portugal.
- SNS 24 (808 24 24 24): sns24.gov.pt, 19/11/2026.

## Información turística, policía y hospitales

- Puestos "Ask Me Lisboa" en OpenStreetMap (tourism=information, 19/11/2026): Praça do Comércio, Restauradores (aproximado), Belém y aeropuerto.
- Comisarías de la PSP en OpenStreetMap (amenity=police, 19/11/2026), con el puesto de atención al turista de los Restauradores.
- Hospitales con urgencias en OpenStreetMap (amenity=hospital, emergency=yes, 19/11/2026): São José, Santa Maria, São Francisco Xavier, CUF Descobertas y Cruz Vermelha.

## Consulados

- Direcciones de la web oficial de cada país (19/11/2026): Argentina (eport.cancilleria.gob.ar: Avenida João Crisóstomo 8), Brasil (gov.br, Consulado-Geral em Lisboa: Rua António Maria Cardoso 39), Chile (chile.gob.cl/portugal: Avenida da República 32), España (exteriores.gob.es, Consulado General: Rua do Salitre 3) e Italia (amblisbona.esteri.it, cancillería consular: Calçada do Conde de Pombeiro 24).
- Ubicación: OpenStreetMap (office=diplomatic) o la dirección. Chile e Italia, aproximadas.
- Colombia, México, Uruguay y Estados Unidos: sus webs no se pudieron leer (bloquean robots o no responden). No se cargaron: se buscan con "Encontrar mi consulado".

## Lugares

- 170 lugares en `app/data/lisboa-lugares.js`. Cada uno se buscó por nombre y por dirección en OpenStreetMap (Nominatim, 19/11/2026) con `herramientas/ciudad/geociudad.pl`; los que quedaron lejos se revisaron a mano.
- 165 tienen ubicación; 5 tours sin punto fijo no la llevan.
- Cambios por OpenStreetMap: la Cerveteca figura en la Avenida de Paris 15B (Areeiro), no en la Praça das Flores.
- Se sacaron datos que no se pudieron confirmar: el colectivo gratis entre terminales, la feria de los sábados del Príncipe Real, los conciertos gratis de verano frente al São Carlos, la feria de los domingos de la LX Factory y las opciones sin gluten de O Botanista (dato de salud sin fuente).

## Dietas

- Solo veganos marcados "diet:vegan=only" en OpenStreetMap (19/11/2026): Jardim das Cerejas, Ao 26, Kong, O Botanista y The Green Affair. No hay lugares sin TACC con fuente.

## Hoy en Lisboa

- Feira da Ladra los martes y sábados: visitlisboa.com (horario de la ficha del lugar), 19/11/2026.
- Fiestas de Lisboa en junio: egeac.pt y visitlisboa.com.

## Apps

- Número del App Store y nombre en Google Play revisados uno por uno el 19/11/2026: navegante (TML), Uber, Bolt, FREENOW, Citymapper, Moovit, Google Maps, TheFork, Glovo, Uber Eats y WhatsApp. GIRA (bicis) no se cargó: no aparece en Google Play con ese nombre.

## Fotos

- 52 fotos de Wikimedia Commons con licencia libre (19/11/2026), buscadas por nombre en OpenStreetMap y en Commons cerca de cada lugar, y revisadas a ojo. Se descartaron 36 que mostraban otra cosa (gente en primer plano, carteles, planos, folletos, un pájaro, el metro en vez del zoológico, etc.).

## Consulados sumados (tarjeta #223, 20/11/2026)

- **Colombia**: Avenida Fontes Pereira de Melo 16, 6.º (Palácio Sotto Mayor), según la Sección Consular de la Embajada de Colombia en Portugal. [fuente](https://portugal.embajada.gov.co)
- **México**: Estrada de Monsanto 78, según el directorio de la Secretaría de Relaciones Exteriores. [fuente](https://portales.sre.gob.mx/directorio/index.php/embajadas-de-mexico-en-el-exterior/portugal)
- **Perú**: Sección Consular de la Embajada, Avenida da Liberdade 144, 8.º E, según gob.pe (leído con el buscador; la página no abre en el navegador). [fuente](https://www.gob.pe/institucion/seccion-consular-republica-portuguesa/contacto-y-numeros-de-emergencias)
- **Estados Unidos**: Avenida das Forças Armadas, 1600-081 Lisboa, en su web oficial (el número 133C sale de OpenStreetMap). [fuente](https://pt.usembassy.gov/contact/)
- **Uruguay**: no se cargó. El directorio oficial de Uruguay (busquedaconsulados.mrree.gub.uy) estaba en mantenimiento y la consulta del cuerpo diplomático de Portugal (gov.pt) no abrió. Los directorios privados dan dos direcciones distintas.
Ubicación: OpenStreetMap (office=diplomatic o la dirección en Nominatim).
