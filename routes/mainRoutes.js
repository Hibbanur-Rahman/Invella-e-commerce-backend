const Router=require("express").Router();
const {register, login}=require('../controller/adminController');

Router.post("/register",register);
Router.post("/login",login);
module.exports= Router;