import { Link } from "react-router-dom";
import './sobreNosotros.css';
import Footer from "./Footer";
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
            <Footer />
        </div>
    );
}
export default SobreNosotros;