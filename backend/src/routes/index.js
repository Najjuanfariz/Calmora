const express = require("express")
const userRouter = require("./user")
const quizRouter = require("./quiz")
const counselorRouter = require("./counselor")

const routes = express.Router()

routes.use(counselorRouter)
routes.use(userRouter)
routes.use(quizRouter)

module.exports = routes