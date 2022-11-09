import ItemDetail from './ItemDetail'
import {customFetch} from '../utils/customFetch';
import {products}  from '../utils/products';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [datos, setDatos]= useState({})
    const {idItem} = useParams()

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem) ))
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