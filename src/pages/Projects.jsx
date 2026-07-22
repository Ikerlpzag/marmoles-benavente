import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import CTA from "../components/home/CTA";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="PROYECTOS"
        title="Una selección de trabajos realizados en piedra natural."
        description="Cada proyecto responde a unas necesidades distintas, pero todos comparten el mismo compromiso con la calidad y el detalle."
      />

      <Section spacing="default">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-base leading-8 text-[var(--text-light)] sm:text-lg sm:leading-9">
              Cocinas, baños, fachadas, escaleras, espacios comerciales y arte
              funerario. Una muestra de algunos de los proyectos desarrollados
              por nuestro equipo.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section spacing="large">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.id}>
              <article className="group">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[var(--text-light)]">
                  {project.category}
                </p>

                <h2 className="mt-2 text-xl leading-snug sm:text-2xl">
                  {project.title}
                </h2>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}