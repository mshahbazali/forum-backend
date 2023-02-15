const express = require("express");
const app = express();


require("dotenv").config();
const { PORT } = process.env;

const { httpStatus } = require("./src/config")

app.get("/", (req, res) => {
    res.status(httpStatus.ok).send("Api is working fine")
});

app.use("/api/forum", require("./src/routes/forum"))

app.listen(PORT, () => {
    console.log(`Api is working on ${PORT}`);
});

