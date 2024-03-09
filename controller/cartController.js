const httpStatusCode = require("../constant/httpStatusCode")

const AddCart=async (req,res)=>{
    try{
        const {}=req.body;
        return res.status(httpStatusCode.CREATED).json({
            success: true,
            message:"Product is added to cart ",
            data:''
        })
    }catch(error){
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"Something went wrong !!",
            error:error.message
        })
    }
}

module.exports={
    AddCart
}