import express from 'express';
import { startDbServer } from './models/db_config';
import Container from 'typedi';
import CustomerRoutes from './routes/customerRoutes';

const app = express();

startDbServer();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/", Container.get(CustomerRoutes).router);

export default app;