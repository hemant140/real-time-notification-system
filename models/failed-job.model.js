import mongoose from "mongoose";


const failedJobSchema = new mongoose.Schema(
    {
        jobId: {
            type: String,
            required: true
        },
        data: {
            type: Object,
            required: true
        },
        errorDetails: {
            type: String,
            required: true
        },
        retryCount: {
            type: Number,
            default: 0
        },
        status: {
            type: String,
            enum: ['pending', 'failed'],
            default: 'pending'
        },
        nextRetryAt: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: function (doc, ret) {
                ret.failedJobId = ret._id;
                delete ret._id;
                return ret;
            }
        },
        toObject: {
            virtuals: true,
            transform: function (doc, ret) {
                ret.failedJobId = ret._id;
                delete ret._id;
                return ret;
            }
        }
    }
);

const FailedJob = mongoose.model('FailedJob', failedJobSchema);

export default FailedJob;