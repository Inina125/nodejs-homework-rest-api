const express = require("express");

const { auth, validation, controllerWrapper } = require("../../middlewares");
const { users } = require("../../controllers");
const { subscriptionSchema } = require("../../schemas/users");
const router = express.Router();

router.get("/current", auth, controllerWrapper(users.getCurrent));

router.patch(
  "/subscription",
  auth,
  validation(subscriptionSchema),
  controllerWrapper(users.updateSubscription)
);

module.exports = router;
