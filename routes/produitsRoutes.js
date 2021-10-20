const express=require('express');
const router=express.Router();
const {addproduit,getproduit,findbycategorie,getproduitByID,Delete,updateProduitSS}=require('../controllers/produitSsController');
router.post('/addproduits',addproduit);
router.get('/api/produitsStock',getproduit)
router.get('/findbycategorie/:cathegorie',findbycategorie)
router.get('/getproduitByID/:_id',getproduitByID)
router.delete('/deleteProduits/:_id',Delete);
router.post('/updateProduitSS/:_id',updateProduitSS);
module.exports = router;