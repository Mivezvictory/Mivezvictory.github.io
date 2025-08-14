'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="sticky top-0 z-50 backdrop-blur border-b border-slate-200/60 dark:border-slate-800/50 bg-white/70 dark:bg-slate-950/50"
    >
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Miyen‑Ebi Iyakoregha
        </Link>
        <nav className="hidden sm:flex gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary-600 dark:hover:text-primary-400">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="/resume.pdf" className="text-sm border rounded-full px-3 py-1 hover:shadow">
            Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}