import { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";


function CartWidget() {
    const { countItemsInCart } = useContext(cartContext);
    const itemCount = countItemsInCart();


    return (
        <div className="cart">
            <Link to="/cart">
                <img src="/images/carro-de-la-compra.png" alt="Imagen de carrito" style={{ cursor: "pointer", height: "30px" }} />
            </Link>

            <span className="cart-text">{itemCount}</span>
        </div>
    );
}

export default CartWidget;