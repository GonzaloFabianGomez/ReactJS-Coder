import Cart from './CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar bg-info bg-gradient shadow p-2 mb-5 rounded">

            <div className="container-fluid">

                <a className="navbar-brand mb-0 h1" href="#">ELECTRO $HOP</a>

                <ul className="navbar-nav flex-row">

                    <li className="nav-item px-5">
                        <a className="nav-link active" aria-current="page" href="#">Categoría 1</a>
                    </li>

                    <li className="nav-item px-5">
                        <a className="nav-link" href="#">Categoría 2</a>
                    </li>

                    <li className="nav-item px-5">
                        <a className="nav-link" href="#">Categoría 3</a>
                    </li>

                    <li className="nav-item px-5">
                        <a className="nav-link" href="#">Categoría 4</a>
                    </li>

                </ul>

                <Cart />

            </div>

        </nav>
    )
}
export default NavBar;