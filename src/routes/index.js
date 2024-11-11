const express = require("express")
const userRouter = require("./user")
const quizRouter = require("./quiz")

const routes = express.Router()

routes.use(userRouter)
routes.use(quizRouter)

module.exports = routes