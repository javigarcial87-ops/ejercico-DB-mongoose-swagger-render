const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async() => {
    try {
        
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Base de datos conectada con éxito');
    } catch (error) {
        console.log("Error al conectar MongoDB", error)
        process.exit(1);
    }
};

module.exports = connectDB;