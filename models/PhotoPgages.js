const mongoose = require('mongoose');

const { Schema } = mongoose;

const PhotoSchema = new Schema({
  name: {
       type: String, 
       required: true,
       
    
    },
  id: {
    type:String
  },
  page: {
    type: String, 
    
  },
  img:{
     type:String,
     required:true
  }
});

const PhotoPage = mongoose.model('PhotoPage', PhotoSchema);

module.exports = PhotoPage;