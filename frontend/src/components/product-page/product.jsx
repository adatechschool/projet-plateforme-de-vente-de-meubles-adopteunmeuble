import ProductDetails from "./productDetails.jsx";
import BuyBtn from "./buyButton.jsx";
import data from "../../../../bouchon-data.json";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Product({ productId }) {
    let id;

    useEffect(async () => {
        id = useParams();
        console.log(id);
    });

    function getProductData(productId) {
        let [product] = data.products.filter(
            (product) => product["id"] === productId
        );
        return product;
    }

    console.log(getProductData(productId));

    return (
        <div id="product">
            <div id="placeholderCarousel"></div>
            <div id="productMainSection">
                <ProductDetails productData={getProductData(productId)} />
                <p>{id}</p>
                <BuyBtn />
            </div>
        </div>
    );
}

export default Product;
