var express = require('express'); 
var path = require("path") 
var router = express.Router(); 
// var Products = require('../models/Products.json');
var Fabrics = require('../models/Fabric');
var catchErrors = require('../lib/async-error')

var app = express();


router.get('/', catchErrors(async(req, res, next) => {
  Fabrics.find({},function(err, Fabric){
        if(err) return res.status(500).send({error: 'database failure'});
  
        res.json(Fabric);
      })
}))

// router.get('/:id', function(req, res, next){
//   var id = req.params.id
//   var ProductDetail = Products.filter(function(Product){
//     return Product.number === String(id)
//   })
//   res.send(ProductDetail)
// })

router.get('/:id', catchErrors(async(req, res, next) => {
  var id = req.params.id
  var fabric = await Fabrics.find({_id:id})
  res.send(fabric);
}))



//filter 
// router.post('/', catchErrors(async(req,res,next) => {
//   console.log(req.body.patterntag);
  
// }))

// router.get('/filter', function(req,res,next){
//   console.log('hi');
  
// })


//전체조회
// router.get('/', function(req, res, next) { 
//   Fabrics.find( {}, function(err, fabrics){ 
//     if (err) return res.status(500).send("fabric 전체 조회 실패.");
//     res.status(200).send(fabrics);
//   })
// }); 


// router.get('/:id', function(req, res, next){
//   Fabrics.findById(req.params.id, function(err, fabric){
//     if (err) return res.status(500).send("fabric 조회 실패");
//     if (!fabric) return res.status(404).send("fabric 없음.");
//     res.status(200).send(fabric);
//   });
// });

//admin 페이지로 옮기기
// fabric 삭제
// router.delete('/:id', function (req, res) {
//   Fabrics.findByIdAndRemove(req.params.id, function (err, fabric) {
//       if (err) return res.status(500).send("fabric 삭제 실패");
//       res.status(200).send("fabric "+ fabric.name +" 삭제됨.");
//   });
// });
// // fabric 수정
// router.put('/:id', function (req, res) {    
//   Fabrics.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, fabric) {
//       if (err) return res.status(500).send("fabric 수정 실패.");
//       res.status(200).send(fabric);
//   });
// });


module.exports = router;