import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import './SideDrawer.css'

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["sidedrawer"];
    if(show){
        sideDrawerClass.push("show");
    }

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const getcartCount =() => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }
    return <div className={sideDrawerClass.join(" ")}>
        <ul className="sidedrawer__links" onClick={click}>
            <li>
                <Link to="/cart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>
                        Cart
                        <span className="sidedrawer__cartbadge">{getcartCount()}</span>
                    </span>
                </Link>
            </li>
            <li>
                <Link to="/">Shop</Link>
            </li>
        </ul>
    </div>
}

export default SideDrawer
