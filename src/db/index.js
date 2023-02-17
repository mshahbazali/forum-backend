const mongoose = require("mongoose")
const { dataBaseUrl } = require("../config");

mongoose.set('strictQuery', false);
mongoose.connect(dataBaseUrl).then((res) => {
    console.log(`DATABASE CONNECTED`)
}).catch((err) => {
    console.log(`DATABASE NOT CONNECTED`)
})