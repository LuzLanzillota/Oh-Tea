import { Link } from "react-router-dom";
import "./Footer.css"; 

function Footer() {
    return (
        <footer>
            <div className="logo-footer">
                <Link to="/">
                    <img src="./images/redes-sociales-footer/logosoloOhTea 2.png" alt="logo de Oh!Tea" />
                </Link>
            </div>
            <p>ⒸOh!Tea. Todos los derechos reservados <br /> 2025</p>
            <div className="redes-footer">
                <div><a href="https://api.whatsapp.com/send?phone=541122996645" target="_blank"><img src="../images/redes-sociales-footer/wpp.png" alt="WhatsApp" /></a></div>
                <div><a href="https://www.tiktok.com/@ohtea_argentina" target="_blank"><img src="../images/redes-sociales-footer/tiktok.png" alt="TikTok" /></a></div>
                <div><a href="https://www.instagram.com/ohtea_argentina/?hl=es" target="_blank"><img src="../images/redes-sociales-footer/instagram.png" alt="Instagram" /></a></div>
                <div><a href="https://www.facebook.com/ohteaargentina" target="_blank"><img src="../images/redes-sociales-footer/facebook.png" alt="Facebook" /></a></div>
            </div>
        </footer>
    );
}

export default Footer;
