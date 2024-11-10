const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  counselorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Counselor",
  },
  price: {
    type: Number,
    required: true,
  },
  sessionDate: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    required: true,
  },
  paymentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Payment",
  },
  whatsappStatus: {
    type: String,
    required: true,
  },
});
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;