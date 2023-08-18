import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();
import globalErrorHandler from './app/middleware/globalErrorHandler';
import routes from './app/router';
import notFoundError from './app/middleware/notFoundError';
import cookieParser from 'cookie-parser';

app.use(cors());
app.use(cookieParser())

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Routes
// app.use('/api/v1/users/', usersRouter)
app.use('/api/v1/', routes);

// testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // throw new Error('ore baba error')
//   // next('ore baba error')
// });

// global error handler
app.use(globalErrorHandler);
app.use(notFoundError)

// const testId = async () => {
//   const testId = await generateSellerId();
//   console.log(testId);
// };

// testId();
export default app;
