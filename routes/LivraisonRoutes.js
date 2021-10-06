const express=require('express');
const router=express.Router();
const {commander,getallcommands,getcommandeByID,getallcarts}=require('../controllers/LivraisonControllers');

 

router.post('/api/livraison/clickretire',commander);
router.get('/api/livraison',getallcommands);
router.get('/api/livraison/:_id',getcommandeByID);
router.get('/api/livraison/getallcarts',getallcarts)
module.exports = router;