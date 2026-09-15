import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";
import Seo from "../components/ui/Seo";
import { Link } from "react-router-dom";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [mensajeEstado, setMensajeEstado] = useState("");

  const [mapConsent, setMapConsent] = useState(() => {
    return localStorage.getItem("google-maps-consent") === "accepted";
  });

  const enviarFormulario = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMensajeEstado("");

    const form = e.currentTarget;

    const datos = {
      nombre: form.nombre.value,
      email: form.email.value,
      mensaje: form.mensaje.value,
    };

    try {
      const respuesta = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      if (!respuesta.ok) {
        throw new Error("Error al enviar");
      }

      setMensajeEstado("Mensaje enviado correctamente.");
      form.reset();
    } catch (err) {
      console.error(err);
      setMensajeEstado("Ha ocurrido un error al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  const aceptarMapa = () => {
    localStorage.setItem("google-maps-consent", "accepted");
    setMapConsent(true);
  };

  return (
    <>
      <Seo
        title="Contacto | Mármoles Benavente"
        description="Contacta con Mármoles Benavente para consultar tu proyecto y solicitar información."
        path="/contact"
      />

      <PageHeader
        eyebrow="CONTACTO"
        title="Hablemos sobre tu proyecto."
        description="Estaremos encantados de ayudarte a encontrar la mejor solución para tu vivienda, negocio o proyecto."
      />

      <Section spacing="large">
        <div className="grid gap-16 md:gap-20 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div>
              <p className="mb-10 text-xs uppercase tracking-[0.35em] text-[var(--text-light)]">
                INFORMACIÓN
              </p>

              <div className="space-y-10 md:space-y-12">
                <div>
                  <h3 className="text-xl">Teléfono</h3>

                  <a
                    href="tel:+34645965917"
                    className="mt-3 inline-block text-base text-[var(--text-light)] transition-colors duration-300 hover:text-[var(--text)] sm:text-lg"
                  >
                    +34 645 965 917
                  </a>
                </div>

                <div>
                  <h3 className="text-xl">Correo electrónico</h3>

                  <a
                    href="mailto:marmolesbenavente@gmail.com"
                    className="mt-3 inline-block text-base text-[var(--text-light)] transition-colors duration-300 hover:text-[var(--text)] sm:text-lg"
                  >
                    marmolesbenavente@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl">Dirección</h3>

                  <p className="mt-3 text-base leading-8 text-[var(--text-light)] sm:text-lg">
                    C. la Covacha · 04750 · Dalías · Almería
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={enviarFormulario} className="space-y-8">
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-3 block text-sm uppercase tracking-[0.2em]"
                >
                  Nombre
                </label>

                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  required
                  className="w-full border-b border-[var(--border)] bg-transparent py-4 outline-none transition-colors duration-300 focus:border-[var(--text)]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm uppercase tracking-[0.2em]"
                >
                  Correo electrónico
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full border-b border-[var(--border)] bg-transparent py-4 outline-none transition-colors duration-300 focus:border-[var(--text)]"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-3 block text-sm uppercase tracking-[0.2em]"
                >
                  Mensaje
                </label>

                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  required
                  className="w-full resize-none border-b border-[var(--border)] bg-transparent py-4 outline-none transition-colors duration-300 focus:border-[var(--text)]"
                />
              </div>

              <div className="mt-6">
                <p className="text-xs leading-6 text-[var(--text-light)]">
                  Responsable: Joaquín Benavente Reyes. Finalidad: atender y
                  responder a tu consulta. Legitimación: gestión de tu
                  solicitud y, cuando proceda, aplicación de medidas
                  precontractuales.{" "}
                  <Link
                    to="/privacidad"
                    className="underline underline-offset-4 transition-opacity hover:opacity-60"
                  >
                    Más información en la Política de privacidad.
                  </Link>
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="border-b border-current pb-2 text-sm uppercase tracking-[0.2em]"
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </button>

              {mensajeEstado && (
                <p className="pt-4 text-sm">{mensajeEstado}</p>
              )}
            </form>
          </Reveal>
        </div>
      </Section>

      <section className="h-[400px] border-t border-[var(--border)] md:h-[500px] lg:h-[550px]">
        {mapConsent ? (
          <iframe
            title="Mapa de Mármoles Benavente"
            src="https://www.google.com/maps?q=marmolesbenavente,Dalías,Almería&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[var(--surface)] px-6">
            <div className="max-w-md text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-light)]">
                UBICACIÓN
              </p>

              <h2 className="mt-5 text-2xl leading-tight sm:text-3xl">
                Consulta nuestra ubicación en Google Maps.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--text-light)]">
                El mapa utiliza servicios de Google que pueden instalar
                cookies de terceros. Para visualizarlo debes aceptar su
                carga.
              </p>

              <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={aceptarMapa}
                  className="border-b border-current pb-1 text-sm font-medium uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                >
                  Aceptar y ver mapa
                </button>

                <Link
                  to="/cookies"
                  className="border-b border-transparent pb-1 text-sm uppercase tracking-[0.2em] text-[var(--text-light)] transition-colors hover:border-[var(--text)] hover:text-[var(--text)]"
                >
                  Política de cookies
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}