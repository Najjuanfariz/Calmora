const express = require("express");
const { getAllCounselors } = require("../controller/counselor");
const counselorRouter = express.Router();

counselorRouter.get("/counselors", getAllCounselors);

module.exports = counselorRouter;