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

export const getAllUsers = async (page, limit, search) => {
    try {

        // console.log(typeof search)
        const skip = (page - 1) * limit;
        const query = search
            ? {
                $or: [
                    { name: { $regex: search, $options: "i" } },
                    { email: { $regex: search, $options: "i" } },
                ]
            }
            : {};


        // console.log(query)
        const [users, totalCount] = await Promise.all([
            User.find(query, { __v: 0 }).skip(skip).limit(parseInt(limit)),
            User.countDocuments(query)
        ]);

        return { totalCount, users } || null;

    } catch (error) {
        console.error("Something went wrong while fetching users", error.message);
        throw error;
    }
};



export const findById = async (userId) => {
    try {
        const response = await User.findById({ _id: userId }, { __v: 0, password: 0 });

        return response || null;

    } catch (error) {
        console.error("Something went wrong finding user by Id", error.message)
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
        const response = await User.findByIdAndUpdate(
            { _id: userId },
            { $set: payload },
            { new: true }
        );

        console.log(response, "upad")
        return response ? response : null;
    } catch (error) {
        console.error("Something went wrong updating user:", error.message);
        throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await User.findByIdAndDelete(
            { _id: userId }
        );

        return response ? response : null;
    } catch (error) {
        console.error("Something went wrong updating user:", error.message);
        throw error;
    }
};
