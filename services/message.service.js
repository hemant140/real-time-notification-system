import Message from "../models/message.model";

export const getById = async (messageId) => {
    try {
        const response = await Message.findById({ _id: messageId }, { __v: 0 })
        return response || null;

    } catch (error) {
        console.error("Something went wrong finding message by Id", error.message)
        throw error;
    }

}

export const getAllMessage = async (page, limit, search) => {
    try {

        const match = search ? {
            $or: [
                {

                }
            ]

        } : {}

        const response = await Message.aggregate([
            {
                $match: match
            }
        ])




    } catch (error) {
        console.error("Something went wrong getting all users", error.message)
        throw error;
    }

}

export const createMesssage = () => {

}

export const updateMessage = () => {

}


export const deleteMessage = () => {

}