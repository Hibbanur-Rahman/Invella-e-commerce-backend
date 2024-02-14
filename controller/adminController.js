const bcrypt=require("bcrypt");
const Admin= require("../models/userModel");
const httpStatusCode= require('../constant/httpStatusCode');

//user registration method

const register= async (req,res,next)=>{
    try{
        const { email,password,username}=req.body;
        if(!email || !password || !username){
            return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
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

        const admin=await Admin.create({
            username,
            email,
            password
        })

        if(admin){
            return res.status(httpStatusCode.OK).json({
                success:true,
                message:"admin register successfully",
                data:admin,
            })
        }

    }catch(error){
        return res.status(httpStatusCode.BAD_REQUEST).json({
            success: false,
            message:"something went wrong while registering",
            error: error.message,
        });
    }
}


module.exports={
    register,
}