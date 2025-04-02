import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "./CartWidget";

function NavBar(props) {
    return (
        <header>
            <div>
                <Link to="/">
                    <img src="\public\images\OhTea.png" alt="Logotipo de Oh!Tea" />
                </Link>
            </div>
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/">INICIO</NavLink></li>
                    <li><NavLink to="/tienda">TIENDA</NavLink></li>
                    <li><NavLink to="/menu">MENÚ</NavLink></li>
                    <li><NavLink to="/sobreOhTea">SOBRE OH TEA</NavLink></li>
                    <li><NavLink to="/contacto">CONTACTO</NavLink></li>
                    <li><NavLink to="/cart"></NavLink> </li>
                    <li><NavLink to="/item"></NavLink></li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    );
}

export default NavBar;

