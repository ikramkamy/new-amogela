const express=require('express');
const router=express.Router();
const {addproduit,getproduit}=require('../controllers/produitSsController');
router.post('/addproduits',addproduit);
router.get('/getproduit',getproduit)


module.exports = router;