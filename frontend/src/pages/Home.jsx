import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id='home'>
      <h1>La plateforme de vente de meubles qui va vous aider à trouver le match parfait !</h1>
      <Link to="/products">
        <button>Voir les produits</button>
      </Link>
      <img src="../../public/img/accueil.jpg" alt="Adopte un Meuble" />
    </div>
  );
};

export default Home;
