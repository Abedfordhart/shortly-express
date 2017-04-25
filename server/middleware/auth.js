const models = require('../models');
const Promise = require('bluebird');
const utils = require('../lib/hashUtils');

module.exports.createSession = (req, res, next) => {
  if(req.cookies.shortlyid){
    req.session = {'hash' : '456'}

  } else {
    req.session = {'hash' : utils.hash(Math.random().toString())}
    res.cookies.shortlyid = {} 
    res.cookies.shortlyid.value = req.session.hash
  }
  next();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

