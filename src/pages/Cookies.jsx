import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Seo from "../components/ui/Seo";

export default function Cookies() {
  const [preferenciaEliminada, setPreferenciaEliminada] = useState(false);

  const eliminarPreferenciaMapa = () => {
    localStorage.removeItem("google-maps-consent");
    setPreferenciaEliminada(true);
  };

  return (
    <>
      <Seo
        title="Política de cookies | Mármoles Benavente"
        description="Información sobre el uso de cookies y tecnologías similares en el sitio web de Mármoles Benavente."
        path="/cookies"
      />

      <PageHeader
        eyebrow="COOKIES"
        title="Política de cookies."
        description="Información sobre las cookies y tecnologías similares utilizadas en este sitio web."
      />

      <Section spacing="large">
        <div className="mx-auto max-w-3xl space-y-16">
          <Reveal>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--text)]">
                1. ¿Qué son las cookies?
              </h2>

              <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                Las cookies son pequeños archivos que se almacenan en el
                dispositivo del usuario cuando visita determinados sitios web.
                Permiten, entre otras funciones, recordar determinadas
                preferencias o facilitar el funcionamiento de servicios
                externos.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--text)]">
                2. Cookies utilizadas en este sitio web
              </h2>

              <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                Mármoles Benavente procura limitar el uso de cookies y
                tecnologías similares a las estrictamente necesarias para el
                funcionamiento del sitio web y a los servicios externos que el
                usuario decida activar.
              </p>

              <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                Actualmente, el sitio web no utiliza cookies propias con fines
                publicitarios ni de analítica.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--text)]">
                3. Google Maps
              </h2>

              <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                En la página de contacto se ofrece un mapa de Google Maps para
                facilitar la localización de Mármoles Benavente.
              </p>

              <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                El mapa no se carga automáticamente. Antes de mostrarlo, el
                usuario debe aceptar expresamente su carga mediante el botón
                correspondiente.
              </p>

              <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                Al cargar Google Maps, Google puede utilizar cookies,
                almacenamiento local y otras tecnologías similares asociadas a
                sus servicios. Estas tecnologías pueden implicar el tratamiento
                de información por parte de Google conforme a sus propias
                políticas.
              </p>

              <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                La preferencia del usuario respecto a la carga del mapa se
                guarda localmente en su navegador. Este almacenamiento local no
                es una cookie.
              </p>

              <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                Para obtener más información sobre el tratamiento de datos por
                parte de Google, puede consultar su{" "}
                <a
                  href="https://policies.google.com/privacy?hl=es"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 transition-opacity hover:opacity-60"
                >
                  Política de privacidad
                </a>
                .
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--text)]">
                4. Gestión de la preferencia de Google Maps
              </h2>

              <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                El usuario puede retirar en cualquier momento la preferencia
                almacenada para Google Maps desde esta página. Al hacerlo, la
                próxima vez que acceda a la página de contacto se volverá a
                solicitar su decisión antes de cargar el mapa.
              </p>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={eliminarPreferenciaMapa}
                  className="border-b border-current pb-2 text-sm uppercase tracking-[0.18em] transition-opacity duration-300 hover:opacity-60"
                >
                  Restablecer preferencia de Google Maps
                </button>

                {preferenciaEliminada && (
                  <p className="mt-5 text-sm text-[var(--text-light)]">
                    Preferencia restablecida correctamente.
                  </p>
                )}
              </div>

              <p className="mt-6 text-sm leading-7 text-[var(--text-light)]">
                Eliminar esta preferencia no elimina las cookies o datos que
                Google haya podido almacenar anteriormente en el navegador.
                Para eliminarlos, el usuario puede utilizar las opciones de
                privacidad y cookies de su navegador.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--text)]">
                5. Gestión de cookies desde el navegador
              </h2>

              <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                El usuario puede permitir, bloquear o eliminar las cookies
                instaladas en su dispositivo mediante la configuración de su
                navegador.
              </p>

              <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                La desactivación de determinadas cookies o tecnologías de
                terceros puede afectar al funcionamiento de algunos servicios
                externos, como el mapa de Google Maps.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--text)]">
                6. Cookies de terceros
              </h2>

              <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                Algunos contenidos o servicios integrados en el sitio web
                pueden ser proporcionados por terceros. Estos terceros pueden
                utilizar sus propias cookies o tecnologías similares cuando el
                usuario accede al servicio correspondiente.
              </p>

              <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                Mármoles Benavente no controla directamente las cookies que
                puedan establecer dichos proveedores externos ni sus
                modificaciones posteriores. Por ello, se recomienda consultar
                sus respectivas políticas de privacidad y cookies.
              </p>
            </section>
          </Reveal>

          <Reveal>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--text)]">
                7. Actualizaciones
              </h2>

              <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                Esta Política de Cookies puede actualizarse cuando se produzcan
                cambios en las cookies utilizadas, en los servicios integrados
                en el sitio web o cuando resulte necesario para adaptarla a
                cambios normativos.
              </p>

              <p className="mt-6 text-base leading-8 text-[var(--text-light)]">
                Se recomienda revisar periódicamente esta página para conocer
                cualquier modificación.
              </p>
            </section>
          </Reveal>
        </div>
      </Section>
    </>
  );
}