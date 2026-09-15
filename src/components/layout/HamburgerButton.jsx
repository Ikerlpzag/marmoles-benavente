export default function HamburgerButton({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={open}
      className="relative z-[60] flex h-12 w-12 items-center justify-center xl:hidden"
    >
      <span
        className={`absolute h-[2px] w-7 bg-[#0A3F7A] transition-all duration-300 ${
          open ? "rotate-45" : "-translate-y-2"
        }`}
      />

      <span
        className={`absolute h-[2px] w-7 bg-[#0A3F7A] transition-all duration-300 ${
          open ? "opacity-0" : ""
        }`}
      />

      <span
        className={`absolute h-[2px] w-7 bg-[#0A3F7A] transition-all duration-300 ${
          open ? "-rotate-45" : "translate-y-2"
        }`}
      />
    </button>
  );
}