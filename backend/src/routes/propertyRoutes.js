const express = require("express");
const router = express.Router();

const propertyController = require("../controllers/propertyController.js");

router.post("/", propertyController.newProperty); // Create
router.get("/", propertyController.listProperties); // Get
router.get("/:id", propertyController.propertyById); // Get By ID
router.delete("/:id", propertyController.deleteProperty); // Delete
router.put("/:id", propertyController.updateProperty);// Update

module.exports = router;