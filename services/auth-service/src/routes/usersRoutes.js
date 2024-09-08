import express from 'express'
import { usersController } from '../controllers/usersController.js';

export const usersRoutes = express.Router();


usersRoutes.get('/teachers', usersController.getAllTeachers)