const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt= require('jsonwebtoken');
const LivraisonSchema = new mongoose.Schema(
{


user:{
  type: Array,
    default: []
},

  cart: {
    type: Array,
    default: []
},
time:{
type:Date
},
somme:{
  type:Number
},
address:{
    type:String,
    default:"Alger"
}
       
      }
    );
    
const Livraison=mongoose.model('Livraison',LivraisonSchema);
module.exports=Livraison;