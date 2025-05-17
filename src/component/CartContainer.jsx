import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import "./CartContainer.css";

function CartContainer() {
    const [orderCompleted, setOrderCompleted] = useState(false);
    const [orderId] = useState("2938-4885-9323"); // ID fake

    const { cartItems, removeItem, getTotalPrice, setCartItems } = useContext(cartContext);

    function handleCheckout() {
        setOrderCompleted(true);
        setCartItems([]);
    }

    function clearCart() {
        setCartItems([]);
    }

    return (
        <div className="cart-container">

            {cartItems.length === 0 && !orderCompleted ? (
                <p className="empty-cart">Tu carrito está vacío</p>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.img} alt="Imagen del producto" className="cart-img" />
                        <div className="cart-details">
                            <h3>{item.title}</h3>
                            <p>Precio: <span className="cart-price">${item.price}</span></p>
                            <p>Unidades: {item.count}</p>
                        </div>
                        <button className="remove-btn" onClick={() => removeItem(item.id)}>X</button>
                    </div>
                ))
            )}

            {cartItems.length > 0 && (
                <>
                    <div className="precioyboton">
                        <div className="c-total">
                            <div className="total">
                                <p>Total: ${getTotalPrice()}</p>
                            </div>
                        </div>

                        <button className="checkout-btn" onClick={handleCheckout}>
                        Comprar
                        </button>
                    </div>
                </>
            )}

            {orderCompleted && (
                <p className="realizada">Compra realizada. ID de la compra: {orderId}</p>
            )}
        </div>
    );
}

export default CartContainer;
