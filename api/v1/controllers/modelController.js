'use strict';
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Model = mongoose.model('models');


exports.random = function(req, res) {
    
        Model.count({'category': req.params.category}, function(err, count) {

            var skip = Math.floor(Math.random() * count);

            // db.Colletion.find().limit( 50 ).skip( _rand() * db.Collection.count() ) 
            // Model.find({ 'category': req.params.category }, 'name _id',{ skip: 1, limit: 1 }, function (err, Model) {
            //     if (err) return handleError(err);
            //     console.log('%s %s is a %s.', Model.name.first, Model.name.last, Model.occupation);
            //     res.json({status:true, data: Model, count: count, skip:skip});
            // })

            Model.find({ 'category': req.params.category }, 'name _id banner').limit(1).skip(skip).populate('company').exec(function(err,models){
                res.json({status:true, data: models});
            });

       });

};





