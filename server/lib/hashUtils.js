const crypto = require('crypto');

/************************************************************/
// Add any hashing utility functions below
/************************************************************/

exports.hash = (password)=> {
	return crypto.createHmac('sha256', password);
}