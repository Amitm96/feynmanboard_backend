const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const route = require("./route/route")
const app = express()

app.use(cors())
app.use(bodyparser.json())

app.use("/" , route)

mongoose.connect("mongodb+srv://Amitmaz96:5YOiTjMdLmeCiWAC@cluster1.mdpsbcj.mongodb.net/feynmanDB?retryWrites=true&w=majority" , {useNewUrlParser : true})
.then(() => console.log("MongoDb is connected"))
.catch((e) => console.log(e.message))

app.listen(5000 , () => console.log("App started at port no : 5000"))