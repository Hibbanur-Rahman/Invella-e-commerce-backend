const Router = require("express").Router();
const { register, login } = require("../controller/adminController");
const { registerUser, loginUser,ViewUsers } = require("../controller/userController");
const {AddCategory, ViewCategory}= require('../controller/categoryController');
const { AddProduct, ViewProduct, ViewProductWithId } = require("../controller/productController");
const { verifyToken } = require("../middleware/authMiddleware");
const upload = require("../middleware/multerMiddleware");
const { AddBillingAddress, AddShippingAddress ,ViewBillingAddress, ViewShippingAddress} = require("../controller/addressController");
const { AddCart, UpdateCart,ViewCart, DeleteCart } = require("../controller/cartController");



Router.post("/register", register);
Router.post("/login", login);

Router.post("/user-Register", registerUser);
Router.post("/user-Login",loginUser);
Router.get('/view-Users',verifyToken,ViewUsers);


Router.post('/add-category',verifyToken,AddCategory);
Router.get('/view-category',verifyToken,ViewCategory);
Router.post('/add-product',verifyToken,upload.single("productImage"),AddProduct);
Router.get('/view-product',ViewProduct);
Router.post('/view-product-Id',ViewProductWithId);


Router.post('/add-cart',verifyToken,AddCart);
Router.post('/update-cart',verifyToken,UpdateCart);
Router.get('/view-cart',verifyToken,ViewCart);
Router.delete('/delete-cart-item',verifyToken,DeleteCart);


Router.post('/add-billing-address',verifyToken,AddBillingAddress);
Router.post('/add-shipping-address',verifyToken,AddShippingAddress);
Router.get('/view-billing-address',verifyToken,ViewBillingAddress);
Router.get('/view-shipping-address',verifyToken,ViewShippingAddress);


module.exports = Router;
