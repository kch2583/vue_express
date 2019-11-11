

  // module.exports = function(app, passport){
  //   var catchErrors = require('../lib/async-error');
  //   var jwt = require('jsonwebtoken')
  
  


  //     // successRedirect : '/api/admin/settings', // redirect to the secure profile section
  //     // failureRedirect : '/api/admin', // redirect back to the signup page if there is an error
  //      // failureFlash : true // allow flash messages 
  

  //      app.post("/api/auth/login", function(req,res,next) {

  //       passport.authenticate('localSignin', function(err, user, info) {
  //         if (err) {
  //           next(err);
  //       }
    
  //         console.log(user);
  //         if(!user) {
  //           return res.send({
  //             type: 'error',
  //             message: '아이디나 비밀번호가 틀렸습니다.'
  //           })
  //         } else {
  //           var token = jwt.sign({
  //             userID: user.userID
  //           },'qweruiop');
  //           console.log(token, user);
  //           return res.send({
  //             token,
  //             user
  //           })
  //         }
          
    
      
  //   })
  //     }
        
      
  //     );
          
        
    
    
  //     app.get('/logout', (req, res) => {
  //       req.logout();
  //       req.flash('success', 'Successfully signed out');
  //       res.redirect('/admin');
  //     });
    
    
    
  // }
  var express = require('express');
  var router = express.Router(); 
  const catchErrors = require('../lib/async-error.js');
  var User = require('../models/User')
  var jwt = require('jsonwebtoken')
  var app = express();
  
  
  router.post('/login', catchErrors(async(req, res, next) => {
    var user = await User.findOne({userID:req.body.userID})

    if(!user){
      return res.send({
        value:true,
        type: 'error',
        message: '사용자 정보가 없습니다.'
      })
      //유저가 아이디가 없을때
    } else {
     // if (user && await user.validatePassword(user.password)) {
      if (user && await user.validatePassword(req.body.password)) {
        //정상적 로그인
        var token = jwt.sign({
          userID: req.body.userID,
          exp: Math.floor(Date.now() / 1000) + (60 * 60)
          },'qweruiop');
        
        return res.send({ token })
      } else {
        //비밀번호가 틀릴때
        return res.send({
          value:true,
          type: 'warning',
          message: '아이디나 비밀번호가 틀렸습니다.'
        })
      }
    }
  }))

  // router.get('/check', catchErrors(async(req, res, next) => {

  // }))
  
module.exports = router;