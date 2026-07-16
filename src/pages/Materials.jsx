import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";

import FeatureSection from "../components/home/FeatureSection";
import CTA from "../components/home/CTA";

import { materials } from "../data/materials";

export default function Materials() {
  return (
    <>
      <PageHeader
        eyebrow="MATERIALES"
        title="Seleccionamos cada material por su belleza, resistencia y durabilidad."
        description="Trabajamos exclusivamente con materiales de primera calidad para ofrecer soluciones adaptadas a cada proyecto."
      />

      <Section spacing="default">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-lg leading-9 text-[var(--text-light)]">
              Cada material posee unas propiedades únicas. Nuestro trabajo
              consiste en ayudarte a elegir la opción más adecuada teniendo en
              cuenta el diseño, el uso previsto y las características técnicas
              de cada proyecto.
            </p>
          </div>
        </Reveal>
      </Section>

      {materials.map((material, index) => (
        <FeatureSection
          key={material.slug}
          eyebrow={material.eyebrow}
          title={material.title}
          description={material.description}
          image={material.image}
          to="/projects"
          reverse={index % 2 !== 0}
        />
      ))}

      <CTA />
    </>
  );
}