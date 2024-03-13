require("dotenv").config({ debug: true });
const express = require("express");
const app = express();
const port = 3000;
// const { Sequelize } = require("sequelize");
const meublesRouter = require("./routes/meubles.routes");

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   { dialect: "mysql", host: process.env.DB_HOST, port: process.env.DB_PORT }
// );

//Middleware pour gérer les données au format  et les url encodées
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Middleware pour gérer les CORS
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Content, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

//Importer les routes exportées depuis le fichier meubles.routes.js
app.use("/products", meublesRouter);

// Middleware for handling errors
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({ error: err.message});
});

app.listen(port, () => console.log(`Server running on port ${port}`));
