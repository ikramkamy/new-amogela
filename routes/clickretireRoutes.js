const express=require('express');
const router=express.Router();
const {commander,getallcommands,getcommandeByID,getallcarts}=require('../controllers/clickretireController');



router.post('/clickretire',commander);
router.get('/api/click-retirezs',getallcommands);
router.get('/getcommandeByID/:_id',getcommandeByID);
router.get('/getallcarts',getallcarts)
module.exports = router;