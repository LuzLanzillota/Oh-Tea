import { Link } from "react-router-dom";
import Button from "./Button";
import "./Innovacion.css";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
function Innovacion() {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (showLoader) {
        return <Loader />;
    }

    return (
        <>
            <div className="innovacion">
                <Link to="/sobreOhTea">
                <img src="/images/Inovacion-en-te.png" alt="Imagen principal de inicio" />
                
            </Link>

             

                <div className="bebidas">
                    <h1>Bebidas del día</h1>
                    <h2>Disfrutá de una bebida distinta cada <br /> día, de Lunes a Viernes.</h2>
                    <img src="/images/bebidas-del-dia/1.png" alt="Imagen de bebida del día" />
                    <div className="ver-mas-sabores">
                        <Link to="/menu">
                            <Button>Ver Más Sabores</Button>
                        </Link>
                    </div>
                </div>
                <div className="banner-te">
                    <img src="/images/bebidas-del-dia/2.png" alt="banner de tés" />
                </div>
                <div className="fotitos">
                    <img src="/images/bebidas-del-dia/3.png" alt="fotos de bebidas" />
                    <p>Seguinos en nuestras redes!</p>
                    <div className="redes">
                        <div><a href="https://www.tiktok.com/@ohtea_argentina" target="_blank"><img src="/images/bebidas-del-dia/tik-tok.png" alt="imagen de tiktok" /></a></div>
                        <div><a href="https://www.instagram.com/ohtea_argentina/?hl=es" target="_blank"><img src="/images/bebidas-del-dia/instagram.png" alt="imagen de instagram" /></a></div>
                        <div><a href="https://www.facebook.com/ohteaargentina" target="_blank"><img src="/images/bebidas-del-dia/facebook.png" alt="imagen de facebook" /></a></div>
                    </div>
                    <div className="sucursales">
                        <img src="\images\bebidas-del-dia\sucursal.png" alt="imagen de nuevas sucursales" />
                        <div className="ver-sucursales">
                            <Link to="/contacto">
                                <Button>Ver Sucursales</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="forma-parte">
                        <img src="\images\forma-parte.png" alt="" />
                        <div className="dejar-cv">
                            <Link to="/contacto"> <Button>Dejarnos tu CV</Button></Link>

                        </div>
                    </div>
                </div>
                <Footer />
            </div></>
    );

}

export default Innovacion;
