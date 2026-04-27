const dotenv = require("dotenv").config();
const express = require("express");
const dns = require("node:dns");
const app = require("./src/app.js");

const PORT = process.env.PORT || 5050

dns.setServers(["1.1.1.1", "1.0.0.1"]);
require("./src/config/database.js");

app.listen(PORT, () => {
    console.log(`[SERVER] Servidor iniciado na porta ${PORT}.`)
});