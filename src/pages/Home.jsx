import Hero from "../components/home/Hero";
import Essence from "../components/home/Essence";
import FeatureSection from "../components/home/FeatureSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import CTA from "../components/home/CTA";

import materialsImage from "../assets/images/materials.jpg";
import servicesImage from "../assets/images/services.webp";

export default function Home() {
  return (
    <>
      <Hero />

      <Essence />

      <FeatureSection
        eyebrow="Materiales"
        title="La mejor materia prima para cada proyecto."
        description="Seleccionamos cuidadosamente mármol, granito, cuarzo y porcelánico para garantizar un resultado duradero y elegante."
        image={materialsImage}
        to="/materials"
      />

      <FeatureSection
        reverse
        eyebrow="Servicios"
        title="Fabricación e instalación a medida."
        description="Desde el asesoramiento hasta el montaje final, cuidamos cada detalle para que cada proyecto sea único."
        image={servicesImage}
        to="/services"
      />

      <FeaturedProjects />

      <CTA />
    </>
  );
}