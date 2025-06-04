const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        require :true
    },
    number:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    age:{
        type:Number
    }
    ,
    dateCreate:{
        type:Date,
        default:Date.now
    }
});

const User = mongoose.model('User',userSchema);
module.exports = User;