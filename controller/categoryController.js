const httpStatusCode = require("../constant/httpStatusCode");
const CategoryModel = require('../models/categoryModel');

const AddCategory = async (req, res) => {
    try {

        return res.status(httpStatusCode.OK).json({
            success: true,
            message: "You created Successfully !!",

        })
    } catch (error) {
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong !!",
            error: error.message
        })
    }
}
const DeleteCategory = async (req, res) => {
    try {

        return res.status(httpStatusCode.OK).json({
            success: true,
            message: "You created Successfully !!",

        })
    } catch (error) {
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong !!",
            error: error.message
        })
    }
}

module.exports = {
    AddCategory,
    DeleteCategory
}