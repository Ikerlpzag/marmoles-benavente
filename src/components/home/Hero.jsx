import hero from "../../assets/images/hero.jpg";

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

      <div className="absolute inset-0 bg-black/25" />

      <Container className="relative flex min-h-dvh items-center py-32 md:py-40">

        <div className="max-w-3xl text-white">

          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] sm:text-sm">
            Mármoles Benavente
          </p>

          <h1 className="text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Piedra natural
            <br />
            para espacios
            <br />
            que perduran.
          </h1>

          <p className="mt-8 max-w-lg text-base leading-8 text-neutral-200 sm:text-lg sm:leading-9">
            Especialistas en mármol, granito, porcelánico y cuarzo.
          </p>

          <div className="mt-10 sm:mt-14">
            <Button
              to="/projects"
              className="text-white"
            >
              Ver proyectos
            </Button>
          </div>

        </div>

      </Container>

    </section>
  );
}