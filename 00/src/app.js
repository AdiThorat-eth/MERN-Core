const express = require("express");

// it is used to create server
const app = express();

app.use(express.json());

const notes = [];

// post => it sends data from frontend to server
app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "Note created successfully",
  });
});

// get => it sends data from server to frontend
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "Notes fetched successfully",
    notes: notes,
  });
});

// delete /notes/:index
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;

  delete notes[index];
  res.status(200).json({
    message: "note deleted successfully",
  });
});

app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const description = req.body.description;

  notes[index].description = description;

  res.status(200).json({
    message: "notes updated successfully",
  });
});

module.exports = app;
// 1:09
