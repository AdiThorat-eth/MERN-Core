const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const musicRouter = require("./routes/music.routes");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/music", musicRouter);

module.exports = app;

// middleware can read and modify the request data and can send response

// 6:15
// 6:37
// 6:47
// 6:59
// 7:09
// 7:15
// 7:23
// 7:39
// 7:55
