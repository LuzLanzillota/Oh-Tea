import { Link } from "react-router-dom";
import Button from "./Button";
import "./Item.css";

function Item({ id, price, title, text, img }) {
    return (
        <div className="item-container">
            <div className="card">
                <img src={img} alt={`Imagen de ${title}`} />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{text}</p>
                    <div className="card-price-container">
                        <p className="original-price">${price}</p>
                    </div>
                    <Link to={`/item/${id}`}>
                        <Button>Ver más</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;


