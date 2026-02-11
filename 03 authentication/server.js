const app = require("./src/app");
const connectDB = require("./src/db/db");
require("dotenv").config();
// dotenv is used to load environment variables from .env file into process.env

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
