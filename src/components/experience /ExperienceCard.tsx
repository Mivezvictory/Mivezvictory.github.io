import Image from 'next/image'
import type { Experience } from '@/lib/experiences'

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="my-experience-card">
      <div className="p-5">
        <h3 className="text-xl font-semibold">{exp.title}</h3>
        <p className="my-card-description">{exp.descriptions}</p>
        <ul className="my-row">
          {exp.tech.map((t) => (
            <li key={t} className="rounded-full bg-slate-100 dark:bg-slate-900 px-2 py-1">{t}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}