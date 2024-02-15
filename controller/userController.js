const httpStatusCode = require('../constant/httpStatusCode');
const UserModel = require('../models/userModel');
const bcrypt= require('bcrypt')
const UserRegister = async (req, res) => {
    try {
        const { username, email, password, phone } = req.body;
        if (!username || !email || !password || !phone) {
            return res.status(httpStatusCode.BAD_REQUEST).json({
                success: false,
                message: "all fields are required",

            })
        }

        const existingUser = await UserModel.findOne({
            $or: [{
                email: req.body.email
            }, {
                phone: req.body.phone
            }]
        })

        if(existingUser){
            return res.status(httpStatusCode.CONFLICT).json({
                success:false,
                message:"user is registered already  with email or phoneplease sign in"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const User = await UserModel.create({
            username,
            email,
            password:hashedPassword,
            phone
        })

        if(User){
            return res.status(httpStatusCode.OK).json({
                success: true,
                message:"user registered successfully !!",
                data: User
            })
        }


    } catch (error) {
        return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "something went wrong !!",
            error: error.message,
        })
    }
}


module.exports= {
    UserRegister,
}