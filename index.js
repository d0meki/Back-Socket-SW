const Servidor = require("./servidor");
const { conexion } = require("./config/Conexion");

//environment var
require('dotenv').config();

//DB
conexion();

// const mongoose = require('mongoose');


// const conexion = async () => {
//     try {
//        // mongoose.connect(process.env.DB_HOST);
//         mongoose.connect(process.env.MONGODB_CNN)
//         console.log("DB Up");
//     } catch (error) {
//         console.log("Error DB down");
//     }
// }
// const URI = `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`
//const URI = `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`
// mongoose.connect(process.env.MONGODB_CNN)
//  .then(db => console.log('base de datos conectada'))
//  .catch(err => console.log(err))  
//server
const server = new Servidor();

server.execute();
