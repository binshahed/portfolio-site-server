import { z } from 'zod';

// Create Education Validation Schema
const createEducationValidation = z.object({
  body: z.object({
    department: z.string({ message: 'Department is required' }),
    institute: z.string({ message: 'Institute is required' }),
    degree: z.string({ message: 'Degree is required' }),
    startYear: z.string({ message: 'Start year is required' }),
    endYear: z.string({ message: 'End year is required' }),
  }),
});

// Update Education Validation Schema
const updateEducationValidation = z.object({
  body: z.object({
    department: z.string({ message: 'Department is required' }).optional(),
    institute: z.string({ message: 'Institute is required' }).optional(),
    degree: z.string({ message: 'Degree is required' }).optional(),
    startYear: z.string({ message: 'Start year is required' }).optional(),
    endYear: z.string({ message: 'End year is required' }).optional(),
  }),
});

export const EducationValidation = {
  createEducationValidation,
  updateEducationValidation,
};
