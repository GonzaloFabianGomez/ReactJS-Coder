import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { customFetch } from '../utils/customFetch';
import { products } from '../utils/products';
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
        <div>
            {props.text}
            <div  className="row">
                <ItemList items={datos}/>
                <ItemCount />
            </div>
        </div>
        </>
    )
}
export default ItemListContainer;