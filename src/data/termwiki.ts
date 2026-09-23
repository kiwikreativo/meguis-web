export interface TermEntry {
  slug: string;
  term: string;
  summary: string;
  definition: string;
  context: string[];
  useCases: string[];
  related: string[];
  serviceHref: string;
  serviceLabel: string;
  reviewed: string;
}

export const terms: TermEntry[] = [
  {
    slug: "agente-aduanero",
    term: "Agente aduanero",
    summary: "Qué es un agente aduanero y qué función cumple durante una importación en Honduras.",
    definition: "Un agente aduanero es el profesional autorizado que interviene en la gestión de operaciones aduaneras y representa al importador ante la autoridad correspondiente dentro del alcance permitido por la normativa aplicable.",
    context: [
      "En una importación, su intervención ayuda a ordenar la información comercial y de transporte que respalda la declaración de la mercancía. También facilita la comunicación entre el importador y los participantes del proceso aduanero.",
      "La documentación y los pasos concretos dependen del tipo de mercancía, su origen, el régimen aplicable y las disposiciones vigentes. Por eso, una revisión específica de cada operación es más útil que una lista genérica de requisitos.",
    ],
    useCases: ["Cuando una carga llega a Puerto Cortés.", "Cuando el importador necesita preparar o revisar la gestión aduanera.", "Cuando existen dudas sobre la nacionalización de mercancías."],
    related: ["agencia-aduanera", "despacho-aduanero", "nacionalizacion-de-mercancias"],
    serviceHref: "/agencia-aduanera-puerto-cortes/",
    serviceLabel: "Conocer nuestra agencia aduanera",
    reviewed: "18 de septiembre de 2026",
  },
  {
    slug: "agencia-aduanera",
    term: "Agencia aduanera",
    summary: "Qué hace una agencia aduanera y cómo apoya el movimiento de mercancías importadas.",
    definition: "Una agencia aduanera coordina servicios relacionados con la gestión y el despacho de mercancías ante aduanas, apoyando al importador en la preparación, revisión y seguimiento de su operación.",
    context: [
      "Su trabajo se conecta con documentos comerciales, información de transporte, clasificación de la mercancía y otras gestiones que pueden variar según la operación. Una agencia también puede coordinarse con transportistas y otros participantes para dar continuidad a la carga después del despacho.",
      "En Puerto Cortés, esta coordinación es especialmente relevante para cargas que ingresan por vía marítima y luego deben continuar hacia otros destinos de Honduras.",
    ],
    useCases: ["Antes de embarcar mercancía hacia Honduras.", "Al preparar el despacho de una carga.", "Cuando se necesita coordinar aduanas y transporte terrestre."],
    related: ["agente-aduanero", "desaduanaje", "documentacion-aduanera"],
    serviceHref: "/agencia-aduanera-puerto-cortes/",
    serviceLabel: "Ver atención aduanera en Puerto Cortés",
    reviewed: "18 de septiembre de 2026",
  },
  {
    slug: "despacho-aduanero",
    term: "Despacho aduanero",
    summary: "Definición práctica del despacho aduanero y su lugar dentro del proceso de importación.",
    definition: "El despacho aduanero es el conjunto de gestiones mediante las cuales una mercancía se presenta y procesa ante la autoridad aduanera para asignarle el tratamiento que corresponda y permitir que continúe su recorrido.",
    context: [
      "El proceso parte de información coherente sobre la mercancía, su valor, origen, transporte y documentos de soporte. Las revisiones o actuaciones aplicables pueden cambiar de una operación a otra.",
      "Completar el despacho no equivale por sí solo a entregar la carga en su destino final. Después puede ser necesario coordinar retiro, transporte terrestre y recepción.",
    ],
    useCases: ["Cuando la mercancía ya se encuentra próxima a arribar.", "Cuando se necesita organizar documentos de soporte.", "Cuando la carga debe continuar desde Puerto Cortés."],
    related: ["desaduanaje", "tramite-aduanero", "documentacion-aduanera"],
    serviceHref: "/despacho-aduanero/",
    serviceLabel: "Conocer el servicio de despacho aduanero",
    reviewed: "18 de septiembre de 2026",
  },
  {
    slug: "desaduanaje",
    term: "Desaduanaje",
    summary: "Qué significa desaduanaje y cómo se relaciona con la liberación de una carga.",
    definition: "Desaduanaje es una forma común de referirse al proceso necesario para que una mercancía cumpla las gestiones aduaneras aplicables y pueda ser retirada o continuar hacia su destino.",
    context: [
      "En el uso cotidiano, el término suele abarcar revisión documental, declaración y seguimiento del proceso. Su alcance exacto puede variar según la mercancía y la operación.",
      "Una planificación temprana permite identificar información faltante antes del arribo. No obstante, ningún plazo debe asumirse sin revisar las condiciones reales de la carga y las actuaciones que correspondan.",
    ],
    useCases: ["Al estimar las etapas de una importación.", "Cuando se consulta si una carga ya puede retirarse.", "Al coordinar la salida del puerto y el transporte nacional."],
    related: ["despacho-aduanero", "nacionalizacion-de-mercancias", "agencia-aduanera"],
    serviceHref: "/despacho-aduanero/",
    serviceLabel: "Solicitar apoyo con un despacho",
    reviewed: "18 de septiembre de 2026",
  },
  {
    slug: "nacionalizacion-de-mercancias",
    term: "Nacionalización de mercancías",
    summary: "Qué implica nacionalizar una mercancía importada para su ingreso a Honduras.",
    definition: "La nacionalización de mercancías es el proceso por el cual una carga importada cumple las formalidades aplicables para ingresar al país bajo el régimen que corresponda.",
    context: [
      "La nacionalización requiere que la información declarada coincida con los documentos y características de la operación. Los requisitos no son iguales para todos los productos y pueden involucrar controles de distintas autoridades.",
      "Por esa variación, conviene revisar cada caso antes del embarque y confirmar la documentación vigente con las entidades competentes o con asesoría especializada.",
    ],
    useCases: ["Cuando se importan mercancías para uso o comercialización en Honduras.", "Al revisar requisitos antes de embarcar.", "Cuando se coordina el ingreso y posterior entrega de la carga."],
    related: ["despacho-aduanero", "documentacion-aduanera", "tramite-aduanero"],
    serviceHref: "/orientacion-aduanera/",
    serviceLabel: "Recibir orientación aduanera",
    reviewed: "18 de septiembre de 2026",
  },
  {
    slug: "tramite-aduanero",
    term: "Trámite aduanero",
    summary: "Qué comprende un trámite aduanero dentro de una operación de importación.",
    definition: "Un trámite aduanero es una gestión formal vinculada con la entrada, salida o tratamiento de mercancías bajo control de la autoridad aduanera.",
    context: [
      "Puede comprender la presentación de información, documentos y declaraciones, además de atender verificaciones que correspondan a la operación. No existe una lista única válida para toda mercancía.",
      "Identificar el trámite adecuado exige conocer el producto, el origen, el medio de transporte, el propósito de la importación y el régimen aplicable.",
    ],
    useCases: ["Al preparar una importación nueva.", "Cuando cambia el tipo de mercancía importada.", "Al verificar qué información debe reunirse antes del arribo."],
    related: ["documentacion-aduanera", "agente-aduanero", "despacho-aduanero"],
    serviceHref: "/orientacion-aduanera/",
    serviceLabel: "Consultar sobre trámites aduaneros",
    reviewed: "18 de septiembre de 2026",
  },
  {
    slug: "documentacion-aduanera",
    term: "Documentación aduanera",
    summary: "Por qué la documentación aduanera es clave para procesar una importación.",
    definition: "La documentación aduanera reúne los comprobantes y datos que respaldan una operación de comercio exterior ante la autoridad correspondiente.",
    context: [
      "Los documentos concretos dependen de la mercancía, su procedencia, el transporte y los controles aplicables. La coherencia entre descripciones, cantidades, valores y participantes ayuda a evitar aclaraciones innecesarias.",
      "Como las exigencias pueden cambiar, cualquier lista documental debe verificarse para la operación y la fecha específicas antes de utilizarse como instrucción.",
    ],
    useCases: ["Antes de autorizar un embarque.", "Al preparar la declaración de mercancías.", "Cuando se detectan diferencias entre documentos comerciales y de transporte."],
    related: ["tramite-aduanero", "despacho-aduanero", "nacionalizacion-de-mercancias"],
    serviceHref: "/orientacion-aduanera/",
    serviceLabel: "Solicitar revisión y orientación",
    reviewed: "18 de septiembre de 2026",
  },
  {
    slug: "logistica-integral",
    term: "Logística integral",
    summary: "Cómo conecta la logística integral las etapas de una importación hasta su destino.",
    definition: "La logística integral coordina de manera conectada las actividades, participantes e información necesarios para mover una carga desde su origen hasta el destino previsto.",
    context: [
      "En una importación puede enlazar transporte, llegada al puerto, gestión aduanera, retiro y traslado terrestre. El valor está en coordinar las dependencias entre etapas, no simplemente en sumar proveedores.",
      "Una visión integral facilita el seguimiento y ayuda a que cada participante reciba la información necesaria en el momento adecuado.",
    ],
    useCases: ["Cuando una operación involucra puerto, aduanas y transporte.", "Cuando el importador busca centralizar la coordinación.", "Al planificar el recorrido completo de una carga."],
    related: ["despacho-aduanero", "transporte-terrestre-de-carga", "agencia-aduanera"],
    serviceHref: "/logistica-integral/",
    serviceLabel: "Conocer la logística integral de MEGUIS",
    reviewed: "18 de septiembre de 2026",
  },
  {
    slug: "transporte-terrestre-de-carga",
    term: "Transporte terrestre de carga",
    summary: "Qué comprende el traslado terrestre de mercancías después de su ingreso al país.",
    definition: "El transporte terrestre de carga es el traslado de mercancías por carretera entre puntos de origen, conexión y destino mediante vehículos adecuados para la operación.",
    context: [
      "Dentro de una importación, suele conectarse con la disponibilidad de la carga después de las gestiones portuarias y aduaneras. La coordinación considera el punto de retiro, el destino, las características de la carga y las condiciones operativas.",
      "El alcance, la ruta y los tiempos deben definirse para cada movimiento. Una comunicación clara entre las partes permite preparar la recepción y dar seguimiento al traslado.",
    ],
    useCases: ["Cuando una carga debe salir de Puerto Cortés.", "Al coordinar entregas hacia Tegucigalpa u otros destinos nacionales.", "Cuando el transporte forma parte de una operación logística integral."],
    related: ["logistica-integral", "despacho-aduanero", "agencia-aduanera"],
    serviceHref: "/transporte-terrestre/",
    serviceLabel: "Conocer el transporte terrestre de MEGUIS",
    reviewed: "18 de septiembre de 2026",
  },
];

export const getTermBySlug = (slug: string) => terms.find((entry) => entry.slug === slug);
