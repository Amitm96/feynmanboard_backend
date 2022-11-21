const topicModel = require("../models/topicModel")
// const userModel = require("../models/userModel")


const createTopic = async function(req , res){
    try{
    let topicData = req.body
    if(!topicData.topicName){
        return res.status(400).send({status : false , message : "enter topic name correctly"})
    }
    if(!topicData.topicDetails){
        return res.status(400).send({status : false , message : "enter topic details correctly"})
    }
    if(!topicData.tUnderstanding){
        return res.status(400).send({status : false , message : "enter topic understanding correctly"})
    }
    if(!topicData.userId){
        return res.status(400).send({status : false , message : "enter user Id"})
    }
    let topic = await topicModel.create({topicName : topicData.topicName , topicDetails : topicData.topicDetails , tUnderstanding : topicData.tUnderstanding , userId : topicData.userId})
    return res.status(201).send({status : true , message : topic})
    }
    catch(err){
        return res.status(500).send({status : false , message : err.message})
    }
}

async function getTopics(req , res){
    try{
    let userId = req.query.userId
    let topicList = await topicModel.find({userId : userId})
    return res.status(200).send({status : true , message : topicList})
    }
    catch(e){
        return res.status(500).send({status : false , message : e.message})
    }
}

module.exports = {createTopic , getTopics}