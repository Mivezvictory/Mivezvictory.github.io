import Image from 'next/image'
import type { Experience } from '@/lib/experiences'

export default function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <div className="my-experience-card">
      <div className="p-5">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-xl font-semibold">{exp.companyName}</h3>
          <span className="text-sm text-slate-500 whitespace-nowrap ml-4">
            {exp.startDate} – {exp.endDate ?? 'Present'}
          </span>
        </div>
        <h5 className="text-base font-medium text-slate-700 dark:text-slate-200 mb-2">{exp.jobTitle}</h5>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{exp.descriptions}</p>
        <ul className="my-row">
          {exp.tech.map((t) => (
            <li key={t} className="rounded-full bg-slate-100 dark:bg-slate-900 px-2 py-1">{t}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}