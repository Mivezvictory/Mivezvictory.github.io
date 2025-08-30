import Image from 'next/image'
import type { Certification } from '@/lib/certifications'

export default function CertificationCard({ c }: { c: Certification }) {
  return (
    <div className="my-card">
      <div className="my-card-image">
        <Image src={c.image} alt={c.title} fill className="object-cover" sizes="(min-width: 768px) 512px, 100vw" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold">{c.title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{c.description}</p>
       
      </div>
    </div>
  )
}