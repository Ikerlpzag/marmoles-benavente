import hero from "../../assets/images/hero.webp";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center">
      <img
        src={hero}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-white/15" />

      <Container className="relative flex min-h-dvh items-center py-32 md:py-40">
        <div className="max-w-2xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#0F4C6B] sm:text-sm">
            MÁRMOLES BENAVENTE
          </p>

          <h1 className="text-4xl leading-[1.02] text-[#1F1F1F] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Piedra natural
            <br />
            para espacios
            <br />
            que perduran.
          </h1>

          <p className="mt-10 max-w-md text-base leading-8 text-[#525252] sm:text-lg sm:leading-9">
            Especialistas en mármol, granito, porcelánico y cuarzo para proyectos residenciales y comerciales.
          </p>

          <div className="mt-12">
            <Button to="/projects" className="text-[#1F1F1F]">
              Ver proyectos
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}