import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";

import workshop from "../../assets/images/about.png";
import Section from "../ui/Section";

export default function Essence() {
  return (
    <Section spacing="default">
      <div className="grid gap-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div>
            <SectionHeader
              eyebrow="MÁRMOLES BENAVENTE"
              title="La piedra trabajada con precisión y experiencia."
            />

            <p className="mt-10 max-w-lg text-lg leading-9 text-neutral-600">
              Transformamos mármol, granito, cuarzo y porcelánico en proyectos
              únicos para viviendas, negocios y espacios funerarios. Cada pieza
              se fabrica a medida en nuestro taller.
            </p>

            <div className="mt-12">
              <Button to="/about">Conoce la empresa</Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <img
              src={workshop}
              alt="Taller de Mármoles Benavente"
              className="w-full"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
