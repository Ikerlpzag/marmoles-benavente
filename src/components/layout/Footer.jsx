import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { Link } from "react-router-dom";

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

            {/* Pie */}

            <div className="mt-16 border-t border-[var(--border)] pt-8 md:mt-24">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-[var(--text-light)]">
                  © 2026 Mármoles Benavente
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-[var(--text-light)]">
                  <Link
                    to="/aviso-legal"
                    className="transition-opacity hover:opacity-60"
                  >
                    Aviso legal
                  </Link>

                  <Link
                    to="/privacidad"
                    className="transition-opacity hover:opacity-60"
                  >
                    Privacidad
                  </Link>

                  <Link
                    to="/cookies"
                    className="transition-opacity hover:opacity-60"
                  >
                    Cookies
                  </Link>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs text-[var(--text-light)]">
                  Todos los derechos reservados.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}