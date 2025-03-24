import { responseHandler } from '../error/error-handler.js';
import { comparePassword, encryptPassword, generatedToken } from '../helper/utils.helper.js';
import * as userService from '../services/user.service.js'

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    console.log(req.body, "bodaya")
    try {
        const user = await userService.findByEmail(email);

        if (user) {
            return responseHandler(res, 409, 'User already exist!')
        }

        const hashedPassword = encryptPassword(password)
        const response = await userService.createUser({ name, email, password: hashedPassword });

        if (!response) {
            return responseHandler(res, 500, 'Failed to create user!');
        }

        return responseHandler(res, 201, 'User created successfully', response);

    } catch (error) {
        console.error("Something went wrong creating user", error.message)
        next(error);
    }

}


export const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {

        const user = await userService.findByEmail(email);

        if (!user) {
            return responseHandler(res, 404, 'User does not exist!');
        }

        const isPasswordValid = comparePassword(password, user.password);

        if (!isPasswordValid) {
            return responseHandler(res, 401, 'Invalid credentials!');
        }

        const tokenPayload = {
            userId: user.id,
            name: user.name,
            email: user.password,
            role: user.role,
            isOnline: user.role,
            lastSeen: user.lastSeen,
            notificationSettings: user.notificationSettings

        }

        const token = generatedToken(tokenPayload);

        return responseHandler(res, 200, 'Login successful', { token });

    } catch (error) {
        console.error("Something went wrong login user", error.message)
        next(error);
    }

}


export const profile = async (req, res, next) => {
    try {
        const response = await userService.findById(req.userId);

        if (!response) {
            return responseHandler(res, 404, 'User not found!');
        }

        return responseHandler(res, 200, 'User profile fetched successfully', response);

    } catch (error) {
        console.error("Something went wrong while fetching the user profile:", error.message);
        next(error);
    }
};
