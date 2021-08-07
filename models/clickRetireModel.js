const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt= require('jsonwebtoken');
const clickRetireSchema = new mongoose.Schema(
{
    
        gout1: {
          type: String,
          required: true,
         
        },
       gout2: {
          type: String,
          required: true,
         
        },
        gout3: {
          type: String,
          required: true,
         },
        gout4: {
          type: String,
          required: true,
        },
       quantite: {
         type:Number,
         required: true,
       }
      }
    );
    
const clickRetireModel=mongoose.model('click-retirez',clickRetireSchema);
module.exports=clickRetireModel;