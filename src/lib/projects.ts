export type Project = {
  slug: string
  title: string
  description: string
  tech: string[]
  image: string
  href?: string
  repo?: string
}

export const projects: Project[] = [
    {
        slug: 'spotinet-client',
        title: 'SpotiNet.Client',
        description: 'An opensoource .NET NuGet package providing a type-safe, easy-to-use client library for interacting with the Spotify Web API. Built with C# and published on NuGet. 900+ total downloads.',
        tech: ['C#', '.NET', 'NuGet', 'Spotify API'],
        image: '/spoticlient.png',
        href: 'https://www.nuget.org/packages/SpotiNet.Client/',
        repo: 'https://github.com/Mivezvictory/SpotiNet.Client'
    },
    {
        slug: 'credit-graph-explorer',
        title: 'Credit Graph Explorer',
        description: 'A full-stack application for visualizing and exploring artist credit relationships and networks using graph technology.',
        tech: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Graph Database'],
        image: '/credit-graph-explorer.png',
        href: 'https://github.com/Mivezvictory/credit-graph-explorer',
        repo: 'https://github.com/Mivezvictory/credit-graph-explorer'
    },
    {
        slug: "notification-system",
        title: "Notification System (Core, Services, API)",
        description:
            "End-to-end notification system: Core abstractions (models, interfaces, factories), concrete Email/SMS services," +
            " a generic manager layer, and an ASP.NET Core Web API with Swagger. Includes xUnit test suites and is CI/CD ready.",
        tech: ["C#", "ASP.NET", "xUnit", "Swagger/OpenAPI"],
        image: "/Notifications.png",
        href: "https://github.com/Mivezvictory/NotificationApplication.git#readme",
        repo: "https://github.com/Mivezvictory/NotificationApplication.git"
    },
]