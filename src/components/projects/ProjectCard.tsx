import Image from 'next/image'
import type { Project } from '@/lib/projects'

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="my-card">
      <div className="my-card-image">
        <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(min-width: 768px) 512px, 100vw" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
          {p.tech.map((t) => (
            <li key={t} className="rounded-full bg-slate-100 dark:bg-slate-900 px-2 py-1">{t}</li>
          ))}
        </ul>
        <div className="mt-4 flex gap-4 text-sm">
          {p.href && (
            <a className="underline-link" href={p.href} target="_blank">Live</a>
          )}
          {p.repo && (
            <a className="underline-link" href={p.repo} target="_blank">Code</a>
          )}
        </div>
      </div>
    </div>
  )
}