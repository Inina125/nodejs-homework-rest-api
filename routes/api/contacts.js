const express = require("express");
const { validation, controllerWrapper } = require("../../middlewares");
const { contactSchema } = require("../../schemas");
const { contacts } = require("../../controllers");

const validateMiddleware = validation(contactSchema);

const router = express.Router();

router.get("/", controllerWrapper(contacts.getAll));

router.get("/:id", controllerWrapper(contacts.getById));

router.post("/", validateMiddleware, controllerWrapper(contacts.add));

router.put("/:id", validateMiddleware, controllerWrapper(contacts.updateById));

router.delete("/:id", controllerWrapper(contacts.removeById));

module.exports = router;
