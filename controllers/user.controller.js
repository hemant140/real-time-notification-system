import { responseHandler } from '../error/error-handler.js';
import * as userService from '../services/user.service.js'

export const getUserById = async (req, res, next) => {
    const userId = req.params.userId;

    try {

        const response = await userService.findById(userId);

        if (!response) {
            return responseHandler(res, 404, 'User does not exist!');
        }

        return responseHandler(res, 200, 'success', response);

    } catch (error) {
        console.error("Something went wrong login user", error.message)
        next(error);
    }

}