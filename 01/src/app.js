const express = require("express");
const noteModel = require("./models/note.model");

const app = express();

// middleware it is used to parse the request body
app.use(express.json());

/* 4 api that we are going to create 

POST /notes => create a note
GET /notes => get all notes
DELETE /notes/:id => delete a note
PATCH /notes/:id => update a note

*/

app.post("/notes", async (req, res) => {
  const data = req.body; // {title: "", description: ""}
  await noteModel.create({
    title: data.title,
    description: data.description,
  });
  res.status(201).json({
    message: "Note created successfully",
  });
});

app.get("/notes", async (req, res) => {
  // find() will always return an array of objects if case not found then empty array "[]"
  const notes = await noteModel
    .find
    //     {
    //     title: "tests_title",
    //   }
    ();
  /*
  // findOne() will always return an object if case not found then null "null"
  const notes = await noteModel.findOne({
  title: "test_title"
  }); 
  */
  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findOneAndDelete({
    _id: id,
  });
  res.status(200).json({
    message: "Note deleted successfully",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;

  // findOneAndUpdate asks for two arguments first argument is the condition to find the document second argument is the data to update
  await noteModel.findOneAndUpdate({ _id: id }, { description: description });
  res.status(200).json({
    message: "Note updated successfully",
  });
});

module.exports = app;
