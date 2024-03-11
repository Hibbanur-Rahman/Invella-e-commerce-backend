const httpStatusCode = require("../constant/httpStatusCode");
const {validationResult} =require('express-validator');
const cartModel=require('../models/cartModels');
const UserModel= require('../models/userModel');
const AddCart = async (req, res) => {
  try {
    // Validate incoming request data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(httpStatusCode.BAD_REQUEST).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }
    const { productId, quantity } = req.body;

    const  newCartItem=await cartModel.create({
      productId,
      quantity,
    })

    if(!newCartItem){
      return res.status(httpStatusCode.METHOD_NOT_ALLOWED).json({
        success:false,
        message:"Something is wrong in the cart model!!"
      })
    }
    const userId=req.user._id;
    const User=await UserModel.findByIdAndUpdate(userId,{
      $push: { cart: newCartItem._id }
    })

    if(!User){
      return res.status(httpStatusCode.SERVICE_UNAVAILABLE).json({
        success:false,
        message:"Something i wrong in the user Models!!"
      })
    }


    return res.status(httpStatusCode.CREATED).json({
      success: true,
      message: "Product is added to cart ",
      data: newCartItem,
    });
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong !!",
      error: error.message,
    });
  }
};

const UpdateCart=async(req,res)=>{
  try{
    return res.status(httpStatusCode.OK).json({
      success:true,
      message:"Updated successfully!!",
      data:''
    })
  }catch(error){
    return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
      success:false,
      message:"Something went wrong!!",
      error:error.message
    })
  }
}

const ViewCart = async (req, res) => {
  try {
    const userId = req.user._id;
    if (!userId) {
      return res.status(httpStatusCode.BAD_REQUEST).json({
        success: false,
        message: "UserId is Invalid",
      });
    }
    
    const user = await UserModel.findById(userId).populate({
      path: 'cart',
      populate: {
        path: 'productId',
        model: 'product'
      }
    });
    if (!user) {
      return res.status(httpStatusCode.NOT_FOUND).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(httpStatusCode.OK).json({
      success: true,
      message: "Cart retrieved successfully",
      data: user.cart
    });
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong",
      error: error.message
    });
  }
};


module.exports = {
  AddCart,
  UpdateCart,
  ViewCart
};
