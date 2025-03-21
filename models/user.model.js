import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['Admin', 'User'],
            default: 'User'
        },
        isOnline: {
            type: Boolean,
            default: false
        },
        lastSeen: {
            type: Date,
            default: null
        },
        notificationSettings: {
            emailAlerts: { type: Boolean, default: true },
            smsAlerts: { type: Boolean, default: false },
            pushNotifications: { type: Boolean, default: true },
        },
        status: {
            type: String,
            enum: ["ACTIVE", "DEACTIVE"],
            default: "ACTIVE"
        }

    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: function (doc, ret) {
                ret.userId = ret._id;
                delete ret._id;
                return ret;
            }
        },
        toObject: {
            virtuals: true,
            transform: function (doc, ret) {
                ret.userId = ret._id;
                delete ret._id;
                return ret;
            }
        }

    }
);


const User = mongoose.model('User', userSchema);

export default User;