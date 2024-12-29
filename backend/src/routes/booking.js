const express = require('express');
const { createBookingAndPay } = require('../controller/booking');
const bookingRouter = express.Router();

bookingRouter.post('/create-booking-and-pay', createBookingAndPay);

module.exports = bookingRouter;