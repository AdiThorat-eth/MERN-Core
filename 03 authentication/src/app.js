const express = require("express");
const authRoutes = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");
const postRoutes = require("./routes/post.routes");

const app = express();
app.use(express.json());
// cookie-parser is used to  access data and store data in cookies
app.use(cookieParser());

// /api/auth is prefix/base url for all the routes in auth.routes.js
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

module.exports = app;

// validation => To check data is in valid format or not
// verification => To check data is valid or not
// authentication => to identify the user which is making the request
// authorization => to identify the user has the permission to access the resource or not

// 5:17
