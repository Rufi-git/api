require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require("./routes/todo")
const cors = require("cors");

//express app
const app = express();

//middleware
app.use(express.json())
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.get("/",(req,res)=>{
    res.json("WUHUUUU!!!!!")
})
//routes
app.use('/api/todo', todoRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log("connected to db & listening on port", process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

    module.exports = app;

