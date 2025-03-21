import { Router } from "express";
import validate from "../middleware/validation-request.middleware.js";
import {
    loginSchema,
    signupSchema
} from "../validations/validation.js";
import {
    login,
    signup
} from "../controllers/auth.controller.js";

const router = Router();

router.post('/signup', validate(signupSchema), signup)
router.post('/login', validate(loginSchema), login)


export default router;