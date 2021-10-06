const {creategout,getgouts,EditGout,Delete} = require('../controllers/GoutControllers');
const express=require('express');
const router=express.Router();

  //# create a note
  router.post('/api/gouts', creategout);

  router.get('/api/gouts',getgouts); 
  router.put('/api/gouts/:_id', EditGout);
  router.delete('/api/gouts/:_id',Delete);
/*
  //#get a single note
  router.get('/api/notes/:id', notesController.get);

  //#update a note
  

  //#delete a note
  router.delete('/api/notes/:id', notesController.delete);
  */
  module.exports = router;