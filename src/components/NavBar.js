import Cart from './CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary bg-gradient shadow p-2 mb-5 rounded">

            <div className="container-fluid">

                <Link to='/' className="navbar-brand mb-0 h1" >ELECTRO $HOP</Link>

                <ul className="navbar-nav flex-row">

                    <li className="nav-item px-5">
                        <Link to='/category/9' className="nav-link active" aria-current="page">Tv, Audio y Video</Link>
                    </li>

                    <li className="nav-item px-5">
                        <Link to='/category/1' className="nav-link active">Electrodomésticos y Aires Ac.</Link>
                    </li>

                    <li className="nav-item px-5">
                        <Link to='/category/5' className="nav-link active">Celulares, Notebooks y Tecnología</Link>
                    </li>

                </ul>

                <Link to='/cart'><Cart /></Link>

            </div>

        </nav>
    )
}
export default NavBar;