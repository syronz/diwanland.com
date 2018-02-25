var express = require('express');
var cors = require('cors');
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');

var corsSettings = {
  origin: true,
  methods: ['POST','GET','DELETE','PUT'],
  credentials: true
};


mongoose.connect('mongodb://localhost/simple_auth');

var app = express();
app.use(cors(corsSettings));
app.use(session({secret: 'diakoIsGood', cookie: { secure: false }}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());


//^ regular Route
app.use('/', require('./routes/routes.js'));
//* regular Route

//^ extended API
User = require('./models/user').base;
Task = require('./models/todoListModel');
var routes = require('./routes/extendedRoutes');
routes(app);
//* extended API




app.listen(3500);
console.log('API is running on port 3500');
