const mongoose = require("mongoose");
const { dataBaseUrl } = require("../config");

mongoose.set("strictQuery", false);
mongoose
  .connect(dataBaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => {
    console.log(`DATABASE CONNECTED`);
  })
  .catch((err) => {
    console.log(err);
    console.log(`DATABASE NOT CONNECTED`);
  });
