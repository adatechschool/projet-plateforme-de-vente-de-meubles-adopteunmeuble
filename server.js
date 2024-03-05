require("dotenv").config({ debug: true });
const express = require("express");
const app = express();
const port = 3000;
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { dialect: "mysql", host: process.env.DB_HOST, port: 3308 }
);

app.get("/actor", async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log("Connecté à la base de données MySQL!");
    sequelize
      .query("SELECT * FROM actor", { type: sequelize.QueryTypes.SELECT })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        console.error(
          "Impossible de récupérer les données, erreur suivante :",
          error
        );
        res
          .status(500)
          .json(
            "Une erreur inattendue s'est produite dans la récupération des données."
          );
      });
  } catch (error) {
    console.error("Impossible de se connecter, erreur suivante :", error);
    res.status(500).json("Une erreur s'est produite.");
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
