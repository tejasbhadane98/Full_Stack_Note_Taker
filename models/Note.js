// const express = require("express");
const mongoose = require("mongoose");

let NoteSchema =  new mongoose.Schema({
    title:String,
    description:String,
   
})

let Note = mongoose.model("notes", NoteSchema)
module.exports = Note;