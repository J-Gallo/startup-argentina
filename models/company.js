const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const companySchema = new Schema({
  name: { 
    type: String,
    unique: true
  },
  formattedName: {
    type: String,
    unique: true
  },
  mail: { type: String },
  logo: { type: String },
  extraData: {},
  description: { type: String },
  active: Boolean
}, { minimize: false });


module.exports = mongoose.model('Company', companySchema);