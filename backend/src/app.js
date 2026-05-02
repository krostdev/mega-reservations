const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const propertyRoutes = require("./routes/propertyRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

app.use(express.json());
app.use(cookieParser());

app.use("/properties", propertyRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
    res.send("Mega Reservations API is running 🚀");
});

module.exports = app;