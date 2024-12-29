const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  counselorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Counselor",
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  sessionDate: {
    type: Date,
    required: true,
  },
  session: {
    type: Number,
    required: true,
  }
});
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;