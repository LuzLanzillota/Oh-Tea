import { Link } from "react-router-dom";
import './sobreNosotros.css';
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
function SobreNosotros(params) {
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
            <div>
                <div className='primera-image'>
                    <img src="\images\sobre-oh-tea\conoce.png" alt="" />
                </div>
                <div className='imagenes'>
                    <div className='uno'>
                        <img src="\images\sobre-oh-tea\1.png" alt="imagen 1" />
                    </div>
                    <div>
                        <img src="\images\sobre-oh-tea\2.png" alt="imagen 2" />
                    </div>
                    <div>
                        <img src="\images\sobre-oh-tea\3.png" alt="imagen 3" />
                    </div>

                </div>
                <Footer />
            </div>
        </>
    );
}
export default SobreNosotros;