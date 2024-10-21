import { Schema, model } from 'mongoose';
import { TPersonalInfo } from './personalInfo.interface'; // Adjust the import path as necessary

const personalInfoSchema = new Schema<TPersonalInfo>(
  {
    name: { type: String, required: [true, 'Name is required'] },
    title: { type: String, required: [true, 'Title is required'] },
    profilePicture: {
      type: String,
      required: [true, 'Profile picture URL is required'],
    },
    bio: { type: String, required: [true, 'Bio is required'] },
    aboutMe: { type: String, required: [true, 'About Me is required'] },
    contact: {
      email: { type: String, required: [true, 'Email is required'] },
      phone: { type: String, optional: true }, // Optional phone number
      github: { type: String, optional: true },
      address: { type: String, optional: true },
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  },
);

export const PersonalInfoModel = model<TPersonalInfo>(
  'PersonalInfo',
  personalInfoSchema,
);
