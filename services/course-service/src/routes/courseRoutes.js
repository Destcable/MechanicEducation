import express from 'express'
import { courseController } from '../controllers/courseController.js';

export const courseRoutes = express.Router();


courseRoutes.post('/create', courseController.create)
courseRoutes.get('/all', courseController.getAll)