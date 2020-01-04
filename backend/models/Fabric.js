var mongoose = require('mongoose');  
var FabricSchema = new mongoose.Schema({  
    number: String,
    pattern: String,
    color: String,
    image: String
});

mongoose.model('Fabric', FabricSchema);
module.exports = mongoose.model('Fabric');