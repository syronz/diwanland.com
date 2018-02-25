'use strict';
// var mongoose = require('mongoose');
var fs = require('fs');
var http = require('http');
var url = require('url');

module.exports = function(req, res) {

        if(fs.existsSync('./images/' + req.params.imageName )){
                var img = fs.readFileSync( './images/' + req.params.imageName );

                res.writeHead(200, {'Content-Type': 'image/gif' });
                res.end(img, 'binary');   
        }

        

        else{
                res.send(false);
        }
                
        

        // res.end('diako' + req.params.imageName);

};
