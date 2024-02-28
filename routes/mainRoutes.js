const Router = require("express").Router();
const { register, login } = require("../controller/adminController");
const { registerUser, loginUser } = require("../controller/userController");
const {AddCategory, ViewCategory}= require('../controller/categoryController');
const { AddProduct, ViewProduct } = require("../controller/productController");
const { verifyToken } = require("../middleware/authMiddleware");


Router.post("/register", register);
Router.post("/login", login);

Router.post("/user-Register", registerUser);
Router.post("/user-Login",loginUser);


Router.post('/add-category',verifyToken,AddCategory);
Router.get('/view-category',verifyToken,ViewCategory);
Router.post('/add-product',verifyToken,AddProduct);
Router.get('/view-product',verifyToken,ViewProduct);

module.exports = Router;
