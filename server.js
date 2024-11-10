const express = require("express");
const db = require("./src/config/db");
const routes = require('./src/routes')

const app = express();

const PORT = 5000;

db();

app.use(express.json());

app.use("/api/v1", routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));