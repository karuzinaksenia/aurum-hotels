import mongoose from "mongoose";
import { seedHotels } from "../seed/seedHotels.js";

const globalCache = globalThis;

let cached = globalCache.__aurumMongoose;

if (!cached) {
  cached = globalCache.__aurumMongoose = {
    conn: null,
    promise: null,
    seeded: false,
  };
}

export async function connectDB() {
  const uri =
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/aurum_hotels";

  mongoose.set("strictQuery", true);

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri).then((m) => {
      console.log("MongoDB connected");
      return m;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }

  if (!cached.seeded) {
    await seedHotels();
    cached.seeded = true;
  }

  return cached.conn;
}
