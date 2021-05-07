import express from 'express';
const router = express.Router();

import { createMessage } from '../controllers/messageController.js';

router.route('/').post(createMessage);

export default router;
