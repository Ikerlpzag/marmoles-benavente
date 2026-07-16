import { Link } from "react-router-dom";
import Section from "../ui/Section";

const items = [
  {
    title: "Materiales",
    description: "Mármol, granito, cuarzo y porcelánico.",
    image: "/images/materials.jpg",
    link: "/materials",
  },
  {
    title: "Servicios",
    description: "Soluciones para todo tipo de proyectos.",
    image: "/images/services.jpg",
    link: "/services",
  },
  {
    title: "Proyectos",
    description: "Descubre algunos de nuestros trabajos.",
    image: "/images/projects.jpg",
    link: "/projects",
  },
  {
    title: "Sobre nosotros",
    description: "Conoce nuestra historia y experiencia.",
    image: "/images/about.jpg",
    link: "/about",
  },
];

export default function NavigationGrid() {
  return (
    <Section className="pt-0">
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.link}
            className="group relative h-[500px] overflow-hidden rounded-3xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/35 transition group-hover:bg-black/45" />

            <div className="absolute bottom-0 left-0 p-10 text-white">
              <h3 className="text-4xl font-medium">
                {item.title}
              </h3>

              <p className="mt-3 max-w-sm text-neutral-200">
                {item.description}
              </p>

              <span className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em]">
                Descubrir →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}