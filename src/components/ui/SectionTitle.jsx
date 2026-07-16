export default function SectionTitle({
  subtitle,
  title,
  description,
}) {
  return (
    <div className="max-w-3xl">

      {subtitle && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0F4C6B]">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-semibold leading-tight lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-neutral-600">
          {description}
        </p>
      )}

    </div>
  );
}