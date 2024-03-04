const { validationResult } = require("express-validator");
const httpStatusCode = require("../constant/httpStatusCode")
const { BillingAddress, ShippingAddress } = require('../models/addressModel');
const AddBillingAddress = (req, res) => {
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

        

    } catch (error) {
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong"
        })
    }
}
const AddShippingAddress = (req, res) => {
    try {
        const { } = req.body;
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