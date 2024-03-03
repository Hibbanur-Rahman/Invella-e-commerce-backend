const httpStatusCode = require("../constant/httpStatusCode");
const ProductModel = require("../models/productsModel");
const CategoryModel = require("../models/categoryModel");
const { validationResult } = require("express-validator");

const AddProduct = async (req, res) => {
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

    const { productName, description, price, productImage, category, stock } =
      req.body;
    const name = productName;
    const productImageName=req.file.filename;
    const product = await ProductModel.create({
      name,
      description,
      price,
      productImage :productImageName,
      category,
      stock,
    });

    if (!product) {
      return res.status(httpStatusCode.NOT_FOUND).json({
        success: false,
        message: "Product is not created due to an error",
      });
    }

    return res.status(httpStatusCode.CREATED).json({
      success: true,
      message: "Product added successfully!",
      data: product,
    });
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong!",
      error: error.message,
    });
  }
};

const ViewProduct = async (req, res) => {
  try {
    const products = await ProductModel.find().populate("category", "name");
    if (!products || products.length === 0) {
      return res.status(httpStatusCode.BAD_REQUEST).json({
        success: false,
        message: "No products found in the database",
      });
    }

    return res.status(httpStatusCode.OK).json({
      success: true,
      message: "Successfully viewed the products",
      data: products.map((product) => ({
        ...product.toJSON(),
        category: product.category ? product.category.name : null, // Access category name
      })),
    });
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong !!",
      error: error.message,
    });
  }
};

const DeleteProduct = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId) {
      return res.status(httpStatusCode.BAD_REQUEST).json({
        success: false,
        message: "user is not found",
      });
    }
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong!",
      error: error.message,
    });
  }
};

module.exports = { AddProduct, ViewProduct };
