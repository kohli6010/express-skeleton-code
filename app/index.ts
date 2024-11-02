import 'reflect-metadata';
import dotenv from 'dotenv'
dotenv.config();
import app from './app';

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
    console.log("Server started...")
})