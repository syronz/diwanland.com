'use strict';
var mongoose = require('mongoose');

var formidable = require('formidable');
var fs = require('fs');

module.exports = function(req, res) {
    // console.log(req);

    // form.parse(req, function (err, fields, files) {
    //     console.log(files);
    //   var oldpath = files.filetoupload.path;
    //   var newpath = './' + files.filetoupload.name;
    //   fs.rename(oldpath, newpath, function (err) {
    //     if (err) throw err;
    //     res.write('File uploaded and moved!');
    //     res.end();
    //   });
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log(fields.id);
        var oldpath = files.filetoupload.path;
        var newpath = './images/' + fields.id + '.jpg';
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.json('File uploaded and moved!');
            res.end();
        });
    });

    // res.json('it is work');
};
