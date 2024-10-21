import { Schema, model } from 'mongoose';
import { TExperience } from './experience.interface';

const experienceSchema = new Schema<TExperience>(
  {
    companyName: { type: String, required: [true, 'Company Name is required'] },
    designation: { type: String, required: [true, 'Designation is required'] },
    startDate: { type: String, required: [true, 'Start Date is required'] },
    endDate: { type: String, required: [true, 'End Date is required'] },
    responsibilities: { type: [String], default: [] }, // Made optional
    technologies: { type: [String], required: [true, 'Technologies are required'] },
    achievements: { type: String, default: '' },
  },
  {
    timestamps: true,
  },
);

export const ExperienceModel = model<TExperience>('Experience', experienceSchema);
