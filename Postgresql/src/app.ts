// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
import dotenv from 'dotenv';
dotenv.config();

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
import express, { Express } from 'express';

const app: Express = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
import configureApp from './config';
configureApp(app);

//Start handling routes here
import indexRoutes from './routes/index.routes';
app.use('/api', indexRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
import configureErrorHandling from './error-handling/index';
configureErrorHandling(app);

export default app;
