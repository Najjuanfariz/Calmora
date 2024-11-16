const express = require("express");
const { register, login } = require("../controller/user");
const quiz = require("../controller/user");
const quiz_attempt = require("../controller/user");
const question = require("../controller/user");
const payment = require("../controller/user");
const counselor = require("../controller/user");
const booking = require("../controller/user");
const article = require("../controller/user");
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);

module.exports = userRouter;