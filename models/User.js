// const express = require("express");
const mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:[true,"email already Exists"],
        required:true
    },
    password:String,
    // note:[
    //     {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:"Note"
    //     }
    // ]
})

let User = mongoose.model("users", UserSchema)
module.exports = User;