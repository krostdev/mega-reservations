const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware.js");
const userController = require("../controllers/userController.js");

router.post("/signin", userController.createUser);
router.post("/login", userController.loginUser);
router.post("/logout", authMiddleware, userController.logoutUser);
router.get("/me", authMiddleware, userController.getUser);

module.exports = router;