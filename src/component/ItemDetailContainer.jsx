import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/data";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const foundProduct = products.find((item) => item.id === Number(id)); 
        setProduct(foundProduct);
    }, [id]);

    if (!product) return <p className="error">Producto no encontrado.</p>;

    return <ItemDetail {...product} id={id} />;
}

export default ItemDetailContainer;

