import { ReactNode } from 'react'

export default function Section({ id, title, children }: { id: string; title?: string; children: ReactNode }) {
  return (
    <section id={id} className="section">
      {title && <h2 className="text-3xl md:text-4xl font-semibold mb-6">{title}</h2>}
      {children}
    </section>
  )
}