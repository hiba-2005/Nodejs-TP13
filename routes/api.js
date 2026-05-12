const express = require("express");
const router = express.Router();

router.get("/health", (req, res) => {
  res.json({
    success: true,
    status: "online",
    service: "production-api"
  });
});

router.get("/info", (req, res) => {
  res.json({
    project: "TP 13 Déploiement Node.js",
    author: "Étudiant",
    version: "1.0.0"
  });
});

module.exports = router;