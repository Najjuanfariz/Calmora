const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
    },
    questionType: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    options: [{
        type: String,
        required: true,
    }],
    correctAnswer: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    explanation: {
        type: String,
        required: true,
    },
  });
  const Question = mongoose.model('Question', questionSchema);
  module.exports = Question