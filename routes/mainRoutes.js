const Router = require("express").Router();
const { register, login } = require("../controller/adminController");
const { registerUser, loginUser,ViewUsers } = require("../controller/userController");
const {AddCategory, ViewCategory}= require('../controller/categoryController');
const { AddProduct, ViewProduct } = require("../controller/productController");
const { verifyToken } = require("../middleware/authMiddleware");
const upload = require("../middleware/multerMiddleware");
const { AddBillingAddress, AddShippingAddress ,ViewBillingAddress} = require("../controller/addressController");



Router.post("/register", register);
Router.post("/login", login);

Router.post("/user-Register", registerUser);
Router.post("/user-Login",loginUser);
Router.get('/view-Users',verifyToken,ViewUsers);


Router.post('/add-category',verifyToken,AddCategory);
Router.get('/view-category',verifyToken,ViewCategory);
Router.post('/add-product',verifyToken,upload.single("productImage"),AddProduct);
Router.get('/view-product',verifyToken,ViewProduct);

Router.post('/add-billing-address',verifyToken,AddBillingAddress);
Router.post('/add-shipping-address',verifyToken,AddShippingAddress);
Router.get('/view-billing-address',verifyToken,ViewBillingAddress);

module.exports = Router;
