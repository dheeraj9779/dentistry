import mongoose from 'mongoose';

const MONGO_URL = process.env.DATABASE_URL || process.env.MONGODB_URI || 'mongodb://localhost:27017/prac';

declare global {
  var _mongoose: mongoose.Mongoose | undefined;
}

export async function connectToDatabase() {
  if (!MONGO_URL) {
    throw new Error('Please define the DATABASE_URL / MONGODB_URI environment variable');
  }

  if (global._mongoose && global._mongoose.connection.readyState) {
    return global._mongoose;
  }

  const conn = await mongoose.connect(MONGO_URL);
  global._mongoose = conn;
  return conn;
}

export default connectToDatabase;