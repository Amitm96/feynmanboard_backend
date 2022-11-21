const mongoose = require("mongoose")

const topicSchema = new mongoose.Schema({
    topicName : {type : String} ,
    topicDetails : {type : String},
    tUnderstanding : {type : Number},
    userId : {type : mongoose.Schema.Types.ObjectId , ref : "user"}
} , {timestamps : true})

module.exports = mongoose.model('topic' , topicSchema)