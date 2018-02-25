'use strict';
var crypto = require('crypto');

module.exports = function(v) {
    var hash = crypto.createHmac('sha256', v)
    .update('go to canada')
    .digest('hex');
    return hash;
};
