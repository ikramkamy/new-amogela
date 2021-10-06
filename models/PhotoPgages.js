const mongoose = require('mongoose');

const { Schema } = mongoose;

const PhotoSchema = new Schema({
  name: {
       type: String, 
       required: true,
       default:"Home01"
    
    },
  id: {
    type:String
  },
  img:{
     type:String,
     required:true
  }
});

const PhotoPage = mongoose.model('PhotoPage', PhotoSchema);

module.exports = PhotoPage;