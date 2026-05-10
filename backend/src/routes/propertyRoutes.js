const express = require("express");
const router = express.Router();

const propertyController = require("../controllers/propertyController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

router.post("/", authMiddleware, propertyController.newProperty); // Create
router.get("/", propertyController.listProperties); // Get
router.get("/:id", propertyController.propertyById); // Get By ID
router.delete("/:id", authMiddleware, propertyController.deleteProperty); // Delete
router.put("/:id", authMiddleware, propertyController.updateProperty);// Update

module.exports = router;