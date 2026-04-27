const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("[SUCCESS] Conexão com database estabelecida com sucesso.")
}).catch(err => {
    console.log(`[ERROR] Não foi possivel estabelecer a conexão com o banco de dados.\n${err.message}`)
})