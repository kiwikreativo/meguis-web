import type { ImageMetadata } from "astro";
import logisticsImage from "../assets/meguis-logistics-integral.webp";
import transportImage from "../assets/meguis-transporte-terrestre.webp";
import legalImage from "../assets/meguis-legado-puerto-cortes.webp";

export type ServiceIcon = "ship" | "truck" | "scale";

export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceDefinition {
  slug: string;
  number: string;
  icon: ServiceIcon;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  image: ImageMetadata;
  imageAlt: string;
  imagePosition?: string;
  overviewTitle: string;
  overview: string[];
  capabilities: ServiceCapability[];
  benefits: ServiceBenefit[];
}

export const services: ServiceDefinition[] = [
  {
    slug: "logistica-integral",
    number: "01",
    icon: "ship",
    title: "Logística integral para importadores",
    shortTitle: "Logística integral",
    description: "Gestión aduanera, transporte terrestre y nacionalización desde Puerto Cortés hasta el destino final.",
    metaDescription: "Coordinación de logística integral, gestión aduanera y transporte terrestre desde Puerto Cortés hacia destinos en Honduras.",
    image: logisticsImage,
    imageAlt: "Buque, grúas y transporte de carga coordinados en una operación logística integral.",
    imagePosition: "center 42%",
    overviewTitle: "Una operación conectada desde el puerto hasta el destino.",
    overview: [
      "Coordinamos las distintas etapas necesarias para movilizar carga importada desde su llegada a Puerto Cortés, pasando por el proceso aduanero y continuando hacia su destino final.",
      "Nuestro acompañamiento integra comunicación, documentación y transporte para que usted tenga una visión clara del avance de la operación.",
    ],
    capabilities: [
      { title: "Coordinación logística", description: "Planificación y seguimiento de las diferentes etapas del proceso de importación." },
      { title: "Gestión aduanera", description: "Apoyo en los procedimientos necesarios para el ingreso y nacionalización de mercancías." },
      { title: "Transporte terrestre", description: "Coordinación del traslado de la carga desde Puerto Cortés hacia su destino." },
      { title: "Seguimiento del proceso", description: "Comunicación y coordinación durante las diferentes etapas de la operación." },
    ],
    benefits: [
      { title: "Coordinación", description: "Centralizamos la comunicación necesaria para facilitar cada etapa del proceso." },
      { title: "Acompañamiento", description: "Le orientamos durante los diferentes pasos de la operación." },
      { title: "Experiencia local", description: "Trabajamos con procesos de importación y transporte dentro de Honduras." },
    ],
  },
  {
    slug: "transporte-terrestre",
    number: "02",
    icon: "truck",
    title: "Transporte terrestre de carga",
    shortTitle: "Transporte terrestre",
    description: "Coordinación de rutas desde Puerto Cortés hacia Tegucigalpa y otros destinos nacionales.",
    metaDescription: "Coordinación de transporte terrestre de carga desde Puerto Cortés hacia Tegucigalpa y otros destinos de Honduras.",
    image: transportImage,
    imageAlt: "Camión de carga en una ruta costera de Honduras con infraestructura portuaria al fondo.",
    imagePosition: "center",
    overviewTitle: "La carga continúa su ruta con coordinación clara.",
    overview: [
      "Coordinamos el transporte terrestre de carga desde Puerto Cortés hacia Tegucigalpa y otros destinos nacionales, según las necesidades de cada operación.",
      "Mantenemos una comunicación clara durante las etapas del traslado para facilitar la coordinación entre el punto de origen y el destino de la mercancía.",
    ],
    capabilities: [
      { title: "Coordinación de rutas", description: "Planificación del traslado de acuerdo con el origen y destino de la mercancía." },
      { title: "Carga desde Puerto Cortés", description: "Coordinación del movimiento de mercancías desde uno de los principales puntos de ingreso del país." },
      { title: "Destinos nacionales", description: "Traslado hacia Tegucigalpa y otros destinos dentro de Honduras según las necesidades de la operación." },
      { title: "Seguimiento logístico", description: "Coordinación y comunicación durante el proceso de transporte." },
    ],
    benefits: [
      { title: "Planificación", description: "Organizamos la ruta de acuerdo con el origen, el destino y la operación." },
      { title: "Comunicación", description: "Mantenemos claridad sobre las etapas del traslado de la carga." },
      { title: "Alcance nacional", description: "Coordinamos rutas hacia Tegucigalpa y otros destinos en Honduras." },
    ],
  },
  {
    slug: "asesoria-legal-aduanera",
    number: "03",
    icon: "scale",
    title: "Asesoría legal aduanera",
    shortTitle: "Asesoría aduanera",
    description: "Orientación especializada para importar mercancías y cumplir los trámites aduaneros en Honduras.",
    metaDescription: "Orientación sobre procesos, documentación y trámites aduaneros para importar y nacionalizar mercancías en Honduras.",
    image: legalImage,
    imageAlt: "Documentación de importación junto a una escena de actividad portuaria en Puerto Cortés.",
    imagePosition: "center 45%",
    overviewTitle: "Orientación para comprender cada trámite aduanero.",
    overview: [
      "Brindamos orientación especializada para facilitar los procesos relacionados con la importación de mercancías y los trámites aduaneros correspondientes en Honduras.",
      "Acompañamos la revisión de los pasos y la documentación necesaria para que usted comprenda el proceso de nacionalización de su carga.",
    ],
    capabilities: [
      { title: "Orientación aduanera", description: "Acompañamiento para comprender los procedimientos relacionados con la importación." },
      { title: "Revisión de procesos", description: "Orientación sobre los pasos y la documentación requeridos durante los trámites aduaneros." },
      { title: "Nacionalización", description: "Apoyo durante el proceso necesario para el ingreso legal de mercancías al país." },
      { title: "Acompañamiento", description: "Comunicación y orientación durante las diferentes etapas del proceso." },
    ],
    benefits: [
      { title: "Claridad", description: "Explicamos los pasos del proceso aduanero con un lenguaje comprensible." },
      { title: "Orientación", description: "Le acompañamos en la revisión de requisitos y documentación." },
      { title: "Contexto local", description: "Nuestro enfoque responde a operaciones de importación en Honduras." },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((service) => service.slug === slug);
