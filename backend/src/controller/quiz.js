const Quiz = require("../models/quiz");
const Question = require("../models/question");
const QuizAttempt = require("../models/quiz_attempt");

const getQuizWithQuestions = async (req, res) => {
  try {
    const { quizId } = req.params;

    const quiz = await Quiz.findById(quizId).populate({
      path: "question",
      select: "content options",
    });

    if (!quiz) {
      return res.status(404).json({ message: "Kuis tidak ditemukan" });
    }

    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan", error: error.message });
  }
};

const submitQuizAttempt = async (req, res) => {
  try {
    const { userId, quizId, answers } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: "Kuis tidak ditemukan" });
    }

    let totalScore = 0;
    for (const answer of answers) {
      const question = await Question.findById(answer.questionId);
      if (!question) {
        return res.status(400).json({ message: "Pertanyaan tidak ditemukan" });
      }

      const selectedOption = question.options.find(
        (option) => option.optionText === answer.selectedOption
      );

      if (selectedOption) {
        totalScore += selectedOption.score;
        answer.score = selectedOption.score;
      } else {
        return res.status(400).json({ message: "Pilihan jawaban tidak valid" });
      }
    }

    const getScoreDescription = (score, scoreDescriptions) => {
      for (const description of scoreDescriptions) {
        if (score >= description.rangeMin && score <= description.rangeMax) {
          return description.description;
        }
      }
      return "Deskripsi tidak tersedia";
    };

    const scoreDescription = getScoreDescription(totalScore, quiz.scoreDescription);

    const quizAttempt = new QuizAttempt({
      userId,
      quizId,
      score: totalScore,
      scoreDescription: scoreDescription,
    });

    await quizAttempt.save();
    res.status(201).json({ message: "Percobaan kuis berhasil disimpan", quizAttempt });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan", error: error.message });
  }
};

module.exports = {
  getQuizWithQuestions,
  submitQuizAttempt,
};