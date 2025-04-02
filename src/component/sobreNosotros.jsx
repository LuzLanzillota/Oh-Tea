import { Link } from "react-router-dom";
import './sobreNosotros.css';
function SobreNosotros(params) {
    return (
        <div>
            <div className='primera-image'>
                <img src=".\images\sobre-oh-tea\conoce.png" alt="" />
            </div>
            <div className='imagenes'>
                <div className='uno'>
                    <img src=".\images\sobre-oh-tea\1.png" alt="imagen 1" />
                </div>
                <div>
                    <img src=".\images\sobre-oh-tea\2.png" alt="imagen 2" />
                </div>
                <div>
                    <img src=".\images\sobre-oh-tea\3.png" alt="imagen 3" />
                </div>

            </div>
            <footer>
                <div className="logo-footer">
                    <Link to="/">
                        <img src="./images/redes-sociales-footer/logosoloOhTea 2.png" alt="logo de Oh!Tea" />
                    </Link>

                </div>
                <p>ⒸOh!Tea. Todos los derechos reservados <br />
                    2025</p>
                <div className="redes-footer">
                    <div><a href="https://api.whatsapp.com/send?phone=541122996645" target="_blank"><img src=".\images\redes-sociales-footer\wpp.png" alt="" /></a></div>
                    <div><a href="https://www.tiktok.com/@ohtea_argentina" target="_blank"><img src=".\images\redes-sociales-footer\tiktok.png" alt="imagen de tiktok" /></a></div>
                    <div><a href="https://www.instagram.com/ohtea_argentina/?hl=es" target="_blank"><img src="./\images\redes-sociales-footer\instagram.png" alt="imagen de instagram" /></a></div>
                    <div><a href="https://www.facebook.com/ohteaargentina" target="_blank"><img src=".\images\redes-sociales-footer\facebook.png" alt="imagen de facebook" /></a></div>

                </div>
            </footer>
        </div>
    );
}
export default SobreNosotros;