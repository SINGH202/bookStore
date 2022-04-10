const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config()

module.exports = () => {
    return (mongoose.connect(process.env.MONGO_URL).then(() => console.log("Running")))
}