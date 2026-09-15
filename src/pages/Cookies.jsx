import Seo from "../components/ui/Seo";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";

export default function Cookies() {
return (
<> <Seo
     title="Política de cookies | Mármoles Benavente"
     description="Consulta la política de cookies de Mármoles Benavente y la información sobre las tecnologías utilizadas en este sitio web."
     path="/cookies"
   />

  <PageHeader
    eyebrow="COOKIES"
    title="Política de cookies"
    description="Información sobre el uso de cookies y tecnologías similares en este sitio web."
  />

  <Section spacing="default">
    <Reveal>
      <div className="max-w-3xl space-y-12 text-base leading-8 text-[var(--text-light)] sm:text-lg sm:leading-9">
        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            1. ¿Qué son las cookies?
          </h2>

          <p>
            Las cookies son pequeños archivos que pueden almacenarse en el
            dispositivo del usuario cuando visita un sitio web. Permiten,
            entre otras funciones, recordar determinadas preferencias,
            facilitar la navegación o proporcionar información sobre el uso
            de determinados servicios.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            2. Cookies utilizadas en este sitio web
          </h2>

          <p>
            Mármoles Benavente procura limitar el uso de cookies y
            tecnologías similares a aquellas necesarias para el correcto
            funcionamiento del sitio web y a las que resulten necesarias
            para prestar los servicios solicitados por el usuario.
          </p>

          <p className="mt-6">
            Algunos servicios de terceros integrados en la página, como
            determinados servicios de mapas, pueden utilizar sus propias
            tecnologías de almacenamiento o cookies. Dichas tecnologías se
            encuentran sujetas a las políticas de los respectivos
            proveedores.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            3. Tipos de cookies
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="mb-3 text-xl text-[var(--text)]">
                Cookies técnicas o necesarias
              </h3>

              <p>
                Son aquellas necesarias para permitir la navegación, prestar
                determinadas funciones del sitio web o gestionar servicios
                solicitados por el usuario. Cuando su utilización sea
                estrictamente necesaria, no requieren consentimiento previo
                conforme a la normativa aplicable.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl text-[var(--text)]">
                Cookies de análisis, publicidad o personalización
              </h3>

              <p>
                En caso de incorporarse en el futuro cookies destinadas a
                analizar la navegación, personalizar contenidos o realizar
                publicidad, estas se gestionarán de acuerdo con la normativa
                aplicable y, cuando sea necesario, se solicitará previamente
                el consentimiento del usuario.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            4. Gestión de las cookies
          </h2>

          <p>
            El usuario puede configurar su navegador para bloquear,
            eliminar o limitar determinadas cookies. La configuración
            disponible depende del navegador y del dispositivo utilizado.
          </p>

          <p className="mt-6">
            El bloqueo de determinadas cookies técnicas puede afectar al
            funcionamiento correcto de algunas partes del sitio web.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            5. Cookies de terceros
          </h2>

          <p>
            Cuando se incorporen servicios proporcionados por terceros, como
            mapas, contenido externo u otros servicios integrados, dichos
            proveedores pueden utilizar sus propias cookies o tecnologías
            similares.
          </p>

          <p className="mt-6">
            El tratamiento realizado por estos terceros se regirá por sus
            respectivas políticas de privacidad y cookies.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            6. Actualización de la política
          </h2>

          <p>
            Esta política podrá actualizarse cuando cambien las cookies o
            tecnologías utilizadas en el sitio web, cuando se incorporen
            nuevos servicios o cuando resulte necesario para adaptarla a la
            normativa vigente.
          </p>
        </div>
      </div>
    </Reveal>
  </Section>
</>
);
}
