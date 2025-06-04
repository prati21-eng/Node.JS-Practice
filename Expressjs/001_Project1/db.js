const mongoose = require('mongoose');

// Define the connection URL
const url = 'mongodb://localhost:27017/hotel';

const connectDB = async () => {
  try {
    await mongoose.connect(url);

    console.log("✅ MongoDB connected");

    mongoose.connection.on('disconnected', () => {
      console.log("❗Disconnected from database");
    });

    mongoose.connection.on('error', (error) => {
      console.error("❌ Database error:", error);
    });
    
  } catch (error) {
    console.error("❌ Connection error:", error);
    process.exit(1); // Exit process on failure
  }
};

module.exports = connectDB;
