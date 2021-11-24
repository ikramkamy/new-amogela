const mongoose = require('mongoose');

const { Schema } = mongoose;

const DestinationSchema = new Schema({
  name: 
  { type: String, 
    required: true
 },
  
 tarif:{
    type:String,
   
  },
  wilaya:{
type:String,
  }
});

const Destination = mongoose.model('destination', DestinationSchema);

module.exports =  Destination;