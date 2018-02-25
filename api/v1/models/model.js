var restful = require('node-restful');
var mongoose = restful.mongoose;

var models = new mongoose.Schema({
    name: String,
    company: {
        type: mongoose.Schema.ObjectId,
        ref: 'companies'
    },
    category: String,
    code: String,
    color: String,
    internalCode: String,
    banner: String,
    images: [{ src: String, priority: Number, text: String, formType: String}],
    priority: Number,
    price: Number,
    explainOneLine: String,
    overview: String,
    // details: {
    //     dimension: String,
    //     design: String,
    //     assembly: String,
    //     fabric: String,
    //     roomType:String
    // },
    date:  {
        type: Date, 
        default: Date.now
    }
});

exports.restful = restful.model('models', models);
