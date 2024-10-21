import { z } from 'zod';

// Create Project Validation Schema
const createProjectValidation = z.object({
  body: z.object({
    name: z.string({ message: 'Project name is required' }),
    description: z.string({ message: 'Project description is required' }),
    liveLink: z
      .string({ message: 'Project live link is required' })
      .url({ message: 'Live link must be a valid URL' }),
    clientGitLink: z
      .string()
      .url({ message: 'Client Git link must be a valid URL' })
      .optional(),
    serverGitLink: z
      .string()
      .url({ message: 'Server Git link must be a valid URL' })
      .optional(),
    technology: z
      .array(z.string({ message: 'Each technology must be a string' }))
      .nonempty({ message: 'Project technology is required' }),
    imageUrl: z
      .string()
      .url({ message: 'Image URL must be a valid URL' })
      .optional(),
  }),
});

// Update Project Validation Schema
const updateProjectValidation = z.object({
  body: z.object({
    name: z.string({ message: 'Project name is required' }).optional(),
    description: z
      .string({ message: 'Project description is required' })
      .optional(),
    liveLink: z
      .string()
      .url({ message: 'Live link must be a valid URL' })
      .optional(),
    clientGitLink: z
      .string()
      .url({ message: 'Client Git link must be a valid URL' })
      .optional(),
    serverGitLink: z
      .string()
      .url({ message: 'Server Git link must be a valid URL' })
      .optional(),
    technology: z
      .array(z.string({ message: 'Each technology must be a string' }))
      .optional(),
    imageUrl: z
      .string()
      .url({ message: 'Image URL must be a valid URL' })
      .optional(),
  }),
});

export const ProjectValidation = {
  createProjectValidation,
  updateProjectValidation,
};
