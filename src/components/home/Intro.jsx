import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

export default function Intro() {
  return (
    <Section>
      <Container>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <SectionTitle
            eyebrow="Mármoles Benavente"
            title="Más de tres décadas transformando piedra natural."
            description="Trabajamos mármol, granito, cuarzo y porcelánico para proyectos residenciales, comerciales y funerarios, combinando experiencia, precisión y materiales de primera calidad."
          />

          <div className="space-y-6 text-lg leading-8 text-neutral-600">

            <p>
              Cada proyecto es único. Acompañamos a nuestros clientes desde el asesoramiento inicial hasta la instalación final, cuidando cada detalle para conseguir un resultado duradero y elegante.
            </p>

            <p>
              Nuestra experiencia y la confianza de cientos de clientes nos permiten ofrecer soluciones totalmente personalizadas para cualquier tipo de espacio.
            </p>

          </div>

        </div>

      </Container>
    </Section>
  );
}