const { BadRequest } = require("http-errors");

const validation = (schema, message = "") => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return next(BadRequest(message));
    }
    next();
  };
};

module.exports = validation;
