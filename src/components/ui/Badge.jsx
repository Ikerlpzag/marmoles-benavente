export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-700">
      {children}
    </span>
  );
}