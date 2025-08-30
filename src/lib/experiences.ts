export type Experience = {
    slug: string
    companyName: string
    jobTitle: string
    descriptions: string
    tech: string[]
    startDate: string
    endDate: string 
}

export const experiences : Experience[] = [
    {
        slug: 'VPI-experience',
        companyName: 'Value Partners Investments',  
        jobTitle: 'Azure Cloud Developer & Architect ',
        descriptions:   "I build secure, scalable cloud software and own it in production, shipping via automated deployments, real-time monitoring, and continuous hardening. I also modernize existing systems to boost performance, resilience, and maintainability." +
                        "I lead Salesforce custom apps and integrations tied to measurable business outcomes, and I design CI/CD pipelines that accelerate delivery. I mentor developers, including 10 University of Manitoba co-op students, and was named University of Manitoba Science Co-op Supervisor of the Year (2023).",
        tech: ["Azure", "C#", ".NET", "ASP.NET", "xUnit", "Salesforce"] ,
        startDate: 'May 2021',
        endDate: 'Present'   
    },
    {
        slug: 'CEOS-experience',
        companyName: 'Center For Earth Observation Science',
        jobTitle:  'Junior Database & Web Developer ',
        descriptions:   "Developed Python scripts and desktop apps for data processing and visualization. " + 
                        "Standardized intake with optimized FME workflows and server endpoints and document everything using LaTeX. " +
                        "Partnered with the Canadian Consortium for Arctic Data Interoperability to implement ERDDAP-based interoperability." +
                        "                                                                                                                   " + 
                        "                                                                                                                   ",
        tech: ["React", "JS", "Python", "MongoDB"],    
        startDate: 'May 2019',
        endDate: 'May 2021'
    },

     {
        slug: 'Commetix-experience',
        companyName: 'Commetix Systems Inc.',  
        jobTitle:   'Intermediate Software Developer ',
        descriptions:   "Partnered with teammates to design, implement, and validate major features while improving existing codebases. " +
        "Diagnosed and resolved bugs, testing thoroughly, and coordinate with stakeholders and end users on timelines, technical challenges, and infrastructure components.",
        tech: ["React", "TS"],
        startDate: 'October 2020',
        endDate: 'February 2021'    
    },

    {
        slug: 'OTS-experience',
        companyName: 'OnTheStep', 
        jobTitle:   'Developer ',
        descriptions:   "I developed and maintained mobile front ends for iOS and Android, implementing and refining algorithms that power core in-app functionality. I also upgraded XML, Node.js, and JavaScript codebases for performance and scalability, and handled customer support plus partner recruitment and onboarding.",
        tech: ["Firebase", "JS"],
        startDate: 'September 2018',
        endDate: 'June 2019'    
    },
]