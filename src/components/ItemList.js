import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <>
            {
            items.length > 0
            ? items.map(item => <Item key={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl} stock={item.stock} />)
            : <div className="d-flex align-items-center justify-content-center">
                <strong className='text-primary'>Loading...</strong>
                <div className="spinner-border text-primary " role="status" aria-hidden="true"></div>
            </div>
            }
        </>
    )
}
export default ItemList;