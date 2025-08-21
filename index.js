const express = require("express");
const app = express();

const notesDB = require("./utils/db.js").data;

app.use(express.json());

const notes = require("./routes/notes.js");
app.use("/notes", notes);

app.listen(3000, () => console.log("Server started"));
