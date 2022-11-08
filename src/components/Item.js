const Item = ({ id, title, stock, price, pictureUrl }) =>{
    return (
        <>
            <div class="col-12 mb-2 col-md-4">
                <div class="card shadow p-3 mb-4 bg-body rounded">
                    <img src={pictureUrl} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{price}</p>
                        <p class="card-text">{stock}</p>
                        <a href="https://www.google.com/" class="btn btn-primary w-100">VER MÁS</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;