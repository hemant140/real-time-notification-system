import mongoose from "mongoose";

const auditLogsSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        action: {
            type: String,
            required: true
        },           // 'USER_LOGIN', 'NOTIFICATION_SENT'
        details: {
            type: Object,
            required: true
        },
        ipAddress: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: function (doc, ret) {
                ret.auditLogsId = ret._id;
                delete ret._id;
                return ret;
            }
        },
        toObject: {
            virtuals: true,
            transform: function (doc, ret) {
                ret.auditLogsId = ret._id;
                delete ret._id;
                return ret;
            }
        }
    }
);

const AuditLogs = mongoose.model('AuditLogs', auditLogsSchema);

export default AuditLogs;