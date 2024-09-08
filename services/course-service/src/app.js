import express from 'express'
import dotenv from 'dotenv';
import { courseRoutes } from './routes/courseRoutes.js';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/course', courseRoutes)

app.listen(port, () => { 
    console.log(`☁️  LMS: CourseService | service start (port: ${port})`)
})