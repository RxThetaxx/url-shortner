const mongoose = require("mongoose")
const urlschema= new mongoose.Schema({
    shortId:{
        type: String,
        required: true

    },
    redirectURL:{
        type: String,
        required: true

    },
    visithistory: [{timestamps :{type: Number}}]
},{timestamps:true})
const url = mongoose.model("url",urlschema)
module.exports=url;
{jsajcbsbcjlasnclj acsjkc bajk babsjb lj sdljbajsdbcb jsadb LbljasbZX BJZBXJ Znl x}
