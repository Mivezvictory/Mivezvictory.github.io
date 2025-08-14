import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>
          {/* I’m an Azure Cloud Developer with four years of experience building event‑driven systems in C# and React.
          I focus on performance, reliability, and clear DX. */}
          Coming soon...
        </p>
        <p>
          {/* Recent work includes serverless order pipelines, API gateways, and modern frontends with Next.js and Tailwind. */}
        </p>
      </div>
    </Section>
  )
}