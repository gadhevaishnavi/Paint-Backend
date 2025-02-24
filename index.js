import express from "express";
import cors from 'cors'
import productRoute from "./routes/productRoute.js";
const app = express();

// ✅ Add this middleware to parse JSON request bodies
app.use(express.json());

import dbConnect from './db/connectionDB.js'
import dotenv from 'dotenv'
dotenv.config()//it will load .env file varaibles into process.env object
const PORT = process.env.PORT || 6000; // Use a different port if needed

//for establishing connection with DB
dbConnect(process.env.DBURL,process.env.DBNAME)

// middleware
app.use(cors());

//it parse provided data
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static("uploads")); 

app.use('/product',productRoute)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
