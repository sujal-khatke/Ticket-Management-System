import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config(); 
const MONGODB_URL = process.env.MONGODB_URL;

export const connectdb = async () => {
try {
    const conn = await mongoose.connect(process.env.MONGODB_URL || MONGODB_URL);
    console.log("Mongodb connected successfully" );
} catch (error) {
    console.log("Mongodb connection error:",error);
    
}};
// console.log('MongoDB URI:',MONGODB_URL );