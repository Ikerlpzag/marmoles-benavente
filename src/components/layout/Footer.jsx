import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <Container>
        <Reveal>
          <div className="py-20 md:py-24">
            <div className="grid gap-14 md:gap-16 lg:grid-cols-2">
              {/* Información */}

              <div className="max-w-md">
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--text-light)]">
                  Mármoles Benavente
                </p>

                <h2 className="mt-6 text-2xl font-semibold leading-tight text-[var(--text)] sm:text-3xl">
                  Piedra natural trabajada con precisión.
                </h2>

                <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                  Encimeras, fachadas, escaleras, chimeneas, baños y proyectos
                  personalizados en mármol y granito.
                </p>

                <p className="mt-8 text-sm text-[var(--text-light)]">
                  C. la Covacha 2 · 04750 · Dalías · Almería
                </p>
              </div>

              {/* Navegación */}

              <div className="flex flex-col items-start gap-5 lg:items-end">
                <Button
                  to="/projects"
                  className="inline-flex border-b border-transparent pb-1 text-sm uppercase tracking-[0.18em] transition-colors duration-300 hover:border-[var(--text)]"
                >
                  Proyectos
                </Button>

                <Button
                  to="/materials"
                  className="inline-flex border-b border-transparent pb-1 text-sm uppercase tracking-[0.18em] transition-colors duration-300 hover:border-[var(--text)]"
                >
                  Materiales
                </Button>

                <Button
                  to="/contact"
                  className="inline-flex border-b border-transparent pb-1 text-sm uppercase tracking-[0.18em] transition-colors duration-300 hover:border-[var(--text)]"
                >
                  Contactar
                </Button>
              </div>
            </div>

            <div className="mt-16 md:mt-24 flex flex-col gap-3 border-t border-[var(--border)] pt-8 text-sm text-[var(--text-light)] md:flex-row md:items-center md:justify-between">
              <p>© 2026 Mármoles Benavente</p>

              <p>Todos los derechos reservados.</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}