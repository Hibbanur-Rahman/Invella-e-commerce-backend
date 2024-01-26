const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes=require('./routes/authRoutes');

const { dbConnection } = require("./configs/db");
const { MONGO_URL, PORT } = process.env;

//connect to DB
dbConnection(MONGO_URL);

//Cookie Parser
app.use(cookieParser());

// allow CORS
app.use(
  cors({
    origin: [""],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.use('/',authRoutes);
const port = PORT || 5000;
app.listen(port, (req, res) => {
  console.log(`The app is Running on ${port}`);
});
