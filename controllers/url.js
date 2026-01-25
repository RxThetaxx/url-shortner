const shortID=require("shortid")
const url = require("../models/user.js")
async function generatenewshorturl(req, res) {
    const body = req.body
    if (!body){
        return res.status(400).json({error: "url is reequired"})
    }
    const shortid = shortID(8)
    await url.create({
        shortId : shortid,
        redirectURL: body.url,
        visithistory: [],

    })
    return res.json({id: shortid})
}
module.exports={
    generatenewshorturl
}