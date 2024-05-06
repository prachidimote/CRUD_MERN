import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const PORT = 8000;
// connection();
mongoose
.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Connected to MongoDB!');
})
.catch((err) => {
    console.log(err);
})
const app = express();
app.use(express.json());
app.listen(8000, () => console.log(`server running successfully on port ${PORT}`));