import { Schema, model } from 'mongoose';
import { TSkill } from './skills.interface';

const skillSchema = new Schema<TSkill>(
  {
    name: { type: String, unique: true, required: [true, 'Name is required'] },
    imageUrl: {
      type: String,
      default: 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png',
    },
  },
  {
    timestamps: true,
  },
);

export const SkillModel = model<TSkill>('skill', skillSchema);
