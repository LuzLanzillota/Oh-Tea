import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";
import CartWidget from "./CartWidget";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      {/* LOGO */}
      <div className="logo">
        <Link to="/">
          <img src="/images/OhTea.png" alt="Logotipo de Oh!Tea" />
        </Link>
      </div>

      {/* NAV */}
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <ul>
          <li><NavLink to="/">INICIO</NavLink></li>
          <li><NavLink to="/tienda">TIENDA</NavLink></li>
          <li><NavLink to="/menu">MENÚ</NavLink></li>
          <li><NavLink to="/sobreOhTea">SOBRE OH TEA</NavLink></li>
          <li><NavLink to="/contacto">CONTACTO</NavLink></li>
        </ul>
      </nav>

      {/* CART + HAMBURGER */}
      <div className="nav-actions">
        

        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <span className="material-icons">dehaze</span>
        </button>

        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
