import express from 'express';
import apiRoutes from './api/index.js';

const router = express.Router();

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send('Looks like this is the worng route!');
});

export default router;
