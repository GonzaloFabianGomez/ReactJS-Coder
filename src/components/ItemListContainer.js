import { customFetch } from '../utils/customFetch';
import { products } from '../utils/products';
// import Item from './Item';
const ItemListContainer = (props) => {

    customFetch(2000, products)
        .then(response => console.log(response))
        .catch(err => console.log(err))

    return (
        <>
        <div className="alert alert-info" role="alert">
            {props.text}
        </div>
        {/* <Item /> */}
        </>
    )
}
export default ItemListContainer;