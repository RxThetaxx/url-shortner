const express = require("express");
const {connecttodb}=require("./connect.js")
const urlroute =require("./routes/url.js")
const URL =require("./models/user.js");
const url = require("./models/user.js");
const app = express();

connecttodb("mongodb://127.0.0.1:27017/url-shortner").then(()=>{
    console.log("mongodb connected")
})
app.use(express.json())
app.use("/url",urlroute)
app.get("/:shortid",async (req,res)=>{
    const shortid= req.params.shortid
    const entry =await URL.findOneAndUpdate({
        shortId: shortid
    },{
        $push :{
            visithistory : {timestamp : Date.now()}
        }}
    )
    return res.redirect(entry.redirectURL)
})
app.listen(8085,()=>{
    console.log("server started")})