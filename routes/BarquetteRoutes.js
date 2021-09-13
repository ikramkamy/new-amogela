const express=require('express');
const router=express.Router();
const {addBarquette,gettAllbarquette,updateBarquette,getproduibyID,Filtercatégorie}=require('../controllers/barquetteControllers');

router.post('/addbarquette',addBarquette);
router.get('/getAllbarquettes',gettAllbarquette);
router.post('/findOneAndUpdate',updateBarquette);
//router.get('/getproduibyID/:_id',getproduibyID);

router.get('/cathegorie/:cathegorie',Filtercatégorie)
module.exports = router;