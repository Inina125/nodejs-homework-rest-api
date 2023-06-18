const express = require("express");

const { auth, validation, controllerWrapper } = require("../../middlewares");

const { auth: ctrl } = require("../../controllers");
const {
  signupSchema,
  loginSchema,
  verifyEmailSchema,
} = require("../../schemas/users");

const router = express.Router();

router.post(
  "/signup",
  validation(signupSchema),
  controllerWrapper(ctrl.signup)
);

router.get("/verify/:verificationToken", controllerWrapper(ctrl.verifyEmail));

router.post(
  "/verify",
  validation(verifyEmailSchema),
  controllerWrapper(ctrl.resendVerifyEmail)
);

router.post("/login", validation(loginSchema), controllerWrapper(ctrl.login));

router.post("/logout", auth, controllerWrapper(ctrl.logout));

module.exports = router;
