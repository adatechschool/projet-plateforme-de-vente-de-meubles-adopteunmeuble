import React, { useState, useEffect } from 'react';


function Carrousel({pictures}) {

    //quand base de donnée connecté :

        //const [images, setImages] = useState([]);

        // useEffect(() => {
        //     // Logique pour récupérer les données de la base de données ======> fetch()
        // }, []);

    // TEST AVEC VALEUR EN DUR :

        // const [images, setImages] = useState([
        //     {
        //         id: 1,
        //         src: "https://cdn.nvgallery.com/static/images/637238878af52216652386.jpg?width=700&height=500&fit=crop&quality=85,90",
        //         alt: "Description de l'image 1"
        //     },
        //     {
        //         id: 2,
        //         src: "https://cdn.nvgallery.com/static/images/6372388a121f1593388339.jpg?width=700&height=500&fit=crop&quality=85,90",
        //         alt: "Description de l'image 2"
        //     },
        //     {
        //         id: 3,
        //         src: "https://cdn.nvgallery.com/static/images/6372388d2c649977042958.jpg?width=700&height=500&fit=crop&quality=85,90",
        //         alt: "Description de l'image 3"
        //     }
        // ]);


    return (
        <section className="container-carrousel">
            <div className="slider-wrapper">
                <div className="slider">
                    {pictures.map((picture, index) => (
                        <img id={`slide-${picture.id}`} src={picture.src} alt={picture.alt} className="resizable-image" />
                    ))}
                </div>
                <div className="slider-nav">
                    {pictures.map(picture => (
                        <a href={`#slide-${picture.id}`}></a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Carrousel;