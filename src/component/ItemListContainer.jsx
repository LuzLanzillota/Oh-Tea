import products from "../data/data";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { catid } = useParams();

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            if (catid) {
                const filtered = products.filter(
                    (product) => product.category === catid
                );
                setFilteredProducts(filtered);
            } else {
                setFilteredProducts(products);
            }
            setLoading(false);
        }, 1000);
    }, [catid]);


    return (
        <div>
            <ItemList products={filteredProducts} />
        </div>
    );
}

export default ItemListContainer;
