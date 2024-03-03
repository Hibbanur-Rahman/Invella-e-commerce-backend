const httpStatusCode = require("../constant/httpStatusCode")
const Address=require('../models/addressModel');
const AddBillingAddress=(req,res)=>{
    try{

    }catch(error){
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Something went wrong"
        })
    }
}
const AddShippingAddress=(req,res)=>{
    try{
        
    }catch(error){
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Something went wrong"
        })
    }
}


module.exports={
    AddBillingAddress,
    AddShippingAddress
}