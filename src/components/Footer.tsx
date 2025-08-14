export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/50">
      <div className="container py-8 text-sm text-slate-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Miyen‑Ebi Iyakoregha</p>
        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank" className="underline-link">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" className="underline-link">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}