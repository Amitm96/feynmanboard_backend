const express = require("express")
const userController = require("../controller/userController")
const topicController = require("../controller/topicController")
const route = express.Router()

route.post("/user/registeruser" , userController.registerUser)
route.post("/user/loginuser" , userController.loginUser)

route.post("/user/topic/addtopic" , topicController.createTopic)
route.get("/user/topic/gettopic" , topicController.getTopics)

module.exports = route