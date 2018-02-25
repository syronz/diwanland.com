'use strict';
var hashPassword = require('../base/hashPassword');
var mongoose = require('mongoose'),
    User = mongoose.model('users');



exports.doLogin = function(req, res) {
    // var userData = new User(req.body);
    // req.session.username = 'hi';

    
    console.log(req.session);
    // res.json(req.body);

    let password = hashPassword(req.body.password);

    var n = User.findOne({username:req.body.username, password:password}, function(err, user) {
        if (err)
            res.send(err);
        if(user){
            req.session.user = {id:user.id, username:user.username, name: user.name};
            res.json({status:true, flash:{type:'alert-success', message:"Login sucessful"}});
        }
        else{
            res.json({status:false, flash:{type:'alert-danger', message:"Username or password is wrong!"}});
        }

    });
};

exports.checkLogin = function(req, res){
    if(req.session.user)
        res.json({status:true, data:req.session.user});
    else
        res.json({status:false, flash:{type:'alert-danger', message:'You are not login'}});
};

exports.logOut = function(req, res){
    delete req.session.user;
    res.json({status:true});
}


