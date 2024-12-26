const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://dipokusumo7:dipokusumo7@cluster0.ralnu.mongodb.net/Calmora");
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
