import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id='home'>
      <h1>Bienvenue sur Adopte un Meuble !</h1>
      <Link to="/products">
        <button>Voir les produits</button>
      </Link>
    </div>
  );
};

export default Home;
