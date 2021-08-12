const express=require('express');
const router=express.Router();
const {addBarquette,gettAllbarquette,updateBarquette}=require('../controllers/barquetteControllers');

router.post('/addbarquette',addBarquette);
router.get('/getAllbarquettes',gettAllbarquette)
router.post('/findOneAndUpdate',updateBarquette)
module.exports = router;