import { Link } from "react-router-dom";
import Button from "./Button";
import "./Item.css";
import ItemCount from "./ItemCount";

function Item(props) {
    const { price, title, text, img, id, } = props;


    return (
        <div className="container">
            <div className="card">
                <img src={img} alt="product img" />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{text}</p>

                    <p className="original-price">
                        ${price}
                    </p>
                    <Link to={`/item/${id}`}>
                        <Button>Ver Detalle</Button>
                    </Link>
                </div>
            </div>
        </div>

    );
}

export default Item;
