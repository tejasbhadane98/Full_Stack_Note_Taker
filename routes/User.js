const bodyParser = require("body-parser");
let express = require("express");
let router = express.Router();
let User = require("../models/User")
const app = express();
// app.use(express.json());

router.post("/register", async(req, res)=>{
    try{
        // console.log("Hii");
        let {email, password, confirmPassword} = req.body
        let user = await User.findOne({email:email})
        if(user){
            return res.json({
                error:"User Already Exists"
            })
        }
        if(password !==confirmPassword){
            return res.json({
                error:"Password and Confirm Password Does Not Match"
            })
        }
        user = await User.create(req.body)
        res.json({
            message:"Account Created Succesfully"
        })
    }
    catch(error){
        console.log(error);
    }
})


router.post("/signin", async(req, res)=>{
    try{
        // console.log("Hii");
        let {email, password} = req.body
        let user = await User.findOne({email:email})
        if(!user){
            return res.json({
                error:"User Does Not Exists, Please Register"
            })
        }
        if(password !==user.password){
            return res.json({
                error:"Wrong Password"
            })
        }
        // user = await User.create(req.body)
        res.json({
            message:"Sign In Succesfully"
        })
    }
    catch(error){
        console.log(error);
    }
})

module.exports=router
