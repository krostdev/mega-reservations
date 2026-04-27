const express = require("express");
const app = express();

const reservaRoutes = require("./routes/reservaRoutes.js");

app.use(express.json());
app.use("/reservas", reservaRoutes)

module.exports = app;