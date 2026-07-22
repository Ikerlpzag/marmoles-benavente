import { motion } from "framer-motion";

import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

import { staggerContainer, fadeUp } from "../../animations/variants";
import { projects } from "../../data/projects";

export default function FeaturedProjects() {
  return (
    <Section border spacing="large">
      <Reveal>
        <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="PROYECTOS"
            title="Algunos de nuestros trabajos."
          />

          <div className="hidden md:block">
            <Button to="/projects">
              Ver todos
            </Button>
          </div>
        </div>
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={fadeUp}
          >
            <img
              src={project.image}
              alt={project.title}
              className="aspect-[4/5] w-full object-cover"
            />

            <p className="mt-5 text-xs uppercase tracking-[0.3em] text-[var(--text-light)]">
              {project.category}
            </p>

            <h3 className="mt-2 text-xl leading-snug">
              {project.title}
            </h3>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-10 md:hidden">
        <Button to="/projects">
          Ver todos
        </Button>
      </div>
    </Section>
  );
}