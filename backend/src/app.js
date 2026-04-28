const express = require("express");
const app = express();

const propertyRoutes = require("./routes/propertyRoutes.js")

app.use(express.json());

app.use("/properties", propertyRoutes)

app.get("/", (req, res) => {
    res.send("Mega Reservations API is running 🚀")
})

module.exports = app;