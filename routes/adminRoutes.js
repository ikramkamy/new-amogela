const express=require('express');
const router=express.Router();
const {signupadmin,signinadmin}=require('../controllers/adminControllers');



router.post('/signupadmin',signupadmin);
router.post('/signinadmin',signinadmin)
module.exports = router;