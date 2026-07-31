export default function SectionHeader({
  eyebrow,
  title,
  align = "left",
  className = "",
}) {
  return (
    <div
      className={`
        ${align === "center" ? "text-center mx-auto" : ""}
        ${className}
      `}
    >
      <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[var(--text-light)]">
        {eyebrow}
      </p>

      <h2 className="max-w-3xl text-4xl leading-tight md:text-5xl">
        {title}
      </h2>
    </div>
  );
}