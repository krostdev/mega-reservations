const dotenv = require("dotenv").config()

const dns = require("node:dns")
dns.setServers(["1.1.1.1", "1.0.0.1"]);

require("./src/config/database.js");