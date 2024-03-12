require("dotenv").config({ debug: true });
const { Sequelize, DataTypes } = require("sequelize");

//Initialisation de la connexion primaire à la base de données via Sequelize
const sequelizeInit = new Sequelize(
  "sys",
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { dialect: "mysql", host: process.env.DB_HOST, port: process.env.DB_PORT }
);

sequelizeInit.query("CREATE DATABASE IF NOT EXISTS `plateforme_de_meubles`;");

// TODO Connexion à la BDD plateforme_de_meubles (via le fichier .env à créer !)
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { dialect: "mysql", host: process.env.DB_HOST, port: process.env.DB_PORT }
);

const Furniture = sequelize.define("furniture", {
  // defines a new model, which represents a table in the database
  name: {
    type: DataTypes.STRING,
    allowNull: false, // shows that the model column value cannot be null
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  picture: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING,
  },
  dimensions: {
    type: DataTypes.INTEGER,
  },
  material: {
    type: DataTypes.STRING,
  },
  item_condition: {
    type: DataTypes.STRING,
  },
  item_status: {
    type: DataTypes.BOOLEAN,
  },
});

// ? Sequelize will automatically perform an SQL query to the database and create a table, printing the message Book table created successfully!
// ? Vérifier l'utilité de la fonction !
sequelize
  .sync()
  .then(() => {
    console.log("Furniture table created successfully!");

    // Ajout des données produits après la création de la table
    return Furniture.bulkCreate(
      [{
      name: 'Bureau en verre',
      category: 'Bureau',
      price: 400,
      picture: 'bureau1.jpg',
      description: 'Bureau en verre élégant et moderne',
      color: 'Transparent',
      dimensions: 120,
      material: 'Glass',
      item_condition: 'New',
      item_status: true,
    },
    {
      name: 'Canapé convertible',
      category: 'Canapé',
      price: 750,
      picture: 'canape1.jpg',
      description: 'Canapé convertible confortable et pratique',
      color: 'Gris',
      dimensions: 200,
      material: 'Fabric',
      item_condition: 'New',
      item_status: true,
    },
    {
      name: 'Table à manger en bois massif',
      category: 'Table à manger',
      price: 550,
      picture: 'table1.jpg',
      description: 'Table à manger en bois massif rustique',
      color: 'Chêne',
      dimensions: 150,
      material: 'Wood',
      item_condition: 'New',
      item_status: true,
    },
    {
      name: 'Armoire de rangement',
      category: 'Armoire',
      price: 600,
      picture: 'armoire1.jpg',
      description: 'Armoire de rangement spacieuse avec portes coulissantes',
      color: 'Blanc',
      dimensions: 180,
      material: 'MDF',
      item_condition: 'New',
      item_status: true,
    },
    {
      name: 'Chaise de bureau ergonomique',
      category: 'Chaise de bureau',
      price: 200,
      picture: 'chaise1.jpg',
      description: 'Chaise de bureau ergonomique pour un confort optimal',
      color: 'Noir',
      dimensions: 65,
      material: 'Mesh',
      item_condition: 'New',
      item_status: true,
    },
    {
      name: 'Lit double avec rangement',
      category: 'Lit',
      price: 800,
      picture: 'lit1.jpg',
      description: 'Lit double élégant avec tiroirs de rangement intégrés',
      color: 'Marron',
      dimensions: 160,
      material: 'Leather',
      item_condition: 'New',
      item_status: true,
    },
    {
      name: 'Étagère murale moderne',
      category: 'Étagère',
      price: 120,
      picture: 'etagere1.jpg',
      description: 'Étagère murale moderne pour afficher vos objets préférés',
      color: 'Noir',
      dimensions: 80,
      material: 'Metal',
      item_condition: 'New',
      item_status: true,
    },
    {
      name: 'Buffet en bois laqué',
      category: 'Buffet',
      price: 550,
      picture: 'buffet1.jpg',
      description: 'Buffet en bois laqué au design contemporain',
      color: 'Gris',
      dimensions: 120,
      material: 'Wood',
      item_condition: 'New',
      item_status: true,
    }]
    );
  })
  .then(() => {
    console.log('Données insérées avec succès dans la table furniture!');
  })
  .catch((error) => {
    console.error("Unable to create table or insert data: ", error);
  });
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

//Exporte la connexion à la base de données
module.exports = sequelize;
