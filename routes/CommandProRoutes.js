const express=require('express');
const router=express.Router();
const {commander,getallcommands,getcommandeByID,getallcarts}=require('../controllers/CommandeProControllers');



router.post('/api/commandePro',commander);
router.get('/api/commandePro',getallcommands);
router.get('/commandePro/:_id',getcommandeByID);
router.get('/commandePro',getallcarts)
module.exports = router;