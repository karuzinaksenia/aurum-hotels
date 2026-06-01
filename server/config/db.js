import mongoose from "mongoose";
import { seedHotels } from "../seed/seedHotels.js";

export async function connectDB() {
  const uri =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/aurum_hotels";

  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
  console.log("MongoDB connected");

  await seedHotels();
}
