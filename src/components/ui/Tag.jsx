export default function Tag({ children }) {
  return (
    <span className="rounded-full bg-neutral-100 px-3 py-1 text-sm">
      {children}
    </span>
  );
}