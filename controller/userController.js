const User = require("../model/user");
var bcrypt = require("bcryptjs");
const { userValidation } = require("../validation/userValidation");

exports.register = async function (req, res) {
  //validation user
  const { error } = userValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check if user exist
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email Already Exist");

  //Hash Password
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  //create User
  const newUser = new User({
    name: req.body.name,
    email: req.body.email, 
    password: hashedPassword,
  });
  try {
    const user = await newUser.save();
    res.send(user);
  } catch (err) {
    s;
    res.status(400).send(err);
  }
};
exports.login = async function (req, res) {
  //find user
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or Password Wrong!");

  const validPass = await bcrypt.compareSync(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Email or Password Wrong!");

  res.send("logged in");
};

exports.getUser = async function (req, res) {};
