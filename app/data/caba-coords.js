/* Coordenadas [latitud, longitud] de cada lugar, por id (nombre en minúsculas, sin acentos, con guiones).
   La mayoría sale de geocodificar la dirección con OpenStreetMap (Nominatim).
   Las marcadas "aprox." fueron ubicadas a mano. Un lugar sin coordenadas simplemente no aparece en el mapa. */
window.CITY_COORDS = window.CITY_COORDS || {};
window.CITY_COORDS.caba = {
  /* Imperdibles */
  "plaza-de-mayo-y-casa-rosada": [-34.60807, -58.37028],
  "obelisco-y-avenida-corrientes": [-34.60374, -58.38157],
  "teatro-colon": [-34.60109, -58.38319],
  "cementerio-de-la-recoleta": [-34.58748, -58.39339],
  "el-ateneo-grand-splendid": [-34.59598, -58.39426],
  "caminito": [-34.63936, -58.36257],
  "san-telmo-y-la-feria-de-los-domingos": [-34.62047, -58.3717],
  "puerto-madero-y-puente-de-la-mujer": [-34.60802, -58.36513],
  "reserva-ecologica-costanera-sur": [-34.60695, -58.35274],
  "bosques-de-palermo-y-rosedal": [-34.5713, -58.417], // aprox.
  "jardin-japones": [-34.57514, -58.40926],
  "malba": [-34.57688, -58.40339],
  "museo-nacional-de-bellas-artes": [-34.58392, -58.39292],
  "floralis-generica": [-34.58169, -58.394],
  "palacio-barolo": [-34.60966, -58.38573],
  "avenida-de-mayo": [-34.6093, -58.38798],
  "congreso-de-la-nacion": [-34.60975, -58.39255],
  "palacio-libertad-ex-cck": [-34.60356, -58.36948],
  "barrio-chino": [-34.5563, -58.4507], // aprox.
  "la-bombonera-y-museo-de-la-pasion-boquense": [-34.63552, -58.36492],
  "estadio-monumental-y-museo-river": [-34.54508, -58.44836],
  "jardin-botanico-carlos-thays": [-34.5826, -58.4179], // aprox.
  "ecoparque": [-34.5757, -58.4196], // aprox.
  "planetario-galileo-galilei": [-34.56965, -58.41172],
  "fundacion-proa": [-34.63846, -58.36213], // aprox.
  "usina-del-arte": [-34.62892, -58.3564],
  "museo-evita": [-34.58075, -58.41474],
  "museo-de-arte-moderno": [-34.62207, -58.37074],
  "museo-nacional-de-arte-decorativo": [-34.58261, -58.40108],
  "el-zanjon-de-granados": [-34.61666, -58.3718],
  "mercado-de-san-telmo": [-34.61905, -58.37251],
  "cementerio-de-la-chacarita": [-34.58677, -58.45692],

  /* Dónde comer */
  "don-julio": [-34.58629, -58.42428],
  "la-cabrera": [-34.5891, -58.4326], // aprox.
  "parrilla-pena": [-34.60083, -58.39147],
  "la-brigada": [-34.61844, -58.37274],
  "desnivel": [-34.61787, -58.37174],
  "la-carniceria": [-34.58291, -58.42375],
  "el-pobre-luis": [-34.55534, -58.45231],
  "pizzeria-guerrin": [-34.60413, -58.3861], // aprox.
  "el-cuartito": [-34.59782, -58.38547],
  "las-cuartetas": [-34.60368, -58.37855],
  "la-mezzetta": [-34.57811, -58.46093],
  "banchero": [-34.63547, -58.35864],
  "siamo-nel-forno": [-34.58058, -58.4376],
  "el-preferido-de-palermo": [-34.58544, -58.42539],
  "el-obrero": [-34.62968, -58.35683],
  "don-ignacio": [-34.61065, -58.41503],
  "miramar": [-34.62275, -58.39361],
  "albamonte": [-34.58762, -58.45297],
  "el-sanjuanino": [-34.58727, -58.38739],
  "cumana": [-34.59553, -58.39184],
  "la-cocina": [-34.59312, -58.40193],
  "cafe-tortoni": [-34.60869, -58.37811],
  "las-violetas": [-34.61127, -58.42092],
  "la-biela": [-34.5878, -58.39072],
  "los-galgos": [-34.60302, -58.39229],
  "bar-el-federal": [-34.6196, -58.37423],
  "el-gato-negro": [-34.60415, -58.39035],
  "confiteria-la-ideal": [-34.60389, -58.37973],
  "cadore": [-34.60417, -58.39065],
  "scannapieco": [-34.5832, -58.44472],
  "aramburu": [-34.59168, -58.38904],
  "mishiguene": [-34.57696, -58.41221],
  "anchoita": [-34.58941, -58.44539],
  "julia": [-34.59332, -58.43788],
  "gran-dabbang": [-34.59134, -58.42533],
  "proper": [-34.59097, -58.42354],
  "narda-comedor": [-34.55309, -58.43667],
  "nino-gordo": [-34.58648, -58.42893],
  "sarkis": [-34.59142, -58.43611],
  "chori": [-34.58772, -58.43052],
  "carritos-de-la-costanera-sur": [-34.6105, -58.3585], // aprox.

  /* Noche y tango */
  "floreria-atlantico": [-34.59162, -58.37969],
  "tres-monos": [-34.58487, -58.4262],
  "cochinchina": [-34.59032, -58.42884],
  "presidente-bar": [-34.59096, -58.3868],
  "victoria-brown": [-34.5872, -58.42831],
  "la-catedral-club": [-34.60495, -58.42197],
  "salon-canning": [-34.59289, -58.42749],
  "la-viruta": [-34.5916, -58.43082],
  "el-querandi": [-34.61177, -58.37466],
  "cafe-de-los-angelitos": [-34.60962, -58.39615],
  "rojo-tango": [-34.61407, -58.36173],
  "la-bomba-de-tiempo": [-34.60605, -58.41027],
  "thelonious-club": [-34.582, -58.43293],
  "niceto-club": [-34.58741, -58.43891],
  "teatros-de-la-avenida-corrientes": [-34.60415, -58.388], // aprox.
  "funcion-en-el-teatro-colon": [-34.60109, -58.38319],

  /* Tours con punto fijo */
  "visita-guiada-al-teatro-colon": [-34.60135, -58.38345], // aprox.
  "visita-al-palacio-barolo": [-34.60966, -58.38573],
  "visita-guiada-al-cementerio-de-la-recoleta": [-34.58748, -58.39339],
  "visita-a-la-casa-rosada": [-34.60807, -58.37028],

  /* Excursiones */
  "tigre-y-delta-del-parana": [-34.42201, -58.58028],
  "colonia-del-sacramento-uruguay": [-34.46986, -57.84337],
  "san-antonio-de-areco": [-34.24373, -59.47342],
  "la-plata": [-34.92281, -57.95616],
  "lujan": [-34.56444, -59.12147],
  "san-isidro": [-34.46717, -58.50912],
  "isla-martin-garcia": [-34.18261, -58.25126],
  "temaiken": [-34.36575, -58.80266],
  "montevideo-uruguay": [-34.90642, -56.20693],
  "chascomus": [-35.59158, -58.02571],
  "capilla-del-senor": [-34.28695, -59.10174],

  /* Hospedaje */
  "alvear-palace-hotel": [-34.58763, -58.38879],
  "palacio-duhau-park-hyatt": [-34.58934, -58.38637],
  "four-seasons-buenos-aires": [-34.59061, -58.38262],
  "faena-hotel": [-34.61407, -58.36173],
  "home-hotel": [-34.58214, -58.43901],
  "mine-hotel": [-34.59103, -58.42886],
  "fierro-hotel": [-34.57891, -58.43538],
  "legado-mitico": [-34.58766, -58.42679],
  "anselmo-buenos-aires": [-34.62053, -58.37205],
  "hotel-pulitzer": [-34.59741, -58.37687],
  "hotel-madero": [-34.61726, -58.36237],
  "hilton-buenos-aires": [-34.60594, -58.36367],
  "ibis-buenos-aires-obelisco": [-34.60413, -58.38582],
  "milhouse-hostel": [-34.60947, -58.3801],
  "america-del-sur-hostel": [-34.6165, -58.37581],
  "viajero-buenos-aires-hostel": [-34.61363, -58.37561],
  "play-hostel": [-34.58678, -58.4241],
  "circus-hostel-hotel": [-34.6199, -58.3757], // aprox.

  /* Compras y ferias */
  "feria-de-mataderos": [-34.66246, -58.50003],
  "feria-de-plaza-francia": [-34.5868, -58.3925], // aprox.
  "feria-de-plaza-serrano": [-34.5887, -58.4302], // aprox.
  "mercado-de-pulgas": [-34.58237, -58.44646],
  "galerias-pacifico": [-34.59925, -58.37531],
  "patio-bullrich": [-34.589, -58.3838], // aprox.
  "palermo-soho": [-34.58706, -58.42818],
  "outlets-de-villa-crespo": [-34.5947, -58.4374], // aprox.
  "calle-florida": [-34.6035, -58.3752], // aprox.
  "avenida-santa-fe": [-34.5955, -58.399], // aprox.
  "librerias-de-la-avenida-corrientes": [-34.60425, -58.3898], // aprox.

  /* Más variedad */
  "biblioteca-nacional-mariano-moreno": [-34.58439, -58.39797],
  "parque-de-la-memoria": [-34.53941, -58.44224],
  "pasaje-lanin": [-34.6447, -58.3756], // aprox.
  "museo-argentino-de-ciencias-naturales": [-34.6051, -58.4376], // aprox.
  "coleccion-fortabat": [-34.59946, -58.36487],
  "colon-fabrica": [-34.64152, -58.36141],
  "torre-monumental": [-34.59218, -58.37374],
  "lab-tostadores-de-cafe": [-34.58602, -58.43686],
  "cuervo-cafe": [-34.59043, -58.42573],
  "obrador-florida": [-34.58416, -58.42827],
  "sacro": [-34.57902, -58.43939],
  "donnet": [-34.58825, -58.45086],
  "mercat-villa-crespo": [-34.59369, -58.4402],
  "mercado-de-belgrano": [-34.56262, -58.45828],
  "strange-brewing": [-34.57967, -58.45119],
  "trade-sky-bar": [-34.60328, -58.37054],
  "salon-1923": [-34.60966, -58.38573]
};
