import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import FeatureSection from "../components/home/FeatureSection";
import CTA from "../components/home/CTA";

import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="SERVICIOS"
        title="Soluciones en piedra natural para todo tipo de proyectos."
        description="Fabricamos cada pieza a medida, adaptándonos a las necesidades de cada cliente y de cada espacio."
      />

      <Section spacing="default">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-base leading-8 text-[var(--text-light)] sm:text-lg sm:leading-9">
              Trabajamos con materiales de primera calidad para desarrollar
              proyectos que combinan precisión, funcionalidad y una estética
              atemporal. Desde una encimera hasta una fachada completa, cada
              trabajo recibe la misma atención al detalle.
            </p>
          </div>
        </Reveal>
      </Section>

      {services.map((service, index) => (
        <FeatureSection
          key={service.slug}
          eyebrow={service.eyebrow}
          title={service.title}
          description={service.description}
          image={service.image}
          to="/contact"
          reverse={index % 2 !== 0}
        />
      ))}

      <CTA />
    </>
  );
}