import { z } from 'zod';

// Create Personal Information Validation Schema
const createPersonalInfoValidation = z.object({
  body: z.object({
    name: z.string({ message: 'Name is required' }),
    title: z.string({ message: 'Title is required' }),
    profilePicture: z
      .string()
      .url({ message: 'Profile picture must be a valid URL' }),
    bio: z.string({ message: 'Bio is required' }),
    aboutMe: z.string({ message: 'About Me is required' }),
    contact: z.object({
      email: z
        .string()
        .email({ message: 'Email must be a valid email address' }),
      phone: z.string().optional(),
      github: z
        .string()
        .url({ message: 'GitHub URL must be a valid URL' })
        .optional(),
      address: z.string().optional(), // Address validation corrected
    }),
  }),
});

// Update Personal Information Validation Schema
const updatePersonalInfoValidation = z.object({
  body: z.object({
    name: z.string({ message: 'Name is required' }).optional(),
    title: z.string({ message: 'Title is required' }).optional(),
    profilePicture: z
      .string()
      .url({ message: 'Profile picture must be a valid URL' })
      .optional(),
    bio: z.string({ message: 'Bio is required' }).optional(),
    aboutMe: z.string({ message: 'About Me is required' }).optional(),
    contact: z
      .object({
        email: z
          .string()
          .email({ message: 'Email must be a valid email address' })
          .optional(),
        phone: z.string().optional(),
        github: z
          .string()
          .url({ message: 'GitHub URL must be a valid URL' })
          .optional(),
        address: z.string().optional(), // Address validation corrected
      })
      .optional(),
  }),
});

export const PersonalInfoValidation = {
  createPersonalInfoValidation,
  updatePersonalInfoValidation,
};
