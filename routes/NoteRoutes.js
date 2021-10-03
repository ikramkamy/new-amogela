const {create,getnotes,edit} = require('../controllers/NoteControllers');
const express=require('express');
const router=express.Router();
const Note=require('../models/Note');
  //# create a note
  router.post('/api/horaire', create);

  //#get the list of notes
 /*
  router.get('/api/notes', (req,res)=>{
  Note.find()
    .then((err, result) => {
      if (err) {
        return res.header(400).json("something went wrong");
      }
      res.header("Content-Range", `notes 1-${result.length}/${result.length}`);
      console.log("RESULT LENGTH IS HERE",result.length)
      res.json(result);
    });

  })
  */
  router.get('/api/horaire',getnotes); 
  router.post('/api/edit/:id', edit);
  //router.delete('/api/horaire/:id')
/* 
  //#get a single note
  router.get('/api/notes/:id', notesController.get);

  //#update a note
 

  //#delete a note
 
  */
  module.exports = router;