const express=require('express');
const router=express.Router();
const {addproduit,getproduit,findbycategorie,getproduitByID}=require('../controllers/produitSsController');
router.post('/addproduits',addproduit);
router.get('/getproduit',getproduit)
router.get('/findbycategorie/:cathegorie',findbycategorie)
router.get('/getproduitByID/:_id',getproduitByID)
module.exports = router;