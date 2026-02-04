const mongoose = require("mongoose");

// the process of telling db how to store data is called schema creation
// mongoose is used to connect server to database

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://end:feFdNIJvsVHPiRSt@complete-backend-c.ckj4jps.mongodb.net/halley",
  );
  console.log("Database connected");
};

module.exports = connectDB;
