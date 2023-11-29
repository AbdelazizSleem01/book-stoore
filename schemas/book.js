const mongoose = require("mongoose")

const Schema = mongoose.Schema

const bookSchema = new Schema({
    name:String,
    author:String,
    description:String,
    price:{type:Number},
})



module.exports = mongoose.model('Books' , bookSchema)