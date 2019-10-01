var express = require('express'); 
var path = require("path") 
var router = express.Router(); 
var Products = require('../data/Products.json');


var app = express();

/* GET home page. */ 
router.get('/', function(req, res, next) { 
  res.send(Products)
}); 

router.get('/:id', function(req, res, next){
  var id = req.params.id
  var ProductDetail = Products.filter(function(Product){
    return Product.number === String(id)
  })
  console.log(ProductDetail);
  
  
  res.send(ProductDetail)
})

module.exports = router;