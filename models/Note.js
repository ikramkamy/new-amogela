const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = mongoose;

const noteSchema = new Schema({
  text: { type: String, required: true },
  id: {
    type:String
  },
  jour:{
    type:String
    }
});

const Note = mongoose.model('note', noteSchema);
module.exports = Note;