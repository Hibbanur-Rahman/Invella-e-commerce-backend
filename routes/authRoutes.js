const router=require("express").Router();
const {Signup}=require('../controller/authController');
router.post("/signup",Signup);

module.exports= router;