const express = require("express")
const app = express();
app.listen("https://backend-rufi-git.vercel.app/", ()=>{
    console.log("I am in port 4000")
})

app.get("/",(req,res)=>{
    res.json("Hello i succesffully deployed wuhuuu")
})

app.get("/home",(req,res)=>{
    res.json("I am home")
})

module.exports = app