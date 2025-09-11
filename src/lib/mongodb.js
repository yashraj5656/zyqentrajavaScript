import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please add MONGODB_URI in .env.local");
}

// ✅ Use a global cache to avoid re-connecting on every request
let cached = globalThis._mongoose;

if (!cached) {
  cached = globalThis._mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "zyqentrajs", // ✅ change to your DB name
        bufferCommands: false, // prevent Mongoose from queuing queries if disconnected
      })
      .then((mongoose) => {
        console.log("✅ MongoDB connected");
        return mongoose;
      })
      .catch((err) => {
        console.error("❌ MongoDB connection failed:", err);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
