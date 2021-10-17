const noteModel = require('../models/Notes.js');
const express = require('express')
const app = express()
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
app.post('/notes', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', async (req, res) => {
    // Validate request
    try{
        const note = await noteModel.findById(req.params.noteId).exec()
        res.send(note)
    } catch(err) {
        res.status(500).send(err)
    }
    //TODO - Write your code here to returns all note
    const note = new noteModel(req.body)
     
        try {
            const notes = await noteModel.find({})
            res.send(notes);
          } catch (err) {
            res.status(500).send(err);
          }
    
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    try{
        const note = await noteModel.findById(req.params.noteId).exec()
        res.send(note)
    }
        catch(err){
            
        
    }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid
   try{
       const updateNote = req.body.content
       updateNote.dateUpdate = Date.now()
       const note = await noteModel.findByIdAndUpdate(req.params.noteId, updateNote)
       res.send("note updated")}
       catch(err){
        console.log("error" + err)
        res.status(500).send(err)
        }
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    try {
        await noteModel.deleteOne({ _id: req.params.noteId }, function (err, note) {
            if (err) res.send(err);
            return res.status(400).send({
                message: note
            });
        })
    } catch (err) {
        console.log("error" + err)
        res.status(500).send(err)
    }
});
