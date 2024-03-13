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

// creation base de donnée photo :

const Photo = sequelize.define('photo', {
    id_item: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    photo_rank: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    src: {
      type: Sequelize.STRING,
      allowNull: false
    },
    alt: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });


// ? Sequelize will automatically perform an SQL query to the database and create a table, printing the message Book table created successfully!
// ? Vérifier l'utilité de la fonction !
sequelize
  .sync()
  .then(() => {
    console.log("Furniture table created successfully!");

    // Ajout des données produits après la création de la table Furniture
    return Furniture.bulkCreate(
      [{
      name: 'Bureau en verre',
      category: 'Salon',
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
      category: 'Salon',
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
      category: 'Cuisine',
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
      category: 'Chambre',
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
      category: 'Salon',
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
      category: 'Chambre',
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
      category: 'Entrée',
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
      category: 'Cuisine',
      price: 550,
      picture: 'buffet1.jpg',
      description: 'Buffet en bois laqué au design contemporain',
      color: 'Gris',
      dimensions: 120,
      material: 'Wood',
      item_condition: 'New',
      item_status: true,
    },
    {
      name: 'Table basse en verre trempé',
      category: 'Salon',
      price: 250,
      picture: 'tablebasse1.jpg',
      description: 'Table basse design en verre trempé avec piètement en acier inoxydable',
      color: 'Transparent',
      dimensions: 100,
      material: 'Glass and Stainless Steel',
      item_condition: 'New',
      item_status: true,
      },
      {
        name: 'Canapé convertible en tissu',
        category: 'Salon',
        price: 1000,
        picture: 'canape4.jpg',
        description: 'Canapé convertible en tissu  pour un confort optimal et un design contemporain',
        color: 'Grey',
        dimensions: 200,
        material: 'Fabric',
        item_condition: 'New',
        item_status: true,
        }
    ],

     // Ajout des données photo après la création de la table Photo
    Photo.bulkCreate([
      { id_item: 1, photo_rank: 1, src: 'https://images.selency.com/24b02aaf-3b9c-4ad7-88b4-1bb2943ab33c', alt: 'Description de l’image 1' },
      { id_item: 1, photo_rank: 2, src: 'https://images.selency.com/5c19044b-59b9-474f-b8b0-47b9e7d3e48d', alt: 'Description de l’image 2' },
      { id_item: 1, photo_rank: 3, src: 'https://images.selency.com/978bc04c-0a27-4018-97d1-f2a083401fab', alt: 'Description de l’image 3' },

      { id_item: 2, photo_rank: 1, src: 'https://images.selency.com/4fca6d94-e81b-4c50-a3f9-43a0b7493783', alt: 'Description de l’image 1' },
      { id_item: 2, photo_rank: 2, src: 'https://images.selency.com/4900bea4-bfa4-4131-b184-7b6177291873', alt: 'Description de l’image 2' },
      { id_item: 2, photo_rank: 3, src: 'https://images.selency.com/c9a2e528-6b0a-451f-801c-9d9b3ab322e9', alt: 'Description de l’image 3' },

      { id_item: 3, photo_rank: 1, src: 'https://images.selency.com/ada20333-8956-4b6d-86fc-7c877d99ad60', alt: 'Description de l’image 1' },
      { id_item: 3, photo_rank: 2, src: 'https://images.selency.com/76bb9b56-6948-43e3-8511-f14919084371', alt: 'Description de l’image 2' },
      { id_item: 3, photo_rank: 3, src: 'https://images.selency.com/1f1ec512-41f1-4d52-a1c2-61dc0831f1e7', alt: 'Description de l’image 3' },

      { id_item: 4, photo_rank: 1, src: 'https://images.selency.com/5d5faded-9ed7-49bf-bd07-17a98b4d7f0c', alt: 'Description de l’image 1' },
      { id_item: 4, photo_rank: 2, src: 'https://images.selency.com/ce21bd6c-d79b-434d-b72f-52b990404ceb', alt: 'Description de l’image 2' },
      { id_item: 4, photo_rank: 3, src: 'https://images.selency.com/3e2542f7-6d4c-4358-b74a-26793190518c', alt: 'Description de l’image 3' },

      { id_item: 5, photo_rank: 1, src: 'https://images.selency.com/4d48ef0d-e97a-4710-9200-bf4f1aca09c7', alt: 'Description de l’image 1' },
      { id_item: 5, photo_rank: 2, src: 'https://images.selency.com/49d48f76-de07-428e-b2ca-642120613efc', alt: 'Description de l’image 2' },
      { id_item: 5, photo_rank: 3, src: 'https://images.selency.com/ddf183c0-175f-426f-a8a0-473629d96a59', alt: 'Description de l’image 3' },

      { id_item: 6, photo_rank: 1, src: 'https://images.selency.com/8317c428-71ea-8409-a0bf-6098919deba0', alt: 'Description de l’image 1' },
      { id_item: 6, photo_rank: 2, src: 'https://images.selency.com/69f85e9d-5ffe-41cb-bc8f-281d69a6b708', alt: 'Description de l’image 2' },
      { id_item: 6, photo_rank: 3, src: 'https://images.selency.com/35212b24-8462-465c-94fc-618f60d85b68', alt: 'Description de l’image 3' },

      { id_item: 7, photo_rank: 1, src: 'https://images.selency.com/22901fe1-e932-fde5-92ff-2ac64885c9de', alt: 'Description de l’image 1' },
      { id_item: 7, photo_rank: 2, src: 'https://images.selency.com/bb71c45b-8683-4d7b-9452-53952f63bb12', alt: 'Description de l’image 2' },
      { id_item: 7, photo_rank: 3, src: 'https://images.selency.com/ae00e2b8-ece2-4b60-b57a-983d65a1c396', alt: 'Description de l’image 3' },

      { id_item: 8, photo_rank: 1, src: 'https://images.selency.com/e0c7d90f-4211-4c1f-9912-e2feef4a5d78', alt: 'Description de l’image 1' },
      { id_item: 8, photo_rank: 2, src: 'https://images.selency.com/6c3c820f-9091-4ba1-aed7-ddd1eee3ebb3', alt: 'Description de l’image 2' },
      { id_item: 8, photo_rank: 3, src: 'https://images.selency.com/4bf0fbe2-41aa-4d57-8650-8e366630ffab', alt: 'Description de l’image 3' },

      { id_item: 9, photo_rank: 1, src: 'https://images.selency.com/f367a126-0834-42ac-9f67-b93611a1c490', alt: 'Description de l\'image 1' },
      { id_item: 9, photo_rank: 2, src: 'https://images.selency.com/991231c7-e641-49b0-86f8-149731548d01', alt: 'Description de l\'image 2' },
      { id_item: 9, photo_rank: 3, src: 'https://images.selency.com/2dc9e2fb-633b-487d-a97b-029fbb413e9f', alt: 'Description de l\'image 3' },

      { id_item: 10, photo_rank: 1, src: 'https://images.selency.com/2fe63f03-d6bf-42f0-afe0-23c5b5c9f252', alt: 'Description de l\'image 1' },
      { id_item: 10, photo_rank: 2, src: 'https://images.selency.com/01b63ba8-7680-4e2f-a6c4-c52517e9c5ae', alt: 'Description de l\'image 2' },
      { id_item: 10, photo_rank: 3, src: 'https://images.selency.com/c098aab8-6d5a-4c26-83f1-da8f09ddf703', alt: 'Description de l\'image 3' },

    ])

    );
  })
  .then(() => {
    console.log('Données insérées avec succès dans la table furniture et Photo!');
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
