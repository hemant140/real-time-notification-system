import { Router } from "express";
import validate from "../middleware/validation-request.middleware.js";
import {
    loginSchema,
    signupSchema
} from "../validations/validation.js";
import {
    login,
    profile,
    signup
} from "../controllers/auth.controller.js";
import tokenValidate from "../middleware/token-validate.middleware.js";

const router = Router();

router.post('/signup', validate(signupSchema), signup)
router.post('/login', validate(loginSchema), login)
router.get('/profile', tokenValidate, profile)


export default router;