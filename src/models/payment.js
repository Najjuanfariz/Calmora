const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
  },
  paymentMethode: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  transaction: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
});
const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
