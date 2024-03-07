//Define the categories

const data = {

    categories: [

     {

            id: 1,
            name: "Canapé très joli",
            category: "Canapé",
            price: 7000,
            picture: "url",
            description: "vraiment très beau",
            color: "violet",
            dimensions: "60x100x250",
            material: "leather",
            condition: "reallllly good",
            status: true

     },

     {

            id: 2,
            name: "Table basse design",
            category: "Table basse",
            price: 1500,
            picture: "url",
            description: "https://example.com/table-basse.jpg",
            color: "noir",
            dimensions: "80x40x30",
            material: "verre trempé",
            condition: "excellent",
            status: true


     },

     {


        "id": 3,
        "name": "Fauteuil confortable",
        "category": "Fauteuil",
        "price": 2000,
        "picture": "https://example.com/fauteuil.jpg",
        "description": "Rembourrage en mousse haute densité",
        "color": "gris clair",
        "dimensions": "60x60x90",
        "material": "tissu",
        "condition": "très bon état",
        "status": true



    },

    {

            "id": 4,
            "name": "Bureau ergonomique",
            "category": "Bureau",
            "price": 3000,
            "picture": "https://example.com/bureau.jpg",
            "description": "Design compact et fonctionnel",
            "color": "blanc",
            "dimensions": "120x60x75",
            "material": "bois massif",
            "condition": "bon état général",
            "status": false




    },


    {

            "id": 5,
            "name": "Lampe LED colorée",
            "category": "Luminaire",
            "price": 100,
            "picture": "https://example.com/lampe-led.jpg",
            "description": "Éclairage d'ambiance personnalisé",
            "color": "rouge",
            "dimensions": "20x20x20",
            "material": "plastique",
            "condition": "neuf",
            "status": true



    },

    {

            "id": 6,
            "name": "Tapis oriental vintage",
            "category": "Tapis",
            "price": 800,
            "picture" : "https://example.com/tapis-oriental.jpg",
            "description" : "Motifs complexes et couleurs vives",
            "color": "multicolore",
            "dimensions": "150x200",
            "material": "laine",
            "condition": "usagé mais entretenu",
            "status" : true




    },




    ],

},





// Creating a button
function MyButton() {
    return (
      <button>
        Filters
      </button>
    );
  }
  
  export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
    );
  }
  





//Click to event
// function MyButton() {

//     function handleClick [

//     //event

//  ]


// return (

//     <button onClick = {handleClick}>
//         Filter


//     </button>
// )

// }

import React, { useState } from 'react';

function ComponentName() {
  const [isOpen, dispatch] = useState(false);

  // Function that toggles the side panel on click
  const toggleSidePanel = () => {
    dispatch({
      type: 'SET_IS_OPEN',
      payload: !isOpen,
    });
  };

  // Conditional rendering for the filter button
  const renderButton = () => {
    return (
      <button onClick={toggleSidePanel}>Filter</button>
    );
  };

  renderButton;

  export default filters;