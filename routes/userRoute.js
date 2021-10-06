const express=require('express');
const router=express.Router();
const {signup,signin,getallusers,addToCartUser,getMycartUser,addToCartUser2,Clearcard,DeletefromCartUser,MinuOneItemCartUser,Delete}=require('../controllers/userControllers');
const {requiresignin}=require('../controllers/userControllers')
const user=require('../models/userModel');

router.post('/signup',signup);
router.get('/api/utilisateurs',getallusers);
router.get('/getMycartUser',requiresignin,getMycartUser);
router.get('/getMycartUserprofile/:_id',getMycartUser);
router.post('/signin',signin);
router.post('/addToCartUser',requiresignin,addToCartUser)
router.post('/addToCartUser2',requiresignin,addToCartUser2)
router.delete('/Clearcard/:_id',Clearcard);
router.post('/DeletefromCartUser',requiresignin,DeletefromCartUser);
router.post('/MinuOneItemCartUser',requiresignin,MinuOneItemCartUser);
router.delete('/api/utilisateurs/:_id',Delete);
/*
router.get('/simple_users', async (req, res) => {
    try {
        const users = await user.find({});
        res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
        res.setHeader('Content-Range',22);
        res.send({ data: users, total: 22 });
    } catch (error) {
        console.log(`Error in getting simple_users ${error}`);
    }
})
*/
/*router.delete('/DeletefromCartUser',requiresignin,DeletefromCartUser)*/
module.exports = router;