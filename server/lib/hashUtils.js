const crypto = require('crypto');

/************************************************************/
// Add any hashing utility functions below
/************************************************************/

exports.hash = (password)=> {
	//console.log(crypto.createHmac('sha256', password))
	return crypto.createHmac('sha256', password).digest('hex')
};

//.get(req.body)

//.get('username' : req.body.username, 'password': hash(req.body.password))