const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt= require('jsonwebtoken');
const clickRetireSchema = new mongoose.Schema(
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
}
       
      }
    );
    
const clickRetireModel=mongoose.model('click-retirez',clickRetireSchema);
module.exports=clickRetireModel;