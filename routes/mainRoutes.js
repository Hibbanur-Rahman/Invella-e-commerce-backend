const Router = require("express").Router();
const { register, login } = require("../controller/adminController");
const { registerUser, loginUser } = require("../controller/userController");
const {AddCategory}= require('../controller/categoryController');
const { AddProduct } = require("../controller/productController");
const { verifyToken } = require("../middleware/authMiddleware");


Router.post("/register", register);
Router.post("/login", login);

Router.post("/user-Register", registerUser);
Router.post("/user-Login",loginUser);


Router.post('/add-category',verifyToken,AddCategory);
Router.post('/add-product',verifyToken,AddProduct);


module.exports = Router;
