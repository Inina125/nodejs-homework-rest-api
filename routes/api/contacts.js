const express = require("express");
const { auth, validation, controllerWrapper } = require("../../middlewares");
const { contacts } = require("../../controllers");
const { schemas } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", auth, controllerWrapper(contacts.getAll));

router.get("/:id", auth, controllerWrapper(contacts.getById));

router.post(
  "/",
  auth,
  validation(schemas.addSchema, "missing required field"),
  controllerWrapper(contacts.add)
);

router.put(
  "/:id",
  auth,
  validation(schemas.updateSchema, "missing required field"),
  controllerWrapper(contacts.updateById)
);

router.patch(
  "/:id/favorite",
  auth,
  validation(schemas.updateStatusSchema, "missing field favorite"),
  controllerWrapper(contacts.updateStatusContact)
);

router.delete("/:id", auth, controllerWrapper(contacts.removeById));

module.exports = router;
