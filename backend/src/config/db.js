const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Calmali");
    console.log("MongoDB connected");
  } catch (err) {
    if (err) {
      console.error(err.message);
    } else {
      console.error("An unknown error occurred");
    }
    process.exit(1);
  }
};

module.exports = connectDB;
