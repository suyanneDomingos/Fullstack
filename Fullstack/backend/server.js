// server.js
require("dotenv").config();
const express = require("express");

const cors = require("cors");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);
const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
  console.log("Banco de dados sincronizado");
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
