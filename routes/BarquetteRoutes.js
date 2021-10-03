const express=require('express');
const router=express.Router();
const {addBarquette,gettAllbarquette,updateBarquette,getbarquettebyID,Filtercatégorie}=require('../controllers/barquetteControllers');

router.post('/api/addbarquette',addBarquette);
router.get('/api/Barquettes',gettAllbarquette);
router.post('/api/findOneAndUpdate',updateBarquette);
router.get('/getbarquettebyID/:_id',getbarquettebyID);

router.get('/cathegorie/:cathegorie',Filtercatégorie)
module.exports = router;