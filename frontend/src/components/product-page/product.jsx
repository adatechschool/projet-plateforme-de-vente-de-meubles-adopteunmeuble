import ProductDetails from "./productDetails.jsx";
import BuyBtn from "./buyButton.jsx";

function Product() {
    return (
        <>
            <div id="product">
                <div id="placeholderCarousel"></div>
                <div id="productMainSection">
                    <ProductDetails />
                    <BuyBtn />
                </div>
            </div>
        </>
    );
}

export default Product;
