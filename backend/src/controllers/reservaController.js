const Reservation = require("../models/Reservations.js");

const createReservation = async (req, res) => {
    try {
        const { property, checkIn, checkOut, guests, totalPrice } = req.body;

        if (!property || !checkIn || !checkOut || !guests || !totalPrice) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields: property, checkIn, checkOut, guests or totalPrice"
            });
        };

        const userId = req.user.id;

        const reservation = await Reservation.create({
            user: userId,
            property,
            checkIn,
            checkOut,
            guests,
            totalPrice
        });

        return res.status(201).json({
            success: true,
            data: reservation
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    };
};

module.exports = { createReservation };