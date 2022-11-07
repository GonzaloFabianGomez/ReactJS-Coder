import ItemDetail from './ItemDetail'
import {customFetch} from '../utils/customFetch';
import {products}  from '../utils/products';
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {

    const [datos, setDatos]= useState({})

    useEffect(() => {
        customFetch(2000, products[1])
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <ItemDetail item={datos} />
        </>
    )
}
export default ItemDetailContainer;