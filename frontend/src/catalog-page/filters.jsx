import React, { useEffect, useState } from "react";


const Products = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(6);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Chambre", "Salon", "Cuisine", "Salle de Bain", "Entrée"];

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    fetch(`http://localhost:3000/`)
    .then((response) => setData(response.data))
  }, []);

  return (
    <div className="products">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="12"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
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
      <ul>
        {data
          .filter((product) => product.categories[0].includes(selectedRadio))
          .slice(0, rangeValue)
          .map((product, index) => (
            <Card key={index} country={product} />
          ))}
      </ul>
    </div>
  );
};

export default Products;
