const express=require('express');
const router=express.Router();
const {addproduit,getproduit,findbycategorie}=require('../controllers/produitSsController');
router.post('/addproduits',addproduit);
router.get('/getproduit',getproduit)
router.get('/findbycategorie/:cathegorie',findbycategorie)

module.exports = router;