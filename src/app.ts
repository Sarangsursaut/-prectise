// console.log("testing Prettier and Husky setup");
import express, { Application } from 'express';
import path from 'node:path';
import router from './router/apiRouter';

const app: Application =express();

// middleware 
app.use(express.json());
app.use(express.static(path.join(__dirname, "../" ,'public')));

//route
app.use('/api/v1', router);

export default app;