
var express = require('express'),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
morgan = require('morgan'),
restful = require('node-restful'),
mongoose = restful.mongoose;
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());

mongoose.connect("mongodb://localhost/simple_auth");

var User = app.resource = restful.model('users', mongoose.Schema({
    name: String,
    username: String,
    password: String
}))
.methods(['get', 'post', 'put', 'delete']);

User.route('test', function(req, res, next) {
    res.send('I have a recommendation for you!');
});

User.register(app, '/users');

app.listen(3000);