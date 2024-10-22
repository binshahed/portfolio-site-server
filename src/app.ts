import express, { Request, Response } from 'express';
import cors from 'cors';
import { routes } from './app/router/router';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://portfolio-shahed-dashboard.vercel.app',
      'https://binshahed-portfolio.vercel.app',
    ],
    credentials: true,
  }),
);

routes(app);

// Global error handler
app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
