const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                status: false,
                message: error.details.map((detail) => detail.message).join(', ')
            })
        }
        next();
    }
};

export default validate;