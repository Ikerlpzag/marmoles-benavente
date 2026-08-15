import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import Reveal from "../components/ui/Reveal";
import CTA from "../components/home/CTA";

import workshop from "../assets/images/about.webp";
import detail1 from "../assets/images/work.webp";
import detail2 from "../assets/images/services.webp";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="MÁRMOLES BENAVENTE"
        title="Más de tres décadas trabajando la piedra con la misma precisión."
      />

      {/* Introducción */}

      <Section spacing="default">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-base leading-8 text-[var(--text-light)] sm:text-lg sm:leading-9">
              Desde nuestro taller damos forma a proyectos en mármol y
              granito para viviendas, negocios y espacios
              públicos. Cada pieza se fabrica a medida buscando el equilibrio
              entre diseño, precisión y durabilidad.
            </p>

            <p className="mt-8 text-base leading-8 text-[var(--text-light)] sm:text-lg sm:leading-9">
              La experiencia adquirida durante décadas nos permite afrontar cada
              proyecto con el mismo cuidado, independientemente de su tamaño.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Imagen */}

      <section className="pb-24 md:pb-32 lg:pb-40">
        <Reveal>
          <img
            src={workshop}
            alt="Taller de Mármoles Benavente"
            className="h-[60vh] w-full object-cover md:h-[80vh] lg:h-[110vh]"
          />
        </Reveal>
      </section>

      {/* Proceso */}

      <Section border spacing="large">
        <div className="grid gap-14 md:gap-16 lg:grid-cols-2 lg:gap-24 lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="NUESTRO PROCESO"
              title="Cada proyecto comienza con la elección del material adecuado."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 md:space-y-8 text-base leading-8 text-[var(--text-light)] sm:text-lg sm:leading-9">
              <p>
                Seleccionamos cuidadosamente cada bloque atendiendo a sus vetas,
                tonalidades y características técnicas para garantizar el mejor
                resultado posible.
              </p>

              <p>
                Combinamos maquinaria especializada con un acabado artesanal,
                cuidando cada detalle desde el primer corte hasta la instalación
                final.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Galería */}

      <Section spacing="large">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <figure>
              <img
                src={detail1}
                alt="Proceso de fabricación"
                className="aspect-[4/5] w-full object-cover"
              />

              <figcaption className="mt-5 text-xs uppercase tracking-[0.2em] text-[var(--text-light)]">
                Fabricación completamente a medida.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1}>
            <figure>
              <img
                src={detail2}
                alt="Detalle de piedra natural"
                className="aspect-[4/5] w-full object-cover"
              />

              <figcaption className="mt-5 text-xs uppercase tracking-[0.2em] text-[var(--text-light)]">
                Materiales seleccionados para durar generaciones.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      <CTA />
    </>
  );
}