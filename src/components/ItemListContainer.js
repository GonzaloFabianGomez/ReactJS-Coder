import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utils/firestoreFetch";

const ItemListContainer = (props) => {
    const [datos, setDatos]= useState([])
    const {idCategory} = useParams()


    useEffect(() => {
        firestoreFetch(idCategory)
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