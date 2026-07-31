import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [mensajeEstado, setMensajeEstado] = useState("");

  const enviarFormulario = async (e) => {
    e.preventDefault();

    console.log("Formulario enviado");

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

  return (
    <>
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
                <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
                  Nombre
                </label>

                <input
                  type="text"
                  name="nombre"
                  required
                  className="w-full border-b border-[var(--border)] bg-transparent py-4 outline-none transition-colors duration-300 focus:border-[var(--text)]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-b border-[var(--border)] bg-transparent py-4 outline-none transition-colors duration-300 focus:border-[var(--text)]"
                />
              </div>

              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.2em]">
                  Mensaje
                </label>

                <textarea
                  name="mensaje"
                  rows={5}
                  required
                  className="w-full resize-none border-b border-[var(--border)] bg-transparent py-4 outline-none transition-colors duration-300 focus:border-[var(--text)]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="border-b border-current pb-2 text-sm uppercase tracking-[0.2em]"
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </button>

              {mensajeEstado && (
                <p className="pt-4 text-sm">
                  {mensajeEstado}
                </p>
              )}
            </form>
          </Reveal>

        </div>
      </Section>

      <section className="h-[400px] border-t border-[var(--border)] md:h-[500px] lg:h-[550px]">
        <iframe
          title="Mapa"
          src="https://www.google.com/maps?q=marmolesbenavente,Dalías,Almería&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </section>
    </>
  );
}