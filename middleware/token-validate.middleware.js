import { responseHandler } from '../error/error-handler.js';
import { verifyToken } from '../helper/utils.helper.js';

const tokenValidate = async (req, res, next) => {
    const token = req.headers?.authorization?.split(' ')[1];

    if (!token) {
        return responseHandler(res, 401, 'Access denied. No token provided.')
    }

    try {

        const decode = verifyToken(token);

        req.userId = decode.userId;

        next();

    } catch (error) {
        next(error)
    }

}

export default tokenValidate