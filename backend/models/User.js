// var mongoose = require('mongoose');  
// const bcrypt = require('bcrypt');

// var UserSchema = new mongoose.Schema({  
//   name: String,
//   userID: String,
//   password: String,
//   grade: String
  
// });

// UserSchema.methods.generateHash = function(password) {
//   return bcrypt.hash(password, 10); // return Promise
// };

// UserSchema.methods.validatePassword = function(password) {
//   return bcrypt.compare(password, this.password); // return Promise
// };

// mongoose.model('User', UserSchema);
// module.exports = mongoose.model('User');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

var UserSchema = new Schema({
  name: String,
  userID: String,
  password: String,
  grade: String
});

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hash(password, 10); // return Promise
};

UserSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password); // return Promise
};

var User = mongoose.model('User', UserSchema);

module.exports = User;