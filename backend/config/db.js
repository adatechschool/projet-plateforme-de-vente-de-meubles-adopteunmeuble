const { Sequelize } = require("sequelize");
require("dotenv").config({ debug: true });

//Etablit la connexion à la base de données via Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { dialect: "mysql", host: process.env.DB_HOST, port: 3308 }
);

//Effectue un test de connexion à la base de données
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connecté à la base de données MySQL !");
  } catch (error) {
    console.error("Impossible de se connecter à la base de données :", error);
  }
}

testConnection();

module.exports = sequelize;

// app.get("/actor", async (req, res) => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connecté à la base de données MySQL!");
//     sequelize
//       .query("SELECT * FROM actor", { type: sequelize.QueryTypes.SELECT })
//       .then((result) => {
//         res.status(200).json(result);
//       })
//       .catch((error) => {
//         console.error(
//           "Impossible de récupérer les données, erreur suivante :",
//           error
//         );
//         res
//           .status(500)
//           .json(
//             "Une erreur inattendue s'est produite dans la récupération des données."
//           );
//       });
//   } catch (error) {
//     console.error("Impossible de se connecter, erreur suivante :", error);
//     res.status(500).json("Une erreur s'est produite.");
//   }
// });
