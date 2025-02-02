import express from "express";
import connectDB from "./src/config/db.js";
import dotenv from 'dotenv';


dotenv.config();



const app = express();
app.use(express.json());


connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=> console.log(`Server running on http://localhost:${PORT}`));