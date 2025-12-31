import Image from 'next/image'
import type { Project } from '@/lib/projects'

export default function ProjectCard({ p }: { p: Project }) {
  const primaryLink = p.href || p.repo || '#'

  const statusColors = {
    'active': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
    'in-progress': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100',
    'completed': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100'
  }

  const statusLabels = {
    'active': 'Active',
    'in-progress': 'In Progress',
    'completed': 'Completed'
  }

  return (
    <div 
      onClick={() => window.open(primaryLink, '_blank')}
      className="my-card cursor-pointer hover:opacity-90 transition-opacity"
    >
      <div className="my-card-image">
        <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(min-width: 768px) 512px, 100vw" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold flex-1">{p.title}</h3>
          {p.status && (
            <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ml-2 ${statusColors[p.status]}`}>
              {statusLabels[p.status]}
            </span>
          )}
        </div>
        {p.lastUpdated && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
            Updated: {new Date(p.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
          </p>
        )}
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
          {p.tech.map((t) => (
            <li key={t} className="rounded-full bg-slate-100 dark:bg-slate-900 px-2 py-1">{t}</li>
          ))}
        </ul>
        <div className="mt-4 flex gap-4 text-sm" onClick={(e) => e.stopPropagation()}>
          {p.href && (
            <a className="underline-link" href={p.href} target="_blank" rel="noopener noreferrer">Live</a>
          )}
          {p.repo && (
            <a className="underline-link" href={p.repo} target="_blank" rel="noopener noreferrer">Code</a>
          )}
        </div>
      </div>
    </div>
  )
}