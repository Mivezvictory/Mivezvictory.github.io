'use client'
import { motion } from 'framer-motion'
import { experiences } from '@/lib/experiences'
import ExperienceCard from './ExperienceCard'
import Section from '../Section'

export default function Experiences() {
  return (
    <Section id="experiences" title="Experiences">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: {} }}
        className="grid md:grid-cols-1 gap-6"
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          >
            <ExperienceCard exp={exp} />
          </motion.div>
        ))}
      </motion.div> 
    </Section>
  )
}