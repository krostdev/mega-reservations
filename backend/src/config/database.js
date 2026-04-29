const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("[DATABASE] Connection to database successfully established.")
}).catch(err => {
    console.log(`[DATABASE] It was not possible to establish a connection with the database.\n${err.message}`)
})