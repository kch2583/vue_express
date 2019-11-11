var express = require('express'); 
var path = require("path") 
var router = express.Router(); 
var Users = require('../models/User');
var Fabrics = require('../models/Fabric');
const catchErrors = require('../lib/async-error.js');
var passport = require('passport')
var jwt = require('jsonwebtoken')
var app = express();


// admin login
// router.post('/', passport.authenticate('local-signin', {
//   // successRedirect : '/api/admin/settings', // redirect to the secure profile section
//   // failureRedirect : '/api/admin/login', // redirect back to the signup page if there is an error
  
  
// }))

// router.post('/', catchErrors(async(req, res, next) => {  
//   console.log("hi");
  
// }))
  



//---------- product page-----------------------------------------------------

// show admin product page          done
router.get('/settings/product', catchErrors(async(req, res, next) => {
  const fabrics = await Fabrics.find({}, function(err, fabrics){
    if(err) return res.status(500).send({error: 'database failure'});
  })   
    res.send(fabrics);
}));

//create product data                  done
router.post('/settings/product', catchErrors(async(req, res, next) => {  
  var fabric = new Fabrics({
    number : req.body.number,
    pattern : req.body.pattern,
    color : req.body.color,
    image : req.body.image,
  })
  await fabric.save();
}))
  
//edit product data         done
router.put('/settings/product/:id', catchErrors(async(req, res, next) => {
  const fabric = await Fabrics.findById(req.params.id)

  fabric.number = req.body.number;
  fabric.pattern = req.body.pattern;
  fabric.color = req.body.color;
  fabric.image = req.body.image;

  await fabric.save();

  //   Fabrics.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, fabric) {
//       if (err) return res.status(500).send("fabric 수정 실패.");
//       res.status(200).send(fabric);
//   });
}))

//delete product data             done
router.delete('/settings/product/:id', catchErrors(async(req, res, next) => {
  const fabric = await Fabrics.findById(req.params.id)
  
  await fabric.delete();
  await fabric.save();
  // Fabrics.findByIdAndRemove(req.params.id, function (err, fabric) {
    //       if (err) return res.status(500).send("fabric 삭제 실패");
    //       res.status(200).send("fabric "+ fabric.name +" 삭제됨.");
    //   });
    
}))


// -------- user page --------------------------------------------------------

router.get('/settings/user', catchErrors(async(req, res, next) => {
  const users = await Users.find({}, function(err, users){
    if(err) return res.status(500).send({error: 'database failure'});
  })   
    res.send(users);
}));


//create manager
// router.post('/settings/user', catchErrors(async(req, res, next) => {

//   Users.findOne({userID: req.body.userID}, function(err, user) {
//     if (err) {
//         res.json({
//             type: false,
//             data: "Error occured: " + err
//         });
//     } else {
//         if (user) {
//             res.json({
//                 type: false,
//                 data: "User already exists!"
//             });
//         } else {

//           const user = new Users({
//             name: req.body.name,
//             userID: req.body.userID,
//             grade: req.body.grade
//           })
//           user.password = user.generateHash(req.body.password);
        
//           user.save(function(err, user){
//             user.token = jwt.sing(user, process.env.JWT_SECRET);
//             user.save(function(err, user1){
//               res.json({
//                 type:true,
//                 data: user1,
//                 token:user1.token
//               })
//             })
//           });
//         }
//     }
// });

router.post('/settings/user', catchErrors(async(req, res, next) => {
  var user = await  Users.findOne({userID: req.body.userID})
  if (user) {
    res.json({
      type: false,
      data: "User already exists!"
    })
  }else {
    const user = new Users({
      name: req.body.name,
      userID: req.body.userID,
      grade: req.body.grade
    })
    user.password = user.generateHash(req.body.password);
  
    await user.save()
      
    }
}));

  


//edit user data         done
router.put('/settings/user/:id', catchErrors(async(req, res, next) => {
  console.log(req.user);
  
  
  // const fabric = await Fabrics.findById(req.params.id)

  // fabric.number = req.body.number;
  // fabric.pattern = req.body.pattern;
  // fabric.color = req.body.color;
  // fabric.image = req.body.image;

  // await fabric.save();
}))

//delete user data             done
router.delete('/settings/user/:id', catchErrors(async(req, res, next) => {
  console.log(req.user);
  
  // const fabric = await Fabrics.findById(req.params.id)
  
  // await fabric.delete();
  // await fabric.save();
    
}))








// -----------------------------------------------------


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
