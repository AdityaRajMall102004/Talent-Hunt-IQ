import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const mongoURI=process.env.MONGODB_URI;
console.log(mongoURI);
const connectDB=async()=>{
    try{
        if(!mongoURI){
            throw new Error('MONGODB_URI is not defined in environment variables');
        }
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    }
    catch(err){
        console.error('MongoDB connection failed:',err.message);
        process.exit(1);
    }

} 
export default connectDB;