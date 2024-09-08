import express from 'express';
import dotenv from 'dotenv';
import proxy from 'express-http-proxy';
import cors from 'cors';

dotenv.config();

const port = process.env.PORT;
const AUTH_SERVICE = process.env.URL_AUTH_SERVICE;
const COURSE_SERVICE = process.env.URL_COURSE_SERVICE;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/users/teachers', proxy(`${AUTH_SERVICE}/users/teachers`))
app.post('/auth/login', proxy(`${AUTH_SERVICE}/auth/login`))
app.post('/user/create', proxy(`${AUTH_SERVICE}/user/create`))


app.post('/course/create', proxy(`${COURSE_SERVICE}/course/create`))


app.listen(port, () => { 
    console.log(`☁️  LMS: Server | service start (port: ${port})`)
})