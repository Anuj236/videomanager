import mongoose from "mongoose";
import express from "express";
import {DB_Name} from "./constants";

const app = express();

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
})()