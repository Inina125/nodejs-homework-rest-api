const contactsOperations = require("../../models/contacts");
const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const add = async (req, res) => {
  const { _id } = req.user;
  const result = await Contact.create({ ...req.body, owner: _id });
  res.status(201).json(result);
};

const getAll = async (req, res) => {
  const contacts = await Contact.find({});
  res.json(contacts);
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw new NotFound(`Not found`);
  }
  res.json(result);
};

const removeById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw new NotFound(`Not found`);
  }
  res.json(result);
};

const updateById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw new NotFound(`Not found`);
  }
  res.json(result);
};

const updateStatusContact = async (req, res, next) => {
  const { id } = req.params;
  const { favorite } = req.body;
  const result = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    { new: true }
  );
  if (!result) {
    throw new NotFound(`Not found`);
  }
  res.json(result);
};

module.exports = {
  add,
  getAll,
  getById,
  removeById,
  updateById,
  updateStatusContact,
};
