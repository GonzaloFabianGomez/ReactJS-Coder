import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "./CartContext";



const Cart = () => {

    const { cartList, clear, removeItem, calcTotalPorItem, calcSubTotal, calcTotal} = useContext(CartContext)

    return (
        <>
                <div className="d-flex justify-content-evenly m-3">
                    <Link to='/'><button type="button" className="btn btn-primary">CONTINUAR COMPRANDO</button></Link>
                    {
                        cartList.length > 0
                        ? <button type="button" className="btn btn-danger" onClick={clear}>BORRAR TODO</button>
                        : <h2>Mi carrito</h2>
                    }
                </div>
                
                <div className="d-flex justify-content-between gap-3">
                    <div className="w-75">
                        {
                            cartList.length > 0
                            ?cartList.map(item => 

                                <div className="card mb-3 border border-end-0 border border-start-0" key={item.idItem}>
                                    <div className="row g-0">
                                        <div className="col-md-4 w-25">
                                            <img src={item.imageItem} className="img-fluid rounded-start" alt="..."/>
                                        </div>
                                        <div className="col-md-8 d-flex align-items-center">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.titleItem}</h5>
                                                <p className="card-text">Cantidad: {item.quantityItem} | $ {item.priceItem} c/u</p>
                                                <h6 className="card-text">$ {calcTotalPorItem(item.idItem)}</h6>
                                                <button type="button" className="btn btn-outline-danger" onClick={() => removeItem(item.idItem)}>Borrar Unidad</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)

                            :<h4>Su carrito está vacio</h4>
                        }
                    </div>
                    <div className="w-25">
                        {
                            cartList.length > 0 && 
                            <div className="card border border-4 border-dark">
                                <h5 className="card-header">Resumen del pedido</h5>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">Subtotal <span>{`$${calcSubTotal()}`} </span></p>
                                    <h5 className="card-title d-flex justify-content-between">TOTAL <span>{`$${calcTotal()}`} </span></h5>
                                    <button type='button' className="btn btn-dark">Chequear ahora</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
        </>
    );
}

export default Cart;