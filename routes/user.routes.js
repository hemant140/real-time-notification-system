import express from 'express';
import tokenValidate from '../middleware/token-validate.middleware.js';
import { deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/user.controller.js';
import validate from '../middleware/validation-request.middleware.js';
import { updateUserSchema } from '../validations/validation.js';

const router = express.Router();

router.get('', tokenValidate, getAllUsers)
router.get('/:userId', tokenValidate, getUserById)
router.patch('/:userId', tokenValidate, validate(updateUserSchema), updateUser)
router.delete('/:userId', tokenValidate, deleteUser)

export default router;