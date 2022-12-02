import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors";
import postRoutes from "./routes/posts.js";

dotenv.config();

// Connect with MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB connected")
}).catch((err) => {
    console.log("MongoDB not connected")
})

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

app.use('/posts', postRoutes);
// Create Port
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
})