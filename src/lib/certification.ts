export type Certification = {
  slug: string
  title: string
  description: string
  image: string
 
}

export const Certifications: Certification[] = [
    {
        slug: 'Azure-Developer-Certification',
        title: 'Azure Developer Certification',
        description: 'The AZ-204 certification is a professional credential offered to developers '
        +'who want to build, deploy, optimize and implement Azure compute solutions and applications. ',
        image: '/AZ-204-tag.jpg',
    },
]