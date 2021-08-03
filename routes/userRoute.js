const express=require('express');
const router=express.Router();
const {signup,signin,getallusers,requiresignin}=require('../controllers/userControllers');



router.post('/signup',signup);
router.get('/getallusers',requiresignin,getallusers);
router.post('/signin',signin);
module.exports = router;