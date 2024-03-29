const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const { API_VERSION } = require("./config");

// LOAD ROUTNG
const authRoutes = require("./routers/auth");
const userRoutes = require("./routers/user");
//const menuRoutes = require("./routers/menu");
const productRoutes = require("./routers/product");
//const postRoutes = require("./routers/post");
//const newsletterRoutes = require("./routers/newsletter");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure static folder
app.use(express.static("uploads"));

// Configure Header HTTP
app.use(cors());

// Router Basic
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, productRoutes);
// app.use(`/api/${API_VERSION}`, menuRoutes);
// app.use(`/api/${API_VERSION}`, postRoutes);
// app.use(`/api/${API_VERSION}`, newsletterRoutes);

module.exports = app;
