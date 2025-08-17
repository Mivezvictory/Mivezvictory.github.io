'use client'
import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import ProjectCard from './ProjectCard'
import Section from '../Section'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: {} }}
        className="grid md:grid-cols-2 gap-6"
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          >
            <ProjectCard p={p} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}