import { Link } from "react-router-dom";

export default function Button({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 uppercase tracking-[0.18em] text-sm font-semibold ${className}`}
    >
      <span>{children}</span>

      <span className="transition-transform duration-300 group-hover:translate-x-2">
        →
      </span>
    </Link>
  );
}