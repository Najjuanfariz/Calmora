const express = require("express")
const userRouter = require("./user")
const quizRouter = require("./quiz")
const counselorRouter = require("./counselor")
const bookingRouter = require("./booking")

const routes = express.Router()

routes.use(bookingRouter)
routes.use(counselorRouter)
routes.use(userRouter)
routes.use(quizRouter)

module.exports = routes