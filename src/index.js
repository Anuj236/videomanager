//require('dotenv').config({path: "./env"});
//import mongoose from "mongoose";
//import express from "express";
//import {DB_Name} from "./constants";

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config(
    {
        path:"./env"
    }
);

connectDB();

/*const app = express();

;(async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
       app.on("error",(error)=>{
        console.log("ERROR :",error);
        throw error;
       });

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening at port : ${process.env.PORT}`);
       })
    } catch (error) {
        console.error("ERROR :",error);
        throw error;
    }
})()*/