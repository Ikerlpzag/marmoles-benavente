import Container from "./Container";
import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--background)] py-40 lg:py-48">
      <Container>
        <Reveal>
          <div className="max-w-4xl">
            {eyebrow && (
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[var(--text-light)]">
                {eyebrow}
              </p>
            )}

            <h1 className="text-5xl leading-tight md:text-6xl lg:text-7xl">
              {title}
            </h1>

            {description && (
              <p className="mt-10 max-w-2xl text-lg leading-9 text-[var(--text-light)]">
                {description}
              </p>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}