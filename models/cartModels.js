const mongoose= require('mongoose');


const CartSchema= new mongoose.Schema({
    productId:{
        type: mongoose.Types.ObjectId,
        ref:'product'
    },
    quantity:{
        type: String,
        required: true
    }

},{timestamps: true});

module.exports=mongoose.model('cart',CartSchema);