import kitchens from "../assets/images/projects.jpg";
import bathrooms from "../assets/images/services/bathrooms.jpg";
import stairs from "../assets/images/services/stairs.jpg";
import memorials from "../assets/images/services/memorials.webp";
import custom from "../assets/images/services/custom.webp";

export const services = [
  {
    slug: "kitchens",
    eyebrow: "ENCIMERAS",
    title: "Cocinas diseñadas para durar.",
    description:
      "Fabricamos encimeras completamente a medida en mármol, granito, porcelánico y cuarzo, adaptándonos al diseño y necesidades de cada proyecto.",
    image: kitchens,
  },
  {
    slug: "bathrooms",
    eyebrow: "BAÑOS",
    title: "Espacios donde diseño y funcionalidad se encuentran.",
    description:
      "Lavabos, platos de ducha, revestimientos y soluciones personalizadas con materiales resistentes a la humedad y al uso diario.",
    image: bathrooms,
  },
  {
    slug: "stairs",
    eyebrow: "ESCALERAS Y REVESTIMIENTOS",
    title: "Piedra natural para espacios con carácter.",
    description:
      "Realizamos escaleras, fachadas, suelos y revestimientos que combinan estética, precisión y durabilidad.",
    image: stairs,
  },
  {
    slug: "memorials",
    eyebrow: "ARTE FUNERARIO",
    title: "Trabajos realizados con respeto y precisión.",
    description:
      "Diseñamos y fabricamos lápidas, panteones y elementos funerarios personalizados con acabados de alta calidad.",
    image: memorials,
  },
  {
    slug: "custom",
    eyebrow: "PROYECTOS ESPECIALES",
    title: "Cada proyecto es único.",
    description:
      "Desarrollamos piezas totalmente personalizadas para viviendas, comercios y proyectos de arquitectura e interiorismo.",
    image: custom,
  },
];