const httpStatusCode = require('../constant/httpStatusCode');
const ProductModel = require('../models/productsModel');
const { validationResult } = require('express-validator');

const AddProduct = async (req, res) => {
    try {
        // Validate incoming request data
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(httpStatusCode.BAD_REQUEST).json({
                success: false,
                message: "Validation failed",
                errors: errors.array()
            });
        }

        const { name, description, price, productImage, category } = req.body;

        const product = await ProductModel.create({
            name,
            description,
            price,
            productImage,
            category
        });

        if (!product) {
            return res.status(httpStatusCode.NOT_FOUND).json({
                success: false,
                message: "Product is not created due to an error"
            });
        }

        return res.status(httpStatusCode.OK).json({
            success: true,
            message: "Product added successfully!",
            data: product
        });
    } catch (error) {
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error.message
        });
    }
};

const DeleteProduct= async (req,res)=>{
    try{
        const userId= req.user._id;

        if(!userId){
            return res.status(httpStatusCode.BAD_REQUEST).json({
                success: false,
                message:"user is not found"
            })
        }

        
        
    }catch(error){
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error.message
        });
    }
}

module.exports = { AddProduct };
