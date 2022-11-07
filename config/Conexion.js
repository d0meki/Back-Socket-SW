const mongoose = require('mongoose');


const conexion = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log("DB Up");
    } catch (error) {
        console.log("Error DB down");
    }
}

module.exports = {
    conexion
}