import mongoose from 'mongoose';
import app from './app'
import config from './config';
async function bootstrap() {

  try{
    await mongoose.connect(config.database_url as string);
    console.log(`Database is connected successfully`);

    app.listen(config.port, () => {
      console.log(`Applicatioin listening on port ${config.port}`)
    })
  }
  catch(error){
    console.log('Failed to connect database',error)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

bootstrap()