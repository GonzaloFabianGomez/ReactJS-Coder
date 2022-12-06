import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "./CartContext";



const Cart = () => {

    const test = useContext(CartContext);

    return (
        <>
            <div className="container">
                <h2>Mi carrito</h2>
                <div className="d-flex justify-content-evenly m-3">
                    <Link to='/'><button type="button" className="btn btn-primary">CONTINUAR COMPRANDO</button></Link>
                    {
                        (test.cartList.length > 0)
                        ? <button type="button" className="btn btn-danger" onClick={test.clear}>BORRAR TODO</button>
                        : <h4>Su carrito está vacio</h4>
                    }
                </div>
                
                <div className="d-flex justify-content-between gap-3">
                    <div className="w-75">
                        {
                            test.cartList.length > 0
                            ?test.cartList.map(item => 
                            <div key={item.id}>
                                <div className="card mb-3 border border-end-0 border border-start-0" key={item.id}>
                                    <div className="row g-0">
                                        <div className="col-md-4 w-25">
                                            <img src={item.pictureUrl} className="img-fluid rounded-start" alt="..."/>
                                        </div>
                                        <div className="col-md-8 d-flex align-items-center">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                                <p className="card-text">Cantidad: {item.quantity} | $ {item.price} c/u</p>
                                                <h6 className="card-text">$ {item.quantity * item.price}</h6>
                                                <button type="button" className="btn btn-outline-danger" onClick={() => test.removeItem(item.id)}>Borrar Unidad</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)

                            :<h6>Para seguir comprando, navegar por las categorías en el sitio, o busque su producto.</h6>
                        }
                    </div>
                    <div className="w-25">
                        {
                            test.cartList.length > 0 && 
                            <div className="card border border-4 border-dark">
                                <h5 className="card-header">Resumen del pedido</h5>
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-between">Subtotal <span>{`$${test.calcSubTotal()}`} </span></p>
                                    <h5 className="card-title d-flex justify-content-between">TOTAL <span>{`$${test.calcTotal()}`} </span></h5>
                                    <button type='button' className="btn btn-dark">Chequear ahora</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;