import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import Reveal from "../components/ui/Reveal";
import CTA from "../components/home/CTA";
import MaterialsGrid from "../components/materials/MaterialsGrid";

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

      <Section spacing="compact">
        <Reveal>
          <SectionHeader
            title="Mármoles"
          />
        </Reveal>

        <div className="mt-16">
          <MaterialsGrid materials={materials.marmoles} />
        </div>
      </Section>

      <Section border spacing="compact">
        <Reveal>
          <SectionHeader 
            title="Granitos"
          />
        </Reveal>

        <div className="mt-16">
          <MaterialsGrid materials={materials.granitos} />
        </div>
      </Section>

      <CTA />
    </>
  );
}