import { z } from 'zod';

// Create Experience Validation Schema
const createExperienceValidation = z.object({
  body: z.object({
    companyName: z.string({ message: 'Company Name is required' }),
    designation: z.string({ message: 'Designation is required' }),
    startDate: z.string({ message: 'Start Date is required' }),
    endDate: z.string({ message: 'End Date is required' }),
    technologies: z.array(z.string({ message: 'technologies is required' })),
    responsibilities: z
      .array(z.string({ message: 'Responsibilities must be strings' }), {
        message: 'Responsibilities are required',
      })
      .min(1, { message: 'At least one responsibility is required' })
      .optional(),
    achievements: z
      .string({ message: 'Achievements must be strings' })
      .optional(),
  }),
});

// Update Experience Validation Schema
const updateExperienceValidation = z.object({
  body: z.object({
    companyName: z.string({ message: 'Company Name is required' }).optional(),
    designation: z.string({ message: 'Designation is required' }).optional(),
    startDate: z.string({ message: 'Start Date is required' }).optional(),
    endDate: z.string({ message: 'End Date is required' }).optional(),
    technologies: z
      .array(z.string({ message: 'technologies is required' }))
      .optional(),
    responsibilities: z
      .array(z.string({ message: 'Responsibilities must be strings' }))
      .min(1, { message: 'At least one responsibility is required' })
      .optional(),
    achievements: z
      .string({ message: 'Achievements must be strings' })
      .optional(),
  }),
});

export const ExperienceValidation = {
  createExperienceValidation,
  updateExperienceValidation,
};
