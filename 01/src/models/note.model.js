const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// noteModel is used to perform CRUD operations on the database (you can still perform CRUD operations on the database without using noteModel but it is repetitive and not a good practice)
const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel;
