const express = require("express");
const { getAllQuizzes, getQuizWithQuestions, submitQuizAttempt } = require("../controller/quiz");
const quizRouter = express.Router();

quizRouter.get("/quizzes", getAllQuizzes);
quizRouter.get("/quiz/:quizId", getQuizWithQuestions);
quizRouter.post("/submit-quiz", submitQuizAttempt);

module.exports = quizRouter;