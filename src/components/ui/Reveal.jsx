import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";

export default function Reveal({
  children,
  className = "",
  variants = fadeUp,
}) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}