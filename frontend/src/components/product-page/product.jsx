import ProductDetails from "./productDetails.jsx";
import BuyBtn from "./buyButton.jsx";
import data from "../../../../bouchon-data.json";
import { useLoaderData, useParams } from "react-router-dom";

export async function loadProductData ({params}) {
    // insérer ici une requête fetch à la place de la ligne suivante :
    const [product] = data.products.filter((product) => product["id"] === parseInt(params.productId));
    return product;
}

function Product() {

    const productData = useLoaderData()
    
    return (
        <div id="product">
            <div id="placeholderCarousel"></div>
            <div id="productMainSection">
                <ProductDetails productData={productData} />
                <BuyBtn />
            </div>
        </div>
    );
}

export default Product;
