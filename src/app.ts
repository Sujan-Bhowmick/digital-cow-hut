import express, { Application,  Request, Response } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middleware/globalErrorHandler';
import routes from './app/router';
import notFoundError from './app/middleware/notFoundError';
import cookieParser from 'cookie-parser';

const app: Application = express();
app.use(cors());
app.use(cookieParser())

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Routes
// app.use('/api/v1/users/', usersRouter)
app.use('/api/v1/', routes);

app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfuly');
});

// global error handler
app.use(globalErrorHandler);
app.use(notFoundError)

// const testId = async () => {
//   const testId = await generateSellerId();
//   console.log(testId);
// };

// testId();
export default app;
