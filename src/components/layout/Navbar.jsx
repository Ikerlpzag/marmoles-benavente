import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";

import Container from "../ui/Container";
import Button from "../ui/Button";

import logo from "../../assets/images/logo.webp";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-white/90 backdrop-blur-sm">
      <Container>

        <div className="flex h-24 items-center justify-between">

          <NavLink to="/">
            <img
              src={logo}
              alt="Mármoles Benavente"
              className="h-12 w-auto"
            />
          </NavLink>

          <nav className="hidden lg:flex gap-12 text-[15px]">

            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-black"
                      : "text-neutral-500 hover:text-black"
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

          </nav>

          <Button to="/contact">
            Presupuesto
          </Button>

        </div>

      </Container>
    </header>
  );
}