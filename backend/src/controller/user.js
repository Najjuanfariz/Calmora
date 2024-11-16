const User = require("../models/user");
const quiz = require("../models/quiz");
const quiz_attempt = require("../models/quiz_attempt");
const question = require("../models/question");
const payment = require("../models/payment");
const counselor = require("../models/counselor");
const booking = require("../models/booking");
const article = require("../models/article");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "Email sudah terdaftar" });
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();
    res.status(201).json({ msg: "Pendaftaran berhasil", user: newUser });
  } catch (error) {
    res.status(500).json({ msg: "Terjadi kesalahan saat mendaftar", error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Pengguna tidak ditemukan" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Password salah" });
    }

    res.status(200).json({ msg: "Login berhasil", user });
  } catch (error) {
    res.status(500).json({ msg: "Terjadi kesalahan saat login", error: error.message });
  }
};

module.exports = { register, login };