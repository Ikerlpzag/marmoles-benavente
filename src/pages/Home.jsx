import Seo from "../components/ui/Seo";

import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";
import NavigationGrid from "../components/home/NavigationGrid";

export default function Home() {
  return (
    <>
      <Seo
        title="Mármoles Benavente"
        description="Especialistas en piedra natural."
      />

      <Hero />

      <Intro />

      <NavigationGrid/>
    </>
  );
}