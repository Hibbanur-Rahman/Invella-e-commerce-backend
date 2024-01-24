const express=require('express');
const app=express();
require('dotenv').config();



const port=process.env.PORT||5000;
app.listen(port,(req,res)=>{
    console.log(`The app is Running on ${port}`)
})