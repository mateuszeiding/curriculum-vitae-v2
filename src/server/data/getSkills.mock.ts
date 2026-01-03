import type { ISkillGroupModel } from '@data/models/SkillModel'

export const getSkills: ISkillGroupModel[] = [
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'React',
        level: 3,
        list: ['React Router', 'React Query', 'TanStack Form', 'usehooks-ts'],
      },
      {
        name: 'UI',
        level: 3,
        list: ['Scss', 'Figma', 'Bootstrap', 'a11y'],
      },
      {
        name: 'Vue',
        level: 2,
        list: ['Vue Router', 'Vee-validate', 'pinia'],
      },
      {
        name: 'Angular 12+',
        level: 1,
        list: [],
      },
      {
        name: 'Web Components',
        level: 1,
        list: ['Lit Elements', 'Stencil.js'],
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: '.NET',
        level: 2,
        list: ['Entity Framework', 'LINQ', 'Swagger', 'CQRS', 'Repository pattern', 'REST API'],
      },
      {
        name: 'Database',
        level: 1,
        list: ['MSSQL'],
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'Workflow',
        list: ['Azure DevOps', 'Docker', 'CI/CD', 'Webpack', 'Vite', 'Git'],
      },
      {
        name: 'Static Analysis',
        list: ['ESLint', 'Prettier', 'SonarQube', 'Biome.js'],
      },
      {
        name: 'Testing',
        list: ['MSW', 'Vitest/Jest', 'StoryBook', 'testing-library', 'NUnit'],
      },
    ],
  },
  {
    name: 'Certificates',
    skills: [
      {
        name: 'Professional Scrum Master 1',
        list: [],
        link: 'https://www.credly.com/badges/175db99c-c1be-4ecd-a6c4-e6d8f4738d55',
      },
    ],
  },
]
