var restful = require('node-restful');
var mongoose = restful.mongoose;

var users = new mongoose.Schema({
    name: String,
    username: String,
    password: String
});

exports.restful = restful.model('users', users);

exports.base = mongoose.model('users', users);
