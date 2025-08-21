const express = require("express");
const router = express.Router();

const notes = require("../utils/db").data;

//Get all notes
router.get("/", (req, res) => {
    try{
        res.json(notes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//Get a single note (by id)
router.get("/:id", (req, res) => {
    try {
        const newNote = notes.find(note => note.id === Number(req.params.id));
        if (!newNote) {
            res.status(404).json({message: "Note not found"});
        } else {
            res.json(newNote);
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//Create a new note
router.post("/", (req, res) => {
    const newNote = {
        id: notes.length + 1,
        title: req.body.title,
        content: req.body.content
    };
    try {
        notes.push(newNote);
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

//Delete note (by id)
router.delete("/:id", (req, res) => {
    try {
        const index = notes.findIndex(note => note.id === Number(req.params.id));
        if(index === -1) {
            res.status(400).json({message: "Note not found"});
        } else {
            notes.splice(index, 1)
            res.json({message: "Note deleted"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//Update note (by id)
router.put("/:id", (req, res) => {
    try {
        let noteToUpdate = notes.find(note => note.id === Number(req.params.id));
        if (!noteToUpdate) return res.status(400).json({message: "Note not found"});

        if(req.body.title != null) noteToUpdate.title = req.body.title;
        if(req.body.content != null) noteToUpdate.content = req.body.content;

        res.json(noteToUpdate);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

});


module.exports = router;