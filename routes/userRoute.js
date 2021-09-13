const express=require('express');
const router=express.Router();
const {signup,signin,getallusers,addToCartUser,getMycartUser,addToCartUser2,Clearcard}=require('../controllers/userControllers');
const {requiresignin}=require('../controllers/userControllers')


router.post('/signup',signup);
router.get('/getallusers',getallusers);
router.get('/getMycartUser',requiresignin,getMycartUser);
router.get('/getMycartUserprofile/:_id',getMycartUser);
router.post('/signin',signin);
router.post('/addToCartUser',requiresignin,addToCartUser)
router.post('/addToCartUser2',requiresignin,addToCartUser2)
router.delete('/Clearcard/:_id',Clearcard);
module.exports = router;