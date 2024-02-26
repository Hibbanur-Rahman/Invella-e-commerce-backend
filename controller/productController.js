const httpStatusCode = require('../constant/httpStatusCode');
const ProductModel = require('../models/productsModel');


const AddProduct = async (req,res)=>{
    try{

        return res.status(httpStatusCode.OK).json({
            success: true,
            message:"add product successfully !!",

        })
    }catch(error){
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            success: false,
            message:"Something went wrong !!",
            error: error.message
        })
    }
}


module.exports={AddProduct}