import ItemList from './ItemList';
import { customFetch } from '../utils/customFetch';
import { products } from '../utils/products';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const [datos, setDatos]= useState([])
    const {idCategory} = useParams()


    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory])

    return (
        <>
        <div>
            {props.text}
            <div  className="row">
                <ItemList items={datos}/>
            </div>
        </div>
        </>
    )
}
export default ItemListContainer;