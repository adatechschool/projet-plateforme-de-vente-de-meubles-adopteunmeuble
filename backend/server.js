const express = require("express");
const sequelize = require("./config/db");
const app = express();
const dotenv = require("dotenv").config();
const port = 3000;

//Connexion à la DB MySQL
sequelize
  .authenticate()
  .then(() => console.log("Connecté à la base de données MySQL !"))
  .catch((error) =>
    console.error("Impossible de se connecter à la base de données :", error)
  );

//Middleware pour gérer les données au format  et les url encodées
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Importer les routes "get" exportées depuis le fichier get.routes.js
app.use("/meubles", require("./routes/meubles.routes"));

//Ecouter le serveur et les requêtes entrantes
app.listen(port, () => console.log(`Server running on port ${port}`));
