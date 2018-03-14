var request = require('request');
//var bcrypt = require('bcrypt');
var bcrypt = require('bcrypt-nodejs');

exports.getUrlTitle = function(url, cb) {
  request(url, function(err, res, html) {
    if (err) {
      console.log('Error reading url heading: ', err);
      return cb(err);
    } else {
      var tag = /<title>(.*)<\/title>/;
      var match = html.match(tag);
      var title = match ? match[1] : url;
      return cb(err, title);
    }
  });
};

var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

exports.isValidUrl = function(url) {
  return url.match(rValidUrl);
};

/************************************************************/
// Add additional utility functions below
/************************************************************/

exports.checkUser = function (request, response) {
  
}
exports.getNewUserHashedPasswordAndSalt = function(username, password, cb) {
  console.log("this is getNewUserHashedPasswordAndSalt: ");
  
  //cb(null, 'hashedPassword_TEST', 'salt_TEST');
  bcrypt.genSalt(10, function(err, salt) {
      console.log('this is the salt: ', salt);
      
      bcrypt.hash(password, salt, ()=>{console.log('Hashing.......')}, function(err, hash) {
        console.log('this is the hash: ', hash);
        // Store hash in your password DB.
        cb(null, hash, salt);
      });
  });
}
  
  // login page
  // username: bob
  // passwordRAW: wubbawubba
  
  //submit -------> post request ----> request body (username, password) ---->
  //  get a user record object for the name associated with username
  //     matchedUserName ----> salt, username, hashedpassword
  
  //   salt + passwordRaw -----> hash it ===== POTENTIAL MATCH PASSWORD
  
  //   compare the POTENTIAL MATCH with the hashed password in the database for that username
  
  //  if username exists
  //     checkUser (passwordRAW, salt, passwordHashed, cb)
  //        
  

 

// // Load password hash from DB
// bcrypt.compare("my password", hash, function(err, res) {
//     // res === true
// });
// bcrypt.compare("not my password", hash, function(err, res) {
//     // res === false
// });