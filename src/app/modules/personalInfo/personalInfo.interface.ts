export type TPersonalInfo = {
  name: string;
  title: string; // e.g., "Full Stack Developer"
  profilePicture: string; // URL to your profile picture
  bio: string;
  aboutMe: string; // A brief introduction about yourself
  contact: {
    email: string; // Your email address
    phone?: string; // Optional phone number
    github?: string; // Optional
    address: string
  };
};
