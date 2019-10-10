var mongoose = require('mongoose');  
var FabricSchema = new mongoose.Schema({  
    number: String,
    pattern: String,
    color: String,
    img: String
});

mongoose.model('Fabric', FabricSchema);
module.exports = mongoose.model('Fabric');