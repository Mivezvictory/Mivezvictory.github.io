import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
        <p className="text-slate-600 dark:text-slate-300">Have a role or idea? Let’s talk.</p>
        <div className="mt-4 flex gap-3">
          <a href="mailto:Mivez70@gmail.com" className="contact-link-style">Email me</a>
          <a href="www.linkedin.com/in/victory-iyakoregha" className="contact-link-style">LinkedIn</a>
        </div>
      </div>
    </Section>
  )
}