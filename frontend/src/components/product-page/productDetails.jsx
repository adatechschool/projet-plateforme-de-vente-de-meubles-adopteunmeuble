function ProductDetails({productData}) {

    // ci-dessous : tentative pour optimiser le code
    // let productDetails = [];
    // console.log(productData)
    // for (let key in productData) {
    //     console.log(`${key} ${productData[key]}`)
    //     productDetails.push({nom:key, valeur:productData[key]});
    // }
    // productDetails = productDetails.map(detail => {
    //     return (
    //         <div className="detail" key={detail.nom}>
    //             <div className="detail-label">{detail.nom}</div>
    //             <div className="detail-value">{detail.valeur}</div>
    //         </div>
    //     )
    // })

    return (
        <div id="productDetails">
            <div id="productName">{productData.name}</div>
            <div className="detail">
                <div className="detail-label">Prix</div>
                <div className="detail-value">{productData.price}</div>
            </div>
            <div className="detail">
                <div className="detail-label">Categorie</div>
                <div className="detail-value">{productData.category}</div>
            </div>
            <div className="detail">
                <div className="detail-label">Description</div>
                <div className="detail-value">{productData.description}</div>
            </div>
            <div className="detail">
                <div className="detail-label">Dimensions</div>
                <div className="detail-value">{productData.dimensions}</div>
            </div>
            <div className="detail">
                <div className="detail-label">Couleur</div>
                <div className="detail-value">{productData.color}</div>
            </div>
            <div className="detail">
                <div className="detail-label">Matières</div>
                <div className="detail-value">{productData.material}</div>
            </div>
            <div className="detail">
                <div className="detail-label">Condition</div>
                <div className="detail-value">{productData.condition}</div>
            </div>
            <div className="detail">
                <div className="detail-label">Statut</div>
                <div className="detail-value">{productData.status ? "Disponible" : "Vendu"}</div>
            </div>
        </div>
    );
}

export default ProductDetails;
