import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        messsage: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ['info', 'alert', 'reminder', 'promo'],
            required: true
        },
        status: {
            type: String,
            enum: ['read', 'unread'],
            default: 'unread'
        },
        priority: {
            type: Number,
            enum: [1, 2, 3],
            default: 3
        },
        isScheduled: {
            type: Boolean,
            default: false
        },
        scheduleTime: {
            type: Date,
            default: null
        },
        retryCount: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: function (doc, ret) {
                ret.notificationId = ret._id;
                delete ret._id;
                return ret;
            }
        },
        toObject: {
            virtuals: true,
            transform: function (doc, ret) {
                ret.notificationId = ret._id;
                delete ret._id;
                return ret;
            }
        }

    }
);

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;