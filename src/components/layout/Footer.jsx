import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-200 bg-white">
      <Container className="py-14">

        <div className="flex flex-col gap-10 md:flex-row md:justify-between">

          <div>
            <h2 className="text-2xl font-semibold tracking-[0.25em]">
              MB
            </h2>

            <p className="mt-3 max-w-sm text-neutral-600">
              Especialistas en piedra natural para proyectos residenciales,
              comerciales y arte funerario.
            </p>
          </div>

          <div>
            <h3 className="font-medium">Contacto</h3>

            <p className="mt-3 text-neutral-600">
              Berja · Almería
            </p>

            <p className="text-neutral-600">
              info@marmolesbenavente.es
            </p>
          </div>

        </div>

        <div className="mt-10 border-t pt-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Mármoles Benavente
        </div>

      </Container>
    </footer>
  );
}