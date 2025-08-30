import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>
          I am a developer who loves thinking about software and cloud infrastructure. 
          I specialize in backend engineering on Azure, designing, building, and operating 
          production APIs and services in C#/.NET. 
        </p>
        <p>
            At Value Partners Investments I turn requirements into secure, reliable systems, 
            lead Salesforce integrations, and own delivery end-to-end: CI/CD with Azure DevOps, 
            infrastructure-as-code, and observability with Application Insights and Log Analytics. 
            I’m AZ-204 certified with 4+ years’ experience, and I prioritize clean architecture,
             performance, and reliable releases.

        </p>
        <p> 
            I mentor developers (including 10 University of Manitoba co-op students) 
            and was named their Science Co-op Supervisor of the Year in 2023. Outside work, 
            I’m deep into music: playing, discovering new artists, and curating playlists for friends, 
            because great flow and rhythm matter in code and in life.
        </p>
             
      </div>
    </Section>
  )
}