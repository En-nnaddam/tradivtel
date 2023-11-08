import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

if (!uri) throw new Error("Add Mongo URI to .env.local");

type TMongoose = { conn: typeof mongoose; promise: Promise<typeof mongoose> };

declare module globalThis {
  let mongoose: TMongoose;
}

let cached = globalThis.mongoose || { conn: null, promise: null };

export const connect = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri);
  }

  cached.conn = await cached.promise;

  if (!globalThis.mongoose) {
    globalThis.mongoose = cached;
  }
  return cached.conn;
};
