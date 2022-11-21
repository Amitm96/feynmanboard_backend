const userModel = require("../models/userModel")
// const mongoose = require("mongoose")

const registerUser = async function(req , res){
    try{
    let userData = req.body
    if(!userData){
        return res.status(400).send({status : false , message : "enter user details properly"})
    }
    let user = await userModel.create({username : userData.uName , password : userData.password})
    return res.status(201).send({status : true , message : user})
    }
    catch(err){
        return res.status(500).send({status : false , message : err.message})
    }
}

const loginUser = async function(req , res){
    try{
        let userName = req.body.uName
        let user = await userModel.findOne({username : userName})
        if(!user){
            return res.status(400).send({status : false , message : "No user present with this username"})
        }
        return res.status(200).send({status : true , message : user})
    }
    catch(err){
        return res.status(500).send({status : false , message : err.message})
    }
}

module.exports = {registerUser , loginUser}