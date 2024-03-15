import React from "react";
import "../styles/components/header.css"; // Import the CSS file
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <Link to="/">
        <h2 id="website-title">
          Adopte <br /> un Meuble
        </h2>
      </Link>
      <Link to="/newFurniture">
        <button class="btn-to-products">Déposer une annonce</button>
      </Link>
      <div id="user-actions">
        <div className="icon-text-container">
          <img
            src="../../public/img/icons8-coeur-avec-pouls-50.png"
            alt="Wishlist"
            className="icon"
          />{" "}
          Favoris
        </div>
        <div className="icon-text-container">
          <img
            src="../../public/img/icons8-utilisateur-30.png"
            alt="User Account"
            className="icon"
          />{" "}
          Mon compte
        </div>
      </div>
    </div>
  );
}

export default Header;
