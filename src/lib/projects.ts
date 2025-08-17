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
        slug: 'Deep-Dive-Recommender',
        title: 'Deep Dive Recommender',
        description: 'Vite.js + react webapp, powered by Azure Functions & Spotify APIs to find hiden gems and popular hits from artist/band of your choice',
        tech: ['Vite.js', 'React', 'TypeScript', 'C#', 'MUI', 'Azure functions', 'Azure static web apps', 'Azure cosmos DB'],
        image: '/DeepDiveRecommender.png',
        href: 'https://icy-island-05b24a40f.1.azurestaticapps.net',
        repo: 'https://github.com/Mivezvictory/Deep-Dive-Recommender.git'
    },
    {
        slug: "notification-system",
        title: "Notification System (Core, Services, API)",
        description:
            "End-to-end notification system: Core abstractions (models, interfaces, factories), concrete Email/SMS services," +
            " a generic manager layer, and an ASP.NET Core Web API with Swagger. Includes xUnit test suites and is CI/CD ready.",
        tech: ["C#", ".NET 8", "ASP.NET Core Web API", ".NET Standard 2.1 (Core)", "xUnit", "Swagger/OpenAPI"],
        image: "/Notifications.png",
        href: "https://github.com/Mivezvictory/NotificationApplication.git#readme",
        repo: "https://github.com/Mivezvictory/NotificationApplication.git"
    },
  
//   {
//     slug: 'spotify-integration',
//     title: 'Spotify Auth + Explore',
//     description: 'OAuth flow to explore user playlists; Azure Function backend in C#.   ...TODO change later',
//     tech: ['React', 'Next.js', 'C#', 'Azure Functions'],
//     image: '/images/spotify.png',
//   },
]