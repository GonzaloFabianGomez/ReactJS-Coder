import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);

    const test = useContext(CartContext)

    const onAdd = (quantity) => {
        alert("Cantidad agregada " + quantity + " unidades.");
        setItemCount(quantity);
        test.addItem(item, quantity)
    }

    return (
        <>
        {
            item && item.pictureUrl
            ?
            <div className='container-fluid'>
                <div className="card flex-row border-0">
                <img src={item.pictureUrl} className="card-img-top w-50" alt="..."/>
                    <div className="card-body d-flex flex-column justify-content-evenly border border-1 rounded-3">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                        <div className=''>
                            <div className='d-flex justify-content-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                </svg>
                                <p className='ps-2'>
                                    Envio GRATIS a Domicilio
                                </p>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" className="bi bi-shop" viewBox="0 0 16 16">
                                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                                </svg>
                                <p className='ps-2'>
                                    Retiro GRATIS en Sucursal
                                </p>
                            </div>
                        </div>
                        <p className="card-text">{item.stock} Unidades disponibles</p>

                        {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                        : <Link to='/cart'><button type="button" className="btn btn-dark">Terminar mi compra</button></Link>
                        }
                        
                    </div>
                </div>
            </div>

            :   <div className="d-flex align-items-center justify-content-center">
                    <strong className='text-primary'>Loading...</strong>
                    <div className="spinner-border text-primary " role="status" aria-hidden="true"></div>
                </div>
        }
        </>
    );
}

export default ItemDetail;