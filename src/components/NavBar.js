import Cart from './CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar bg-primary bg-gradient shadow p-2 mb-5 rounded">

            <div className="container-fluid">

                {/* <a className="navbar-brand mb-0 h1" href="#">ELECTRO $HOP</a> */}
                <Link to='/' style={{textDecoration: "none", color: "white"}}>ELECTRO $HOP</Link>

                <ul className="navbar-nav flex-row">

                    <li className="nav-item px-5">
                        {/* <a className="nav-link active" aria-current="page" href="#">Categoría 1</a> */}
                        <Link to='/category/9' style={{textDecoration: "none", color: "white"}}>Categoría 1</Link>
                    </li>

                    <li className="nav-item px-5">
                        {/* <a className="nav-link" href="#">Categoría 2</a> */}
                        <Link to='/category/1' style={{textDecoration: "none", color: "white"}}>Categoría 2</Link>
                    </li>

                    <li className="nav-item px-5">
                        {/* <a className="nav-link" href="#">Categoría 3</a> */}
                        <Link to='/category/5' style={{textDecoration: "none", color: "white"}}>Categoría 3</Link>
                    </li>

                    <li className="nav-item px-5">
                        {/* <a className="nav-link" href="#">Categoría 4</a> */}
                        <Link to='/category/7' style={{textDecoration: "none", color: "white"}}>Categoría 4</Link>
                    </li>

                </ul>

                <Cart />

            </div>

        </nav>
    )
}
export default NavBar;