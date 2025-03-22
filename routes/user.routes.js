import express from 'express';
import tokenValidate from '../middleware/token-validate.middleware.js';
import { getUserById } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/:userId', tokenValidate, getUserById)

export default router;