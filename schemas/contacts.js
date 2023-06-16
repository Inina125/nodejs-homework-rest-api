const Joi = require("Joi");

const addSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(7).max(16).required(),
  favorite: Joi.boolean(),
});

const updateSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(7).max(16).required(),
  favorite: Joi.boolean().required(),
});

const updateStatusSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = {
  addSchema,
  updateSchema,
  updateStatusSchema,
};

module.exports = {
  schemas,
};
