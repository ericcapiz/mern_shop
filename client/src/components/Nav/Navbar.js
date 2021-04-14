import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import './Navbar.css'

const Navbar = ({click}) => {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getcartCount =() => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }
    return (
        <nav className="navbar">
        <div className="navbar__logo">
            <Link className="nav__name" to="/">
                <h2>Psi Shop</h2>
            </Link>
        </div>
        <ul className="navbar__links">
            <li>
                <Link to="/cart" className="cart__link">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>
                        Cart
                        <span className="cartlogo__badge">{getcartCount()}</span>
                    </span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    Shop
                </Link>
            </li>
        </ul>
        <div className="hamburger__menu" onClick={click}>
        <FontAwesomeIcon icon={faBars} />
        </div>
        </nav>
    )
}

export default Navbar
