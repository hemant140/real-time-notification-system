import User from "../models/user.model.js"

export const findByEmail = async (email) => {
    try {
        const response = await User.findOne({ email: email.toLowerCase() });

        return response || null;

    } catch (error) {
        console.error("Something went wrong finding user by email", error.message)
        throw error;
    }
}

export const createUser = async (payload) => {
    try {
        const response = await User.create(payload);

        return response || null;

    } catch (error) {
        console.error("Something went wrong creating user", error.message)
        throw error;
    }
}

export const updateUser = async (userId, payload) => {
    try {
        const response = await User.updateOne({ _id: userId }, { $set: payload });

        return response.modifiedCount > 0 ? response : null;
    } catch (error) {
        console.error("Something went wrong updating user:", error.message);
        throw error;
    }
};
