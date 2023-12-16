import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async ()=>{
    try {
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log(`\n MONGODB connected !! DB Host : ${connectioninstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error :",error);
        process.exit(1);
    }
}

export default connectDB;