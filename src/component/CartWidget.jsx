import { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";
import './CartWidget.css';

function CartWidget() {
    const { countItemsInCart } = useContext(cartContext);
    const itemCount = countItemsInCart();


    return (
        <div className="cart">
            <Link to="/cart" aria-label="Ir al carrito">
                <img src="/images/carro-de-la-compra.png" alt="Imagen de carrito" style={{ cursor: "pointer", height: "30px" }} />
            </Link>
            <div className="testo">
                <span className="cart-text">{itemCount}</span>
            </div>

        </div>
    );
}

export default CartWidget;