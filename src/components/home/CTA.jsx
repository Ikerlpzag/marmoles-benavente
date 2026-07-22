import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

export default function CTA() {
  return (
    <Section border spacing="large">
      <Reveal>
        <div className="max-w-3xl">
          <SectionHeader
            eyebrow="CONTACTO"
            title="Cuéntanos tu proyecto."
          />

          <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg sm:leading-9">
            Si estás pensando en una encimera, una escalera, un baño o cualquier
            proyecto en piedra natural, estaremos encantados de ayudarte.
          </p>

          <Button
            to="/contact"
            className="mt-10 inline-flex border-b border-current pb-2 text-sm uppercase tracking-[0.2em] sm:mt-12"
          >
            Solicitar presupuesto
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}