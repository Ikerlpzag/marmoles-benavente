import Seo from "../components/ui/Seo";
import PageHeader from "../components/ui/PageHeader";
import Section from "../components/ui/Section";
import Reveal from "../components/ui/Reveal";

export default function Privacy() {
return (
<> <Seo
     title="Política de privacidad | Mármoles Benavente"
     description="Consulta la política de privacidad y protección de datos de Mármoles Benavente."
     path="/privacidad"
   />
  <PageHeader
    eyebrow="PROTECCIÓN DE DATOS"
    title="Política de privacidad"
    description="Información sobre cómo tratamos los datos personales facilitados a través de este sitio web."
  />

  <Section spacing="default">
    <Reveal>
      <div className="max-w-3xl space-y-12 text-base leading-8 text-[var(--text-light)] sm:text-lg sm:leading-9">
        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            1. Responsable del tratamiento
          </h2>

          <p>
            El responsable del tratamiento de los datos personales
            facilitados a través de este sitio web es Joaquín Benavente
            Reyes, titular de Mármoles Benavente.
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
            2. Datos que se recogen
          </h2>

          <p>
            A través del formulario de contacto pueden recabarse los datos
            que el usuario facilite voluntariamente, principalmente nombre,
            dirección de correo electrónico y contenido del mensaje.
          </p>

          <p className="mt-6">
            También pueden tratarse los datos que el usuario facilite
            directamente mediante correo electrónico, teléfono u otros
            medios de contacto disponibles en el sitio web.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            3. Finalidad del tratamiento
          </h2>

          <p>
            Los datos se tratarán con las siguientes finalidades:
          </p>

          <ul className="mt-5 list-disc space-y-3 pl-6">
            <li>
              Atender y responder las consultas realizadas a través del
              formulario de contacto.
            </li>
            <li>
              Contactar con el usuario en relación con la consulta o
              solicitud realizada.
            </li>
            <li>
              Gestionar las comunicaciones necesarias para prestar
              información sobre los servicios solicitados.
            </li>
            <li>
              Cumplir las obligaciones legales que resulten aplicables.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            4. Base jurídica
          </h2>

          <p>
            La base jurídica del tratamiento de los datos facilitados
            mediante el formulario de contacto es la aplicación de medidas
            precontractuales o la gestión de la solicitud realizada por el
            propio interesado, cuando corresponda.
          </p>

          <p className="mt-6">
            Cuando resulte aplicable, determinados tratamientos podrán
            basarse en el cumplimiento de obligaciones legales o en el
            interés legítimo del responsable.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            5. Conservación de los datos
          </h2>

          <p>
            Los datos personales se conservarán durante el tiempo necesario
            para atender y gestionar la consulta o solicitud realizada.
            Posteriormente podrán conservarse, debidamente protegidos,
            durante los plazos necesarios para atender las obligaciones
            legales o posibles responsabilidades derivadas del tratamiento.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            6. Destinatarios
          </h2>

          <p>
            Los datos no se venderán ni se cederán a terceros con fines
            comerciales.
          </p>

          <p className="mt-6">
            Para gestionar el funcionamiento del sitio web y atender las
            solicitudes realizadas pueden intervenir proveedores
            tecnológicos que actúan por cuenta del responsable, como
            proveedores de alojamiento, infraestructura o servicios de
            envío de correo electrónico, siempre dentro de las condiciones
            y garantías exigibles por la normativa aplicable.
          </p>

          <p className="mt-6">
            Los datos podrán comunicarse a organismos públicos o autoridades
            cuando exista una obligación legal de hacerlo.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            7. Derechos
          </h2>

          <p>
            El usuario puede solicitar el acceso a sus datos personales,
            así como su rectificación, supresión, limitación del tratamiento
            u oposición, cuando proceda. También podrá solicitar la
            portabilidad de sus datos en los supuestos previstos legalmente.
          </p>

          <p className="mt-6">
            Para ejercer estos derechos puede enviar una solicitud a:
          </p>

          <p className="mt-4">
            <a
              href="mailto:marmolesbenavente@gmail.com"
              className="underline underline-offset-4 hover:opacity-70"
            >
              marmolesbenavente@gmail.com
            </a>
          </p>

          <p className="mt-6">
            La solicitud deberá permitir identificar al interesado y
            especificar el derecho que desea ejercer.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            8. Derecho a reclamar
          </h2>

          <p>
            Si el usuario considera que el tratamiento de sus datos
            personales no se ajusta a la normativa aplicable, puede
            presentar una reclamación ante la Agencia Española de
            Protección de Datos (AEPD).
          </p>

          <p className="mt-6">
            Puede consultar información sobre sus derechos y los
            procedimientos disponibles en el sitio web de la AEPD.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            9. Seguridad
          </h2>

          <p>
            Se adoptan medidas técnicas y organizativas razonables para
            proteger los datos personales frente a accesos no autorizados,
            pérdida, alteración o tratamiento indebido.
          </p>
        </div>

        <div>
          <h2 className="mb-5 text-2xl text-[var(--text)] sm:text-3xl">
            10. Actualizaciones
          </h2>

          <p>
            Esta política de privacidad podrá actualizarse cuando resulte
            necesario para adaptarla a cambios normativos, técnicos o en
            los tratamientos realizados. La versión publicada en esta
            página será la aplicable en cada momento.
          </p>
        </div>
      </div>
    </Reveal>
  </Section>
</>
);
}
