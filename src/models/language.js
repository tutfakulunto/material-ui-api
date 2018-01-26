const mongoose = require('mongoose');
const {Schema} = mongoose;

const schemaOptions = {timestamps: true};
const languageSchema = new Schema({
   name: {
       type: String,
       required: true,
       trim: true
   },
   abbreviation: {
       type: String,
       required: true,
       minlength: 2,
       maxlength: 2,
       trim: true
   },
   family: {
       type: String,
       required: true,
       trim: true
   },
   description: {
       type: String,
       required: true,
       trim: true
   }
}, schemaOptions);

module.exports = mongoose.model('Language', languageSchema);