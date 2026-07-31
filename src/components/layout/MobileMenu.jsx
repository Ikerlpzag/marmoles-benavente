import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { navigation } from "../../data/navigation";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MobileMenu({
  open,
  onClose,
  currentPath,
}) {
  const handleClick = (href) => {
    if (currentPath === href) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-40 bg-[var(--background)] lg:hidden"
        >
          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex h-full flex-col items-center justify-center gap-8 pt-20"
          >
            {navigation.map((item) => (
              <motion.div
                key={item.href}
                variants={itemVariants}
              >
                <NavLink
                  to={item.href}
                  onClick={() => handleClick(item.href)}
                    className={({ isActive }) =>
                    `font-['Cormorant_Garamond']
                    text-4xl sm:text-5xl
                    tracking-normal
                    transition-colors
                    duration-300
                    ${
                        isActive
                        ? "text-[#0A3F7A]"
                        : "text-[var(--text)] hover:text-[#0A3F7A]"
                    }`
                }
                >
                  {item.title}
                </NavLink>
              </motion.div>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}