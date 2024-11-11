const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
  },
  content: {
    type: String,
    required: true,
  },
  options: [
    {
      optionText: { type: String, required: true },
      score: { type: Number, required: true },
    },
  ],
});
const Question = mongoose.model("Question", questionSchema);

module.exports = Question;