const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = mongoose;

const consultSchema = new Schema({
  text: { 
      type: String,
       required: true },
  name:{
      type:String,
      required:true
  },
  fname:{
    type:String,
    required:true
},
  email:{
      type:String,
      required:true,
  },
  phone:{
      type:Number,
      required:true,
  },
  entreprise:{
      type:String,
      required:true,
  }

});

const Consult = mongoose.model('consulting', consultSchema);
module.exports = Consult;