'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="section min-h-[70vh] grid place-items-center">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Azure Cloud Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-lg text-slate-600 dark:text-slate-300"
        >
          C#, .NET, React, Azure Functions — shipping resilient, event‑driven systems.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#projects" className="hero-btn-style">
            View my work
          </a>
          <a href="/resume.pdf" className="hero-btn-style">
            Download résumé
          </a>
        </motion.div>
      </div>
    </div>
  )
}