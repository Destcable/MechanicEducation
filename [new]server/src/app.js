import express from 'express'
import dotenv from 'dotenv';

import { authRouter } from './routes/authRoutes.js';
import { userRoutes } from './routes/userRoutes.js';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/auth', authRouter)
app.use('/user', userRoutes)

app.listen(port, () => { 
    console.log(`☁️  LMS: Server | service start (port: ${port})`)
})