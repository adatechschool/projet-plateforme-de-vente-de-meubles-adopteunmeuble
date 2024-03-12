// import data from "../../assets/bouchon-data.json"
import Sticker from "./sticker"
import "../../styles/components/sticker.css"
import { useLoaderData } from "react-router-dom";

// FETCH : Fonction qui va récupérer les données de la base pour ce composant précis : 
export async function dataCatalogLoader() {
    const response = await fetch(`http://localhost:3000/`);
    const json = await response.json();
    console.log(json);
    return json;
}

function StickersGrid() {
    const catalog = useLoaderData();
    console.log(catalog);

    return (
        <div id="stickers-grid">
            {catalog.map((product, index) => {
                console.log(product);
                console.log("index", index);
                <Sticker key={index} product={product} />
            })}
        </div>
    )
}


export default StickersGrid