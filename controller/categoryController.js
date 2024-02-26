const httpStatusCode = require("../constant/httpStatusCode");
const CategoryModel = require('../models/categoryModel');

const AddCategory = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(httpStatusCode.BAD_REQUEST).json({
                success: false,
                message: "name feild is empty"
            })
        }

        const existingCategory = await CategoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(httpStatusCode.CONFLICT).json({
                success: false,
                message: "The category is already exist !!"
            })
        }


        const category = await CategoryModel.create({
            name
        })

        if(!category){
            return res.status(httpStatusCode.METHOD_NOT_ALLOWED).json({
                success: false,
                message: "something wrong in the creation of category"
            })
        }

        return res.status(httpStatusCode.OK).json({
            success: true,
            message: "You created Successfully !!",
            data: category
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