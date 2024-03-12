import ProductDetails from "./productDetails.jsx";
import BuyBtn from "./buyButton.jsx";
import Carrousel from "./carrousel.jsx";
import { useLoaderData } from "react-router-dom";

// FETCH : Fonction qui va récupérer les données de la base pour ce composant précis : 
export async function dataProductLoader({params}) {
    const productId = params.productId
   
    const response = await fetch(`http://localhost:3000/${productId}`);
    const json = await response.json();

    return json;
}

//AJOUTER CES LIGNES CI-DESSOUS DANS LE FICHIER SERVER.JS
//Middleware pour gérer les CORS
// app.use((req, res, next) => {
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Content, Accept, Authorization"
//     );
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     next();
//   });


function Product() {
    const productData = useLoaderData()

    return (
     <>
            <div id="product">
                <Carrousel />
                <div id="productMainSection">
                <ProductDetails productData={productData} />
                <BuyBtn />
                </div>
            </div>
            </>
    );
}

export default Product;
