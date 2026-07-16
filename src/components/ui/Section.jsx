import Container from "./Container";

export default function Section({
  children,
  border = false,
  spacing = "default",
  className = "",
}) {
  const spacingMap = {
    compact: "py-24",
    default: "py-32",
    large: "py-40",
    hero: "py-48",
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