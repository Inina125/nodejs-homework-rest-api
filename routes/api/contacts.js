const express = require("express");
const { validation, controllerWrapper } = require("../../middlewares");
const { contacts } = require("../../controllers");
const { schemas } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", controllerWrapper(contacts.getAll));

router.get("/:id", controllerWrapper(contacts.getById));

router.post(
  "/",
  validation(schemas.addSchema, "missing required field"),
  controllerWrapper(contacts.add)
);

router.put(
  "/:id",
  validation(schemas.updateSchema, "missing required field"),
  controllerWrapper(contacts.updateById)
);

router.patch(
  "/:id/favorite",
  validation(schemas.updateStatusSchema, "missing field favorite"),
  controllerWrapper(contacts.updateStatusContact)
);

router.delete("/:id", controllerWrapper(contacts.removeById));

module.exports = router;
