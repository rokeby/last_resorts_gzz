// Site translations (English / Spanish / Valencian).
// English is read from the DOM on load, so only es + va are stored here.
// The project name "Cloud Gardens" / "Cloud Garden" and personal names are
// kept untranslated. Values may contain inline HTML (links, <strong>).

const LINK = (href, text) =>
  `<a class="inline-link" href="${href}" target="_blank" rel="noopener">${text}</a>`;

const BC3 = 'https://www.bc3research.org/en/';
const MESO =
  'https://journals.ametsoc.org/view/journals/clim/18/5/jcli-3283.1.xml';
const ORG = 'https://tba21.org/organismoanouno';
const TBA = 'https://tba21.org/';
const THY = 'https://www.museothyssen.org/';

const translations = {
  es: {
    heroSubtitle: `Un protocolo para cultivar nubes en la cuenca del Mediterráneo occidental, iniciado por Last Resorts en ${LINK(ORG, 'Organismo')}, ${LINK(TBA, 'TBA-21')}, el ${LINK(THY, 'Museo Nacional Thyssen-Bornemisza')} y el Centro Vasco para el Cambio Climático (BC3)`,
    essayLead: `<strong>Cloud Gardens</strong> es una propuesta de geoingeniería de base para mantener el ciclo del agua entre la tierra y la atmósfera en la <strong>cuenca del Mediterráneo occidental</strong> mediante la planificación del uso del suelo y la formación de nubes a través de la evapotranspiración. Tomando el valle del <strong>Río Palancia</strong>, en el norte de Valencia, como emplazamiento piloto, el proyecto reúne <strong>diálogo comunitario, planificación de escenarios, modelización científica y una herramienta narrativa basada en un motor de videojuego</strong>. Estos componentes establecen el Cloud Garden como <strong>un espacio público y a la vez un protocolo</strong> para cultivar, custodiar y reimaginar la relación colectiva entre <strong>la tierra, el agua y la atmósfera</strong>.`,
    locationTitle: 'Ubicación',
    capTrueTitle: 'Satélite en color real',
    capTrueDesc:
      'Observaciones anuales del Landsat sin nubes de la cuenca del Palancia y la Marjal dels Moros (1984–2026)',
    capHydroTitle: 'Mapa hidrológico por satélite',
    capHydroDesc:
      'Dinámica anual del agua superficial y los humedales (NDWI) en la cuenca del Palancia y la Marjal dels Moros (1984–2026)',
    gifCredit: 'Imágenes: Google Earth',
    proposalTitle: 'Propuesta',
    s01Label: '01 Contexto hidrológico',
    s01Body: `En la costa del Mediterráneo occidental se encuentran las históricas tierras arroceras de Valencia, situadas entre las estribaciones de El Toro y los humedales que abrazan el litoral. Antaño caracterizados por un cultivo cuidadoso y unas prácticas heredadas de gestión del agua, los humedales naturales del pasado fueron drenados sistemáticamente y sustituidos por campos de cítricos. Como en muchas regiones de Europa durante los siglos XIX y XX, los humedales se veían tanto como focos de enfermedad como oportunidad de reinvención económica. Las alteraciones a gran escala del uso del suelo pueden tener consecuencias drásticas en la dinámica atmosférica. Valencia ha convivido durante mucho tiempo con el legado de las inundaciones, evidente en los valles fluviales sin agua que dan forma a la infraestructura cotidiana. El seguimiento atmosférico a largo plazo ha confirmado que la combinación del cambio climático y el cambio en el uso del suelo está haciendo que las inundaciones sean más intensas y frecuentes. La conversión de la vegetación natural en cultivos industriales reduce la humedad y aumenta el calor. Lo que antes era un ciclo predecible de lluvias estivales ha sucumbido a un sistema atrapado en un estado de movimiento del mar a la tierra, con condiciones demasiado secas y cálidas para mantener la humedad en sus valles. A lo largo de toda una temporada estival, el aire marino es empujado demasiado alto en la atmósfera, y su acumulación conduce a la formación de nubes catastróficas causantes de inundaciones, a veces de kilómetros de altura. En nuestro Antropoceno estas realidades son demasiado comunes, construidas a partir de nuestras tierras manufacturadas, homogéneas y privadas de agua, que pueden alterar la dinámica hidrológica de grandes regiones y producir regímenes climáticos casi irreversibles e indeseables. ¿Es posible estabilizar el sistema atmosférico transformando de nuevo nuestras tierras?`,
    s02Label: '02 Problema',
    s02Body: `Nuestro prototipo se sitúa a lo largo de todo el valle del río Palancia, entretejiendo paisajes a menudo vistos como separados, y sigue el curso del río desde las montañas de las estribaciones en torno a El Toro, a través del valle, hasta su encuentro con el mar en el puerto de Sagunto. Históricamente, este sistema hidrológico se ha reconfigurado en repetidas ocasiones. Lo que parece una variación natural del terreno alude a momentos en que el agua se frena mediante terrazas, se redirige a través de acequias y se extrae de acuíferos. Al leer estas intervenciones de forma simultánea, empezamos a registrar el río como un sistema geoingenierizado ampliado. El valle se convierte en un lugar de intercambio entre la superficie, la extracción subterránea y la atmósfera. Nuestros socios científicos del ${LINK(BC3, 'Centro Vasco para el Cambio Climático')} han establecido ${LINK(MESO, 'un modelo a mesoescala de los flujos atmosféricos')} del Mediterráneo occidental, que ha demostrado que la pérdida de vegetación y la disminución de la evapotranspiración han provocado el desacoplamiento gradual entre los ciclos del agua terrestre y atmosférica. La respuesta a este problema es a la vez sencilla y profundamente compleja. ¿Cómo podemos desarrollar formas económicamente viables y sostenibles de custodiar la tierra y mantener el ciclo del agua a través de la evapotranspiración? ¿Cómo podemos negociar un consenso en torno a la estabilidad atmosférica como bien común, a través de complejos horizontes de partes interesadas e intergeneracionales? ¿Qué podemos aprender mirando al pasado y a través de la práctica colectiva de reimaginar futuras configuraciones de agua y tierra que restablezcan el acoplamiento de nuestros ciclos del agua?`,
    s03Label: '03 El Cloud Garden',
    s03Body: `El Cloud Garden es nuestro prototipo para abordar estas cuestiones. Como proceso de esculpir colectivamente las nubes a través de cómo trabajamos la tierra, esta intervención infraestructural combina herramientas sociales, materiales y computacionales. Desde los jardines zen hasta la botánica colonial, del land art a la reforestación a escala continental, los jardines y la jardinería han servido durante mucho tiempo como interfaces experimentales para la especulación ambiental, científica y filosófica. En este contexto, el Cloud Garden funciona como una intervención hidrológica impulsada por la narrativa: un jardín especulativo diseñado para escenificar las relaciones entre la tierra, el agua y la atmósfera como algo que puede observarse, imaginarse y trabajarse colectivamente. Dentro de nuestro prototipo de geoingeniería de base, esperamos alinear las visiones entre la comprensión científica de los escenarios atmosféricos regionales y las perspectivas de la comunidad. A través de la experimentación física y la simulación digital, el proyecto propone gestos situados que podrían contribuir a reconectar no solo el uso del suelo y los ciclos hidrológicos, sino también a las partes interesadas y la gobernanza multinivel. La intención es fomentar formas transescalares de resiliencia, destacando cómo las respuestas a la inestabilidad climática emergen a diversas escalas en el Valle del Palancia, desde la selección de semillas del agricultor, pasando por las estrategias de planificación urbana aprobadas por la Generalitat Valenciana, hasta las tierras de propiedad y gestión comunitaria de los activistas de Agró.`,
    s04Label: '04 Metodología',
    s04Body: `Nuestra metodología opera a través de tres fases interconectadas. Primero, un espacio de encuentro. Trabajando con BC3 y su consolidada red de partes interesadas, planeamos facilitar un espacio de diálogo y negociación, explorando las perspectivas locales en torno a la alimentación, el cultivo de la tierra y la gobernanza para fomentar la confianza y el entendimiento mutuo. Segundo, una simulación digital del paisaje, en la que se pueden hacer accesibles historias, escenarios y especulaciones desarrollados mediante una coproducción iterativa. Tercero, un jardín físico, para cultivar vegetación local y de larga duración que restaure y favorezca las históricas lluvias estivales de la región. El Cloud Garden funcionaría como una obra de land art, un espacio comunitario diseñado para investigar y promover técnicas sobre cómo la tierra esculpe el cielo dentro de los imaginarios futuros. A través del conocimiento compartido, la investigación científica y la negociación, la ambición del cloud garden es establecer un protocolo de plantación distribuido. Este marco replicable, arraigado en la ciencia atmosférica y la gestión ambiental, orienta la selección del emplazamiento, los participantes y el diseño del jardín.`,
    s05Label: '05 El nido del águila',
    s05Body: `Para hacer de interfaz entre lo físico y lo digital, parte de nuestra metodología incluye la traducción de dibujos de campo bidimensionales en objetos escultóricos digitales tridimensionales. En este espacio digital, poblamos el terreno con sonidos e imágenes, creando una plataforma para explorar y compartir futuros colectivos desde las perspectivas de la comunidad y la industria. Erik, voluntario en La Marjal d’Almenara, compartió con nosotros sus métodos para adaptarse a los retos de la pérdida de biodiversidad, dibujando un esquema de un nido de águila marina que ayudó a construir en la marjal.`,
    s06Label: '06 La encina y la trufa, un ciclo positivo existente',
    s06Body: `En las estribaciones del Valle del Palancia, María José, de BC3, nos presentó iniciativas socioecológicas existentes construidas en torno a las trufas y las encinas, mostrando cómo la agricultura se ha adaptado en respuesta al cambio climático y de los suministros globales. Desde los campos de cítricos hasta las trufas que crecen entre el micelio en las raíces de las encinas, emerge un modo sostenible de custodia de la tierra. Los dibujos y las grabaciones de audio funcionan como artefactos digitales que se adaptan e iteran continuamente, ampliando una comprensión común del lugar.`,
    s07Label: '07 El Cloud Garden como protocolo',
    s07Body: `Concretamente, aspiramos a un proyecto piloto de 9 a 12 meses en el que sentar las bases de la investigación de campo, el diálogo y los encuentros comunitarios, y la investigación científica y económica. Desarrollaríamos las herramientas sociales y analíticas para cada paso de su implementación, desde el archivo de narrativas atmosféricas en el jardín digital, hasta la construcción de escenarios de partes interesadas explorables visualmente, la evaluación de las perspectivas económicas y la identificación de emplazamientos estratégicos donde poder probar las intervenciones. Los encuentros orientarán las decisiones relativas a la selección del emplazamiento, las estrategias de plantación y el diseño prospectivo del paisaje, explorando cómo las intervenciones a pequeña escala podrían contribuir a restaurar los procesos de retención de agua dentro del territorio. Simultáneamente, el proyecto busca formar un equipo local capaz de sostener la iniciativa, de modo que, con el tiempo, el papel de las instituciones impulsoras disminuya progresivamente y el jardín se convierta en un espacio de gestión local, una cuestión tanto de cultura como de economía. Más allá del piloto del Palancia, las herramientas y metodologías podrían evolucionar hacia protocolos adaptables a otros humedales españoles y territorios hidrológicamente frágiles, así como al conjunto de la región mediterránea. A medida que surjan nuevos emplazamientos, una red de Cloud Gardens podría funcionar como un observatorio distribuido y un archivo ecológico, documentando el cambio ambiental, el conocimiento comunitario y las prácticas de adaptación situadas.`,
    teamTitle: 'Equipo',
    bioInes: `Inês Barros investiga la práctica artística como gesto ecológico, diseñando dispositivos especulativos que funcionan como prótesis ecosistémicas. Desarrolla herramientas y experimentos de campo que exploran imaginarios ecológicos más-que-humanos.`,
    bioHugo: `Hugo F. García es diseñador e investigador que trabaja en la intersección del diseño regenerativo, la innovación de materiales y las ecologías forestales. Su obra explora cómo los biomateriales pueden actuar como catalizadores de un cambio sistémico.`,
    bioJulian: `Julián Guerrero es un investigador y gestor de proyectos colombiano afincado en Madrid, cuya práctica explora el conocimiento como un proceso ecológico y relacional entre investigación, cultura y territorio.`,
    bioMahwish: `Mahwish Khalil es una arquitecta e investigadora pakistaní que actualmente enseña en la Escuela de Arquitectura de la Universidad de Syracuse. A través de la narración, el diseño y el análisis espacial, propone imaginarios alternativos para el entorno construido.`,
    bioSarina: `Sarina Lincoln es una investigadora que trabaja en gestión y gobernanza ambiental. Su investigación se centra en los sistemas socioecológicos marinos mediante una investigación e implicación participativas y orientadas a la acción.`,
    bioHarry: `El artista e investigador Harry Meadows dirige Critical Zone Observatory, un marco que explora la práctica artística, la sensorización ambiental y las colaboraciones entre artistas, diseñadores de videojuegos y ecólogos.`,
    bioLucia: `Lucia Rebolino es artista, arquitecta y diseñadora computacional que entreteje ciencia y arte en la contracartografía, los datos y las estéticas web, con un enfoque en las investigaciones sobre justicia ambiental.`,
    bioGary: `Gary Zhexi Zhang es un artista y escritor cuya obra explora las conexiones sistémicas entre la cosmología, la tecnología y la economía. Publica ampliamente sobre arte, tecnología, economía y China.`,
    interlocutorsTitle: 'Interlocutores',
    contactTitle: 'Contacto',
    contactBody: `Este es un proyecto en curso arraigado en la colaboración, el intercambio y la transdisciplinariedad. Si lo que proponemos resuena contigo o te conmueve, ponte en contacto con nosotros. Nos encantaría conocerte y escuchar tus ideas.`,
    footerFramework: 'Proyecto concebido en el marco de',
    footerCase: 'Como parte del caso',
    footerCaseSub: 'Cómo los imaginarios climáticos llegan a importar',
    footerWith: `en colaboración con el Centro Vasco para el Cambio Climático (BC3), con el apoyo adicional del Servicio Europeo de Acción Exterior`,
    roleLead: 'Artista principal',
    roleCoord: 'Coordinador de TBA-21',
    roleTeam: 'Equipo',
    footerLegal: `Los contenidos presentados en este sitio web son obra exclusiva de los investigadores de Organismo 2026. TBA21-Academy y el Museo Nacional Thyssen-Bornemisza no ejercen control editorial sobre estos contenidos y no se responsabilizan de las opiniones o representaciones expresadas en ellos. Los autores conservan sus derechos de autor, y las instituciones mencionadas respetan y utilizan sus obras de acuerdo con los términos acordados en el programa. Todas las creaciones desarrolladas en el marco del proyecto Organismo están bajo la licencia Creative Commons CC BY-SA 4.0.`
  },
  va: {
    heroSubtitle: `Un protocol per a cultivar núvols a la conca del Mediterrani occidental, iniciat per Last Resorts en ${LINK(ORG, 'Organismo')}, ${LINK(TBA, 'TBA-21')}, el ${LINK(THY, 'Museo Nacional Thyssen-Bornemisza')} i el Centre Basc per al Canvi Climàtic (BC3)`,
    essayLead: `<strong>Cloud Gardens</strong> és una proposta de geoenginyeria de base per a mantindre el cicle de l’aigua entre la terra i l’atmosfera a la <strong>conca del Mediterrani occidental</strong> mitjançant la planificació de l’ús del sòl i la formació de núvols a través de l’evapotranspiració. Prenent la vall del <strong>Riu Palància</strong>, al nord de València, com a emplaçament pilot, el projecte reunix <strong>diàleg comunitari, planificació d’escenaris, modelització científica i una ferramenta narrativa basada en un motor de videojoc</strong>. Estos components establixen el Cloud Garden com <strong>un espai públic i alhora un protocol</strong> per a cultivar, custodiar i reimaginar la relació col·lectiva entre <strong>la terra, l’aigua i l’atmosfera</strong>.`,
    locationTitle: 'Ubicació',
    capTrueTitle: 'Satèl·lit en color real',
    capTrueDesc:
      'Observacions anuals del Landsat sense núvols de la conca del Palància i la Marjal dels Moros (1984–2026)',
    capHydroTitle: 'Mapa hidrològic per satèl·lit',
    capHydroDesc:
      'Dinàmica anual de l’aigua superficial i les zones humides (NDWI) a la conca del Palància i la Marjal dels Moros (1984–2026)',
    gifCredit: 'Imatges: Google Earth',
    proposalTitle: 'Proposta',
    s01Label: '01 Context hidrològic',
    s01Body: `A la costa del Mediterrani occidental es troben les històriques terres arrosseres de València, situades entre les estribacions d’El Toro i les zones humides que abracen el litoral. Antany caracteritzats per un cultiu acurat i unes pràctiques heretades de gestió de l’aigua, les zones humides naturals del passat van ser drenades sistemàticament i substituïdes per camps de cítrics. Com en moltes regions d’Europa durant els segles XIX i XX, les zones humides es veien tant com a focus de malaltia com a oportunitat de reinvenció econòmica. Les alteracions a gran escala de l’ús del sòl poden tindre conseqüències dràstiques en la dinàmica atmosfèrica. València ha conviscut durant molt de temps amb el llegat de les inundacions, evident en les valls fluvials sense aigua que donen forma a la infraestructura quotidiana. El seguiment atmosfèric a llarg termini ha confirmat que la combinació del canvi climàtic i el canvi en l’ús del sòl està fent que les inundacions siguen més intenses i freqüents. La conversió de la vegetació natural en cultius industrials reduïx la humitat i augmenta la calor. El que abans era un cicle predictible de pluges estivals ha sucumbit a un sistema atrapat en un estat de moviment del mar a la terra, amb condicions massa seques i càlides per a mantindre la humitat a les seues valls. Al llarg de tota una temporada estival, l’aire marí és empés massa amunt en l’atmosfera, i la seua acumulació conduïx a la formació de núvols catastròfics causants d’inundacions, de vegades de quilòmetres d’altura. En el nostre Antropocé estes realitats són massa comunes, construïdes a partir de les nostres terres manufacturades, homogènies i privades d’aigua, que poden alterar la dinàmica hidrològica de grans regions i produir règims climàtics quasi irreversibles i indesitjables. És possible estabilitzar el sistema atmosfèric transformant novament les nostres terres?`,
    s02Label: '02 Problema',
    s02Body: `El nostre prototip se situa al llarg de tota la vall del riu Palància, entrellaçant paisatges sovint vistos com a separats, i seguix el curs del riu des de les muntanyes de les estribacions al voltant d’El Toro, a través de la vall, fins a la seua trobada amb el mar al port de Sagunt. Històricament, este sistema hidrològic s’ha reconfigurat en repetides ocasions. El que sembla una variació natural del terreny al·ludix a moments en què l’aigua es frena mitjançant terrasses, es redirigix a través de séquies i s’extrau d’aqüífers. En llegir estes intervencions de manera simultània, comencem a registrar el riu com un sistema geoenginyeritzat ampliat. La vall es convertix en un lloc d’intercanvi entre la superfície, l’extracció subterrània i l’atmosfera. Els nostres socis científics del ${LINK(BC3, 'Centre Basc per al Canvi Climàtic')} han establit ${LINK(MESO, 'un model a mesoescala dels fluxos atmosfèrics')} del Mediterrani occidental, que ha demostrat que la pèrdua de vegetació i la disminució de l’evapotranspiració han provocat el desacoblament gradual entre els cicles de l’aigua terrestre i atmosfèrica. La resposta a este problema és alhora senzilla i profundament complexa. Com podem desenvolupar formes econòmicament viables i sostenibles de custodiar la terra i mantindre el cicle de l’aigua a través de l’evapotranspiració? Com podem negociar un consens al voltant de l’estabilitat atmosfèrica com a bé comú, a través de complexos horitzons de parts interessades i intergeneracionals? Què podem aprendre mirant al passat i a través de la pràctica col·lectiva de reimaginar futures configuracions d’aigua i terra que restablisquen l’acoblament dels nostres cicles de l’aigua?`,
    s03Label: '03 El Cloud Garden',
    s03Body: `El Cloud Garden és el nostre prototip per a abordar estes qüestions. Com a procés d’esculpir col·lectivament els núvols a través de com treballem la terra, esta intervenció infraestructural combina ferramentes socials, materials i computacionals. Des dels jardins zen fins a la botànica colonial, del land art a la reforestació a escala continental, els jardins i la jardineria han servit durant molt de temps com a interfícies experimentals per a l’especulació ambiental, científica i filosòfica. En este context, el Cloud Garden funciona com una intervenció hidrològica impulsada per la narrativa: un jardí especulatiu dissenyat per a escenificar les relacions entre la terra, l’aigua i l’atmosfera com una cosa que es pot observar, imaginar i treballar col·lectivament. Dins del nostre prototip de geoenginyeria de base, esperem alinear les visions entre la comprensió científica dels escenaris atmosfèrics regionals i les perspectives de la comunitat. A través de l’experimentació física i la simulació digital, el projecte proposa gestos situats que podrien contribuir a reconnectar no sols l’ús del sòl i els cicles hidrològics, sinó també les parts interessades i la governança multinivell. La intenció és fomentar formes transescalars de resiliència, destacant com les respostes a la inestabilitat climàtica emergixen a diverses escales a la Vall del Palància, des de la selecció de llavors de l’agricultor, passant per les estratègies de planificació urbana aprovades per la Generalitat Valenciana, fins a les terres de propietat i gestió comunitària dels activistes d’Agró.`,
    s04Label: '04 Metodologia',
    s04Body: `La nostra metodologia opera a través de tres fases interconnectades. Primer, un espai de trobada. Treballant amb BC3 i la seua consolidada xarxa de parts interessades, tenim previst facilitar un espai de diàleg i negociació, explorant les perspectives locals al voltant de l’alimentació, el cultiu de la terra i la governança per a fomentar la confiança i l’enteniment mutu. Segon, una simulació digital del paisatge, en la qual es poden fer accessibles històries, escenaris i especulacions desenvolupats mitjançant una coproducció iterativa. Tercer, un jardí físic, per a cultivar vegetació local i de llarga duració que restaure i afavorisca les històriques pluges estivals de la regió. El Cloud Garden funcionaria com una obra de land art, un espai comunitari dissenyat per a investigar i promoure tècniques sobre com la terra esculpix el cel dins dels imaginaris futurs. A través del coneixement compartit, la investigació científica i la negociació, l’ambició del cloud garden és establir un protocol de plantació distribuït. Este marc replicable, arrelat en la ciència atmosfèrica i la gestió ambiental, orienta la selecció de l’emplaçament, els participants i el disseny del jardí.`,
    s05Label: '05 El niu de l’àguila',
    s05Body: `Per a fer d’interfície entre allò físic i allò digital, part de la nostra metodologia inclou la traducció de dibuixos de camp bidimensionals en objectes escultòrics digitals tridimensionals. En este espai digital, poblem el terreny amb sons i imatges, creant una plataforma per a explorar i compartir futurs col·lectius des de les perspectives de la comunitat i la indústria. Erik, voluntari a La Marjal d’Almenara, va compartir amb nosaltres els seus mètodes per a adaptar-se als reptes de la pèrdua de biodiversitat, dibuixant un esquema d’un niu d’àguila marina que va ajudar a construir a la marjal.`,
    s06Label: '06 L’alzina i la tòfona, un cicle positiu existent',
    s06Body: `A les estribacions de la Vall del Palància, María José, de BC3, ens va presentar iniciatives socioecològiques existents construïdes al voltant de les tòfones i les alzines, mostrant com l’agricultura s’ha adaptat en resposta al canvi climàtic i dels subministraments globals. Des dels camps de cítrics fins a les tòfones que creixen entre el miceli a les arrels de les alzines, emergix una manera sostenible de custòdia de la terra. Els dibuixos i els enregistraments d’àudio funcionen com a artefactes digitals que s’adapten i s’iteren contínuament, ampliant una comprensió comuna del lloc.`,
    s07Label: '07 El Cloud Garden com a protocol',
    s07Body: `Concretament, aspirem a un projecte pilot de 9 a 12 mesos en el qual assentar les bases de la investigació de camp, el diàleg i les trobades comunitàries, i la investigació científica i econòmica. Desenvoluparíem les ferramentes socials i analítiques per a cada pas de la seua implementació, des de l’arxiu de narratives atmosfèriques en el jardí digital, fins a la construcció d’escenaris de parts interessades explorables visualment, l’avaluació de les perspectives econòmiques i la identificació d’emplaçaments estratègics on poder provar les intervencions. Les trobades orientaran les decisions relatives a la selecció de l’emplaçament, les estratègies de plantació i el disseny prospectiu del paisatge, explorant com les intervencions a xicoteta escala podrien contribuir a restaurar els processos de retenció d’aigua dins del territori. Simultàniament, el projecte busca formar un equip local capaç de sostindre la iniciativa, de manera que, amb el temps, el paper de les institucions impulsores disminuïsca progressivament i el jardí es convertisca en un espai de gestió local, una qüestió tant de cultura com d’economia. Més enllà del pilot del Palància, les ferramentes i metodologies podrien evolucionar cap a protocols adaptables a altres zones humides espanyoles i territoris hidrològicament fràgils, així com al conjunt de la regió mediterrània. A mesura que sorgisquen nous emplaçaments, una xarxa de Cloud Gardens podria funcionar com un observatori distribuït i un arxiu ecològic, documentant el canvi ambiental, el coneixement comunitari i les pràctiques d’adaptació situades.`,
    teamTitle: 'Equip',
    bioInes: `Inês Barros investiga la pràctica artística com a gest ecològic, dissenyant dispositius especulatius que funcionen com a pròtesis ecosistèmiques. Desenvolupa ferramentes i experiments de camp que exploren imaginaris ecològics més-que-humans.`,
    bioHugo: `Hugo F. García és dissenyador i investigador que treballa en la intersecció del disseny regeneratiu, la innovació de materials i les ecologies forestals. La seua obra explora com els biomaterials poden actuar com a catalitzadors d’un canvi sistèmic.`,
    bioJulian: `Julián Guerrero és un investigador i gestor de projectes colombià establit a Madrid, la pràctica del qual explora el coneixement com un procés ecològic i relacional entre investigació, cultura i territori.`,
    bioMahwish: `Mahwish Khalil és una arquitecta i investigadora pakistanesa que actualment ensenya a l’Escola d’Arquitectura de la Universitat de Syracuse. A través de la narració, el disseny i l’anàlisi espacial, proposa imaginaris alternatius per a l’entorn construït.`,
    bioSarina: `Sarina Lincoln és una investigadora que treballa en gestió i governança ambiental. La seua investigació se centra en els sistemes socioecològics marins mitjançant una investigació i implicació participatives i orientades a l’acció.`,
    bioHarry: `L’artista i investigador Harry Meadows dirigix Critical Zone Observatory, un marc que explora la pràctica artística, la sensorització ambiental i les col·laboracions entre artistes, dissenyadors de videojocs i ecòlegs.`,
    bioLucia: `Lucia Rebolino és artista, arquitecta i dissenyadora computacional que entrellaça ciència i art en la contracartografia, les dades i les estètiques web, amb un enfocament en les investigacions sobre justícia ambiental.`,
    bioGary: `Gary Zhexi Zhang és un artista i escriptor l’obra del qual explora les connexions sistèmiques entre la cosmologia, la tecnologia i l’economia. Publica àmpliament sobre art, tecnologia, economia i la Xina.`,
    interlocutorsTitle: 'Interlocutors',
    contactTitle: 'Contacte',
    contactBody: `Este és un projecte en curs arrelat en la col·laboració, l’intercanvi i la transdisciplinarietat. Si el que proposem ressona amb tu o et commou, posa’t en contacte amb nosaltres. Ens encantaria conéixer-te i escoltar les teues idees.`,
    footerFramework: 'Projecte concebut en el marc de',
    footerCase: 'Com a part del cas',
    footerCaseSub: 'Com els imaginaris climàtics arriben a importar',
    footerWith: `en col·laboració amb el Centre Basc per al Canvi Climàtic (BC3), amb el suport addicional del Servici Europeu d’Acció Exterior`,
    roleLead: 'Artista principal',
    roleCoord: 'Coordinador de TBA-21',
    roleTeam: 'Equip',
    footerLegal: `Els continguts presentats en este lloc web són obra exclusiva dels investigadors d’Organismo 2026. TBA21-Academy i el Museo Nacional Thyssen-Bornemisza no exercixen control editorial sobre estos continguts i no es responsabilitzen de les opinions o representacions expressades en ells. Els autors conserven els seus drets d’autor, i les institucions mencionades respecten i utilitzen les seues obres d’acord amb els termes acordats en el programa. Totes les creacions desenvolupades en el marc del projecte Organismo estan sota la llicència Creative Commons CC BY-SA 4.0.`
  }
};

const STORAGE_KEY = 'cloud-gardens-lang';
const HTML_LANG = { en: 'en', es: 'es', va: 'ca-ES-valencia' };

const nodes = Array.from(document.querySelectorAll('[data-i18n]'));
// Capture the English baseline (may contain inline HTML) once.
const english = new Map();
nodes.forEach(node => english.set(node, node.innerHTML));

const buttons = Array.from(document.querySelectorAll('.lang-btn'));

function applyLanguage(lang) {
  const dict = translations[lang];
  nodes.forEach(node => {
    const key = node.dataset.i18n;
    if (lang === 'en' || !dict || dict[key] == null) {
      node.innerHTML = english.get(node);
    } else {
      node.innerHTML = dict[key];
    }
  });

  document.documentElement.lang = HTML_LANG[lang] || 'en';
  buttons.forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    /* ignore storage failures (private mode) */
  }
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

let initial = 'en';
try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && (saved === 'en' || translations[saved])) initial = saved;
} catch (e) {
  /* ignore */
}
applyLanguage(initial);
