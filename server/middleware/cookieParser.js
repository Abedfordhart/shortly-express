const parseCookies = (req, res, next) => {
  req.cookie = req.headers.cookie
  console.log(req.headers.cookie)
  next()
};

module.exports = parseCookies;