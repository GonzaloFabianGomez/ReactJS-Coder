import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

    return (
        <>
        {
            item.pictureUrl
            ?
            <div className='row'>
                <div class="card">
                <img src={item.pictureUrl} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <ItemCount stock={item.stock} initial={1}/>
            </div>

            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;