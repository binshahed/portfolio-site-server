import { Application, Request, Response } from 'express';
import { authRoutes } from '../modules/auth/auth.routes';

import { userRouter } from '../modules/user/user.routes';
import { ProjectRouter } from '../modules/projects/projects.routes';
import { SkillRouter } from '../modules/skills/skills.routes';
import { blogRouter } from '../modules/blog/blog.routes';
import { ExperienceRouter } from '../modules/experience/experience.routes';
import { PersonalInfoRouter } from '../modules/personalInfo/personalInfo.routes';

const modulesRouters = [
  {
    path: '/api/auth',
    route: authRoutes,
  },

  {
    path: '/api/users',
    route: userRouter,
  },
  {
    path: '/api/projects',
    route: ProjectRouter,
  },
  {
    path: '/api/skills',
    route: SkillRouter,
  },
  {
    path: '/api/blogs',
    route: blogRouter,
  },
  {
    path: '/api/experience',
    route: ExperienceRouter,
  },
  {
    path: '/api/personalInfo',
    route: PersonalInfoRouter,
  },
];

export const routes = (app: Application) => {
  // root route
  app.get('/', (req: Request, res: Response) => {
    res.send('Shahed Portfolio');
  });

  // all routes
  modulesRouters.forEach((router) => app.use(router.path, router.route));

  // not found route
  app.route('*').all((req: Request, res: Response) => {
    res.send({
      success: false,
      statusCode: 404,
      message: 'Route Not Found',
    });
  });
};
