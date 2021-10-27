const {create,getConsulting,Delete} = require('../controllers/ConsultController');
const express=require('express');
const router=express.Router();

  //# create a note
  router.post('/consult', create);

  router.get('/consult',getConsulting); 

  router.delete('/consult/:_id',Delete);

  
  module.exports = router;