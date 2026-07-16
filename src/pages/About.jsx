import Seo from "../components/ui/Seo";
import PageHeader from "../components/ui/PageHeader";

export default function Enterprise() {
  return (
    <>
      <Seo
        title="Sobre nosotros | Mármoles Benavente"
        description="Conoce nuestra historia."
      />

      <PageHeader
        eyebrow="Sobre nosotros"
        title="Tradición, experiencia y pasión por la piedra."
        description="Llevamos décadas trabajando la piedra natural con precisión y compromiso en cada proyecto."
      />
    </>
  );
}