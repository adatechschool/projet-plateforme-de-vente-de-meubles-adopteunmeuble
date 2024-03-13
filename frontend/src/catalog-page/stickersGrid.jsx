import Sticker from "./sticker"
import "../styles/components/sticker.css"
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

// FETCH : Fonction qui va récupérer les données de la base pour le catalogue complet des meubles : 
export async function getData() {
    const response = await fetch(`http://localhost:3000/products`);
    const json = await response.json();
    console.log(json)
    return json;
}

function StickersGrid() {
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Chambre", "Salon", "Cuisine", "Salle de Bain", "Entrée"];
    // const [catalog, setCatalog] = useState([]);

    // useEffect(() => {
    //     async function loadData() {
    //         const catalog = await getData();
    //         setCatalog(catalog);
    //     }
    //     loadData();
    // }, []);

    const catalog = useLoaderData()
    return (
        <div className="products">
        <ul className="radio-container">
          {radios.map((category) => (
            <li>
              <input
                type="radio"
                id={category}
                name="productRadio"
                checked={category === selectedRadio}
                onChange={(e) => setSelectedRadio(e.target.id)}
              />
              <label htmlFor={category}>{category}</label>
            </li>
          ))}
        </ul>
        {selectedRadio && (
          <button onClick={() => setSelectedRadio("")}>
            Annuler la recherche
          </button>
        )}
        <ul className="list-products">
          {catalog.map((product, index) => {
            if (selectedRadio && product.category !== selectedRadio) {
              return null;
            }
            return <Sticker product={product} key={index} />;
            }
            )}
        </ul>
      </div>
    )
}



export default StickersGrid