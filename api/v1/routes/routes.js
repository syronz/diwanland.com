var express = require('express');
var router = express();
var hashPassword = require('../base/hashPassword');
var isLogin = require('../base/isLogin');


var User = require('../models/user.js').restful;
var Company = require('../models/company').restful;
var Model = require('../models/model').restful;
// var User = UserTmp.restful;

User.methods(['get', 'post', 'put', 'delete']);
Company.methods(['get', 'post', 'put', 'delete']);
Model.methods(['get', 'post', 'put', 'delete']);



// User.route('',['post'], function(req, res, next) {
//     res.send('I have a recommendation for you!');
// });

Company.route('count', function(req, res, next) {
    this.count({}, function(err, task) {
        if (err)
          res.send(err);
        res.json(task);
      });

    // res.send('I have a recommendation for you!');
  });



User.before('post', function(req, res, next){
    req.body.password = hashPassword(req.body.password);
    next();
}).before('put', function(req, res, next){
    req.body.password = hashPassword(req.body.password);
    next();
});





Company.before('post', isLogin).before('put', isLogin).before('delete', isLogin);
Model.before('post', isLogin).before('put', isLogin).before('delete', isLogin);


User.register(router, '/users');
Company.register(router, '/companies');
Model.register(router, '/models');








module.exports = router;


