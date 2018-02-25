'use strict';
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var formidable = require('formidable');
var fs = require('fs');
const Model = mongoose.model('models');


exports.uploadBanner = function(req, res) {
    if(req.session.user){
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            
            var oldpath = files.filetoupload.path;
            var newpath = './images/' + fields.id + fields.fileName;
            if(fs.existsSync('./images/' + fields.id+ fields.fileName ))
                fs.unlink('./images/'  + fields.id + fields.fileName, (err) => {
                    if (err) throw err;
                    
                });

            console.log(fields.id, req.session.user);
            let rand = Math.random();
            mongoose.connection.db.collection('models').update(
                {_id:  new mongoose.mongo.ObjectId(fields.id)},
                {$set: {banner: fields.id + fields.fileName }},
                {new: true});

            fs.rename(oldpath, newpath, function (err) {
                console.log('this is id', fields.id);
            });

            res.json({status:true});
        });
    }
    else
        res.json({status:false, flash:{type:'alert-danger', message:"You are not Login"}});

};

exports.uploadImage = function(req, res){
    if(req.session.user){
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            
            var oldpath = files.filetoupload.path;
            var newpath = './images/' + fields.id + fields.fileName;
            if(fs.existsSync('./images/' + fields.id+ fields.fileName ))
                fs.unlink('./images/'  + fields.id + fields.fileName, (err) => {
                    if (err) throw err;
                    
                });

            console.log(fields.id, req.session.user);
            let rand = Math.random();
            mongoose.connection.db.collection('models').update(
                {_id:  new mongoose.mongo.ObjectId(fields.id)},
                {$addToSet: {images: {src: fields.id + fields.fileName, priority:fields.priority, text:fields.text, formType:fields.formType }} },
                {new: true});

                // db.models.update({_id: ObjectId("5a08553559cf1030dc304a7b")}, 
                // {$addToSet : {images:{src:"kkk2", priority:33, text:"this is a text", formType:"chair"}} })

            fs.rename(oldpath, newpath, function (err) {
                console.log('this is id', fields.id);
            });

            res.json({status:true});
        });
    }
    else
        res.json({status:false, flash:{type:'alert-danger', message:"You are not Login"}});
};

exports.delete = function(req, res){
    if(req.session.user){
        console.log(req.params.imageName);

        if(req.params.idElement){
            mongoose.connection.db.collection('models').update(
                {_id:  new mongoose.mongo.ObjectId(req.params.idElement)},
                {$pull: {images: {src: req.params.imageName }} },
                {new: true});

                // db.models.update({ _id: ObjectId("5a08553559cf1030dc304a7b")}, {$pull : { "images" : {"src":"kkk23"} } } )
        }
        if(fs.existsSync('./images/' + freq.params.imageName ))
            fs.unlink('./images/' + req.params.imageName, (err) => {
            if (err) throw err;
            res.json({status:true});
            });
    }
    else
        res.json({status:false, flash:{type:'alert-danger', message:"You are not Login"}});
}




