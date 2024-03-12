import React, { useState, useEffect } from 'react';


function Carrousel() {

    //quand base de donnée connecté :

        //const [images, setImages] = useState([]);

        // useEffect(() => {
        //     // Logique pour récupérer les données de la base de données ======> fetch()
        // }, []);

    // TEST AVEC VALEUR EN DUR :

        const [images, setImages] = useState([
            {
                id: 1,
                src: "https://images.selency.com/4fca6d94-e81b-4c50-a3f9-43a0b7493783",
                alt: "Description de l'image 1"
            },
            {
                id: 2,
                src: "https://cdn.nvgallery.com/static/images/6372388a121f1593388339.jpg?width=700&height=500&fit=crop&quality=85,90",
                alt: "Description de l'image 2"
            },
            {
                id: 3,
                src: "https://cdn.nvgallery.com/static/images/6372388d2c649977042958.jpg?width=700&height=500&fit=crop&quality=85,90",
                alt: "Description de l'image 3"
            }
        ]);


    return (
        <section className="container-carrousel">
            <div className="slider-wrapper">
                <div className="slider">
                    {images.map((image, index) => (
                        <img id={`slide-${image.id}`} src={image.src} alt={image.alt} className="resizable-image" />
                    ))}
                </div>
                <div className="slider-nav">
                    {images.map(image => (
                        <a href={`#slide-${image.id}`}></a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Carrousel;