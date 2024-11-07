const express = require("express");
const db = require("./src/config/db");
const user = require("./src/routes/user");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

db();

app.use("/api/user", user);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
