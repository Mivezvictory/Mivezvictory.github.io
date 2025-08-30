import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <p>
          I’m an Azure Cloud Developer (4+ years, AZ-204 certified) who builds reliable, 
          well-designed backends in C#/.NET and ships modern frontends with React + Vite, Next.js. 
        </p>
        <p>
            Currently, I am the cloud developer & architect at Value Partners Investments. 
            I am tasked with turning product requirements into secure, reliable systems. 
            I build .NET/C# backends, automate delivery with Azure DevOps CI/CD, 
            and stand up the Azure foundation needed for each project. This includes but is not limited to:
        </p>
            <ul>
                <li>Azure Functions</li>
                <li>App Services</li>
                <li>Static Web Apps</li>
                <li>Key Vaults</li>
                <li>Storage</li>
                <li>monitoring with Application Insights and Log Analytics</li>

            </ul>  
      </div>
    </Section>
  )
}