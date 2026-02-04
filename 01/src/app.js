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
  const notes = await noteModel.find(); // find() will always return an array

  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes,
  });
});

module.exports = app;
