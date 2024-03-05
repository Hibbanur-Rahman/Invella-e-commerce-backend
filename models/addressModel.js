const mongoose = require('mongoose');
const BillingAddressSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        default: 'India',
    },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    }
})
const ShippingAddressSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        default: 'India',
    },
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    }
})

const BillingAddressModel = mongoose.model('billingAddress', BillingAddressSchema);
const ShippingAddressModel = mongoose.model('shippingAddress', ShippingAddressSchema);

module.exports = {
    BillingAddressModel,
    ShippingAddressModel
}
