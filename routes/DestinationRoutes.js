const express=require('express');
const router=express.Router();

const {createDestination,getdestination,EditDestination,Delete,getbywilaya,getdetinationbyid} = require('../controllers/DestinationControllers')


  //# create a note
router.post('/destination', createDestination)
router.get('/api/destination',getdestination); 
router.put('/api/destination/:_id', EditDestination);
router.delete('/api/destination/:_id',Delete);
router.get('/detinationbywilaya/:wilaya',getbywilaya)
router.get('/getdestinationbyid/:_id',getdetinationbyid)  
/*
  //#get a single note
  router.get('/api/notes/:id', notesController.get);

  //#update a note
  

  //#delete a note
  router.delete('/api/notes/:id', notesController.delete);
  */
  module.exports = router;