import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://pankajmahtolia:Aeiou369@cluster0.1ogrs.mongodb.net/tomato-restutant').then(()=>console.log("Database Connected Successfully"))
}
