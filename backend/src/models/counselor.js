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
    type: String,
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
    type: String    ,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
});
const Counselor = mongoose.model("Counselor", counselorSchema);

module.exports = Counselor;