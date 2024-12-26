const Counselor = require('../models/counselor');

const getAllCounselors = async (req, res) => {
  try {
    const counselors = await Counselor.find();
    res.status(200).json(counselors);
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
  }
};

module.exports = {
  getAllCounselors,
};