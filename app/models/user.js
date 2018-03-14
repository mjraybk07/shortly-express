var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var crypto = require('crypto');



var User = db.Model.extend  ({
  tableName: 'users',
  hasTimestamps: true
  
  // initialize: function () {
  //     this.on('creating', function(model, attrs, options) {
  //     // var salt = crypto.createHash('sha1');
  //     // salt.update(model.get('salt'));
  //     // model.set('salt', shasum.digest('hex').slice(0, 5));
  //     model.set('password', '98273927384927834987');
  //     model.set('salt', 'khsfkhdskhfds');
  //   });
  //}
});

module.exports = User;