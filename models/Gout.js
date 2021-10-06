const mongoose = require('mongoose');

const { Schema } = mongoose;

const GoutSchema = new Schema({
  name: { type: String, required: true },
  id: {
    type:String
  },
  disponible:{
    type:String,
    required:true
  }
});

const Gout = mongoose.model('gouts', GoutSchema);

module.exports = Gout;