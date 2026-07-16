import { Link } from "react-router-dom";

export default function Button({
  to,
  children,
  className = "",
}) {
  return (
    <Link
      to={to}
      className={`
        group
        inline-flex
        items-center
        gap-3
        border-b
        border-current
        pb-1
        text-sm
        font-medium
        uppercase
        tracking-[0.22em]
        transition-all
        duration-300
        hover:opacity-70
        ${className}
      `}
    >
      <span>{children}</span>

      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}