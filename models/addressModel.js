const mongoose= require('mongoose');

const AddressSchema= new mongoose.Schema({
    billing:{
        firstname:{
            type: String,
            required: true,
        },
        lastname:{
            type:String,
            required: true,
        },
        phone:{
            type:String,
            required: true,
        },
        email:{
            type:String,
            required: true,
        },
        company:{
            type: String,
            required: true,
        },
        country:{
            type: String,
            default: 'India',
        },
        street:{
            type:String,
            required: true,
        },
        city:{
            type: String,
            required: true,
        },
        state:{
            type: String,
            required: true,
        },
        pincode:{
            type: String,
            required: true,
        }
    },
    shipping:{
        firstname:{
            type: String,
            required: true,
        },
        lastname:{
            type:String,
            required: true,
        },
        company:{
            type: String,
            required: true,
        },
        country:{
            type: String,
            default: 'India',
        },
        street:{
            type:String,
            required: true,
        },
        city:{
            type: String,
            required: true,
        },
        state:{
            type: String,
            required: true,
        },
        pincode:{
            type: String,
            required: true,
        }
    }
},{timestamps: true});


module.exports= mongoose.model('address',AddressSchema);
