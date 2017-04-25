const parseCookies = (req, res, next) => {
  var cookie = decodeURIComponent(req.headers.cookie)
  var cookieArr = cookie.split('; ').map((oneCookie)=>{return oneCookie.split('=')});
  var cookieObj = {}


  for(var i = 0; i < cookieArr.length; i ++){
  	cookieObj[cookieArr[i][0]] = cookieArr[i][1]; 
  }
  
  req.cookies = cookieObj

  if(req.headers.cookie === undefined) {
  	req.cookies =  {};
  }
  next()
};

module.exports = parseCookies;