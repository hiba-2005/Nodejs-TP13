require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const apiRoutes = require("./routes/api");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "Node Production API",
    message: "Application déployée avec succès",
    mode: process.env.NODE_ENV || "development",
    date: new Date().toLocaleString()
  });
});

app.use("/api", apiRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route introuvable"
  });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});