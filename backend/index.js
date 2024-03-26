const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const vehicle = require('./controller/vehicle')

const app = express();
const port = process.env.PORT || 3001;

// MongoDB connection

const uri = process.env.MONGODB_URI || "mongodb+srv://deeptanshu:mongodbdeeptanshu@evdekho.t1ldanp.mongodb.net/?retryWrites=true&w=majority&appName=EVDekho";

// const uri =
//   "mongodb+srv://deeptanshu:mongodbdeeptanshu@evdekho.t1ldanp.mongodb.net/?retryWrites=true&w=majority&appName=EVDekho";
mongoose.connect(uri);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB database");
});
  
// Middleware
app.use(bodyParser.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Routes
app.use('/vehicles', vehicle);
