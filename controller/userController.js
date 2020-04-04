const User = require("../model/user");

exports.register = async function(req, res) {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  console.log(newUser);
  try {
    const user = await newUser.save();
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
};
