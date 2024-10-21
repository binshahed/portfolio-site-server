import { z } from 'zod';

// Create Project Validation Schema
const createSkillValidation = z.object({
  body: z.object({
    name: z.string({ message: 'Project name is required' }),
    imageUrl: z.string().url({ message: 'Image URL must be a valid URL' }),
  }),
});

// Update Project Validation Schema
const updateSkillValidation = z.object({
  body: z.object({
    name: z.string({ message: 'Project name is required' }).optional(),

    imageUrl: z
      .string()
      .url({ message: 'Image URL must be a valid URL' })
      .optional(),
  }),
});

export const SkillValidation = {
  createSkillValidation,
  updateSkillValidation,
};
