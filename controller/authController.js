const bcrypt=require("bcrypt");
const User= require("../models/userModel");
const httpStatusCode= require('../constant/httpStatusCode');

//user registration method

const Signup= async (req,res,next)=>{
    try{
        const { email,password,username}=req.body;
        if(!email || !password || !username){
            return res.status(httpStatusCode.BAD_REQUEST).json({
                success: false,
                message:" please fill all fields",
            })
        }

        const existingUser= await User.findOne({email});

        if(existingUser){
            return res.status(httpStatusCode.CONFLICT).json({
                success: false,
                message:"user Exists already",
            })
        }

    }catch(error){

    }
}


module.exports={
    Signup,
}