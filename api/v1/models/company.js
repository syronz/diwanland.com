var restful = require('node-restful');
var mongoose = restful.mongoose;

var companies = new mongoose.Schema({
    name: String,
    country: String
});

companies.virtual('companies', {
    ref: 'companies', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'company', // is equal to `foreignField`
    justOne: false
});

exports.restful = restful.model('companies', companies);
