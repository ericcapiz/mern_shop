import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
        <div className="navbar__logo">
            <h2>Psi Shop</h2>
        </div>
        <ul className="navbar__links">
            <li>
                <Link to="/cart" className="cart__link">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>
                        Cart
                        <span className="cartlogo__badge">0</span>
                    </span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    Shop
                </Link>
            </li>
        </ul>
        <div className="hamburger__menu">
        <FontAwesomeIcon icon={faBars} />
        </div>
        </nav>
    )
}

export default Navbar
