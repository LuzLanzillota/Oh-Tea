import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contacto.css";
import Button from "./Button";

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
    };

    return (
        <div>
            <h1>Nuestras sucursales</h1>
            <div className="card">
                <img src="./images/Nuestras sucursales/sucursales.png" alt="sucursales" />
            </div>

            <div className="form-section">
                <div className="text-container">
                    <h2>Comunicate <br /> con nosotros</h2>
                    <p>
                        Si estás interesado en trabajar con nosotros o tenés alguna pregunta,
                        no dudes en contactarnos. ¡Estamos para vos!
                    </p>
                </div>

                <div className="form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <label>Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />

                        <label>Mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label>Escribinos tu mensaje</label>
                        <textarea
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            required
                        />
                        <Button type="submit" className="btn-enviar">Enviar</Button>
                    </form>
                </div>
            </div>

            <footer>
                <div className="logo-footer">
                    <Link to="/">
                        <img src="./images/redes-sociales-footer/logosoloOhTea 2.png" alt="logo de Oh!Tea" />
                    </Link>
                </div>
                <p>ⒸOh!Tea. Todos los derechos reservados <br /> 2025</p>
                <div className="redes-footer">
                    <div><a href="https://api.whatsapp.com/send?phone=541122996645" target="_blank"><img src="./images/redes-sociales-footer/wpp.png" alt="WhatsApp" /></a></div>
                    <div><a href="https://www.tiktok.com/@ohtea_argentina" target="_blank"><img src="./images/redes-sociales-footer/tiktok.png" alt="TikTok" /></a></div>
                    <div><a href="https://www.instagram.com/ohtea_argentina/?hl=es" target="_blank"><img src="./images/redes-sociales-footer/instagram.png" alt="Instagram" /></a></div>
                    <div><a href="https://www.facebook.com/ohteaargentina" target="_blank"><img src="./images/redes-sociales-footer/facebook.png" alt="Facebook" /></a></div>
                </div>
            </footer>
        </div>
    );
}

export default Contacto;

