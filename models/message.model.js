import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        reciverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        content: {
            type: String,
            required: true
        },
        isDelivered: {
            type: Boolean, default: false
        },
        isRead: {
            type: Boolean, default: false
        },
        deliveredAt: {
            type: Date, default: null
        },
        readAt: {
            type: Date, default: null
        },

    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: function (doc, ret) {
                ret.messageId = ret._id;
                delete ret._id;
                return ret;
            }
        },
        toObject: {
            virtuals: true,
            transform: function (doc, ret) {
                ret.messageId = ret._id;
                delete ret._id;
                return ret;
            }
        }
    }
)

const Message = mongoose.model('Message', messageSchema);

export default Message;