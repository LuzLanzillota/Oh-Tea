import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contacto.css";
import Button from "./Button";
import Footer from "./Footer";

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
            <div className="locales">
                <img src="\images\locales.jpg" alt="sucursales" />
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
            <Footer />
        </div>
    );
}

export default Contacto;

