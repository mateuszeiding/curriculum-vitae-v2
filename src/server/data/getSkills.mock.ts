import type { SkillGroupModel } from '@data/models/SkillModel'

export const getSkills: SkillGroupModel[] = [
  {
    name: 'UI Development',
    skills: [
      {
        name: 'React.js',
        level: 3,
        list: ['React Router', 'React Query', 'Tanstack Form', 'usehooks-ts'],
      },
      {
        name: 'Vue',
        level: 2,
        list: ['Vue Router', 'Vee-validate', 'pinia'],
      },
      {
        name: 'Angular 12+',
        level: 1,
        list: ['Vue Router'],
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
        list: ['Entity Framework', 'LINQ', 'CQRS', 'Repository pattern', 'REST API'],
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'Tools',
        list: [
          'Git',
          'Azure DevOps',
          'Figma',
          'ESLint',
          'SonarQube',
          'MSW',
          'Vim motions',
          'Docker',
          'Swagger',
          'NPM Registry',
          'Biome.js',
        ],
      },
      {
        name: 'Testing',
        list: ['MSW', 'Vitest', 'Jest', 'StoryBook', 'testing-library', 'Postman', 'NUnit'],
      },
      {
        name: 'Bundlers',
        list: ['Webpack', 'Vite'],
      },
    ],
  },
]
