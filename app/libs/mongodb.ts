import mongoose from "mongoose";
export const connectDB = async ()=>{
    process.env.URI && await mongoose.connect(process.env.URI );
    console.log("connected to mongodb");
}