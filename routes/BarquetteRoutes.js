const express=require('express');
const router=express.Router();
const {addBarquette,gettAllbarquette,updateBarquette,getbarquettebyID,Filtercatégorie,Delete}=require('../controllers/barquetteControllers');

router.post('/api/addbarquette',addBarquette);
router.get('/api/Barquettes',gettAllbarquette);
router.post('/api/findOneAndUpdate/:_id',updateBarquette);
router.get('/getbarquettebyID/:_id',getbarquettebyID);
router.get('/cathegorie/:cathegorie',Filtercatégorie);
router.delete('/api/barquettes/:_id',Delete);
module.exports = router;