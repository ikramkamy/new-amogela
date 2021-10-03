const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema } = mongoose;

const GoutSchema = new Schema({
  name: { type: String, required: true },
  id: {
    type:String
  }
});

const Gout = mongoose.model('gouts', GoutSchema);

module.exports = Gout;