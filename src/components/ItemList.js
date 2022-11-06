import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <>
            {
            items.length > 0
            ? items.map(item => <Item key={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl} stock={item.stock} />)
            : <p>Cargando...</p>
            }
        </>
    )
}
export default ItemList;