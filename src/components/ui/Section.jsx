import Container from "./Container";

export default function Section({
  children,
  border = false,
  spacing = "default",
  className = "",
}) {
  const spacingMap = {
    compact: "py-16 md:py-20 lg:py-24",
    default: "py-20 md:py-24 lg:py-32",
    large: "py-24 md:py-32 lg:py-40",
    hero: "py-32 md:py-40 lg:py-48",
  };

  return (
    <section
      className={`
        ${border ? "border-t border-[var(--border)]" : ""}
        ${spacingMap[spacing]}
        ${className}
      `}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}