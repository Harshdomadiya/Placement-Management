const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    cgpa:[{
        type:Number,
        required:true,
    }],
    placed:{
        type:Boolean,
        default:false,
    },  
})

module.exports = mongoose.Model("User",UserSchema);