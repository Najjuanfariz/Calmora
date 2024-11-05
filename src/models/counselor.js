const mongoose = require("mongoose");

const counselorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  whatsappNumber: {
    type: Number,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  certification: [
    {
      type: String,
      required: true,
    },
  ],
  biography: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Boolean,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
});
const Counselor = mongoose.model("Counselor", counselorSchema);
module.exports = Counselor;
