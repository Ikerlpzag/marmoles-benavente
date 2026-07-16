import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { navigation } from "../../data/navigation";

import Container from "../ui/Container";
import Button from "../ui/Button";

import logo from "../../assets/images/logo.webp";

export default function Navbar() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = !isHome || scrolled;

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-500
        ${
          solid
            ? "border-b border-[var(--border)] bg-white/90 backdrop-blur-md"
            : "bg-transparent"
        }
      `}
    >
      <Container>
        <div className="flex h-24 items-center justify-between">

          <NavLink to="/">
            <img
              src={logo}
              alt="Mármoles Benavente"
              className="h-12 w-auto"
            />
          </NavLink>

          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `
                  text-[15px]
                  tracking-wide
                  transition-colors
                  duration-300
                  ${
                    isActive
                      ? "text-[var(--text)]"
                      : solid
                      ? "text-[var(--text-light)] hover:text-[var(--text)]"
                      : "text-[var(--text)] hover:opacity-70"
                  }
                  `
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>

            <Button
              to="/contact"
              className="text-[var(--text)]"
            >
            Contactar
          </Button>

        </div>
      </Container>
    </header>
  );
}