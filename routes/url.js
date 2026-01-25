const express= require("express")
const router = express.Router()
const {generatenewshorturl}= require("../controllers/url.js")

router.post("/",generatenewshorturl)
module.exports=router;