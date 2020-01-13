var mongoose = require('mongoose');
var FabricSchema = new mongoose.Schema({
  number: Number,
  pattern: String,
  color: String,
  type: String,
  image: String,
});

mongoose.model('Fabric', FabricSchema);
module.exports = mongoose.model('Fabric');
