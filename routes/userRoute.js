const express=require('express');
const router=express.Router();
const {signup,signin,getallusers}=require('../controllers/userControllers');



router.post('/signup',signup);
router.get('/getallusers',getallusers);
router.post('/signin',signin);
module.exports = router;