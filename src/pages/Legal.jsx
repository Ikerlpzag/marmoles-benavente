import Seo from "../components/ui/Seo";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";

export default function Legal() {
return (
<> <Seo
     title="Aviso legal | Mármoles Benavente"
     description="Información legal y condiciones de uso del sitio web de Mármoles Benavente."
     path="/aviso-legal"
   />

  <PageHeader
    eyebrow="INFORMACIÓN LEGAL"
    title="Aviso legal"
    description="Información relativa al titular y a las condiciones de uso de este sitio web."
  />

  <Section spacing="default">
    <Reveal>
      <div className="max-w-3xl space-y-12 text-base leading-8 text-[var(--text-light)] sm:text-lg sm:leading-9">
        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            1. Titular del sitio web
          </h2>

          <p>
            El titular de este sitio web es Joaquín Benavente Reyes,
            profesional autónomo que desarrolla su actividad bajo la
            denominación comercial Mármoles Benavente.
          </p>

          <div className="mt-6 space-y-2">
            <p>
              <strong className="text-[var(--text)]">Domicilio:</strong>{" "}
              Calle la Covacha, 2, 04760 Dalías, Almería
            </p>

            <p>
              <strong className="text-[var(--text)]">Correo:</strong>{" "}
              <a
                href="mailto:marmolesbenavente@gmail.com"
                className="underline underline-offset-4 hover:opacity-70"
              >
                marmolesbenavente@gmail.com
              </a>
            </p>

            <p>
              <strong className="text-[var(--text)]">Teléfono:</strong>{" "}
              <a
                href="tel:+34645965917"
                className="underline underline-offset-4 hover:opacity-70"
              >
                +34 645 965 917
              </a>
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            2. Objeto
          </h2>

          <p>
            El presente sitio web tiene como finalidad proporcionar
            información sobre Mármoles Benavente, sus materiales, servicios,
            proyectos y medios de contacto.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            3. Condiciones de uso
          </h2>

          <p>
            El acceso y uso de este sitio web atribuye la condición de
            usuario e implica la aceptación de las presentes condiciones.
            El usuario se compromete a utilizar el sitio web de forma
            lícita, diligente y respetuosa con los derechos de terceros.
          </p>

          <p className="mt-6">
            Queda prohibido utilizar el sitio web para realizar actividades
            contrarias a la legislación vigente, a la buena fe o al orden
            público, así como para introducir contenidos o programas que
            puedan causar daños o alterar el funcionamiento del sitio.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            4. Propiedad intelectual
          </h2>

          <p>
            Los contenidos de este sitio web, incluyendo textos, imágenes,
            fotografías, logotipos, diseño y elementos gráficos, están
            protegidos por la normativa aplicable en materia de propiedad
            intelectual e industrial.
          </p>

          <p className="mt-6">
            Salvo autorización expresa, no se permite reproducir,
            distribuir, transformar, comunicar públicamente o explotar los
            contenidos del sitio web con fines distintos de su consulta
            personal.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            5. Responsabilidad
          </h2>

          <p>
            Mármoles Benavente procura que la información publicada en este
            sitio web sea correcta y se encuentre actualizada, aunque no
            garantiza la ausencia de errores u omisiones.
          </p>

          <p className="mt-6">
            Asimismo, no se responsabiliza de los daños que puedan
            derivarse de interrupciones, fallos técnicos o circunstancias
            ajenas a su control, dentro de los límites establecidos por la
            legislación aplicable.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            6. Enlaces externos
          </h2>

          <p>
            Este sitio web puede contener enlaces a páginas o servicios de
            terceros. Mármoles Benavente no controla dichos sitios y no
            asume responsabilidad por sus contenidos, servicios o políticas
            de privacidad.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            7. Legislación aplicable
          </h2>

          <p>
            La relación entre el titular del sitio web y el usuario se
            regirá por la legislación española aplicable. Para cualquier
            cuestión que pudiera surgir en relación con el uso del sitio
            web se estará a lo dispuesto por la normativa vigente.
          </p>
        </div>
      </div>
    </Reveal>
  </Section>
</>
);
}
