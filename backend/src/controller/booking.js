const Booking = require("../models/booking"); // Model booking
const midtransClient = require("midtrans-client");

const midtransCore = new midtransClient.Snap({
  isProduction: false,
  serverKey: "SB-Mid-server-oJlqZJofaWslmTFJb4VaECDX",
  clientKey: "SB-Mid-client-d4QkuSryhpRA24q1",
});

// Buat booking dan inisialisasi pembayaran
const createBookingAndPay = async (req, res) => {
  try {
    const { counselorId, name, price, sessionDate, session } = req.body;

    // 1. Buat booking baru di database
    const booking = await Booking.create({
      counselorId,
      name,
      price,
      sessionDate,
      session,
    });

    // 2. Siapkan parameter transaksi untuk Midtrans
    const transactionDetails = {
      order_id: `BOOKING-${Date.now()}`, // ID transaksi unik
      gross_amount: price, // Total harga
    };

    const customerDetails = {
      first_name: name.split(" ")[0],
      last_name: name.split(" ")[1] || "",
    };

    const itemDetails = [
      {
        id: `${counselorId}`,
        price: price,
        quantity: 1,
        name: `Counseling Session - ${sessionDate}`,
      },
    ];

    const parameter = {
      transaction_details: transactionDetails,
      customer_details: customerDetails,
      item_details: itemDetails,
    };

    // 3. Proses pembayaran menggunakan Midtrans
    const transaction = await midtransCore.createTransactionToken(parameter);

    // 4. Kirim response ke frontend dengan URL atau token pembayaran
    res.status(201).json({
      success: true,
      message: "Booking created and payment initiated successfully",
      booking,
      transaction,
    });
  } catch (error) {
    console.error("Error in createBookingAndPay: ", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createBookingAndPay,
};