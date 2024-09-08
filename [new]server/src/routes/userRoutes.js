import express from 'express'
import { userController } from '../controllers/userController.js';

export const userRoutes = express.Router();


userRoutes.post('/create', userController.create)
// userRoutes.get('/token/verify', _)
// userRoutes.get('/token/refresh', _)