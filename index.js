const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { dbConnection } = require("./configs/db");
const path=require('path')

require("dotenv").config();

const mainRoutes = require("./routes/mainRoutes");

const { MONGO_URL, PORT } = process.env;

const app = express();

// Connect to the database
dbConnection(MONGO_URL);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: '*', // Update origin to match frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Serve static files (images) from the 'uploads' folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Routes
app.use("/", mainRoutes);

const port = PORT || 5000;
app.listen(port, () => {
  console.log(`The app is running on http://localhost:${port}`);
});
