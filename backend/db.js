require("dotenv").config({ debug: true });
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connecté à la base de données MySQL!");
  })
  .catch((error) => {
    console.error("Impossible de se connecter à la base de données: ", error);
  });
