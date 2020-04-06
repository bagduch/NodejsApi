const jwt = require("jsonwebtoken");

module.exports.isLogin = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) res.status(401).send("Access Deny!");
  try {
    const verified = jwt.verify(token,process.env.TOKEN);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
