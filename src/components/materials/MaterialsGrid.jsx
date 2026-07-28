import Reveal from "../ui/Reveal";

export default function MaterialsGrid({ materials }) {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-5">
      {materials.map((material) => (
        <Reveal key={material.title}>
          <article className="group cursor-pointer">
            <div className="overflow-hidden">
              <img
                src={material.image}
                alt={material.title}
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            <h3 className="mt-5 text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-[var(--primary)]">
              {material.title}
            </h3>
          </article>
        </Reveal>
      ))}
    </div>
  );
}