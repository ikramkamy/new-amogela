const express=require('express');
const router=express.Router();
const {commander,getallcommands,getcommandeByID}=require('../controllers/clickretireController');



router.post('/clickretire',commander);
router.get('/getallcommands',getallcommands);
router.get('/getcommandeByID/:_id',getcommandeByID);
module.exports = router;