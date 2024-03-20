require("dotenv").config();
const {KEY}=process.env
const stripe = require('stripe')(KEY);
const httpStatusCode = require("../constant/httpStatusCode");




const Payment = async (req, res) => {
  try {
    const { items} = req.body;

    const lineItems = items.map((item) => ({
      price_data:{
        currency:"inr",
        product_data:{
          name:item.productId.name
        },
        unit_amount:item.productId.price*100,
      },
      quantity:item.quantity
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types:['card'],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/Invella-e-commerce/#/order-received",
      cancel_url: "http://localhost:5173/cancel",
    });

    return res.status(httpStatusCode.OK).json({ id: session.id });
   
  } catch (error) {
    return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Something went wrong in the payment",
      error: error.message,
    });
  }
};

module.exports = {
  Payment,
};
