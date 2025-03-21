import { responseHandler } from '../error/error-handler.js';
import * as userService from '../services/user.service.js'

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {

        const user = await userService.findByEmail(email);
        if (!user) {
            return responseHandler(res, 409, 'User already exist!')
        }


    } catch (error) {
        next(error);
    }

}


export const login = async (req, res) => {

}