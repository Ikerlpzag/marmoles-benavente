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
        title="Servicios a medida para cada proyecto."
      />

      <Section spacing="default">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-base leading-8 text-[var(--text-light)] sm:text-lg sm:leading-9">
              Fabricamos e instalamos piezas a medida para viviendas, 
              negocios y espacios públicos, cuidando cada detalle desde 
              la selección del material hasta el acabado final.
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