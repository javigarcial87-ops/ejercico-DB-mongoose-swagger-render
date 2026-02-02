const express = require("express");
const connectDB = require("./config/config");

const taskRoutes = require("./routes/tasks");

require("dotenv").config();

const app = express();
app.use(express.json());


connectDB()

app.use("/tasks", taskRoutes);


const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});




