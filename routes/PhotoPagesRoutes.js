const express=require('express');
const router=express.Router();
const {postPhoto}=require('../controllers/PhotoPageControllers');

router.get('/api/photoPages',postPhoto)

module.exports = router;