'use strict';

module.exports = function(req, res, next) {
    // console.log(req.session);
    // res.json(req.session);
    if(req.session.user != undefined)
        next();
    else
        res.json({status:false, flash:{type:'alert-danger', message:"You are not Login"}});
};
