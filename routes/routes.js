import express from 'express';
import authRouter from './auth.routes.js';
import userRouter from './user.routes.js';
import notificationRouter from './notification.routes.js';
import messageRouter from './message.routes.js';


const router = express.Router();

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/notification', notificationRouter)
router.use('/message', messageRouter)



export default router;