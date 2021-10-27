const express=require('express');
const router=express.Router();
const {commander,getallcommands,getcommandeByID,getallcarts,getcommandeByType,clearCommande}=require('../controllers/clickretireController');



router.post('/clickretire',commander);
router.get('/api/click-retirezs',getallcommands);
router.get('/getcommandeByID/:_id',getcommandeByID);
//router.get('/getallcarts',getallcarts)
router.get('/getcommandeByType/:type',getcommandeByType)
router.delete('/clearCommande/:_id', clearCommande);
module.exports = router;