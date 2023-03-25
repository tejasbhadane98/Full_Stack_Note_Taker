const bodyParser = require("body-parser");
let express = require("express");
let router = express.Router();
let User = require("../models/User")
const mongoose = require("mongoose")
// app.use(express.json());
const Note = require("../models/Note")
const app = express();

router.post("/create", async(req,res)=>{
    try{
        let note = await Note.create(req.body)
        res.json({
            message:"Note Created"
        })
    }
    catch(error){
        console.log(error);
    }
})

router.get("/note/:_id", async(req,res)=>{
    try{
        let note = await Note.findOne({_id:req.params._id})
        res.json({
            note
        })
    }
    catch(error){
        console.log(error);
    }
})


router.get("/note", async(req,res)=>{
    try{
        let note = await Note.find({})
        res.json({
            note
        })
    }
    catch(error){
        console.log(error);
    }
})



router.get("/search/:title", async(req,res)=>{
    try{
        let pattern = new RegExp(req.params.title)
        let note = await Note.find({title:{$regex:pattern}})
        res.json({
            note
        })
    }
    catch(error){
        console.log(error);
    }
})

module.exports=router;