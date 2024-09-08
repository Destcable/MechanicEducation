import express from 'express'
import dotenv from 'dotenv';
import { authRouter } from './routes/authRoutes.js';
import { userRoutes } from './routes/userRoutes.js';
import { usersRoutes } from './routes/usersRoutes.js';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/auth', authRouter)
app.use('/user', userRoutes)
app.use('/users', usersRoutes)

app.listen(port, () => { 
    console.log(`☁️  LMS: AuthService | service start (port: ${port})`)
})