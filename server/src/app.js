import express from 'express';
import dotenv from 'dotenv';
import proxy from 'express-http-proxy';

dotenv.config();

const port = process.env.PORT;
const AUTH_SERVICE = process.env.URL_AUTH_SERVICE;

const app = express();
app.use(express.json());

app.get('/auth/login', proxy(`${AUTH_SERVICE}/auth/login`))
app.post('/user/create', proxy(`${AUTH_SERVICE}/user/create`))

app.listen(port, () => { 
    console.log(`☁️  LMS: Server | service start (port: ${port})`)
})