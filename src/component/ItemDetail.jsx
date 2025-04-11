import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import "./ItemDetail.css";
import Footer from "./Footer";

function ItemDetail(props) {
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const { price, title, img, id } = props;
    const { addItem } = useContext(cartContext);

    function onSubmitCount(count) {
        addItem({ id, price, title, count, img });
        setIsAddedToCart(true);
    }

    return (
        <div>
            <div className="detail-container">
                <div className="detail">
                    <div className="product-detail">
                        <img src={props.img} alt="Imagen del producto" className="product-img" />
                        <div className="product-info">
                            <h3 className="product-title">{props.title}</h3>

                            <p className="product-price">$ {props.price}</p>

                            <div className="product-description space-y-4 text-gray-800">
                                <p>{props.description[0]}</p>

                                <p className="font-bold">{props.description[1]}</p>

                                <ul className="list-disc list-inside">
                                    {props.description.slice(2, 5).map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>

                                <p>{props.description[5]}</p>
                            </div>


                            <div className="product-count">
                                {isAddedToCart ? (
                                    <Link to="/cart">
                                        <button className="btn-view-cart">Ver Carrito</button>
                                    </Link>
                                ) : (
                                    <ItemCount onAdd={onSubmitCount} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ItemDetail;
