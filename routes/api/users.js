const express = require("express");

const {
  auth,
  validation,
  upload,
  controllerWrapper,
} = require("../../middlewares");
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

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  controllerWrapper(users.updateAvatar)
);

module.exports = router;
