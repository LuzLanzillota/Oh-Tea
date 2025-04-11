import FlexContainer from "./FlexContainer";
import Item from "./Item";

function ItemList(props) {
    return (
        <div>
            <FlexContainer>
                {props.products.map((item) => (
                    <Item key={item.id} {...item} />
                ))}
            </FlexContainer>

        </div>
    );
}

export default ItemList;