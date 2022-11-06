import ItemCount from './ItemCount';
import { customFetch } from '../utils/customFetch';
import { products } from '../utils/products';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
const ItemListContainer = (props) => {
    const [datos, setDatos]= useState([])

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
        <div className="row">
            {props.text}
            <ItemList items={datos}/>
            <ItemCount />
        </div>
        </>
    )
}
export default ItemListContainer;