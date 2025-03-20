import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { globalErrorHandler, notFoundHandler } from './error/error-handler.js';
import routes from './routes/routes.js';
dotenv.config();

const PORT = process.env.PORT || 9000;

const app = express();

//Database Connection
connectDB();

app.use(express.json())
app.use('/v1/api', routes)
app.get('/', (req, res) => {
    res.json({ status: true, message: `Server is running port: ${PORT}` })
})

// Handle 404 API Not Found
app.use(notFoundHandler);
// Global Error Handler
app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log(`Server is running port: ${PORT}`)
})