import express, { Application , NextFunction, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
import usersRouter from './app/modules/user/user.route'
import globalErrorHandler from './app/middleware/globalErrorHandler'

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/users/', usersRouter)



// testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // throw new Error('ore baba error')
//   // next('ore baba error')
// });

// global error handler
app.use(globalErrorHandler)

export default app
