import Image from 'next/image'
import type { Certification } from '@/lib/certification'

export default function CertificationCard({ p }: { p: Certification }) {
  return (
    <div className="group rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-[16/9] bg-slate-100 dark:bg-slate-900">
        <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(min-width: 768px) 512px, 100vw" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
         
        </ul>
      </div>
    </div>
  )
}