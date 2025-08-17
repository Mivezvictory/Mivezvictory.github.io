import Hero from '@/components/Hero'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Projects from '@/components/projects/Projects'
import Certification from '@/components/certifications/Certification'

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Certification />
      <Contact />
    </>
  )
}