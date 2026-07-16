import hero from "../../assets/images/hero.jpg";

import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen">

      <img
        src={hero}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <Container className="relative flex min-h-screen items-center">

        <div className="max-w-3xl text-white">

          <p className="mb-6 uppercase tracking-[0.35em]">
            Mármoles Benavente
          </p>

          <h1 className="text-6xl leading-tight lg:text-8xl">
            Piedra natural
            <br />
            para espacios
            <br />
            que perduran.
          </h1>

          <p className="mt-10 max-w-xl text-lg text-neutral-200 leading-8">
            Especialistas en mármol, granito, porcelánico y cuarzo.
          </p>

          <div className="mt-12">
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