const express = require("express");
const router = express.Router();

const propertyController = require("../controllers/propertyController.js");

router.post("/", propertyController.newProperty);
router.get("/", propertyController.listProperties);
router.get("/:id", propertyController.propertyById);
router.delete("/:id", propertyController.deleteProperty);

module.exports = router;