var express = require('express'); 
var path = require("path") 
var router = express.Router(); 
var User = require('../data/User.js');

var app = express();

/* GET home page. */ 
router.post('/', function(req, res, next) { 
  var username = req.params.username;
  res.send(username);
  
}); 

//setting
// router.get('/setting', function(req, res, next) { 
//   var username = req.params.username
//   var password = req.params.password
//   res.render('/');
// }); 

// router.get('/:id', function(req, res, next){
//   var id = req.params.id
//   var ProductDetail = Products.filter(function(Product){
//     return Product.number === String(id)
//   })
//   res.send(ProductDetail)
// })

module.exports = router;
