const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt= require('jsonwebtoken');
const ProSchema = new mongoose.Schema(
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

       
      }
    );
    
const ProCommande=mongoose.model('commandesPro',ProSchema);
module.exports=ProCommande;