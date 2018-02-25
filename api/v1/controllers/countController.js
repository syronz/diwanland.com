'use strict';
var mongoose = require('mongoose');

module.exports = function(req, res) {
    var search = {};

    if(req.params.str){
        let tmp = req.params.str.split("=");
        search[tmp[0]] = tmp[1];
    }

    // if(req.session.user){
        

        // mongoose.connection.db.collection('models').update(
        //     {_id:  new mongoose.mongo.ObjectId('5a099badf7589f29482ed653')},
        //     {$set: {code: 'no man'}},
        //     {new: true});


        mongoose.connection.db.collection(req.params.collection).count(search, function(err, c) {
            res.json(c);
        });
    // } 
    // else
    //     res.json({status:false, flash:{type:'alert-danger', message:"You are not Login"}});
};
