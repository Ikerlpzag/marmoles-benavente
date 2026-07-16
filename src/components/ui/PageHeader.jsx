import Container from "./Container";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";

export default function PageHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <section className="border-b border-neutral-200 bg-[#F8F6F2] py-32">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#0F4C6B]">
              {eyebrow}
            </p>
          )}

          <h1 className="text-5xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-8 text-lg leading-8 text-neutral-600">
            {description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}