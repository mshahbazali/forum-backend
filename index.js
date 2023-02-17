const express = require("express");
const app = express();


require("dotenv").config();

const { httpStatus, port } = require("./src/config");

app.use(require("cors")())
app.use(express.json())
require("./src/db")

app.get("/", (req, res) => {
    res.status(httpStatus.ok).send("Api is working fine")
});

app.use("/api/forum", require("./src/routes/forum"))
app.use("/api/auth", require("./src/routes/auth"))

app.listen(port, () => {
    console.log(`Api is working on ${port}`);
});

