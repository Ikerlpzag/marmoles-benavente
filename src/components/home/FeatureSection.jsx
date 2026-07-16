import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

export default function FeatureSection({
    eyebrow,
    title,
    description,
    image,
    to,
    reverse = false,
}) {
    return (
        <Section border spacing="large">

            

                <div
                    className={`grid items-center gap-32 lg:grid-cols-2 ${
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
                    <Reveal>
                    <div>

                        <SectionHeader
                            eyebrow={eyebrow}
                            title={title}
                        />

                        <p className="mt-10 max-w-xl text-lg leading-9 text-neutral-600">
                            {description}
                        </p>

                        <Button
                            to={to}
                            className="mt-12 inline-flex items-center border-b border-current pb-2 uppercase tracking-[0.2em] text-sm"
                        >
                            Descubrir
                        </Button>

                    </div>
                    </Reveal>

                </div>

         

        </Section>
    );
}