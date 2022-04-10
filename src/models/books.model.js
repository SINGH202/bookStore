const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        title:{type: String, required:true, unique:true},
        price:{type:Number, required:true},
        desc:{type:String, required:true},
        img:{type:String}
    },
    {
        timestamps:true,
        versionKey:false
    }
)

module.exports = mongoose.model("book", bookSchema);