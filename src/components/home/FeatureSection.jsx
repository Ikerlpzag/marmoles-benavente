import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

export default function FeatureSection({
  title,
  image,
  to,
  reverse = false,
}) {
  return (
    <Section border spacing="large">
      <div
        className={`grid gap-14 md:gap-16 lg:grid-cols-2 lg:items-center lg:gap-24 xl:gap-32 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal>
          <div>
            <img
              src={image}
              alt={title}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <SectionHeader
              title={title}
            />

            <Button
              to={to}
              className="mt-10 inline-flex items-center border-b border-current pb-2 text-sm uppercase tracking-[0.2em] sm:mt-12"
            >
              Descubrir
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}