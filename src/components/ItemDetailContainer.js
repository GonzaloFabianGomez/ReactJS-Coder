import ItemDetail from './ItemDetail'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../utils/firestoreFetch";

const ItemDetailContainer = () => {

    const [datos, setDatos]= useState({})
    const {idItem} = useParams()

    useEffect(() => {
        firestoreFetchOne(idItem)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idItem])

    return (
        <>
            <ItemDetail item={datos} />
        </>
    )
}
export default ItemDetailContainer;