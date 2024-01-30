import mongoose from "mongoose";

let cached = (global as any).mongoose || {conn: null, promise: null};

const MONGO_URI = process.env.MONGO_URI;

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGO_URI) {
    throw new Error(
      "Please define the MONGO_URI environment variable inside .env.local"
    );
  }
  cached.promise = cached.promise || mongoose.connect(MONGO_URI, {
    dbName: "evently",
    bufferCommands: false,
  });

  cached.conn = await cached.promise;
  return cached.conn;
}