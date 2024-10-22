import { Schema, model } from 'mongoose';
import { TProject } from './projects.interface';

const serviceSchema = new Schema<TProject>(
  {
    name: { type: String, unique: true, required: [true, 'Name is required'] },
    description: { type: String, required: [true, 'Description is required'] },
    liveLink: { type: String, required: [true, 'Live link is required'] },
    clientGitLink: { type: String },
    serverGitLink: { type: String },
    technology: { type: [String] },

    imageUrl: {
      type: String,
      default: 'https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png',
    },
  },
  {
    timestamps: true,
  },
);

export const ProjectModel = model<TProject>('Project', serviceSchema);
