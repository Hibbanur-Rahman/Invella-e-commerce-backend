const Router = require("express").Router();
const { register, login } = require("../controller/adminController");
const { registerUser, loginUser } = require("../controller/userController");

Router.post("/register", register);
Router.post("/login", login);

Router.post("/user-Register", registerUser);
Router.post("/user-Login", loginUser);
module.exports = Router;
