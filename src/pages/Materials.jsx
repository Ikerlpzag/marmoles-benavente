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
        title="La base de un proyecto comienza con el material adecuado."
      />

      <Section spacing="default">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-lg leading-9 text-[var(--text-light)]">
              Trabajamos exclusivamente con materiales de primera calidad,
              seleccionados por su belleza, resistencia y durabilidad.
              Te ayudamos a elegir la opción más adecuada según el diseño, 
              el uso previsto y las necesidades específicas de cada espacio.
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