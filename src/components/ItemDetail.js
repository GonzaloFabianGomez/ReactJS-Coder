import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

    const onAdd = (message) => {
        alert("Cantidad agregada " + message + " unidades.");
    }

    return (
        <>
        {
            item.pictureUrl
            ?
            <div className='container-fluid'>
                <div className="card flex-row border-0">
                <img src={item.pictureUrl} class="card-img-top w-50" alt="..."/>
                    <div class="card-body d-flex flex-column justify-content-evenly border border-1 rounded-3">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">{item.description}</p>
                        <p class="card-text">{item.stock} Unidades disponibles</p>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                    </div>
                </div>
            </div>

            :   <div class="d-flex align-items-center justify-content-center">
                    <strong className='text-primary'>Loading...</strong>
                    <div class="spinner-border text-primary " role="status" aria-hidden="true"></div>
                </div>
        }
        </>
    );
}

export default ItemDetail;