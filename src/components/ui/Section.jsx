import Container from "./Container";

export default function Section({
  children,
  className = "",
}) {
  return (
    <section className={`py-24 lg:py-32 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}