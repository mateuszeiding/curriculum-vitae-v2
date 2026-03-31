import type { ExperienceModel } from '@data/models/ExperienceModel'

export const getExperience: ExperienceModel[] = [
  {
    project: 'Medical Administration',
    techStack: ['Vue', '.NET'],
    description:
      'Group of modules for nurses designed to help manage medications and prescriptions.',
    bulletPoints: [
      {
        value: `Designed a polymorphic dosage configuration model where each scheduling variant
        owns its form initialization, validation schema and contract mapping - driving
        dynamic form rendering and reactive variant switching based on observed field changes`,
        emphasis: [
          'polymorphic dosage configuration model',
          'form initialization, validation schema, and contract mapping',
          'dynamic form rendering',
          'reactive variant switching',
        ],
      },
      {
        value: `Implemented validation logic preventing overlapping dose configurations with
        different recurrence patterns and timeslots`,
        emphasis: ['validation', 'preventing overlapping', 'different recurrence patterns'],
      },
    ],
  },
  {
    project: 'Internship program',
    techStack: ['Vue', '.NET'],
    description: 'Mentored a group of 12 interns during a 2-month training program.',
    bulletPoints: [
      {
        value: `Guided frontend interns in everyday development tasks and code reviews
        to improve code quality and consistency`,
        emphasis: ['Guided frontend interns', 'code reviews', 'code quality', 'consistency'],
      },
      {
        value: `Ensured alignment between design and frontend during implementation`,
        emphasis: ['alignment between design and frontend'],
      },
      {
        value: `Helped design interns understand how layout and spacing decisions affect implementation`,
        emphasis: ['design', 'decisions affect implementation'],
      },
    ],
  },
  {
    project: 'Design System',
    techStack: ['WebComponents'],
    description: `Design system created for the entire department to ensure consistency and
    reusability across projects.`,
    bulletPoints: [
      {
        value: `Implemented a design system on top of Bootstrap and developed reusable components
        using Stencil.js`,
        emphasis: ['Implemented a design system', 'reusable components'],
      },
      {
        value: 'Supported other teams during migration to the new system',
        emphasis: ['Supported other teams'],
      },
      {
        value: `Delivered biweekly updates on project progress through Teams posts and
        department meetings.`,
        emphasis: ['biweekly updates'],
      },
    ],
  },
  {
    project: 'Authorization Administration',
    techStack: ['Vue', '.NET'],
    description: `System for managing users, roles, permissions and organizational structure,
    integrated with a legacy application.`,
    bulletPoints: [
      {
        value: `Implemented a feature for managing access rights within a
        deeply nested organizational structure`,
        emphasis: ['deeply nested organizational structure'],
      },
      {
        value: `Simplified backend service handling by introducing a unified service manager
        for multiple data sources`,
        emphasis: ['Simplified backend service', 'unified service manager'],
      },
      {
        value: `Refactored API endpoints and DTOs to improve consistency, reduce duplication
        and simplify integration logic`,
        emphasis: ['Refactored', 'consistency', 'reduce duplication', 'simplify integration'],
      },
    ],
  },
  {
    project: 'Collaboration Tool',
    techStack: ['React', '.NET', 'Angular'],
    description: `Module supporting employee cooperation through group assignments,
    task management, status updates and comments.`,
    bulletPoints: [
      {
        value: `Took ownership of the frontend and improved both UI and UX in
        collaboration with the PO and designer`,
        emphasis: ['collaboration with the PO and designer'],
      },
      {
        value: `Refactored the existing codebase to simplify state flow using React Router
        Data APIs and reduce prop drilling, resulting in ~30% less code and improved
        long-term maintainability`,
        emphasis: [
          'Refactored',
          'simplify state flow',
          '~30% less code',
          'long-term maintainability',
        ],
      },
    ],
  },
  {
    project: 'External Integration API',
    techStack: ['.NET'],
    description: `An integration API that enables customers to use modules and applications
    provided by multiple third-party vendors.`,
    bulletPoints: [],
  },
]
