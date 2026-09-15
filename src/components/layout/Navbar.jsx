import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Container from "../ui/Container";
import Button from "../ui/Button";

import { navigation } from "../../data/navigation";

import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";

import logo from "../../assets/images/logo.webp";

export default function Navbar() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = menuOpen || !isHome || scrolled;

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "border-b border-[var(--border)] bg-white"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-20 lg:h-24 items-center justify-between">
            <NavLink
              to="/"
              onClick={() => {
                if (location.pathname === "/") scrollTop();
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 sm:gap-3"
            >
              <img
                src={logo}
                alt="Mármoles Benavente"
                className="h-10 sm:h-11 lg:h-14 w-auto"
              />

              <div className="flex flex-col leading-none">
                <span
                  className="text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-[0.35em]"
                  style={{ color: "#0A3F7A" }}
                >
                  MÁRMOLES
                </span>

                <span
                  className="font-['Cormorant_Garamond'] text-[1.15rem] sm:text-[1.35rem] lg:text-[2rem] font-semibold tracking-[0.05em]"
                  style={{ color: "#0A3F7A" }}
                >
                  BENAVENTE
                </span>
              </div>
            </NavLink>

            {/* Escritorio */}

            <nav className="hidden xl:flex items-center gap-8">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => {
                    if (location.pathname === item.href) {
                      scrollTop();
                    }
                  }}
                  className={({ isActive }) =>
                    `text-[15px] tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--text)]"
                        : solid
                        ? "text-[var(--text-light)] hover:text-[var(--text)]"
                        : "text-[var(--text)] hover:text-black"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </nav>

            <div className="hidden xl:block">
              <Button to="/contact">
                Contactar
              </Button>
            </div>

            {/* Móvil */}

            <HamburgerButton
              open={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </Container>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        currentPath={location.pathname}
      />
    </>
  );
}