const { validationResult } = require("express-validator");
const httpStatusCode = require("../constant/httpStatusCode")
const { BillingAddressModel, ShippingAddressModel } = require('../models/addressModel');
const AddBillingAddress = async(req, res) => {
    try {

        // Validate incoming request data
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(httpStatusCode.BAD_REQUEST).json({
                success: false,
                message: "Validation failed",
                errors: errors.array(),
            });
        }
        const { 
            firstname, 
            lastname, 
            companyname, 
            country, 
            street, 
            street1, 
            city,
            state,
            pincode,
            phone,
            email
        } = req.body;

        const BillingAddress=await BillingAddressModel.create({
            firstname, 
            lastname, 
            companyname, 
            country, 
            street, 
            street1, 
            city,
            state,
            pincode,
            phone,
            email
        });
        if(!BillingAddress){
            return res.status(httpStatusCode.SERVICE_UNAVAILABLE).json({
                success: false,
                message:"Something went in the Billing Address Model!!"
            })
        }

        return res.status(httpStatusCode.CREATED).json({
            success: true,
            message:"Successfully created!!",
            data:BillingAddress,
        })

    } catch (error) {
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong"
        })
    }
}
const AddShippingAddress = async(req, res) => {
    try {
        // Validate incoming request data
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(httpStatusCode.BAD_REQUEST).json({
                success: false,
                message: "Validation failed",
                errors: errors.array(),
            });
        }
        const { 
            firstname, 
            lastname, 
            companyname, 
            country, 
            street, 
            street1, 
            city,
            state,
            pincode,
            phone,
            email
        } = req.body;

        const ShippingAddress=await ShippingAddressModel.create({
            firstname, 
            lastname, 
            companyname, 
            country, 
            street, 
            street1, 
            city,
            state,
            pincode,
            phone,
            email
        });
        if(!ShippingAddress){
            return res.status(httpStatusCode.SERVICE_UNAVAILABLE).json({
                success: false,
                message:"Something went in the Shipping Address Model!!"
            })
        }

        return res.status(httpStatusCode.CREATED).json({
            success: true,
            message:"Successfully created!!",
            data:ShippingAddress,
        })

    } catch (error) {
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong"
        })
    }
}


module.exports = {
    AddBillingAddress,
    AddShippingAddress
}