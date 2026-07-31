import Container from "./Container";
import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--background)] py-28 sm:py-32 lg:py-40 xl:py-48">
      <Container>
        <Reveal>
          <div className="max-w-4xl">
            {eyebrow && (
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[var(--text-light)] sm:mb-6">
                {eyebrow}
              </p>
            )}

            <h1 className="text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>

            {description && (
              <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--text-light)] sm:mt-10 sm:text-lg sm:leading-9">
                {description}
              </p>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}