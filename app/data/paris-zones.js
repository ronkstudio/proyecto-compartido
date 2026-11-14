/* Zonas de París para el mapa (tarjeta #102): puntos de ayuda, canales a distancia y búsquedas "cerca mío".

   PUNTOS DE AYUDA (13/11/2026):
   - Hospitales con guardia: los de la red pública AP-HP, ubicados con OpenStreetMap ("emergency=yes"). El American Hospital es privado y atiende en inglés.
   - Comisarías: las comisarías de distrito de la Prefectura de Policía, con dirección y ubicación de OpenStreetMap. Las 5 del centro y el este se sumaron el 14/11/2026 (tarjeta #183).
   - Consulados y embajadas: 15 países (Portugal sumado el 14/11/2026, tarjeta #183), cada dirección confirmada en el sitio oficial de ese país (cancillería, embajada o consulado), 13 y 14/11/2026.
     Perú se mudó en mayo de 2026: se usa la dirección nueva que da su consulado. Venezuela: dirección de la embajada según su cancillería.
     El canal "¿Tu país no está en la lista?" busca los demás en el mapa.
   - Oficina de turismo: la sede principal de Paris je t'aime, que se mudó en abril de 2024 (sitio de la Ciudad de París, paris.fr).
   - Estaciones y aeropuertos: OpenStreetMap. Los marcados "aprox" se ubicaron a mano.

   LÍMITES DE BARRIOS Y CAPAS: todavía no están (son opcionales). Si se suman, cada punto son 8 dígitos "AAAABBBB":
   latitud = 48 + AAAA/10000, longitud = 2 + BBBB/10000 (zonasBase en data/paris-local.js). París no cruza ningún grado entero. */
window.CITY_ZONES = window.CITY_ZONES || {};
window.CITY_ZONES.paris = {
  guide: {},
  layers: [],

  helpTypes: {
    info: { name: "Información turística", icon: "ℹ️", color: "#1a73c8" },
    policia: { name: "Policía y denuncias", icon: "👮", color: "#364fc7" },
    salud: { name: "Hospitales con guardia 24 h", icon: "🏥", color: "#e03131" },
    consul: { name: "Consulados y embajadas", icon: "🛂", color: "#0b7285" },
    transporte: { name: "Estaciones y aeropuertos", icon: "🚉", color: "#5f3dc4" }
  },
  help: [
    { id: "p-5", type: "policia", name: "Comisaría de los distritos 5 y 6", address: "4 Rue de la Montagne Sainte-Geneviève, 75005", ll: [48.84941, 2.34828],
      note: "La más cercana al Barrio Latino, Notre-Dame y Saint-Germain. Denuncias por robos o pérdida de documentos." },
    { id: "p-7", type: "policia", name: "Comisaría del distrito 7", address: "9 Rue Fabert, 75007", ll: [48.86201, 2.31210],
      note: "Frente a los Inválidos; la más cercana a la Torre Eiffel." },
    { id: "p-9", type: "policia", name: "Comisaría del distrito 9", address: "14 Rue Chauchat, 75009", ll: [48.87348, 2.33979],
      note: "Cerca de la Ópera y las Galerías Lafayette." },
    { id: "p-18", type: "policia", name: "Comisaría del distrito 18", address: "79 Rue de Clignancourt, 75018", ll: [48.88964, 2.34805],
      note: "La más cercana a Montmartre y el Sagrado Corazón." },
    { id: "p-15", type: "policia", name: "Comisaría del distrito 15", address: "250 Rue de Vaugirard, 75015", ll: [48.84012, 2.30245],
      note: "Cerca de Montparnasse." },
    { id: "p-17", type: "policia", name: "Comisaría del distrito 17", address: "19-21 Rue Truffaut, 75017", ll: [48.88505, 2.32211],
      note: "Batignolles, al norte del Arco del Triunfo." },
    /* Tarjeta #183: comisarías centrales con guardia 24 h según la guía de la Ciudad de París para víctimas (octubre de 2025). Ubicación: OpenStreetMap. */
    { id: "p-centro", type: "policia", name: "Comisaría de París Centro (distritos 1 a 4)", address: "1 Rue Gabriel Vicaire, 75003", ll: [48.86501, 2.36160],
      note: "Para el Louvre, el Marais, Châtelet y la isla de la Cité. Atiende las 24 horas." },
    { id: "p-8", type: "policia", name: "Comisaría del distrito 8", address: "1 Avenue de Selves, 75008", ll: [48.86680, 2.31064],
      note: "La más cercana a los Campos Elíseos y la plaza de la Concordia. Atiende las 24 horas." },
    { id: "p-10", type: "policia", name: "Comisaría del distrito 10", address: "26 Rue Louis Blanc, 75010", ll: [48.88071, 2.36600],
      note: "Cerca de la Gare du Nord y la Gare de l'Est. Atiende las 24 horas." },
    { id: "p-11", type: "policia", name: "Comisaría del distrito 11", address: "12-14 Passage Charles Dallery, 75011", ll: [48.85430, 2.37840],
      note: "Para Bastilla y la zona de bares de Oberkampf. Atiende las 24 horas." },
    { id: "p-12", type: "policia", name: "Comisaría del distrito 12", address: "80 Avenue Daumesnil, 75012", ll: [48.84422, 2.38118],
      note: "Cerca de la Gare de Lyon. Atiende las 24 horas." },
    { id: "h-hoteldieu", type: "salud", name: "Hôtel-Dieu", address: "1 Parvis Notre-Dame, 75004", ll: [48.85463, 2.34885],
      note: "Hospital público frente a Notre-Dame, en pleno centro. Guardia para adultos." },
    { id: "h-lariboisiere", type: "salud", name: "Hôpital Lariboisière", address: "2 Rue Ambroise-Paré, 75010", ll: [48.88290, 2.35331],
      note: "Público. Guardia 24 h; al lado de Gare du Nord." },
    { id: "h-pitie", type: "salud", name: "Hôpital Pitié-Salpêtrière", address: "47-83 Boulevard de l'Hôpital, 75013", ll: [48.83753, 2.36528],
      note: "Público y uno de los más grandes de Europa. Guardia 24 h." },
    { id: "h-hegp", type: "salud", name: "Hôpital européen Georges-Pompidou", address: "20 Rue Leblanc, 75015", ll: [48.83877, 2.27399],
      note: "Público. Guardia 24 h; al sudoeste de la ciudad." },
    { id: "h-cochin", type: "salud", name: "Hôpital Cochin", address: "27 Rue du Faubourg Saint-Jacques, 75014", ll: [48.83702, 2.33993],
      note: "Público. Guardia 24 h; cerca de Montparnasse y del Barrio Latino." },
    { id: "h-stantoine", type: "salud", name: "Hôpital Saint-Antoine", address: "184 Rue du Faubourg Saint-Antoine, 75012", ll: [48.84853, 2.38246],
      note: "Público. Guardia 24 h; el más cercano a Bastilla." },
    { id: "h-bichat", type: "salud", name: "Hôpital Bichat-Claude-Bernard", address: "46 Rue Henri-Huchard, 75018", ll: [48.89901, 2.33176],
      note: "Público. Guardia 24 h; al norte de Montmartre." },
    { id: "h-necker", type: "salud", name: "Hôpital Necker-Enfants malades", address: "149 Rue de Sèvres, 75015", ll: [48.84522, 2.31555],
      note: "Hospital de niños. Guardia pediátrica 24 h." },
    { id: "h-american", type: "salud", name: "American Hospital of Paris", address: "63 Boulevard Victor-Hugo, Neuilly-sur-Seine", ll: [48.89266, 2.27225], far: true,
      note: "Privado, atienden en inglés. Al oeste de París, fuera de la ciudad. Suele ser caro: consultá con tu seguro." },
    { id: "cons-ar", type: "consul", name: "Argentina · Embajada y Consulado", address: "6 Rue Cimarosa, 75116", ll: [48.86836, 2.29021],
      note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el sitio oficial de la embajada." },
    { id: "cons-cl", type: "consul", name: "Chile · Embajada y sección consular", address: "2 Avenue de la Motte-Picquet, 75007", ll: [48.85739, 2.30952],
      note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el sitio oficial de la embajada." },
    { id: "cons-es", type: "consul", name: "España · Consulado General", address: "165 Boulevard Malesherbes, 75017", ll: [48.88594, 2.30608],
      note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el sitio oficial del consulado." },
    { id: "cons-us", type: "consul", name: "Estados Unidos · Servicios consulares", address: "4 Avenue Gabriel, 75008", ll: [48.86774, 2.32038],
      note: "Pasaportes y ayuda a sus ciudadanos. La embajada está al lado, en el 2 de la misma avenida." },
    { id: "cons-uy", type: "consul", name: "Uruguay · Embajada y sección consular", address: "33 Rue Jean Giraudoux, 75116", ll: [48.87057, 2.29461], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el sitio oficial de la embajada." },
    { id: "cons-br", type: "consul", name: "Brasil · Consulado General", address: "65 Avenue Franklin Delano Roosevelt, 75008", ll: [48.87201, 2.30972], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el sitio oficial del consulado." },
    { id: "cons-mx", type: "consul", name: "México · Sección consular", address: "4 Rue Notre-Dame-des-Victoires, 75002", ll: [48.86665, 2.34128], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el sitio oficial de la embajada." },
    { id: "cons-co", type: "consul", name: "Colombia · Consulado General", address: "12 Rue de Berri, 75008", ll: [48.87253, 2.30452], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el sitio oficial del consulado." },
    { id: "cons-pe", type: "consul", name: "Perú · Consulado General", address: "14 Rue de Siam, 75116", ll: [48.86239, 2.27459], note: "Se mudó a esta dirección en mayo de 2026, según su sitio oficial. Confirmá antes de ir." },
    { id: "cons-ec", type: "consul", name: "Ecuador · Embajada y sección consular", address: "50 Rue Copernic, 75116", ll: [48.86958, 2.28652], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el sitio oficial de la embajada." },
    { id: "cons-py", type: "consul", name: "Paraguay · Embajada y sección consular", address: "1 Rue Saint-Dominique, 75007", ll: [48.85733, 2.32316], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el sitio oficial de la embajada." },
    { id: "cons-bo", type: "consul", name: "Bolivia · Embajada y sección consular", address: "12 Avenue du Président Kennedy, 75016", ll: [48.85746, 2.28704], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el sitio oficial de la embajada." },
    { id: "cons-ve", type: "consul", name: "Venezuela · Embajada", address: "11 Rue Copernic, 75116", ll: [48.86882, 2.29008], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el sitio oficial de la embajada." },
    { id: "cons-it", type: "consul", name: "Italia · Consulado General", address: "5 Boulevard Émile Augier, 75116", ll: [48.85897, 2.27302], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el sitio oficial del consulado." },
    { id: "cons-pt", type: "consul", name: "Portugal · Consulado General", address: "6 Rue Georges Berger, 75017", ll: [48.88115, 2.31048], note: "Pasaportes, documentos y ayuda a sus ciudadanos. Dirección confirmada en el sitio oficial del gobierno de Portugal (gov.pt)." },
    { id: "ti-paris", type: "info", name: "Oficina de Turismo de París", address: "101 Quai Jacques Chirac, 75015", ll: [48.85574, 2.29004], note: "La oficina principal de turismo de la ciudad, a pasos de la Torre Eiffel. Información, mapas y entradas." },
    { id: "t-nord", type: "transporte", name: "Gare du Nord", address: "Rue de Dunkerque, 75010", ll: [48.88032, 2.35517],
      note: "Trenes a Londres, Bruselas y Ámsterdam. RER B al aeropuerto Charles de Gaulle." },
    { id: "t-lyon", type: "transporte", name: "Gare de Lyon", address: "Place Louis-Armand, 75012", ll: [48.84438, 2.37480],
      note: "Trenes al sur de Francia, Suiza e Italia. Metro 1 y 14, RER A y D." },
    { id: "t-est", type: "transporte", name: "Gare de l'Est", address: "Place du 11 Novembre 1918, 75010", ll: [48.87710, 2.35949],
      note: "Trenes al este de Francia y a Alemania." },
    { id: "t-montparnasse", type: "transporte", name: "Gare Montparnasse", address: "17 Boulevard de Vaugirard, 75015", ll: [48.84006, 2.31911],
      note: "Trenes al oeste de Francia: Bretaña, Burdeos y el Valle del Loira." },
    { id: "t-stlazare", type: "transporte", name: "Gare Saint-Lazare", address: "13 Rue d'Amsterdam, 75008", ll: [48.87704, 2.32507],
      note: "Trenes a Normandía. Metro 14 hasta el centro y Orly." },
    { id: "t-austerlitz", type: "transporte", name: "Gare d'Austerlitz", address: "85 Quai d'Austerlitz, 75013", ll: [48.84178, 2.36614],
      note: "Trenes al centro de Francia y trenes nocturnos." },
    { id: "t-cdg", type: "transporte", name: "Aeropuerto Charles de Gaulle (CDG)", address: "Roissy-en-France", ll: [49.0097, 2.5479], aprox: true, far: true,
      note: "El aeropuerto principal, al norte. Unos 35 minutos del centro en RER B." },
    { id: "t-orly", type: "transporte", name: "Aeropuerto de Orly (ORY)", address: "Orly", ll: [48.7262, 2.3652], aprox: true, far: true,
      note: "Al sur de la ciudad. Unos 25 minutos del centro en metro 14." },
    { id: "t-bva", type: "transporte", name: "Aeropuerto de Beauvais (BVA)", address: "Tillé", ll: [49.4545, 2.1128], aprox: true, far: true,
      note: "Para vuelos baratos, a más de una hora de París en micro." }
  ],
  /* Canales a distancia y búsquedas rápidas "cerca mío" (abren Google Maps). */
  channels: [
    { icon: "📝", name: "Denuncia por internet", desc: "Pre-denuncia por robo en el sitio oficial del Ministerio del Interior (en francés). Después hay que firmarla en una comisaría.", href: "https://www.masecurite.interieur.gouv.fr/fr/demarches-en-ligne/plainte-en-ligne" },
    { icon: "💊", name: "Farmacias de turno", desc: "Buscá las farmacias de guardia cerca tuyo en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=pharmacie+de+garde+Paris" },
    { icon: "🛂", name: "¿Tu país no está en la lista?", desc: "Buscá su consulado o embajada en el mapa.", href: "https://www.google.com/maps/search/?api=1&query=consulat+ambassade+Paris" }
  ],
  nearby: [["💊", "Farmacia", "pharmacie"], ["🏧", "Cajero", "distributeur de billets"], ["💱", "Casa de cambio", "bureau de change"], ["🛒", "Supermercado", "supermarché"], ["🥖", "Panadería", "boulangerie"], ["🧺", "Lavandería", "laverie"], ["🧳", "Guardaequipaje", "consigne bagages"], ["📶", "Café con wifi", "café wifi"], ["👮", "Comisaría", "commissariat"]],

  barrios: {}
};
