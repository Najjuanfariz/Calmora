const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  question: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  scoreDescription: [
    {
      rangeMin: {
        type: Number,
        required: true,
      },
      rangeMax: {
        type: Number,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
  totalQuestion: {
    type: Number,
    required: true,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;