import mongoose from "mongoose";

export default async function connectDB() {
    try {

        await mongoose.connect(process.env.MONGO_URL, { dbName: "real-time-notification" });
        console.log('Database connected successfully !')

    } catch (error) {

        console.error('Database not connected: ', error)
    }
}