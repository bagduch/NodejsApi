const Joi = require("@hapi/joi");

const userValidation = (body) => {
  const userSchema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return userSchema.validate(body);
};

const loginValidation = (body)=>{
    const userSchema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
      });
      return userSchema.validate(body);
}
module.exports.userValidation = userValidation;
module.exports.loginValidation = loginValidation;