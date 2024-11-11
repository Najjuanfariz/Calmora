const express = require("express");
const { getQuizWithQuestions, submitQuizAttempt } = require("../controller/quiz");
const quizRouter = express.Router();

quizRouter.post("/quiz/:Id", getQuizWithQuestions);
quizRouter.post("/submit-quiz", submitQuizAttempt);

module.exports = quizRouter;