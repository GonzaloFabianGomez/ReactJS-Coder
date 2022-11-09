import { Link } from "react-router-dom";

const Item = ({ id, title, stock, price, pictureUrl }) =>{
    return (
        <>
            <div className="col-12 mb-2 col-md-4">
                <div className="card shadow p-3 mb-4 bg-body rounded">
                    <img src={pictureUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{`$${price}`}</p>
                        <p className="card-text">{stock} Unidades</p>
                        <Link to={`/item/${id}`} className="btn btn-primary w-100">VER MÁS</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;