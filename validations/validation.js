import Joi from "joi";

const signupSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const updateUserSchema = Joi.object({
    name: Joi.string().allow(null, ''),
    isOnline: Joi.boolean().allow(null),
    lastSeen: Joi.string().isoDate().allow(null, ''),
    notificationSettings: Joi.object({
        emailAlerts: Joi.boolean().allow(null),
        smsAlerts: Joi.boolean().allow(null),
        pushNotifications: Joi.boolean().allow(null)
    }).allow(null),
    status: Joi.string().allow(null, '')
});



export { signupSchema, loginSchema, updateUserSchema };


