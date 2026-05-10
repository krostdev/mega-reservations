const express = require("express");
const router = express.Router();

const reservationController = require("../controllers/reservaController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

router.post("/", authMiddleware, reservationController.createReservation);

module.exports = router;