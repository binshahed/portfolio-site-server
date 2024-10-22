import { Schema, model } from 'mongoose';
import { TEducation } from './education.interface';

// Define the education schema based on the TEducation type
const educationSchema = new Schema<TEducation>(
  {
    department: { type: String, required: [true, 'Department is required'] },
    institute: { type: String, required: [true, 'Institute is required'] },
    degree: { type: String, required: [true, 'Degree is required'] },
    startYear: { type: String, required: [true, 'Start year is required'] },
    endYear: { type: String, required: [true, 'End year is required'] },
  },
  {
    timestamps: true,
  },
);

// Create the Mongoose model
export const EducationModel = model<TEducation>('Education', educationSchema);
