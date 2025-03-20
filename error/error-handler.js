const responseHandler = (res, statusCode, message, data) => {
    res.status(statusCode).json({
        status: statusCode < 400 ? true : false,
        message,
        data,
    });
};

export const notFoundHandler = (req, res, next) => {
    responseHandler(res, 404, 'API not found');
};

export const globalErrorHandler = (err, req, res, next) => {
    console.error('Error:', err);

    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    responseHandler(res, statusCode, message);
};
