import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const mongoURI=process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    if (!mongoURI) {
      throw new Error("DB_URL is not defined in environment variables");
    }
    const conn = await mongoose.connect(mongoURI);
    console.log("✅ Connected to MongoDB:", conn.connection.host);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB", error);
    process.exit(1); // 0 means success, 1 means failure
  }
};

