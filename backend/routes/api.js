import express from 'express';
import { subscribe } from '../controllers/subscriberController.js';
import { createLead } from '../controllers/leadController.js';

const router = express.Router();

router.post('/subscribe', subscribe);
router.post('/contact', createLead);

export default router;
