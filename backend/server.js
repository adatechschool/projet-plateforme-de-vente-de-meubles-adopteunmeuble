// require("dotenv").config({ debug: true });
const express = require("express");
const app = express();
const connectDB = require("./db");
const port = 3000;
const sequelize = require("./db");

// Connect to the database
// connectDB;

// Define a simple route to test the database connection
// app.get("/", async (req, res) => {
//   try {
//     const result = await sequelize.query("SELECT * FROM actor", {
//       type: sequelize.QueryTypes.SELECT,
//     });
//     res.status(200).json(result);
//   } catch (error) {
//     console.error(
//       "Impossible de récupérer les données, erreur suivante :",
//       error
//     );
//     res
//       .status(500)
//       .json(
//         "Une erreur inattendue s'est produite dans la récupération des données."
//       );
//   }
// });

app.listen(port, () => console.log(`Server running on port ${port}`));
