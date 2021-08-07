const express=require('express');
const router=express.Router();
const {commander}=require('../controllers/clickretireController');



router.post('/clickretire',commander);

module.exports = router;