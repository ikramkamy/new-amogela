const express=require('express');
const router=express.Router();
const {addItemtoCart}=require('../controllers/cartControllers');
const {requiresignin}=require('../controllers/userControllers')
router.post('/addItemtoCart',requiresignin,addItemtoCart);
module.exports = router;


/*

	"email":"amogelatoken4@gmail.com",
	"password":"amogelatoken3"
*/
/*
{
   "cartItems":
	
{
	
	 "product":"6113fbb5d6848926acbba13a",
	"quantite":"1",
	"price":"100"
}
 }

 {

   "cart":
	
{
	
	"id":"6113fac8d6848926acbba136",
"quantity":"3",
"date":"1631122043078"
}
 }
*/ 

/*{
	"user":"61051205f1f12724e4909424",
   "cartItems":
	
{
	
	 "product":"6113fbb5d6848926acbba13a",
	"quantite":"1",
	"price":"100"
}
 }
 {
 "firstName":"test1",
"lastName":"test1",
"email":"test1@gmail.com",
"phone":"35454654654",
"password":"test1",
"username":"test1"
 }
 
 
 */

