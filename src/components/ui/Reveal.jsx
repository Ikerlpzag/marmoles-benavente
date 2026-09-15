import { motion, useReducedMotion } from "framer-motion";

import { fadeUp } from "../../animations/variants";

export default function Reveal({
  children,
  className = "",
  variants = fadeUp,
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : variants}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}