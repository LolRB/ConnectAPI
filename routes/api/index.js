import express from 'express';
import userRoutes from './user-routes.js';
import thoughtRoutes from './thought-routes.js';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

export default router;
