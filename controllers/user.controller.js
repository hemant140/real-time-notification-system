import { responseHandler } from '../error/error-handler.js';
import * as userService from '../services/user.service.js'

export const getUserById = async (req, res, next) => {
    const userId = req.params.userId;

    try {

        const response = await userService.findById(userId);

        if (!response) {
            return responseHandler(res, 404, 'User does not found!');
        }

        return responseHandler(res, 200, 'success', response);

    } catch (error) {
        console.error("Something went wrong get user by Id:", error.message)
        next(error);
    }

}

export const getAllUsers = async (req, res, next) => {

    const role = req.role;
    try {

        if (role !== 'Admin') {
            return responseHandler(res, 403, 'User not found or unauthorized!');
        }

        const response = await userService.getAllUsers();

        if (!response) {
            return responseHandler(res, 404, 'User does not found!');
        }

        return responseHandler(res, 200, 'success', response);

    } catch (error) {
        console.error("Something went wrong update user: ", error.message)
        next(error);
    }

}

export const updateUser = async (req, res, next) => {
    const userId = req.params.userId;

    try {

        const response = await userService.updateUser(userId, req.body);

        if (!response) {
            return responseHandler(res, 404, 'User does not found!');
        }

        return responseHandler(res, 200, 'success', response);

    } catch (error) {
        console.error("Something went wrong update user: ", error.message)
        next(error);
    }

}

export const deleteUser = async (req, res, next) => {
    const userId = req.params.userId;
    const role = req.role;
    try {

        if (role !== 'Admin') {
            return responseHandler(res, 403, 'User not found or unauthorized!');
        }

        const response = await userService.deleteUser(userId, req.body);

        if (!response) {
            return responseHandler(res, 404, 'User does not found!');
        }

        return responseHandler(res, 200, "User deleted successfully", response);

    } catch (error) {
        console.error("Something went wrong delete user: ", error.message)
        next(error);
    }

}