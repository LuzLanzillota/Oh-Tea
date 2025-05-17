import React, { useState, useEffect } from "react";

function Carrusel() {
    const imagenes = ["/images/carrusel-1.png", "/images/carrusel-2.png"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                width: "100vw",
                height: "110vh",
                overflow: "hidden",
            }}
        >
            <img
                src={imagenes[index]}
                alt={`Imagen ${index + 1}`}
                style={{
                    width: "100%",
                    height: "100%",
                    
                    transition: "opacity 0.5s ease-in-out"
                }}
            />
        </div>
    );
}

export default Carrusel;
